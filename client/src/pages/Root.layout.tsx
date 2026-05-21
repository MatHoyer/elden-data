import { AppAlertDialog } from "@/components/dialogs/alert-dialogs/AppAlertDialog";
import { TopNav } from "@/components/layout/TopNav";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Outlet } from "@tanstack/react-router";

export const RootLayout = () => {
  return (
    <TooltipProvider>
      <div className="flex min-h-svh flex-col bg-background">
        <TopNav />
        <Outlet />
        <AppAlertDialog />
      </div>
    </TooltipProvider>
  );
};
