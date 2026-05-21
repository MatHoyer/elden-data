import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

const navItems = [
  { to: "/bosses" as const, labelKey: "nav.bosses" },
  { to: "/items" as const, labelKey: "nav.items" },
  { to: "/locations" as const, labelKey: "nav.locations" },
] as const;

export const NavLinks: React.FC<{ className?: string; onNavigate?: () => void }> = ({ className, onNavigate }) => {
  const { t } = useTranslation();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className={cn("flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-1", className)}>
      {navItems.map(({ to, labelKey }) => {
        const isActive = pathname === to || pathname.startsWith(`${to}/`);
        return (
          <Link
            key={to}
            to={to}
            onClick={onNavigate}
            className={cn(
              buttonVariants({ variant: isActive ? "secondary" : "ghost", size: "sm" }),
              "justify-start sm:justify-center",
            )}
          >
            {t(labelKey)}
          </Link>
        );
      })}
    </nav>
  );
};
