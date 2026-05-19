/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const bossRemembrance = new Collection({
      type: "base",
      name: "boss_remembrance",
      listRule: "",
      viewRule: "",
      fields: [
        { name: "slug", type: "text", required: true },
        { name: "imageUrl", type: "text", required: true },
      ],
      indexes: [
        "CREATE UNIQUE INDEX idx_boss_remembrance_slug ON boss_remembrance (slug)",
      ],
    });
    app.save(bossRemembrance);

    const locations = new Collection({
      type: "base",
      name: "locations",
      listRule: "",
      viewRule: "",
      fields: [{ name: "slug", type: "text", required: true }],
      indexes: [
        "CREATE UNIQUE INDEX idx_locations_slug ON locations (slug)",
      ],
    });
    app.save(locations);

    const bosses = new Collection({
      type: "base",
      name: "bosses",
      listRule: "",
      viewRule: "",
      fields: [
        { name: "slug", type: "text", required: true },
        { name: "locationUrl", type: "text", required: true },
        { name: "wikiUrl", type: "text", required: true },
        { name: "imageUrl", type: "text", required: true },
        { name: "inNight", type: "bool" },
        { name: "needBell", type: "bool" },
        { name: "inDlc", type: "bool" },
        { name: "major", type: "bool" },
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
      ],
    });
    app.save(bosses);
  },
  (app) => {
    for (const name of ["bosses", "locations", "boss_remembrance"]) {
      app.delete(app.findCollectionByNameOrId(name));
    }
  }
);
