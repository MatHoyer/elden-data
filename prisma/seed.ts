import { ItemCategory } from '@prisma/client';
import prisma from '../src/lib/prisma';
import { armorSets } from './defaultData/armors';
import { ashesOfWar } from './defaultData/ashesOfWar';
import { bosses } from './defaultData/bosses';
import { categories } from './defaultData/categories';
import { cookBooks } from './defaultData/cookBooks';
import { crystalTears } from './defaultData/crystalTears';
import { shieldTypes } from './defaultData/shields';
import { spellTypes } from './defaultData/spells';
import { spiritAshes } from './defaultData/spiritAshes';
import { talismans } from './defaultData/talismans';
import { weaponTypes } from './defaultData/weapons';
import { whetBlades } from './defaultData/whetBlades';

const createBosses = async () => {
  for (const location of bosses.locations) {
    const prismaLocationNames = await prisma.names.create({
      data: location.names,
    });
    const prismaLocation = await prisma.location.create({
      data: {
        namesId: prismaLocationNames.id,
      },
    });

    for (const boss of location.bosses) {
      const prismaBossNames = await prisma.names.create({
        data: boss.names,
      });
      const prismaBossCategories = await prisma.bossCategories.create({
        data: boss.categories,
      });
      let prismaBossRemembrance = undefined;
      if (boss.remembrance) {
        const prismaBossRemembranceNames = await prisma.names.create({
          data: boss.remembrance.names,
        });
        prismaBossRemembrance = await prisma.bossRemembrance.create({
          data: {
            namesId: prismaBossRemembranceNames.id,
            imageUrl: boss.remembrance.imageUrl,
          },
        });
      }
      await prisma.boss.create({
        data: {
          locationId: prismaLocation.id,
          namesId: prismaBossNames.id,
          bossCategoriesId: prismaBossCategories.id,
          imageUrl: boss.imageUrl,
          wikiUrl: boss.wikiUrl,
          locationUrl: boss.locationUrl,
          bossRemembranceId: prismaBossRemembrance?.id,
        },
      });
    }
  }
};

const createItem = async (
  category: ItemCategory,
  item: {
    imageUrl: string;
    locationUrl: string;
    wikiUrl: string;
    names: {
      en: string;
      fr: string;
    };
    inDlc?: boolean;
  }
) => {
  const prismaItemNames = await prisma.names.create({
    data: item.names,
  });
  const prismaItemCategories = await prisma.itemCategories.create({
    data: {
      inDlc: item.inDlc,
    },
  });

  const prismaItem = await prisma.item.create({
    data: {
      categoryId: category.id,
      imageUrl: item.imageUrl,
      locationUrl: item.locationUrl,
      wikiUrl: item.wikiUrl,
      namesId: prismaItemNames.id,
      itemCategoriesId: prismaItemCategories.id,
    },
  });

  return prismaItem;
};

