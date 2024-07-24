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
  }

  const armors = userArmors.map((a) => ({ ...a.armorSet }));

  return { armors };
};

export type TUseArmors = Awaited<ReturnType<typeof useArmors>>;
