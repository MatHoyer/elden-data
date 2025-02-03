import { z } from 'zod';

export const checkSchema = z.object({
  tableName: z.enum(['boss', 'armor', 'item']),
  id: z.number(),
});
