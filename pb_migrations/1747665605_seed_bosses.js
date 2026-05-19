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
    const bossesData = loadJson("./pb_migrations/default_data/bosses.json");

    const bossRemembranceCollection =
      app.findCollectionByNameOrId("boss_remembrance");
    const locationsCollection = app.findCollectionByNameOrId("locations");
    const bossesCollection = app.findCollectionByNameOrId("bosses");

    for (const location of bossesData.locations) {
      const locationRecord = new Record(locationsCollection);
      locationRecord.set("slug", location.slug);
      app.save(locationRecord);

      for (const boss of location.bosses) {
        const bossRecord = new Record(bossesCollection);
        bossRecord.set("slug", boss.slug);
        bossRecord.set("location", locationRecord.get("id"));
        bossRecord.set("locationUrl", boss.locationUrl);
        bossRecord.set("wikiUrl", boss.wikiUrl);
        bossRecord.set("imageUrl", boss.imageUrl);
        bossRecord.set("inNight", boss.inNight === true);
        bossRecord.set("needBell", boss.needBell === true);
        bossRecord.set("inDlc", boss.inDlc === true);
        bossRecord.set("major", boss.major === true);

        if (boss.remembrance) {
          const remembranceRecord = new Record(bossRemembranceCollection);
          remembranceRecord.set("slug", boss.remembrance.slug);
          remembranceRecord.set("imageUrl", boss.remembrance.imageUrl);
          app.save(remembranceRecord);
          bossRecord.set("remembrance", remembranceRecord.get("id"));
        }

        app.save(bossRecord);
      }
    }
  },
  (app) => {
    for (const name of ["bosses", "locations", "boss_remembrance"]) {
      const collection = app.findCollectionByNameOrId(name);
      const records = app.findAllRecords(collection);
      for (const record of records) {
        app.delete(record);
      }
    }
  }
);
