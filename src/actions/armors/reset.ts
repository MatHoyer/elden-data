'use server';
import prisma from '@/lib/prisma';
import { actionClient } from '@/lib/safe-action';
import { revalidatePath } from 'next/cache';

export const reset = actionClient.action(async ({ ctx }) => {
  const { userId } = ctx;
  await prisma.armorSet_user.deleteMany({
    where: { userId },
  });
  await prisma.item_user.deleteMany({
    where: { userId, item: { type: 'armor' } },
  });
  await prisma.armorSet_user.createMany({
    data: (await prisma.armorSet.findMany()).map((armorSet) => ({ userId, armorSetId: armorSet.id })),
    skipDuplicates: true,
  });
  revalidatePath('/');
});
