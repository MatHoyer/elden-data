import prisma from '../src/lib/prisma';
import { bosses } from './defaultData/bosses';
import { rebaseBosses } from './defaultData/rebaseBosses';

const createBosses = async () => {
  for (const location of rebaseBosses.location) {
    const existingLocationNames = await prisma.names.findFirst({
      where: { ...location.name },
    });
    const prismaLocationNames = existingLocationNames
      ? existingLocationNames
      : await prisma.names.create({
          data: location.name,
        });

    const existingLocation = await prisma.location.upsert({
      where: { namesId: prismaLocationNames.id },
      update: {
        namesId: prismaLocationNames.id,
      },
      create: {
        namesId: prismaLocationNames.id,
      },
    });

    for (const boss of location.bosses) {
      const existingBoss = await prisma.boss.findUnique({
        where: { locationUrl: boss.locationUrl },
      });
      const prismaBossNames = await prisma.names.upsert({
        where: { id: existingBoss?.namesId || '' },
        update: boss.name,
        create: boss.name,
      });
      const prismaBossCategory = await prisma.bossCategories.upsert({
        where: { id: existingBoss?.bossCategoriesId || '' },
        update: boss.category,
        create: boss.category,
      });

      const prismaBoss = await prisma.boss.upsert({
        where: { id: existingBoss?.id || '' },
        update: {
          locationUrl: boss.locationUrl,
          wikiUrl: boss.wikiUrl,
          remanbranceUrl: '',
          imageUrl:
            bosses.find((b) => b.locationUrl === boss.locationUrl)?.imageUrl ||
            '',
        },
        create: {
          namesId: prismaBossNames.id,
          locationId: existingLocation.id,
          bossCategoriesId: prismaBossCategory.id,
          locationUrl: boss.locationUrl,
          wikiUrl: boss.wikiUrl,
          remanbranceUrl: '',
          imageUrl:
            bosses.find((b) => b.locationUrl === boss.locationUrl)?.imageUrl ||
            '',
        },
      });
    }
  }
};

async function main() {
  await createBosses();
}

main();
