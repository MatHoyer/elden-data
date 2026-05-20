import { useHasInAppHistoryBack } from "@/hooks/use-has-in-app-history-back";
import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Children, type ComponentPropsWithoutRef } from "react";
import { Button } from "@/components/ui/button";

export const Layout: React.FC<
  ComponentPropsWithoutRef<"div"> & {
    size?: "sm" | "default" | "lg" | "full";
  }
> = ({ size, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "max-w-4xl flex w-full min-w-0 flex-col gap-4 m-auto p-4",
        {
          "max-w-3xl": size === "sm",
          "max-w-7xl": size === "lg",
          "max-w-full": size === "full",
        },
        className,
      )}
    />
  );
};

export const LayoutHeader: React.FC<
  ComponentPropsWithoutRef<"div"> & {
    icon?: React.ReactNode;
    /**
     * When true, renders « Retour » only if history can go back within this app session
     * (`navigate(-1)` would not be the first entry of the tab).
     */
    showBackButton?: boolean;
  }
> = ({ icon, showBackButton = false, className, children, ...props }) => {
  const navigate = useNavigate();
  const canGoBackInApp = useHasInAppHistoryBack();
  const childList = Children.toArray(children);
  const titleBlock = childList[0];
  const descriptionBlock = childList.slice(1);

  return (
    <div {...props} className={cn("mb-6 flex w-full min-w-0 shrink-0 flex-col gap-2", className)}>
      {showBackButton && canGoBackInApp && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="w-fit -ml-2 gap-1 text-muted-foreground hover:text-foreground"
          onClick={() => navigate({ to: ".." })}
        >
          <ArrowLeft className="size-4" aria-hidden />
          Retour
        </Button>
      )}
      <div className="flex min-w-0 flex-row items-center gap-2">
        {icon && (
          <div
            className={cn(
              "flex shrink-0 items-center justify-center rounded-lg bg-primary/20",
              "size-14 sm:size-12",
              "[&_svg]:size-7 sm:[&_svg]:size-6",
            )}
          >
            {icon}
          </div>
        )}
        {titleBlock != null && <div className="min-w-0 flex-1">{titleBlock}</div>}
      </div>
      {descriptionBlock.length > 0 && <div className="flex min-w-0 w-full flex-col gap-2">{descriptionBlock}</div>}
    </div>
  );
};

export const LayoutTitle: React.FC<ComponentPropsWithoutRef<"h1">> = (props) => {
  return <h1 {...props} className={cn(props.className)} />;
};

export const LayoutDescription: React.FC<ComponentPropsWithoutRef<"p">> = (props) => {
  return <p {...props} className={cn(props.className)} />;
};

export const LayoutActions: React.FC<ComponentPropsWithoutRef<"div">> = (props) => {
  return <div {...props} className={cn("flex w-full min-w-0 flex-col gap-2", props.className)} />;
};

export const LayoutContent: React.FC<ComponentPropsWithoutRef<"div">> = (props) => {
  return <div {...props} className={cn("w-full", props.className)} />;
};
