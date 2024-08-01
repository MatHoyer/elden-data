import { auth } from '@/lib/auth';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { LogoutButton } from '../AuthButtons';
import { pages } from '../pages';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={props.href || '/'}
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

const Navbar = async () => {
  const session = await auth();

  return session?.user ? (
    <header className="flex sticky items-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex w-full h-14 container justify-between">
        <div className="mr-4 flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'bg-transparent')} asChild>
                  <Link href={'/'}>Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'bg-transparent')} asChild>
                  <Link href="/boss">Boss</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'bg-transparent')} asChild>
                  <Link href="/armor">Set d'armures</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Objects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-[.75fr_1fr]">
                    {pages
                      .filter((page) => !page.type)
                      .map((page) => (
                        <ListItem key={page.name} title={page.name} href={page.path}></ListItem>
                      ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center">
          <LogoutButton />
        </div>
      </div>
    </header>
  ) : null;
};

export default Navbar;
