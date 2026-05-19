/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const names = app.findCollectionByNameOrId("names");

    const bossCategories = new Collection({
      type: "base",
      name: "boss_categories",
      listRule: "",
      viewRule: "",
      fields: [
        { name: "inNight", type: "bool" },
        { name: "needBell", type: "bool" },
        { name: "inDlc", type: "bool" },
        { name: "major", type: "bool" },
      ],
    });
    app.save(bossCategories);

    const bossRemembrance = new Collection({
      type: "base",
      name: "boss_remembrance",
      listRule: "",
      viewRule: "",
      fields: [
        { name: "imageUrl", type: "text", required: true },
        {
          name: "names",
          type: "relation",
          required: true,
          collectionId: names.id,
          maxSelect: 1,
          cascadeDelete: true,
        },
      ],
      indexes: [
        "CREATE UNIQUE INDEX idx_boss_remembrance_names ON boss_remembrance (names)",
      ],
    });
    app.save(bossRemembrance);

    const locations = new Collection({
      type: "base",
      name: "locations",
      listRule: "",
      viewRule: "",
      fields: [
        {
          name: "names",
          type: "relation",
          required: true,
          collectionId: names.id,
          maxSelect: 1,
          cascadeDelete: true,
        },
      ],
      indexes: [
        "CREATE UNIQUE INDEX idx_locations_names ON locations (names)",
      ],
    });
    app.save(locations);

    const bosses = new Collection({
      type: "base",
      name: "bosses",
      listRule: "",
      viewRule: "",
      fields: [
        { name: "locationUrl", type: "text", required: true },
        { name: "wikiUrl", type: "text", required: true },
        { name: "imageUrl", type: "text", required: true },
        {
          name: "names",
          type: "relation",
          required: true,
          collectionId: names.id,
          maxSelect: 1,
          cascadeDelete: true,
        },
        {
          name: "categories",
          type: "relation",
          required: true,
          collectionId: bossCategories.id,
          maxSelect: 1,
          cascadeDelete: true,
        },
        {
          name: "remembrance",
          type: "relation",
          collectionId: bossRemembrance.id,
          maxSelect: 1,
        },
        {
          name: "location",
          type: "relation",
          required: true,
          collectionId: locations.id,
          maxSelect: 1,
        },
      ],
      indexes: [
        "CREATE UNIQUE INDEX idx_bosses_location_url ON bosses (locationUrl)",
        "CREATE UNIQUE INDEX idx_bosses_names ON bosses (names)",
        "CREATE UNIQUE INDEX idx_bosses_categories ON bosses (categories)",
      ],
    });
    app.save(bosses);
  },
  (app) => {
    for (const name of ["bosses", "locations", "boss_remembrance", "boss_categories"]) {
      app.delete(app.findCollectionByNameOrId(name));
    }
  }
);
