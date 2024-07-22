import { LoginButton } from '@/components/AuthButtons';
import ItemPage from '@/components/pages/ItemPage';
import { useItems } from '@/hooks/useTalismans';
import { auth } from '@/lib/auth';
import { talismans } from '@/lib/defaultData/talismans';
import { cn } from '@/lib/utils';

const Talismans = async () => {
  const session = await auth();
  const dbTalismans = await useItems('talisman');

  return (
    <div
      className={cn(
        'container max-w-5xl my-10 space-y-10 px-3',
        !session?.user && 'flex justify-center items-center h-screen my-0'
      )}
    >
      {session?.user ? (
        <ItemPage
          dbData={dbTalismans}
          data={talismans.map((talisman) => ({ ...talisman, inDlc: talisman.inDlc || false }))}
        />
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default Talismans;
