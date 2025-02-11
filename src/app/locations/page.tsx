import prisma from '@/lib/prisma';
import { Locations } from './Locations';

const HomePage = async () => {
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
