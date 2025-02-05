import { ChevronsUpDown } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { LoginButton } from '../AuthButtons';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';
import UserDropdown from './UserDropdown';

export const UserDetails = () => {
  const session = useSession();

  const user = session.data?.user;

  if (!user) {
    return <LoginButton />;
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
              <AvatarFallback className="bg-card">
                {user.email?.slice(0, 1).toUpperCase() || ''}
              </AvatarFallback>
              {user.image && <AvatarImage src={user.image} />}
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                {user.name || 'unnamed'}
              </span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </SidebarMenuButton>
        </UserDropdown>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
