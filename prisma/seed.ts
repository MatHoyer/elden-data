import { bosses } from '../src/lib/defaultData/bosses';
import { rebaseBosses } from '../src/lib/defaultData/rebaseBosses';
import prisma from '../src/lib/prisma';

async function main() {
  for (const location of rebaseBosses.location) {
    const prismaLocationNames = await prisma.locationNames.create({
      data: location.name,
    });
    const prismaLocation = await prisma.location.create({
      data: {
        locationNamesId: prismaLocationNames.id,
      },
    });
    for (const boss of location.bosses) {
      const prismaNames = await prisma.bossNames.create({
        data: boss.name,
      });
      const prismaCategories = await prisma.bossCategories.create({
        data: boss.category,
      });

      await prisma.boss.create({
        data: {
          imageUrl:
            bosses.find((b) => b.locationUrl === boss.locationUrl)?.imageUrl ||
            '',
          locationUrl: boss.locationUrl,
          wikiUrl: boss.wikiUrl,
          locationId: prismaLocation.id,
          bossNamesId: prismaNames.id,
          bossCategoriesId: prismaCategories.id,
        },
      });
    }
  }
}

main();
