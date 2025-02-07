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

const categories = [
  {
    en: 'Armors',
    fr: 'Armures',
  },
  {
    en: 'Weapons',
    fr: 'Armes',
  },
  {
    en: 'Shields',
    fr: 'Boucliers',
  },
  {
    en: 'Spells',
    fr: 'Sorts',
  },
  {
    en: 'Whet blades',
    fr: "Lames d'affûtage",
  },
  {
    en: 'Crystal tears',
    fr: 'Larmes de cristal',
  },
  {
    en: 'Spirit ashes',
    fr: 'Invocations',
  },
  {
    en: 'Cook books',
    fr: 'Manuels',
  },
  {
    en: 'Talismans',
    fr: 'Talismans',
  },
  {
    en: 'Ashes of war',
    fr: 'Cendres de guerre',
  },
];

const createCategories = async () => {
  for (const category of categories) {
    const existingCategoryNames = await prisma.names.findFirst({
      where: { ...category },
    });
    const prismaCategoryNames = existingCategoryNames
      ? existingCategoryNames
      : await prisma.names.create({
          data: category,
        });

    const existingCategory = await prisma.itemCategory.upsert({
      where: { namesId: prismaCategoryNames.id },
      update: {
        namesId: prismaCategoryNames.id,
      },
      create: {
        namesId: prismaCategoryNames.id,
      },
    });
  }
};

const createItems = async () => {
  await createCategories();
};

async function main() {
  await createBosses();
  await createItems();
}

main();
