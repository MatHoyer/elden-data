import { Card } from '@/components/ui/card';
import { Collapsible, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils/utils';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PropsWithChildren } from 'react';

export const AnimatedCollapsible: React.FC<
  { isOpen: boolean; onOpenChange: (open: boolean) => void } & PropsWithChildren
> = ({ isOpen, onOpenChange, children }) => {
  return (
    <Collapsible className="group/collapsible w-full" onOpenChange={onOpenChange} open={isOpen}>
      {children}
    </Collapsible>
  );
};

export const AnimatedCollapsibleTrigger: React.FC<
  {
    isOpen: boolean;
    isLeftItem?: boolean;
    asChild?: boolean;
  } & PropsWithChildren
> = ({ isOpen, isLeftItem = false, asChild = false, children }) => {
  return (
    <CollapsibleTrigger className="w-full" asChild={asChild}>
      <Card
        className={cn(
          'flex w-full items-center justify-start gap-3 p-3 cursor-pointer',
          isOpen ? 'rounded-b-none' : 'rounded-lg transition-[border-radius] duration-1000'
        )}
      >
        {children}
        {!isLeftItem ? <div className="flex-1" /> : null}
        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
      </Card>
    </CollapsibleTrigger>
  );
};

export const AnimatedCollapsibleContent: React.FC<
  {
    isOpen: boolean;
  } & PropsWithChildren &
    React.ComponentProps<typeof motion.div>
> = ({ isOpen, children, className, ...rest }) => {
  return (
    <div className={cn('w-full bg-accent px-10 rounded-b-lg')}>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
        className={className}
        {...rest}
      >
        {children}
      </motion.div>
    </div>
  );
};
