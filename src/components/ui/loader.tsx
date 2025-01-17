import { cn } from '@/lib/utils/utils';
import { Loader2, LucideProps } from 'lucide-react';

export const Loader: React.FC<LucideProps> = ({ className, ...props }) => {
  return <Loader2 className={cn(className, 'animate-spin')} {...props} />;
};
