'use client';

import { Languages } from 'lucide-react';
import { useLanguage } from '../language/language-provider';
import { DropdownMenuItem } from '../ui/dropdown-menu';
import { Typography } from '../ui/typography';

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <DropdownMenuItem
      className="flex items-center gap-2"
      onClick={(e) => {
        e.stopPropagation();
        toggleLanguage();
      }}
    >
      <Languages className="h-[1.2rem] w-[1.2rem]" />
      <Typography>
        {language === 'fr' ? 'Changer de langue' : 'Switch language'}
      </Typography>
    </DropdownMenuItem>
  );
};
