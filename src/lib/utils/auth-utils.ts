import { baseAuth } from '../auth';

export const auth = async () => {
  const session = await baseAuth();

  if (session?.user) {
    return session.user;
  }

  return null;
};

export const requiredAuth = async () => {
  const user = await auth();

  if (!user) {
    throw new Error('You must be authenticated to access this page');
  }

  return user;
};
