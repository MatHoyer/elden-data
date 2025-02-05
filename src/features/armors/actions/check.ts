import { actionClient } from '@/lib/safe-action';
import { flattenValidationErrors } from 'next-safe-action';
import { checkSchema } from '../schemas/check.schema';

export const check = actionClient
  .schema(checkSchema, {
    handleValidationErrorsShape: async (ve) => flattenValidationErrors(ve),
  })
  .action(async ({ parsedInput: { tableName, id } }) => {
    return { tableName, id };
  });
