import { LoginButton } from '@/components/AuthButtons';
import { ItemPage } from '@/components/pages';
import { useItems } from '@/hooks/useItems';
import { auth } from '@/lib/auth';
import { cn } from '@/lib/utils';
import { notFound } from 'next/navigation';

const Items: React.FC<{ params: { itemName: string } }> = async ({ params }) => {
  const session = await auth();
  const data = await useItems(params.itemName);

  if (data.items.length === 0) notFound();

  return (
    <div
      className={cn(
        'container max-w-5xl my-10 space-y-10 px-3',
        !session?.user && 'flex justify-center items-center h-screen my-0'
      )}
    >
      {session?.user ? <ItemPage data={data} itemType={params.itemName} /> : <LoginButton />}
    </div>
  );
};

export default Items;
