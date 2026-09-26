import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";

/**
 * Department Introduction Section (design-system.md §12.3 & PRD.md §3.1, §3.2)
 *
 * Implements:
 * - Editorial asymmetric 7/5 grid layout (avoiding generic centered SaaS patterns)
 * - Authoritative institutional copy explaining the IoT & Cyber convergence
 * - Left column: Restrained eyebrow, confident Plus Jakarta Sans H2, and narrative prose
 * - Right column: Unified structural panel detailing curriculum and engineering facets (avoiding 3-card anti-pattern)
 * - 80/15/5 color discipline (neutral surfaces, electric blue accents, restricted cyan telemetry)
 * - Complete Server Component architecture
 */
export function DepartmentIntro() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="w-full py-16 sm:py-20 lg:py-28 bg-background border-b border-border"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* ═══════════════════════════════════════════════════════ */}
          {/* LEFT COLUMN: 7 COLS (EDITORIAL NARRATIVE)             */}
          {/* ═══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                01 // DEPARTMENT PROFILE
              </span>
            </div>

            {/* Section Heading (H2 in Plus Jakarta Sans) */}
            <h2
              id="intro-heading"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary leading-tight max-w-2xl"
            >
              Where Physical-World Computing Converges With Defensive Architecture
            </h2>

            {/* Lead Narrative (Inter, Body-lg) */}
            <p className="font-body text-base lg:text-lg text-text-primary font-medium leading-relaxed max-w-2xl">
              The Department of IoT & Cyber Security was established to address the defining
              engineering challenge of our era: the profound interdependence between connected
              hardware networks and cryptographic defense mechanisms.
            </p>

            {/* Detailed Body Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
              <p>
                As autonomous sensors, medical instruments, industrial SCADA controllers, and smart
                utility grids interface directly with societal infrastructure, security can no
                longer exist as an afterthought software patch. It must be engineered directly into
                embedded silicon, real-time operating systems, wireless communication stacks, and
                hardware-rooted cryptographic enclaves.
              </p>
              <p>
                Scholars in the department encounter an experiential, laboratory-driven curriculum.
                Rather than relying solely on abstract software models, education and inquiry
                unfold through hands-on microcontroller testbeds, software-defined radio analysis,
                ethical penetration simulations, and faculty-mentored research aligned with
                national defense and industrial cyber standards.
              </p>
            </div>

            {/* Contextual Link to /about */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors focus-visible:outline-2 focus-visible:outline-ring rounded-[var(--radius-sm)]"
              >
                <span>Explore Full Department History & Facilities</span>
                <ArrowRight className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* RIGHT COLUMN: 5 COLS (STRUCTURED ARCHITECTURE PANEL)  */}
          {/* ═══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-[var(--radius-lg)] bg-surface border border-border shadow-sm p-6 sm:p-8 space-y-6">
              {/* Technical Dossier Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border text-[11px] font-mono text-text-muted select-none">
                <span className="font-semibold text-text-primary uppercase tracking-wider">
                  Academic Architecture
                </span>
                <span className="text-primary font-medium">CURRICULAR MATRIX</span>
              </div>

              {/* Three Asymmetric Facets of Instruction */}
              <div className="space-y-6">
                {/* Facet 01 */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-text-muted font-medium">
                      01 // EMBEDDED SYSTEMS
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-sm sm:text-base text-text-primary">
                    Silicon to Cloud Edge Computing
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                    Microcontroller architectures, RISC-V firmware development, sensor integration
                    protocols (SPI, I2C, CAN, LoRaWAN), and deterministic edge computation.
                  </p>
                </div>

                {/* Facet 02 */}
                <div className="space-y-1.5 pt-5 border-t border-border/70">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-text-muted font-medium">
                      02 // CYBER RESILIENCE
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-sm sm:text-base text-text-primary">
                    Applied Cryptography & Threat Defense
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                    Hardware Security Modules (HSM), wireless interception defense, secure boot
                    sequences, threat modeling, and defensive cyber range operations.
                  </p>
                </div>

                {/* Facet 03 */}
                <div className="space-y-1.5 pt-5 border-t border-border/70">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-text-muted font-medium">
                      03 // EXPERIENTIAL PRAXIS
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-sm sm:text-base text-text-primary">
                    Laboratory-Driven Engineering
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                    Dedicated cyber range testbeds, industrial SCADA setups, collaborative
                    hackathons, and faculty mentorship bridging academic rigor with industry standards.
                  </p>
                </div>
              </div>

              {/* Bottom Credential Verification Strip */}
              <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-text-muted">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[1.5] text-primary" aria-hidden="true" />
                  <span className="font-medium text-text-primary">Outcome-Based Framework</span>
                </div>
                <span className="font-mono text-[11px] text-primary font-medium">NBA TIER-1</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
