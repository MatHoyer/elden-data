import { ItemsPage } from "@/pages/Items.page";
import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/items",
  component: ItemsPage,
});
