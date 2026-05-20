import { RootLayout } from "@/pages/Root.layout";
import type { AuthContext } from "@/router";
import { createRootRouteWithContext } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<AuthContext>()({
  component: RootLayout,
});
