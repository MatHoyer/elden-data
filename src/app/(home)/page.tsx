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
  const itemCategories = await prisma.itemCategory.findMany({
    where: {
      parentCategory: null,
    },
    include: {
      names: { select: { en: true, fr: true } },
      subCategories: {
        include: {
          names: true,
          items: {
            include: {
              names: true,
              categories: true,
              users: {
                where: {
                  userId: session?.id ?? '-1',
                },
                include: {
                  user: true,
                },
              },
            },
          },
        },
      },
      items: {
        include: {
          names: true,
          categories: true,
          users: {
            where: {
              userId: session?.id ?? '-1',
            },
            include: {
              user: true,
            },
          },
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
              names: boss.remembrance!.names,
              image: boss.remembrance!.imageUrl,
              isDone: boss.users[0]?.isDone || false,
            })),
            killed: session ? doneUserBosses.normal?.length || 0 : -1,
            total: totalBosses.normal!.length,
          },
          dlc: {
            remembrances: remembranceBosses.dlc!.map((boss) => ({
              id: boss.id,
              names: boss.remembrance!.names,
              image: boss.remembrance!.imageUrl,
              isDone: boss.users[0]?.isDone || false,
            })),
            killed: session ? doneUserBosses.dlc?.length || 0 : -1,
            total: totalBosses.dlc!.length,
          },
        }}
        items={itemCategories.map((itemCategory) => ({
          names: itemCategory.names,
          taken: session?.id
            ? itemCategory.items.length === 0
              ? itemCategory.subCategories.reduce(
                  (acc, subCategory) =>
                    acc +
                    subCategory.items.filter((item) => item.users[0]?.isDone)
                      .length,
                  0
                )
              : itemCategory.items.filter((item) => item.users[0]?.isDone)
                  .length
            : -1,

          total:
            itemCategory.items.length === 0
              ? itemCategory.subCategories.reduce(
                  (acc, subCategory) => acc + subCategory.items.length,
                  0
                )
              : itemCategory.items.length,
        }))}
      />
    </div>
  );
};

export default HomePage;
