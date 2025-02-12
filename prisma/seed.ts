import { ItemCategory } from '@prisma/client';
import prisma from '../src/lib/prisma';
import { armors } from './defaultData/armor';
import { ashesOfWar } from './defaultData/asheOfWar';
import { bosses } from './defaultData/bosses';
import { categories } from './defaultData/categories';
import { cookBooks } from './defaultData/cookBook';
import { crystalTears } from './defaultData/crystalTear';
import { shields } from './defaultData/shield';
import { spells } from './defaultData/spell';
import { spiritAshes } from './defaultData/spiritAshe';
import { talismans } from './defaultData/talismans';
import { weapons } from './defaultData/weapon';
import { whetBlades } from './defaultData/whetBlade';

const createBosses = async () => {
  for (const location of bosses.location) {
    const prismaLocationNames = await prisma.names.create({
      data: location.name,
    });
    const prismaLocation = await prisma.location.create({
      data: {
        namesId: prismaLocationNames.id,
      },
    });

    for (const boss of location.bosses) {
      const prismaBossNames = await prisma.names.create({
        data: boss.name,
      });
      const prismaBossCategories = await prisma.bossCategories.create({
        data: boss.category,
      });
      let prismaBossRemembrance = undefined;
      if (boss.remembrance) {
        const prismaBossRemembranceNames = await prisma.names.create({
          data: boss.remembrance.name,
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
        for (const armor of armors) {
          const prismaArmorSetCategoryNames = await prisma.names.create({
            data: {
              en: '',
              fr: armor.name,
            },
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
              names: {
                en: '',
                fr: armorPiece.name,
              },
              inDlc: false,
            });
          }
        }
        break;

      case 'Weapons':
        for (const weapon of weapons) {
          await createItem(prismaCategory, {
            imageUrl: weapon.imageUrl,
            locationUrl: weapon.locationUrl,
            wikiUrl: weapon.wikiUrl,
            names: {
              en: '',
              fr: weapon.name,
            },
            inDlc: weapon.inDlc,
          });
        }
        break;

      case 'Shields':
        for (const shield of shields) {
          await createItem(prismaCategory, {
            imageUrl: shield.imageUrl,
            locationUrl: shield.locationUrl,
            wikiUrl: shield.wikiUrl,
            names: {
              en: '',
              fr: shield.name,
            },
            inDlc: shield.inDlc,
          });
        }
        break;

      case 'Spells':
        const prismaSorcelleriesCategoryNames = await prisma.names.create({
          data: {
            en: 'Sorcelleries',
            fr: 'Sorcelleries',
          },
        });
        const prismaSorcelleriesCategory = await prisma.itemCategory.create({
          data: {
            namesId: prismaSorcelleriesCategoryNames.id,
            parentCategoryId: prismaCategory.id,
          },
        });
        const prismaIncantationsCategoryNames = await prisma.names.create({
          data: {
            en: 'Incantations',
            fr: 'Incantations',
          },
        });
        const prismaIncantationsCategory = await prisma.itemCategory.create({
          data: {
            namesId: prismaIncantationsCategoryNames.id,
            parentCategoryId: prismaCategory.id,
          },
        });

        const filteredSpells = Object.groupBy(spells, (spell) =>
          spell.sortableType === 'Sorcelleries'
            ? 'Sorcelleries'
            : 'Incantations'
        );
        for (const spell of filteredSpells.Incantations!) {
          await createItem(prismaIncantationsCategory, {
            imageUrl: spell.imageUrl,
            locationUrl: spell.locationUrl,
            wikiUrl: spell.wikiUrl,
            names: {
              en: '',
              fr: spell.name,
            },
            inDlc: spell.inDlc,
          });
        }
        for (const spell of filteredSpells.Sorcelleries!) {
          await createItem(prismaSorcelleriesCategory, {
            imageUrl: spell.imageUrl,
            locationUrl: spell.locationUrl,
            wikiUrl: spell.wikiUrl,
            names: {
              en: '',
              fr: spell.name,
            },
            inDlc: spell.inDlc,
          });
        }

        break;

      case 'Whet blades':
        for (const whetBlade of whetBlades) {
          await createItem(prismaCategory, {
            imageUrl: whetBlade.imageUrl,
            locationUrl: whetBlade.locationUrl,
            wikiUrl: whetBlade.wikiUrl,
            names: {
              en: '',
              fr: whetBlade.name,
            },
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
            names: {
              en: '',
              fr: crystalTear.name,
            },
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
            names: {
              en: '',
              fr: spiritAshe.name,
            },
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
            names: {
              en: '',
              fr: cookBook.name,
            },
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
            names: {
              en: '',
              fr: talisman.name,
            },
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
            names: {
              en: '',
              fr: asheOfWar.name,
            },
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
