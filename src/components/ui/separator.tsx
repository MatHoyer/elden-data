'use client';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as React from 'react';

import { cn } from '@/lib/utils/utils';

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

const TextSeparator: React.FC<React.ComponentProps<'span'>> = ({
  className,
  ...props
}) => {
  return (
    <div className="flex items-center gap-4">
      <Separator className="flex-1 bg-primary" />
      <span className={cn('text-primary', className)} {...props} />
      <Separator className="flex-1 bg-primary" />
    </div>
  );
};

export { Separator, TextSeparator };
