import * as React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Cpu } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

/**
 * Homepage Hero Section (design-system.md §12.1 & design.md §7.1)
 *
 * Implements:
 * - 7/5 Asymmetric Desktop Grid (Left: Content 7 cols; Right: Visual 5 cols)
 * - 90vh approximate minimum height on desktop viewports
 * - Eyebrow: Restrained JetBrains Mono technical indicator
 * - Headline: Plus Jakarta Sans with locked Display-1 token (clamp(2.75rem, 5vw, 4.5rem))
 * - Narrative: Inter with locked Body-lg token (1.125rem / 18px), max-width 56ch
 * - CTAs: Existing Button primitives (Primary using --btn-primary-bg, Outline secondary)
 * - Right Visual: Structured placeholder preserving exact 4:3 geometry, coordinate grid,
 *   subordinate SVG network topology schematic, and corner registration marks
 * - 80/15/5 color composition discipline (Zero neon, zero gradients, zero glassmorphism)
 * - WCAG 2.2 AA accessibility with semantic H1 and aria-hidden decorative SVGs
 */
export function Hero() {
  return (
    <section
      aria-label="Department Introduction"
      className="relative w-full min-h-[calc(90vh-72px)] flex items-center py-12 sm:py-16 lg:py-20 overflow-hidden bg-background"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* ═══════════════════════════════════════════════════════ */}
          {/* LEFT COLUMN: 7 COLUMNS (CONTENT & HIERARCHY)          */}
          {/* ═══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* 1. Technical Eyebrow (Restrained JetBrains Mono) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-surface-subtle border border-border">
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
                aria-hidden="true"
              />
              <span className="font-mono text-[11px] sm:text-xs tracking-wider text-text-muted uppercase">
                DEPT OF IOT & CYBER SECURITY · SYS:ACADEMIC
              </span>
            </div>

            {/* 2. Display-1 Headline (Plus Jakarta Sans, Weight 700) */}
            <h1 className="font-display text-[var(--text-display-1)] font-bold tracking-tight text-text-primary leading-[1.08]">
              Engineering Resilient Connected Systems & Cyber Defenses
            </h1>

            {/* 3. Narrative Body (Inter, Body-lg, max-w-[56ch]) */}
            <p className="font-body text-base lg:text-[var(--text-body-lg)] text-text-muted leading-relaxed max-w-[56ch]">
              Advancing engineering rigor in connected embedded architectures, threat analysis,
              and cryptographic defense. We prepare researchers and engineers to design,
              evaluate, and protect critical digital ecosystems in an adversarial world.
            </p>

            {/* 4. Action Controls (Standardized Button Primitives) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <Link href="/about" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/faculty" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <span>View Faculty Directory</span>
                </Button>
              </Link>
            </div>

            {/* 5. Credibility & Accreditation Indicators (PRD.md §3.1) */}
            <div className="pt-6 sm:pt-8 border-t border-border w-full flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-text-muted">
              <div className="flex items-center gap-2">
                <ShieldCheck
                  className="w-4 h-4 stroke-[1.5] text-primary flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium text-text-primary">NBA Accredited (Tier-1)</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border hidden sm:block" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <Award
                  className="w-4 h-4 stroke-[1.5] text-primary flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium text-text-primary">NAAC A++ Institutional Grade</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border hidden sm:block" aria-hidden="true" />
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <span className="text-accent font-semibold">6</span>
                <span>Specialized Research Testbeds</span>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* RIGHT COLUMN: 5 COLUMNS (STRUCTURED VISUAL & MOTIF)   */}
          {/* ═══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full rounded-[var(--radius-lg)] bg-surface border border-border shadow-sm overflow-hidden">
              {/* Corner Registration Crosshairs (Hairline Engineering Markers) */}
              <span
                className="absolute top-2 left-2 font-mono text-[10px] text-text-muted/40 select-none z-10"
                aria-hidden="true"
              >
                +
              </span>
              <span
                className="absolute top-2 right-2 font-mono text-[10px] text-text-muted/40 select-none z-10"
                aria-hidden="true"
              >
                +
              </span>
              <span
                className="absolute bottom-2 left-2 font-mono text-[10px] text-text-muted/40 select-none z-10"
                aria-hidden="true"
              >
                +
              </span>
              <span
                className="absolute bottom-2 right-2 font-mono text-[10px] text-text-muted/40 select-none z-10"
                aria-hidden="true"
              >
                +
              </span>

              {/* Technical Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface-subtle/60 text-[11px] font-mono text-text-muted select-none">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 stroke-[1.5] text-primary" aria-hidden="true" />
                  <span>TESTBED://IOT_CYBER_LAB_01</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] text-text-primary font-medium">TELEMETRY:OK</span>
                </div>
              </div>

              {/* Visual Frame & Subordinate Technical SVG Motif */}
              <div className="relative aspect-[4/3] w-full flex flex-col items-center justify-center p-6 bg-surface">
                {/* Hairline Coordinate Grid Pattern (Subordinate) */}
                <svg
                  className="absolute inset-0 w-full h-full text-border/60 pointer-events-none"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="hero-grid-pattern"
                      width="28"
                      height="28"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 28 0 L 0 0 0 28"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
                </svg>

                {/* Subordinate Network Topology Schematic (Allowed Technical Motif) */}
                <svg
                  viewBox="0 0 360 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-full h-full text-text-muted/40 pointer-events-none"
                  aria-hidden="true"
                >
                  {/* Hairline Data Flow Mesh Lines */}
                  <line
                    x1="60"
                    y1="70"
                    x2="150"
                    y2="120"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <line
                    x1="150"
                    y1="120"
                    x2="280"
                    y2="80"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="150"
                    y1="120"
                    x2="220"
                    y2="180"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <line
                    x1="280"
                    y1="80"
                    x2="320"
                    y2="150"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="220"
                    y1="180"
                    x2="320"
                    y2="150"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />

                  {/* Node 1: Sensor Cluster */}
                  <circle cx="60" cy="70" r="5" stroke="var(--primary)" strokeWidth="1.5" fill="var(--surface)" />
                  <circle cx="60" cy="70" r="2" fill="var(--primary)" />
                  <text x="50" y="55" fill="currentColor" fontSize="9" fontFamily="monospace">NODE:01</text>

                  {/* Node 2: IoT Gateway Hub */}
                  <circle cx="150" cy="120" r="6" stroke="var(--primary)" strokeWidth="1.5" fill="var(--surface)" />
                  <circle cx="150" cy="120" r="2.5" fill="var(--primary)" />
                  <text x="135" y="140" fill="currentColor" fontSize="9" fontFamily="monospace">GW:EDGE</text>

                  {/* Node 3: Cryptographic Hardware Enclave (Accented) */}
                  <rect x="272" y="72" width="16" height="16" rx="3" stroke="var(--accent)" strokeWidth="1.5" fill="var(--surface)" />
                  <circle cx="280" cy="80" r="2" fill="var(--accent)" />
                  <text x="260" y="65" fill="var(--accent)" fontSize="9" fontFamily="monospace" fontWeight="600">ENCLAVE:A</text>

                  {/* Node 4: Threat Telemetry Probe */}
                  <circle cx="220" cy="180" r="5" stroke="var(--primary)" strokeWidth="1.5" fill="var(--surface)" />
                  <circle cx="220" cy="180" r="2" fill="var(--primary)" />
                  <text x="210" y="200" fill="currentColor" fontSize="9" fontFamily="monospace">PROBE:04</text>

                  {/* Node 5: SCADA Controller */}
                  <circle cx="320" cy="150" r="5" stroke="var(--primary)" strokeWidth="1.5" fill="var(--surface)" />
                  <circle cx="320" cy="150" r="2" fill="var(--primary)" />
                  <text x="305" y="170" fill="currentColor" fontSize="9" fontFamily="monospace">SCADA:09</text>
                </svg>

                {/* Staging & Replacement Notice for Final Authentic Photography */}
                <div className="relative z-10 flex flex-col items-center text-center max-w-[280px] sm:max-w-[320px] p-4 rounded-[var(--radius-md)] bg-surface/90 border border-border shadow-sm">
                  <div className="w-8 h-8 rounded-[var(--radius-md)] bg-primary-wash border border-primary/20 flex items-center justify-center text-primary mb-2.5">
                    <Cpu className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
                  </div>
                  <span className="font-display font-semibold text-xs sm:text-sm text-text-primary">
                    Advanced IoT & Cyber Range Testbed
                  </span>
                  <p className="mt-1 text-[11px] text-text-muted leading-snug">
                    Structured staging placeholder preserving exact 4:3 geometry and coordinate alignment.
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-subtle font-mono text-[10px] text-text-muted border border-border">
                    <span>ASPECT: 4:3</span>
                    <span>·</span>
                    <span>ASSET: 1200×900PX</span>
                  </div>
                </div>
              </div>

              {/* Technical Telemetry Footer Bar */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-surface-subtle/40 text-[10px] font-mono text-text-muted select-none">
                <span>BUS: SPI/CAN/ETHERNET</span>
                <span className="hidden sm:inline">CRYPTO: AES-256-GCM</span>
                <span>TESTBED: SECURE</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
