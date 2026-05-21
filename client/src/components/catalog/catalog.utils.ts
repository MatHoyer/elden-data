import type { BossRecord } from "@/types/pocketbase";
import type { TFunction } from "i18next";

export type BossBadgeId = "dlc" | "major" | "night" | "bell";

export type CatalogBadge = {
  id: BossBadgeId | "dlc-item";
  label: string;
  tooltip?: string;
  tone?: "default" | "major";
};

export const BOSS_BADGE_FILTER_IDS: BossBadgeId[] = ["dlc", "major", "night", "bell"];

export const CATEGORY_I18N_NS: Record<string, string> = {
  armors: "armors",
  weapons: "weapons",
  shields: "shields",
  spells: "spells",
  whet_blades: "whet_blades",
  crystal_tears: "crystal_tears",
  spirit_ashes: "spirit_ashes",
  cook_books: "cook_books",
  talismans: "talismans",
  ashes_of_war: "ashes_of_war",
};

export const getItemI18nNs = (topCategorySlug: string): string => CATEGORY_I18N_NS[topCategorySlug] ?? topCategorySlug;

const catalogT = (t: TFunction, key: string) => t(key, { ns: "translation", defaultValue: key });

export const getBossBadgeIds = (boss: BossRecord): BossBadgeId[] => {
  const ids: BossBadgeId[] = [];
  if (boss.inDlc) ids.push("dlc");
  if (boss.major) ids.push("major");
  if (boss.inNight) ids.push("night");
  if (boss.needBell) ids.push("bell");
  return ids;
};

export const bossMatchesBadgeFilters = (boss: BossRecord, activeFilters: ReadonlySet<BossBadgeId>): boolean => {
  if (activeFilters.size === 0) return true;
  const ids = getBossBadgeIds(boss);
  return ids.some((id) => activeFilters.has(id));
};

export const bossToBadges = (boss: BossRecord, t: TFunction): CatalogBadge[] => {
  const badges: CatalogBadge[] = [];
  if (boss.inDlc) {
    badges.push({ id: "dlc", label: catalogT(t, "catalog.badges.dlc") });
  }
  if (boss.major) {
    badges.push({
      id: "major",
      label: catalogT(t, "catalog.badges.major"),
      tone: "major",
    });
  }
  if (boss.inNight) {
    badges.push({
      id: "night",
      label: catalogT(t, "catalog.badges.night"),
      tooltip: catalogT(t, "catalog.badges.nightTooltip"),
    });
  }
  if (boss.needBell) {
    badges.push({
      id: "bell",
      label: catalogT(t, "catalog.badges.bell"),
      tooltip: catalogT(t, "catalog.badges.bellTooltip"),
    });
  }
  return badges;
};

export const itemToBadges = (inDlc: boolean | undefined, t: TFunction): CatalogBadge[] => {
  if (!inDlc) return [];
  return [{ id: "dlc-item", label: catalogT(t, "catalog.badges.dlc") }];
};

export const itemMatchesDlcFilter = (item: { inDlc?: boolean }, dlcOnly: boolean): boolean =>
  !dlcOnly || item.inDlc === true;
