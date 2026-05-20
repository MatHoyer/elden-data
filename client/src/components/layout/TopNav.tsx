import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Link } from "@tanstack/react-router";

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4">
        <Link to="/" className="text-sm font-semibold tracking-tight text-foreground hover:text-primary">
          Elden Data
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
