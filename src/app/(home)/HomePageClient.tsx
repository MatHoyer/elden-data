import { DisplayText } from '@/components/language/DisplayText';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { getUrl, TGetUrlArgs, TRoute } from '@/lib/utils/url-utils';
import { cn } from '@/lib/utils/utils';
import Link from 'next/link';

const ProgressBarTitle: React.FC<{
  title: { en: string; fr: string };
  progress: number;
  total: number;
  url: TRoute;
  urlParams?: TGetUrlArgs<TRoute>;
}> = ({ title, progress, total, url, urlParams }) => {
  return (
    <div className="flex h-full items-center justify-center group cursor-pointer">
      <Link href={getUrl(url, urlParams)} className="w-full">
        <div className="w-full px-10 py-3">
          <h2 className="text-4xl group-hover:underline group-hover:text-primary transition-colors duration-200 p-5">
            <DisplayText values={title} />
          </h2>
          <div className="relative w-full h-6 bg-card rounded-full overflow-hidden">
            <p className="absolute w-full text-black">
              {progress >= 0 && `${progress}/`}
              {total}
            </p>
            <div
              className="h-6 bg-primary"
              style={{
                width: progress >= 0 ? `${(progress / total) * 100}%` : '100%',
              }}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

const RemembrancesCard: React.FC<{
  id: string;
  names: { en: string; fr: string };
  image: string;
  isDone: boolean;
}> = ({ id, names, image, isDone }) => {
  // const router = useRouter();
  // const session = useSession();

  // const toggleMutation = useMutation({
  //   mutationFn: async () => {
  //     const res = await checkBoss({
  //       boss: {
  //         id,
  //       },
  //     });

  //     return defaultMutationEnding({
  //       res,
  //       successMessage: 'Boss mis à jour',
  //       cb: () => {
  //         router.refresh();
  //       },
  //     });
  //   },
  //   onSuccess: () => {
  //     router.refresh();
  //   },
  // });

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger
        // onClick={(e) => {
        //   e.preventDefault();
        // }}
        >
          <Card
            // onClick={
            //   session.data?.user
            //     ? () => {
            //         toggleMutation.mutate();
            //       }
            //     : undefined
            // }
            className={cn(
              'flex justify-center items-center cursor-default',
              isDone ? 'bg-primary' : 'opacity-80'
            )}
          >
            <img
              className="w-36 h-36 object-cover"
              src={image || undefined}
              alt="boss"
            />
          </Card>
        </TooltipTrigger>
        <TooltipContent
          // onPointerDownOutside={(e) => {
          //   e.preventDefault();
          // }}
          side="bottom"
          className="text-2xl"
        >
          <DisplayText values={names} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const HomePageClient: React.FC<{
  boss: {
    normal: {
      remembrances: {
        id: string;
        names: { en: string; fr: string };
        image: string;
        isDone: boolean;
      }[];
      killed: number;
      total: number;
    };
    dlc: {
      remembrances: {
        id: string;
        names: { en: string; fr: string };
        image: string;
        isDone: boolean;
      }[];
      killed: number;
      total: number;
    };
  };
  items: { names: { en: string; fr: string }; taken: number; total: number }[];
}> = ({ boss, items }) => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-[1fr_3fr]">
        <Card className="grid grid-rows-[1fr_0fr_2fr_0fr_2fr] text-center items-center w-full">
          <div className="flex h-full items-center justify-center group cursor-pointer">
            <Link href={getUrl('locations')}>
              <h1 className="text-6xl p-5 group-hover:underline group-hover:text-primary transition-colors duration-200">
                Boss
              </h1>
            </Link>
          </div>
          <Separator className="h-1" />
          <ProgressBarTitle
            title={{ en: 'Main Game', fr: 'Jeu Principal' }}
            progress={boss.normal.killed}
            total={boss.normal.total}
            url="locations"
            urlParams={{ locationName: '', urlParams: { filter: 'normal' } }}
          />
          <Separator className="h-1 mb-[5px]" />
          <ProgressBarTitle
            title={{ en: 'DLC', fr: 'Extension' }}
            progress={boss.dlc.killed}
            total={boss.dlc.total}
            url="locations"
            urlParams={{ locationName: '', urlParams: { filter: 'dlc' } }}
          />
        </Card>
        <div className="grid grid-rows-[3fr_0fr_2fr] gap-2">
          <div className="grid grid-cols-5 grid-rows-3 gap-2 px-2 select-none">
            {boss.normal.remembrances.map((rem, i) => {
              return <RemembrancesCard key={i} {...rem} />;
            })}
          </div>
          <Separator className="h-1" />
          <div className="grid grid-cols-5 grid-rows-2 gap-2 px-2 select-none">
            {boss.dlc.remembrances.map((rem, i) => {
              return <RemembrancesCard key={i} {...rem} />;
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 text-center gap-2">
        {items.map((item, i) => {
          const url = item.names.en
            .replace(/\b\w/g, (char) => char.toUpperCase())
            .replace(/\s+/g, '');
          return (
            <Card key={i}>
              <ProgressBarTitle
                title={item.names}
                progress={item.taken}
                total={item.total}
                url={(url.charAt(0).toLowerCase() + url.slice(1)) as TRoute}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};
