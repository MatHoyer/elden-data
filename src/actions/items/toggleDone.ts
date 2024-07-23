'use server';
import prisma from '@/lib/prisma';
import { actionClient } from '@/lib/safe-action';
import { flattenValidationErrors } from 'next-safe-action';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const toggleSchema = z.object({
  itemId: z.string(),
});

export const toggleDone = actionClient
  .schema(toggleSchema, {
    handleValidationErrorsShape: (ve) => flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput: { itemId }, ctx }) => {
    const { userId } = ctx;
    const item = await prisma.item_user.findFirst({
      where: { userId, itemId },
    });
    if (!item) {
      throw new Error('Item not found');
    }
    await prisma.item_user.update({
      where: { userId_itemId: { userId, itemId } },
      data: { done: !item.done },
    });
    revalidatePath('/');
  });
