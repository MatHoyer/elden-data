import type { CatalogBadge } from "@/components/catalog/catalog.utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export type CheckableCardProps = {
  imageUrl: string;
  name: string;
  isDone: boolean;
  onToggle: () => void;
  doneLabel: string;
  badges?: CatalogBadge[];
};

const majorBadgeClass =
  "border-amber-500/70 bg-amber-500 text-amber-950 shadow-sm dark:bg-amber-400 dark:text-amber-950";

const BadgeWithOptionalTooltip: React.FC<{ badge: CatalogBadge }> = ({ badge }) => {
  const content = (
    <Badge variant="secondary" className={cn("text-[10px] px-1.5 py-0", badge.tone === "major" && majorBadgeClass)}>
      {badge.label}
    </Badge>
  );

  if (!badge.tooltip) return content;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-flex">{content}</span>
      </TooltipTrigger>
      <TooltipContent side="top">{badge.tooltip}</TooltipContent>
    </Tooltip>
  );
};

export const CheckableCard: React.FC<CheckableCardProps> = ({
  imageUrl,
  name,
  isDone,
  onToggle,
  doneLabel,
  badges = [],
}) => (
  <button
    type="button"
    onClick={onToggle}
    className={cn(
      "group w-full rounded-xl text-left transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "cursor-pointer",
      isDone && "opacity-75",
    )}
  >
    <Card
      size="sm"
      className={cn("gap-0 py-0 transition-colors group-hover:ring-foreground/25", isDone && "ring-primary/40")}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt=""
          className={cn(
            "size-full object-cover transition-transform group-hover:scale-[1.02]",
            isDone && "grayscale-[0.35]",
          )}
          loading="lazy"
        />
        {badges.length > 0 && (
          <div className="pointer-events-none absolute top-1.5 left-1.5 flex max-w-[calc(100%-0.75rem)] flex-wrap gap-1">
            {badges.map((badge) => (
              <BadgeWithOptionalTooltip key={badge.id} badge={badge} />
            ))}
          </div>
        )}
      </div>
      <CardContent className="px-2.5 pt-2 pb-1">
        <p
          className={cn(
            "line-clamp-2 text-xs leading-snug font-medium",
            isDone && "text-muted-foreground line-through decoration-primary/50",
          )}
        >
          {name}
        </p>
      </CardContent>
      <CardFooter className="border-0 bg-transparent px-2.5 pt-0 pb-2.5">
        <span
          className={cn(
            "flex items-center gap-1 text-xs font-medium",
            isDone ? "text-primary" : "text-muted-foreground/60",
          )}
        >
          {isDone && <Check className="size-3.5 shrink-0" aria-hidden />}
          {isDone ? doneLabel : "—"}
        </span>
      </CardFooter>
    </Card>
  </button>
);
