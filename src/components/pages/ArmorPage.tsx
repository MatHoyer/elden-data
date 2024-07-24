'use client';
import { TUseArmors } from '@/hooks/useArmors';
import { capitalize, cn } from '@/lib/utils';
import { BookOpen } from 'lucide-react';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { Card, CardTitle } from '../ui/card';

const ArmorsTable: React.FC<{ armors: TUseArmors['armors']; searchParams: ReadonlyURLSearchParams }> = ({
  armors,
  searchParams,
}) => {
  return !searchParams.has('display-card') || searchParams.get('display-card') === 'true' ? (
    <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center justify-center">
      {armors.map((armor, index) => (
        <Card
          key={index}
          className={cn(
            'p-3 cursor-pointer  w-[230px] h-[450px]',
            armor.elements.every((element) => element) ? 'border-4 border-green-400' : 'border-4 border-background'
          )}
          style={{
            backgroundImage: `url(${armor.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '230px',
            height: '450px',
          }}
          onClick={() => {}}
        >
          <div className="flex flex-col justify-between h-full">
            <div></div>
            <CardTitle
              className={cn('bg-secondary/80 rounded-md p-1 cursor-default')}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center select-none">
                <div className="flex gap-3">
                  <a target="_blank" href={armor.wikiUrl}>
                    <BookOpen />
                  </a>
                </div>
                <p className="text-center">{capitalize(armor.name)}</p>
              </div>
            </CardTitle>
          </div>
        </Card>
      ))}
    </div>
  ) : (
    <div></div>
  );
};

const ArmorPage: React.FC<{ data: TUseArmors }> = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log(data);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const filterArmors = data.armors.filter((armor) => {
    if (searchParams.has('dlc') && searchParams.get('dlc') === 'false' && armor.inDlc) return false;
    if (searchParams.has('name') && !armor.name.includes(searchParams.get('name') as string)) return false;
    return true;
  });

  return (
    <div>
      <ArmorsTable armors={data.armors} searchParams={searchParams} />
    </div>
  );
};

export default ArmorPage;
