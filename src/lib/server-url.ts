import { env } from './env';

export const getServerUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }

  if (process.env.NODE_ENV === 'production') {
    return env.SERVER_URL;
  }

  return 'http://localhost:3000/';
};
