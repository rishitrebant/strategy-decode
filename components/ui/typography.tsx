import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

/* Headings */
const headingVariants = cva("font-bold leading-tight tracking-tight text-balance", {
  variants: {
    size: {
      h1: "text-5xl md:text-6xl",
      h2: "text-4xl md:text-5xl",
      h3: "text-3xl md:text-4xl",
      h4: "text-2xl md:text-3xl",
      h5: "text-xl md:text-2xl",
      h6: "text-lg md:text-xl",
    },
  },
  defaultVariants: {
    size: "h1",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, as: Component = "h1", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(headingVariants({ size, className }))}
      {...props}
    />
  )
);
Heading.displayName = "Heading";

/* Subheading */
const subheadingVariants = cva("font-semibold leading-snug text-balance", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface SubheadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof subheadingVariants> {}

const Subheading = React.forwardRef<HTMLDivElement, SubheadingProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(subheadingVariants({ size, className }))}
      {...props}
    />
  )
);
Subheading.displayName = "Subheading";

/* Body Text */
const bodyVariants = cva("leading-relaxed", {
  variants: {
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
    },
  },
  defaultVariants: {
    size: "base",
    color: "default",
  },
});

export interface BodyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof bodyVariants> {}

const Body = React.forwardRef<HTMLParagraphElement, BodyProps>(
  ({ className, size, color, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(bodyVariants({ size, color, className }))}
      {...props}
    />
  )
);
Body.displayName = "Body";

/* Small Text / Caption */
const captionVariants = cva("leading-tight text-muted-foreground", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export interface CaptionProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof captionVariants> {}

const Caption = React.forwardRef<HTMLSpanElement, CaptionProps>(
  ({ className, size, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(captionVariants({ size, className }))}
      {...props}
    />
  )
);
Caption.displayName = "Caption";

/* Large Display Text */
const displayVariants = cva("font-bold leading-tight tracking-tight text-balance", {
  variants: {
    size: {
      sm: "text-3xl md:text-4xl",
      md: "text-4xl md:text-5xl",
      lg: "text-5xl md:text-6xl",
      xl: "text-6xl md:text-7xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface DisplayProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof displayVariants> {}

const Display = React.forwardRef<HTMLDivElement, DisplayProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(displayVariants({ size, className }))}
      {...props}
    />
  )
);
Display.displayName = "Display";

export {
  Heading,
  headingVariants,
  Subheading,
  subheadingVariants,
  Body,
  bodyVariants,
  Caption,
  captionVariants,
  Display,
  displayVariants,
};
