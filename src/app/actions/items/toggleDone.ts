'use server';
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

    revalidatePath('/');
  });
