/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const itemCategory = new Collection({
      type: "base",
      name: "item_category",
      listRule: "",
      viewRule: "",
      fields: [{ name: "slug", type: "text", required: true }],
      indexes: [
        "CREATE UNIQUE INDEX idx_item_category_slug ON item_category (slug)",
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
        { name: "slug", type: "text", required: true },
        { name: "imageUrl", type: "text", required: true },
        { name: "wikiUrl", type: "text", required: true },
        { name: "locationUrl", type: "text", required: true },
        { name: "inDlc", type: "bool" },
        {
          name: "category",
          type: "relation",
          required: true,
          collectionId: itemCategory.id,
          maxSelect: 1,
        },
      ],
    });
    app.save(items);
  },
  (app) => {
    for (const name of ["items", "item_category"]) {
      app.delete(app.findCollectionByNameOrId(name));
    }
  }
);
