'use server';
import { bosses } from '@/lib/defaultBosses';
import prisma from '@/lib/prisma';
import { actionClient } from '@/lib/safe-action';
import { revalidatePath } from 'next/cache';

export const updateBosses = actionClient.action(async ({ ctx }) => {
  const { userId } = ctx;
  const dbBosses = await prisma.boss.findMany({ where: { userId } });

  bosses.forEach(async (boss) => {
    const { imageUrl, wikiUrl, ...rest } = boss;
    const dbBoss = dbBosses.find((b) => b.locationUrl === rest.locationUrl);
    if (dbBoss) {
      await prisma.boss.update({
        where: { id: dbBoss.id },
        data: { ...rest, userId },
      });
    } else {
      await prisma.boss.create({ data: { ...rest, userId } });
    }
  });

  revalidatePath('/');
});
