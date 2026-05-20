import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";
import { FieldLabel } from "./field";

export const FieldLabelWithAddon: React.FC<
  React.ComponentProps<typeof FieldLabel> & {
    renderAddon?: () => React.ReactNode;
    tooltip?: string;
  }
> = ({ renderAddon, tooltip, ...props }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FieldLabel {...props} />
        {tooltip && (
          <Tooltip>
            <TooltipTrigger type="button">
              <InfoIcon size={16} />
            </TooltipTrigger>
            <TooltipContent className="text-center w-[200px]">{tooltip}</TooltipContent>
          </Tooltip>
        )}
      </div>
      {renderAddon?.()}
    </div>
  );
};
