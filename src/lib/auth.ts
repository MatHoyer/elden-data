import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import prisma from './prisma';

export const { auth: baseAuth, handlers } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
  callbacks: {
    session: async ({ session, user }) => {
      session.user = user;
      return {
        user: session.user,
        expires: session.expires,
      };
    },
  },
});
