type TWeapons = {
  type: {
    name: {
      en: string;
      fr: string;
    };
    weapons: {
      name: {
        en: string;
        fr: string;
      };
      locationUrl: string;
      wikiUrl: string;
      imageUrl: string;
      inDlc?: boolean;
    }[];
  }[];
};

export const weapons = [
  {
    type: 'weapon',
    name: "Fire Knight's Shortsword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fire_knights_shortsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Fire+Knight's+Shortsword",
    locationUrl: '',
    sortableType: 'Daggers',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Main-gauche',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/main-gauche_dagger_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Main-gauche',
    locationUrl: '',
    sortableType: 'Daggers',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Dagger',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dagger_dagger_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Dagger',
    locationUrl: '',
    sortableType: 'Daggers',
  },
  {
    type: 'weapon',
    name: 'Parrying Dagger',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/parrying_dagger_dagger_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Parrying+Dagger',
    locationUrl: '',
    sortableType: 'Daggers',
  },
  {
    type: 'weapon',
    name: 'Misericorde',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/misericorde_dagger_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Misericorde',
    locationUrl: '',
    sortableType: 'Daggers',
  },
  {
    type: 'weapon',
    name: 'Great Knife',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_knife_dagger_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Great+Knife',
    locationUrl: '',
    sortableType: 'Daggers',
  },
  {
    type: 'weapon',
    name: 'Bloodstained Dagger',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodstained_dagger_dagger_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Bloodstained+Dagger',
    locationUrl: '',
    sortableType: 'Daggers',
  },
  {
    type: 'weapon',
    name: 'Erdsteel Dagger',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdsteel_dagger_dagger_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdsteel+Dagger',
    locationUrl: '',
    sortableType: 'Daggers',
  },
  {
    type: 'weapon',
    name: 'Wakizashi',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/wakizashi_dagger_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Wakizashi',
    locationUrl: '',
    sortableType: 'Daggers',
  },
  {
    type: 'weapon',
    name: "Celebrant's Sickle",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/celebrants-sickle_dagger_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Celebrant's+Sickle",
    locationUrl: '',
    sortableType: 'Daggers',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Ivory Sickle',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ivory_sickle_dagger_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Ivory+Sickle',
    locationUrl: '',
    sortableType: 'Daggers',
  },
  {
    type: 'weapon',
    name: 'Crystal Knife',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crystal_knife_dagger_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Crystal+Knife',
    locationUrl: '',
    sortableType: 'Daggers',
  },
  {
    type: 'weapon',
    name: "Scorpion's Stinger",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/scorpions_stinger_dagger_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Scorpion's+Stinger",
    locationUrl: '',
    sortableType: 'Daggers',
  },
  {
    type: 'weapon',
    name: 'Cinquedea',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/cinquedea_dagger_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Cinquedea',
    locationUrl: '',
    sortableType: 'Daggers',
  },
  {
    type: 'weapon',
    name: 'Glintstone Kris',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/glintstone_kris_dagger_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Glintstone+Kris',
    locationUrl: '',
    sortableType: 'Daggers',
  },
  {
    type: 'weapon',
    name: 'Reduvia',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/reduvia_dagger_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Reduvia',
    locationUrl: '',
    sortableType: 'Daggers',
  },
  {
    type: 'weapon',
    name: 'Blade of Calling',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/blade_of_calling_dagger_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Blade+of+Calling',
    locationUrl: '',
    sortableType: 'Daggers',
  },
  {
    type: 'weapon',
    name: 'Black Knife',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_knife_dagger_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Knife',
    locationUrl: '',
    sortableType: 'Daggers',
  },
  {
    type: 'weapon',
    name: 'Velvet Sword of St Trina',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/velvet_sword_of_st_trina_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Velvet+Sword+of+St+Trina',
    locationUrl: '',
    sortableType: 'Straight Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Stone-Sheathed Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/stone-sheathed_sword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Stone-Sheathed+Sword',
    locationUrl: '',
    sortableType: 'Straight Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Sword of Light',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_light_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Sword+of+Light',
    locationUrl: '',
    sortableType: 'Straight Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Sword of Darkness',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_darkness_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Sword+of+Darkness',
    locationUrl: '',
    sortableType: 'Straight Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Short Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/short_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Short+Sword',
    locationUrl: '',
    sortableType: 'Straight Swords',
  },
  {
    type: 'weapon',
    name: 'Longsword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/longsword_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Longsword',
    locationUrl: '',
    sortableType: 'Straight Swords',
  },
  {
    type: 'weapon',
    name: 'Broadsword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/broadsword_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Broadsword',
    locationUrl: '',
    sortableType: 'Straight Swords',
  },
  {
    type: 'weapon',
    name: 'Weathered Straight Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/weathered_straight_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Weathered+Straight+Sword',
    locationUrl: '',
    sortableType: 'Straight Swords',
  },
  {
    type: 'weapon',
    name: "Lordsworn's Straight Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lordsworns_straight_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Lordsworn's+Straight+Sword",
    locationUrl: '',
    sortableType: 'Straight Swords',
  },
  {
    type: 'weapon',
    name: "Noble's Slender Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nobles_slender_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Noble's+Slender+Sword",
    locationUrl: '',
    sortableType: 'Straight Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Cane Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/cane_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Cane+Sword',
    locationUrl: '',
    sortableType: 'Straight Swords',
  },
  {
    type: 'weapon',
    name: "Warhawk's Talon",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/warhawks_talon_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Warhawk's+Talon",
    locationUrl: '',
    sortableType: 'Straight Swords',
  },
  {
    type: 'weapon',
    name: 'Lazuli Glintstone Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lazuli_glintstone_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Lazuli+Glintstone+Sword',
    locationUrl: '',
    sortableType: 'Straight Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Carian Knight's Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_knights_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Carian+Knight's+Sword",
    locationUrl: '',
    sortableType: 'Straight Swords',
  },
  {
    type: 'weapon',
    name: 'Crystal Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crystal_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Crystal+Sword',
    locationUrl: '',
    sortableType: 'Straight Swords',
  },
  {
    type: 'weapon',
    name: 'Rotten Crystal Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_crystal_sword_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Rotten+Crystal+Sword',
    locationUrl: '',
    sortableType: 'Straight Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Miquellan Knight's Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/miquellan_knights_sword_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Miquellan+Knight's+Sword",
    locationUrl: '',
    sortableType: 'Straight Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Ornamental Straight Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ornamental_straight_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Ornamental+Straight+Sword',
    locationUrl: '',
    sortableType: 'Straight Swords',
  },
  {
    type: 'weapon',
    name: 'Golden Epitaph',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_epitaph_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Golden+Epitaph',
    locationUrl: '',
    sortableType: 'Straight Swords',
  },
  {
    type: 'weapon',
    name: 'Sword of St Trina',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_st_trina_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Sword+of+St+Trina',
    locationUrl: '',
    sortableType: 'Straight Swords',
  },
  {
    type: 'weapon',
    name: 'Regalia of Eochaid',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/regalia_of_eochaid_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Regalia+of+Eochaid',
    locationUrl: '',
    sortableType: 'Straight Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Coded Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/coded_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Coded+Sword',
    locationUrl: '',
    sortableType: 'Straight Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Sword of Night and Flame',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_night_and_flame_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Sword+of+Night+and+Flame',
    locationUrl: '',
    sortableType: 'Straight Swords',
  },
  {
    type: 'weapon',
    name: 'Lizard Greatsword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lizard_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Lizard+Greatsword',
    locationUrl: '',
    sortableType: 'Greatswords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Greatsword of Damnation',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatsword_of_damnation_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Greatsword+of+Damnation',
    locationUrl: '',
    sortableType: 'Greatswords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Greatsword of Solitude',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatsword_of_solitude_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Greatsword+of+Solitude',
    locationUrl: '',
    sortableType: 'Greatswords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Bastard Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bastard_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Bastard+Sword',
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: 'Claymore',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/claymore_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Claymore',
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: 'Iron Greatsword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/iron_greatsword_greatswords_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Iron+Greatsword',
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: "Lordsworn's Greatsword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lordsworns_greatsword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Lordsworn's+Greatsword",
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: "Knight's Greatsword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/knights_greatsword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Knight's+Greatsword",
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: "Banished Knight's Greatsword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/banished_knights_greatsword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl:
      "https://eldenring.wiki.fextralife.com/Banished+Knight's+Greatsword",
    locationUrl: '',
    sortableType: 'Greatswords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Forked Greatsword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/forked_greatsword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Forked+Greatsword',
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: 'Flamberge',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/flamberge_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Flamberge',
    locationUrl: '',
    sortableType: 'Greatswords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Gargoyle's Greatsword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles_greatsword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Gargoyle's+Greatsword",
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: "Gargoyle's Blackblade",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles_blackblade_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Gargoyle's+Blackblade",
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: 'Inseparable Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/inseparable_sword_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Inseparable+Sword',
    locationUrl: '',
    sortableType: 'Greatswords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Sword of Milos',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_milos_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Sword+of+Milos',
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: "Marais Executioner's Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/marais_executioners_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Marais+Executioner's+Sword",
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: "Ordovis's Greatsword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ordoviss_greatsword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Ordovis's+Greatsword",
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: "Alabaster Lord's Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/alabaster_lords_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Alabaster+Lord's+Sword",
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: "Death's Poker",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/deaths_poker_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Death's+Poker",
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: "Helphen's Steeple",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/helphens_steeple.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Helphen's+Steeple",
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: 'Blasphemous Blade',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/blasphemous_blade_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Blasphemous+Blade',
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: 'Golden Order Greatsword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_order_greatsword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Golden+Order+Greatsword',
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: 'Dark Moon Greatsword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dark_moon_greatsword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Dark+Moon+Greatsword',
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: 'Sacred Relic Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sacred_relic_sword.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Sacred+Relic+Sword',
    locationUrl: '',
    sortableType: 'Greatswords',
  },
  {
    type: 'weapon',
    name: "Fire Knight's Greatsword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fire_knights_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Fire+Knight's+Greatsword",
    locationUrl: '',
    sortableType: 'Colossal Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Ancient Meteoric Ore Greatsword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ancient_meteoric_ore_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl:
      'https://eldenring.wiki.fextralife.com/Ancient+Meteoric+Ore+Greatsword',
    locationUrl: '',
    sortableType: 'Colossal Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Greatsword of Radahn (Lord)',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatsword_of_radahn_%28lord%29_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl:
      'https://eldenring.wiki.fextralife.com/Greatsword+of+Radahn+(Lord)',
    locationUrl: '',
    sortableType: 'Colossal Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Moonrithyll's Knight Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/troll_knights_sword_colossal_swords_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Moonrithyll's+Knight+Sword",
    locationUrl: '',
    sortableType: 'Colossal Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Greatsword of Radahn (Light)',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatsword_of_radahn_%28light%29_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl:
      'https://eldenring.wiki.fextralife.com/Greatsword+of+Radahn+(Light)',
    locationUrl: '',
    sortableType: 'Colossal Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Zweihander',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/zweihander_colossal_swords_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Zweihander',
    locationUrl: '',
    sortableType: 'Colossal Swords',
  },
  {
    type: 'weapon',
    name: 'Greatsword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatsword_colossal_swords_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Greatsword',
    locationUrl: '',
    sortableType: 'Colossal Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Watchdog's Greatsword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/watchdogs_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Watchdog's+Greatsword",
    locationUrl: '',
    sortableType: 'Colossal Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Troll's Golden Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/trolls_golden_sword_colossal_swords_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Troll's+Golden+Sword",
    locationUrl: '',
    sortableType: 'Colossal Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Troll Knight's Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/troll_knights_sword_colossal_swords_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Troll+Knight's+Sword",
    locationUrl: '',
    sortableType: 'Colossal Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Royal Greatsword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/royal_greatsword__colossal_swords_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Royal+Greatsword',
    locationUrl: '',
    sortableType: 'Colossal Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Grafted Blade Greatsword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/grafted_blade_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Grafted+Blade+Greatsword',
    locationUrl: '',
    sortableType: 'Colossal Swords',
  },
  {
    type: 'weapon',
    name: 'Ruins Greatsword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ruins_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Ruins+Greatsword',
    locationUrl: '',
    sortableType: 'Colossal Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Starscourge Greatsword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/starscourge_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Starscourge+Greatsword',
    locationUrl: '',
    sortableType: 'Colossal Swords',
  },
  {
    type: 'weapon',
    name: "Godslayer's Greatsword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godslayers_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Godslayer's+Greatsword",
    locationUrl: '',
    sortableType: 'Colossal Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Maliketh's Black Blade",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Maliketh's+Black+Blade",
    locationUrl: '',
    sortableType: 'Colossal Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Carian Sorcery Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_sorcery_sword_thrusting_sword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Carian+Sorcery+Sword',
    locationUrl: '',
    sortableType: 'Thrusting Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Rapier',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rapier_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Rapier',
    locationUrl: '',
    sortableType: 'Thrusting Swords',
  },
  {
    type: 'weapon',
    name: 'Estoc',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/estoc_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Estoc',
    locationUrl: '',
    sortableType: 'Thrusting Swords',
  },
  {
    type: 'weapon',
    name: "Noble's Estoc",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nobles_estoc_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Noble's+Estoc",
    locationUrl: '',
    sortableType: 'Thrusting Swords',
  },
  {
    type: 'weapon',
    name: "Cleanrot Knight's Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/cleanrot_knights_sword_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Cleanrot+Knight's+Sword",
    locationUrl: '',
    sortableType: 'Thrusting Swords',
  },
  {
    type: 'weapon',
    name: "Rogier's Rapier",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rogiers_rapier_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Rogier's+Rapier",
    locationUrl: '',
    sortableType: 'Thrusting Swords',
  },
  {
    type: 'weapon',
    name: 'Antspur Rapier',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/antspur_rapier_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Antspur+Rapier',
    locationUrl: '',
    sortableType: 'Thrusting Swords',
  },
  {
    type: 'weapon',
    name: 'Frozen Needle',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/frozen_needle_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Frozen+Needle',
    locationUrl: '',
    sortableType: 'Thrusting Swords',
  },
  {
    type: 'weapon',
    name: 'Sword Lance',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_lance_heavy_thrusting_sword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Sword+Lance',
    locationUrl: '',
    sortableType: 'Heavy Thrusting Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Queelign's Greatsword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/queeligns_greatsword_heavy_thrusting_sword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Queelign's+Greatsword",
    locationUrl: '',
    sortableType: 'Heavy Thrusting Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Great Epee',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_epee_heavy_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Great+Epee',
    locationUrl: '',
    sortableType: 'Heavy Thrusting Swords',
  },
  {
    type: 'weapon',
    name: 'Godskin Stitcher',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godskin_stitcher_heavy_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Godskin+Stitcher',
    locationUrl: '',
    sortableType: 'Heavy Thrusting Swords',
  },
  {
    type: 'weapon',
    name: 'Bloody Helice',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloody_helice_heavy_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Bloody+Helice',
    locationUrl: '',
    sortableType: 'Heavy Thrusting Swords',
  },
  {
    type: 'weapon',
    name: "Dragon King's Cragblade",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon_kings_cragblade_heavy_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Dragon+King's+Cragblade",
    locationUrl: '',
    sortableType: 'Heavy Thrusting Swords',
  },
  {
    type: 'weapon',
    name: 'Spirit Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/spirit_sword_1_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Spirit+Sword',
    locationUrl: '',
    sortableType: 'Curved Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Falx',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/falx_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Falx',
    locationUrl: '',
    sortableType: 'Curved Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Dancing Blade of Ranah',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dancing_blade_of_ranah_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Dancing+Blade+of+Ranah',
    locationUrl: '',
    sortableType: 'Curved Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Horned Warrior's Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/horned_warriors_sword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Horned+Warrior's+Sword",
    locationUrl: '',
    sortableType: 'Curved Swords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Scimitar',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/scimitar_curved_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Scimitar',
    locationUrl: '',
    sortableType: 'Curved Swords',
  },
  {
    type: 'weapon',
    name: 'Falchion',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/falchion_curved_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Falchion',
    locationUrl: '',
    sortableType: 'Curved Swords',
  },
  {
    type: 'weapon',
    name: 'Shamshir',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/shamshir_curved_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Shamshir',
    locationUrl: '',
    sortableType: 'Curved Swords',
  },
  {
    type: 'weapon',
    name: 'Grossmesser',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/grossmesser_curved_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Grossmesser',
    locationUrl: '',
    sortableType: 'Curved Swords',
  },
  {
    type: 'weapon',
    name: "Bandit's Curved Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bandits_curved_sword_curved_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Bandit's+Curved+Sword",
    locationUrl: '',
    sortableType: 'Curved Swords',
  },
  {
    type: 'weapon',
    name: 'Shotel',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/shotel_curved_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Shotel',
    locationUrl: '',
    sortableType: 'Curved Swords',
  },
  {
    type: 'weapon',
    name: "Scavenger's Curved Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/scavengers_curved_sword_curved_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Scavenger's+Curved+Sword",
    locationUrl: '',
    sortableType: 'Curved Swords',
  },
  {
    type: 'weapon',
    name: 'Mantis Blade',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/mantis_blade_curved_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Mantis+Blade',
    locationUrl: '',
    sortableType: 'Curved Swords',
  },
  {
    type: 'weapon',
    name: "Beastman's Curved Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/beastmans_curved_sword_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Beastman's+Curved+Sword",
    locationUrl: '',
    sortableType: 'Curved Swords',
  },
  {
    type: 'weapon',
    name: 'Flowing Curved Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/flowing_curved_sword_curved_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Flowing+Curved+Sword',
    locationUrl: '',
    sortableType: 'Curved Swords',
  },
  {
    type: 'weapon',
    name: "Serpent-God's Curved Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/serpent-gods_curved_sword_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Serpent-God's+Curved+Sword",
    locationUrl: '',
    sortableType: 'Curved Swords',
  },
  {
    type: 'weapon',
    name: 'Magma Blade',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/magma_blade_curved_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Magma+Blade',
    locationUrl: '',
    sortableType: 'Curved Swords',
  },
  {
    type: 'weapon',
    name: 'Nox Flowing Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nox_flowing_sword_curved_sword_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Nox+Flowing+Sword',
    locationUrl: '',
    sortableType: 'Curved Swords',
  },
  {
    type: 'weapon',
    name: 'Wing of Astel',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/wing_of_astel_curved_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Wing+of+Astel',
    locationUrl: '',
    sortableType: 'Curved Swords',
  },
  {
    type: 'weapon',
    name: 'Eclipse Shotel',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/eclipse_shotel_curved_sword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Eclipse+Shotel',
    locationUrl: '',
    sortableType: 'Curved Swords',
  },
  {
    type: 'weapon',
    name: "Horned Warrior's Greatsword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/horned_warriors_greatsword_curved_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl:
      "https://eldenring.wiki.fextralife.com/Horned+Warrior's+Greatsword",
    locationUrl: '',
    sortableType: 'Curved Greatswords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Freyja's Greatsword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/freyjas_greatsword_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Freyja's+Greatsword",
    locationUrl: '',
    sortableType: 'Curved Greatswords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Dismounter',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dismounter_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Dismounter',
    locationUrl: '',
    sortableType: 'Curved Greatswords',
  },
  {
    type: 'weapon',
    name: 'Omen Cleaver',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/omen_cleaver_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Omen+Cleaver',
    locationUrl: '',
    sortableType: 'Curved Greatswords',
  },
  {
    type: 'weapon',
    name: "Monk's Flameblade",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/monks_flameblade_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Monk's+Flameblade",
    locationUrl: '',
    sortableType: 'Curved Greatswords',
  },
  {
    type: 'weapon',
    name: "Beastman's Cleaver",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/beastmans_cleaver_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Beastman's+Cleaver",
    locationUrl: '',
    sortableType: 'Curved Greatswords',
  },
  {
    type: 'weapon',
    name: "Bloodhound's Fang",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodhounds_fang_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Bloodhound's+Fang",
    locationUrl: '',
    sortableType: 'Curved Greatswords',
  },
  {
    type: 'weapon',
    name: "Onyx Lord's Greatsword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/onyx_lords_greatsword_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Onyx+Lord's+Greatsword",
    locationUrl: '',
    sortableType: 'Curved Greatswords',
  },
  {
    type: 'weapon',
    name: 'Zamor Curved Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/zamor_curved_sword_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Zamor+Curved+Sword',
    locationUrl: '',
    sortableType: 'Curved Greatswords',
  },
  {
    type: 'weapon',
    name: "Magma Wyrm's Scalesword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/magma_wyrms_scalesword_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Magma+Wyrm's+Scalesword",
    locationUrl: '',
    sortableType: 'Curved Greatswords',
  },
  {
    type: 'weapon',
    name: "Morgott's Cursed Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/morgotts_cursed_sword_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Morgott's+Cursed+Sword",
    locationUrl: '',
    sortableType: 'Curved Greatswords',
  },
  {
    type: 'weapon',
    name: 'Star-Lined Sword',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/star-lined_sword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Star-Lined+Sword',
    locationUrl: '',
    sortableType: 'Katanas',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Sword of Night',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_night_katana_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Sword+of+Night',
    locationUrl: '',
    sortableType: 'Katanas',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Uchigatana',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/uchigatana_katana_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Uchigatana',
    locationUrl: '',
    sortableType: 'Katanas',
  },
  {
    type: 'weapon',
    name: 'Nagakiba',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nagakiba_katana_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Nagakiba',
    locationUrl: '',
    sortableType: 'Katanas',
  },
  {
    type: 'weapon',
    name: 'Serpentbone Blade',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/serpentbone_blade_katana_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Serpentbone+Blade',
    locationUrl: '',
    sortableType: 'Katanas',
  },
  {
    type: 'weapon',
    name: 'Meteoric Ore Blade',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/meteoric_ore_blade_katana_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Meteoric+Ore+Blade',
    locationUrl: '',
    sortableType: 'Katanas',
  },
  {
    type: 'weapon',
    name: 'Moonveil',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/moonveil_katana_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Moonveil',
    locationUrl: '',
    sortableType: 'Katanas',
  },
  {
    type: 'weapon',
    name: 'Rivers of Blood',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rivers_of_blood_katana_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Rivers+of+Blood',
    locationUrl: '',
    sortableType: 'Katanas',
  },
  {
    type: 'weapon',
    name: 'Dragonscale Blade',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragonscale_blade_katana_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Dragonscale+Blade',
    locationUrl: '',
    sortableType: 'Katanas',
  },
  {
    type: 'weapon',
    name: 'Hand of Malenia',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/hand_of_malenia_katana_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Hand+of+Malenia',
    locationUrl: '',
    sortableType: 'Katanas',
  },
  {
    type: 'weapon',
    name: 'Black Steel Twinblade',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_steel_twinblade_twinblade_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Steel+Twinblade',
    locationUrl: '',
    sortableType: 'Twinblades',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Euporia',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/euporia_twinblade_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Euporia',
    locationUrl: '',
    sortableType: 'Twinblades',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Twinblade',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/twinblade_twinblade_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Twinblade',
    locationUrl: '',
    sortableType: 'Twinblades',
  },
  {
    type: 'weapon',
    name: 'Twinned Knight Swords',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/twinned_knight_swords_twinblade_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Twinned+Knight+Swords',
    locationUrl: '',
    sortableType: 'Twinblades',
  },
  {
    type: 'weapon',
    name: 'Godskin Peeler',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godskin_peeler_twinblade_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Godskin+Peeler',
    locationUrl: '',
    sortableType: 'Twinblades',
  },
  {
    type: 'weapon',
    name: "Gargoyle's Twinblade",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyle%27s_twinblade_weapons_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Gargoyle's+Twinblade",
    locationUrl: '',
    sortableType: 'Twinblades',
  },
  {
    type: 'weapon',
    name: "Gargoyle's Black Blades",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles_black_blades_twinblade_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Gargoyle's+Black+Blades",
    locationUrl: '',
    sortableType: 'Twinblades',
  },
  {
    type: 'weapon',
    name: "Eleonora's Poleblade",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/eleonoras_poleblade_twinblade_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Eleonora's+Poleblade",
    locationUrl: '',
    sortableType: 'Twinblades',
  },
  {
    type: 'weapon',
    name: 'Forked-Tongue Hatchet',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/forked-tongue_hatchet_unique_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_75px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Forked-Tongue+Hatchet',
    locationUrl: '',
    sortableType: 'Axes',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Smithscript Axe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/smithscript_axe_axes_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_75px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Smithscript+Axe',
    locationUrl: '',
    sortableType: 'Axes',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Messmer Soldier's Axe",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/messmer_soldiers_axe_axes_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_75px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Messmer+Soldier's+Axe",
    locationUrl: '',
    sortableType: 'Axes',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Death Knight's Twin Axes",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/death_knights_twin_axes_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Death+Knight's+Twin+Axes",
    locationUrl: '',
    sortableType: 'Axes',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Hand Axe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/hand_axe_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Hand+Axe',
    locationUrl: '',
    sortableType: 'Axes',
  },
  {
    type: 'weapon',
    name: 'Forked Hatchet',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/forked_hatchet_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Forked+Hatchet',
    locationUrl: '',
    sortableType: 'Axes',
  },
  {
    type: 'weapon',
    name: 'Battle Axe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/battle_axe_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Battle+Axe',
    locationUrl: '',
    sortableType: 'Axes',
  },
  {
    type: 'weapon',
    name: 'Warped Axe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/warped_axe_weapons_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Warped+Axe',
    locationUrl: '',
    sortableType: 'Axes',
  },
  {
    type: 'weapon',
    name: 'Jawbone Axe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/jawbone_axe_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Jawbone+Axe',
    locationUrl: '',
    sortableType: 'Axes',
  },
  {
    type: 'weapon',
    name: 'Iron Cleaver',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/iron_cleaver_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Iron+Cleaver',
    locationUrl: '',
    sortableType: 'Axes',
  },
  {
    type: 'weapon',
    name: 'Highland Axe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/highland_axe_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Highland+Axe',
    locationUrl: '',
    sortableType: 'Axes',
  },
  {
    type: 'weapon',
    name: "Celebrant's Cleaver",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/celebrants-cleaver_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Celebrant's+Cleaver",
    locationUrl: '',
    sortableType: 'Axes',
  },
  {
    type: 'weapon',
    name: 'Sacrificial Axe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sacrificial_axe_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Sacrificial+Axe',
    locationUrl: '',
    sortableType: 'Axes',
  },
  {
    type: 'weapon',
    name: 'Icerind Hatchet',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/icerind_hatchet_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Icerind+Hatchet',
    locationUrl: '',
    sortableType: 'Axes',
  },
  {
    type: 'weapon',
    name: 'Ripple Blade',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ripple_blade_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Ripple+Blade',
    locationUrl: '',
    sortableType: 'Axes',
  },
  {
    type: 'weapon',
    name: 'Stormhawk Axe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/stormhawk_axe_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Stormhawk+Axe',
    locationUrl: '',
    sortableType: 'Axes',
  },
  {
    type: 'weapon',
    name: "Rosus' Axe",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rosus_axe_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Rosus'+Axe",
    locationUrl: '',
    sortableType: 'Axes',
  },
  {
    type: 'weapon',
    name: 'Putrescence Cleaver',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/putrescence_cleaver_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Putrescence+Cleaver',
    locationUrl: '',
    sortableType: 'Greataxes',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Death Knight's Longhaft Axe",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/death_knights_longhaft_axe_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl:
      "https://eldenring.wiki.fextralife.com/Death+Knight's+Longhaft+Axe",
    locationUrl: '',
    sortableType: 'Greataxes',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Bonny Butchering Knife',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bonny_butchering_knife_greataxe_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Bonny+Butchering+Knife',
    locationUrl: '',
    sortableType: 'Greataxes',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Greataxe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/greataxe_greataxe_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Greataxe',
    locationUrl: '',
    sortableType: 'Greataxes',
  },
  {
    type: 'weapon',
    name: 'Crescent Moon Axe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crescent_moon_axe_greataxe_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Crescent+Moon+Axe',
    locationUrl: '',
    sortableType: 'Greataxes',
  },
  {
    type: 'weapon',
    name: 'Longhaft Axe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/longhaft_axe_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Longhaft+Axe',
    locationUrl: '',
    sortableType: 'Greataxes',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Executioner's Greataxe",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/executioners_greataxe_greataxe_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Executioner's+Greataxe",
    locationUrl: '',
    sortableType: 'Greataxes',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Great Omenkiller Cleaver',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_omenkiller_cleaver_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Great+Omenkiller+Cleaver',
    locationUrl: '',
    sortableType: 'Greataxes',
  },
  {
    type: 'weapon',
    name: 'Rusted Anchor',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rusted_anchor_greataxe_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Rusted+Anchor',
    locationUrl: '',
    sortableType: 'Greataxes',
  },
  {
    type: 'weapon',
    name: 'Butchering Knife',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/butchering_knife_greataxe_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Butchering+Knife',
    locationUrl: '',
    sortableType: 'Greataxes',
  },
  {
    type: 'weapon',
    name: "Gargoyle's Great Axe",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles_great_axe_greataxe_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Gargoyle's+Great+Axe",
    locationUrl: '',
    sortableType: 'Greataxes',
  },
  {
    type: 'weapon',
    name: "Gargoyle's Black Axe",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles_black_axe_greataxe_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Gargoyle's+Black+Axe",
    locationUrl: '',
    sortableType: 'Greataxes',
  },
  {
    type: 'weapon',
    name: 'Winged Greathorn',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/winged_greathorn_greataxe_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Winged+Greathorn',
    locationUrl: '',
    sortableType: 'Greataxes',
  },
  {
    type: 'weapon',
    name: 'Axe of Godrick',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/axe_of_godrick_greataxe_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Axe+of+Godrick',
    locationUrl: '',
    sortableType: 'Greataxes',
  },
  {
    type: 'weapon',
    name: 'Flowerstone Gavel',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/flowerstone_gavel_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Flowerstone+Gavel',
    locationUrl: '',
    sortableType: 'Hammers',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Club',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/club_hammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Club',
    locationUrl: '',
    sortableType: 'Hammers',
  },
  {
    type: 'weapon',
    name: 'Curved Club',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/curved_club_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Curved+Club',
    locationUrl: '',
    sortableType: 'Hammers',
  },
  {
    type: 'weapon',
    name: 'Spiked Club',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/spiked_club_hammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Spiked+Club',
    locationUrl: '',
    sortableType: 'Hammers',
  },
  {
    type: 'weapon',
    name: 'Stone Club',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/stone_club_clubs_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Stone+Club',
    locationUrl: '',
    sortableType: 'Hammers',
  },
  {
    type: 'weapon',
    name: 'Mace',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/mace_hammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Mace',
    locationUrl: '',
    sortableType: 'Hammers',
  },
  {
    type: 'weapon',
    name: 'Morning Star',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/morning_star_hammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Morning+Star',
    locationUrl: '',
    sortableType: 'Hammers',
  },
  {
    type: 'weapon',
    name: 'Warpick',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/warpick_hammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Warpick',
    locationUrl: '',
    sortableType: 'Hammers',
  },
  {
    type: 'weapon',
    name: 'Hammer',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/hammer_hammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Hammer',
    locationUrl: '',
    sortableType: 'Hammers',
  },
  {
    type: 'weapon',
    name: "Monk's Flamemace",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/monks_flamemace_hammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Monk's+Flamemace",
    locationUrl: '',
    sortableType: 'Hammers',
  },
  {
    type: 'weapon',
    name: "Varre's Bouquet",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/varres_bouquet_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Varre's+Bouquet",
    locationUrl: '',
    sortableType: 'Hammers',
  },
  {
    type: 'weapon',
    name: "Envoy's Horn",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/envoys_horn_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Envoy's+Horn",
    locationUrl: '',
    sortableType: 'Hammers',
  },
  {
    type: 'weapon',
    name: 'Nox Flowing Hammer',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nox_flowing_hammer_hammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Nox+Flowing+Hammer',
    locationUrl: '',
    sortableType: 'Hammers',
  },
  {
    type: 'weapon',
    name: 'Ringed Finger',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ringed_finger_hammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Ringed+Finger',
    locationUrl: '',
    sortableType: 'Hammers',
  },
  {
    type: 'weapon',
    name: 'Scepter of the All-Knowing',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/scepter_of_the_all-knowing_hammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Scepter+of+the+All-Knowing',
    locationUrl: '',
    sortableType: 'Hammers',
  },
  {
    type: 'weapon',
    name: "Marika's Hammer",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/marikas_hammer_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Marika's+Hammer",
    locationUrl: '',
    sortableType: 'Hammers',
  },
  {
    type: 'weapon',
    name: 'Serpent Flail',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/serpent_flail_flails_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Serpent+Flail',
    locationUrl: '',
    sortableType: 'Flails',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Flail',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/flail_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Flail',
    locationUrl: '',
    sortableType: 'Flails',
  },
  {
    type: 'weapon',
    name: 'Nightrider Flail',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nightrider_flail_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Nightrider+Flail',
    locationUrl: '',
    sortableType: 'Flails',
  },
  {
    type: 'weapon',
    name: 'Chainlink Flail',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/chainlink_flail_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Chainlink+Flail',
    locationUrl: '',
    sortableType: 'Flails',
  },
  {
    type: 'weapon',
    name: 'Family Heads',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/family_heads_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Family+Heads',
    locationUrl: '',
    sortableType: 'Flails',
  },
  {
    type: 'weapon',
    name: "Bastard's Stars",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bastards_stars_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Bastard's+Stars",
    locationUrl: '',
    sortableType: 'Flails',
  },
  {
    type: 'weapon',
    name: 'Black Steel Greathammer',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_steel_greathammer_great_hammer_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Steel+Greathammer',
    locationUrl: '',
    sortableType: 'Great Hammers',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Smithscript Greathammer',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/smithscript_greathammer_great_hammer_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Smithscript+Greathammer',
    locationUrl: '',
    sortableType: 'Great Hammers',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Large Club',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/large_club_warhammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Large+Club',
    locationUrl: '',
    sortableType: 'Great Hammers',
  },
  {
    type: 'weapon',
    name: 'Curved Great Club',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/curved_great_club_warhammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Curved+Great+Club',
    locationUrl: '',
    sortableType: 'Great Hammers',
  },
  {
    type: 'weapon',
    name: 'Great Mace',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_mace_warhammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Great+Mace',
    locationUrl: '',
    sortableType: 'Great Hammers',
  },
  {
    type: 'weapon',
    name: 'Pickaxe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/pickaxe_warhammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Pickaxe',
    locationUrl: '',
    sortableType: 'Great Hammers',
  },
  {
    type: 'weapon',
    name: 'Brick Hammer',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/brick_hammer_warhammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Brick+Hammer',
    locationUrl: '',
    sortableType: 'Great Hammers',
  },
  {
    type: 'weapon',
    name: 'Battle Hammer',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/battle_hammer_warhammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Battle+Hammer',
    locationUrl: '',
    sortableType: 'Great Hammers',
  },
  {
    type: 'weapon',
    name: 'Rotten Battle Hammer',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_battle_hammer_warhammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Rotten+Battle+Hammer',
    locationUrl: '',
    sortableType: 'Great Hammers',
  },
  {
    type: 'weapon',
    name: "Celebrant's Skull",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/celebrants_skull_warhammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Celebrant's+Skull",
    locationUrl: '',
    sortableType: 'Great Hammers',
  },
  {
    type: 'weapon',
    name: 'Great Stars',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_stars_warhammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Great+Stars',
    locationUrl: '',
    sortableType: 'Great Hammers',
  },
  {
    type: 'weapon',
    name: 'Greathorn Hammer',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/greathorn_hammer_warhammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Greathorn+Hammer',
    locationUrl: '',
    sortableType: 'Great Hammers',
  },
  {
    type: 'weapon',
    name: "Envoy's Long Horn",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/envoys_long_horn_warhammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Envoy's+Long+Horn",
    locationUrl: '',
    sortableType: 'Great Hammers',
  },
  {
    type: 'weapon',
    name: 'Cranial Vessel Candlestand',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/cranial_vessel_candlestand_warhammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Cranial+Vessel+Candlestand',
    locationUrl: '',
    sortableType: 'Great Hammers',
  },
  {
    type: 'weapon',
    name: 'Beastclaw Greathammer',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/beastclaw_greathammer_warhammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Beastclaw+Greathammer',
    locationUrl: '',
    sortableType: 'Great Hammers',
  },
  {
    type: 'weapon',
    name: "Devourer's Scepter",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/devourers_scepter_warhammer_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Devourer's+Scepter",
    locationUrl: '',
    sortableType: 'Great Hammers',
  },
  {
    type: 'weapon',
    name: "Bloodfiend's Arm",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodfiends_arm_colossal_weapon_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Bloodfiend's+Arm",
    locationUrl: '',
    sortableType: 'Colossal Weapons',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Anvil Hammer',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/anvil_hammer_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Anvil+Hammer',
    locationUrl: '',
    sortableType: 'Colossal Weapons',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Devonia's Hammer",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/devonias_hammer_unique_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Devonia's+Hammer",
    locationUrl: '',
    sortableType: 'Colossal Weapons',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Shadow Sunflower Blossom',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/shadow_sunflower_blossom_colossal_weapon_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Shadow+Sunflower+Blossom',
    locationUrl: '',
    sortableType: 'Colossal Weapons',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Gazing Finger',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gazing_finger_colossal_weapon_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Gazing+Finger',
    locationUrl: '',
    sortableType: 'Colossal Weapons',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Duelist Greataxe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/duelist_greataxe_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Duelist+Greataxe',
    locationUrl: '',
    sortableType: 'Colossal Weapons',
  },
  {
    type: 'weapon',
    name: 'Rotten Greataxe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_greataxe_colossal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Rotten+Greataxe',
    locationUrl: '',
    sortableType: 'Colossal Weapons',
  },
  {
    type: 'weapon',
    name: "Golem's Halberd",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/golems_halberd_colossal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Golem's+Halberd",
    locationUrl: '',
    sortableType: 'Colossal Weapons',
  },
  {
    type: 'weapon',
    name: 'Giant-Crusher',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/giant-crusher_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Giant-Crusher',
    locationUrl: '',
    sortableType: 'Colossal Weapons',
  },
  {
    type: 'weapon',
    name: "Prelate's Inferno Crozier",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/prelates_inferno_crozier_colossal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Prelate's+Inferno+Crozier",
    locationUrl: '',
    sortableType: 'Colossal Weapons',
  },
  {
    type: 'weapon',
    name: 'Great Club',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_club_colossal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Great+Club',
    locationUrl: '',
    sortableType: 'Colossal Weapons',
  },
  {
    type: 'weapon',
    name: "Troll's Hammer",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/trolls_hammer_colossal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Troll's+Hammer",
    locationUrl: '',
    sortableType: 'Colossal Weapons',
  },
  {
    type: 'weapon',
    name: 'Dragon Greatclaw',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon_greatclaw_colossal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Dragon+Greatclaw',
    locationUrl: '',
    sortableType: 'Colossal Weapons',
  },
  {
    type: 'weapon',
    name: "Watchdog's Staff",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/watchdog_staff_colossal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Watchdog's+Staff",
    locationUrl: '',
    sortableType: 'Colossal Weapons',
  },
  {
    type: 'weapon',
    name: 'Staff of the Avatar',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/staff_of_the_avatar_colossal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Staff+of+the+Avatar',
    locationUrl: '',
    sortableType: 'Colossal Weapons',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Rotten Staff',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_staff_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Rotten+Staff',
    locationUrl: '',
    sortableType: 'Colossal Weapons',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Envoy's Greathorn",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/envoys_greathorn_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Envoy's+Greathorn",
    locationUrl: '',
    sortableType: 'Colossal Weapons',
  },
  {
    type: 'weapon',
    name: "Ghiza's Wheel",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ghiza%27s_wheel_colossal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Ghiza's+Wheel",
    locationUrl: '',
    sortableType: 'Colossal Weapons',
  },
  {
    type: 'weapon',
    name: 'Fallingstar Beast Jaw',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fallingstar_beast_jaw_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Fallingstar+Beast+Jaw',
    locationUrl: '',
    sortableType: 'Colossal Weapons',
  },
  {
    type: 'weapon',
    name: 'Axe of Godfrey',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/axe_of_godfrey_colossal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Axe+of+Godfrey',
    locationUrl: '',
    sortableType: 'Colossal Weapons',
  },
  {
    type: 'weapon',
    name: 'Smithscript Spear',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/smithscript_spear_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Smithscript+Spear',
    locationUrl: '',
    sortableType: 'Spears',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Swift Spear',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/swift_spear_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Swift+Spear',
    locationUrl: '',
    sortableType: 'Spears',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Bloodfiend's Fork",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodfiends_fork_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Bloodfiend's+Fork",
    locationUrl: '',
    sortableType: 'Spears',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Short Spear',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/short-spear__weapons-elden-ring-wiki-guide-200.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Short+Spear',
    locationUrl: '',
    sortableType: 'Spears',
  },
  {
    type: 'weapon',
    name: 'Iron Spear',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/iron_spear_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Iron+Spear',
    locationUrl: '',
    sortableType: 'Spears',
  },
  {
    type: 'weapon',
    name: 'Spear',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/spear_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Spear',
    locationUrl: '',
    sortableType: 'Spears',
  },
  {
    type: 'weapon',
    name: 'Partisan',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/partisan_spear-elden-ring-wiki-guide-200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Partisan',
    locationUrl: '',
    sortableType: 'Spears',
  },
  {
    type: 'weapon',
    name: 'Pike',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/pike_spear-elden-ring-wiki-guide-200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Pike',
    locationUrl: '',
    sortableType: 'Spears',
  },
  {
    type: 'weapon',
    name: 'Spiked Spear',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/spiked_spear_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Spiked+Spear',
    locationUrl: '',
    sortableType: 'Spears',
  },
  {
    type: 'weapon',
    name: 'Cross-Naginata',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/cross-naginata_elden_ring_wiki_guide_75px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Cross-Naginata',
    locationUrl: '',
    sortableType: 'Spears',
  },
  {
    type: 'weapon',
    name: "Clayman's Harpoon",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/claymans_harpoon-elden-ring-wiki-guide.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Clayman's+Harpoon",
    locationUrl: '',
    sortableType: 'Spears',
  },
  {
    type: 'weapon',
    name: "Celebrant's Rib-Rake",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/celebrants_rib-rake_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Celebrant's+Rib-Rake",
    locationUrl: '',
    sortableType: 'Spears',
  },
  {
    type: 'weapon',
    name: 'Torchpole',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/torchpole_elden_ring_wiki_guide_75px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Torchpole',
    locationUrl: '',
    sortableType: 'Spears',
  },
  {
    type: 'weapon',
    name: "Inquisitor's Girandole",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/inquisitor%27s_girandole_weapons_elden_ring_wiki_guide_75px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Inquisitor's+Girandole",
    locationUrl: '',
    sortableType: 'Spears',
  },
  {
    type: 'weapon',
    name: 'Crystal Spear',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crystal_spear_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Crystal+Spear',
    locationUrl: '',
    sortableType: 'Spears',
  },
  {
    type: 'weapon',
    name: 'Rotten Crystal Spear',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_crystal_spear_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Rotten+Crystal+Spear',
    locationUrl: '',
    sortableType: 'Spears',
  },
  {
    type: 'weapon',
    name: 'Cleanrot Spear',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/cleanrot_spear-elden-ring-wiki-guide.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Cleanrot+Spear',
    locationUrl: '',
    sortableType: 'Spears',
  },
  {
    type: 'weapon',
    name: 'Death Ritual Spear',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/death_ritual_spear_weapons_elden_ring_wiki_guide_75px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Death+Ritual+Spear',
    locationUrl: '',
    sortableType: 'Spears',
  },
  {
    type: 'weapon',
    name: 'Bolt of Gransax',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bolt_of_gransax-elden-ring-wiki-guide.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Bolt+of+Gransax',
    locationUrl: '',
    sortableType: 'Spears',
  },
  {
    type: 'weapon',
    name: "Bloodfiend's Sacred Spear",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodfiends_sacred_spear_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Bloodfiend's+Sacred+Spear",
    locationUrl: '',
    sortableType: 'Great Spears',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Messmer Soldier's Spear",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/messmer_soldiers_spear_spears_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Messmer+Soldier's+Spear",
    locationUrl: '',
    sortableType: 'Great Spears',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Spear of the Impaler',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/spear_of_the_impaler_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Spear+of+the+Impaler',
    locationUrl: '',
    sortableType: 'Great Spears',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Barbed Staff-Spear',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/barbed_staff-spear_spears_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Barbed+Staff-Spear',
    locationUrl: '',
    sortableType: 'Great Spears',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Lance',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lance_greatspear_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Lance',
    locationUrl: '',
    sortableType: 'Great Spears',
  },
  {
    type: 'weapon',
    name: 'Treespear',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/treespear_greatspear_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Treespear',
    locationUrl: '',
    sortableType: 'Great Spears',
  },
  {
    type: 'weapon',
    name: 'Serpent-Hunter',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/serpent-hunter_greatspear_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Serpent-Hunter',
    locationUrl: '',
    sortableType: 'Great Spears',
  },
  {
    type: 'weapon',
    name: "Siluria's Tree",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/silurias_tree_greatspear_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Siluria's+Tree",
    locationUrl: '',
    sortableType: 'Great Spears',
  },
  {
    type: 'weapon',
    name: "Vyke's War Spear",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/vykes_war_spear_greatspear_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Vyke's+War+Spear",
    locationUrl: '',
    sortableType: 'Great Spears',
  },
  {
    type: 'weapon',
    name: "Mohgwyn's Sacred Spear",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/mohgwyns_sacred_spear_great_spears_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Mohgwyn's+Sacred+Spear",
    locationUrl: '',
    sortableType: 'Great Spears',
  },
  {
    type: 'weapon',
    name: 'Spirit Glaive',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/spirit_glaive_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Spirit+Glaive',
    locationUrl: '',
    sortableType: 'Halberds',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Poleblade of the Bud',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/poleblade_of_the_bud_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Poleblade+of+the+Bud',
    locationUrl: '',
    sortableType: 'Halberds',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Halberd',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/halberd_halberd_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Halberd',
    locationUrl: '',
    sortableType: 'Halberds',
  },
  {
    type: 'weapon',
    name: "Banished Knight's Halberd",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/banished_knights_halberd_halberd_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Banished+Knight's+Halberd",
    locationUrl: '',
    sortableType: 'Halberds',
  },
  {
    type: 'weapon',
    name: 'Lucerne',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lucerne_halberd_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Lucerne',
    locationUrl: '',
    sortableType: 'Halberds',
  },
  {
    type: 'weapon',
    name: 'Glaive',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/glaive_halberds_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Glaive',
    locationUrl: '',
    sortableType: 'Halberds',
  },
  {
    type: 'weapon',
    name: 'Vulgar Militia Shotel',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/vulgar_militia_shotel_halberd_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Vulgar+Militia+Shotel',
    locationUrl: '',
    sortableType: 'Halberds',
  },
  {
    type: 'weapon',
    name: 'Vulgar Militia Saw',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/vulgar_militia_saw_halberd_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Vulgar+Militia+Saw',
    locationUrl: '',
    sortableType: 'Halberds',
  },
  {
    type: 'weapon',
    name: "Guardian's Swordspear",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/guardians_swordspear_halberd_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Guardian's+Swordspear",
    locationUrl: '',
    sortableType: 'Halberds',
  },
  {
    type: 'weapon',
    name: "Gargoyle's Halberd",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles_halberd_halberd_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Gargoyle's+Halberd",
    locationUrl: '',
    sortableType: 'Halberds',
  },
  {
    type: 'weapon',
    name: "Gargoyle's Black Halberd",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles_black_halberd_halberd_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Gargoyle's+Black+Halberd",
    locationUrl: '',
    sortableType: 'Halberds',
  },
  {
    type: 'weapon',
    name: 'Nightrider Glaive',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nightrider_glaive_halberd_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Nightrider+Glaive',
    locationUrl: '',
    sortableType: 'Halberds',
  },
  {
    type: 'weapon',
    name: "Pest's Glaive",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/pests_glaive_halberd_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Pest's+Glaive",
    locationUrl: '',
    sortableType: 'Halberds',
  },
  {
    type: 'weapon',
    name: 'Ripple Crescent Halberd',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ripple_crescent_halberd_halberd_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Ripple+Crescent+Halberd',
    locationUrl: '',
    sortableType: 'Halberds',
  },
  {
    type: 'weapon',
    name: 'Golden Halberd',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_halberd_halberd_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Golden+Halberd',
    locationUrl: '',
    sortableType: 'Halberds',
  },
  {
    type: 'weapon',
    name: 'Dragon Halberd',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon_halberd_halberd_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Dragon+Halberd',
    locationUrl: '',
    sortableType: 'Halberds',
  },
  {
    type: 'weapon',
    name: "Loretta's War Sickle",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lorettas_war_sickle_halberd_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Loretta's+War+Sickle",
    locationUrl: '',
    sortableType: 'Halberds',
  },
  {
    type: 'weapon',
    name: "Commander's Standard",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/commanders_standard_halberd_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Commander's+Standard",
    locationUrl: '',
    sortableType: 'Halberds',
  },
  {
    type: 'weapon',
    name: 'Obsidian Lamina',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/obsidian_lamina_reaper_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Obsidian+Lamina',
    locationUrl: '',
    sortableType: 'Reapers',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Scythe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/scythe_reaper_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Scythe',
    locationUrl: '',
    sortableType: 'Reapers',
  },
  {
    type: 'weapon',
    name: 'Grave Scythe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/grave_scythe_reaper_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Grave+Scythe',
    locationUrl: '',
    sortableType: 'Reapers',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Halo Scythe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/halo_scythe_reaper_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Halo+Scythe',
    locationUrl: '',
    sortableType: 'Reapers',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Winged Scythe',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/winged_scythe_reaper_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Winged+Scythe',
    locationUrl: '',
    sortableType: 'Reapers',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Tooth Whip',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/tooth_whip_whips_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Tooth+Whip',
    locationUrl: '',
    sortableType: 'Whips',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Whip',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/whip_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Whip',
    locationUrl: '',
    sortableType: 'Whips',
  },
  {
    type: 'weapon',
    name: 'Thorned Whip',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/thorned_whip_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Thorned+Whip',
    locationUrl: '',
    sortableType: 'Whips',
  },
  {
    type: 'weapon',
    name: 'Urumi',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/urumi_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Urumi',
    locationUrl: '',
    sortableType: 'Whips',
  },
  {
    type: 'weapon',
    name: "Hoslow's Petal Whip",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/hoslows_petal_whip_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Hoslow's+Petal+Whip",
    locationUrl: '',
    sortableType: 'Whips',
  },
  {
    type: 'weapon',
    name: 'Magma Whip Candlestick',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/magma_whip_candlestick_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Magma+Whip+Candlestick',
    locationUrl: '',
    sortableType: 'Whips',
  },
  {
    type: 'weapon',
    name: "Giant's Red Braid",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/giant%27s_red_braid_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Giant's+Red+Braid",
    locationUrl: '',
    sortableType: 'Whips',
  },
  {
    type: 'weapon',
    name: 'Pata',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/pata_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Pata',
    locationUrl: '',
    sortableType: 'Fists',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Golem Fist',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/golem_fist_fist_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Golem+Fist',
    locationUrl: '',
    sortableType: 'Fists',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Thiollier's Hidden Needle",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/thiolliers_hidden_needle_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Thiollier's+Hidden+Needle",
    locationUrl: '',
    sortableType: 'Fists',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Poisoned Hand',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/poisoned_hand_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Poisoned+Hand',
    locationUrl: '',
    sortableType: 'Fists',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Madding Hand',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/madding_hand_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Madding+Hand',
    locationUrl: '',
    sortableType: 'Fists',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Caestus',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/caestus_fist_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Caestus',
    locationUrl: '',
    sortableType: 'Fists',
  },
  {
    type: 'weapon',
    name: 'Spiked Caestus',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/spiked_caestus_fist_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Spiked+Caestus',
    locationUrl: '',
    sortableType: 'Fists',
  },
  {
    type: 'weapon',
    name: 'Katar',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/katar_fist_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Katar',
    locationUrl: '',
    sortableType: 'Fists',
  },
  {
    type: 'weapon',
    name: 'Iron Ball',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/iron_ball_fist_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Iron+Ball',
    locationUrl: '',
    sortableType: 'Fists',
  },
  {
    type: 'weapon',
    name: 'Star Fist',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/star_fist_fist_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Star+Fist',
    locationUrl: '',
    sortableType: 'Fists',
  },
  {
    type: 'weapon',
    name: 'Clinging Bone',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/clinging_bone_fist_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Clinging+Bone',
    locationUrl: '',
    sortableType: 'Fists',
  },
  {
    type: 'weapon',
    name: "Veteran's Prosthesis",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/veterans_prosthesis_fist_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Veteran's+Prosthesis",
    locationUrl: '',
    sortableType: 'Fists',
  },
  {
    type: 'weapon',
    name: 'Cipher Pata',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/cipher_pata_fist_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Cipher+Pata',
    locationUrl: '',
    sortableType: 'Fists',
  },
  {
    type: 'weapon',
    name: 'Grafted Dragon',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/grafted_dragon_fist_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Grafted+Dragon',
    locationUrl: '',
    sortableType: 'Fists',
  },
  {
    type: 'weapon',
    name: 'Claws of Night',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/claws_of_night_unique_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_75px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Claws+of+Night',
    locationUrl: '',
    sortableType: 'Claws',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Hookclaws',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/hookclaws_claw_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Hookclaws',
    locationUrl: '',
    sortableType: 'Claws',
  },
  {
    type: 'weapon',
    name: 'Bloodhound Claws',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodhound_claws_claw_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Bloodhound+Claws',
    locationUrl: '',
    sortableType: 'Claws',
  },
  {
    type: 'weapon',
    name: 'Venomous Fang',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/venomous_fang_claw_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Venomous+Fang',
    locationUrl: '',
    sortableType: 'Claws',
  },
  {
    type: 'weapon',
    name: 'Raptor Talons',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/raptor_talons_claw_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Raptor+Talons',
    locationUrl: '',
    sortableType: 'Claws',
  },
  {
    type: 'weapon',
    name: 'Bone Bow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bone_bow_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Bone+Bow',
    locationUrl: '',
    sortableType: 'Light Bows',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Shortbow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/shortbow_lightbow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Shortbow',
    locationUrl: '',
    sortableType: 'Light Bows',
  },
  {
    type: 'weapon',
    name: 'Composite Bow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/composite_bow_light_bow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Composite+Bow',
    locationUrl: '',
    sortableType: 'Light Bows',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Red Branch Shortbow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/red_branch_shortbow_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Red+Branch+Shortbow',
    locationUrl: '',
    sortableType: 'Light Bows',
  },
  {
    type: 'weapon',
    name: 'Misbegotten Shortbow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/misbegotten_shortbow_light_bow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Misbegotten+Shortbow',
    locationUrl: '',
    sortableType: 'Light Bows',
  },
  {
    type: 'weapon',
    name: 'Harp Bow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/harp_bow_light_bow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Harp+Bow',
    locationUrl: '',
    sortableType: 'Light Bows',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Ansbach's Longbow",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ansbachs_longbow_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Ansbach's+Longbow",
    locationUrl: '',
    sortableType: 'Bows',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Albinauric Bow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/albinauric_bow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Albinauric+Bow',
    locationUrl: '',
    sortableType: 'Bows',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Black Bow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_bow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Bow',
    locationUrl: '',
    sortableType: 'Bows',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Pulley Bow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/pulley_bow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Pulley+Bow',
    locationUrl: '',
    sortableType: 'Bows',
  },
  {
    type: 'weapon',
    name: 'Horn Bow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/horn_bow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Horn+Bow',
    locationUrl: '',
    sortableType: 'Bows',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Serpent Bow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/serpent_bow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Serpent+Bow',
    locationUrl: '',
    sortableType: 'Bows',
  },
  {
    type: 'weapon',
    name: 'Erdtree Bow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree_bow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdtree+Bow',
    locationUrl: '',
    sortableType: 'Bows',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Longbow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/longbow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Longbow',
    locationUrl: '',
    sortableType: 'Bows',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Igon's Greatbow",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/igons_greatbow_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Igon's+Greatbow",
    locationUrl: '',
    sortableType: 'Greatbows',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Greatbow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatbow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Greatbow',
    locationUrl: '',
    sortableType: 'Greatbows',
  },
  {
    type: 'weapon',
    name: 'Golem Greatbow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/golem_greatbow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Golem+Greatbow',
    locationUrl: '',
    sortableType: 'Greatbows',
  },
  {
    type: 'weapon',
    name: 'Erdtree Greatbow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree_greatbow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdtree+Greatbow',
    locationUrl: '',
    sortableType: 'Greatbows',
  },
  {
    type: 'weapon',
    name: 'Lion Greatbow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lion_greatbow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Lion+Greatbow',
    locationUrl: '',
    sortableType: 'Greatbows',
  },
  {
    type: 'weapon',
    name: 'Repeating Crossbow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/repeating_crossbow_crossbow_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Repeating+Crossbow',
    locationUrl: '',
    sortableType: 'Crossbows',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Spread Crossbow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/spread_crossbow_crossbow_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Spread+Crossbow',
    locationUrl: '',
    sortableType: 'Crossbows',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Soldier's Crossbow",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/soldiers_crossbow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Soldier's+Crossbow",
    locationUrl: '',
    sortableType: 'Crossbows',
  },
  {
    type: 'weapon',
    name: 'Light Crossbow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/light_crossbow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Light+Crossbow',
    locationUrl: '',
    sortableType: 'Crossbows',
  },
  {
    type: 'weapon',
    name: 'Heavy Crossbow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/heavy_crossbow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Heavy+Crossbow',
    locationUrl: '',
    sortableType: 'Crossbows',
  },
  {
    type: 'weapon',
    name: 'Arbalest',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/arbalest_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Arbalest',
    locationUrl: '',
    sortableType: 'Crossbows',
  },
  {
    type: 'weapon',
    name: "Crepus's Black-Key Crossbow",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crepuss_black-key_crossbow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl:
      "https://eldenring.wiki.fextralife.com/Crepus's+Black-Key+Crossbow",
    locationUrl: '',
    sortableType: 'Crossbows',
  },
  {
    type: 'weapon',
    name: 'Pulley Crossbow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/pulley_crossbow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Pulley+Crossbow',
    locationUrl: '',
    sortableType: 'Crossbows',
  },
  {
    type: 'weapon',
    name: 'Full Moon Crossbow',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/full_moon_crossbow_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Full+Moon+Crossbow',
    locationUrl: '',
    sortableType: 'Crossbows',
  },
  {
    type: 'weapon',
    name: "Rabbath's Cannon",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rabbaths_cannon_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Rabbath's+Cannon",
    locationUrl: '',
    sortableType: 'Ballistas',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Hand Ballista',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/hand_ballista_ballista_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Hand+Ballista',
    locationUrl: '',
    sortableType: 'Ballistas',
  },
  {
    type: 'weapon',
    name: 'Jar Cannon',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/jar_cannon_ballista_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Jar+Cannon',
    locationUrl: '',
    sortableType: 'Ballistas',
  },
  {
    type: 'weapon',
    name: 'Staff of the Great Beyond',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/staff_of_the_great_beyond_glintstone_staff_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Staff+of+the+Great+Beyond',
    locationUrl: '',
    sortableType: 'Glintstone Staffs',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Maternal Staff',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dryleaf_seal_glinstone_staff_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_75px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Maternal+Staff',
    locationUrl: '',
    sortableType: 'Glintstone Staffs',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Astrologer's Staff",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/astrologers_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Astrologer's+Staff",
    locationUrl: '',
    sortableType: 'Glintstone Staffs',
  },
  {
    type: 'weapon',
    name: 'Glintstone Staff',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/glintstone_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Glintstone+Staff',
    locationUrl: '',
    sortableType: 'Glintstone Staffs',
  },
  {
    type: 'weapon',
    name: 'Academy Glintstone Staff',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/academy_glintstone_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Academy+Glintstone+Staff',
    locationUrl: '',
    sortableType: 'Glintstone Staffs',
  },
  {
    type: 'weapon',
    name: "Demi-Human Queen's Staff",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/demi-human_queens_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Demi-Human+Queen's+Staff",
    locationUrl: '',
    sortableType: 'Glintstone Staffs',
  },
  {
    type: 'weapon',
    name: "Azur's Glintstone Staff",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/azurs_glintstone_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Azur's+Glintstone+Staff",
    locationUrl: '',
    sortableType: 'Glintstone Staffs',
  },
  {
    type: 'weapon',
    name: 'Carian Glintstone Staff',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_glintstone_staff_glintstone_staffs-elden-ring-wiki-guide-200.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Carian+Glintstone+Staff',
    locationUrl: '',
    sortableType: 'Glintstone Staffs',
  },
  {
    type: 'weapon',
    name: 'Carian Regal Scepter',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_regal_scepter_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Carian+Regal+Scepter',
    locationUrl: '',
    sortableType: 'Glintstone Staffs',
  },
  {
    type: 'weapon',
    name: 'Staff of Loss',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/staff_of_loss_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Staff+of+Loss',
    locationUrl: '',
    sortableType: 'Glintstone Staffs',
  },
  {
    type: 'weapon',
    name: 'Meteorite Staff',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/meteorite_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Meteorite+Staff',
    locationUrl: '',
    sortableType: 'Glintstone Staffs',
  },
  {
    type: 'weapon',
    name: 'Staff of the Guilty',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/staff_of_the_guilty_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Staff+of+the+Guilty',
    locationUrl: '',
    sortableType: 'Glintstone Staffs',
  },
  {
    type: 'weapon',
    name: "Prince of Death's Staff",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/prince_of_deaths_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Prince+of+Death's+Staff",
    locationUrl: '',
    sortableType: 'Glintstone Staffs',
  },
  {
    type: 'weapon',
    name: 'Dryleaf Seal',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dryleaf_seal_unique_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_75px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Dryleaf+Seal',
    locationUrl: '',
    sortableType: 'Sacred Seals',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Fire Knight's Seal",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fire_knights_seal_unique_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Fire+Knight's+Seal",
    locationUrl: '',
    sortableType: 'Sacred Seals',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Spiraltree Seal',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/spiraltree_seal_unique_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Spiraltree+Seal',
    locationUrl: '',
    sortableType: 'Sacred Seals',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Finger Seal',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/finger_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Finger+Seal',
    locationUrl: '',
    sortableType: 'Sacred Seals',
  },
  {
    type: 'weapon',
    name: 'Golden Order Seal',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_order_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Golden+Order+Seal',
    locationUrl: '',
    sortableType: 'Sacred Seals',
  },
  {
    type: 'weapon',
    name: 'Gravel Stone Seal',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gravel_stone_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Gravel+Stone+Seal',
    locationUrl: '',
    sortableType: 'Sacred Seals',
  },
  {
    type: 'weapon',
    name: "Giant's Seal",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/giants_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Giant's+Seal",
    locationUrl: '',
    sortableType: 'Sacred Seals',
  },
  {
    type: 'weapon',
    name: "Godslayer's Seal",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godslayers_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Godslayer's+Seal",
    locationUrl: '',
    sortableType: 'Sacred Seals',
  },
  {
    type: 'weapon',
    name: 'Clawmark Seal',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/clawmark_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Clawmark+Seal',
    locationUrl: '',
    sortableType: 'Sacred Seals',
  },
  {
    type: 'weapon',
    name: 'Frenzied Flame Seal',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/frenzied_flame_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Frenzied+Flame+Seal',
    locationUrl: '',
    sortableType: 'Sacred Seals',
  },
  {
    type: 'weapon',
    name: 'Dragon Communion Seal',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon_communion_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Dragon+Communion+Seal',
    locationUrl: '',
    sortableType: 'Sacred Seals',
  },
  {
    type: 'weapon',
    name: 'Dryleaf Arts',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dryleaf_arts_hand-to-hand_arts_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Dryleaf+Arts',
    locationUrl: '',
    sortableType: 'Hand-to-Hand Arts',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Dane's Footwork",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/danes_footwork_hand-to-hand_arts_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Dane's+Footwork",
    locationUrl: '',
    sortableType: 'Hand-to-Hand Arts',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Smithscript Dagger',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/smithscript_dagger_throwing_blade_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Smithscript+Dagger',
    locationUrl: '',
    sortableType: 'Throwing Blades',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Backhand Blade',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/backhand_blade_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Backhand+Blade',
    locationUrl: '',
    sortableType: 'Backhand Blades',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Smithscript Cirque',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/smithscript_cirque_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Smithscript+Cirque',
    locationUrl: '',
    sortableType: 'Backhand Blades',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Curseblade's Cirque",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/curseblades_cirque_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Curseblade's+Cirque",
    locationUrl: '',
    sortableType: 'Backhand Blades',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Firespark Perfume Bottle',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/firespark_perfume_bottle_perfume_bottles_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Firespark+Perfume+Bottle',
    locationUrl: '',
    sortableType: 'Perfume Bottles',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Chilling Perfume Bottle',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/chilling_perfume_bottle_perfume_bottles_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Chilling+Perfume+Bottle',
    locationUrl: '',
    sortableType: 'Perfume Bottles',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Frenzyflame Perfume Bottle',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/frenzyflame_perfume_bottle_perfume_bottles_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Frenzyflame+Perfume+Bottle',
    locationUrl: '',
    sortableType: 'Perfume Bottles',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Lightning Perfume Bottle',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lightning_perfume_bottle_perfume_bottles_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Lightning+Perfume+Bottle',
    locationUrl: '',
    sortableType: 'Perfume Bottles',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Deadly Poison Perfume Bottle',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/deadly_poison_perfume_bottle_perfume_bottles_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl:
      'https://eldenring.wiki.fextralife.com/Deadly+Poison+Perfume+Bottle',
    locationUrl: '',
    sortableType: 'Perfume Bottles',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Red Bear's Claw",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/red_bears_claw_beast_claws_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Red+Bear's+Claw",
    locationUrl: '',
    sortableType: 'Beast Claws',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Beast Claw (Weapon)',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/beast_claw_beast_claws_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Beast+Claw+(Weapon)',
    locationUrl: '',
    sortableType: 'Beast Claws',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Milady',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/milady_light_greatswords_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Milady',
    locationUrl: '',
    sortableType: 'Light Greatswords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Leda's Sword",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ledas_sword_light_greatswords_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Leda's+Sword",
    locationUrl: '',
    sortableType: 'Light Greatswords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Rellana's Twin Blades",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rellanas_twinblade_light_greatswords_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Rellana's+Twin+Blades",
    locationUrl: '',
    sortableType: 'Light Greatswords',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: 'Great Katana',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_katana_great_katana_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Great+Katana',
    locationUrl: '',
    sortableType: 'Great Katanas',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Dragon-Hunter's Great Katana",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon-hunters_great_katana_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl:
      "https://eldenring.wiki.fextralife.com/Dragon-Hunter's+Great+Katana",
    locationUrl: '',
    sortableType: 'Great Katanas',
    inDlc: true,
  },
  {
    type: 'weapon',
    name: "Rakshasa's Great Katana",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rakshasas_great_katana_great_katana_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Rakshasa's+Great+Katana",
    locationUrl: '',
    sortableType: 'Great Katanas',
    inDlc: true,
  },
];
