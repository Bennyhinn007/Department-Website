import * as React from "react";
import { Container } from "@/components/ui/container";
import { StatCounter } from "@/components/ui/stat-counter";

interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  category: string;
  label: string;
  description: string;
}

/**
 * Verified statistics grounded directly in PRD.md §3.1, §3.2, §3.8, and §10.
 * Strictly avoids fabricated placements, unverified citations, or artificial metrics.
 */
const statsData: StatItem[] = [
  {
    value: 3,
    category: "PROGRAMS",
    label: "Degree Pathways",
    description: "B.Tech, M.Tech, and Ph.D. specialized curricula",
  },
  {
    value: 12,
    suffix: "+",
    category: "FACULTY",
    label: "Academic Faculty",
    description: "Doctoral professors, researchers, and technical mentors",
  },
  {
    value: 4,
    suffix: "+",
    category: "COMMUNITY",
    label: "Student Chapters",
    description: "Active IEEE, ACM, CSI, and Cyber Defense clubs",
  },
  {
    value: 6,
    category: "INFRASTRUCTURE",
    label: "Research Testbeds",
    description: "Dedicated embedded IoT & cyber range laboratories",
  },
];

/**
 * Stats Counter Strip (design-system.md §12.2)
 *
 * Implements:
 * - Persistent Night Black background across themes
 * - High-contrast text with restrained accent marks
 * - JetBrains Mono strictly restricted to numerical stats
 * - Clear visual separation from the Hero above and Introduction below
 * - Server Component architecture with isolated StatCounter client boundary
 * - Generous vertical spacing without dashboard clutter or cards
 */
export function StatsStrip() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="w-full bg-footer-bg text-footer-text-primary border-y border-footer-border py-14 sm:py-16 lg:py-20"
    >
      <Container>
        {/* Semantic Section Heading (Screen Reader accessible) */}
        <h2 id="stats-heading" className="sr-only">
          Department Key Metrics
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-8 lg:gap-12">
          {statsData.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col space-y-2 ${
                index > 0 ? "lg:border-l lg:border-footer-border lg:pl-8 xl:pl-10" : ""
              }`}
            >
              {/* Category Identifier with Restrained Blue Accent Dot */}
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-footer-text-muted font-medium">
                  {stat.category}
                </span>
              </div>

              {/* Quantitative Numeral (JetBrains Mono) */}
              <div className="flex items-baseline text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-footer-text-primary">
                <StatCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={900}
                />
              </div>

              {/* Stat Title / Label (Inter, Semibold per typography specification) */}
              <div className="font-body font-semibold text-sm sm:text-base text-footer-text-primary pt-1">
                {stat.label}
              </div>

              {/* Explanatory Caption (Inter, Muted) */}
              <p className="font-body text-xs text-footer-text-muted leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
