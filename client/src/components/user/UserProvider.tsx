import { pb } from "@/lib/pocketbase";
import type { UserRecord } from "@/types/pocketbase";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { UserContext } from "./UserContext";

export type UserContextValue = {
  user: UserRecord | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

const userFromAuth = (): UserRecord | null => {
  if (!pb.authStore.isValid) return null;
  const record = pb.authStore.record;
  return record ? (record as UserRecord) : null;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserRecord | null>(userFromAuth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    pb.collection("users")
      .authRefresh()
      .catch(() => pb.authStore.clear())
      .finally(() => {
        if (!cancelled) {
          setUser(userFromAuth());
          setIsLoading(false);
        }
      });

    const unsubscribe = pb.authStore.onChange(() => {
      setUser(userFromAuth());
    }, true);

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, []);

  const value = useMemo<UserContextValue>(
    () => ({
      user,
      isAuthenticated: user !== null,
      isLoading,
    }),
    [user, isLoading],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
