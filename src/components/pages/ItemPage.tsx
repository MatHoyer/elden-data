'use client';
import { reset, toggleDone } from '@/actions/items';
import { TUseItems } from '@/hooks/useItems';
import { useLocalstorage } from '@/hooks/useLocalstorage';
import { capitalize, cn, groupBy } from '@/lib/utils';
import { BookOpen, MapPin } from 'lucide-react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import DisplayCard from '../DisplayCard';
import { modal } from '../Modal';
import TypeaheadInput from '../TypeaheadInput';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Switch } from '../ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

const Filters: React.FC<{
  router: AppRouterInstance;
  pathname: string;
  searchParams: ReadonlyURLSearchParams;
  createQueryString: (key: string, value: string) => string;
  data: TUseItems;
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
        </div>
        <div>
          <RadioGroup
            defaultValue={searchParams.get('item') ?? 'all'}
            onValueChange={(value) => {
              router.push(pathname + '?' + createQueryString('item', value as string));
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
        datas={[...new Set(data.items.map((item) => item.name))]}
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

const ItemsTable: React.FC<{
  items: TUseItems['items'];
  searchParams: ReadonlyURLSearchParams;
  itemType: string;
  solo?: boolean;
}> = ({ items, searchParams, itemType, solo }) => {
  return !searchParams.has('display-card') || searchParams.get('display-card') === 'true' ? (
    <div
      className={cn(
        solo && 'border-4 border-background/80 bg-background/30',
        'grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'
      )}
    >
      {items.map((item, index) => (
        <DisplayCard
          imageUrl={item.imageUrl}
          name={item.name}
          locationUrl={item.locationUrl}
          wikiUrl={item.wikiUrl}
          isValidate={item.done}
          onCLick={() => toggleDone({ itemId: item.id })}
          w={itemType === 'weapon' ? 300 : 300}
          h={itemType === 'weapon' ? 300 : 240}
          fillImage={itemType === 'talisman' || itemType === 'shield' ? true : false}
          key={index}
        />
      ))}
    </div>
  ) : (
    <Table className={cn(solo && 'border-4 border-background/80 bg-background/30')}>
      <TableHeader>
        <TableRow>
          <TableHead>Nom</TableHead>
          <TableHead>Localisation</TableHead>
          <TableHead>Wiki</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => {
          return (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <a target="_blank" href={item?.locationUrl}>
                  <MapPin />
                </a>
              </TableCell>
              <TableCell>
                <a target="_blank" href={item?.wikiUrl}>
                  <BookOpen />
                </a>
              </TableCell>
              <TableCell>
                <Checkbox
                  defaultChecked={item.done}
                  onCheckedChange={() => {
                    toggleDone({ itemId: item.id });
                  }}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

const ItemPage: React.FC<{ data: TUseItems; itemType: string }> = ({ data, itemType }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [local, setLocal] = useLocalstorage(itemType, [] as string[]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const filterItems = groupBy(
    data.items.filter((item) => {
      if (searchParams.has('dlc') && searchParams.get('dlc') === 'false' && item.inDlc) return false;
      if (searchParams.has('name') && !item.name.includes(searchParams.get('name') as string)) return false;
      if (searchParams.has('item') && searchParams.get('item') === 'notdone' && item.done) return false;
      if (searchParams.has('item') && searchParams.get('item') === 'done' && !item.done) return false;
      return true;
    }),
    (item) => item.sortableType || 'other'
  );

  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className={cn(data.itemsDone === data.items.length && 'text-green-400', 'text-3xl font-bold')}>
        {capitalize(itemType)} {data.itemsDone}/{data.items.length}
      </h1>
      <div className="h-fit w-fit rounded-lg border bg-background px-4 py-4 flex flex-col gap-3">
        <Filters
          router={router}
          pathname={pathname}
          searchParams={searchParams}
          createQueryString={createQueryString}
          data={data}
          itemType={itemType}
        />
      </div>
      <div className="flex gap-3">
        <div className="flex items-center gap-2">
          <Label htmlFor="switch-card">Afficher avec des cartes</Label>
          <Switch
            id="switch-card"
            defaultChecked={!searchParams.has('display-card') || searchParams.get('display-card') === 'true'}
            onCheckedChange={(checked) => {
              router.push(pathname + '?' + createQueryString('display-card', String(checked)));
            }}
          />
        </div>
        {Object.entries(filterItems).length > 1 && (
          <>
            <Button
              variant={'secondary'}
              onClick={async (e) => {
                e.stopPropagation();
                setLocal([...Object.keys(filterItems)]);
              }}
            >
              Ouvrir tout
            </Button>
            <Button
              variant={'secondary'}
              onClick={async (e) => {
                e.stopPropagation();
                setLocal([]);
              }}
            >
              Fermer tout
            </Button>
          </>
        )}
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
              reset();
            }
          }}
        >
          Réinitialiser
        </Button>
      </div>
      {Object.entries(filterItems).length !== 1 ? (
        <Accordion value={local} className="w-full" type="multiple">
          {Object.entries(filterItems)
            .filter(([sortableType, items]) => items !== undefined)
            .map(([sortableType, items], index) => {
              const countDone =
                data.itemsBySortableTypeDone.find((items) => items.sortableType === sortableType)?._count ?? 0;
              const count = data.itemsBySortableType.find((items) => items.sortableType === sortableType)?._count ?? 0;

              return (
                <AccordionItem
                  onClick={() => {
                    if (!local.includes(sortableType)) {
                      setLocal([...local, sortableType]);
                    } else {
                      setLocal(local.filter((l) => l !== sortableType));
                    }
                  }}
                  key={index}
                  value={sortableType}
                >
                  <AccordionTrigger className="flex gap-2 bg-background/80">
                    <div className={cn(count === countDone ? 'text-green-400' : '', 'flex justify-between w-full')}>
                      <p className="pl-3">{sortableType}</p>
                      <p>
                        {countDone}/{count}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="border-4 border-background/80 bg-background/30">
                    {items && <ItemsTable items={items} searchParams={searchParams} itemType={itemType} />}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
        </Accordion>
      ) : (
        <div className="w-full">
          {filterItems[Object.entries(filterItems)[0][0]] && (
            <ItemsTable
              items={filterItems[Object.entries(filterItems)[0][0]]}
              searchParams={searchParams}
              itemType={itemType}
              solo={true}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ItemPage;
