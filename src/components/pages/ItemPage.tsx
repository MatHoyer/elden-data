'use client';
import { reset, toggleDone } from '@/actions/items';
import { TUseItems } from '@/hooks/useItems';
import { bosses } from '@/lib/defaultData/bosses';
import { cn, groupBy } from '@/lib/utils';
import { BookOpen, MapPin } from 'lucide-react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { modal } from '../Modal';
import TypeaheadInput from '../TypeaheadInput';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Button } from '../ui/button';
import { Card, CardTitle } from '../ui/card';
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
}> = ({ router, pathname, searchParams, createQueryString, data }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-xl">Filtres items</p>
      <div className="flex gap-3">
        <div className="flex flex-col items-end justify-center gap-3">
          <div className="flex items-center gap-2">
            <Label htmlFor="show-dlc" className="whitespace-nowrap">
              DLC
            </Label>
            <Checkbox
              id="show-dlc"
              defaultChecked={searchParams.get('dlc') === 'true'}
              onCheckedChange={(checked) => {
                router.push(pathname + '?' + createQueryString('dlc', String(checked)));
              }}
            />
          </div>
        </div>
        <div>
          <RadioGroup
            defaultValue="all"
            onValueChange={(value) => {
              router.push(pathname + '?' + createQueryString('boss', value as string));
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
        placeholder="name"
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

const ItemsTable: React.FC<{ items: TUseItems['items']; searchParams: ReadonlyURLSearchParams }> = ({
  items,
  searchParams,
}) => {
  return searchParams.has('display-card') && searchParams.get('display-card') === 'true' ? (
    <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center justify-center">
      {items.map((item, index) => (
        <Card
          key={index}
          className={cn('p-3 cursor-pointer', item.done ? 'border-4 border-green-400' : 'border-4 border-background')}
          style={{
            backgroundImage: `url(${item.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
          }}
          onClick={() => {
            toggleDone({ itemId: item.id });
          }}
        >
          <div className="flex flex-col justify-between h-full">
            <div className="h-40"></div>
            <CardTitle
              className={cn('bg-secondary/80 rounded-md p-1 cursor-default')}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center select-none">
                <div className="flex gap-3">
                  <a target="_blank" href={item.locationUrl || undefined}>
                    <MapPin />
                  </a>
                  <a target="_blank" href={item.wikiUrl}>
                    <BookOpen />
                  </a>
                </div>
                <p className="text-center">{item.name}</p>
              </div>
            </CardTitle>
          </div>
        </Card>
      ))}
    </div>
  ) : (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Wiki</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => {
          const goodBoss = bosses.find((b) => b.locationUrl === item.locationUrl);
          return (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <a target="_blank" href={goodBoss?.locationUrl}>
                  <MapPin />
                </a>
              </TableCell>
              <TableCell>
                <a target="_blank" href={goodBoss?.wikiUrl}>
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

const ItemPage: React.FC<{ data: TUseItems }> = ({ data }) => {
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
        Items {data.itemsDone}/{data.items.length}
      </h1>
      <div className="h-fit w-fit rounded-lg border bg-background px-4 py-4 flex flex-col gap-3">
        <Filters
          router={router}
          pathname={pathname}
          searchParams={searchParams}
          createQueryString={createQueryString}
          data={data}
        />
      </div>
      <div className="flex gap-3">
        <div className="flex items-center gap-2">
          <Label htmlFor="switch-card">Display with card</Label>
          <Switch
            id="switch-card"
            defaultChecked={searchParams.get('display-card') === 'true'}
            onCheckedChange={(checked) => {
              router.push(pathname + '?' + createQueryString('display-card', String(checked)));
            }}
          />
        </div>
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
          Reset
        </Button>
      </div>
      {Object.entries(filterItems).length !== 1 ? (
        Object.entries(filterItems)
          .filter(([sortableType, items]) => items !== undefined)
          .map(([sortableType, items], index) => {
            const countDone =
              data.itemsBySortableTypeDone.find((items) => items.sortableType === sortableType)?._count ?? 0;
            const count = data.itemsBySortableType.find((items) => items.sortableType === sortableType)?._count ?? 0;

            return (
              <Accordion key={index} className="w-full" type="single" collapsible>
                <AccordionItem value={sortableType}>
                  <AccordionTrigger className="flex gap-2">
                    <div className={cn(count === countDone ? 'text-green-400' : '', 'flex justify-between w-full')}>
                      <p>{sortableType}</p>
                      <p>
                        {countDone}/{count}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {items && <ItemsTable items={items} searchParams={searchParams} />}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })
      ) : (
        <div className="w-full">{data.items && <ItemsTable items={data.items} searchParams={searchParams} />}</div>
      )}
    </div>
  );
};

export default ItemPage;
