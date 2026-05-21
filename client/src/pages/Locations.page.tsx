import { CatalogBadgeFilters } from "@/components/catalog/CatalogBadgeFilters";
import { CatalogGrid } from "@/components/catalog/CatalogGrid";
import { CatalogPageShell } from "@/components/catalog/CatalogPageShell";
import { CheckableCard } from "@/components/catalog/CheckableCard";
import {
  bossMatchesBadgeFilters,
  bossToBadges,
  type BossBadgeId,
} from "@/components/catalog/catalog.utils";
import {
  UserProgressProvider,
  useUserProgress,
} from "@/components/catalog/useUserProgress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { collection, Collections } from "@/lib/pocketbase";
import type { BossRecordExpanded } from "@/types/pocketbase";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const LocationsCatalog: React.FC = () => {
  const { t } = useTranslation();
  const { t: tBoss } = useTranslation("bosses");
  const { t: tLocation } = useTranslation("locations");
  const { isDone, toggle, isLoading: progressLoading } = useUserProgress();
  const [bosses, setBosses] = useState<BossRecordExpanded[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [badgeFilters, setBadgeFilters] = useState<Set<BossBadgeId>>(new Set());

  const toggleBadgeFilter = useCallback((id: BossBadgeId) => {
    setBadgeFilters((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);

    collection(Collections.Bosses)
      .getFullList<BossRecordExpanded>({
        sort: "slug",
        expand: "location",
      })
      .then((list) => {
        if (!cancelled) setBosses(list);
      })
      .catch(() => {
        if (!cancelled) setBosses([]);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const filteredBosses = useMemo(
    () => bosses.filter((boss) => bossMatchesBadgeFilters(boss, badgeFilters)),
    [badgeFilters, bosses],
  );

  const bossesByLocation = useMemo(() => {
    const groups = new Map<string, BossRecordExpanded[]>();

    for (const boss of filteredBosses) {
      const location = boss.expand?.location;
      const key = location?.slug ?? "unknown";
      const list = groups.get(key) ?? [];
      list.push(boss);
      groups.set(key, list);
    }

    return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filteredBosses]);

  const loading = isLoading || progressLoading;
  const bossDoneLabel = t("catalog.status.bossDone");

  return (
    <CatalogPageShell
      titleKey="pages.locations.title"
      descriptionKey="pages.locations.description"
      isLoading={loading}
      isEmpty={!loading && bosses.length === 0}
    >
      <CatalogBadgeFilters
        activeFilters={badgeFilters}
        onToggle={toggleBadgeFilter}
        className="mb-4"
      />
      {!loading && bosses.length > 0 && bossesByLocation.length === 0 ? (
        <p className="py-8 text-center text-sm text-muted-foreground">
          {t("catalog.empty")}
        </p>
      ) : (
        <Accordion type="multiple" className="w-full">
          {bossesByLocation.map(([locationSlug, locationBosses]) => (
            <AccordionItem key={locationSlug} value={locationSlug}>
              <AccordionTrigger className="text-base font-medium">
                {tLocation(locationSlug, { defaultValue: locationSlug })}
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({locationBosses.length})
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <CatalogGrid className="pt-2">
                  {locationBosses.map((boss) => (
                    <CheckableCard
                      key={boss.id}
                      imageUrl={boss.imageUrl}
                      name={tBoss(boss.slug, { defaultValue: boss.slug })}
                      isDone={isDone(boss.id)}
                      onToggle={() => toggle(boss.id)}
                      doneLabel={bossDoneLabel}
                      badges={bossToBadges(boss, t)}
                    />
                  ))}
                </CatalogGrid>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </CatalogPageShell>
  );
};

export const LocationsPage: React.FC = () => (
  <UserProgressProvider kind="boss">
    <LocationsCatalog />
  </UserProgressProvider>
);
