// import prisma from '@/lib/prisma';
// import { actionClient } from '@/lib/safe-action';
// import { revalidatePath } from 'next/cache';

// export const resetBosses = actionClient.action(async ({ ctx }) => {
//   const { userId } = ctx;
//   const dbBosses = await prisma.boss.findMany({ where: { userId } });
//   revalidatePath('/');
// });
