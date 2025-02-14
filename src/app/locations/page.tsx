import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { z } from 'zod';
import { Locations } from './Locations';

const searchParamsSchema = z.object({
  filter: z.enum(['normal', 'dlc']).optional(),
});

const HomePage: React.FC<PageParams> = async (props) => {
  const searchParams = await props.searchParams;
  const spResult = searchParamsSchema.safeParse(searchParams);
  if (!spResult.success) notFound();
  const sp = spResult.data;
  console.log(sp);

  const locations = await prisma.location.findMany({
    include: {
      names: { select: { fr: true, en: true } },
      bosses: { include: { categories: true } },
    },
  });
  const filterLocations = Object.groupBy(locations, (location) => {
    return location.bosses.some((boss) => {
      return boss.categories.inDlc;
    })
      ? 'dlc'
      : 'normal';
  });
  return (
    <div>
      <Locations
        locations={filterLocations.normal!.map((location) => {
          return { name: location.names };
        })}
        locationsDlc={filterLocations.dlc!.map((location) => {
          return { name: location.names };
        })}
      />
    </div>
  );
};

export default HomePage;
