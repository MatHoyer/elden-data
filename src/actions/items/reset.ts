'use server';
import prisma from '@/lib/prisma';
import { actionClient } from '@/lib/safe-action';
import { revalidatePath } from 'next/cache';

export const reset = actionClient.action(async ({ ctx }) => {
  const { userId } = ctx;
  await prisma.item_user.deleteMany({
    where: { userId },
  });
  await prisma.item_user.createMany({
    data: (await prisma.item.findMany()).map((item) => ({ userId, itemId: item.id })),
    skipDuplicates: true,
  });
  revalidatePath('/');
});
