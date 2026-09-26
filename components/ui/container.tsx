import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

/**
 * Standardized Layout Container (design-system.md §4.2)
 *
 * Enforces 1280px maximum content width and deterministic responsive padding:
 * - Mobile (< 768px): 16px (px-4)
 * - Tablet (768px – 1023px): 24px (px-6)
 * - Desktop (1024px – 1439px): 48px (px-12)
 * - Ultrawide (1440px+): 64px (px-16)
 */
export function Container({
  as: Component = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full max-w-7xl mx-auto",
        "px-4 sm:px-6 lg:px-12 xl:px-16",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
