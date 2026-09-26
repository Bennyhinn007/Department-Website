"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import { navigationConfig, NavItem } from "@/lib/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileDrawer } from "@/components/layout/mobile-drawer";
import { cn } from "@/lib/utils";

/**
 * Global Navbar (design-system.md §5.5 & §11.1)
 *
 * Responsive behaviors:
 * - Desktop (≥ 1024px): 72px height, full inline navigation, Radix dropdowns, CTA button, theme toggle
 * - Tablet (768px – 1023px): Deterministic 72px header (Logo + Dept Name, Theme Toggle, 48x48px Hamburger)
 * - Mobile (< 768px): Minimal header with 48x48px Hamburger & Theme Toggle
 */
export function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <nav
        className="w-full h-[72px] bg-surface/95 backdrop-blur-md border-b border-border transition-colors duration-150"
        aria-label="Main Navigation"
      >
        <Container className="h-full flex items-center justify-between gap-4">
          {/* ── ZONE 1: BRAND IDENTITY ── */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 rounded-[var(--radius-sm)] flex-shrink-0"
            aria-label="Department of IoT & Cyber Security Home"
          >
            {/* Minimalist Geometric Department Emblem (Stroke-based, Institutional) */}
            <div className="w-10 h-10 rounded-[var(--radius-md)] bg-primary-wash border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 transition-colors">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary stroke-current"
                aria-hidden="true"
              >
                {/* Shield geometry representing cyber security */}
                <path
                  d="M12 2L4 5V11C4 16.5 7.5 21.3 12 22C16.5 21.3 20 16.5 20 11V5L12 2Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Connected nodes representing IoT mesh network */}
                <circle cx="12" cy="11" r="2" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
                <path d="M12 7V9M12 13V15M8.5 12.5L10.5 11.5M15.5 12.5L13.5 11.5" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Department Wordmark */}
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm sm:text-base tracking-tight text-text-primary group-hover:text-primary transition-colors leading-tight">
                IoT & Cyber Security
              </span>
              <span className="text-[11px] font-body text-text-muted tracking-normal hidden sm:inline leading-tight">
                School of Computing & Engineering
              </span>
            </div>
          </Link>

          {/* ── ZONE 2: DESKTOP INLINE NAVIGATION (≥ 1024px) ── */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationConfig.mainNav.map((item: NavItem) => {
              if (item.children && item.children.length > 0) {
                // Dropdown item (e.g. About Department)
                const isChildActive = item.children.some(
                  (child) => pathname === child.href || pathname.startsWith(child.href + "/")
                );

                return (
                  <DropdownMenu.Root key={item.label}>
                    <DropdownMenu.Trigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "inline-flex items-center gap-1.5 px-3 py-2 rounded-[var(--radius-md)]",
                          "font-body text-sm font-medium transition-colors duration-150",
                          "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
                          isChildActive
                            ? "text-primary font-semibold bg-primary-wash/60"
                            : "text-text-muted hover:text-text-primary hover:bg-surface-subtle"
                        )}
                        aria-expanded={undefined}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 stroke-[1.5] opacity-70" aria-hidden="true" />
                      </button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                      <DropdownMenu.Content
                        align="start"
                        sideOffset={8}
                        className={cn(
                          "z-50 min-w-[240px] p-2 rounded-[var(--radius-md)]",
                          "bg-surface border border-border shadow-lg",
                          "animate-in fade-in-0 zoom-in-95 duration-150"
                        )}
                      >
                        {item.children.map((child) => {
                          const isActive =
                            child.href === "/"
                              ? pathname === "/"
                              : pathname === child.href || pathname.startsWith(child.href + "/");

                          return (
                            <DropdownMenu.Item key={child.href} asChild>
                              <Link
                                href={child.href}
                                aria-current={isActive ? "page" : undefined}
                                className={cn(
                                  "flex flex-col gap-0.5 px-3 py-2.5 rounded-[var(--radius-sm)]",
                                  "text-sm outline-none cursor-pointer transition-colors",
                                  isActive
                                    ? "bg-primary-wash text-primary font-semibold"
                                    : "text-text-primary hover:bg-surface-subtle hover:text-primary focus:bg-surface-subtle focus:text-primary"
                                )}
                              >
                                <span className="font-medium">{child.label}</span>
                                {child.description && (
                                  <span className="text-[12px] text-text-muted leading-snug">
                                    {child.description}
                                  </span>
                                )}
                              </Link>
                            </DropdownMenu.Item>
                          );
                        })}
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                );
              }

              // Standard direct link
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "px-3 py-2 rounded-[var(--radius-md)]",
                    "font-body text-sm font-medium transition-colors duration-150",
                    "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
                    isActive
                      ? "text-primary font-semibold bg-primary-wash/60"
                      : "text-text-muted hover:text-text-primary hover:bg-surface-subtle"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* ── ZONE 3: ACTIONS & RESPONSIVE TRIGGERS ── */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle — Always visible across all viewports */}
            <ThemeToggle />

            {/* Desktop Primary CTA Button (≥ 1024px) */}
            <div className="hidden lg:block">
              <Link href={navigationConfig.primaryCta.href}>
                <Button variant="primary" size="md">
                  {navigationConfig.primaryCta.label}
                </Button>
              </Link>
            </div>

            {/* Tablet & Mobile Hamburger Trigger (< 1024px) */}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              aria-controls="navigation-drawer"
              className={cn(
                "lg:hidden inline-flex items-center justify-center",
                "w-12 h-12 rounded-[var(--radius-md)]", // 48x48px touch target
                "text-text-primary hover:bg-surface-subtle border border-border",
                "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
                "transition-colors duration-150"
              )}
            >
              <Menu className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </nav>

      {/* Deterministic Slide-out Sheet Drawer */}
      <MobileDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
    </>
  );
}
