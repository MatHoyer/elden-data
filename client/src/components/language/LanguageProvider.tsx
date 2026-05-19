import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { setI18nLanguage } from '../../i18n'
import { pb, type UserRecord } from '../../lib/pocketbase'
import { isLanguage, type Language } from '../../types/language'

const STORAGE_KEY = 'language'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
)

function detectLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (isLanguage(stored)) return stored

  if (navigator.language.toLowerCase().startsWith('fr')) return 'fr'
  return 'en'
}

function persistLocal(language: Language) {
  localStorage.setItem(STORAGE_KEY, language)
}

async function persistUser(language: Language) {
  if (!pb.authStore.isValid || !pb.authStore.record) return

  const updated = await pb
    .collection('users')
    .update<UserRecord>(pb.authStore.record.id, { language })

  pb.authStore.save(pb.authStore.token, updated)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage)

  const applyLanguage = useCallback((next: Language) => {
    setLanguageState(next)
    setI18nLanguage(next)
    persistLocal(next)
  }, [])

  const setLanguage = useCallback(
    (next: Language) => {
      applyLanguage(next)
      void persistUser(next).catch(console.error)
    },
    [applyLanguage],
  )

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }, [language, setLanguage])

  useEffect(() => {
    applyLanguage(detectLanguage())
  }, [applyLanguage])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    const syncFromAuth = () => {
      const record = pb.authStore.record as UserRecord | null
      if (record?.language && isLanguage(record.language)) {
        applyLanguage(record.language)
      }
    }

    syncFromAuth()
    return pb.authStore.onChange(syncFromAuth)
  }, [applyLanguage])

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language, setLanguage, toggleLanguage],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
