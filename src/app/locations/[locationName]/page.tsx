import { notFound } from 'next/navigation';
import { z } from 'zod';
import { Boss } from './Boss';
import { auth } from '@/lib/utils/auth-utils';
import prisma from '@/lib/prisma';

const paramsSchema = z.object({
  locationName: z.string(),
});

const HomePage: React.FC<PageParams> = async (props) => {
  const params = await props.params;
  const pResult = paramsSchema.safeParse(params);
  if (!pResult.success) notFound();
  const p = pResult.data;

  const session = await auth();

  const bosses = await prisma.boss.findMany({
    include: {
      names: true,
      categories: true,
      remembrance: { include: { names: true } },
      location: { include: { names: true } },
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

  const bossByLocation = bosses.filter((boss) => {
    return boss.location.names.en === decodeURIComponent(p.locationName);
  });

  return (
    <div>
      <Boss
        locationName={decodeURIComponent(p.locationName)}
        bosses={bossByLocation.map((boss) => {
          return {
            name: { en: boss.names.en, fr: boss.names.fr },
            locationUrl: boss.locationUrl,
            wikiUrl: boss.wikiUrl,
            imageUrl: boss.imageUrl,
            remembrance: {
              name: {
                en: boss.remembrance?.names.en,
                fr: boss.remembrance?.names.fr,
              },
              imageUrl: boss.remembrance?.imageUrl,
            },
            category: {
              inNight: boss.categories.inNight,
              needBell: boss.categories.needBell,
              inDlc: boss.categories.inDlc,
              major: boss.categories.major,
            },
            isDone: boss.users[0]?.isDone || false,
          };
        })}
      />
    </div>
  );
};

export default HomePage;
