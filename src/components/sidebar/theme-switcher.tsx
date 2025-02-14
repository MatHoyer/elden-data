'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '../language/language-provider';
import { DropdownMenuItem } from '../ui/dropdown-menu';
import { Typography } from '../ui/typography';

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme();
  const { language } = useLanguage();

  return (
    <DropdownMenuItem
      className="flex items-center gap-2"
      onClick={(e) => {
        e.stopPropagation();
        const theme =
          localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
        setTheme(theme);
      }}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <Typography>
        {language === 'fr' ? 'Changer de thème' : 'Switch theme'}
      </Typography>
    </DropdownMenuItem>
  );
};
