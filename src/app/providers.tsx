'use client';
import Modal from '@/components/Modal';
import { AppSidebar } from '@/components/sidebar/AppSidebar';
import { NavigationWrapper } from '@/components/sidebar/NavigationWrapper';
import { UserDetails } from '@/components/sidebar/UserSwitcher';
import { TailwindIndicator } from '@/components/TailwindIndicator';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { ThemeSwitcher } from '@/components/theme/theme-switcher';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChevronDown } from 'lucide-react';
import { SessionProvider } from 'next-auth/react';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { PropsWithChildren, useState } from 'react';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  const [topSidebarOpen, setTopSidebarOpen] = useState(false);

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
                <DropdownMenu
                  open={topSidebarOpen}
                  onOpenChange={setTopSidebarOpen}
                >
                  <DropdownMenuTrigger className="flex items-center justify-around h-full gap-2 cursor-pointer">
                    <Typography variant="large">Elden Ring Tracker</Typography>
                    <ChevronDown
                      className={cn(
                        topSidebarOpen && '-rotate-90',
                        'transition-transform duration-200'
                      )}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <ThemeSwitcher />
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
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
