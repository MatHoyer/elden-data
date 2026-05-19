/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const users = app.findCollectionByNameOrId("users");
    const bosses = app.findCollectionByNameOrId("bosses");
    const items = app.findCollectionByNameOrId("items");

    const userBosses = new Collection({
      type: "base",
      name: "user_bosses",
      listRule: "@request.auth.id != '' && user = @request.auth.id",
      viewRule: "@request.auth.id != '' && user = @request.auth.id",
      createRule: "@request.auth.id != '' && user = @request.auth.id",
      updateRule: "@request.auth.id != '' && user = @request.auth.id",
      deleteRule: "@request.auth.id != '' && user = @request.auth.id",
      fields: [
        { name: "isDone", type: "bool" },
        {
          name: "user",
          type: "relation",
          required: true,
          collectionId: users.id,
          maxSelect: 1,
          cascadeDelete: true,
        },
        {
          name: "boss",
          type: "relation",
          required: true,
          collectionId: bosses.id,
          maxSelect: 1,
          cascadeDelete: true,
        },
        {
          name: "createdAt",
          type: "autodate",
          onCreate: true,
          onUpdate: false,
        },
        {
          name: "updatedAt",
          type: "autodate",
          onCreate: true,
          onUpdate: true,
        },
      ],
      indexes: [
        "CREATE UNIQUE INDEX idx_user_bosses_user_boss ON user_bosses (user, boss)",
      ],
    });
    app.save(userBosses);

    const userItems = new Collection({
      type: "base",
      name: "user_items",
      listRule: "@request.auth.id != '' && user = @request.auth.id",
      viewRule: "@request.auth.id != '' && user = @request.auth.id",
      createRule: "@request.auth.id != '' && user = @request.auth.id",
      updateRule: "@request.auth.id != '' && user = @request.auth.id",
      deleteRule: "@request.auth.id != '' && user = @request.auth.id",
      fields: [
        { name: "isDone", type: "bool" },
        {
          name: "user",
          type: "relation",
          required: true,
          collectionId: users.id,
          maxSelect: 1,
          cascadeDelete: true,
        },
        {
          name: "item",
          type: "relation",
          required: true,
          collectionId: items.id,
          maxSelect: 1,
          cascadeDelete: true,
        },
        {
          name: "createdAt",
          type: "autodate",
          onCreate: true,
          onUpdate: false,
        },
        {
          name: "updatedAt",
          type: "autodate",
          onCreate: true,
          onUpdate: true,
        },
      ],
      indexes: [
        "CREATE UNIQUE INDEX idx_user_items_user_item ON user_items (user, item)",
      ],
    });
    app.save(userItems);
  },
  (app) => {
    for (const name of ["user_items", "user_bosses"]) {
      app.delete(app.findCollectionByNameOrId(name));
    }
  }
);
