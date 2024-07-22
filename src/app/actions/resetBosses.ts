'use server';
import { bosses } from '@/lib/defaultBosses';
import prisma from '@/lib/prisma';
import { actionClient } from '@/lib/safe-action';
import { revalidatePath } from 'next/cache';

export const resetBosses = actionClient.action(async ({ ctx }) => {
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
