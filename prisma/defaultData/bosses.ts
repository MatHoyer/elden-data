type TBosses = {
  locations: {
    names: {
      en: string;
      fr: string;
    };
    bosses: {
      names: {
        en: string;
        fr: string;
      };
      locationUrl: string;
      wikiUrl: string;
      imageUrl: string;
      remembrance?: {
        names: {
          en: string;
          fr: string;
        };
        imageUrl: string;
      };
      categories: {
        inNight?: boolean;
        needBell?: boolean;
        inDlc?: boolean;
        major?: boolean;
      };
    }[];
  }[];
};

export const bosses: TBosses = {
  locations: [
    {
      names: {
        en: 'Chapel of Anticipation',
        fr: "Chapelle de l'anticipation",
      },
      bosses: [
        {
          names: {
            en: 'Grafted Scion',
            fr: 'Rejeton greffé',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164433',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Grafted+Scion',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/er_grafted_scion.png',
        },
      ],
    },
    {
      names: {
        en: 'Limgrave',
        fr: 'Nécrolimbe',
      },
      bosses: [
        {
          names: {
            en: 'Soldier of Godrick',
            fr: 'Soldat de Godrick',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164420',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Soldier+of+Godrick',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/soldier-of-godrick-boss-elden-rings.jpg',
        },
        {
          names: {
            en: 'Ulcerated Tree Spirit',
            fr: "Esprit d'arbre ulcéreux",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164143',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Ulcerated+Tree+Spirit',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ulcerated_tree_spirit.png',
        },
        {
          names: {
            en: 'Tree Sentinel',
            fr: "Sentinelle de l'Arbre",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164444',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Tree+Sentinel',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/tree-sentinel-3.jpg',
        },
        {
          names: {
            en: '2x Demi-Human Chief',
            fr: '2x Chef semi-humain',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164457',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Demi-Human+Chief',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/demihuman-chief-boss-enemy-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Erdtree Burial Watchdog',
            fr: "Veilleur de l'Arbre-Monde",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164467',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Erdtree+Burial+Watchdog',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/burial_watchdog_bosses_elden_ring_wiki_600px.jpg',
        },
        {
          names: {
            en: 'Beastman of Farum Azula',
            fr: 'Homme-bête de Farum Azula',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164472',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Beastman+of+Farum+Azula',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/beastman-of-farum-azula-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Flying Dragon Agheel',
            fr: 'Agheel le dragon volant',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164484',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Flying+Dragon+Agheel',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/flying_dragon_agheel_2_bosses_elden_ring_wiki_600px.jpg',
        },
        {
          names: {
            en: 'Stonedigger Troll',
            fr: 'Troll fouisseur',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164478',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Stonedigger+Troll',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/stonedigger_troll_bosses_elden_ring_wiki_600px.jpg',
        },
        {
          names: {
            en: 'Patches',
            fr: 'Pat',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164504',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Patches',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/patches-npc-photo-elden-ring-wiki-guide-300px-min.jpg',
        },
        {
          names: {
            en: 'Grave Warden Duelist',
            fr: 'Duelliste gardien du tombeau',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164499',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Grave+Warden+Duelist',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/grave-warden-duelist-3.jpg',
        },
        {
          names: {
            en: "Night's Cavalry",
            fr: 'Cavalier crépusculaire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164488',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nights-cavalry-limgrave.jpg',
        },
        {
          names: {
            en: 'Mad Pumpkin Head',
            fr: 'Tête de citrouille démente',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164490',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Mad+Pumpkin+Head',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/mad-pumpkin-head.png',
        },
        {
          names: {
            en: 'Bloodhound Knight Darriwil',
            fr: 'Darriwil, Chevalier-limier',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164486',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Bloodhound+Knight+Darriwil',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodhound-knight-darriwil-boss-enemy-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Crucible Knight',
            fr: 'Chevalier du Creuset',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164476',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Crucible+Knight',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crucible-knight-stormhill-1.png',
        },
        {
          names: {
            en: 'Bell Bearing Hunter',
            fr: 'Chasseur de perles cinéraires',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165725',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Bell+Bearing+Hunter',
          categories: {
            inNight: true,
            needBell: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bell-bearing-hunter-elden-ring.jpg',
        },
        {
          names: {
            en: 'Deathbird',
            fr: 'Rapace funeste',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165457',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Deathbird',
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/death-bird-limgrave.jpg',
        },
        {
          names: {
            en: 'Black Knife Assassin',
            fr: 'Assassin des Couteaux noirs',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164530',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Knife+Assassin',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/black-knife-assassin-limgrave-2.png',
        },
        {
          names: {
            en: 'Guardian Golem',
            fr: 'Golem gardien',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164509',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Guardian+Golem',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/guardian-golem-field-boss-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Tibia Mariner',
            fr: 'Nocher diaphane',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164859',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Tibia+Mariner',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/tibia-mariner-limgrave-small.jpg',
        },
        {
          names: {
            en: 'Margit the Fell Omen',
            fr: 'Margit le Déchu',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=163938',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Margit+the+Fell+Omen',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/margit-3-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Godrick the Grafted',
            fr: 'Godrick le Greffé',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164421',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Godrick+the+Grafted',
          remembrance: {
            names: {
              en: 'Remembrance of the Grafted',
              fr: 'Souvenir du Greffé',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_grafted_elden_ring_wiki_guide_200px.png',
          },
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godrick_the_grafted_bosses_elden_ring_wiki_600px.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Weeping Peninsula',
        fr: 'Péninsule Larmoyante',
      },
      bosses: [
        {
          names: {
            en: "Night's Cavalry",
            fr: 'Cavalier crépusculaire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164659',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nights-cavalry-weeping-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Erdtree Burial Watchdog',
            fr: "Veilleur de l'Arbre-Monde",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165949',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Erdtree+Burial+Watchdog',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/burial_watchdog_bosses_elden_ring_wiki_600px.jpg',
        },
        {
          names: {
            en: 'Runebear',
            fr: 'Ours runique',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165462',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Runebear',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/runebear_bosses_elden_ring_wiki_guide.jpg',
        },
        {
          names: {
            en: 'Scaly Misbegotten',
            fr: 'Chimère écailleuse',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165453',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Scaly+Misbegotten',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/scaly_misbegotten.jpg',
        },
        {
          names: {
            en: 'Erdtree Avatar',
            fr: "Avatar de l'Arbre-Monde",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165321',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdtree+Avatar',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree-avatar-weeping-peninsula-elden-rink-wiki-guide-2.jpg',
        },
        {
          names: {
            en: 'Cemetery Shade',
            fr: 'Ombre du cimetière',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165317',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Cemetery+Shade',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/cemetery_shade_bosses_elden_ring_wiki_600px.jpg',
        },
        {
          names: {
            en: 'Ancient Hero of Zamor',
            fr: 'Ancien héros de Zamor',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165411',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Ancient+Hero+of+Zamor',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ancient-hero-of-zamor-weeping-evergaol-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Miranda the Blighted Bloom',
            fr: 'Fleur de Miranda',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165743',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Miranda+the+Blighted+Bloom',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/miranda-the-blighted-bloom-field-boss-elden-ring-wiki-guide-300px.jpg',
        },
        {
          names: {
            en: 'Deathbird',
            fr: 'Rapace funeste',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166054',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Deathbird',
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/death-bird-weeping-peninsula.jpg',
        },
        {
          names: {
            en: 'Leonine Misbegotten',
            fr: 'Chimère léonine',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164812',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Leonine+Misbegotten',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/leonine_misbegotten_bosses_elden_ring_wiki_600px.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Siofra River (Down)',
        fr: 'La Siofra (Bas)',
      },
      bosses: [
        {
          names: {
            en: 'Ancestor Spirit',
            fr: 'Esprit ancestral',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167775',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ancestor+Spirit',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ancestor_spirit1-min.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Liurnia of the Lakes (South)',
        fr: 'Liurnia (Sud)',
      },
      bosses: [
        {
          names: {
            en: 'Cleanrot Knight',
            fr: 'Chevalier de la Noble putréfaction',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166386',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Cleanrot+Knight',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/cleanrot-knight-6-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Erdtree Burial Watchdog',
            fr: "Veilleur de l'Arbre-Monde",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168517',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Erdtree+Burial+Watchdog',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree-burial-watchdog-2-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: "Night's Cavalry",
            fr: 'Cavalier crépusculaire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166181',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nights-cavalry-4-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Tibia Mariner',
            fr: 'Nocher diaphane',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166619',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Tibia+Mariner',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/tibia-mariner-liurnia.jpg',
        },
        {
          names: {
            en: 'Bloodhound Knight',
            fr: 'Chevalier-limier',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168523',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Bloodhound+Knight',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodhunt-knight-2-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Adan, Thief of Fire',
            fr: 'Adan le Voleur du Feu',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166505',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Adan,+Thief+of+Fire',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/adan-thief-of-fire-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Deathbird',
            fr: 'Rapace funeste',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165597',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Deathbird',
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/deathbird-2-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Omenkiller',
            fr: 'Tueur de Réprouvés',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166426',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Omenkiller',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/omenkiller-3-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Erdtree Avatar',
            fr: "Avatar de l'Arbre-Monde",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165594',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdtree+Avatar',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree-avatar-2-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Spiritcaller Snail',
            fr: 'Escargot mande-spectre',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166749',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Spirit-caller+Snail',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/spirit-caller-snail-2-hq-enemy-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Bols, Carian Knight',
            fr: 'Bols, chevalier de Caria',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167325',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Bols,+Carian+Knight',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bols-carian-knight-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Glintstone Dragon Smarag',
            fr: "Smarag, dragon de pierre d'éclat",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165267',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Glintstone+Dragon+Smarag',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/glintstone-dragon-smarag-2-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Crystalian (Spear) & Crystalian (Staff)',
            fr: 'Lancier cristalien & Sorcier cristalien',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166455',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Crystalians',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crystallian-6-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Death Rite Bird',
            fr: 'Volatile funéraire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166501',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Death+Rite+Bird',
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/death-rite-bird-3-hq-elden-ring-wiki-guide.jpg?v=1664766957687',
        },
        {
          names: {
            en: 'Red Wolf of Radagon',
            fr: 'Loup cramoisi de Radagon',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165697',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Red+Wolf+of+Radagon',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/red_wolf_of_radagon_1_bosses_elden_ring_wiki_600px.jpg',
        },
        {
          names: {
            en: 'Rennala, Queen of the Full Moon',
            fr: 'Rennala, reine de la pleine lune',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164430',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Rennala,+Queen+of+the+Full+Moon',
          remembrance: {
            names: {
              en: 'Remembrance of the Full Moon Queen',
              fr: 'Souvenir de la reine de la pleine lune',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_full_moon_queen_elden_ring_wiki_guide_200px.png',
          },
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rennala_queen_of_the_full_moon_bosses_elden_ring_wiki_600px.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Ainsel River',
        fr: "L'Ainsel",
      },
      bosses: [
        {
          names: {
            en: 'Dragonkin Soldier of Nokstella',
            fr: 'Soldat draconide de Nokstella',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167625',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Dragonkin+Soldier+of+Nokstella',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragonkin-soldier-nokstella-2-hq-elden-ring-wiki-guide.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Liurnia of the Lakes (North)',
        fr: 'Liurnia (Nord)',
      },
      bosses: [
        {
          names: {
            en: 'Crystalian',
            fr: 'Cristalien',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166381',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Crystalians',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crystallian-4-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Bell Bearing Hunter',
            fr: 'Chasseur de perles cinéraires',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165744',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Bell+Bearing+Hunter',
          categories: {
            inNight: true,
            needBell: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bell-bearing-hunter-elden-ring.jpg',
        },
        {
          names: {
            en: 'Cemetery Shade',
            fr: 'Ombre du cimetière',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166484',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Cemetery+Shade',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/cemetary-shade-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Black Knife Assassin',
            fr: 'Assassin des Couteaux noirs',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166482',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Knife+Assassin',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/black-knife-assassin-black-knife-catacombs-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Erdtree Avatar',
            fr: "Avatar de l'Arbre-Monde",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165595',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdtree+Avatar',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree-avatar-3-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: "Night's Cavalry",
            fr: 'Cavalier crépusculaire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166645',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nights-cavalry-2-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Royal Revenant',
            fr: 'Spectre royal',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166772',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Royal+Revenant',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/royal-revenant-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Royal Knight Loretta',
            fr: 'Loretta, chevaleresse royale',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165490',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Royal+Knight+Loretta',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/royal_knight_loretta_bosses_elden_ring_wiki_guide.jpg',
        },
        {
          names: {
            en: 'Onyx Lord',
            fr: "Seigneur d'onyx",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166766',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Onyx+Lord',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/onyx-lord-1-hq-elden-ring-wiki-guide.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Caelid',
        fr: 'Caelid',
      },
      bosses: [
        {
          names: {
            en: 'Putrid Avatar',
            fr: 'Avatar putride',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166512',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Putrid+Avatar',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/putrid-avatar-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Erdtree Burial Watchdog (Scepter) & Erdtree Burial Watchdog (Sword)',
            fr: "Veilleur sorcier de l'Arbre-Monde & Veilleur épéiste de l'Arbre-Monde",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166671',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Erdtree+Burial+Watchdog',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/burial_watchdog_bosses_elden_ring_wiki_600px.jpg',
        },
        {
          names: {
            en: 'Mad Pumpkin Head (Hammer) & Mad Pumpkin Head (Flail)',
            fr: "Tête de citrouille démente au marteau & Tête de citrouille démente au fléau d'armes",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166738',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Mad+Pumpkin+Head',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/boss-mad-pumpkin-heads-01-elden-ring-wiki-600px.jpg',
        },
        {
          names: {
            en: 'Magma Wyrm',
            fr: 'Dragon du magma',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167222',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Magma+Wyrm',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/magma_wyrm_bosses_elden_ring_wiki_guide.jpg',
        },
        {
          names: {
            en: 'Cleanrot Knight (Sickle) & Cleanrot Knight (Spear)',
            fr: 'Chevalier faucheur de la Noble putréfaction & Chevalier lancier de la Noble putréfaction',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168213',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Cleanrot+Knight',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/cleanrot-knight-5-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Frenzied Duelist',
            fr: 'Duelliste frénétique',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168033',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Frenzied+Duelist',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/frenzied-duelist-axe-elden-ring-wiki-guide-300px.jpg',
        },
        {
          names: {
            en: 'Decaying Ekzykes',
            fr: 'Ekzykes le Putréfié',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165933',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Decaying+Ekzykes',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/decaying_ekzykes_bosses_elden_ring_wiki_guide.jpg',
        },
        {
          names: {
            en: "Night's Cavalry",
            fr: 'Cavalier crépusculaire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166477',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nights-cavalry-6-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Cemetery Shade',
            fr: 'Ombre du cimetière',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168518',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Cemetery+Shade',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/cemetery_shade_bosses_elden_ring_wiki_600px.jpg',
        },
        {
          names: {
            en: 'Crucible Knight & Misbegotten Warrior',
            fr: 'Chevalier du Creuset & Chimère léonine',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166176',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Crucible+Knight+&+Misbegotten+Warrior',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crucible-knight-and-misbegotten-warrior-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Death Rite Bird',
            fr: 'Volatile funéraire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167019',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Death+Rite+Bird',
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/death-rite-bird-4-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: "Commander O'Neil",
            fr: "Commandant O'Neil",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166073',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Commander+O'Neil",
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/commander-o-neil-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Fallingstar Beast',
            fr: 'Créature stellaire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167582',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Fallingstar+Beast',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fallingstar-beast-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Nox Swordstress & Nox Monk',
            fr: 'Épéiste nokrienne & Moine nokrien',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166499',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Nox+Swordstress+&+Nox+Priest',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nox-swordstress-nox-monk_-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Starscourge Radahn',
            fr: 'Radahn le Fléau des astres',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165444',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Starscourge+Radahn',
          remembrance: {
            names: {
              en: 'Remembrance of the Starscourge',
              fr: 'Souvenir du Fléau des astres',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_starscourge_elden_ring_wiki_guide_200px.png',
          },
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/radahn-2-hq-enemy-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Putrid Tree Spirit',
            fr: "Esprit d'arbre putride",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167378',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Putrid+Tree+Spirit',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/putrid-tree-spirit-boss-elden-ring-wiki-guide-300px-min.jpeg',
        },
      ],
    },
    {
      names: {
        en: "Greyoll's Dragonbarrow",
        fr: 'Tertre draconique de Greyoll',
      },
      bosses: [
        {
          names: {
            en: 'Putrid Crystalian (Staff), Putrid Crystalian (Ringblade) & Putrid Crystalian (Spear)',
            fr: 'Sorcier cristalien putride, Danseur cristalien putride & Lancier cristalien putride',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167921',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Putrid+Crystalians',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/putrid-crystallian-7-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Battlemage Hugues',
            fr: 'Mage de bataille Hugues',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167402',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Battlemage+Hugues',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/battlemage-hugues-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Godskin Apostle',
            fr: 'Apôtre sanctechair',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166668',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Godskin+Apostle',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godskin-apostle-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Bell Bearing Hunter',
            fr: 'Chasseur de perles cinéraires',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168044',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Bell+Bearing+Hunter',
          categories: {
            inNight: true,
            needBell: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bell-bearing-hunter-elden-ring.jpg',
        },
        {
          names: {
            en: 'Beastman of Farum Azula (Throwing Knife) & Beastman of Farum Azula (Greatsword)',
            fr: 'Homme-bête aux couteaux de Farum Azula & Homme-bête guerrier de Farum Azula',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167916',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Beastman+of+Farum+Azula',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/beastmen-duo-1.jpg',
        },
        {
          names: {
            en: 'Putrid Avatar',
            fr: 'Avatar putride',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166615',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Putrid+Avatar',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/putrid-avatar-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Flying Dragon Greyll',
            fr: 'Greyll le Dragon volant',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166013',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Flying+Dragon+Greyll',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/flying_dragon_greyll_bosses_elden_ring_wiki_guide_300px.jpg',
        },
        {
          names: {
            en: "Night's Cavalry",
            fr: 'Cavalier crépusculaire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166616',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nights-cavalry-dragonbarrow-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Black Blade Kindred',
            fr: "Adepte de la Lame d'ébène",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166006',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Blade+Kindred',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/black-blade-kindred-1-elden-ring-wiki-guide.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Siofra River (Up)',
        fr: 'La Siofra (Haut)',
      },
      bosses: [
        {
          names: {
            en: 'Mimic Tear',
            fr: 'Larme imitatrice',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168280',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Mimic+Tear',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/mimic-tear-boss-enemies-elden-ring-wiki-guide-300px.jpg',
        },
        {
          names: {
            en: 'Regal Ancestor Spirit',
            fr: 'Esprit ancestral royal',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167929',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Regal+Ancestor+Spirit',
          remembrance: {
            names: {
              en: 'Remembrance of the Regal Ancestor',
              fr: "Souvenir de l'Esprit ancestral royal",
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_regal_ancestor_elden_ring_wiki_guide_200px.png',
          },
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/regal-ancestor-spirit_map-bosses-enemies-elden-ring-wiki-guide-300px.jpg',
        },
        {
          names: {
            en: 'Dragonkin Soldier',
            fr: 'Soldat draconide',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167928',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Dragonkin+Soldier',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragonkin-soldier-boss-enemies-elden-ring-wiki-guide-300px.jpg',
        },
        {
          names: {
            en: 'Valiant Gargoyle (Twinblade) & Valiant Gargoyle',
            fr: 'Gargouille vaillante à la double lame & Gargouille vaillante',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168404',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Valiant+Gargoyle',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyle-2-elden-ring-wiki-guide.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Deeproot Depths',
        fr: 'Profondeurs de Fonderacine',
      },
      bosses: [
        {
          names: {
            en: "3x Fia's Champions, Sorcerer Rogier & Lionel the Lionhearted",
            fr: '3x Champion de Fia, Rogier le Sorcier & Lionel Cœur-de-Lion',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168424',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Fia's+champions",
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fias-champion-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Lichdragon Fortissax',
            fr: 'Fortissax la Liche draconique',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168158',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Lichdragon+Fortissax',
          remembrance: {
            names: {
              en: 'Remembrance of the Lichdragon',
              fr: 'Souvenir de la Liche draconique',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_lichdragon_elden_ring_wiki_guide_200px.png',
          },
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lichdragon-fortissax-2-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Crucible Knight Siluria',
            fr: 'Siluria du Creuset',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168281',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Crucible+Knight+Siluria',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crucible-knight-siluria-1-hq-elden-ring-wiki-guide.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Lake of Rot',
        fr: 'Lac putréfié',
      },
      bosses: [
        {
          names: {
            en: 'Dragonkin Soldier',
            fr: 'Soldat draconide',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168515',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Dragonkin+Soldier',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragonkin_soldier_bosses_elden_ring_wiki_600px.jpg',
        },
        {
          names: {
            en: 'Astel, Naturalborn of the Void',
            fr: 'Astel le Rejeton du vide',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167488',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Astel,+Naturalborn+of+the+Void',
          remembrance: {
            names: {
              en: 'Remembrance of the Naturalborn',
              fr: 'Souvenir du Rejeton',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_naturalborn_elden_ring_wiki_guide_200px.png',
          },
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/astel-naturalborn-of-the-void-1-hq-elden-ring-wiki-guide.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Liurnia of the Lakes (Plateau)',
        fr: 'Liurnia (Plateau)',
      },
      bosses: [
        {
          names: {
            en: 'Glintstone Dragon Adula',
            fr: "Adula, dragon de pierre d'éclat",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167576',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Glintstone+Dragon+Adula',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/glintstone_dragon_bosses_elden_ring_wiki_600px.jpg',
        },
        {
          names: {
            en: 'Alecto, Black Knife Ringleader',
            fr: 'Alecto, meneuse des Couteaux noirs',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=171212',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Alecto,+Black+Knife+Ringleader',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/alecto-black-knife-ringleader-1-hq-elden-ring-wiki-guide.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Altus Plateau',
        fr: 'Plateau Altus',
      },
      bosses: [
        {
          names: {
            en: 'Magma Wyrm Makar',
            fr: 'Makar le Dragon du magma',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166245',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Magma+Wyrm+Makar',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/magma-wyrm-3-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Perfumer Tricia & Misbegotten Warrior',
            fr: 'Parfumeuse Tricia & Chimère léonine',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167394',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Perfumer+Tricia',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/perfumer-tricia-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Necromancer Garris',
            fr: 'Garris le Nécromancien',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166675',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Necromancer+Garris',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/necromancer-garris-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Black Knife Assassin',
            fr: 'Assassin des Couteaux noirs',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166678',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Knife+Assassin',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/black-knife-assassin-sages-cave-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Stonedigger Troll',
            fr: 'Troll fouisseur',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168507',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Stonedigger+Troll',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/stonedigger-troll-2-hq-enemy-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Godefroy the Grafted',
            fr: 'Godefroy le Greffé',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167645',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Godefroy+the+Grafted',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godefroy-the-grafted-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: "Night's Cavalry",
            fr: 'Cavalier crépusculaire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167893',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nights-cavalry-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Demi-Human Queen Gilika',
            fr: 'Gilika, reine semi-humaine',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167566',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Demi-Human+Queen+Gilika',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/queen-gilika-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Sanguine Noble',
            fr: 'Noble sanglant',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167656',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Sanguine+Noble',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sanguine-noble-6-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Godskin Apostle',
            fr: 'Apôtre sanctechair',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166231',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Godskin+Apostle',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godskin-apostle-3-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Wormface',
            fr: 'Face de ver',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167317',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Wormface',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/wormface-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Crystalian (Spear) & Crystalian (Ringblade)',
            fr: 'Lancier cristalien & Danseur cristalien',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168080',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Crystalians',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crystallian-5-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Ancient Dragon Lansseax',
            fr: 'Lansseax le Dragon ancien',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168510',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Ancient+Dragon+Lansseax',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ancient-dragon-lansseax-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Black Knife Assassin',
            fr: 'Assassin des Couteaux noirs',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167676',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Knife+Assassin',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/black-knife-assassin-sainted-heros-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Ancient Hero of Zamor',
            fr: 'Ancien héros de Zamor',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=175115',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Ancient+Hero+of+Zamor',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ancient-hero-of-zamor-2-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Omenkiller & Miranda the Blighted Bloom',
            fr: 'Tueur de Réprouvés & Miranda la Fleur galeuse',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169017',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Omenkiller',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/miranda-and-omenkiller.jpg',
        },
        {
          names: {
            en: 'Fallingstar Beast',
            fr: 'Créature stellaire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167585',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Fallingstar+Beast',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fallingstar_beast_altus_plateau_enemies_elden_ring_wiki_300px.jpg',
        },
        {
          names: {
            en: '2x Tree Sentinel',
            fr: "2x Sentinelle de l'Arbre",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167584',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Tree+Sentinel',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/tree-sentinel-duo-2-small.jpg',
        },
      ],
    },
    {
      names: {
        en: 'The Shaded Castle',
        fr: 'Le Bastiombre',
      },
      bosses: [
        {
          names: {
            en: 'Elemer of the Briar',
            fr: 'Elemer du Roncier',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167323',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Elemer+of+the+Briar',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/elemer-of-the-briar-1-hq-elden-ring-wiki-guide.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Mt Gelmir',
        fr: 'Mont Gelmir',
      },
      bosses: [
        {
          names: {
            en: 'Abductor Virgin (Wheel) & Abductor Virgin (Swinging Sickle)',
            fr: 'Vierge ravisseuse aux rouets & Vierge ravisseuse aux faucilles',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168514',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Abductor+Virgins',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/abductor-virgins-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Tibia Mariner',
            fr: 'Nocher diaphane',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167560',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Tibia+Mariner',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/tibia-manner-enemy-3-hq-big-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Erdtree Burial Watchdog',
            fr: "Veilleur de l'Arbre-Monde",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168513',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Erdtree+Burial+Watchdog',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree-burial-watchdog-3-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: '2x Kindred of Rot',
            fr: '2x Adepte de la putréfaction',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168512',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Kindred+of+Rot',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/kindred-of-rot-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Magma Wyrm',
            fr: 'Dragon du magma',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167377',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Magma+Wyrm',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/magma-wyrm-2-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Demi-Human Queen Maggie',
            fr: 'Maggie, reine semi-humaine',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167815',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Demi-Human+Queen+Maggie',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/demi-human-queen-maggie-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Red Wolf of the Champion',
            fr: 'Loup rouge du champion',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168140',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Red+Wolf+of+the+Champion',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/red-wolf-of-radagon-3-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Demi-Human Queen Margot',
            fr: 'Margot, reine semi-humaine',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167366',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Demi-Human+Queen+Margot',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/demi-human-queen-margot-2-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Full-Grown Fallingstar Beast',
            fr: 'Créature stellaire adulte',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167365',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Full-Grown+Fallingstar+Beast',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/full-grown-fallingstar-beast-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Ulcerated Tree Spirit',
            fr: "Esprit d'arbre ulcéreux",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167812',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Ulcerated+Tree+Spirit',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/uncerated-tree-spirit-5-hq-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Godskin Noble',
            fr: 'Noble sanctechair',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168177',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Godskin+Noble',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godskin-noble-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'God-Devouring Serpent / Rykard, Lord of Blasphemy',
            fr: 'Serpent dévoreur de dieux / Rykard, seigneur du blasphème',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167571',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Rykard,+Lord+of+Blasphemy',
          remembrance: {
            names: {
              en: 'Remembrance of the Blasphemous',
              fr: 'Souvenir du seigneur du blasphème',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_blasphemous_elden_ring_wiki_guide_200px.png',
          },
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/god-devouring-serpent-1-hq-elden-ring-wiki-guide.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Capital Outskirts',
        fr: 'Faubourgs de la capitale',
      },
      bosses: [
        {
          names: {
            en: 'Onyx Lord',
            fr: "Seigneur d'onyx",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168154',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Onyx+Lord',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/onyx-lord-2-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Bell Bearing Hunter',
            fr: 'Chasseur de perles cinéraires',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169467',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Bell+Bearing+Hunter',
          categories: {
            inNight: true,
            needBell: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bell-bearing-hunter-elden-ring.jpg',
        },
        {
          names: {
            en: 'Deathbird',
            fr: 'Rapace funeste',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167182',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Deathbird',
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/deathbird-1-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Crucible Knight & Crucible Knight Ordovis',
            fr: 'Ordovis, chevalier du Creuset & Chevalier du Creuset',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167535',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Crucible+Knight+Ordovis',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crucible-knight-and-ordovis-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Grave Warden Duelist',
            fr: 'Duelliste gardien du tombeau',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167018',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Grave+Warden+Duelist',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/grave-warden-duelist-3-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Draconic Tree Sentinel',
            fr: "Sentinelle draconique de l'Arbre",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167180',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Draconic+Tree+Sentinel',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/draconic-tree-sentinel-2-hq-elden-ring-wiki-guide.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Leyndell, Royal Capital',
        fr: 'Leyndell, Capitale Royale',
      },
      bosses: [
        {
          names: {
            en: 'Esgar, Priest of Blood',
            fr: 'Esgar, prêtre du sang',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=175359',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Esgar,+Priest+of+Blood',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/esgar_priest_of_blood_bosses_elden_ring_wiki_guide.jpg',
        },
        {
          names: {
            en: 'Mohg, the Omen',
            fr: 'Mohg le Réprouvé',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168657',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Mohg,+the+Omen',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/mogh_the_omen.png',
        },
        {
          names: {
            en: 'Godfrey, First Elden Lord',
            fr: "Godfrey, premier Seigneur d'Elden",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167693',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Godfrey,+First+Elden+Lord+(Golden+Shade)',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godfrey-first-elden-lord-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Morgott, the Omen King',
            fr: 'Morgott, roi Réprouvé',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167374',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Morgott,+the+Omen+King',
          remembrance: {
            names: {
              en: 'Remembrance of the Omen King',
              fr: 'Souvenir du Roi des Réprouvés',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_omen_king_elden_ring_wiki_guide_200px.png',
          },
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/morgott-omen-king-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: '2x Fell Twin',
            fr: '2x Jumeau abominable',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167171',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Fell+Twins',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fell-twin-1-hq-elden-ring-wiki-guide.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Mountaintops of the Giants',
        fr: 'Cimes des géants',
      },
      bosses: [
        {
          names: {
            en: "Night's Cavalry",
            fr: 'Cavalier crépusculaire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168519',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nights-cavalry-forbidden-lands-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Black Blade Kindred',
            fr: "Adepte de la Lame d'ébène",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168016',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Blade+Kindred',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/black-blade-kindred-2-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Ulcerated Tree Spirit',
            fr: "Esprit d'arbre ulcéreux",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167668',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Ulcerated+Tree+Spirit',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ulcerated_tree_spirit.png',
        },
        {
          names: {
            en: 'Death Rite Bird',
            fr: 'Volatile funéraire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168010',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Death+Rite+Bird',
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/death-rite-bird-2-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Commander Niall',
            fr: 'Commandant Niall',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167290',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Commander+Niall',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/commander-niall-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Erdtree Avatar',
            fr: "Avatar de l'Arbre-Monde",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167138',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdtree+Avatar',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree-avatar-4-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Godskin Apostle, Godskin Noble & Spiritcaller Snail',
            fr: 'Apôtre sanctechair, Noble sanctechair & Escargot mande-spectre',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169802',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Spirit-caller+Snail',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/spirit-caller-snail-1-hs-enemy-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Borealis the Freezing Fog',
            fr: 'Borealis la Brume glaciale',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165642',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Borealis+the+Freezing+Fog',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/borealis-the-freezing-fog-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Roundtable Knight Vyke',
            fr: 'Vyke, chevalier de la Table ronde',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168377',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Roundtable+Knight+Vyke',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/vyke-1-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Ancient Hero of Zamor',
            fr: 'Ancien héros de Zamor',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167371',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Ancient+Hero+of+Zamor',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ancient_hero_of_zamor_enemies_elden_ring_wiki_300px.jpg',
        },
        {
          names: {
            en: 'Fire Giant',
            fr: 'Géant de feu',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167375',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Fire+Giant',
          remembrance: {
            names: {
              en: 'Remembrance of the Fire Giant',
              fr: 'Souvenir du Géant de feu',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_fire_giant_elden_ring_wiki_guide_200px.png',
          },
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fire_giant_eye.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Consecrated Snowfield',
        fr: 'Champs enneigés consacrés',
      },
      bosses: [
        {
          names: {
            en: 'Stray Mimic Tear',
            fr: 'Larme imitatrice égarée',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169799',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Stray+Mimic+Tear',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/stray-mimic-tear-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Putrid Grave Warden Duelist',
            fr: 'Duelliste putride gardien du tombeau',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168389',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Putrid+Grave+Warden+Duelist',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/putrid-grave-warden-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: "Night's Cavalry (Flail) & Night's Cavalry (Glaive)",
            fr: 'Cavalier crépusculaire au fléau & Cavalier crépusculaire au glaive',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168493',
          wikiUrl: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nights-cavalry-5-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Astel, Stars of Darkness',
            fr: 'Astel la Constellation des ténèbres',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168224',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Astel,+Stars+of+Darkness',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/astel-naturalborn-of-the-void-3-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Misbegotten Crusader',
            fr: 'Croisé chimérique',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168661',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Misbegotten+Crusader',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/misbegotten-crusader-bloom-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Great Wyrm Theodorix',
            fr: 'Theodorix le Grand ver',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168186',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Great+Wyrm+Theodorix',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/theodorix_6.jpg',
        },
        {
          names: {
            en: 'Putrid Avatar',
            fr: 'Avatar putride',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168521',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Putrid+Avatar',
          categories: {},
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/putrid-avatar-2-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Death Rite Bird',
            fr: 'Volatile funéraire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168520',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Death+Rite+Bird',
          categories: {
            inNight: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/death-rite-bird-1-hq-elden-ring-wiki-guide.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Mohgwyn Palace',
        fr: 'Palais Mohgwyn',
      },
      bosses: [
        {
          names: {
            en: 'Mohg, Lord of Blood',
            fr: 'Mohg, seigneur du sang',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168412',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Mohg,+Lord+of+Blood',
          remembrance: {
            names: {
              en: 'Remembrance of the Blood Lord',
              fr: 'Souvenir du seigneur du sang',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_blood_lord_item_elden_ring_wiki_guide_200px.png',
          },
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/mohg.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Crumbling Farum Azula',
        fr: 'Ruines de Farum Azula',
      },
      bosses: [
        {
          names: {
            en: 'Godskin Duo',
            fr: 'Duo sanctechair',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167392',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Godskin+Duo',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godskin-duo-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Dragonlord Placidusax',
            fr: 'Placidusax, seigneur draconique',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168522',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Dragonlord+Placidusax',
          remembrance: {
            names: {
              en: 'Remembrance of the Dragonlord',
              fr: 'Souvenir du Seigneur draconique',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_dragonlord_item_elden_ring_wiki_guide_200px.png',
          },
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragonlord-placidusax-boss-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Beast Clergyman / Maliketh, the Black Blade',
            fr: "Clerc bestial / Maliketh la Lame d'ébène",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=175509',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Maliketh,+the+Black+Blade',
          remembrance: {
            names: {
              en: 'Remembrance of the Black Blade',
              fr: "Souvenir de la Lame d'ébène",
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_black_blade_elden_ring_wiki_guide_200px.png',
          },
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/maliketh-the-black-blade-4k.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Leyndell, Capital of Ash',
        fr: 'Leyndell, Capitale des Cendres',
      },
      bosses: [
        {
          names: {
            en: 'Sir Gideon Ofnir, the All-Knowing',
            fr: "Sire Gideon Ofnir l'Omniscient",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=176583',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Sir+Gideon+Ofnir,+the+All-Knowing',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ofnir-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Godfrey, First Elden Lord / Hoarah Loux, Warrior',
            fr: "Godfrey, premier Seigneur d'Elden / Hoarah Loux le Guerrier",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=176808',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Godfrey,+First+Elden+Lord',
          remembrance: {
            names: {
              en: 'Remembrance of Hoarah Loux',
              fr: 'Souvenir de Hoarah Loux',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_hoarah_loux_elden_ring_wiki_guide_200px.png',
          },
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godfrey,hoarah.jpg',
        },
      ],
    },
    {
      names: {
        en: "Miquella's Haligtree",
        fr: 'Arbre-Sacré de Miquella',
      },
      bosses: [
        {
          names: {
            en: 'Loretta, Knight of the Haligtree',
            fr: "Loretta, chevaleresse de l'Arbre-Sacré",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168228',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Loretta,+Knight+of+the+Haligtree',
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/loretta-knight-of-the-haligtree-1-hq-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Malenia, Blade of Miquella / Malenia, Goddess of Rot',
            fr: 'Malenia, épée de Miquella / Malenia, déesse de la putréfaction',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167678',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Malenia+Blade+of+Miquella',
          remembrance: {
            names: {
              en: 'Remembrance of the Rot Goddess',
              fr: 'Souvenir de la déesse de la putréfaction',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_rot_goddess_elden_ring_wiki_guide_200px.png',
          },
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/malenia,-blade-of-miquella.jpg',
        },
      ],
    },
    {
      names: {
        en: 'The Erdtree',
        fr: 'Arbre-Monde',
      },
      bosses: [
        {
          names: {
            en: 'Radagon of the Golden Order / Elden Beast',
            fr: "Radagon de l'Ordre d'or / Bête d'Elden",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=176996',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Elden+Beast',
          remembrance: {
            names: {
              en: 'Elden Remembrance',
              fr: "Souvenir d'Elden",
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/elden_remembrance_elden_ring_wiki_guide_200px.png',
          },
          categories: {
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/radagon-of-the-golden-order-boss-elden-ring-wiki-guide.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Gravesite Plain',
        fr: 'Plaine sépulcrale',
      },
      bosses: [
        {
          names: {
            en: 'Blackgaol Knight',
            fr: 'Chevalier de la Geôle Solitaire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=380578',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Blackgaol+Knight',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/blackight-gaol-boss-1-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Ghostflame Dragon',
            fr: 'Dragon de flammes spectrales',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=380856',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ghostflame+Dragon',
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ghostflame-dragon-gravesite-plain-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Demi-Human Swordmaster Onze',
            fr: 'Onze, épéiste semi-humain',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=380889',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Demi-Human+Swordmaster+Onze',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/demi-human_swordmaster_onze.png',
        },
        {
          names: {
            en: 'Divine Beast Dancing Lion',
            fr: 'Lion dansant de la bête divine',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=380798',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Divine+Beast+Dancing+Lion',
          remembrance: {
            names: {
              en: 'Remembrance of the Dancing Lion',
              fr: 'Souvenir du Lion dansant',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_dancing_lion_remembrances_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
          },
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/divine_beast_dancing_lion_bosses_elden_ring_wiki_1200px.png',
        },
        {
          names: {
            en: 'Death Knight',
            fr: 'Chevalier de la Mort',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381925',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Death+Knight',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/death-knight-fog-rift-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Chief Bloodfiend',
            fr: 'Chef des démons sanglants',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381006',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Chief+Bloodfiend',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/chief-bloodfiend-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Ancient Dragon-Man',
            fr: 'Homme-dragon ancien',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381039',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ancient+Dragon-Man',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon-weeb.png',
        },
      ],
    },
    {
      names: {
        en: 'Castle Ensis',
        fr: "Château d'Ensis",
      },
      bosses: [
        {
          names: {
            en: 'Rellana, Twin Moon Knight',
            fr: 'Rellana, chevaleresse des Lunes jumelles',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=380245',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Rellana,+Twin+Moon+Knight',
          remembrance: {
            names: {
              en: 'Remembrance of the Twin Moon Knight',
              fr: 'Souvenir de la Chev. des Lunes jum.',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_twin_moon_knight_remembrances_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
          },
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rellana_twin_moon_knight2.png',
        },
      ],
    },
    {
      names: {
        en: 'Scadu Altus',
        fr: 'Altus Occulte',
      },
      bosses: [
        {
          names: {
            en: 'Black Knight Garrew',
            fr: 'Garrew, chevalier Noir',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381539',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Knight+Garrew',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/garrew.png',
        },
        {
          names: {
            en: 'Ralva the Great Red Bear',
            fr: 'Ralva, grand ours écarlate',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=380320',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Ralva+the+Great+Red+Bear',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ralva.png',
        },
        {
          names: {
            en: 'Dryleaf Dane',
            fr: 'Dane Mortefeuille',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=384468',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Dryleaf+Dane+(Boss)',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dryleaf.png',
        },
        {
          names: {
            en: 'Ghostflame Dragon',
            fr: 'Dragon de flammes spectrales',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=380345',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ghostflame+Dragon',
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ghostflame-dragon-moorth-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Black Knight Edredd',
            fr: 'Edredd, chevalier Noir',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381872',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Knight+Edredd',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/edreed.png',
        },
        {
          names: {
            en: 'Curseblade Labirith',
            fr: "Labirith l'Exécrable",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381240',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Curseblade+Labirith',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/curseblade-labirith-elden-ring-wiki.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Rauh Base',
        fr: 'Base de Rauh',
      },
      bosses: [
        {
          names: {
            en: 'Red Bear',
            fr: 'Ours écarlate',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381977',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Red+Bear',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/mr-teddy.png',
        },
        {
          names: {
            en: 'Rugalea the Great Red Bear',
            fr: 'Rugalea, grand ours écarlate',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381980',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Rugalea+the+Great+Red+Bear',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rugalea-the-great-red-bear-boss-elden-ring-wiki-guide.jpg',
        },
        {
          names: {
            en: 'Death Knight',
            fr: 'Chevalier de la Mort',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381984',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Death+Knight',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/death-knight-scorpion-elden-ring-wiki.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Cerulean Coast',
        fr: 'Côte céruléenne',
      },
      bosses: [
        {
          names: {
            en: 'Demi-Human Queen Marigga',
            fr: 'Marigga, reine semi-humaine',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381919',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Demi-Human+Queen+Marigga',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/demi-queen.png',
        },
        {
          names: {
            en: 'Ghostflame Dragon',
            fr: 'Dragon de flammes spectrales',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382236',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Ghostflame+Dragon',
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ghostflame-dragon-cerulean-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Dancer of Ranah',
            fr: 'Danseuse de Ranah',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381922',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Dancer+of+Ranah',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dancer.png',
        },
        {
          names: {
            en: 'Putrescent Knight',
            fr: 'Chevalier putride',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381961',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Putrescent+Knight',
          remembrance: {
            names: {
              en: 'Remembrance of Putrescence',
              fr: 'Souvenir de putrescence',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_putrescence_remembrances_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
          },
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/putrescent-knight-1-elden-ring-wiki.jpg',
        },
      ],
    },
    {
      names: {
        en: "Charo's Hidden Grave",
        fr: 'Tombeau secret de Charo',
      },
      bosses: [
        {
          names: {
            en: 'Death Rite Bird',
            fr: 'Volatile funéraire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381939',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Death+Rite+Bird',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/death-rite-bird-charos-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Lamenter',
            fr: 'Larmoyeur',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381950',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Lamenter',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lamenter.png',
        },
      ],
    },
    {
      names: {
        en: 'Shadow Keep',
        fr: 'Château noir',
      },
      bosses: [
        {
          names: {
            en: 'Golden Hippopotamus',
            fr: 'Hippopotame doré',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381323',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Golden+Hippopotamus',
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden-hippopotamus-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Scadutree Avatar',
            fr: "Avatar de l'Arbre-Occulte",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381991',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Scadutree+Avatar',
          remembrance: {
            names: {
              en: 'Remembrance of the Shadow Sunflower',
              fr: "Souvenir de l'ombreflore",
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_shadow_sunflower_remembrances_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
          },
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/scadutree_avatar_bosses_elden_ring_wiki_1200px.png',
        },
        {
          names: {
            en: 'Commander Gaius',
            fr: 'Commandant Gaïus',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381989',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Commander+Gaius',
          remembrance: {
            names: {
              en: 'Remembrance of the Wild Boar Rider',
              fr: 'Souvenir du Chevaucheur de sanglier',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_wild_boar_rider_remembrances_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
          },
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/commander_gaius_bosses_elden_ring_wiki_1200px.png',
        },
        {
          names: {
            en: 'Messmer the Impaler / Base Serpent Messmer',
            fr: "Messmer l'Empaleur / Messmer, serpent maléfique",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381741',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Messmer+the+Impaler',
          remembrance: {
            names: {
              en: 'Remembrance of the Impaler',
              fr: "Souvenir de l'Empaleur",
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_impaler_remembrances_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
          },
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/messmer_menacing_look.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Hinterlands',
        fr: 'Arrière-pays',
      },
      bosses: [
        {
          names: {
            en: 'Tree Sentinel',
            fr: "Sentinelle de l'Arbre",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381995',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Tree+Sentinel',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/tree-sentinel-boss-sote-er-wiki-guide-300px.jpg',
        },
        {
          names: {
            en: 'Tree Sentinel',
            fr: "Sentinelle de l'Arbre",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381997',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Tree+Sentinel',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/tree-sentinel-boss-sote-er-wiki-guide-300px.jpg',
        },
        {
          names: {
            en: 'Fallingstar Beast',
            fr: 'Créature stellaire',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382000',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Fallingstar+Beast',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fallingstar-beast-boss-sote-er-wiki-guide-300px.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Cathedral of Manus Metyr',
        fr: 'Cathédrale de Manus Metyr',
      },
      bosses: [
        {
          names: {
            en: 'Metyr, Mother of Fingers',
            fr: 'Metyr, mère des Doigts',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382002',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Metyr,+Mother+of+Fingers',
          remembrance: {
            names: {
              en: 'Remembrance of the Mother of Fingers',
              fr: 'Souvenir de la Mère des Doigts',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_mother_of_fingers_remembrances_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
          },
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/metyr_mother_of_fingers_bosses_elden_ring_wiki_1200px.png',
        },
        {
          names: {
            en: 'Count Ymir, Mother of Fingers',
            fr: 'Comte Ymir, mère des Doigts',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=386484',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Count+Ymir,+Mother+of+Fingers',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/count-ymir-mother-of-fingers-boss-elden-ring-wiki-guide.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Recluse River',
        fr: 'Rivière des reclus',
      },
      bosses: [
        {
          names: {
            en: 'Rakshasa',
            fr: 'Rakshasa',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382014',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Rakshasa',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rakshasa.png',
        },
        {
          names: {
            en: 'Jori, Elder Inquisitor',
            fr: 'Jori, inquisiteur en chef',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382021',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Jori,+Elder+Inquisitor',
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/jori-elder-inquisitor-elden-ring-wiki.jpg',
        },
      ],
    },
    {
      names: {
        en: 'Abbysal Woods',
        fr: 'Bois abyssaux',
      },
      bosses: [
        {
          names: {
            en: 'Midra, Lord of Frenzied Flame',
            fr: 'Midra, seigneur de la Flamme exaltée',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382190',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Midra+Lord+of+Frenzied+Flame',
          remembrance: {
            names: {
              en: 'Remembrance of the Lord of Frenzied Flame',
              fr: 'Souvenir du Seigneur de la Flamme exaltée',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_lord_of_frenzied_flame_remembrances_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
          },
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/midra_lord_of_frenzied_flame_bosses_elden_ring_wiki_1200px.png',
        },
      ],
    },
    {
      names: {
        en: 'Jagged Peak',
        fr: 'Pic déchiqueté',
      },
      bosses: [
        {
          names: {
            en: 'Jagged Peak Drake',
            fr: 'Dragon du Pic déchiqueté',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381932',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Jagged+Peak+Drake',
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/jagged-peak-drake-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Jagged Peak Drake',
            fr: 'Dragon du Pic déchiqueté',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381965',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Jagged+Peak+Drake',
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/jagged-peak-drake-duo-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Ancient Dragon Senessax',
            fr: 'Senessax, Dragon ancien',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381968',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Ancient+Dragon+Senessax',
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/senessax.png',
        },
        {
          names: {
            en: 'Bayle the Dread',
            fr: "Bayle l'Effroyable",
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381971',
          wikiUrl: 'https://eldenring.wiki.fextralife.com/Bayle+the+Dread',
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bayle_the_dread_bosses_elden_ring_wiki_1200px.png',
        },
      ],
    },
    {
      names: {
        en: 'Ancient Ruins of Rauh',
        fr: 'Ruines antiques de Rauh',
      },
      bosses: [
        {
          names: {
            en: 'Divine Beast Dancing Lion',
            fr: 'Lion dansant de la bête divine',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382038',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Divine+Beast+Dancing+Lion',
          categories: {
            inDlc: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dancing-lion-rauh-elden-ring-wiki.jpg',
        },
        {
          names: {
            en: 'Romina, Saint of the Bud',
            fr: 'Romina, sainte du bourgeon',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382040',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Romina,+Saint+of+the+Bud',
          remembrance: {
            names: {
              en: 'Remembrance of the Saint of the Bud',
              fr: 'Souvenir de la Sainte du bourgeon',
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_saint_of_the_bud_remembrances_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
          },
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/romina_saint_of_the_bud_bosses_elden_ring_wiki_1200px.png',
        },
      ],
    },
    {
      names: {
        en: 'Enir-Ilim',
        fr: 'Enir-Ilim',
      },
      bosses: [
        {
          names: {
            en: 'Promised Consort Radahn / Radahn, Consort of Miquella',
            fr: 'Radahn, futur consort / Radahn, consort de Miquella',
          },
          locationUrl:
            'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382044',
          wikiUrl:
            'https://eldenring.wiki.fextralife.com/Promised+Consort+Radahn',
          remembrance: {
            names: {
              en: 'Remembrance of a God and a Lord',
              fr: "Souvenir d'un dieu et d'un seigneur",
            },
            imageUrl:
              'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance-of-a-god-and-lord-elden-ring-wiki-guide.png',
          },
          categories: {
            inDlc: true,
            major: true,
          },
          imageUrl:
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/radahn_consort_of_miquella_bosses_elden_ring_wiki_1200px.png',
        },
      ],
    },
  ],
};
