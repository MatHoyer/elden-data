'use client';

import { Card } from '@/components/ui/card';
import { TextSeparator } from '@/components/ui/separator';
import { getUrl } from '@/lib/utils/url-utils';
import { useRouter } from 'next/navigation';
import React from 'react';

const LocationCard: React.FC<{ name: { en: string; fr: string } }> = ({
  name,
}) => {
  const router = useRouter();
  return (
    <Card
      onClick={() =>
        router.push(getUrl(`locationName`, { locationName: name.en }))
      }
      className="relative"
    >
      <img src={'/locations/' + name.en + '.png'} className="w-full h-full" />
      <div className="flex absolute inset-0 justify-center items-end text-center p-2">
        <Card className="flex bg-primary text-white text-xl w-5/6 justify-center items-center p-1">
          {name.fr}
        </Card>
      </div>
    </Card>
  );
};

export const Locations: React.FC<{
  locations: {
    name: {
      en: string;
      fr: string;
    };
  }[];
  locationsDlc: {
    name: {
      en: string;
      fr: string;
    };
  }[];
}> = ({ locations, locationsDlc }) => {
  return (
    <div className="flex flex-col gap-6">
      <TextSeparator className="text-3xl">Jeu de Base</TextSeparator>
      <div className="grid grid-cols-7 gap-3">
        {locations.map((location, i) => {
          return <LocationCard key={i} name={location.name} />;
        })}
      </div>
      <TextSeparator className="text-3xl">DLC</TextSeparator>
      <div className="grid grid-cols-7 gap-3">
        {locationsDlc.map((location, i) => {
          return <LocationCard key={i} name={location.name} />;
        })}
      </div>
    </div>
  );
};
