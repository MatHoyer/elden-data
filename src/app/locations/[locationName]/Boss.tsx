'use client';

import { Card } from '@/components/ui/card';
import { TextSeparator } from '@/components/ui/separator';

type TBoss = {
  name: {
    en: string;
    fr: string;
  };
  locationUrl: string;
  wikiUrl: string;
  imageUrl: string;
  remembrance: {
    name: {
      en: string | undefined;
      fr: string | undefined;
    };
    imageUrl: string | undefined;
  };
  category: {
    inNight: boolean;
    needBell: boolean;
    inDlc: boolean;
    major: boolean;
  };
  isDone: boolean;
};

const BossCard: React.FC<{ boss: TBoss }> = ({ boss }) => {
  return (
    <Card className="relative">
      <img src={boss.imageUrl} className="w-full h-full" />
      <div className="flex absolute inset-0 justify-center items-end text-center p-2">
        <Card className="flex bg-primary text-white text-xl w-5/6 justify-center items-center p-1">
          {boss.name.fr}
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
