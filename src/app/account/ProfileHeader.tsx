'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Typography } from '@/components/ui/typography';
import { useSession } from 'next-auth/react';

export const ProfileHeader = () => {
  const { data: session } = useSession();

  if (!session?.user) {
    return null;
  }

  return (
    <div className="flex gap-4">
      <Avatar className="size-32">
        <AvatarImage src={session.user.image || ''} />
        <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col mt-4">
        <Typography variant="h2">{session.user.name}</Typography>
        <Typography variant="code">{session.user.email}</Typography>
      </div>
    </div>
  );
};
