import { LoginButton } from '@/components/AuthButtons';
import HomePage from '@/components/pages/HomePage';
import { useCounter } from '@/hooks/useCounter';
import { auth } from '@/lib/auth';
import { cn } from '@/lib/utils';

const Home = async () => {
  const session = await auth();
  const counters = await useCounter();

  return (
    <div
      className={cn(
        'container max-w-5xl my-10 space-y-10 px-3',
        !session?.user && 'flex justify-center items-center h-screen my-0'
      )}
    >
      {session?.user ? <HomePage counters={counters} /> : <LoginButton />}
    </div>
  );
};

export default Home;
