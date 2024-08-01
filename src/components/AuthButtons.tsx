'use client';

import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { signIn, signOut } from 'next-auth/react';
import { modal } from './Modal';

export const LoginButton = () => {
  return <Button onClick={() => signIn('github')}>Login with github</Button>;
};

export const LogoutButton = () => {
  return (
    <Button
      variant={'destructive'}
      onClick={async (e) => {
        e.stopPropagation();
        const res = await modal.question({
          title: 'Déconnexion',
          message: 'Voulez-vous vraiment vous déconnecter ?',
        });
        if (res) {
          signOut();
        }
      }}
    >
      <LogOut />
    </Button>
  );
};
