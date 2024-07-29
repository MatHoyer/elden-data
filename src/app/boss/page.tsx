import { LoginButton } from '@/components/AuthButtons';
import { BossesPage } from '@/components/pages';
import { useBosses } from '@/hooks/useBosses';
import { auth } from '@/lib/auth';
import { cn } from '@/lib/utils';

const Bosses = async () => {
  const session = await auth();
  const data = await useBosses();

  return (
    <div
      className={cn(
        'container max-w-5xl my-10 space-y-10 px-3',
        !session?.user && 'flex justify-center items-center h-screen my-0'
      )}
    >
      {session?.user ? <BossesPage data={data} /> : <LoginButton />}
    </div>
  );
};

export default Bosses;
