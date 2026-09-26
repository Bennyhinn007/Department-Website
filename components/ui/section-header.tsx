import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * SectionHeader Primitive (design-system.md §5.7)
 *
 * Implements:
 * - Eyebrow: Uppercase tracked text in body font (or mono for sequence indices)
 * - Title: Plus Jakarta Sans (H2), confident and weighted
 * - Description: Clean Inter body lead text constrained to max-w-2xl
 * - Action slot: For section-level CTAs (e.g., "View All Faculty →")
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  className,
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCentered ? "items-center text-center mx-auto" : "items-start text-left",
        action && "sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div className={cn("space-y-2 max-w-3xl", isCentered && "mx-auto")}>
        {eyebrow && (
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-body font-semibold uppercase tracking-[0.08em] text-primary">
              {eyebrow}
            </span>
          </div>
        )}

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">
          {title}
        </h2>

        {description && (
          <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className={cn("pt-2 sm:pt-0 flex-shrink-0", isCentered && "mx-auto")}>
          {action}
        </div>
      )}
    </div>
  );
}
