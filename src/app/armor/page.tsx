import { useArmors } from '@/hooks/useArmors';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('../../components/pages/ArmorsPage'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center">
      <Loader2 size={150} className="animate-spin text-background" />
    </div>
  ),
});

const Armor = async () => {
  const armors = await useArmors();

  return (
    <div className={cn('container max-w-5xl my-10 space-y-10 px-3')}>
      <NoSSR data={armors} />
      {/* <ArmorsPage data={armors} /> */}
    </div>
  );
};

export default Armor;
