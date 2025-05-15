'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getUrl } from '@/lib/utils/url-utils';
import { useMutation } from '@tanstack/react-query';
import { BadgeCheck, LogOut, Sparkles } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { Loader } from '../ui/loader';

const UserDropdown: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async () => {
      await signOut();
      window.location.reload();
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer text-orange-300">
            <Sparkles />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => {
              router.push(getUrl('account'));
            }}
          >
            <BadgeCheck />
            Account
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer text-destructive"
          onClick={() => {
            mutation.mutate();
          }}
        >
          {mutation.isPending ? (
            <Loader className="mr-2 size-4" />
          ) : (
            <LogOut className="mr-2 size-4" />
          )}
          Se déconnecter
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
