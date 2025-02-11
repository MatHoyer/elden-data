import prisma from '@/lib/prisma';
import { auth } from '@/lib/utils/auth-utils';
import { HomePageClient } from './HomePageClient';

const HomePage = async () => {
  const session = await auth();

  const bosses = await prisma.boss.findMany({
    include: {
      names: true,
      categories: true,
      remembrance: { include: { names: true } },
      users: {
        where: {
          userId: session?.id ?? '-1',
        },
        include: {
          user: true,
        },
      },
    },
  });

  const remembranceBosses = Object.groupBy(
    bosses.filter((boss) => !!boss.remembrance),
    (boss) => (boss.categories.inDlc ? 'dlc' : 'normal')
  );
  const totalBosses = Object.groupBy(bosses, (boss) =>
    boss.categories.inDlc ? 'dlc' : 'normal'
  );
  const doneUserBosses = Object.groupBy(
    bosses.filter((userBoss) => userBoss.users[0]?.isDone || false),
    (userBoss) => (userBoss.categories.inDlc ? 'dlc' : 'normal')
  );

  return (
    <div>
      <HomePageClient
        boss={{
          normal: {
            remembrances: remembranceBosses.normal!.map((boss) => ({
              id: boss.id,
              name: boss.remembrance!.names.fr,
              image: boss.remembrance!.imageUrl,
              isDone: boss.users[0]?.isDone || false,
            })),
            killed: session ? doneUserBosses.normal?.length || 0 : -1,
            total: totalBosses.normal!.length,
          },
          dlc: {
            remembrances: remembranceBosses.dlc!.map((boss) => ({
              id: boss.id,
              name: boss.remembrance!.names.fr,
              image: boss.remembrance!.imageUrl,
              isDone: boss.users[0]?.isDone || false,
            })),
            killed: session ? doneUserBosses.dlc?.length || 0 : -1,
            total: totalBosses.dlc!.length,
          },
        }}
        items={[
          { name: 'test', taken: session ? 0 : -1, total: 10 },
          { name: 'test', taken: session ? 0 : -1, total: 10 },
          { name: 'test', taken: session ? 0 : -1, total: 10 },
          { name: 'test', taken: session ? 0 : -1, total: 10 },
        ]}
      />
    </div>
  );
};

export default HomePage;
