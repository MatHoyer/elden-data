import { reset as armorsReset } from './armors';
import { reset as bossesReset } from './bosses';
import { reset as itemsReset } from './items';

export const globalReset = async () => {
  await armorsReset();
  await bossesReset();
  await itemsReset();
};
