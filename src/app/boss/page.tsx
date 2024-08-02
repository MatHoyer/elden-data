import { useBosses } from '@/hooks/useBosses';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('../../components/pages/BossesPage'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center">
      <Loader2 size={150} className="animate-spin text-background" />
    </div>
  ),
});

const Bosses = async () => {
  const data = await useBosses();

  return (
    <div className={cn('container max-w-5xl my-10 space-y-10 px-3')}>
      <NoSSR data={data} />
      {/* <BossesPage data={data} /> */}
    </div>
  );
};

export default Bosses;
