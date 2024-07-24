import { capitalize, cn } from '@/lib/utils';
import { BookOpen, MapPin } from 'lucide-react';
import { Card, CardTitle } from './ui/card';

type props = {
  isValidate: boolean;
  imageUrl: string;
  onCLick: () => void;
  name: string;
  major?: boolean;
  wikiUrl?: string;
  locationUrl?: string;
  w?: number;
  h?: number;
  fillImage?: boolean;
  counter?: { done: number; total: number };
} & React.HTMLAttributes<HTMLDivElement>;

const DisplayCard: React.FC<props> = ({
  isValidate,
  imageUrl,
  onCLick,
  name,
  major,
  wikiUrl,
  locationUrl,
  w,
  h,
  fillImage,
  counter,
  ...props
}) => {
  return (
    <Card
      {...props}
      className={cn(
        w && `w-[${w}px]`,
        h && `h-[${h}px]`,
        'p-3 cursor-pointer',
        isValidate ? 'border-4 border-green-400' : 'border-4 border-background'
      )}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: fillImage ? 'fill' : 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: w + 'px' || undefined,
        height: h + 'px' || undefined,
      }}
      onClick={onCLick}
    >
      <div className="flex flex-col justify-between h-full">
        <div></div>
        <CardTitle className={cn('bg-secondary/80 rounded-md p-1 cursor-default')} onClick={(e) => e.stopPropagation()}>
          <div className={cn(major && 'text-gold', 'flex flex-col items-center select-none')}>
            <div className="flex gap-3">
              {!!locationUrl && (
                <a target="_blank" href={locationUrl}>
                  <MapPin />
                </a>
              )}
              {!!wikiUrl && (
                <a target="_blank" href={wikiUrl}>
                  <BookOpen />
                </a>
              )}
              {!!counter && (
                <p
                  className={cn(counter.done === counter.total && 'text-green-400')}
                >{`${counter.done}/${counter.total}`}</p>
              )}
            </div>
            <p className="text-center">{capitalize(name)}</p>
          </div>
        </CardTitle>
      </div>
    </Card>
  );
};

export default DisplayCard;
