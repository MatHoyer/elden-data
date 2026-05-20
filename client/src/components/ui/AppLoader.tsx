import { Loader2 } from "lucide-react";

export const AppLoader: React.FC<React.ComponentProps<typeof Loader2>> = (props) => {
  return <Loader2 className="animate-spin" {...props} />;
};
