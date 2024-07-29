'use server';
import { pages } from '@/components/pages';
import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';

const countItems = async (type: string, id: string | undefined) => {
  const done = await prisma.item_user.count({
    where: {
      userId: id,
      done: true,
      item: { type },
    },
  });
  const allWithoutDlc = await prisma.item.count({
    where: { type, inDlc: false },
  });
  const all = await prisma.item.count({
    where: { type },
  });

  return { name: type, done, allWithoutDlc, all };
};

export const useCounter = async () => {
  const session = await auth();
  const id = session?.user?.id;

  const data = [];
  const bossesDone = await prisma.boss_user.count({
    where: { userId: id, done: true },
  });
  const bossesAllWithoutDlc = await prisma.boss.count({
    where: { inDlc: false },
  });
  const bossesAll = await prisma.boss.count();
  data.push({ name: 'boss', done: bossesDone, allWithoutDlc: bossesAllWithoutDlc, all: bossesAll });

  for (const page of pages) {
    if (page.type === 'page') continue;
    data.push(await countItems(page.path.slice(1), id));
  }

  return data;
};

export type TUseCounter = Awaited<ReturnType<typeof useCounter>>;
