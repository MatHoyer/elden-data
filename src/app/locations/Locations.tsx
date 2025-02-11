'use client';

import { Card } from '@/components/ui/card';
import { TextSeparator } from '@/components/ui/separator';
import React from 'react';

const LocationCard: React.FC<{ name: string }> = ({ name }) => {
  return (
    <Card className="relative">
      <img src="/eldenRing.png" />
      <div className="flex absolute inset-0 justify-center items-end text-center">
        <Card className="flex bg-primary text-white text-xl w-2/3 h-1/6 justify-center items-center p-3">
          {name}
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
          return <LocationCard key={i} name={location.name.fr} />;
        })}
      </div>
      <TextSeparator className="text-3xl">DLC</TextSeparator>
      <div className="grid grid-cols-7 gap-3">
        {locationsDlc.map((location, i) => {
          return <LocationCard key={i} name={location.name.fr} />;
        })}
      </div>
    </div>
  );
};
