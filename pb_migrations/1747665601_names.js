/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const names = new Collection({
      type: "base",
      name: "names",
      listRule: "",
      viewRule: "",
      fields: [
        { name: "fr", type: "text", required: true },
        { name: "en", type: "text", required: true },
      ],
    });

    app.save(names);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("names");
    app.delete(collection);
  }
);
