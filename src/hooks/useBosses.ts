'use server';
import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';

export const useBosses = async () => {
  const session = await auth();
  const id = session?.user?.id;

  let bosses = [];
  if (id) {
    const userBossesNumber = await prisma.boss_user.count({
      where: { userId: id },
      select: true,
    });
    const staticBosses = await prisma.boss.findMany({ orderBy: { id: 'asc' } });
    if (userBossesNumber !== staticBosses.length && id) {
      await prisma.boss_user.createMany({
        data: staticBosses.map((boss) => ({ userId: id, bossId: boss.id })),
        skipDuplicates: true,
      });
    }
    const userBosses = await prisma.boss_user.findMany({
      where: { userId: id },
      include: { boss: true },
      orderBy: { bossId: 'asc' },
    });
    bosses = userBosses.map((b) => ({ ...b.boss, done: b.done }));
  } else {
    const userBosses = await prisma.boss.findMany({ orderBy: { id: 'asc' } });
    bosses = userBosses.map((b) => ({ ...b, done: false }));
  }

  const bossesByLocation = await prisma.boss.groupBy({
    by: ['location'],
    _count: true,
  });

  const bossesByLocationDone = bossesByLocation.map((b) => ({
    location: b.location,
    _count: bosses.filter((boss) => boss.location === b.location && boss.done).length,
  }));

  const bossesDone = bosses.filter((b) => b.done).length;
  return { bosses, bossesDone, bossesByLocation, bossesByLocationDone };
};

export type TUseBosses = Awaited<ReturnType<typeof useBosses>>;
