import { TopNav } from "@/components/layout/TopNav";
import { Outlet } from "@tanstack/react-router";

export const RootLayout = () => {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <TopNav />
      <Outlet />
    </div>
  );
};
