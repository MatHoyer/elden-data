import { RouterProvider } from "@tanstack/react-router";
import { useUserContext } from "@/hooks/use-user";
import { router } from "@/router";

export function InnerApp() {
  const { user, isAuthenticated, isLoading } = useUserContext();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div
          className="size-8 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent"
          aria-label="Loading"
        />
      </div>
    );
  }

  return (
    <RouterProvider
      router={router}
      context={{ user, isAuthenticated }}
    />
  );
}
