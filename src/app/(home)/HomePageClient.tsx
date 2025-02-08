'use client';

import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { check } from '@/features/bosses/actions/check';
import { cn } from '@/lib/utils/utils';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
          {progress >= 0 && `${progress}/`}
          {total}
        </p>
        <div
          className="h-6 bg-amber-400"
          style={{
            width: progress >= 0 ? `${(progress / total) * 100}%` : '100%',
          }}
        />
      </div>
    </div>
  );
};

const RemembrancesCard: React.FC<{
  id: string;
  name: string;
  image: string;
  isDone: boolean;
}> = ({ id, name, image, isDone }) => {
  const router = useRouter();

  const toggleMutation = useMutation({
    mutationFn: async () => {
      const res = await check({
        boss: {
          id,
        },
      });
    },
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Card
            onClick={() => {
              toggleMutation.mutate();
            }}
            className={cn(
              'flex justify-center items-center',
              isDone ? 'bg-amber-400/50' : 'opacity-80'
            )}
          >
            <img
              className="w-36 h-36 object-cover"
              src={image || undefined}
              alt="boss"
            />
          </Card>
        </TooltipTrigger>
        <TooltipContent
          onPointerDownOutside={(e) => {
            e.preventDefault();
          }}
          side="bottom"
          className="text-2xl"
        >
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const HomePageClient: React.FC<{
  boss: {
    normal: {
      remembrances: {
        id: string;
        name: string;
        image: string;
        isDone: boolean;
      }[];
      killed: number;
      total: number;
    };
    dlc: {
      remembrances: {
        id: string;
        name: string;
        image: string;
        isDone: boolean;
      }[];
      killed: number;
      total: number;
    };
  };
  items: { name: string; taken: number; total: number }[];
}> = ({ boss, items }) => {
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
          <div className="grid grid-cols-5 grid-rows-3 gap-2 px-2 select-none">
            {boss.normal.remembrances.map((rem, i) => {
              return <RemembrancesCard key={i} {...rem} />;
            })}
          </div>
          <Separator className="h-1" />
          <div className="grid grid-cols-5 grid-rows-2 gap-2 px-2 select-none">
            {boss.dlc.remembrances.map((rem, i) => {
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
