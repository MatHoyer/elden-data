import prisma from '@/lib/prisma';
import { actionClient } from '@/lib/safe-action';
import { flattenValidationErrors } from 'next-safe-action';
import { checkItemSchema } from '../schemas/check-item.schema';

export const checkItem = actionClient
  .schema(checkItemSchema, {
    handleValidationErrorsShape: async (ve) => flattenValidationErrors(ve),
  })
  .action(async ({ parsedInput: { id }, ctx: { user } }) => {
    let oldItem = await prisma.user_Item.findUnique({
      where: {
        userId_itemId: {
          userId: user.id,
          itemId: id,
        },
      },
    });
    if (!oldItem) {
      oldItem = await prisma.user_Item.create({
        data: {
          userId: user.id,
          itemId: id,
        },
      });
    }

    const item = await prisma.user_Item.update({
      where: {
        id: oldItem.id,
      },
      data: { isDone: !oldItem.isDone },
    });

    return item;
  });
