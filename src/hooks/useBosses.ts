import { reset } from '@/app/actions/bosses';
import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';

export const useBosses = async () => {
  const session = await auth();
  let bosses = await prisma.boss.findMany({ where: { userId: session?.user?.id } });
  if (bosses.length === 0) {
    await reset();
    bosses = await prisma.boss.findMany({ where: { userId: session?.user?.id } });
  }
  const bossesDone = await prisma.boss.count({ where: { userId: session?.user?.id, done: true } });
  const bossesByLocation = await prisma.boss.groupBy({
    by: ['location'],
    where: { userId: session?.user?.id },
    _count: true,
  });
  const bossesByLocationDone = await prisma.boss.groupBy({
    by: ['location'],
    where: { userId: session?.user?.id, done: true },
    _count: true,
  });
  return { bosses, bossesDone, bossesByLocation, bossesByLocationDone };
};
