'use server';
import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';

export const useItems = async (type: string) => {
  const session = await auth();
  const id = session?.user?.id;

  let userItems = await prisma.item_user.findMany({
    where: { userId: id, item: { type } },
    include: { item: true },
  });
  const staticItems = await prisma.item.findMany();
  if (userItems.length !== staticItems.length && id) {
    await prisma.item_user.createMany({
      data: staticItems.map((item) => ({ userId: id, itemId: item.id })),
      skipDuplicates: true,
    });
    userItems = await prisma.item_user.findMany({
      where: { userId: id, item: { type } },
      include: { item: true },
    });
  }

  const itemsBySortableType = await prisma.item.groupBy({
    by: ['sortableType'],
    where: { type: type },
    _count: true,
  });

  const itemsBySortableTypeDone = await prisma.item.groupBy({
    by: ['sortableType'],
    where: { item_user: { some: { userId: id, done: true } } },
    _count: true,
  });

  const items = userItems.map((b) => ({ ...b.item, done: b.done }));
  const itemsDone = items.filter((b) => b.done).length;
  return { items, itemsDone, itemsBySortableType, itemsBySortableTypeDone };
};

export type TUseItems = Awaited<ReturnType<typeof useItems>>;
