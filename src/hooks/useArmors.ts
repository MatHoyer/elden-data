'use server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { useItems } from './useItems';

export const useArmors = async () => {
  const session = await auth();
  const id = session?.user?.id;

  let armors;
  if (id) {
    await useItems('armor');

    const userAmorSetNumber = await prisma.armorSet_user.count({
      where: { userId: id },
      select: true,
    });
    const staticArmors = await prisma.armorSet.findMany();
    if (userAmorSetNumber !== staticArmors.length && id) {
      await prisma.armorSet_user.createMany({
        data: staticArmors.map((armor) => ({ userId: id, armorSetId: armor.id })),
        skipDuplicates: true,
      });
    }
    const userArmors = await prisma.armorSet_user.findMany({
      where: { userId: id },
      include: {
        armorSet: {
          include: {
            elements: {
              include: {
                item_user: {
                  where: { userId: id },
                  select: {
                    done: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    armors = userArmors.map((armor) => ({
      ...armor.armorSet,
      elements: armor.armorSet.elements.map((element) => {
        const { item_user, ...rest } = element;
        return {
          ...rest,
          done: item_user[0].done,
        };
      }),
    }));
  } else {
    const staticArmors = await prisma.armorSet.findMany({
      include: {
        elements: true,
      },
    });
    armors = staticArmors.map((armor) => ({
      ...armor,
      elements: armor.elements.map((element) => ({
        ...element,
        done: false,
      })),
    }));
  }

  const armorsDone = armors.filter((armor) => armor.elements.every((element) => element.done)).length;

  return {
    armors,
    armorsDone,
  };
};

export type TUseArmors = Awaited<ReturnType<typeof useArmors>>;
