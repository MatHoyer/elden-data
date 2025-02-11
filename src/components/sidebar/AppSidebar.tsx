import { getUrl } from '@/lib/utils/url-utils';
import { Compass, Home, Skull } from 'lucide-react';
import { SidebarGroup, SidebarGroupLabel, SidebarMenu } from '../ui/sidebar';
import { NavItem } from './NavComp';

export const AppSidebar = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Main</SidebarGroupLabel>
      <SidebarMenu>
        <NavItem
          item={{
            title: 'Accueil',
            url: getUrl('home'),
            icon: Home,
          }}
        ></NavItem>
        <NavItem
          item={{
            title: 'Locations',
            url: getUrl('locations'),
            icon: Compass,
          }}
        ></NavItem>
      </SidebarMenu>
    </SidebarGroup>
  );
};
