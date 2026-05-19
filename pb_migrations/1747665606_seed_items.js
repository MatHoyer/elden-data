/// <reference path="../pb_data/types.d.ts" />

function loadJson(path) {
  const raw = $os.readFile(path);
  const text =
    typeof raw === "string"
      ? raw
      : raw
          .map(function (b) {
            return String.fromCharCode(b);
          })
          .join("");
  return JSON.parse(text);
}

migrate(
  (app) => {
    const categories = loadJson("./pb_migrations/default_data/categories.json");
    const armors = loadJson("./pb_migrations/default_data/armors.json");
    const weaponTypes = loadJson("./pb_migrations/default_data/weapons.json");
    const shieldTypes = loadJson("./pb_migrations/default_data/shields.json");
    const spellTypes = loadJson("./pb_migrations/default_data/spells.json");
    const whetBlades = loadJson("./pb_migrations/default_data/whet_blades.json");
    const crystalTears = loadJson("./pb_migrations/default_data/crystal_tears.json");
    const spiritAshes = loadJson("./pb_migrations/default_data/spirit_ashes.json");
    const cookBooks = loadJson("./pb_migrations/default_data/cook_books.json");
    const talismans = loadJson("./pb_migrations/default_data/talismans.json");
    const ashesOfWar = loadJson("./pb_migrations/default_data/ashes_of_war.json");

    const collections = {
      itemCategory: app.findCollectionByNameOrId("item_category"),
      items: app.findCollectionByNameOrId("items"),
    };

    const createItemCategory = (slug, parentId) => {
      const record = new Record(collections.itemCategory);
      record.set("slug", slug);
      if (parentId) {
        record.set("parentCategory", parentId);
      }
      app.save(record);
      return record.get("id");
    };

    const createItem = (item, categoryId) => {
      const itemRecord = new Record(collections.items);
      itemRecord.set("slug", item.slug);
      itemRecord.set("category", categoryId);
      itemRecord.set("inDlc", item.inDlc === true);
      itemRecord.set("imageUrl", item.imageUrl || "-");
      itemRecord.set("wikiUrl", item.wikiUrl || "-");
      itemRecord.set("locationUrl", item.locationUrl || "-");
      app.save(itemRecord);
    };

    for (const category of categories) {
      const parentId = createItemCategory(category.slug, null);

      if (category.slug === "armors") {
        for (const armorSet of armors) {
          const setId = createItemCategory(armorSet.slug, parentId);
          for (const piece of armorSet.elements) {
            createItem(piece, setId);
          }
        }
      } else if (category.slug === "weapons") {
        for (const weaponType of weaponTypes) {
          const typeId = createItemCategory(weaponType.slug, parentId);
          for (const weapon of weaponType.weapons) {
            createItem(weapon, typeId);
          }
        }
      } else if (category.slug === "shields") {
        for (const shieldType of shieldTypes) {
          const typeId = createItemCategory(shieldType.slug, parentId);
          for (const shield of shieldType.shields) {
            createItem(shield, typeId);
          }
        }
      } else if (category.slug === "spells") {
        for (const spellType of spellTypes) {
          const typeId = createItemCategory(spellType.slug, parentId);
          for (const spell of spellType.spells) {
            createItem(spell, typeId);
          }
        }
      } else if (category.slug === "whet_blades") {
        for (const whetBlade of whetBlades) {
          createItem(whetBlade, parentId);
        }
      } else if (category.slug === "crystal_tears") {
        for (const crystalTear of crystalTears) {
          createItem(crystalTear, parentId);
        }
      } else if (category.slug === "spirit_ashes") {
        for (const spiritAshe of spiritAshes) {
          createItem(spiritAshe, parentId);
        }
      } else if (category.slug === "cook_books") {
        for (const cookBook of cookBooks) {
          createItem(cookBook, parentId);
        }
      } else if (category.slug === "talismans") {
        for (const talisman of talismans) {
          createItem(talisman, parentId);
        }
      } else if (category.slug === "ashes_of_war") {
        for (const ashOfWar of ashesOfWar) {
          createItem(ashOfWar, parentId);
        }
      } else {
        throw new Error("Unknown category: " + category.slug);
      }
    }
  },
  (app) => {
    for (const name of ["items", "item_category"]) {
      const collection = app.findCollectionByNameOrId(name);
      const records = app.findAllRecords(collection);
      for (const record of records) {
        app.delete(record);
      }
    }
  }
);
