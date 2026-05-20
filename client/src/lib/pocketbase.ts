import PocketBase from "pocketbase";
import type { CollectionName, PocketBaseCollections } from "../types/pocketbase";

export { Collections } from "../types/pocketbase";
export type { UserRecord } from "../types/pocketbase";

export const pb = new PocketBase(import.meta.env.VITE_PB_URL ?? "");

export function collection<C extends CollectionName>(name: C) {
  return pb.collection(name) as ReturnType<typeof pb.collection> & {
    getFullList: <T = PocketBaseCollections[C]>(
      ...args: Parameters<ReturnType<typeof pb.collection>["getFullList"]>
    ) => Promise<T[]>;
    getList: <T = PocketBaseCollections[C]>(
      ...args: Parameters<ReturnType<typeof pb.collection>["getList"]>
    ) => Promise<import("pocketbase").ListResult<T>>;
    getOne: <T = PocketBaseCollections[C]>(
      ...args: Parameters<ReturnType<typeof pb.collection>["getOne"]>
    ) => Promise<T>;
    getFirstListItem: <T = PocketBaseCollections[C]>(
      ...args: Parameters<ReturnType<typeof pb.collection>["getFirstListItem"]>
    ) => Promise<T>;
    create: <T = PocketBaseCollections[C]>(
      ...args: Parameters<ReturnType<typeof pb.collection>["create"]>
    ) => Promise<T>;
    update: <T = PocketBaseCollections[C]>(
      ...args: Parameters<ReturnType<typeof pb.collection>["update"]>
    ) => Promise<T>;
    delete: (...args: Parameters<ReturnType<typeof pb.collection>["delete"]>) => Promise<boolean>;
    subscribe: (
      ...args: Parameters<ReturnType<typeof pb.collection>["subscribe"]>
    ) => ReturnType<ReturnType<typeof pb.collection>["subscribe"]>;
  };
}
