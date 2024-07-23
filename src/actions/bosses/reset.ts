'use server';
import prisma from '@/lib/prisma';
import { actionClient } from '@/lib/safe-action';
import { revalidatePath } from 'next/cache';

export const reset = actionClient.action(async ({ ctx }) => {
  const { userId } = ctx;
  await prisma.boss_user.deleteMany({
    where: { userId },
  });
  await prisma.boss_user.createMany({
    data: (await prisma.boss.findMany()).map((boss) => ({ userId, bossId: boss.id })),
    skipDuplicates: true,
  });
  revalidatePath('/');
});
