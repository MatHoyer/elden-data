import { createRouter } from "@tanstack/react-router";
import type { UserRecord } from "@/types/pocketbase";
import { Route as rootRoute } from "./routes/__root";
import { Route as indexRoute } from "./routes/index";
import { Route as loginRoute } from "./routes/login";
import { Route as registerRoute } from "./routes/register";

export type AuthContext = {
  user: UserRecord | null;
  isAuthenticated: boolean;
};

const routeTree = rootRoute.addChildren([indexRoute, loginRoute, registerRoute]);

export const router = createRouter({
  routeTree,
  context: {
    user: null,
    isAuthenticated: false,
  } satisfies AuthContext,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
