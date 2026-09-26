"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, ChevronRight } from "lucide-react";
import { navigationConfig } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Deterministic Navigation Drawer (design-system.md §5.5 & §11.1)
 *
 * - Tablet (768px – 1023px): Exact 380px slide-out right drawer panel
 * - Mobile (< 768px): Full-width / fluid responsive drawer panel
 * - Built on Radix Dialog for focus trapping, ESC-to-close, and scroll locking
 * - 240ms cubic-bezier transition respecting prefers-reduced-motion
 */
export function MobileDrawer({ open, onOpenChange }: MobileDrawerProps) {
  const pathname = usePathname();

  // Close drawer upon navigation
  const handleLinkClick = () => {
    onOpenChange(false);
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        {/* Backdrop overlay */}
        <DialogPrimitive.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-black/45 backdrop-blur-sm",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "duration-200"
          )}
        />

        {/* Slide-out drawer panel */}
        <DialogPrimitive.Content
          aria-describedby={undefined}
          className={cn(
            "fixed inset-y-0 right-0 z-50 flex flex-col",
            "w-full sm:w-[380px] max-w-full",
            "bg-surface text-text-primary shadow-2xl border-l border-border",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
            "duration-[240ms] ease-out",
            "focus:outline-none"
          )}
        >
          {/* Header section with accessible Title and Close trigger */}
          <div className="flex items-center justify-between h-[72px] px-6 border-b border-border flex-shrink-0">
            <div>
              <DialogPrimitive.Title className="font-display font-bold text-sm tracking-tight text-text-primary">
                Navigation Directory
              </DialogPrimitive.Title>
              <p className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                Dept of IoT & Cyber
              </p>
            </div>

            <DialogPrimitive.Close asChild>
              <button
                type="button"
                className={cn(
                  "inline-flex items-center justify-center",
                  "w-12 h-12 rounded-[var(--radius-md)]", // 48x48px touch target
                  "text-text-muted hover:text-text-primary hover:bg-surface-subtle",
                  "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
                  "transition-colors duration-150"
                )}
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />
              </button>
            </DialogPrimitive.Close>
          </div>

          {/* Grouped links stack (Scrollable) */}
          <nav
            className="flex-1 overflow-y-auto px-6 py-6 space-y-6"
            aria-label="Mobile and tablet navigation"
          >
            {navigationConfig.drawerGroups.map((group) => (
              <div key={group.title} className="space-y-2">
                <h3 className="text-[11px] font-mono uppercase tracking-widest text-text-muted px-3">
                  {group.title}
                </h3>
                <ul className="space-y-1">
                  {group.items.map((item) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href || pathname.startsWith(item.href + "/");

                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "flex items-center justify-between",
                            "min-h-[48px] px-3 py-2.5 rounded-[var(--radius-md)]", // 48px touch target
                            "font-body text-sm font-medium transition-colors duration-150",
                            isActive
                              ? "bg-primary-wash text-primary font-semibold border-l-2 border-primary"
                              : "text-text-primary hover:bg-surface-subtle hover:text-primary"
                          )}
                        >
                          <span>{item.label}</span>
                          <ChevronRight
                            className={cn(
                              "w-4 h-4 stroke-[1.5] transition-transform",
                              isActive ? "text-primary" : "text-text-muted opacity-60"
                            )}
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          {/* Bottom Lock: Primary Action */}
          <div className="p-6 border-t border-border bg-surface-subtle/50 flex-shrink-0">
            <Link
              href={navigationConfig.primaryCta.href}
              onClick={handleLinkClick}
              className="w-full block"
            >
              <Button variant="primary" size="lg" className="w-full justify-center">
                {navigationConfig.primaryCta.label}
              </Button>
            </Link>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
