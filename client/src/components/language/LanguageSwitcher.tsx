import { useTranslation } from 'react-i18next'
import { useLanguage } from './LanguageProvider'
import { LANGUAGES, type Language } from '../../types/language'

export function LanguageSwitcher() {
  const { t } = useTranslation()
  const { language, setLanguage } = useLanguage()

  return (
    <label className="language-switcher">
      <span className="sr-only">{t('language.switch')}</span>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        aria-label={t('language.switch')}
      >
        {LANGUAGES.map((code) => (
          <option key={code} value={code}>
            {t(`language.${code}`)}
          </option>
        ))}
      </select>
    </label>
  )
}
