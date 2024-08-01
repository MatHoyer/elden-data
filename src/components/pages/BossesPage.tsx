'use client';
import { reset, toggleDone } from '@/actions/bosses';
import { modal } from '@/components/Modal';
import TypeaheadInput from '@/components/TypeaheadInput';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FilterProvider, useFilterContext } from '@/contexts/FilterContext';
import { TUseBosses } from '@/hooks/useBosses';
import { useLocalstorage } from '@/hooks/useLocalstorage';
import { cn, groupBy } from '@/lib/utils';
import { BookOpen, MapPin } from 'lucide-react';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';
import DisplayCard from '../DisplayCard';
import RadioFilter from '../RadioFilter';
import { Card } from '../ui/card';

const Filters: React.FC<{
  data: TUseBosses;
}> = ({ data }) => {
  const { router, pathname, searchParams, createQueryString } = useFilterContext();

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-xl">Filtres Boss</p>
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-3">
          <RadioFilter name="dlc" labels={['tous', 'DLC', 'pas DLC']} />
          <RadioFilter name="boss" labels={['tous', 'fait', 'pas fait']} reverse={true} />
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="show-major" className="whitespace-nowrap">
            Majeur
          </Label>
          <Switch
            id="show-major"
            defaultChecked={searchParams.get('major') === 'true'}
            onCheckedChange={(checked) => {
              router.push(pathname + '?' + createQueryString('major', String(checked)));
            }}
          />
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

const BossesTable: React.FC<{
  bosses: TUseBosses['bosses'];
  searchParams: ReadonlyURLSearchParams;
  solo?: boolean;
}> = ({ bosses, searchParams, solo }) => {
  return !searchParams.has('display-card') || searchParams.get('display-card') === 'true' ? (
    <div
      className={cn(
        solo && 'border-4 border-background/80 bg-background/30',
        'grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center justify-center'
      )}
    >
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
  const [local, setLocal] = useLocalstorage('bosses', [] as string[]);

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
      if (searchParams.has('name') && !boss.name.includes(searchParams.get('name') as string)) return false;
      if (searchParams.has('major') && searchParams.get('major') === 'true' && !boss.major) return false;
      if (searchParams.has('boss') && searchParams.get('boss') === 'pas fait' && boss.done) return false;
      if (searchParams.has('boss') && searchParams.get('boss') === 'fait' && !boss.done) return false;
      if (searchParams.has('dlc') && searchParams.get('dlc') === 'pas DLC' && boss.inDlc) return false;
      if (searchParams.has('dlc') && searchParams.get('dlc') === 'DLC' && !boss.inDlc) return false;
      return true;
    }),
    (boss) => boss.location
  );

  return (
    <div className="flex flex-col gap-5 items-center">
      <Card>
        <h1
          className={cn(
            data.bosses.filter((boss) => !boss.inDlc && boss.done).length ===
              data.bosses.filter((boss) => !boss.inDlc).length && 'text-green-400',
            data.bossesDone === data.bosses.length && 'text-gold',
            'text-3xl font-bold p-3'
          )}
        >
          Boss {data.bossesDone}/{data.bosses.length}
        </h1>
      </Card>
      <div className="h-fit w-fit rounded-lg border bg-background px-4 py-4 flex flex-col gap-3">
        <FilterProvider value={{ router, pathname, searchParams, createQueryString }}>
          <Filters data={data} />
        </FilterProvider>
      </div>
      <Card>
        <div className="flex flex-col items-center gap-2 p-3">
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
          <div className="flex gap-3">
            {Object.entries(filterBosses).length > 1 && (
              <>
                <Button
                  variant={'secondary'}
                  onClick={async (e) => {
                    e.stopPropagation();
                    setLocal([...Object.keys(filterBosses)]);
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
        </div>
      </Card>
      <Accordion value={local} className="w-full" type="multiple">
        {Object.entries(filterBosses)
          .filter(([location, b]) => b !== undefined)
          .map(([location, b], index) => {
            const countDone = data.bossesByLocationDone.find((bosses) => bosses.location === location)?._count ?? 0;
            const count = data.bossesByLocation.find((bosses) => bosses.location === location)?._count ?? 0;

            return (
              <AccordionItem
                onClick={() => {
                  if (!local.includes(location)) {
                    setLocal([...local, location]);
                  } else {
                    setLocal(local.filter((l) => l !== location));
                  }
                }}
                key={index}
                value={location}
              >
                <AccordionTrigger className="flex gap-2 bg-background/80">
                  <div className={cn(count === countDone ? 'text-green-400' : '', 'flex justify-between w-full')}>
                    <p className="pl-3">{location}</p>
                    <p>
                      {countDone}/{count}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="border-4 border-background/80 bg-background/30">
                  {b && <BossesTable bosses={b} searchParams={searchParams} />}
                </AccordionContent>
              </AccordionItem>
            );
          })}
      </Accordion>
    </div>
  );
};

export default BossesPage;
