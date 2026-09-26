import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

/**
 * Button Primitive (design-system.md §5.3)
 *
 * Locked hierarchy:
 * - primary: Strictly consumes var(--btn-primary-bg) (#0769B5) ensuring 5.7:1 WCAG AA contrast against white text
 * - outline: Border with primary hover wash
 * - ghost: Subtle surface hover well with primary text
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          // Base button styles
          "relative inline-flex items-center justify-center gap-2",
          "font-body font-medium select-none whitespace-nowrap",
          "rounded-[var(--radius-md)]",
          "transition-all duration-150 ease-out",
          "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none",

          // Sizing
          size === "sm" && "h-8 px-3 text-[13px] min-w-[32px]",
          size === "md" && "h-10 px-5 text-[14px] min-w-[40px]",
          size === "lg" && "h-12 px-7 text-[16px] min-w-[48px]",

          // Mobile touch target expansion (ensures min 44x44px clickable area without altering visual size)
          size === "sm" && "after:absolute after:inset-[-6px] sm:after:hidden",

          // Variants
          variant === "primary" && [
            "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-sm",
            "hover:bg-[var(--btn-primary-bg-hover)] hover:shadow-md hover:-translate-y-[1px]",
            "active:bg-[var(--btn-primary-bg-active)] active:translate-y-0 active:shadow-none",
            "disabled:bg-[var(--surface-subtle)] disabled:text-[var(--text-muted)] disabled:hover:translate-y-0",
          ],

          variant === "outline" && [
            "bg-transparent text-[var(--text-primary)] border border-[var(--border)]",
            "hover:bg-[var(--primary-wash)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
            "active:bg-[var(--primary-wash)]",
          ],

          variant === "ghost" && [
            "bg-transparent text-[var(--btn-ghost-text)]",
            "hover:bg-[var(--surface-subtle)] hover:text-[var(--primary-hover)]",
            "active:bg-[var(--surface-subtle)]",
          ],

          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
