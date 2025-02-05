import { getUrl } from '@/lib/utils/url-utils';
import { Home } from 'lucide-react';
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
      </SidebarMenu>
    </SidebarGroup>
  );
};
