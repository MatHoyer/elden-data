'use client';

import { Card } from '@/components/ui/card';
import { TextSeparator } from '@/components/ui/separator';
import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import { ComponentProps } from 'react';

type TBoss = {
  names: {
    en: string;
    fr: string;
  };
  locationUrl: string;
  wikiUrl: string;
  imageUrl: string;
  remembrance: {
    names: {
      en: string;
      fr: string;
    };
    imageUrl: string;
  } | null;
  categories: {
    inNight: boolean;
    needBell: boolean;
    inDlc: boolean;
    major: boolean;
  };
  location: { names: { en: string } };
  users: { user: { bosses: { isDone: boolean }[] } }[];
};

const ImageContainer: React.FC<
  {
    imageSrc: string;
    altImage: string;
    size?: 'sm' | 'lg';
  } & ComponentProps<'div'>
> = ({ imageSrc, altImage, size = 'lg', className, ...containerProps }) => {
  return (
    <div
      className={cn(
        className,
        size === 'sm' ? 'w-[90px]' : 'w-[300px]',
        'relative aspect-[4/4] overflow-hidden rounded-lg border bg-muted'
      )}
      {...containerProps}
    >
      <Image
        src={imageSrc}
        alt={altImage}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};

const BossCard: React.FC<{ boss: TBoss }> = ({ boss }) => {
  return (
    <Card className="relative">
      <ImageContainer imageSrc={boss.imageUrl} altImage={boss.names.fr} />
      <div className="flex absolute inset-0 justify-center items-end text-center p-2">
        <Card className="flex bg-primary text-white text-xl w-5/6 justify-center items-center p-1">
          {boss.names.fr}
        </Card>
      </div>
    </Card>
  );
};

export const Boss: React.FC<{
  locationName: string;
  bosses: TBoss[];
}> = ({ locationName, bosses }) => {
  return (
    <div>
      <div className="pb-6">
        <TextSeparator className="text-3xl">{locationName}</TextSeparator>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {bosses.map((boss, i) => {
          return <BossCard key={i} boss={boss} />;
        })}
      </div>
    </div>
  );
};
