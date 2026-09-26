import * as React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  showHomeIcon?: boolean;
}

/**
 * Breadcrumb Primitive (PRD.md §6 & design-system.md §5.6)
 *
 * Implements:
 * - Semantic <nav aria-label="Breadcrumb"> with <ol> hierarchy
 * - Accessible aria-current="page" on terminal current element
 * - Keyboard focusable links with focus-visible indicators
 * - Responsive line-truncation to prevent mobile overflow
 */
export function Breadcrumbs({
  items,
  className,
  showHomeIcon = true,
}: BreadcrumbsProps) {
  // Prepend Home if not explicitly provided as first item
  const allItems: BreadcrumbItem[] =
    items.length > 0 && items[0].href === "/"
      ? items
      : [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={cn("py-2.5", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-text-muted">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const isHome = index === 0;

          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight
                  className="w-3.5 h-3.5 stroke-[1.5] text-text-muted/60 flex-shrink-0"
                  aria-hidden="true"
                />
              )}

              {isLast || !item.href ? (
                <span
                  aria-current="page"
                  className="font-medium text-text-primary truncate max-w-[160px] sm:max-w-[240px] md:max-w-none"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 hover:text-text-primary transition-colors",
                    "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 rounded-[var(--radius-sm)]",
                    "truncate max-w-[120px] sm:max-w-[200px] md:max-w-none"
                  )}
                >
                  {isHome && showHomeIcon && (
                    <Home className="w-3.5 h-3.5 stroke-[1.5] flex-shrink-0" aria-hidden="true" />
                  )}
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