const createCategories = async () => {
  for (const category of categories) {
    const prismaCategory = await prisma.itemCategory.create({
      data: {
        names: {
          create: {
            en: category.en,
            fr: category.fr,
          },
        },
      },
    });

    switch (category.en) {
      case 'Armors':
        for (const armor of armorSets) {
          const prismaArmorSetCategoryNames = await prisma.names.create({
            data: armor.names,
          });
          const prismaArmorSetCategory = await prisma.itemCategory.create({
            data: {
              namesId: prismaArmorSetCategoryNames.id,
              parentCategoryId: prismaCategory.id,
            },
          });
          for (const armorPiece of armor.elements) {
            await createItem(prismaArmorSetCategory, {
              imageUrl: armorPiece.imageUrl,
              locationUrl: armorPiece.locationUrl,
              wikiUrl: armorPiece.wikiUrl,
              names: armorPiece.names,
              inDlc: false,
            });
          }
        }
        break;

      case 'Weapons':
        for (const weaponType of weaponTypes) {
          const weaponTypeNames = await prisma.names.create({
            data: weaponType.names,
          });
          const weaponTypeCategory = await prisma.itemCategory.create({
            data: {
              namesId: weaponTypeNames.id,
              parentCategoryId: prismaCategory.id,
            },
          });
          for (const weapon of weaponType.weapons) {
            await createItem(weaponTypeCategory, {
              names: weapon.names,
              imageUrl: weapon.imageUrl,
              locationUrl: weapon.locationUrl,
              wikiUrl: weapon.wikiUrl,
            });
          }
        }
        break;

      case 'Shields':
        for (const shieldType of shieldTypes) {
          const shieldTypeNames = await prisma.names.create({
            data: shieldType.names,
          });
          const shieldTypeCategory = await prisma.itemCategory.create({
            data: {
              namesId: shieldTypeNames.id,
              parentCategoryId: prismaCategory.id,
            },
          });
          for (const shield of shieldType.shields) {
            await createItem(shieldTypeCategory, {
              imageUrl: shield.imageUrl,
              locationUrl: shield.locationUrl,
              wikiUrl: shield.wikiUrl,
              names: shield.names,
              inDlc: shield.inDlc,
            });
          }
        }
        break;

      case 'Spells':
        for (const spellType of spellTypes) {
          const spellTypeNames = await prisma.names.create({
            data: spellType.names,
          });
          const spellTypeCategory = await prisma.itemCategory.create({
            data: {
              namesId: spellTypeNames.id,
              parentCategoryId: prismaCategory.id,
            },
          });
          for (const spell of spellType.spells) {
            await createItem(spellTypeCategory, {
              imageUrl: spell.imageUrl,
              locationUrl: spell.locationUrl,
              wikiUrl: spell.wikiUrl,
              names: spell.names,
              inDlc: spell.inDlc,
            });
          }
        }
        break;

      case 'Whet blades':
        for (const whetBlade of whetBlades) {
          await createItem(prismaCategory, {
            imageUrl: whetBlade.imageUrl,
            locationUrl: whetBlade.locationUrl,
            wikiUrl: whetBlade.wikiUrl,
            names: whetBlade.names,
            inDlc: false,
          });
        }
        break;

      case 'Crystal tears':
        for (const crystalTear of crystalTears) {
          await createItem(prismaCategory, {
            imageUrl: crystalTear.imageUrl,
            locationUrl: crystalTear.locationUrl,
            wikiUrl: crystalTear.wikiUrl,
            names: crystalTear.names,
            inDlc: crystalTear.inDlc,
          });
        }
        break;

      case 'Spirit ashes':
        for (const spiritAshe of spiritAshes) {
          await createItem(prismaCategory, {
            imageUrl: spiritAshe.imageUrl,
            locationUrl: spiritAshe.locationUrl,
            wikiUrl: spiritAshe.wikiUrl,
            names: spiritAshe.names,
            inDlc: spiritAshe.inDlc,
          });
        }
        break;

      case 'Cook books':
        for (const cookBook of cookBooks) {
          await createItem(prismaCategory, {
            imageUrl: cookBook.imageUrl,
            locationUrl: cookBook.locationUrl,
            wikiUrl: cookBook.wikiUrl,
            names: cookBook.names,
            inDlc: cookBook.inDlc,
          });
        }
        break;

      case 'Talismans':
        for (const talisman of talismans) {
          await createItem(prismaCategory, {
            imageUrl: talisman.imageUrl,
            locationUrl: talisman.locationUrl,
            wikiUrl: talisman.wikiUrl,
            names: talisman.names,
            inDlc: talisman.inDlc,
          });
        }
        break;

      case 'Ashes of war':
        for (const asheOfWar of ashesOfWar) {
          await createItem(prismaCategory, {
            imageUrl: asheOfWar.imageUrl,
            locationUrl: asheOfWar.locationUrl,
            wikiUrl: asheOfWar.wikiUrl,
            names: asheOfWar.names,
            inDlc: asheOfWar.inDlc,
          });
        }
        break;

      default:
        console.error(`Category not found: ${category.en}`);
        break;
    }
  }
};

const createItems = async () => {
  await createCategories();
};

async function main() {
  await createBosses();
  await createItems();
}

main();
