'use client';
import { cn, latinize } from '@/lib/utils/utils';
import { useState } from 'react';
import { Input } from './ui/input';

const TypeaheadInput: React.FC<
  {
    datas: string[];
    onChange: (value: string) => void;
    onSelect: (value: string) => void;
  } & React.ComponentProps<typeof Input>
> = ({
  datas,
  onChange,
  onSelect,
  onBlur,
  defaultValue,
  className,
  ...props
}) => {
  const [value, setValue] = useState((defaultValue as string) ?? '');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    setSuggestions(
      val !== ''
        ? datas
            .filter((data) => latinize(data).includes(latinize(value)))
            .slice(0, 5)
        : []
    );
    onChange?.(val);
  };

  const handleBLur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    onBlur?.(e);
  };

  return (
    <div className={className}>
      <Input
        value={value}
        onChange={handleChange}
        onBlur={handleBLur}
        {...props}
      />
      <div className="mt-2 relative w-full">
        <div className="absolute z-10 rounded-lg w-full">
          {suggestions.map((suggestion, i) => (
            <div
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setValue(suggestion);
                setSuggestions([]);
                onSelect(suggestion);
              }}
              className={cn(
                'cursor-pointer bg-accent hover:bg-background text-ellipsis overflow-hidden whitespace-nowrap p-2 w-full',
                i === 0 && 'rounded-t-lg',
                i === suggestions.length - 1 && 'rounded-b-lg'
              )}
            >
              {suggestion}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypeaheadInput;
