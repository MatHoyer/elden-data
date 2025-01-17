'use client';
import { useIsMobile } from '@/hooks/use-mobile';
import { PropsWithChildren } from 'react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider, SidebarTrigger } from '../ui/sidebar';

type TNavigationWrapperProps = {
  sidebarHeader?: React.ReactNode;
  sidebarContent?: React.ReactNode;
  sidebarFooter?: React.ReactNode;
  topLeftChildren?: React.ReactNode;
  topRightChildren?: React.ReactNode;
} & PropsWithChildren;

export const NavigationWrapper: React.FC<TNavigationWrapperProps> = ({
  sidebarHeader,
  sidebarContent,
  sidebarFooter,
  topLeftChildren,
  topRightChildren,
  children,
}) => {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full md:grid-cols-[var(--sidebar-width)_1fr]">
        <Sidebar>
          {sidebarHeader && <SidebarHeader className="h-[65px] border-b lg:h-[60px]">{sidebarHeader}</SidebarHeader>}
          {sidebarContent && <SidebarContent>{sidebarContent}</SidebarContent>}
          {sidebarFooter && <SidebarFooter>{sidebarFooter}</SidebarFooter>}
        </Sidebar>

        <div className="flex max-h-screen flex-col">
          <header className="flex h-[65px] items-center gap-4 border-b bg-sidebar px-4 lg:h-[60px]">
            {isMobile && <SidebarTrigger />}
            <div className="w-full flex-1">{topLeftChildren}</div>
            <div className="flex items-center gap-2">
              {topRightChildren}
              {/* <ThemeToggle /> */}
            </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 overflow-auto lg:gap-6 lg:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
