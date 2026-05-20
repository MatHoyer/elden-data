import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import type { Language } from "@/types/language";
import enArmors from "./locales/en/armors.json";
import enAshesOfWar from "./locales/en/ashes_of_war.json";
import enBosses from "./locales/en/bosses.json";
import enCategories from "./locales/en/categories.json";
import enCommon from "./locales/en/common.json";
import enCookBooks from "./locales/en/cook_books.json";
import enCrystalTears from "./locales/en/crystal_tears.json";
import enLocations from "./locales/en/locations.json";
import enRemembrances from "./locales/en/remembrances.json";
import enShields from "./locales/en/shields.json";
import enSpells from "./locales/en/spells.json";
import enSpiritAshes from "./locales/en/spirit_ashes.json";
import enTalismans from "./locales/en/talismans.json";
import enWeapons from "./locales/en/weapons.json";
import enWhetBlades from "./locales/en/whet_blades.json";
import frArmors from "./locales/fr/armors.json";
import frAshesOfWar from "./locales/fr/ashes_of_war.json";
import frBosses from "./locales/fr/bosses.json";
import frCategories from "./locales/fr/categories.json";
import frCommon from "./locales/fr/common.json";
import frCookBooks from "./locales/fr/cook_books.json";
import frCrystalTears from "./locales/fr/crystal_tears.json";
import frLocations from "./locales/fr/locations.json";
import frRemembrances from "./locales/fr/remembrances.json";
import frShields from "./locales/fr/shields.json";
import frSpells from "./locales/fr/spells.json";
import frSpiritAshes from "./locales/fr/spirit_ashes.json";
import frTalismans from "./locales/fr/talismans.json";
import frWeapons from "./locales/fr/weapons.json";
import frWhetBlades from "./locales/fr/whet_blades.json";

export const defaultNS = "translation";

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enCommon,
      bosses: enBosses,
      locations: enLocations,
      remembrances: enRemembrances,
      categories: enCategories,
      armors: enArmors,
      weapons: enWeapons,
      shields: enShields,
      spells: enSpells,
      whet_blades: enWhetBlades,
      crystal_tears: enCrystalTears,
      spirit_ashes: enSpiritAshes,
      cook_books: enCookBooks,
      talismans: enTalismans,
      ashes_of_war: enAshesOfWar,
    },
    fr: {
      translation: frCommon,
      bosses: frBosses,
      locations: frLocations,
      remembrances: frRemembrances,
      categories: frCategories,
      armors: frArmors,
      weapons: frWeapons,
      shields: frShields,
      spells: frSpells,
      whet_blades: frWhetBlades,
      crystal_tears: frCrystalTears,
      spirit_ashes: frSpiritAshes,
      cook_books: frCookBooks,
      talismans: frTalismans,
      ashes_of_war: frAshesOfWar,
    },
  },
  lng: "en",
  fallbackLng: "en",
  defaultNS,
  interpolation: { escapeValue: false },
});

export function setI18nLanguage(language: Language) {
  void i18n.changeLanguage(language);
}

export default i18n;
