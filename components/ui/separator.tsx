import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const separatorVariants = cva("", {
  variants: {
    orientation: {
      horizontal: "h-px w-full bg-border",
      vertical: "h-full w-px bg-border",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {
  decorative?: boolean;
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation === "vertical" ? "vertical" : undefined}
      className={cn(separatorVariants({ orientation, className }))}
      {...props}
    />
  )
);
Separator.displayName = "Separator";

export { Separator, separatorVariants };
