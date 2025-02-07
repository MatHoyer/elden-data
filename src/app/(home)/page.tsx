import prisma from '@/lib/prisma';
import { auth } from '@/lib/utils/auth-utils';
import { HomePageClient } from './HomePageClient';

const HomePage = async () => {
  const session = await auth();

  const bosses = await prisma.boss.findMany({
    include: {
      names: true,
      categories: true,
    },
  });
  const userBosses = session
    ? await prisma.user_Boss.findMany({
        where: {
          userId: session.id,
        },
        include: {
          boss: {
            include: {
              categories: true,
            },
          },
        },
      })
    : [];

  const remembranceBosses = Object.groupBy(
    bosses.filter((boss) => boss.categories.hasRemembrance),
    (boss) => (boss.categories.inDlc ? 'dlc' : 'normal')
  );
  const totalBosses = Object.groupBy(bosses, (boss) =>
    boss.categories.inDlc ? 'dlc' : 'normal'
  );
  const doneUserBosses = Object.groupBy(
    userBosses.filter((userBoss) => userBoss.isDone),
    (userBoss) => (userBoss.boss.categories.inDlc ? 'dlc' : 'normal')
  );

  return (
    <div>
      <HomePageClient
        boss={{
          normal: {
            remembrances: remembranceBosses.normal!.map((boss) => ({
              name: boss.names.fr,
              image: boss.imageUrl,
            })),
            killed: session ? doneUserBosses.normal?.length || 0 : -1,
            total: totalBosses.normal!.length,
          },
          dlc: {
            remembrances: remembranceBosses.dlc!.map((boss) => ({
              name: boss.names.fr,
              image: boss.imageUrl,
            })),
            killed: session ? doneUserBosses.dlc?.length || 0 : -1,
            total: totalBosses.dlc!.length,
          },
        }}
        items={[{ name: 'test', taken: session ? 0 : -1, total: 10 }]}
      />
    </div>
  );
};

export default HomePage;
