import { ChevronsUpDown } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';
import { Skeleton } from '../ui/skeleton';
import UserDropdown from './UserDropdown';

export const UserDetails = () => {
  const session = useSession();

  const user = session.data?.user;

  if (!user) {
    return (
      <div className="flex items-center space-x-4 w-full h-full">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 w-3/4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-3 w-3/4" />
        </div>
      </div>
    );
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <UserDropdown>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Avatar>
              <AvatarFallback className="bg-card">{user.email?.slice(0, 1).toUpperCase() || ''}</AvatarFallback>
              {user.image && <AvatarImage src={user.image} />}
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{user.name || 'unnamed'}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </SidebarMenuButton>
        </UserDropdown>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
