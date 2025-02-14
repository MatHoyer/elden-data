import { cn } from '@/lib/utils/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { DisplayText } from '../language/DisplayText';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Typography } from '../ui/typography';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './theme-switcher';

export const Settings = () => {
  const [topSidebarOpen, setTopSidebarOpen] = useState(false);

  return (
    <DropdownMenu open={topSidebarOpen} onOpenChange={setTopSidebarOpen}>
      <DropdownMenuTrigger className="flex items-center justify-around h-full gap-2 cursor-pointer">
        <Typography variant="large">Elden Ring Tracker</Typography>
        <ChevronDown
          className={cn(
            topSidebarOpen && '-rotate-90',
            'transition-transform duration-200'
          )}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" className="mt-2 ml-3">
        <DropdownMenuLabel>
          <DisplayText
            values={{
              fr: 'Paramètres',
              en: 'Settings',
            }}
          />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
