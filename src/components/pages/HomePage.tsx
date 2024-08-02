'use client';
import { globalReset } from '@/actions/reset';
import { TUseCounter } from '@/hooks/useCounter';
import { cn, getName } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { modal } from '../Modal';
import { shouldRegister } from '../shouldRegister';
import { Button } from '../ui/button';
import { Card, CardTitle } from '../ui/card';

const LinkCard: React.FC<{ name: string; done: number; allWihtoutDlc: number; all: number }> = ({
  name,
  done,
  allWihtoutDlc,
  all,
}) => {
  const router = useRouter();

  return (
    <Card className={'w-60 h-36 p-3 cursor-pointer'} onClick={() => router.push(`/${name}`)}>
      <div
        className={cn(
          done === allWihtoutDlc && 'text-green-400',
          done === all && 'text-gold',
          'flex flex-col justify-between items-center h-full gap-2'
        )}
      >
        <p className="text-center text-3xl">{getName(`/${name}`)}</p>
        <CardTitle className="bg-secondary/80 rounded-md p-2 w-fit">
          <div className="flex flex-col items-center select-none">
            <div className="flex gap-3">
              <p>
                {done}/{all}
              </p>
            </div>
          </div>
        </CardTitle>
      </div>
    </Card>
  );
};

const HomePage: React.FC<{ counters: TUseCounter }> = ({ counters }) => {
  const { data: session } = useSession();

  return (
    <div>
      <div className="flex flex-col items-center gap-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3">
          {counters.map((counter, index) => (
            <LinkCard
              key={index}
              name={counter.name}
              done={counter.done}
              allWihtoutDlc={counter.allWithoutDlc}
              all={counter.all}
            />
          ))}
        </div>
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
                globalReset();
              }
            } else {
              shouldRegister();
            }
          }}
        >
          Réinitialiser tout
        </Button>
        <a target="_blank" href={'https://github.com/MatHoyer/elden-data/issues/new'}>
          <Button variant={'link'}>Signaler un bug</Button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
