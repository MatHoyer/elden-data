type TRebaseBosses = {
  location: {
    name: {
      en: string;
      fr: string;
    };
    bosses: {
      id: string;
      name: {
        en: string;
        fr: string;
      };
      locationUrl: string;
      wikiUrl: string;
      category: {
        inNight?: boolean;
        needBell?: boolean;
        phase?: number;
        inDlc?: boolean;
      };
    }[];
  }[];
};

export const rebaseBosses: TRebaseBosses = {
  location: [
    {
      name: {
        en: 'Chapel of Anticipation',
        fr: "Chapelle de l'anticipation",
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Grafted Scion',
            fr: 'Rejeton greffé',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164433',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Grafted+Scion',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Limgrave',
        fr: 'Nécrolimbe',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Soldier of Godrick',
            fr: 'Soldat de Godrick',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164420',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Soldier+of+Godrick',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Ulcerated Tree Spirit',
            fr: "Esprit d'arbre ulcéreux",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164143',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ulcerated+Tree+Spirit',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Tree Sentinel',
            fr: "Sentinelle de l'Arbre",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164444',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Tree+Sentinel',
          category: {},
        },
        {
          id: '',
          name: {
            en: '2x Demi-Human Chief',
            fr: '2x Chef semi-humain',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164457',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Demi-Human+Chief',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Erdtree Burial Watchdog',
            fr: "Veilleur de l'Arbre-Monde",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164467',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdtree+Burial+Watchdog',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Beastman of Farum Azula',
            fr: 'Homme-bête de Farum Azula',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164472',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Beastman+of+Farum+Azula',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Flying Dragon Agheel',
            fr: 'Agheel le dragon volant',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164484',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Flying+Dragon+Agheel',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Stonedigger Troll',
            fr: 'Troll fouisseur',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164478',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Stonedigger+Troll',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Patches',
            fr: 'Pat',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164504',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Patches',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Grave Warden Duelist',
            fr: 'Duelliste gardien du tombeau',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164499',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Grave+Warden+Duelist',
          category: {},
        },
        {
          id: '',
          name: {
            en: "Night's Cavalry",
            fr: 'Cavalier crépusculaire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164488',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          category: {
            inNight: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Mad Pumpkin Head',
            fr: 'Tête de citrouille démente',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164490',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Mad+Pumpkin+Head',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Bloodhound Knight Darriwil',
            fr: 'Darriwil, Chevalier-limier',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164486',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Bloodhound+Knight+Darriwil',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Crucible Knight',
            fr: 'Chevalier du Creuset',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164476',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Crucible+Knight',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Bell Bearing Hunter',
            fr: 'Chasseur de perles cinéraires',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165725',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Bell+Bearing+Hunter',
          category: {
            inNight: true,
            needBell: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Deathbird',
            fr: 'Rapace funeste',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165457',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Deathbird',
          category: {
            inNight: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Black Knife Assassin',
            fr: 'Assassin des Couteaux noirs',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164530',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Knife+Assassin',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Guardian Golem',
            fr: 'Golem gardien',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164509',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Guardian+Golem',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Tibia Mariner',
            fr: 'Nocher diaphane',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164859',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Tibia+Mariner',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Margit the Fell Omen',
            fr: 'Margit le Déchu',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=163938',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Margit+the+Fell+Omen',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Godrick the Grafted',
            fr: 'Godrick le Greffé',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164421',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Godrick+the+Grafted',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Weeping Peninsula',
        fr: 'Péninsule Larmoyante',
      },
      bosses: [
        {
          id: '',
          name: {
            en: "Night's Cavalry",
            fr: 'Cavalier crépusculaire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164659',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          category: {
            inNight: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Erdtree Burial Watchdog',
            fr: "Veilleur de l'Arbre-Monde",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165949',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdtree+Burial+Watchdog',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Runebear',
            fr: 'Ours runique',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165462',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Runebear',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Scaly Misbegotten',
            fr: 'Chimère écailleuse',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165453',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Scaly+Misbegotten',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Erdtree Avatar',
            fr: "Avatar de l'Arbre-Monde",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165321',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdtree+Avatar',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Cemetery Shade',
            fr: 'Ombre du cimetière',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165317',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Cemetery+Shade',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Ancient Hero of Zamor',
            fr: 'Ancien héros de Zamor',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165411',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ancient+Hero+of+Zamor',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Miranda the Blighted Bloom',
            fr: 'Fleur de Miranda',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165743',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Miranda+the+Blighted+Bloom',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Deathbird',
            fr: 'Rapace funeste',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166054',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Deathbird',
          category: {
            inNight: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Leonine Misbegotten',
            fr: 'Chimère léonine',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164812',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Leonine+Misbegotten',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Siofra River (Down)',
        fr: 'La Siofra (Bas)',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Ancestor Spirit',
            fr: 'Esprit ancestral',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167775',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ancestor+Spirit',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Liurnia of the Lakes (South)',
        fr: 'Liurnia (Sud)',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Cleanrot Knight',
            fr: 'Chevalier de la Noble putréfaction',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166386',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Cleanrot+Knight',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Erdtree Burial Watchdog',
            fr: "Veilleur de l'Arbre-Monde",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168517',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdtree+Burial+Watchdog',
          category: {},
        },
        {
          id: '',
          name: {
            en: "Night's Cavalry",
            fr: 'Cavalier crépusculaire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166181',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          category: {
            inNight: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Tibia Mariner',
            fr: 'Nocher diaphane',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166619',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Tibia+Mariner',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Bloodhound Knight',
            fr: 'Chevalier-limier',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168523',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Bloodhound+Knight',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Adan, Thief of Fire',
            fr: 'Adan le Voleur du Feu',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166505',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Adan,+Thief+of+Fire',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Deathbird',
            fr: 'Rapace funeste',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165597',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Deathbird',
          category: {
            inNight: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Omenkiller',
            fr: 'Tueur de Réprouvés',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166426',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Omenkiller',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Erdtree Avatar',
            fr: "Avatar de l'Arbre-Monde",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165594',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdtree+Avatar',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Spiritcaller Snail',
            fr: 'Escargot mande-spectre',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166749',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Spirit-caller+Snail',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Bols, Carian Knight',
            fr: 'Bols, chevalier de Caria',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167325',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Bols,+Carian+Knight',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Glintstone Dragon Smarag',
            fr: "Smarag, dragon de pierre d'éclat",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165267',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Glintstone+Dragon+Smarag',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Crystalian (Spear) & Crystalian (Staff)',
            fr: 'Lancier cristalien & Sorcier cristalien',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166455',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Crystalians',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Death Rite Bird',
            fr: 'Volatile funéraire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166501',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Death+Rite+Bird',
          category: {
            inNight: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Red Wolf of Radagon',
            fr: 'Loup cramoisi de Radagon',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165697',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Red+Wolf+of+Radagon',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Rennala, Queen of the Full Moon',
            fr: 'Rennala, reine de la pleine lune',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164430',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Rennala,+Queen+of+the+Full+Moon',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Ainsel River',
        fr: "L'Ainsel",
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Dragonkin Soldier of Nokstella',
            fr: 'Soldat draconide de Nokstella',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167625',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Dragonkin+Soldier+of+Nokstella',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Liurnia of the Lakes (North)',
        fr: 'Liurnia (Nord)',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Crystalian',
            fr: 'Cristalien',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166381',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Crystalians',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Bell Bearing Hunter',
            fr: 'Chasseur de perles cinéraires',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165744',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Bell+Bearing+Hunter',
          category: {
            inNight: true,
            needBell: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Cemetery Shade',
            fr: 'Ombre du cimetière',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166484',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Cemetery+Shade',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Black Knife Assassin',
            fr: 'Assassin des Couteaux noirs',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166482',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Knife+Assassin',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Erdtree Avatar',
            fr: "Avatar de l'Arbre-Monde",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165595',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdtree+Avatar',
          category: {},
        },
        {
          id: '',
          name: {
            en: "Night's Cavalry",
            fr: 'Cavalier crépusculaire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166645',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          category: {
            inNight: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Royal Revenant',
            fr: 'Spectre royal',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166772',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Royal+Revenant',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Royal Knight Loretta',
            fr: 'Loretta, chevaleresse royale',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165490',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Royal+Knight+Loretta',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Glintstone Dragon Adula',
            fr: "Adula, dragon de pierre d'éclat",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167408',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Glintstone+Dragon+Adula',
          category: {
            phase: 1,
          },
        },
        {
          id: '',
          name: {
            en: 'Onyx Lord',
            fr: "Seigneur d'onyx",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166766',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Onyx+Lord',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Caelid',
        fr: 'Caelid',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Putrid Avatar',
            fr: 'Avatar putride',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166512',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Putrid+Avatar',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Erdtree Burial Watchdog (Scepter) & Erdtree Burial Watchdog (Sword)',
            fr: "Veilleur sorcier de l'Arbre-Monde & Veilleur épéiste de l'Arbre-Monde",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166671',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdtree+Burial+Watchdog',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Mad Pumpkin Head (Hammer) & Mad Pumpkin Head (Flail)',
            fr: "Tête de citrouille démente au marteau & Tête de citrouille démente au fléau d'armes",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166738',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Mad+Pumpkin+Head',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Magma Wyrm',
            fr: 'Dragon du magma',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167222',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Magma+Wyrm',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Cleanrot Knight (Sickle) & Cleanrot Knight (Spear)',
            fr: 'Chevalier faucheur de la Noble putréfaction & Chevalier lancier de la Noble putréfaction',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168213',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Cleanrot+Knight',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Frenzied Duelist',
            fr: 'Duelliste frénétique',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168033',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Frenzied+Duelist',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Decaying Ekzykes',
            fr: 'Ekzykes le Putréfié',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165933',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Decaying+Ekzykes',
          category: {},
        },
        {
          id: '',
          name: {
            en: "Night's Cavalry",
            fr: 'Cavalier crépusculaire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166477',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          category: {
            inNight: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Cemetery Shade',
            fr: 'Ombre du cimetière',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168518',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Cemetery+Shade',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Crucible Knight & Misbegotten Warrior',
            fr: 'Chevalier du Creuset & Chimère léonine',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166176',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Crucible+Knight+&+Misbegotten+Warrior',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Death Rite Bird',
            fr: 'Volatile funéraire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167019',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Death+Rite+Bird',
          category: {
            inNight: true,
          },
        },
        {
          id: '',
          name: {
            en: "Commander O'Neil",
            fr: "Commandant O'Neil",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166073',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Commander+O'Neil",
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Fallingstar Beast',
            fr: 'Créature stellaire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167582',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Fallingstar+Beast',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Nox Swordstress & Nox Monk',
            fr: 'Épéiste nokrienne & Moine nokrien',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166499',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Nox+Swordstress+&+Nox+Priest',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Starscourge Radahn',
            fr: 'Radahn le Fléau des astres',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165444',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Starscourge+Radahn',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Putrid Tree Spirit',
            fr: "Esprit d'arbre putride",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167378',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Putrid+Tree+Spirit',
          category: {},
        },
      ],
    },
    {
      name: {
        en: "Greyoll's Dragonbarrow",
        fr: 'Tertre draconique de Greyoll',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Putrid Crystalian (Staff), Putrid Crystalian (Ringblade) & Putrid Crystalian (Spear)',
            fr: 'Sorcier cristalien putride, Danseur cristalien putride & Lancier cristalien putride',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167921',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Putrid+Crystalians',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Battlemage Hugues',
            fr: 'Mage de bataille Hugues',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167402',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Battlemage+Hugues',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Godskin Apostle',
            fr: 'Apôtre sanctechair',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166668',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Godskin+Apostle',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Bell Bearing Hunter',
            fr: 'Chasseur de perles cinéraires',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168044',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Bell+Bearing+Hunter',
          category: {
            inNight: true,
            needBell: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Beastman of Farum Azula (Throwing Knife) & Beastman of Farum Azula (Greatsword)',
            fr: 'Homme-bête aux couteaux de Farum Azula & Homme-bête guerrier de Farum Azula',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167916',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Beastman+of+Farum+Azula',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Putrid Avatar',
            fr: 'Avatar putride',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166615',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Putrid+Avatar',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Flying Dragon Greyll',
            fr: 'Greyll le Dragon volant',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166013',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Flying+Dragon+Greyll',
          category: {},
        },
        {
          id: '',
          name: {
            en: "Night's Cavalry",
            fr: 'Cavalier crépusculaire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166616',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          category: {
            inNight: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Black Blade Kindred',
            fr: "Adepte de la Lame d'ébène",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166006',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Blade+Kindred',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Siofra River (Up)',
        fr: 'La Siofra (Haut)',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Mimic Tear',
            fr: 'Larme imitatrice',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168280',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Mimic+Tear',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Regal Ancestor Spirit',
            fr: 'Esprit ancestral royal',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167929',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Regal+Ancestor+Spirit',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Dragonkin Soldier',
            fr: 'Soldat draconide',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167928',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Dragonkin+Soldier',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Valiant Gargoyle (Twinblade) & Valiant Gargoyle',
            fr: 'Gargouille vaillante à la double lame & Gargouille vaillante',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168404',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Valiant+Gargoyle',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Deeproot Depths',
        fr: 'Profondeurs de Fonderacine',
      },
      bosses: [
        {
          id: '',
          name: {
            en: "3x Fia's Champions, Sorcerer Rogier & Lionel the Lionhearted",
            fr: '3x Champion de Fia, Rogier le Sorcier & Lionel Cœur-de-Lion',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168424',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Fia's+champions",
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Lichdragon Fortissax',
            fr: 'Fortissax la Liche draconique',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168158',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Lichdragon+Fortissax',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Crucible Knight Siluria',
            fr: 'Siluria du Creuset',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168281',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Crucible+Knight+Siluria',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Lake of Rot',
        fr: 'Lac putréfié',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Dragonkin Soldier',
            fr: 'Soldat draconide',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168515',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Dragonkin+Soldier',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Astel, Naturalborn of the Void',
            fr: 'Astel le Rejeton du vide',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167488',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Astel,+Naturalborn+of+the+Void',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Liurnia of the Lakes (Plateau) (Quest  Ranni)',
        fr: 'Liurnia (Plateau) (Quête  Ranni)',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Glintstone Dragon Adula',
            fr: "Adula, dragon de pierre d'éclat",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167576',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Glintstone+Dragon+Adula',
          category: {
            phase: 2,
          },
        },
        {
          id: '',
          name: {
            en: 'Alecto, Black Knife Ringleader',
            fr: 'Alecto, meneuse des Couteaux noirs',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=171212',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Alecto,+Black+Knife+Ringleader',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Altus Plateau',
        fr: 'Plateau Altus',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Magma Wyrm Makar',
            fr: 'Makar le Dragon du magma',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166245',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Magma+Wyrm+Makar',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Perfumer Tricia & Misbegotten Warrior',
            fr: 'Parfumeuse Tricia & Chimère léonine',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167394',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Perfumer+Tricia',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Necromancer Garris',
            fr: 'Garris le Nécromancien',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166675',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Necromancer+Garris',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Black Knife Assassin',
            fr: 'Assassin des Couteaux noirs',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166678',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Knife+Assassin',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Ancient Dragon Lansseax',
            fr: 'Lansseax le Dragon ancien',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167545',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ancient+Dragon+Lansseax',
          category: {
            phase: 1,
          },
        },
        {
          id: '',
          name: {
            en: 'Stonedigger Troll',
            fr: 'Troll fouisseur',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168507',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Stonedigger+Troll',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Godefroy the Grafted',
            fr: 'Godefroy le Greffé',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167645',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Godefroy+the+Grafted',
          category: {},
        },
        {
          id: '',
          name: {
            en: "Night's Cavalry",
            fr: 'Cavalier crépusculaire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167893',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          category: {
            inNight: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Demi-Human Queen Gilika',
            fr: 'Gilika, reine semi-humaine',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167566',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Demi-Human+Queen+Gilika',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Sanguine Noble',
            fr: 'Noble sanglant',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167656',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Sanguine+Noble',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Godskin Apostle',
            fr: 'Apôtre sanctechair',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166231',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Godskin+Apostle',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Wormface',
            fr: 'Face de ver',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167317',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Wormface',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Crystalian (Spear) & Crystalian (Ringblade)',
            fr: 'Lancier cristalien & Danseur cristalien',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168080',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Crystalians',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Ancient Dragon Lansseax',
            fr: 'Lansseax le Dragon ancien',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168510',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ancient+Dragon+Lansseax',
          category: {
            phase: 2,
          },
        },
        {
          id: '',
          name: {
            en: 'Black Knife Assassin',
            fr: 'Assassin des Couteaux noirs',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167676',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Knife+Assassin',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Ancient Hero of Zamor',
            fr: 'Ancien héros de Zamor',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=175115',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ancient+Hero+of+Zamor',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Omenkiller & Miranda the Blighted Bloom',
            fr: 'Tueur de Réprouvés & Miranda la Fleur galeuse',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169017',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Omenkiller',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Fallingstar Beast',
            fr: 'Créature stellaire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167585',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Fallingstar+Beast',
          category: {},
        },
        {
          id: '',
          name: {
            en: '2x Tree Sentinel',
            fr: "2x Sentinelle de l'Arbre",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167584',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Tree+Sentinel',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'The Shaded Castle',
        fr: 'Le Bastiombre',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Elemer of the Briar',
            fr: 'Elemer du Roncier',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167323',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Elemer+of+the+Briar',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Mt Gelmir',
        fr: 'Mont Gelmir',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Abductor Virgin (Wheel) & Abductor Virgin (Swinging Sickle)',
            fr: 'Vierge ravisseuse aux rouets & Vierge ravisseuse aux faucilles',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168514',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Abductor+Virgins',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Tibia Mariner',
            fr: 'Nocher diaphane',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167560',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Tibia+Mariner',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Erdtree Burial Watchdog',
            fr: "Veilleur de l'Arbre-Monde",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168513',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdtree+Burial+Watchdog',
          category: {},
        },
        {
          id: '',
          name: {
            en: '2x Kindred of Rot',
            fr: '2x Adepte de la putréfaction',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168512',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Kindred+of+Rot',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Magma Wyrm',
            fr: 'Dragon du magma',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167377',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Magma+Wyrm',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Demi-Human Queen Maggie',
            fr: 'Maggie, reine semi-humaine',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167815',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Demi-Human+Queen+Maggie',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Red Wolf of the Champion',
            fr: 'Loup rouge du champion',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168140',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Red+Wolf+of+the+Champion',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Demi-Human Queen Margot',
            fr: 'Margot, reine semi-humaine',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167366',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Demi-Human+Queen+Margot',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Full-Grown Fallingstar Beast',
            fr: 'Créature stellaire adulte',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167365',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Full-Grown+Fallingstar+Beast',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Ulcerated Tree Spirit',
            fr: "Esprit d'arbre ulcéreux",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167812',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ulcerated+Tree+Spirit',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Godskin Noble',
            fr: 'Noble sanctechair',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168177',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Godskin+Noble',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'God-Devouring Serpent / Rykard, Lord of Blasphemy',
            fr: 'Serpent dévoreur de dieux / Rykard, seigneur du blasphème',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167571',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Rykard,+Lord+of+Blasphemy',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Capital Outskirts',
        fr: 'Faubourgs de la capitale',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Onyx Lord',
            fr: "Seigneur d'onyx",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168154',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Onyx+Lord',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Bell Bearing Hunter',
            fr: 'Chasseur de perles cinéraires',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169467',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Bell+Bearing+Hunter',
          category: {
            inNight: true,
            needBell: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Deathbird',
            fr: 'Rapace funeste',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167182',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Deathbird',
          category: {
            inNight: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Crucible Knight & Crucible Knight Ordovis',
            fr: 'Ordovis, chevalier du Creuset & Chevalier du Creuset',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167535',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Crucible+Knight+Ordovis',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Grave Warden Duelist',
            fr: 'Duelliste gardien du tombeau',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167018',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Grave+Warden+Duelist',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Draconic Tree Sentinel',
            fr: "Sentinelle draconique de l'Arbre",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167180',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Draconic+Tree+Sentinel',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Leyndell Catacombs',
        fr: 'Catacombes de Leyndell',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Esgar, Priest of Blood',
            fr: 'Esgar, prêtre du sang',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=175359',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Esgar,+Priest+of+Blood',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Mohg, the Omen',
            fr: 'Mohg le Réprouvé',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168657',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Mohg,+the+Omen',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Leyndell, Royal Capital',
        fr: 'Leyndell, Capitale Royale',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Godfrey, First Elden Lord',
            fr: "Godfrey, premier Seigneur d'Elden",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167693',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Godfrey,+First+Elden+Lord+(Golden+Shade)',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Morgott, the Omen King',
            fr: 'Morgott, roi Réprouvé',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167374',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Morgott,+the+Omen+King',
          category: {},
        },
        {
          id: '',
          name: {
            en: '2x Fell Twin',
            fr: '2x Jumeau abominable',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167171',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Fell+Twins',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Mountaintops of the Giants',
        fr: 'Cimes des géants',
      },
      bosses: [
        {
          id: '',
          name: {
            en: "Night's Cavalry",
            fr: 'Cavalier crépusculaire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168519',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          category: {
            inNight: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Black Blade Kindred',
            fr: "Adepte de la Lame d'ébène",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168016',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Blade+Kindred',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Ulcerated Tree Spirit',
            fr: "Esprit d'arbre ulcéreux",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167668',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ulcerated+Tree+Spirit',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Death Rite Bird',
            fr: 'Volatile funéraire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168010',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Death+Rite+Bird',
          category: {
            inNight: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Commander Niall',
            fr: 'Commandant Niall',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167290',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Commander+Niall',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Erdtree Avatar',
            fr: "Avatar de l'Arbre-Monde",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167138',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdtree+Avatar',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Godskin Apostle, Godskin Noble & Spiritcaller Snail',
            fr: 'Apôtre sanctechair, Noble sanctechair & Escargot mande-spectre',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169802',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Spirit-caller+Snail',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Borealis the Freezing Fog',
            fr: 'Borealis la Brume glaciale',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165642',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Borealis+the+Freezing+Fog',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Roundtable Knight Vyke',
            fr: 'Vyke, chevalier de la Table ronde',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168377',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Roundtable+Knight+Vyke',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Ancient Hero of Zamor',
            fr: 'Ancien héros de Zamor',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167371',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ancient+Hero+of+Zamor',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Fire Giant',
            fr: 'Géant de feu',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167375',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Fire+Giant',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Consecrated Snowfield',
        fr: 'Champs enneigés consacrés',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Stray Mimic Tear',
            fr: 'Larme imitatrice égarée',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169799',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Stray+Mimic+Tear',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Putrid Grave Warden Duelist',
            fr: 'Duelliste putride gardien du tombeau',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168389',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Putrid+Grave+Warden+Duelist',
          category: {},
        },
        {
          id: '',
          name: {
            en: "Night's Cavalry (Flail) & Night's Cavalry (Glaive)",
            fr: 'Cavalier crépusculaire au fléau & Cavalier crépusculaire au glaive',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168493',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          category: {
            inNight: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Astel, Stars of Darkness',
            fr: 'Astel la Constellation des ténèbres',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168224',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Astel,+Stars+of+Darkness',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Misbegotten Crusader',
            fr: 'Croisé chimérique',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168661',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Misbegotten+Crusader',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Great Wyrm Theodorix',
            fr: 'Theodorix le Grand ver',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168186',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Great+Wyrm+Theodorix',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Putrid Avatar',
            fr: 'Avatar putride',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168521',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Putrid+Avatar',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Death Rite Bird',
            fr: 'Volatile funéraire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168520',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Death+Rite+Bird',
          category: {
            inNight: true,
          },
        },
      ],
    },
    {
      name: {
        en: 'Mohgwyn Palace',
        fr: 'Palais Mohgwyn',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Mohg, Lord of Blood',
            fr: 'Mohg, seigneur du sang',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168412',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Mohg,+Lord+of+Blood',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Crumbling Farum Azula',
        fr: 'Ruines de Farum Azula',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Godskin Duo',
            fr: 'Duo sanctechair',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167392',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Godskin+Duo',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Dragonlord Placidusax',
            fr: 'Placidusax, seigneur draconique',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168522',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Dragonlord+Placidusax',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Beast Clergyman / Maliketh, the Black Blade',
            fr: "Clerc bestial / Maliketh la Lame d'ébène",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=175509',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Maliketh,+the+Black+Blade',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Leyndell, Capital of Ash',
        fr: 'Leyndell, Capitale des Cendres',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Sir Gideon Ofnir, the All-Knowing',
            fr: "Sire Gideon Ofnir l'Omniscient",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=176583',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Sir+Gideon+Ofnir,+the+All-Knowing',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Godfrey, First Elden Lord / Hoarah Loux, Warrior',
            fr: "Godfrey, premier Seigneur d'Elden / Hoarah Loux le Guerrier",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=176808',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Godfrey,+First+Elden+Lord',
          category: {},
        },
      ],
    },
    {
      name: {
        en: "Miquella's Haligtree",
        fr: 'Arbre-Sacré de Miquella',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Loretta, Knight of the Haligtree',
            fr: "Loretta, chevaleresse de l'Arbre-Sacré",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168228',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Loretta,+Knight+of+the+Haligtree',
          category: {},
        },
        {
          id: '',
          name: {
            en: 'Malenia, Blade of Miquella / Malenia, Goddess of Rot',
            fr: 'Malenia, épée de Miquella / Malenia, déesse de la putréfaction',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167678',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Malenia+Blade+of+Miquella',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'The Erdtree',
        fr: 'Arbre-Monde',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Radagon of the Golden Order / Elden Beast',
            fr: "Radagon de l'Ordre d'or / Bête d'Elden",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=176996',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Elden+Beast',
          category: {},
        },
      ],
    },
    {
      name: {
        en: 'Gravesite Plain',
        fr: 'Plaine sépulcrale',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Blackgaol Knight',
            fr: 'Chevalier de la Geôle Solitaire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=380578',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Blackgaol+Knight',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Ghostflame Dragon',
            fr: 'Dragon de flammes spectrales',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=380856',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ghostflame+Dragon',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Demi-Human Swordmaster Onze',
            fr: 'Onze, épéiste semi-humain',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=380889',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Demi-Human+Swordmaster+Onze',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Divine Beast Dancing Lion',
            fr: 'Lion dansant de la bête divine',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=380798',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Divine+Beast+Dancing+Lion',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Death Knight',
            fr: 'Chevalier de la Mort',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381925',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Death+Knight',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Chief Bloodfiend',
            fr: 'Chef des démons sanglants',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381006',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Chief+Bloodfiend',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Ancient Dragon-Man',
            fr: 'Homme-dragon ancien',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381039',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ancient+Dragon-Man',
          category: {
            inDlc: true,
          },
        },
      ],
    },
    {
      name: {
        en: 'Castle Ensis',
        fr: "Château d'Ensis",
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Rellana, Twin Moon Knight',
            fr: 'Rellana, chevaleresse des Lunes jumelles',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=380245',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Rellana,+Twin+Moon+Knight',
          category: {
            inDlc: true,
          },
        },
      ],
    },
    {
      name: {
        en: 'Scadu Altus',
        fr: 'Altus Occulte',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Black Knight Garrew',
            fr: 'Garrew, chevalier Noir',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381539',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Knight+Garrew',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Ralva the Great Red Bear',
            fr: 'Ralva, grand ours écarlate',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=380320',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ralva+the+Great+Red+Bear',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Dryleaf Dane',
            fr: 'Dane Mortefeuille',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=384468',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Dryleaf+Dane+(Boss)',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Ghostflame Dragon',
            fr: 'Dragon de flammes spectrales',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=380345',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ghostflame+Dragon',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Black Knight Edredd',
            fr: 'Edredd, chevalier Noir',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381872',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Knight+Edredd',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Curseblade Labirith',
            fr: "Labirith l'Exécrable",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381240',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Curseblade+Labirith',
          category: {
            inDlc: true,
          },
        },
      ],
    },
    {
      name: {
        en: 'Rauh Base',
        fr: 'Base de Rauh',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Red Bear',
            fr: 'Ours écarlate',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381977',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Red+Bear',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Rugalea the Great Red Bear',
            fr: 'Rugalea, grand ours écarlate',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381980',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Rugalea+the+Great+Red+Bear',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Death Knight',
            fr: 'Chevalier de la Mort',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381984',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Death+Knight',
          category: {
            inDlc: true,
          },
        },
      ],
    },
    {
      name: {
        en: 'Cerulean Coast',
        fr: 'Côte céruléenne',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Demi-Human Queen Marigga',
            fr: 'Marigga, reine semi-humaine',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381919',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Demi-Human+Queen+Marigga',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Ghostflame Dragon',
            fr: 'Dragon de flammes spectrales',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382236',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ghostflame+Dragon',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Dancer of Ranah',
            fr: 'Danseuse de Ranah',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381922',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Dancer+of+Ranah',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Putrescent Knight',
            fr: 'Chevalier putride',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381961',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Putrescent+Knight',
          category: {
            inDlc: true,
          },
        },
      ],
    },
    {
      name: {
        en: "Charo's Hidden Grave",
        fr: 'Tombeau secret de Charo',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Death Rite Bird',
            fr: 'Volatile funéraire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381939',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Death+Rite+Bird',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Lamenter',
            fr: 'Larmoyeur',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381950',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Lamenter',
          category: {
            inDlc: true,
          },
        },
      ],
    },
    {
      name: {
        en: 'Shadow Keep',
        fr: 'Château noir',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Golden Hippopotamus',
            fr: 'Hippopotame doré',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381323',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Golden+Hippopotamus',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Scadutree Avatar',
            fr: "Avatar de l'Arbre-Occulte",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381991',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Scadutree+Avatar',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Commander Gaius',
            fr: 'Commandant Gaïus',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381989',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Commander+Gaius',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Messmer the Impaler / Base Serpent Messmer',
            fr: "Messmer l'Empaleur / Messmer, serpent maléfique",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381741',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Messmer+the+Impaler',
          category: {
            inDlc: true,
          },
        },
      ],
    },
    {
      name: {
        en: 'Hinterlands (Gesture O Mother)',
        fr: 'Arrière-pays (Émotes  Ô mère)',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Tree Sentinel',
            fr: "Sentinelle de l'Arbre",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381995',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Tree+Sentinel',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Tree Sentinel',
            fr: "Sentinelle de l'Arbre",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381997',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Tree+Sentinel',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Fallingstar Beast',
            fr: 'Créature stellaire',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382000',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Fallingstar+Beast',
          category: {
            inDlc: true,
          },
        },
      ],
    },
    {
      name: {
        en: 'Cathedral of Manus Metyr (Quest Count Ymir)',
        fr: 'Cathédrale de Manus Metyr (Quête  Comte Ymir)',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Metyr, Mother of Fingers',
            fr: 'Metyr, mère des Doigts',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382002',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Metyr,+Mother+of+Fingers',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Count Ymir, Mother of Fingers',
            fr: 'Comte Ymir, mère des Doigts',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=386484',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Count+Ymir,+Mother+of+Fingers',
          category: {
            inDlc: true,
          },
        },
      ],
    },
    {
      name: {
        en: 'Recluse River',
        fr: 'Rivière des reclus',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Rakshasa',
            fr: 'Rakshasa',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382014',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Rakshasa',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Jori, Elder Inquisitor',
            fr: 'Jori, inquisiteur en chef',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382021',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Jori,+Elder+Inquisitor',
          category: {
            inDlc: true,
          },
        },
      ],
    },
    {
      name: {
        en: 'Abbysal Woods',
        fr: 'Bois abyssaux',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Midra, Lord of Frenzied Flame',
            fr: 'Midra, seigneur de la Flamme exaltée',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382190',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Midra+Lord+of+Frenzied+Flame',
          category: {
            inDlc: true,
          },
        },
      ],
    },
    {
      name: {
        en: 'Jagged Peak',
        fr: 'Pic déchiqueté',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Jagged Peak Drake',
            fr: 'Dragon du Pic déchiqueté',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381932',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Jagged+Peak+Drake',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Jagged Peak Drake',
            fr: 'Dragon du Pic déchiqueté',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381965',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Jagged+Peak+Drake',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Ancient Dragon Senessax',
            fr: 'Senessax, Dragon ancien',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381968',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ancient+Dragon+Senessax',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Bayle the Dread',
            fr: "Bayle l'Effroyable",
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381971',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Bayle+the+Dread',
          category: {
            inDlc: true,
          },
        },
      ],
    },
    {
      name: {
        en: 'Ancient Ruins of Rauh',
        fr: 'Ruines antiques de Rauh',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Divine Beast Dancing Lion',
            fr: 'Lion dansant de la bête divine',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382038',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Divine+Beast+Dancing+Lion',
          category: {
            inDlc: true,
          },
        },
        {
          id: '',
          name: {
            en: 'Romina, Saint of the Bud',
            fr: 'Romina, sainte du bourgeon',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382040',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Romina,+Saint+of+the+Bud',
          category: {
            inDlc: true,
          },
        },
      ],
    },
    {
      name: {
        en: 'Enir-Ilim',
        fr: 'Enir-Ilim',
      },
      bosses: [
        {
          id: '',
          name: {
            en: 'Promised Consort Radahn / Radahn, Consort of Miquella',
            fr: 'Radahn, futur consort / Radahn, consort de Miquella',
          },
          locationUrl: 'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382044',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Promised+Consort+Radahn',
          category: {
            inDlc: true,
          },
        },
      ],
    },
  ],
};
