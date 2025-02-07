'use client';

import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { getUrl, TRoute } from '@/lib/utils/url-utils';
import { cn } from '@/lib/utils/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const ProgressBar: React.FC<{
  title: string;
  progress: number;
  total: number;
}> = ({ title, progress, total }) => {
  return (
    <div>
      <h1 className="text-3xl p-5">{title}</h1>
      <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
        <p className="absolute w-full text-black">
          {progress}/{total}
        </p>
        <div
          className="h-6 bg-amber-400"
          style={{ width: `${(progress / total) * 100}%` }}
        />
      </div>
    </div>
  );
};

const RemembrancesCard: React.FC<{ name: string }> = ({ name }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          <Card
            className={cn(
              'flex justify-center items-center',
              name ? 'bg-amber-400' : 'opacity-80'
            )}
          >
            <img
              className="w-36 h-36 object-cover"
              src="https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_grafted_elden_ring_wiki_guide_200px.png"
            />
          </Card>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-2xl">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const HomePageClient = () => {
  const session = useSession();
  const isConnected = !!session.data;
  const router = useRouter();

  const categories: { name: string; url: TRoute }[] = [
    { name: 'Armes', url: 'weapons' },
    { name: 'Boucliers', url: 'shields' },
    { name: 'Talismans', url: 'talismans' },
    { name: 'Armures', url: 'armors' },
    { name: 'Sorts', url: 'sorceries' },
    { name: 'Invocations', url: 'invocations' },
    { name: 'Cendres de guerre', url: 'ashesOfWar' },
  ];

  const remembrances: { name: string }[] = [
    { name: '11111111111' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
    { name: '' },
    { name: '7' },
    { name: '8' },
    { name: '9' },
    { name: '10' },
    { name: '11' },
    { name: '12' },
    { name: '13' },
    { name: '14' },
    { name: '' },
  ];

  const remembrancesDLC: { name: string }[] = [
    { name: '16' },
    { name: '17' },
    { name: '18' },
    { name: '19' },
    { name: '20' },
    { name: '' },
    { name: '22' },
    { name: '23' },
    { name: '24' },
    { name: '25' },
  ];

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-[1fr_3fr]">
        <Card className="grid grid-rows-[1fr_0fr_2fr_0fr_2fr] text-center items-center w-full">
          <h1 className="text-5xl p-5">Boss</h1>
          <Separator className="h-1" />
          <div className="px-10 py-3">
            <ProgressBar title={'Jeu de Base'} progress={75} total={150} />
          </div>
          <Separator className="h-1 mb-[5px]" />
          <div className="px-10 py-3">
            <ProgressBar title={'DLC'} progress={42} total={70} />
          </div>
        </Card>
        <div className="grid grid-rows-[3fr_0fr_2fr] gap-2">
          <div className="grid grid-cols-5 grid-rows-3 gap-2 px-2">
            {remembrances.map((rem, i) => {
              return <RemembrancesCard key={i} name={rem.name} />;
            })}
          </div>
          <Separator className="h-1" />
          <div className="grid grid-cols-5 grid-rows-2 gap-2 px-2">
            {remembrancesDLC.map((rem, i) => {
              return <RemembrancesCard key={i} name={rem.name} />;
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 text-center items-center gap-2">
        {categories.map((cat, i) => {
          return (
            <Card key={i} className="px-10 py-3">
              <ProgressBar title={cat.name} progress={10} total={30} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};
