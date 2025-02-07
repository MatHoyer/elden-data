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

const RemembrancesCard: React.FC<{ name: string; image: string }> = ({
  name,
  image,
}) => {
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
            <img className="w-36 h-36 object-cover" src={image} />
          </Card>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-2xl">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const HomePageClient: React.FC<{
  boss: {
    normal: {
      remembrance: { name: string; image: string }[];
      killed: number;
      total: number;
    };
    dlc: {
      remembrance: { name: string; image: string }[];
      killed: number;
      total: number;
    };
  };
  items: { name: string; taken: number; total: number }[];
}> = ({ boss, items }) => {
  const session = useSession();
  const isConnected = !!session.data;
  const router = useRouter();

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-[1fr_3fr]">
        <Card className="grid grid-rows-[1fr_0fr_2fr_0fr_2fr] text-center items-center w-full">
          <h1 className="text-5xl p-5">Boss</h1>
          <Separator className="h-1" />
          <div className="px-10 py-3">
            <ProgressBar
              title={'Jeu de Base'}
              progress={boss.normal.killed}
              total={boss.normal.total}
            />
          </div>
          <Separator className="h-1 mb-[5px]" />
          <div className="px-10 py-3">
            <ProgressBar
              title={'DLC'}
              progress={boss.dlc.killed}
              total={boss.dlc.total}
            />
          </div>
        </Card>
        <div className="grid grid-rows-[3fr_0fr_2fr] gap-2">
          <div className="grid grid-cols-5 grid-rows-3 gap-2 px-2">
            {boss.normal.remembrance.map((rem, i) => {
              return <RemembrancesCard key={i} {...rem} />;
            })}
          </div>
          <Separator className="h-1" />
          <div className="grid grid-cols-5 grid-rows-2 gap-2 px-2">
            {boss.dlc.remembrance.map((rem, i) => {
              return <RemembrancesCard key={i} {...rem} />;
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 text-center items-center gap-2">
        {items.map((item, i) => {
          return (
            <Card key={i} className="px-10 py-3">
              <ProgressBar
                title={item.name}
                progress={item.taken}
                total={item.total}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};
