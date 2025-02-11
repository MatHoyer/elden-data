'use client';
import Modal from '@/components/Modal';
import { AppSidebar } from '@/components/sidebar/AppSidebar';
import { NavigationWrapper } from '@/components/sidebar/NavigationWrapper';
import { UserDetails } from '@/components/sidebar/UserSwitcher';
import { TailwindIndicator } from '@/components/TailwindIndicator';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Typography } from '@/components/ui/typography';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <NuqsAdapter>
            <Toaster />
            <Modal />
            <TailwindIndicator />
            <NavigationWrapper
              sidebarHeader={
                <div className="flex items-center justify-center h-full gap-2 cursor-pointer">
                  <Typography variant="large">Elden Ring Tracker</Typography>
                </div>
              }
              sidebarContent={<AppSidebar />}
              sidebarFooter={<UserDetails />}
            >
              {children}
            </NavigationWrapper>
          </NuqsAdapter>
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};
