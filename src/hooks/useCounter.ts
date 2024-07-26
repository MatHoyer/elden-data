'use server';
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
  const all = await prisma.item.count({
    where: { type },
  });

  return { name: type, done, all };
};

export const useCounter = async () => {
  const session = await auth();
  const id = session?.user?.id;

  const data = [];
  const bossesDone = await prisma.boss_user.count({
    where: { userId: id, done: true },
  });
  const bossesAll = await prisma.boss.count();
  data.push({ name: 'boss', done: bossesDone, all: bossesAll });

  data.push(await countItems('talisman', id));
  data.push(await countItems('armor', id));
  data.push(await countItems('spell', id));
  data.push(await countItems('weapon', id));
  data.push(await countItems('shield', id));
  data.push(await countItems('asheOfWar', id));
  data.push(await countItems('spiritAshe', id));
  data.push(await countItems('cookBook', id));
  data.push(await countItems('whetBlade', id));

  return data;
};

export type TUseCounter = Awaited<ReturnType<typeof useCounter>>;
