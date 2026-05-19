import { useLanguage } from './LanguageProvider'
import type { LocalizedText } from '../../types/language'

export function DisplayText({ values }: { values: LocalizedText }) {
  const { language } = useLanguage()
  return <>{values[language]}</>
}
