import { useFilterContext } from '@/contexts/FilterContext';
import { capitalize, cn } from '@/lib/utils';
import { useId } from 'react';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

const RadioFilter: React.FC<{ name: string; labels: string[]; reverse?: boolean }> = ({ name, labels, reverse }) => {
  const { router, pathname, searchParams, createQueryString } = useFilterContext();
  const id = useId();

  return (
    <RadioGroup
      defaultValue={searchParams.get(name) ?? labels[0]}
      onValueChange={(value) => {
        router.push(pathname + '?' + createQueryString(name, value as string));
      }}
      className={cn('flex flex-col items-end', reverse && 'items-start')}
    >
      {labels.map((label) => {
        const labelId = `${id}-${label}`;
        return (
          <div key={labelId} className="flex items-center space-x-2">
            {!reverse && <Label htmlFor={labelId}>{capitalize(label)}</Label>}
            <RadioGroupItem value={label} id={labelId} />
            {reverse && <Label htmlFor={labelId}>{capitalize(label)}</Label>}
          </div>
        );
      })}
    </RadioGroup>
  );
};

export default RadioFilter;
