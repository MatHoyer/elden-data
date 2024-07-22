'use client';
import { resetBosses } from '@/app/actions/resetBosses';
import { toggleBossDone } from '@/app/actions/toggleBossDone';
import { updateBosses } from '@/app/actions/updateBosses';
import { modal } from '@/components/Modal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { bosses } from '@/lib/defaultBosses';
import { cn } from '@/lib/utils';
import { Boss } from '@prisma/client';
import { BookOpen, MapPin } from 'lucide-react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';
import { useBosses } from './hooks/useBosses';
import TypeaheadInput from './TypeaheadInput';
import { Card, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Switch } from './ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

const Filters: React.FC<{
  router: AppRouterInstance;
  pathname: string;
  searchParams: ReadonlyURLSearchParams;
  createQueryString: (key: string, value: string) => string;
  data: Awaited<ReturnType<typeof useBosses>>;
}> = ({ router, pathname, searchParams, createQueryString, data }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-xl">Bosses filter</p>
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
          <div className="flex items-center gap-2">
            <Label htmlFor="show-major" className="whitespace-nowrap">
              Only Major
            </Label>
            <Checkbox
              id="show-major"
              defaultChecked={searchParams.get('major') === 'true'}
              onCheckedChange={(checked) => {
                router.push(pathname + '?' + createQueryString('major', String(checked)));
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
              <Label htmlFor="all">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="done" id="done" />
              <Label htmlFor="done">Done</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="notdone" id="notdone" />
              <Label htmlFor="notdone">Not done</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <TypeaheadInput
        className="w-[300px]"
        datas={[...new Set(data.bosses.map((boss) => boss.name))]}
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

const BossesTable: React.FC<{ dbBosses: Boss[]; searchParams: ReadonlyURLSearchParams }> = ({
  dbBosses,
  searchParams,
}) => {
  return searchParams.has('display-card') && searchParams.get('display-card') === 'true' ? (
    <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center justify-center">
      {dbBosses.map((boss, index) => (
        <Card
          key={index}
          className={cn('p-3 cursor-pointer', boss.done ? 'border-4 border-green-400' : 'border-4 border-background')}
          style={{
            backgroundImage: `url(${bosses.find((b) => b.locationUrl === boss.locationUrl)?.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
          }}
          onClick={() => {
            toggleBossDone({ bossId: boss.id });
          }}
        >
          <div className="flex flex-col justify-between h-full">
            <div className="h-40"></div>
            <CardTitle
              className={cn(boss.major && 'text-gold', 'bg-secondary/80 rounded-md p-1 cursor-default')}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center select-none">
                <div className="flex gap-3">
                  <a target="_blank" href={boss.locationUrl || undefined}>
                    <MapPin />
                  </a>
                  <a target="_blank" href={bosses.find((b) => b.name === boss.name)?.wikiUrl}>
                    <BookOpen />
                  </a>
                </div>
                <p className="text-center">{boss.name}</p>
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
        {dbBosses.map((boss) => {
          const goodBoss = bosses.find((b) => b.locationUrl === boss.locationUrl);
          return (
            <TableRow key={boss.id}>
              <TableCell className={cn(boss.major && 'text-gold')}>{boss.name}</TableCell>
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
                  defaultChecked={boss.done}
                  onCheckedChange={() => {
                    toggleBossDone({ bossId: boss.id });
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

const BossesPage: React.FC<{ data: Awaited<ReturnType<typeof useBosses>> }> = ({ data }) => {
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

  const filterBosses = Object.groupBy(
    data.bosses.filter((boss) => {
      if (searchParams.has('dlc') && searchParams.get('dlc') === 'false' && boss.inDlc) return false;
      if (searchParams.has('name') && !boss.name.includes(searchParams.get('name') as string)) return false;
      if (searchParams.has('major') && searchParams.get('major') === 'true' && !boss.major) return false;
      if (searchParams.has('boss') && searchParams.get('boss') === 'notdone' && boss.done) return false;
      if (searchParams.has('boss') && searchParams.get('boss') === 'done' && !boss.done) return false;
      return true;
    }),
    (boss) => boss.location
  );

  return (
    <>
      <div className="flex flex-col gap-5 items-center">
        <h1 className={cn(data.bossesDone === data.bosses.length && 'text-green-400', 'text-3xl font-bold')}>
          Bosses {data.bossesDone}/{data.bosses.length}
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
            variant={'secondary'}
            onClick={async (e) => {
              await updateBosses();
            }}
          >
            Update
          </Button>
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
                resetBosses();
              }
            }}
          >
            Reset
          </Button>
        </div>
        {Object.entries(filterBosses)
          .filter(([location, b]) => b !== undefined)
          .map(([location, b], index) => {
            const countDone = data.bossesByLocationDone.find((bosses) => bosses.location === location)?._count ?? 0;
            const count = data.bossesByLocation.find((bosses) => bosses.location === location)?._count ?? 0;

            return (
              <Accordion key={index} className="w-full" type="single" collapsible>
                <AccordionItem value={location}>
                  <AccordionTrigger className="flex gap-2">
                    <div className={cn(count === countDone ? 'text-green-400' : '', 'flex justify-between w-full')}>
                      <p>{location}</p>
                      <p>
                        {countDone}/{count}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{b && <BossesTable dbBosses={b} searchParams={searchParams} />}</AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
      </div>
    </>
  );
};

export default BossesPage;
