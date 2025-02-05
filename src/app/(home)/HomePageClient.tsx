'use client';

import { Card } from '@/components/ui/card';
import { getUrl, TRoute } from '@/lib/utils/url-utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const HomePageClient = () => {
  const session = useSession();
  const isConnected = !!session.data;
  const router = useRouter();

  const categories: { name: string; url: TRoute }[] = [
    { name: 'Boss', url: 'bosses' },
    { name: 'Armes', url: 'weapons' },
    { name: 'Boucliers', url: 'shields' },
    { name: 'Talismans', url: 'talismans' },
    { name: 'Armures', url: 'armors' },
    { name: 'Sorts', url: 'sorceries' },
    { name: 'Invocations', url: 'invocations' },
    { name: 'Cendres de guerre', url: 'ashesOfWar' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {categories.map((cat) => {
        return (
          <Card
            key={cat.name}
            className="flex flex-col h-80 relative"
            onClick={() => router.push(getUrl(cat.url))}
          >
            <div className="flex justify-center items-center h-full">
              <p className="text-6xl">{cat.name}</p>
            </div>
            <div className="absolute bottom-2 flex justify-center w-full">
              <p className="text-2xl">{isConnected ? '0 / 200' : '200'}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
