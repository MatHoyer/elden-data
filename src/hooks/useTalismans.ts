'use server';
import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';

export const useItems = async (type: string) => {
  const session = await auth();
  const items = await prisma.item.findMany({
    where: {
      userId: session?.user?.id,
      type,
    },
  });
  return items;
};
