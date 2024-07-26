import { armors } from '../src/lib/defaultData/armor';
import { ashesOfWar } from '../src/lib/defaultData/asheOfWar';
import { bosses } from '../src/lib/defaultData/bosses';
import { cookBooks } from '../src/lib/defaultData/cookBook';
import { shields } from '../src/lib/defaultData/shield';
import { spells } from '../src/lib/defaultData/spell';
import { spiritAshes } from '../src/lib/defaultData/spiritAshe';
import { talismans } from '../src/lib/defaultData/talismans';
import { weapons } from '../src/lib/defaultData/weapon';
import { whetBlades } from '../src/lib/defaultData/whetBlade';
import prisma from '../src/lib/prisma';

type TItem = (
  | {
      type: string;
      name: string;
      imageUrl: string;
      wikiUrl: string;
      locationUrl: string;
      inDlc?: undefined;
    }
  | {
      type: string;
      name: string;
      inDlc: boolean;
      imageUrl: string;
      wikiUrl: string;
      locationUrl: string;
    }
)[];

const itemsUpsert = async (items: TItem) => {
  for (const item of items) {
    await prisma.item.upsert({
      where: {
        name: item.name,
      },
      update: {
        ...item,
      },
      create: {
        ...item,
      },
    });
  }
};

async function main() {
  for (const boss of bosses) {
    await prisma.boss.upsert({
      where: {
        locationUrl: boss.locationUrl,
      },
      update: {
        ...boss,
      },
      create: {
        ...boss,
      },
    });
  }

  await itemsUpsert(talismans);
  await itemsUpsert(spells);
  await itemsUpsert(weapons);
  await itemsUpsert(ashesOfWar);
  await itemsUpsert(cookBooks);
  await itemsUpsert(shields);
  await itemsUpsert(spiritAshes);
  await itemsUpsert(whetBlades);

  for (const armor of armors) {
    const elementsId = await Promise.all(
      armor.elements.map(async (element) => {
        const newItem = await prisma.item.upsert({
          where: {
            name: element.name,
          },
          update: {
            ...element,
          },
          create: {
            ...element,
          },
        });
        return newItem.id;
      })
    );
    await prisma.armorSet.upsert({
      where: {
        name: armor.name,
      },
      update: {
        ...armor,
        elements: {
          connect: elementsId.map((id) => ({ id })),
        },
      },
      create: {
        ...armor,
        elements: {
          connect: elementsId.map((id) => ({ id })),
        },
      },
    });
  }
}

main();
