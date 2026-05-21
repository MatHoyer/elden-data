import { CatalogGrid } from "@/components/catalog/CatalogGrid";
import { CatalogPageShell } from "@/components/catalog/CatalogPageShell";
import { CheckableCard } from "@/components/catalog/CheckableCard";
import {
  getItemI18nNs,
  itemMatchesDlcFilter,
  itemToBadges,
} from "@/components/catalog/catalog.utils";
import {
  UserProgressProvider,
  useUserProgress,
} from "@/components/catalog/useUserProgress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { collection, Collections } from "@/lib/pocketbase";
import type { ItemCategoryRecord, ItemRecord } from "@/types/pocketbase";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const ItemsCatalog: React.FC = () => {
  const { t } = useTranslation();
  const { t: tCategory } = useTranslation("categories");
  const { isDone, toggle, isLoading: progressLoading } = useUserProgress();
  const [topCategories, setTopCategories] = useState<ItemCategoryRecord[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const [items, setItems] = useState<ItemRecord[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isLoadingItems, setIsLoadingItems] = useState(false);
  const [dlcFilter, setDlcFilter] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setIsLoadingCategories(true);

    collection(Collections.ItemCategory)
      .getFullList<ItemCategoryRecord>({
        filter: 'parentCategory = ""',
        sort: "slug",
      })
      .then((list) => {
        if (!cancelled) {
          setTopCategories(list);
          if (list[0]) setActiveTab(list[0].id);
        }
      })
      .catch(() => {
        if (!cancelled) setTopCategories([]);
      })
      .finally(() => {
        if (!cancelled) setIsLoadingCategories(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const activeCategory = useMemo(
    () => topCategories.find((c) => c.id === activeTab),
    [activeTab, topCategories],
  );

  useEffect(() => {
    if (!activeTab) {
      setItems([]);
      return;
    }

    let cancelled = false;
    setItems([]);
    setIsLoadingItems(true);

    const loadItems = async () => {
      const subcategories = await collection(Collections.ItemCategory).getFullList<ItemCategoryRecord>({
        filter: `parentCategory = "${activeTab}"`,
      });

      const categoryIds = [activeTab, ...subcategories.map((sub) => sub.id)];

      if (categoryIds.length === 0) {
        if (!cancelled) setItems([]);
        return;
      }

      const filter = categoryIds.map((id) => `category = "${id}"`).join(" || ");
      const list = await collection(Collections.Items).getFullList<ItemRecord>({
        filter,
        sort: "slug",
      });

      if (!cancelled) setItems(list);
    };

    loadItems()
      .catch(() => {
        if (!cancelled) setItems([]);
      })
      .finally(() => {
        if (!cancelled) setIsLoadingItems(false);
      });

    return () => {
      cancelled = true;
    };
  }, [activeTab]);

  const filteredItems = useMemo(
    () => items.filter((item) => itemMatchesDlcFilter(item, dlcFilter)),
    [dlcFilter, items],
  );

  const loading = isLoadingCategories || isLoadingItems || progressLoading;
  const itemNs = activeCategory ? getItemI18nNs(activeCategory.slug) : "translation";
  const itemCollectedLabel = t("catalog.status.itemCollected");

  return (
    <CatalogPageShell
      titleKey="pages.items.title"
      descriptionKey="pages.items.description"
      isLoading={loading && topCategories.length === 0}
      isEmpty={!loading && topCategories.length === 0}
    >
      {topCategories.length > 0 && (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full gap-4">
          <TabsList className="h-auto w-full justify-start overflow-x-auto">
            {topCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="shrink-0">
                {tCategory(category.slug, { defaultValue: category.slug })}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">
              {t("catalog.filters.label")}
            </span>
            <button
              type="button"
              aria-pressed={dlcFilter}
              onClick={() => setDlcFilter((v) => !v)}
              className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Badge
                variant={dlcFilter ? "default" : "outline"}
                className="cursor-pointer text-[11px]"
              >
                {t("catalog.filters.dlcOnly")}
              </Badge>
            </button>
          </div>

          {topCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              {loading ? null : items.length > 0 && filteredItems.length === 0 ? (
                <p className="py-8 text-center text-sm text-muted-foreground">
                  {t("catalog.empty")}
                </p>
              ) : filteredItems.length === 0 ? (
                <p className="py-8 text-center text-sm text-muted-foreground">
                  {t("catalog.empty")}
                </p>
              ) : (
                <CatalogGrid>
                  {filteredItems.map((item) => (
                    <CheckableCard
                      key={item.id}
                      imageUrl={item.imageUrl}
                      name={t(item.slug, {
                        ns: itemNs,
                        defaultValue: item.slug,
                      })}
                      isDone={isDone(item.id)}
                      onToggle={() => toggle(item.id)}
                      doneLabel={itemCollectedLabel}
                      badges={itemToBadges(item.inDlc, t)}
                    />
                  ))}
                </CatalogGrid>
              )}
            </TabsContent>
          ))}
        </Tabs>
      )}
    </CatalogPageShell>
  );
};

export const ItemsPage: React.FC = () => (
  <UserProgressProvider kind="item">
    <ItemsCatalog />
  </UserProgressProvider>
);
