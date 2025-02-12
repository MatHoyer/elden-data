import { z } from 'zod';
import { bossSchema } from './boss.schema';

export const checkBossSchema = z.object({
  boss: bossSchema.pick({ id: true }),
});

export type TCheckBossSchema = z.infer<typeof checkBossSchema>;
