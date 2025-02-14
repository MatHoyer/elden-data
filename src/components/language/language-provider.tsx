import React, { createContext, ReactNode, useContext, useState } from 'react';

type TLanguage = 'fr' | 'en';

interface LanguageContextProps {
  language: TLanguage;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<TLanguage>(() => {
    return (localStorage.getItem('language') as TLanguage) || 'en';
  });

  const updateLanguage = (newLanguage: TLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage: () => {
          updateLanguage(language === 'fr' ? 'en' : 'fr');
        },
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
