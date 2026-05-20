import { UserContext } from "@/components/user/UserContext";
import type { UserContextValue } from "@/components/user/UserProvider";
import type { UserRecord } from "@/types/pocketbase";
import { useContext } from "react";

export const useUserContext = (): UserContextValue => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUserContext must be used within UserProvider");
  }
  return ctx;
};

/** Returns the authenticated user, or `null` if not logged in. */
export const useUser = (): UserRecord | null => {
  return useUserContext().user;
};

/** Returns the authenticated user; throws if not logged in. */
export const useRequiredUser = (): UserRecord => {
  const { user, isLoading } = useUserContext();
  if (isLoading) {
    throw new Error("useRequiredUser called before auth state is ready");
  }
  if (!user) {
    throw new Error("useRequiredUser requires an authenticated user");
  }
  return user;
};
