"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu, ChevronDown, ArrowRight } from "lucide-react";
import { navigationConfig, NavItem } from "@/lib/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileDrawer } from "@/components/layout/mobile-drawer";
import { cn } from "@/lib/utils";

/**
 * Global Navbar — Swiss Modernist Architectural Edition (Phase 4X)
 *
 * Implements:
 * - Institutional Top Telemetry Strip (Session metadata, NBA Tier-1 accreditation, active system status)
 * - Precision Geometric Department Crest (Interlocking shield + mesh node topology)
 * - Typographic Nav Hierarchy (Inter, letter-spaced, architectural underline indicators rather than SaaS pills)
 * - Full Radix UI Dropdown Menu integration with keyboard navigation
 * - Deterministic Mobile Drawer trigger with 48x48px accessible touch target
 * - Complete WCAG 2.2 AA accessibility and focus management
 */
export function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-colors duration-150">
        {/* ── ZONE 0: INSTITUTIONAL TELEMETRIC TOP STRIP (Hidden on mobile < 768px) ── */}
        <div className="w-full bg-surface-subtle/80 border-b border-border text-[11px] font-mono text-text-muted py-1 hidden md:block select-none">
          <Container className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-medium text-text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                <span>SYS // ACTIVE</span>
              </span>
              <span className="text-border" aria-hidden="true">|</span>
              <span className="tracking-wider">DEPT OF IOT & CYBER SECURITY</span>
              <span className="text-border" aria-hidden="true">|</span>
              <span className="text-primary font-medium">NBA TIER-1 · NAAC A++ ACCREDITED</span>
            </div>
            <div className="flex items-center gap-4">
              <span>ACADEMIC YEAR: 2026–2027</span>
              <span className="text-border" aria-hidden="true">|</span>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors font-medium flex items-center gap-1"
              >
                <span>OFFICIAL INQUIRIES</span>
                <ArrowRight className="w-3 h-3 stroke-[1.5]" aria-hidden="true" />
              </Link>
            </div>
          </Container>
        </div>

        {/* ── ZONE 1: PRIMARY MAIN NAVIGATION BAR ── */}
        <nav
          className="w-full h-[68px] sm:h-[72px] bg-surface/95 backdrop-blur-md border-b border-border shadow-sm transition-colors duration-150"
          aria-label="Main Navigation"
        >
          <Container className="h-full flex items-center justify-between gap-4">
            {/* ── SUB-ZONE 1A: DEPARTMENT IDENTITY ── */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 rounded-[var(--radius-sm)] flex-shrink-0"
              aria-label="Department of IoT & Cyber Security Home"
            >
              {/* Minimalist Architectural Crest (Interlocking Cyber Shield & Node Topology) */}
              <div className="w-10 h-10 rounded-[var(--radius-md)] bg-surface border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors shadow-sm">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary stroke-current"
                  aria-hidden="true"
                >
                  {/* Cyber Shield Geometry */}
                  <path
                    d="M12 2L4 5V11C4 16.5 7.5 21.3 12 22C16.5 21.3 20 16.5 20 11V5L12 2Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Connected Hardware Mesh Core */}
                  <circle cx="12" cy="11" r="2" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
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

            {/* ── SUB-ZONE 1B: DESKTOP INLINE NAVIGATION (≥ 1024px) ── */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2 h-full">
              {navigationConfig.mainNav.map((item: NavItem, index: number) => {
                const numericIndex = `0${index + 1}`;

                if (item.children && item.children.length > 0) {
                  // Dropdown Menu Item (e.g. About Department)
                  const isChildActive = item.children.some(
                    (child) => pathname === child.href || pathname.startsWith(child.href + "/")
                  );

                  return (
                    <DropdownMenu.Root key={item.label}>
                      <DropdownMenu.Trigger asChild>
                        <button
                          type="button"
                          className={cn(
                            "relative h-full inline-flex items-center gap-1.5 px-3",
                            "font-body text-[13px] xl:text-[14px] font-medium transition-colors duration-150",
                            "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
                            isChildActive
                              ? "text-primary font-semibold border-b-2 border-primary"
                              : "text-text-muted hover:text-text-primary border-b-2 border-transparent"
                          )}
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
                            "z-50 min-w-[260px] p-2 rounded-[var(--radius-md)]",
                            "bg-surface border border-border shadow-lg",
                            "animate-in fade-in-0 zoom-in-95 duration-150"
                          )}
                        >
                          <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-text-muted border-b border-border/60 mb-1 select-none">
                            {item.label} Dossier
                          </div>

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
                                    "flex flex-col gap-0.5 px-3 py-2 rounded-[var(--radius-sm)]",
                                    "text-sm outline-none cursor-pointer transition-colors",
                                    isActive
                                      ? "bg-primary-wash text-primary font-semibold"
                                      : "text-text-primary hover:bg-surface-subtle hover:text-primary focus:bg-surface-subtle focus:text-primary"
                                  )}
                                >
                                  <span className="font-medium text-[13px]">{child.label}</span>
                                  {child.description && (
                                    <span className="text-[11px] text-text-muted leading-snug">
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

                // Direct Navigation Link
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
                      "relative h-full inline-flex items-center px-3",
                      "font-body text-[13px] xl:text-[14px] font-medium transition-colors duration-150",
                      "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
                      isActive
                        ? "text-primary font-semibold border-b-2 border-primary"
                        : "text-text-muted hover:text-text-primary border-b-2 border-transparent"
                    )}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* ── SUB-ZONE 1C: ACTIONS & RESPONSIVE CONTROLS ── */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Toggle — Persistent across all breakpoints */}
              <ThemeToggle />

              {/* Desktop Primary CTA Button (≥ 1024px) */}
              <div className="hidden lg:block">
                <Link href={navigationConfig.primaryCta.href}>
                  <Button variant="primary" size="md">
                    <span>{navigationConfig.primaryCta.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" aria-hidden="true" />
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
                  "w-12 h-12 rounded-[var(--radius-md)]", // 48x48px accessible touch target
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
      </header>

      {/* Deterministic Slide-out Sheet Drawer */}
      <MobileDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
    </>
  );
}
