import { LoginPage } from "@/pages/Login.page";
import { createRoute, redirect } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  beforeLoad: ({ context }) => {
    if (context.isAuthenticated) {
      throw redirect({ to: "/bosses" });
    }
  },
  component: LoginPage,
});
