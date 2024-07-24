'use client';
import { reset, toggleDone } from '@/actions/bosses';
import { modal } from '@/components/Modal';
import TypeaheadInput from '@/components/TypeaheadInput';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TUseBosses } from '@/hooks/useBosses';
import { cn, groupBy } from '@/lib/utils';
import { BookOpen, MapPin } from 'lucide-react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';
import DisplayCard from '../DisplayCard';

const Filters: React.FC<{
  router: AppRouterInstance;
  pathname: string;
  searchParams: ReadonlyURLSearchParams;
  createQueryString: (key: string, value: string) => string;
  data: TUseBosses;
}> = ({ router, pathname, searchParams, createQueryString, data }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-xl">Filtres boss</p>
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
            <Label htmlFor="show-major" className="whitespace-nowrap">
              Majeur
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
              <Label htmlFor="all">Tous</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="done" id="done" />
              <Label htmlFor="done">Fait</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="notdone" id="notdone" />
              <Label htmlFor="notdone">Pas fait</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <TypeaheadInput
        className="w-[300px]"
        datas={[...new Set(data.bosses.map((boss) => boss.name))]}
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

const BossesTable: React.FC<{ bosses: TUseBosses['bosses']; searchParams: ReadonlyURLSearchParams }> = ({
  bosses,
  searchParams,
}) => {
  return !searchParams.has('display-card') || searchParams.get('display-card') === 'true' ? (
    <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center justify-center">
      {bosses.map((boss, index) => (
        <DisplayCard
          imageUrl={boss.imageUrl}
          name={boss.name}
          wikiUrl={boss.wikiUrl}
          locationUrl={boss.locationUrl}
          isValidate={boss.done}
          major={boss.major}
          onCLick={() => toggleDone({ bossId: boss.id })}
          w={300}
          h={240}
          key={index}
        />
      ))}
    </div>
  ) : (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nom</TableHead>
          <TableHead>Localisation</TableHead>
          <TableHead>Wiki</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bosses.map((boss) => {
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
                    toggleDone({ bossId: boss.id });
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

const BossesPage: React.FC<{ data: TUseBosses }> = ({ data }) => {
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

  const filterBosses = groupBy(
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
    <div className="flex flex-col gap-5 items-center">
      <h1 className={cn(data.bossesDone === data.bosses.length && 'text-green-400', 'text-3xl font-bold')}>
        Boss {data.bossesDone}/{data.bosses.length}
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
          <Label htmlFor="switch-card">Afficher avec des cartes</Label>
          <Switch
            id="switch-card"
            defaultChecked={!searchParams.has('display-card') || searchParams.get('display-card') === 'true'}
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
          Réinitialiser
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
                <AccordionContent>{b && <BossesTable bosses={b} searchParams={searchParams} />}</AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
    </div>
  );
};

export default BossesPage;
