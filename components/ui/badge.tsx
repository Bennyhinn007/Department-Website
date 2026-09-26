import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "outline";
}

/**
 * Badge Primitive (design-system.md §5.8)
 *
 * Used for categories, status tags, and metadata chips.
 * - default: Subtle surface tint with muted text
 * - primary: Light primary wash with electric blue text
 * - outline: Transparent background with neutral border
 */
export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 select-none",
        "px-3 py-1 rounded-[var(--radius-sm)]",
        "font-body font-medium text-[13px] leading-tight",

        variant === "default" && "bg-[var(--badge-bg)] text-[var(--badge-text)]",
        variant === "primary" && "bg-[var(--badge-primary-bg)] text-[var(--badge-primary-text)]",
        variant === "outline" && "bg-transparent text-[var(--badge-text)] border border-[var(--border)]",

        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
