import { NavLinks } from "@/components/layout/NavLinks";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { UserDropdown } from "@/components/user/UserDropdown";
import { useUserContext } from "@/hooks/use-user";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const TopNav: React.FC = () => {
  const { t } = useTranslation();
  const { isAuthenticated } = useUserContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-3 sm:gap-4 sm:px-4">
        <div className="flex min-w-0 shrink-0 items-center gap-1 sm:gap-2">
          {isAuthenticated && <UserDropdown />}
          <Link
            to="/bosses"
            className="truncate text-sm font-semibold tracking-tight text-foreground hover:text-primary"
          >
            {t("appName")}
          </Link>
        </div>

        <div className="hidden flex-1 justify-center md:flex">
          <NavLinks />
        </div>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label={t("nav.menu")}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <SheetHeader>
                <SheetTitle>{t("nav.menu")}</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-4">
                <NavLinks onNavigate={() => setMenuOpen(false)} />
                {!isAuthenticated && (
                  <Button asChild className="w-full">
                    <Link to="/login" onClick={() => setMenuOpen(false)}>
                      {t("auth.login")}
                    </Link>
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>

          {!isAuthenticated && (
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <Link to="/login">{t("auth.login")}</Link>
            </Button>
          )}

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
