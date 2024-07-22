'use server';
import { bosses } from '@/lib/defaultData/bosses';
import prisma from '@/lib/prisma';
import { actionClient } from '@/lib/safe-action';
import { revalidatePath } from 'next/cache';

export const reset = actionClient.action(async ({ ctx }) => {
  const { userId } = ctx;
  await prisma.boss.deleteMany({ where: { userId } });
  await prisma.boss.createMany({
    data: bosses.map((boss) => {
      const { imageUrl, wikiUrl, ...rest } = boss;
      return { ...rest, userId };
    }),
  });
  revalidatePath('/');
});
