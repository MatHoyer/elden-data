'use server';
import { actionClient } from '@/lib/safe-action';
import { revalidatePath } from 'next/cache';

export const update = actionClient.action(async ({ ctx }) => {
  const { userId } = ctx;

  revalidatePath('/');
});
