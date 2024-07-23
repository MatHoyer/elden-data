import { bosses } from '../src/lib/defaultData/bosses';
import { talismans } from '../src/lib/defaultData/talismans';
import prisma from '../src/lib/prisma';

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
  for (const talisman of talismans) {
    await prisma.item.upsert({
      where: {
        name: talisman.name,
      },
      update: {
        ...talisman,
      },
      create: {
        ...talisman,
      },
    });
  }
}

main();
