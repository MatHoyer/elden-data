'use client';

import { Languages } from 'lucide-react';
import { DisplayText } from '../language/DisplayText';
import { useLanguage } from '../language/language-provider';
import { DropdownMenuItem } from '../ui/dropdown-menu';

export const LanguageSwitcher = () => {
  const { toggleLanguage } = useLanguage();

  return (
    <DropdownMenuItem
      className="flex items-center gap-2"
      onClick={(e) => {
        e.stopPropagation();
        toggleLanguage();
      }}
    >
      <Languages className="h-[1.2rem] w-[1.2rem]" />
      <DisplayText
        values={{
          fr: 'Changer de langue',
          en: 'Switch language',
        }}
      />
    </DropdownMenuItem>
  );
};
