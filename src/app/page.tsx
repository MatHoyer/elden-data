import { useCounter } from '@/hooks/useCounter';
import { auth } from '@/lib/auth';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('../components/pages/HomePage'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center">
      <Loader2 size={150} className="animate-spin text-background" />
    </div>
  ),
});

const Home = async () => {
  const session = await auth();
  const counters = await useCounter();

  return (
    <div className={cn('container max-w-5xl my-10 space-y-10 px-3')}>
      <NoSSR counters={counters} />
      {/* <HomePage counters={counters} /> */}
    </div>
  );
};

export default Home;
