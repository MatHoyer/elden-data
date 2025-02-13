type TShields = {
  type: {
    name: {
      en: string;
      fr: string;
    };
    shields: {
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

export const shields = [
  {
    type: 'shield',
    name: 'Torche',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/torch_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Torch',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170396',
    sortableType: 'Torches',
  },
  {
    type: 'shield',
    name: 'Torche anti-bêtes',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/beast-repellent_torch_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Beast-Repellent+Torch',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=179340',
    sortableType: 'Torches',
  },
  {
    type: 'shield',
    name: 'Torche barbelée',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/steel-wire_torch_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Steel-Wire+Torch',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164815',
    sortableType: 'Torches',
  },
  {
    type: 'shield',
    name: 'Torche de Sentinelle',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sentrys_torch_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Sentry's+Torch",
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=179352',
    sortableType: 'Torches',
  },
  {
    type: 'shield',
    name: 'Torche de flammes spectrale',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ghostflame_torch_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Ghostflame+Torch',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169189',
    sortableType: 'Torches',
  },
  {
    type: 'shield',
    name: 'Torche de sainte Trina',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/st_trinas_torch_weapon_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/St+Trina's+Torch",
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169005',
    sortableType: 'Torches',
  },
  {
    type: 'shield',
    name: 'Torche de Nanaya',
    inDlc: true,
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nanayas_torch_1_torches_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Nanaya's+Torch",
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382517',
    sortableType: 'Torches',
  },
  {
    type: 'shield',
    name: 'Visage geignard',
    inDlc: true,
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lamenting_visage_torch_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Lamenting+Visage',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382520',
    sortableType: 'Torches',
  },
  {
    type: 'shield',
    name: 'Bouclier croulant',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rickety_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Rickety+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169256',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier rond renforcé',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/riveted_wooden_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Riveted+Wooden+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170505',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier rond bleuté',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/blue-white_wooden_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Blue-White+Wooden+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165281',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier rond gravé',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/scripture_wooden_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Scripture+Wooden+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169153',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier rond aux épines rouges',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/red_thorn_roundshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Red+Thorn+Roundshield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170517',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier-pilori',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/pillory-small-shield_12004_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Pillory+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166474',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Rondache',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/buckler_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Buckler',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=179322',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier rond en métal',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/iron_roundshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Iron+Roundshield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170500',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier en fer doré',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gilded_iron_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Gilded+Iron+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165430',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier de reptilien',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/man-serpents-shield-small_12002_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Man-Serpent's+Shield",
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=182354',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier du flocon',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ice_crest_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Ice+Crest+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167012',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier de la faille',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rift_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Rift+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170533',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier de Parfumeur',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/perfumers-shield-small_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Perfumer's+Shield",
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=182355',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier de culpabilité',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/shield_of_the_guilty_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Shield+of+the+Guilty',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165191',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier à ramures',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/spiralhorn-shield-small_12019_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Spiralhorn+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166228',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier de lave',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/smoldering-small-shield_12015_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Smoldering+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168613',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier serpentin',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/coil_shield_icon_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Coil+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167367',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier forgegraphe',
    inDlc: true,
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/smithscript_shield_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Smithscript+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381848',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier nocturne',
    inDlc: true,
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/shield_of_night_unique_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Shield+of+Night',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382211',
    sortableType: 'Petits boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier en bois aquilin',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/hawk_crest_wooden_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Hawk+Crest+Wooden+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164746',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Bouclier en bois chevalin',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/horse_crest_wooden_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Horse+Crest+Wooden+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=179310',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Bouclier du candélarbre',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/candletree_wooden_shield_medium_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Candletree+Wooden+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168174',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Bouclier en bois flamboyant',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/flame_crest_wooden_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Flame+Crest+Wooden+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164841',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Bouclier en bois entaché',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/marred_wooden_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Marred+Wooden+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167592',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Bouclier de la cité solaire',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sun_realm_shield_medium_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Sun+Realm+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=182357',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Bouclier rond',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/round_shield_medium_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Round+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170518',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Grand bouclier de cuir',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/large_leather_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Large+Leather+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170398',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Bouclier en cuir noir',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_leather_shield_1_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Leather+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=179300',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Bouclier de cuir entaché',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/marred_leather_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Marred+Leather+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164656',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Écu',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/heater_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Heater+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=177648',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Écu à motif bleu',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/blue_crest_heater_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Blue+Crest+Heater+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170534',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Écu à motif rouge',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/red_crest_heater_shield_medium_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Red+Crest+Heater+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170537',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Écu bestial',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/beast_crest_heater_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Beast+Crest+Heater+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165106',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Écu aquilin inversé',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/inverted_hawk_heater_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl:
      'https://eldenring.wiki.fextralife.com/Inverted+Hawk+Heater+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167762',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: "Écu de l'éclipse",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/eclipse_crest_heater_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl:
      'https://eldenring.wiki.fextralife.com/Eclipse+Crest+Heater+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165116',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Rempart',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/kite_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Kite+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170527',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Rempart azur',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/blue-gold_kite_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Blue-Gold+Kite+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170506',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Rempart du scorpion',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/scorpion_kite_shield_medium_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Scorpion+Kite+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170538',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: "Rempart de l'oiseau bicéphale",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/twinbird_kite_shield_medium_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Twinbird+Kite+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168261',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Bouclier en cuivre',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/brass_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Brass+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164532',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Bouclier de soldat de Messmer',
    inDlc: true,
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/messmer_soldier_shield_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Messmer+Soldier+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381330',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Bouclier de chevalier banni',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/banished_knights_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Banished+Knight's+Shield",
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=182359',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Bouclier lupin',
    inDlc: true,
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/wolf_crest_shield_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Wolf+Crest+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381209',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Bouclier serpentin (DLC)',
    inDlc: true,
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/serpent_crest_shield_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Serpent+Crest+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382169',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: "Bouclier d'Albinaurique",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/albinauric_shield_small_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Albinauric+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=182360',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: "Bouclier-jarre d'homme-bête",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/beastmans-jar-shield_12006_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Beastman's+Jar-Shield",
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=182358',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Bouclier de chevalier de Caria',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_knights_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Carian+Knight's+Shield",
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165871',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Bouclier-miroir en argent',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/silver_mirrorshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Silver+Mirrorshield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170210',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Grande carapace',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_turtle_shell_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Great+Turtle+Shell',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164671',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Bouclier léonin doré',
    inDlc: true,
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_lion_shield_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Golden+Lion+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=384461',
    sortableType: 'Boucliers moyens',
  },
  {
    type: 'shield',
    name: 'Pavois en bois',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/wooden_greatshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Wooden+Greatshield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164886',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier seigneurial',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lordsworns_shield_greatshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Lordsworn's+Shield",
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=182361',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Pavois des ronces',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/briar_greatshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Briar+Greatshield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166819',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier-bastion hérissé',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/spiked_palisade_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Spiked+Palisade+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166497',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: "Bouclier de l'icône",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/icon_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Icon+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167715',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier bestial doré',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_beast_crest_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Golden+Beast+Crest+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168831',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Égide du manoir',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/manor_towershield_greatshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Manor+Towershield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167595',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Égide enchevêtrée',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crossed-tree_towershield_greatshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Crossed-Tree+Towershield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170539',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Égide aquiline inversée',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/invert_hawk_towershield_greatshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Inverted+Hawk+Towershield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=182362',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Égide draconique',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon_towershield_greatshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Dragon+Towershield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170198',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Pavois distingué',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/distinguished_greatshield_shields_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Distinguished+Greatshield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=179353',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Pavois à dorures',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gilded_greatshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Gilded+Greatshield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=182363',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Pavois du Coucou',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/cuckoo_greatshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Cuckoo+Greatshield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=176430',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Pavois du lion rouge',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/redmane_greatshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Redmane+Greatshield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=182501',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Pavois doré',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_greatshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Golden+Greatshield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168134',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Pavois en acier noir',
    inDlc: true,
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_steel_greatshield_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Black+Steel+Greatshield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=380450',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: "Pavois de l'Arbre-Sacré",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/haligtree_crest_greatshield_elden_ring_wiki_guide_200px.png',
    wikiUrl:
      'https://eldenring.wiki.fextralife.com/Haligtree+Crest+Greatshield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=182502',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier à corne du Creuset',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crucible_hornshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Crucible+Hornshield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169448',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier griffe de dragon',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragonclaw__shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Dragonclaw+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167179',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier des empreintes',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fingerprint_stone_shield_greatshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Fingerprint+Stone+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=171766',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: "Pavois de l'éclipse",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/eclipse_crest_greatshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Eclipse+Crest+Greatshield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167643',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Targe de la fourmi',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ants_skull_plate_elden_ring_wiki_guide_200px.png',
    wikiUrl: "https://eldenring.wiki.fextralife.com/Ant's+Skull+Plate",
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168236',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: "Pavois de l'Arbre-Monde",
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree_greatshield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Erdtree+Greatshield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169445',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier de la méduse',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/jellyfish_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Jellyfish+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167530',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier-visage',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/visage_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Visage+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166398',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier cyclope',
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/one-eyed_shield_elden_ring_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/One-Eyed+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169138',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Pavois en vert-de-gris',
    inDlc: true,
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/verdigris_greatshield_greatshields_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Verdigris+Greatshield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=384099',
    sortableType: 'Grands boucliers',
  },
  {
    type: 'shield',
    name: 'Bouclier de duel',
    inDlc: true,
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dueling_shield_thrusting_shields_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Dueling+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381711',
    sortableType: "Boucliers d'estoc",
  },
  {
    type: 'shield',
    name: "Bouclier d'estoc de Caria",
    inDlc: true,
    imageUrl:
      'https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_thrusting_shield_thrusting_shields_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png',
    wikiUrl: 'https://eldenring.wiki.fextralife.com/Carian+Thrusting+Shield',
    locationUrl:
      'https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381798',
    sortableType: "Boucliers d'estoc",
  },
];
