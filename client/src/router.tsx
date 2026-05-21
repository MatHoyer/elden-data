import { createRouter } from "@tanstack/react-router";
import type { UserRecord } from "@/types/pocketbase";
import { Route as rootRoute } from "@/routes/__root";
import { Route as bossesRoute } from "@/routes/bosses";
import { Route as indexRoute } from "@/routes/index";
import { Route as itemsRoute } from "@/routes/items";
import { Route as locationsRoute } from "@/routes/locations";
import { Route as loginRoute } from "@/routes/login";
import { Route as profileRoute } from "@/routes/profile";
import { Route as registerRoute } from "@/routes/register";

export type AuthContext = {
  user: UserRecord | null;
  isAuthenticated: boolean;
};

const routeTree = rootRoute.addChildren([
  indexRoute,
  bossesRoute,
  itemsRoute,
  locationsRoute,
  profileRoute,
  loginRoute,
  registerRoute,
]);

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
