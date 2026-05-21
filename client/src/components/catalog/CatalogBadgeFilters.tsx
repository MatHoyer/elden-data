import type { BossBadgeId } from "@/components/catalog/catalog.utils";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

type CatalogBadgeFiltersProps = {
  activeFilters: ReadonlySet<BossBadgeId>;
  onToggle: (id: BossBadgeId) => void;
  className?: string;
};

export const CatalogBadgeFilters: React.FC<CatalogBadgeFiltersProps> = ({ activeFilters, onToggle, className }) => {
  const { t } = useTranslation();

  const filters: { id: BossBadgeId; labelKey: string; tone?: "major" }[] = [
    { id: "dlc", labelKey: "catalog.badges.dlc" },
    { id: "major", labelKey: "catalog.badges.major", tone: "major" },
    { id: "night", labelKey: "catalog.badges.night" },
    { id: "bell", labelKey: "catalog.badges.bell" },
  ];

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <span className="text-xs font-medium text-muted-foreground">{t("catalog.filters.label")}</span>
      {filters.map(({ id, labelKey, tone }) => {
        const active = activeFilters.has(id);
        return (
          <button
            key={id}
            type="button"
            aria-pressed={active}
            onClick={() => onToggle(id)}
            className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Badge
              variant={active ? "default" : "outline"}
              className={cn(
                "cursor-pointer text-[11px] transition-colors",
                tone === "major" &&
                  (active
                    ? "border-amber-500 bg-amber-500 text-amber-950 hover:bg-amber-500/90"
                    : "border-amber-500/50 text-amber-600 hover:bg-amber-500/10 dark:text-amber-400"),
              )}
            >
              {t(labelKey)}
            </Badge>
          </button>
        );
      })}
      {activeFilters.size > 0 && (
        <button
          type="button"
          className="text-xs text-muted-foreground underline-offset-2 hover:underline"
          onClick={() => {
            [...activeFilters].forEach((id) => onToggle(id));
          }}
        >
          {t("catalog.filters.clear")}
        </button>
      )}
    </div>
  );
};
