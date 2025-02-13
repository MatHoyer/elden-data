import { whetBlades } from './../../../prisma/defaultData/whetBlades';
import fs from 'fs';

export const changeData = () => {
  // Armors / Weapons / Shields
  const trad = true;
  const name = 'whetBlades';
  const nameType = 'TWhetBlades';
  const items = whetBlades;
  const nameNewFile = 'rebaseWhetBlades.ts';

  const filePath = './prisma/defaultData/' + nameNewFile;

  const data: {
    [key: string]: {
      name: { en: string; fr: string };
      locationUrl: string;
      wikiUrl: string;
      imageUrl: string;
      inDlc?: boolean;
    }[];
  } = { [name]: [] };

  items.map((item) => {
    // console.log(item);
    const dataP = {
      name: trad ? { en: '', fr: item.name } : { en: item.name, fr: '' },
      locationUrl: item.locationUrl,
      wikiUrl: item.wikiUrl,
      imageUrl: item.imageUrl,
      // inDlc: item.inDlc || undefined,
    };
    data[name].push(dataP);
  });

  const allData =
    `type ` +
    nameType +
    ` = {
	` +
    name +
    `: {
		name: { en: string; fr: string };
		locationUrl: string;
		wikiUrl: string;
		imageUrl: string;
		inDlc?: boolean;
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
