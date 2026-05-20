import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "./card";

type CardContainerProps = {
  renderHeader?: () => React.ReactNode;
  renderContent?: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
} & React.ComponentProps<typeof Card>;

export const CardContainer: React.FC<CardContainerProps> = ({
  renderHeader,
  renderContent,
  renderFooter,
  className,
  ...props
}) => {
  return (
    <Card className={cn("w-full", className)} {...props}>
      {renderHeader && <CardHeader>{renderHeader()}</CardHeader>}
      {renderContent && <CardContent>{renderContent()}</CardContent>}
      {renderFooter && <CardFooter className="flex justify-end">{renderFooter()}</CardFooter>}
    </Card>
  );
};
