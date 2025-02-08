import { z } from 'zod';
import { bossSchema } from './boss.schema';

export const checkSchema = z.object({
  boss: bossSchema.pick({ id: true }),
});
