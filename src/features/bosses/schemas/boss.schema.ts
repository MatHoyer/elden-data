import { Boss } from '@prisma/client';
import { z } from 'zod';

type test = Boss;

export const bossSchema = z.object({
  id: z.number(),
  name: z.string(),

  location: z.string(),
  imageUrl: z.string(),
  wikiUrl: z.string(),

  major: z.boolean(),
  inDlc: z.boolean(),

  createdAt: z.date(),
  updatedAt: z.date(),
});

export type TBossSchema = z.infer<typeof bossSchema>;
