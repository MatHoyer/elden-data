export type Language = 'en' | 'fr'

export const LANGUAGES: Language[] = ['en', 'fr']

export function isLanguage(value: unknown): value is Language {
  return value === 'en' || value === 'fr'
}

export type LocalizedText = Record<Language, string>
