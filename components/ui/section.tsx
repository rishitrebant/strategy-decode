import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const sectionVariants = cva("w-full", {
  variants: {
    padding: {
      none: "",
      sm: "py-8 md:py-12",
      md: "py-12 md:py-16",
      lg: "py-16 md:py-24",
      xl: "py-20 md:py-32",
    },
    background: {
      default: "bg-background",
      muted: "bg-neutral-50",
      alt: "bg-neutral-100",
    },
    border: {
      none: "",
      top: "border-t border-border",
      bottom: "border-b border-border",
      both: "border-y border-border",
    },
  },
  defaultVariants: {
    padding: "md",
    background: "default",
    border: "none",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, padding, background, border, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(sectionVariants({ padding, background, border, className }))}
      {...props}
    />
  )
);
Section.displayName = "Section";

export { Section, sectionVariants };
