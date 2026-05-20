import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import type { AuthContext } from "@/router";

export const Route = createRootRouteWithContext<AuthContext>()({
  component: () => <Outlet />,
});
