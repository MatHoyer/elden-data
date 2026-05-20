import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { ComponentProps } from "react";

type TGlobalDialogDefaultProps = {
  title?: string;
  description?: string;
  renderContent: () => React.ReactNode;
} & ComponentProps<typeof DialogContent>;

export const GlobalDialogDefault: React.FC<TGlobalDialogDefaultProps> = ({
  title,
  description,
  renderContent,
  className,
  ...props
}) => {
  const renderHeader = () => {
    return (
      (title || description) && (
        <DialogHeader>
          {!!title && <DialogTitle>{title}</DialogTitle>}
          {!!description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
      )
    );
  };

  return (
    <DialogContent className={className} {...props}>
      {renderHeader()}
      <ScrollArea className="h-max-dvh overflow-y-auto">{renderContent()}</ScrollArea>
    </DialogContent>
  );
};
