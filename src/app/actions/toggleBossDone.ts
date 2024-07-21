'use server';
import prisma from '@/lib/prisma';
import { actionClient } from '@/lib/safe-action';
import { flattenValidationErrors } from 'next-safe-action';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const toggleSchema = z.object({
  bossId: z.string(),
});

export const toggleBossDone = actionClient
  .schema(toggleSchema, {
    handleValidationErrorsShape: (ve) => flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput: { bossId }, ctx }) => {
    const { userId } = ctx;
    const boss = await prisma.boss.findFirst({ where: { id: bossId, userId } });
    if (!boss) return;
    await prisma.boss.update({
      where: { id: bossId },
      data: { done: !boss.done },
    });
    revalidatePath('/');
  });
