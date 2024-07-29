import { LoginButton } from '@/components/AuthButtons';
import { ArmorsPage } from '@/components/pages';
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
      {session?.user ? <ArmorsPage data={armors} /> : <LoginButton />}
    </div>
  );
};

export default Armor;
