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
    select: {
      names: { select: { en: true, fr: true } },
      locationUrl: true,
      wikiUrl: true,
      imageUrl: true,
      remembrance: {
        select: { imageUrl: true, names: { select: { en: true, fr: true } } },
      },
      categories: {
        select: { inNight: true, needBell: true, inDlc: true, major: true },
      },
      location: { select: { names: { select: { en: true } } } },
      users: {
        where: {
          userId: session?.id ?? '-1',
        },
        select: {
          user: { select: { bosses: { select: { isDone: true } } } },
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
        bosses={bossByLocation}
      />
    </div>
  );
};

export default HomePage;
