/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const users = app.findCollectionByNameOrId("users");

    users.fields.add(
      new SelectField({
        name: "language",
        maxSelect: 1,
        values: ["en", "fr"],
      })
    );

    app.save(users);
  },
  (app) => {
    const users = app.findCollectionByNameOrId("users");
    const field = users.fields.getByName("language");
    if (field) {
      users.fields.removeById(field.id);
    }
    app.save(users);
  }
);
