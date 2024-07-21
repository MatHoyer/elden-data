'use client';
import { resetBosses } from '@/app/actions/resetBosses';
import { toggleBossDone } from '@/app/actions/toggleBossDone';
import { modal } from '@/components/Modal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { bosses } from '@/lib/defaultBosses';
import { cn } from '@/lib/utils';
import { Boss } from '@prisma/client';
import { BookOpen, MapPin } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { useBosses } from './hooks/useBosses';
import TypeaheadInput from './TypeaheadInput';
import { Card, CardTitle } from './ui/card';
import { Label } from './ui/label';

const BossesTable: React.FC<{ dbBosses: Boss[] }> = ({ dbBosses }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {dbBosses.map((boss, index) => (
        <Card
          key={index}
          style={{
            backgroundImage: `url(${bosses.find((b) => b.name === boss.name)?.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className={cn('size-64 p-3', boss.done ? 'border-4 border-green-400' : 'border-4 border-background')}
          onClick={() => {
            toggleBossDone({ bossId: boss.id });
          }}
        >
          <div className="flex flex-col justify-between h-full">
            <div></div>
            <CardTitle className={cn(boss.major && 'text-gold', 'bg-secondary/80 rounded-md')}>
              <div className="flex flex-col items-center">
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
      return true;
    }),
    (boss) => boss.location
  );

  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="text-3xl font-bold">Bosses {data.bossesDone + '/' + data.bosses.length}</h1>
      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-1">
          <Label htmlFor="show-dlc" className="whitespace-nowrap">
            Show DLC
          </Label>
          <Checkbox
            id="show-dlc"
            defaultChecked={searchParams.get('dlc') === 'true'}
            onCheckedChange={(checked) => {
              router.push(pathname + '?' + createQueryString('dlc', String(checked)));
            }}
          />
        </div>
        <div className="flex items-center gap-1">
          <Label htmlFor="show-major" className="whitespace-nowrap">
            Show only Major bosses
          </Label>
          <Checkbox
            id="show-major"
            defaultChecked={searchParams.get('major') === 'true'}
            onCheckedChange={(checked) => {
              router.push(pathname + '?' + createQueryString('major', String(checked)));
            }}
          />
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
        <Button
          variant={'secondary'}
          onClick={async (e) => {
            console.log('update');
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
                <AccordionContent>{b && <BossesTable dbBosses={b} />}</AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
    </div>
  );
};

export default BossesPage;
