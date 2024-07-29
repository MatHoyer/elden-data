import { capitalize, cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

const RadioFilter: React.FC<{ name: string; labels: string[]; reverse?: boolean }> = ({ name, labels, reverse }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <RadioGroup
      defaultValue={searchParams.get(name) ?? labels[0]}
      onValueChange={(value) => {
        router.push(pathname + '?' + createQueryString(name, value as string));
      }}
      className={cn('flex flex-col items-end', reverse && 'items-start')}
    >
      {labels.map((label) => (
        <div key={label} className="flex items-center space-x-2">
          {!reverse && <Label htmlFor={label}>{capitalize(label)}</Label>}
          <RadioGroupItem value={label} id={label} />
          {reverse && <Label htmlFor={label}>{capitalize(label)}</Label>}
        </div>
      ))}
    </RadioGroup>
  );
};

export default RadioFilter;
