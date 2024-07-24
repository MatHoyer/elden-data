'use server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { useItems } from './useItems';

export const useArmors = async () => {
  const session = await auth();
  const id = session?.user?.id;

  await useItems('armor');

  let userArmors = await prisma.armorSet_user.findMany({
    where: { userId: id },
    include: { armorSet: { include: { elements: true } } },
  });
  const staticArmors = await prisma.armorSet.findMany();
  if (userArmors.length !== staticArmors.length) {
    await prisma.armorSet_user.createMany({
      data: staticArmors.map((armor) => ({ userId: id || '', armorSetId: armor.id })),
      skipDuplicates: true,
    });
    userArmors = await prisma.armorSet_user.findMany({
      where: { userId: id },
      include: {
        armorSet: {
          include: {
            elements: true,
          },
        },
      },
    });
  }

  const doneData = await Promise.all(
    userArmors.map(async (armor) => {
      return await Promise.all(
        armor.armorSet.elements.map(
          async (element) =>
            await prisma.item_user.findUnique({
              where: { userId_itemId: { userId: id || '', itemId: element.id } },
            })
        )
      );
    })
  );

  const armors = userArmors.map((armor, index) => ({
    ...armor.armorSet,
    elements: armor.armorSet.elements.map((element) => ({
      ...element,
      done: doneData[index].find((dd) => dd?.itemId === element.id)?.done || false,
    })),
  }));

  return { armors };
};

export type TUseArmors = Awaited<ReturnType<typeof useArmors>>;
