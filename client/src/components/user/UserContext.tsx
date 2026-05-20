import { createContext } from "react";
import type { UserContextValue } from "./UserProvider";

export const UserContext = createContext<UserContextValue | null>(null);
