import { LoginButton } from '@/components/AuthButtons';
import ArmorPage from '@/components/pages/ArmorPage';
import { useArmors } from '@/hooks/useArmors';
import { auth } from '@/lib/auth';
import { cn } from '@/lib/utils';

const Armor = async () => {
  const session = await auth();
  const armors = await useArmors();

  return (
    <div
      className={cn(
        'container max-w-5xl my-10 space-y-10 px-3',
        !session?.user && 'flex justify-center items-center h-screen my-0'
      )}
    >
      {session?.user ? <ArmorPage data={armors} /> : <LoginButton />}
    </div>
  );
};

export default Armor;
