'use client';
import { toggleDone } from '@/actions/items';
import { TUseArmors } from '@/hooks/useArmors';
import { capitalize, cn } from '@/lib/utils';
import { BookOpen, MapPin } from 'lucide-react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import DisplayCard from '../DisplayCard';
import { modal } from '../Modal';
import TypeaheadInput from '../TypeaheadInput';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

const Filters: React.FC<{
  router: AppRouterInstance;
  pathname: string;
  searchParams: ReadonlyURLSearchParams;
  createQueryString: (key: string, value: string) => string;
  data: TUseArmors;
  itemType: string;
}> = ({ router, pathname, searchParams, createQueryString, data, itemType }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-xl">Filtres {itemType}</p>
      <div className="flex gap-3">
        <div className="flex flex-col items-end justify-center gap-3">
          <div className="flex items-center gap-2">
            <Label htmlFor="show-dlc" className="whitespace-nowrap">
              DLC
            </Label>
            <Checkbox
              id="show-dlc"
              defaultChecked={!searchParams.has('dlc') || searchParams.get('dlc') === 'true'}
              onCheckedChange={(checked) => {
                router.push(pathname + '?' + createQueryString('dlc', String(checked)));
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="show-dlc" className="whitespace-nowrap">
              Seulement boss
            </Label>
            <Checkbox
              id="show-dlc"
              defaultChecked={searchParams.get('boss') === 'true'}
              onCheckedChange={(checked) => {
                router.push(pathname + '?' + createQueryString('boss', String(checked)));
              }}
            />
          </div>
        </div>
        <div>
          <RadioGroup
            defaultValue="all"
            onValueChange={(value) => {
              router.push(pathname + '?' + createQueryString('armor', value as string));
            }}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">Tous</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="done" id="done" />
              <Label htmlFor="done">Récup</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="notdone" id="notdone" />
              <Label htmlFor="notdone">Pas récup</Label>
            </div>
          </RadioGroup>
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

const SetModal: React.FC<{ elements: TUseArmors['armors'][number]['elements'] }> = ({ elements }) => {
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
            toggleDone({ itemId: element.id });
            setDone((prev) => prev.map((d, i) => (i === index ? !d : d)));
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
    if (searchParams.has('boss') && searchParams.get('boss') === 'true' && !armor.boss) return false;
    if (
      searchParams.has('armor') &&
      searchParams.get('armor') === 'notdone' &&
      armor.elements.every((element) => element.done)
    )
      return false;
    if (
      searchParams.has('armor') &&
      searchParams.get('armor') === 'done' &&
      !armor.elements.every((element) => element.done)
    )
      return false;
    return true;
  });

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="h-fit w-fit rounded-lg border bg-background px-4 py-4 flex flex-col gap-3">
        <Filters
          createQueryString={createQueryString}
          router={router}
          pathname={pathname}
          searchParams={searchParams}
          data={data}
          itemType="armor"
        />
      </div>
      <div className="flex gap-3">
        <Button
          variant={'destructive'}
          onClick={async (e) => {
            e.stopPropagation();
            const res = await modal.question({
              title: 'Reinitisaliser les données ?',
              message: 'Cette action est irreversible',
              doubleConfirm: true,
            });
            if (res) {
              console.log('reset');
            }
          }}
        >
          Réinitialiser
        </Button>
      </div>
      <ArmorsTable armors={filterArmors} searchParams={searchParams} />
    </div>
  );
};

export default ArmorPage;
