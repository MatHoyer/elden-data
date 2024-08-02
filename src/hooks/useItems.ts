import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';

export const useItems = async (type: string) => {
  const session = await auth();
  const id = session?.user?.id;

  let items;
  if (id) {
    const userItemsNumber = await prisma.item_user.count({
      where: { userId: id, item: { type } },
      select: true,
    });
    const staticItems = await prisma.item.findMany({ where: { type } });
    if (userItemsNumber !== staticItems.length && id) {
      await prisma.item_user.createMany({
        data: staticItems.map((item) => ({ userId: id, itemId: item.id })),
        skipDuplicates: true,
      });
    }
    const userItems = await prisma.item_user.findMany({
      where: { userId: id, item: { type } },
      include: { item: true },
      orderBy: { itemId: 'asc' },
    });
    items = userItems.map((b) => ({ ...b.item, done: b.done }));
  } else {
    items = (await prisma.item.findMany({ where: { type } })).map((b) => ({ ...b, done: false }));
  }

  const itemsBySortableType = await prisma.item.groupBy({
    by: ['sortableType'],
    where: { type: type },
    _count: true,
  });

  let itemsBySortableTypeDone;
  if (id) {
    itemsBySortableTypeDone = await prisma.item.groupBy({
      by: ['sortableType'],
      where: { item_user: { some: { userId: id, done: true } } },
      _count: true,
    });
  } else {
    itemsBySortableTypeDone = itemsBySortableType.map((b) => ({ sortableType: b.sortableType, _count: 0 }));
  }

  const itemsDone = items.filter((b) => b.done).length;
  return { items, itemsDone, itemsBySortableType, itemsBySortableTypeDone };
};

export type TUseItems = Awaited<ReturnType<typeof useItems>>;
