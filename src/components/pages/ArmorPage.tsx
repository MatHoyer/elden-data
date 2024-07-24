'use client';
import { toggleDone } from '@/actions/items';
import { TUseArmors } from '@/hooks/useArmors';
import { cn } from '@/lib/utils';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import DisplayCard from '../DisplayCard';
import { modal } from '../Modal';
import { Card } from '../ui/card';

const SetModal: React.FC<{ elements: TUseArmors['armors'][number]['elements'] }> = ({ elements }) => {
  const [done, setDone] = useState(elements.map((element) => element.done));

  return (
    <div className="flex justify-center gap-3">
      {elements.map((element, index) => (
        <Card
          key={index}
          className={cn(
            `w-[100px]`,
            `h-[100px]`,
            'p-3 cursor-pointer',
            done[index] ? 'border-4 border-green-400' : 'border-4 border-background'
          )}
          style={{
            backgroundImage: `url(${element.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100px',
            height: '100px',
          }}
          onClick={() => {
            toggleDone({ itemId: element.id });
            setDone((prev) => prev.map((d, i) => (i === index ? !d : d)));
          }}
        >
          {/* <div className="flex flex-col justify-between h-full">
            <div></div>
            <CardTitle
              className={cn('bg-secondary/80 rounded-md p-1 cursor-default')}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center select-none">
                <div className="flex gap-3">
                  <a target="_blank" href={element.locationUrl}>
                    <MapPin />
                  </a>
                  <a target="_blank" href={element.wikiUrl}>
                    <BookOpen />
                  </a>
                </div>
                <p className="text-center">{capitalize(element.name)}</p>
              </div>
            </CardTitle>
          </div> */}
        </Card>
      ))}
    </div>
  );
};

const ArmorsTable: React.FC<{ armors: TUseArmors['armors']; searchParams: ReadonlyURLSearchParams }> = ({
  armors,
  searchParams,
}) => {
  return !searchParams.has('display-card') || searchParams.get('display-card') === 'true' ? (
    <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center justify-center">
      {armors.map((armor, index) => (
        <DisplayCard
          imageUrl={armor.imageUrl}
          name={armor.name}
          wikiUrl={armor.wikiUrl}
          isValidate={armor.elements.every((element) => element.done)}
          onCLick={() => {
            modal.info({
              title: armor.name,
              content: <SetModal elements={armor.elements} />,
            });
          }}
          w={230}
          h={450}
          key={index}
          counter={{ done: armor.elements.filter((element) => element.done).length, total: armor.elements.length }}
        />
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
