import { LoginButton } from '@/components/AuthButtons';
import { auth } from '@/lib/auth';
import { cn } from '@/lib/utils';

const Home = async () => {
  const session = await auth();

  return (
    <div
      className={cn(
        'container max-w-5xl my-10 space-y-10 px-3',
        !session?.user && 'flex justify-center items-center h-screen my-0'
      )}
    >
      {session?.user ? <h1 className="text-3xl font-bold">Welcome {session.user.name}</h1> : <LoginButton />}
    </div>
  );
};

export default Home;
