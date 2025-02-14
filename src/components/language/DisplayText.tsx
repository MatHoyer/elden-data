'use client';

import { ComponentProps } from 'react';
import { Typography } from '../ui/typography';
import { useLanguage } from './language-provider';

export const DisplayText: React.FC<
  {
    values: {
      fr: string;
      en: string;
    };
  } & ComponentProps<typeof Typography>
> = ({ values, className, ...props }) => {
  const { language } = useLanguage();

  return (
    <Typography className={className} {...props}>
      {language === 'fr' ? values.fr : values.en}
    </Typography>
  );
};
