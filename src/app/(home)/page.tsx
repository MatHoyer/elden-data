import { auth } from '@/lib/utils/auth-utils';
import { HomePageClient } from './HomePageClient';

const HomePage = async () => {
  const user = await auth();

  return (
    <div>
      <HomePageClient />
    </div>
  );
};

export default HomePage;
