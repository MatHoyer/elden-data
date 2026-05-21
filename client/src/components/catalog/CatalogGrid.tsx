import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export const CatalogGrid: React.FC<ComponentPropsWithoutRef<"div">> = ({ className, ...props }) => (
  <div
    className={cn("grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5", className)}
    {...props}
  />
);
