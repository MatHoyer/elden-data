'use client';
import { LanguageProvider } from '@/components/language/language-provider';
import Modal from '@/components/Modal';
import { AppSidebar } from '@/components/sidebar/AppSidebar';
import { NavigationWrapper } from '@/components/sidebar/NavigationWrapper';
import { Settings } from '@/components/sidebar/Settings';
import { UserDetails } from '@/components/sidebar/UserSwitcher';
import { TailwindIndicator } from '@/components/TailwindIndicator';
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
      <LanguageProvider>
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            <NuqsAdapter>
              <Toaster />
              <Modal />
              <TailwindIndicator />
              <NavigationWrapper
                sidebarHeader={<Settings />}
                sidebarContent={<AppSidebar />}
                sidebarFooter={<UserDetails />}
              >
                {children}
              </NavigationWrapper>
            </NuqsAdapter>
          </QueryClientProvider>
        </SessionProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};
