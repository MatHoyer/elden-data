'use client';
import { TUseCounter } from '@/hooks/useCounter';
import { capitalize, cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Card, CardTitle } from '../ui/card';

const LinkCard: React.FC<{ name: string; done: number; all: number }> = ({ name, done, all }) => {
  const router = useRouter();

  return (
    <Card className={'w-60 p-3 cursor-pointer'} onClick={() => router.push(`/${name}`)}>
      <div className="flex flex-col justify-between h-full">
        <div></div>
        <CardTitle className="bg-secondary/80 rounded-md p-1">
          <div className={cn(done === all && 'text-green-400', 'flex flex-col items-center select-none')}>
            <div className="flex gap-3">
              <p>
                {done}/{all}
              </p>
            </div>
            <p className="text-center">{capitalize(name)}</p>
          </div>
        </CardTitle>
      </div>
    </Card>
  );
};

const HomePage: React.FC<{ counters: TUseCounter }> = async ({ counters }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-3">
        {counters.map((counter, index) => (
          <LinkCard key={index} name={counter.name} done={counter.done} all={counter.all} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
