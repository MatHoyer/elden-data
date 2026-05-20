import type { RecordModel } from "pocketbase";
import type { Language } from "@/types/language";

/** Collection id → record type (for typed `pb.collection()` calls). */
export interface PocketBaseCollections {
  boss_remembrance: BossRemembranceRecord;
  locations: LocationRecord;
  bosses: BossRecord;
  item_category: ItemCategoryRecord;
  items: ItemRecord;
  user_bosses: UserBossRecord;
  user_items: UserItemRecord;
  users: UserRecord;
}

export type CollectionName = keyof PocketBaseCollections;

export const Collections = {
  BossRemembrance: "boss_remembrance",
  Locations: "locations",
  Bosses: "bosses",
  ItemCategory: "item_category",
  Items: "items",
  UserBosses: "user_bosses",
  UserItems: "user_items",
  Users: "users",
} as const satisfies Record<string, CollectionName>;

export type BossRemembranceRecord = RecordModel & {
  slug: string;
  imageUrl: string;
};

export type LocationRecord = RecordModel & {
  slug: string;
};

export type BossRecord = RecordModel & {
  slug: string;
  locationUrl: string;
  wikiUrl: string;
  imageUrl: string;
  inNight?: boolean;
  needBell?: boolean;
  inDlc?: boolean;
  major?: boolean;
  remembrance?: string;
  location: string;
};

export type BossRecordExpanded = BossRecord & {
  expand?: {
    remembrance?: BossRemembranceRecord;
    location?: LocationRecord;
  };
};

export type ItemCategoryRecord = RecordModel & {
  slug: string;
  parentCategory?: string;
};

export type ItemCategoryRecordExpanded = ItemCategoryRecord & {
  expand?: {
    parentCategory?: ItemCategoryRecord;
  };
};

export type ItemRecord = RecordModel & {
  slug: string;
  imageUrl: string;
  wikiUrl: string;
  locationUrl: string;
  inDlc?: boolean;
  category: string;
};

export type ItemRecordExpanded = ItemRecord & {
  expand?: {
    category?: ItemCategoryRecord;
  };
};

export type UserBossRecord = RecordModel & {
  isDone?: boolean;
  user: string;
  boss: string;
  createdAt: string;
  updatedAt: string;
};

export type UserBossRecordExpanded = UserBossRecord & {
  expand?: {
    user?: UserRecord;
    boss?: BossRecord;
  };
};

export type UserItemRecord = RecordModel & {
  isDone?: boolean;
  user: string;
  item: string;
  createdAt: string;
  updatedAt: string;
};

export type UserItemRecordExpanded = UserItemRecord & {
  expand?: {
    user?: UserRecord;
    item?: ItemRecord;
  };
};

export type UserRecord = RecordModel & {
  email: string;
  emailVisibility?: boolean;
  verified?: boolean;
  language?: Language;
};
