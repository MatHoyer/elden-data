import { spells } from './../../../prisma/defaultData/spells';
import fs from 'fs';

export const changeData = () => {
  // Armors / Weapons / Shields
  const trad = true;
  const name = 'spells';
  const nameType = 'TSpells';

  const items = Object.groupBy(spells, (item) => {
    return item.sortableType === 'Sorcelleries'
      ? 'Sorcelleries'
      : 'Incantations';
  });

  const nameNewFile = 'rebaseSpells.ts';

  const filePath = './prisma/defaultData/' + nameNewFile;

  const data: {
    types: {
      names: { en: string; fr: string };
      spells: {
        names: { en: string; fr: string };
        locationUrl: string;
        wikiUrl: string;
        imageUrl: string;
        inDlc?: boolean;
      }[];
    }[];
  } = { types: [] };

  // console.log(items);

  for (const item of Object.entries(items)) {
    data.types.push({
      names: trad ? { en: '', fr: item[0] } : { en: item[0], fr: '' },
      spells: [],
    });
    item[1].map((it) => {
      const dataP = {
        names: trad ? { en: '', fr: it.name } : { en: it.name, fr: '' },
        locationUrl: it.locationUrl,
        wikiUrl: it.wikiUrl,
        imageUrl: it.imageUrl,
        inDlc: it.inDlc || undefined,
      };
      for (const type of data.types) {
        if (type.names.fr === it.sortableType) {
          type.spells.push(dataP);
          break;
        }
      }
    });
  }

  // console.log(data);

  const allData =
    `type ` +
    nameType +
    ` = {
  types: {
    names: { en: string; fr: string };
	  ` +
    name +
    `: {
      names: { en: string; fr: string };
      locationUrl: string;
      wikiUrl: string;
      imageUrl: string;
      inDlc?: boolean;
    }[];
  }[];
};

export const ` +
    name +
    `: ` +
    nameType +
    ` = ${JSON.stringify(data, null, 2)};`;

  fs.writeFile(filePath, allData, (err) => {
    console.log(err);
  });
};
