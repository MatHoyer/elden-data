import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    AUTH_GITHUB_ID: z.string(),
    AUTH_GITHUB_SECRET: z.string(),
    AUTH_SECRET: z.string(),

    SERVER_URL: z.string().url(),

    NODE_ENV: z.enum(['development', 'production']),
  },
  experimental__runtimeEnv: {},
});
