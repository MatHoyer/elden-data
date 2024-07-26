'use server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { useItems } from './useItems';

export const useArmors = async () => {
  const session = await auth();
  const id = session?.user?.id;

  await useItems('armor');

  const tester = await prisma.armorSet_user.findMany({
    where: { userId: id },
  });
  const staticArmors = await prisma.armorSet.findMany();
  if (tester.length !== staticArmors.length && id) {
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

  return {
    armors: userArmors.map((armor) => ({
      ...armor.armorSet,
      elements: armor.armorSet.elements.map((element) => {
        const { item_user, ...rest } = element;
        return {
          ...rest,
          done: item_user[0].done,
        };
      }),
    })),
  };
};

export type TUseArmors = Awaited<ReturnType<typeof useArmors>>;
