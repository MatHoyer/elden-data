'use client';
import { Collapsible, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils/utils';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type TItem = {
  icon: React.FC;
  title: string;
  url: string;
};

type TItemDropDown = {
  icon: React.FC;
  title: string;
  isActive?: boolean;
  items: TSubItem[];
  can?: boolean;
};

type TSubItem = {
  icon?: React.FC;
  title: string;
  url: string;
  can?: boolean;
};

export const NavItem: React.FC<{
  item: TItem;
}> = ({ item }) => {
  const pathname = usePathname();

  const isActive = pathname === item.url;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild className={cn(isActive && 'bg-accent/50')}>
        <Link href={item.url}>
          <item.icon />
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export const NavItemDropdown: React.FC<{
  item: TItemDropDown;
}> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(item.isActive);
  const pathname = usePathname();

  return item.can === undefined || item.can ? (
    <Collapsible asChild defaultOpen={item.isActive} onOpenChange={setIsOpen} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={item.title}>
            <item.icon />
            <span>{item.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          <SidebarMenuSub>
            {item.items.map((subItem) => {
              const isActive = pathname === subItem.url;
              return subItem.can === undefined || subItem.can ? (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton asChild className={cn(isActive && 'bg-accent/50')}>
                    <Link href={subItem.url}>
                      {!!subItem?.icon && <subItem.icon />}
                      <span>{subItem.title}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ) : null;
            })}
          </SidebarMenuSub>
        </motion.div>
      </SidebarMenuItem>
    </Collapsible>
  ) : null;
};

export const NavItems: React.FC<{
  items: TItem[];
}> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </>
  );
};

export const NavItemDropdowns: React.FC<{
  items: TItemDropDown[];
}> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <NavItemDropdown key={item.title} item={item} />
      ))}
    </>
  );
};
