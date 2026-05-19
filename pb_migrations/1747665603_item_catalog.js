/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const names = app.findCollectionByNameOrId("names");

    const itemCategories = new Collection({
      type: "base",
      name: "item_categories",
      listRule: "",
      viewRule: "",
      fields: [{ name: "inDlc", type: "bool" }],
    });
    app.save(itemCategories);

    const itemCategory = new Collection({
      type: "base",
      name: "item_category",
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
        "CREATE UNIQUE INDEX idx_item_category_names ON item_category (names)",
      ],
    });
    app.save(itemCategory);

    itemCategory.fields.add(
      new RelationField({
        name: "parentCategory",
        collectionId: itemCategory.id,
        maxSelect: 1,
      })
    );
    app.save(itemCategory);

    const items = new Collection({
      type: "base",
      name: "items",
      listRule: "",
      viewRule: "",
      fields: [
        { name: "imageUrl", type: "text", required: true },
        { name: "wikiUrl", type: "text", required: true },
        { name: "locationUrl", type: "text", required: true },
        {
          name: "names",
          type: "relation",
          required: true,
          collectionId: names.id,
          maxSelect: 1,
          cascadeDelete: true,
        },
        {
          name: "category",
          type: "relation",
          required: true,
          collectionId: itemCategory.id,
          maxSelect: 1,
        },
        {
          name: "categories",
          type: "relation",
          required: true,
          collectionId: itemCategories.id,
          maxSelect: 1,
          cascadeDelete: true,
        },
      ],
      indexes: [
        "CREATE UNIQUE INDEX idx_items_names ON items (names)",
        "CREATE UNIQUE INDEX idx_items_categories ON items (categories)",
      ],
    });
    app.save(items);
  },
  (app) => {
    for (const name of ["items", "item_category", "item_categories"]) {
      app.delete(app.findCollectionByNameOrId(name));
    }
  }
);
