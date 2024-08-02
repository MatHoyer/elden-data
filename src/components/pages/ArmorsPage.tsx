'use client';
import { reset } from '@/actions/armors';
import { toggleDone } from '@/actions/items';
import { FilterProvider, useFilterContext } from '@/contexts/FilterContext';
import { TUseArmors } from '@/hooks/useArmors';
import { capitalize, cn, shouldRegister } from '@/lib/utils';
import { BookOpen, MapPin } from 'lucide-react';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import DisplayCard from '../DisplayCard';
import { modal } from '../Modal';
import RadioFilter from '../RadioFilter';
import TypeaheadInput from '../TypeaheadInput';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

const Filters: React.FC<{
  data: TUseArmors;
}> = ({ data }) => {
  const { router, pathname, searchParams, createQueryString } = useFilterContext();

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-xl">Filtres Armures</p>
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-3">
          <RadioFilter name="dlc" labels={['tous', 'DLC', 'pas DLC']} />
          <RadioFilter name="armor" labels={['tous', 'récup', 'pas récup']} reverse={true} />
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="show-dlc" className="whitespace-nowrap">
            Seulement boss
          </Label>
          <Switch
            id="show-dlc"
            defaultChecked={searchParams.get('boss') === 'true'}
            onCheckedChange={(checked) => {
              router.push(pathname + '?' + createQueryString('boss', String(checked)));
            }}
          />
        </div>
      </div>
      <TypeaheadInput
        className="w-[300px]"
        datas={[...new Set(data.armors.map((armor) => armor.name))]}
        placeholder="Nom"
        defaultValue={searchParams.get('name') ?? ''}
        onChange={(value) => {
          if (value === '') router.push(pathname + '?' + createQueryString('name', ''));
        }}
        onSelect={(value) => {
          router.push(pathname + '?' + createQueryString('name', value as string));
        }}
        onBlur={(e) => {
          router.push(pathname + '?' + createQueryString('name', e.target.value));
        }}
      />
    </div>
  );
};

const SetModal: React.FC<{ elements: TUseArmors['armors'][number]['elements']; session: Session | null }> = ({
  elements,
  session,
}) => {
  const [done, setDone] = useState(elements.map((element) => element.done));

  return (
    <div className="grid gap-3">
      {elements.map((element, index) => (
        <div
          key={index}
          className={cn(
            done[index] ? 'border-4 border-green-400' : 'border-4 border-background',
            'flex justify-center items-center gap-3 rounded-md p-1 cursor-pointer'
          )}
          onClick={() => {
            if (session) {
              toggleDone({ itemId: element.id });
              setDone((prev) => prev.map((d, i) => (i === index ? !d : d)));
            } else {
              shouldRegister();
            }
          }}
        >
          <Card
            className="w-[100px] h-[100px] p-3 border-4 border-background"
            style={{
              backgroundImage: `url(${element.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100px',
              height: '100px',
            }}
          ></Card>
          <div className="flex flex-col justify-between w-[200px]">
            <div className={cn('bg-secondary/80 rounded-md p-1 cursor-default')} onClick={(e) => e.stopPropagation()}>
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ArmorsTable: React.FC<{ armors: TUseArmors['armors']; session: Session | null }> = ({ armors, session }) => {
  return (
    <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center justify-center border-4 border-background/80 bg-background/30">
      {armors.map((armor, index) => (
        <DisplayCard
          imageUrl={armor.imageUrl}
          name={armor.name}
          wikiUrl={armor.wikiUrl}
          isValidate={armor.elements.every((element) => element.done)}
          onCLick={() => {
            modal.info({
              title: armor.name,
              content: <SetModal elements={armor.elements} session={session} />,
            });
          }}
          w={230}
          h={450}
          key={index}
          counter={{ done: armor.elements.filter((element) => element.done).length, total: armor.elements.length }}
        />
      ))}
    </div>
  );
};

const ArmorPage: React.FC<{ data: TUseArmors }> = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { data: session } = useSession();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const filterArmors = data.armors.filter((armor) => {
    if (searchParams.has('name') && !armor.name.includes(searchParams.get('name') as string)) return false;
    if (searchParams.has('boss') && searchParams.get('boss') === 'true' && !armor.boss) return false;
    if (searchParams.has('dlc') && searchParams.get('dlc') === 'pas DLC' && armor.inDlc) return false;
    if (searchParams.has('dlc') && searchParams.get('dlc') === 'DLC' && !armor.inDlc) return false;
    if (
      searchParams.has('armor') &&
      searchParams.get('armor') === 'pas récup' &&
      armor.elements.every((element) => element.done)
    )
      return false;
    if (
      searchParams.has('armor') &&
      searchParams.get('armor') === 'récup' &&
      !armor.elements.every((element) => element.done)
    )
      return false;
    return true;
  });

  return (
    <div className="flex flex-col items-center gap-5">
      <Card>
        <h1
          className={cn(
            data.armors.filter((armor) => !armor.inDlc && armor.elements.every((element) => element.done)).length ===
              data.armors.filter((armor) => !armor.inDlc).length && 'text-green-400',
            data.armorsDone === data.armors.length && 'text-gold',
            'text-3xl font-bold p-3'
          )}
        >
          Armures {data.armorsDone}/{data.armors.length}
        </h1>
      </Card>
      <div className="h-fit w-fit rounded-lg border bg-background px-4 py-4 flex flex-col gap-3">
        <FilterProvider value={{ router, pathname, searchParams, createQueryString }}>
          <Filters data={data} />
        </FilterProvider>
      </div>
      <Card>
        <div className="flex gap-3 p-3">
          <Button
            variant={'destructive'}
            onClick={async (e) => {
              e.stopPropagation();
              if (session) {
                const res = await modal.question({
                  title: 'Reinitisaliser les données ?',
                  message: 'Cette action est irreversible',
                  doubleConfirm: true,
                });
                if (res) {
                  reset();
                }
              } else {
                shouldRegister();
              }
            }}
          >
            Réinitialiser
          </Button>
        </div>
      </Card>
      <ArmorsTable armors={filterArmors} session={session} />
    </div>
  );
};

export default ArmorPage;
