'use server';
import { actionClient } from '@/lib/safe-action';
import { revalidatePath } from 'next/cache';

export const reset = actionClient.action(async ({ ctx }) => {
  const { userId } = ctx;

  revalidatePath('/');
});
