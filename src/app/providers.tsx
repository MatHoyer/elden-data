'use client';
import Modal from '@/components/Modal';
import { AppSidebar } from '@/components/sidebar/AppSidebar';
import { NavigationWrapper } from '@/components/sidebar/NavigationWrapper';
import { UserDetails } from '@/components/sidebar/UserSwitcher';
import { ThemeProvider } from '@/components/theme/theme-provider';
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
            <NavigationWrapper
              sidebarHeader={<div className="flex items-center justify-center h-full">Elden ring tracker</div>}
              sidebarContent={<AppSidebar />}
              sidebarFooter={<UserDetails />}
            >
              <Toaster />
              <Modal />
              {children}
            </NavigationWrapper>
          </NuqsAdapter>
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};
