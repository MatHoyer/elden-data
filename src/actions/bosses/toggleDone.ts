'use server';
import prisma from '@/lib/prisma';
import { actionClient } from '@/lib/safe-action';
import { flattenValidationErrors } from 'next-safe-action';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const toggleSchema = z.object({
  bossId: z.number(),
});

export const toggleDone = actionClient
  .schema(toggleSchema, {
    handleValidationErrorsShape: (ve) => flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput: { bossId }, ctx }) => {
    const { userId } = ctx;
    const boss = await prisma.boss_user.findFirst({
      where: { userId, bossId },
    });
    if (!boss) {
      throw new Error('Boss not found');
    }
    await prisma.boss_user.update({
      where: { userId_bossId: { userId, bossId } },
      data: { done: !boss.done },
    });

    revalidatePath('/');
  });
