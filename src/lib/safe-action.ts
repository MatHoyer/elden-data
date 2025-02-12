import { Prisma } from '@prisma/client';
import { createSafeActionClient } from 'next-safe-action';
import prisma from './prisma';
import { requiredAuth } from './utils/auth-utils';

export const actionClient = createSafeActionClient({
  handleReturnedServerError: (error, utils) => {
    console.log(error);
    console.log(utils);
    if (error instanceof Prisma.PrismaClientKnownRequestError)
      return 'db error';
    return error.message;
  },
}).use(async ({ next }) => {
  const session = await requiredAuth();
  const user = await prisma.user.findUnique({
    where: {
      id: session.id,
    },
  });
  if (!user) throw new Error('Unauthorized');
  return next({ ctx: { user } });
});
