'use client';

import { useLanguage } from './language-provider';

export const DisplayText: React.FC<{
  values: {
    fr: string;
    en: string;
  };
}> = ({ values }) => {
  const { language } = useLanguage();

  return <>{language === 'fr' ? values.fr : values.en}</>;
};
