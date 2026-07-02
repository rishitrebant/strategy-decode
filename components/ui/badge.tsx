import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded px-2 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border border-transparent bg-primary text-white",
        secondary:
          "border border-transparent bg-neutral-200 text-foreground",
        outline:
          "border border-border text-foreground bg-background",
        success:
          "border border-transparent bg-success/10 text-success",
        destructive:
          "border border-transparent bg-destructive/10 text-destructive",
        warning:
          "border border-transparent bg-warning/10 text-warning",
        info:
          "border border-transparent bg-info/10 text-info",
        muted:
          "border border-border bg-neutral-100 text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
