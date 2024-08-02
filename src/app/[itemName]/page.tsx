import { useItems } from '@/hooks/useItems';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

const NoSSR = dynamic(() => import('../../components/pages/ItemPage'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center">
      <Loader2 size={150} className="animate-spin text-background" />
    </div>
  ),
});

const Items: React.FC<{ params: { itemName: string } }> = async ({ params }) => {
  const data = await useItems(params.itemName);

  if (data.items.length === 0) notFound();

  return (
    <div className={cn('container max-w-5xl my-10 space-y-10 px-3')}>
      <NoSSR data={data} itemType={params.itemName} />
      {/* <ItemPage data={data} itemType={params.itemName} /> */}
    </div>
  );
};

export default Items;
