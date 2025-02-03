'use client';
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from '@/components/page/Layout';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { getUrl } from '@/lib/utils/url-utils';
import { Home, RefreshCw } from 'lucide-react';
import { useRouter } from 'next/navigation';

const RouteError: React.FC<ErrorParams> = ({ error, reset }) => {
  const router = useRouter();

  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Error</LayoutTitle>
      </LayoutHeader>
      <LayoutContent className="flex w-full flex-col items-center justify-center gap-2">
        <Typography>{error.message}</Typography>
        <div className="flex gap-2">
          <Button onClick={() => router.push(getUrl('home'))}>
            <Home />
          </Button>
          <Button onClick={() => reset()}>
            <RefreshCw />
          </Button>
        </div>
      </LayoutContent>
    </Layout>
  );
};

export default RouteError;
