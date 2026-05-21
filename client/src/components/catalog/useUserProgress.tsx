import { openAlertDialog } from "@/components/dialogs/alert-dialogs/alert-dialog.store";
import { useUserContext } from "@/hooks/use-user";
import { collection } from "@/lib/pocketbase";
import type { UserBossRecord, UserItemRecord } from "@/types/pocketbase";
import { Collections } from "@/types/pocketbase";
import { useNavigate } from "@tanstack/react-router";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

export type ProgressKind = "boss" | "item";

type ProgressRecord = UserBossRecord | UserItemRecord;

type UserProgressContextValue = {
  isLoading: boolean;
  isDone: (targetId: string) => boolean;
  toggle: (targetId: string) => void;
};

const UserProgressContext = createContext<UserProgressContextValue | null>(null);

const configByKind = {
  boss: {
    collection: Collections.UserBosses,
    targetField: "boss" as const,
  },
  item: {
    collection: Collections.UserItems,
    targetField: "item" as const,
  },
} as const;

type UserProgressProviderProps = {
  kind: ProgressKind;
  children: ReactNode;
};

export const UserProgressProvider: React.FC<UserProgressProviderProps> = ({ kind, children }) => {
  const { user, isAuthenticated } = useUserContext();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [records, setRecords] = useState<ProgressRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { collection: collectionName, targetField } = configByKind[kind];

  useEffect(() => {
    if (!isAuthenticated || !user) {
      setRecords([]);
      setIsLoading(false);
      return;
    }

    let cancelled = false;
    setIsLoading(true);

    collection(collectionName)
      .getFullList<ProgressRecord>({
        filter: `user = "${user.id}"`,
      })
      .then((list) => {
        if (!cancelled) setRecords(list);
      })
      .catch(() => {
        if (!cancelled) setRecords([]);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [collectionName, isAuthenticated, user]);

  const recordByTargetId = useMemo(() => {
    const map = new Map<string, ProgressRecord>();
    for (const record of records) {
      map.set(record[targetField], record);
    }
    return map;
  }, [records, targetField]);

  const promptLogin = useCallback(() => {
    openAlertDialog(
      () => {
        void navigate({ to: "/login" });
      },
      {
        title: t("auth.loginRequiredTitle"),
        description: t("auth.loginRequiredDescription"),
        confirmLabel: t("auth.loginConfirm"),
        cancelLabel: t("cancel"),
      },
    );
  }, [navigate, t]);

  const toggle = useCallback(
    (targetId: string) => {
      if (!isAuthenticated || !user) {
        promptLogin();
        return;
      }

      const existing = recordByTargetId.get(targetId);

      if (existing) {
        const nextDone = !existing.isDone;
        void collection(collectionName)
          .update<ProgressRecord>(existing.id, { isDone: nextDone })
          .then((updated) => {
            setRecords((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
          });
        return;
      }

      void collection(collectionName)
        .create<ProgressRecord>({
          user: user.id,
          [targetField]: targetId,
          isDone: true,
        })
        .then((created) => {
          setRecords((prev) => [...prev, created]);
        });
    },
    [collectionName, isAuthenticated, promptLogin, recordByTargetId, targetField, user],
  );

  const isDone = useCallback((targetId: string) => recordByTargetId.get(targetId)?.isDone === true, [recordByTargetId]);

  const value = useMemo(() => ({ isLoading, isDone, toggle }), [isDone, isLoading, toggle]);

  return <UserProgressContext.Provider value={value}>{children}</UserProgressContext.Provider>;
};

export const useUserProgress = (): UserProgressContextValue => {
  const ctx = useContext(UserProgressContext);
  if (!ctx) {
    throw new Error("useUserProgress must be used within UserProgressProvider");
  }
  return ctx;
};
