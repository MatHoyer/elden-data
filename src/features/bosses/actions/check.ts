'use server';

import { actionClient } from '@/lib/safe-action';
import { flattenValidationErrors } from 'next-safe-action';
import { checkSchema } from '../schemas/check.schema';
import prisma from '@/lib/prisma';

export const check = actionClient
  .schema(checkSchema, {
    handleValidationErrorsShape: async (ve) => flattenValidationErrors(ve),
  })
  .action(
    async ({
      parsedInput: { boss },
      ctx: {
        user: { id: userId },
      },
    }) => {
      let oldBoss = await prisma.user_Boss.findUnique({
        where: {
          userId_bossId: {
            userId: userId,
            bossId: boss.id,
          },
        },
      });
      if (!oldBoss) {
        oldBoss = await prisma.user_Boss.create({
          data: {
            bossId: boss.id,
            userId: userId,
          },
        });
      }

      const updateBoss = await prisma.user_Boss.update({
        where: {
          id: oldBoss.id,
        },
        data: {
          isDone: !oldBoss.isDone,
        },
      });
      return updateBoss;
    }
  );
