'use server';
import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';

export const useBosses = async () => {
  const session = await auth();
  const id = session?.user?.id;

  let userBosses = await prisma.boss_user.findMany({
    where: { userId: id },
    include: { boss: true },
  });
  const staticBosses = await prisma.boss.findMany();
  if (userBosses.length !== staticBosses.length) {
    await prisma.boss_user.createMany({
      data: staticBosses.map((boss) => ({ userId: id || '', bossId: boss.id })),
      skipDuplicates: true,
    });
    userBosses = await prisma.boss_user.findMany({
      where: { userId: id },
      include: { boss: true },
    });
  }

  const bossesByLocation = await prisma.boss.groupBy({
    by: ['location'],
    _count: true,
  });

  const bossesByLocationDone = await prisma.boss.groupBy({
    by: ['location'],
    where: { boss_user: { some: { userId: id, done: true } } },
    _count: true,
  });

  const bosses = userBosses.map((b) => ({ ...b.boss, done: b.done }));
  const bossesDone = bosses.filter((b) => b.done).length;
  return { bosses, bossesDone, bossesByLocation, bossesByLocationDone };
};

export type TUseBosses = Awaited<ReturnType<typeof useBosses>>;
