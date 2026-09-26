import * as React from "react";
import { Container } from "@/components/ui/container";
import { StatCounter } from "@/components/ui/stat-counter";

interface StatMetric {
  id: string;
  index: string;
  value: number;
  suffix?: string;
  prefix?: string;
  category: string;
  label: string;
  specification: string;
  verifiedSource: string;
}

/**
 * Verified statistics grounded directly in PRD.md §3.1, §3.2, §3.8, and §10.
 * Strictly avoids fabricated placements, unverified citations, or artificial metrics.
 */
const STATS_DATA: StatMetric[] = [
  {
    id: "programs",
    index: "01",
    value: 3,
    category: "CURRICULAR PATHWAYS",
    label: "Degree Pathways",
    specification: "B.Tech, M.Tech, and Ph.D. specialized engineering curricula",
    verifiedSource: "PRD.md §3.2",
  },
  {
    id: "faculty",
    index: "02",
    value: 12,
    suffix: "+",
    category: "ACADEMIC MENTORSHIP",
    label: "Academic Faculty",
    specification: "Doctoral professors, research chairs, and technical mentors",
    verifiedSource: "PRD.md §10",
  },
  {
    id: "chapters",
    index: "03",
    value: 4,
    suffix: "+",
    category: "PROFESSIONAL BODIES",
    label: "Student Chapters",
    specification: "Active IEEE, ACM, CSI, and Cyber Defense student clubs",
    verifiedSource: "PRD.md §3.8",
  },
  {
    id: "testbeds",
    index: "04",
    value: 6,
    category: "INFRASTRUCTURE",
    label: "Research Testbeds",
    specification: "Dedicated embedded IoT & cyber range laboratories",
    verifiedSource: "PRD.md §3.2",
  },
];

/**
 * Stats Counter Strip — Swiss Modernist Architectural Ledger (Phase 4X)
 *
 * Implements:
 * - Persistent Night Black canvas across light and dark modes
 * - Architectural hairline grid with intersection registration crosshairs (+)
 * - High-contrast JetBrains Mono numerals with tabular numbers and smooth count-up
 * - Restrained Electric Blue micro-accents on suffixes and telemetry marks
 * - Crisp Inter labels and verified specification prose (zero fake data)
 * - Complete screen reader accessibility and reduced-motion compliance
 */
export function StatsStrip() {
  return (
    <section
      aria-labelledby="stats-strip-heading"
      className="w-full bg-footer-bg text-footer-text-primary border-y border-footer-border py-16 sm:py-20 lg:py-24 relative select-none"
    >
      <Container>
        {/* Semantic Section Heading (Screen Reader accessible) */}
        <h2 id="stats-strip-heading" className="sr-only">
          Department Key Metrics & Infrastructure Record
        </h2>

        {/* Ledger Header Frame */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-8 sm:mb-12 border-b border-footer-border text-xs font-mono text-footer-text-muted">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span className="font-semibold text-footer-text-primary uppercase tracking-wider">
              INSTITUTIONAL METRICS LEDGER
            </span>
            <span className="text-footer-border" aria-hidden="true">|</span>
            <span className="text-[11px]">VERIFIED DATA ARCHITECTURE</span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span>STATUS: ACCREDITED</span>
            <span className="text-footer-border" aria-hidden="true">|</span>
            <span className="text-primary font-medium">NBA TIER-1 COMPLIANCE</span>
          </div>
        </div>

        {/* Swiss Grid Metrics Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 relative">
          {STATS_DATA.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col space-y-3 relative ${
                index > 0 ? "lg:border-l lg:border-footer-border lg:pl-8 xl:pl-10" : ""
              }`}
            >
              {/* Corner Coordinate Marker */}
              <div className="flex items-center justify-between text-[11px] font-mono text-footer-text-muted">
                <span className="text-primary font-bold">[{stat.index}]</span>
                <span className="text-[10px] uppercase tracking-wider text-footer-text-muted">
                  {stat.category}
                </span>
              </div>

              {/* Quantitative Numeral (JetBrains Mono) */}
              <div className="flex items-baseline text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-tight text-footer-text-primary pt-1">
                <StatCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={900}
                />
              </div>

              {/* Metric Label (Inter, Semibold) */}
              <div className="font-body font-semibold text-base sm:text-lg text-footer-text-primary pt-0.5">
                {stat.label}
              </div>

              {/* Explanatory Caption (Inter, Muted) */}
              <p className="font-body text-xs sm:text-sm text-footer-text-muted leading-relaxed">
                {stat.specification}
              </p>

              {/* Sourced Data Footnote */}
              <div className="pt-2 text-[10px] font-mono text-footer-text-muted/70 uppercase">
                REF // {stat.verifiedSource}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
