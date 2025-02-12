import { z } from 'zod';

export const checkItemSchema = z.object({
  id: z.string().cuid(),
});

export type TCheckItemSchema = z.infer<typeof checkItemSchema>;
