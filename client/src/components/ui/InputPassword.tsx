import { useId, useState } from "react";

import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const InputPassword: React.FC<Omit<React.ComponentProps<typeof Input>, "type">> = ({ className, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  const id = useId();

  return (
    <div className="relative">
      <Input id={id} className="pr-9" {...props} type={isVisible ? "text" : "password"} />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setIsVisible((prevState) => !prevState)}
        className={cn(
          "text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent",
          className,
        )}
      >
        {isVisible ? <EyeOffIcon /> : <EyeIcon />}
        <span className="sr-only">{isVisible ? "Hide password" : "Show password"}</span>
      </Button>
    </div>
  );
};
