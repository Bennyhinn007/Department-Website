import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Cpu, Terminal } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

/**
 * Department Introduction — Editorial Monograph & Curricular Blueprint (Phase 4X)
 *
 * Implements:
 * - Asymmetric 7/5 editorial composition (avoiding generic centered SaaS patterns)
 * - Academic monograph styling with high-contrast Plus Jakarta Sans display typography
 * - Authoritative institutional copy explaining the physical-world IoT and cyber convergence
 * - Right-column Curricular Matrix detailing the 3 core research facets
 * - 80/15/5 color discipline (neutral surfaces, electric blue accents, restricted cyan telemetry)
 * - 100% Server Component with zero client overhead
 */
export function DepartmentIntro() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="w-full py-16 sm:py-20 lg:py-28 bg-background border-b border-border relative overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
          {/* ═══════════════════════════════════════════════════════ */}
          {/* LEFT COLUMN: 7 COLS (EDITORIAL NARRATIVE & THESIS)    */}
          {/* ═══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7">
            {/* Architectural Chapter Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                CHAPTER 01 // FOUNDATIONAL MONOGRAPH
              </span>
            </div>

            {/* Section Heading (Plus Jakarta Sans, H2) */}
            <h2
              id="intro-heading"
              className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-[2.6rem] font-bold tracking-tight text-text-primary leading-[1.15]"
            >
              Where Physical-World Computing Converges With Defensive Architecture.
            </h2>

            {/* High-Impact Editorial Thesis Pull-Statement (Inter, Medium) */}
            <div className="p-5 sm:p-6 rounded-[var(--radius-md)] bg-surface border-l-4 border-l-primary border border-border shadow-sm">
              <p className="font-body text-sm sm:text-base text-text-primary font-medium leading-relaxed">
                &ldquo;As autonomous sensors, medical instruments, industrial SCADA controllers, and smart utility grids interface directly with societal infrastructure, security can no longer exist as an afterthought software patch. It must be engineered directly into embedded silicon, real-time operating systems, wireless communication stacks, and hardware-rooted cryptographic enclaves.&rdquo;
              </p>
            </div>

            {/* Detailed Body Prose */}
            <div className="space-y-4 text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl font-body">
              <p>
                The Department of IoT & Cyber Security was established to address the defining engineering
                challenge of our era: the profound interdependence between connected hardware networks and
                cryptographic defense mechanisms. Rather than isolating hardware and security into disconnected
                disciplines, our pedagogical paradigm treats them as indivisible facets of modern computing.
              </p>
              <p>
                Scholars in the department encounter an experiential, laboratory-driven curriculum.
                Rather than relying solely on abstract software models, inquiry unfolds through hands-on
                microcontroller testbeds, software-defined radio analysis, ethical penetration simulations,
                and faculty-mentored research aligned with national defense and industrial cyber standards.
              </p>
            </div>

            {/* Action Vector Routing to /about */}
            <div className="pt-2">
              <Link href="/about" className="inline-block">
                <Button variant="primary" size="md">
                  <span>Explore Department History & Facilities</span>
                  <ArrowRight className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* RIGHT COLUMN: 5 COLS (CURRICULAR & RESEARCH BLUEPRINT) */}
          {/* ═══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-[var(--radius-lg)] bg-surface border border-border shadow-sm p-6 sm:p-8 space-y-6">
              {/* Dossier Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border text-[11px] font-mono text-text-muted select-none">
                <span className="font-semibold text-text-primary uppercase tracking-wider">
                  CURRICULAR MATRIX
                </span>
                <span className="text-primary font-medium">NBA TIER-1 ALIGNED</span>
              </div>

              {/* Three Asymmetric Facets of Academic Instruction */}
              <div className="space-y-6">
                {/* Facet 01: Embedded Silicon */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-text-muted font-medium">
                      01 // SILICON & EMBEDDED COMPUTING
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

                {/* Facet 02: Cyber Resilience */}
                <div className="space-y-2 pt-5 border-t border-border/70">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-text-muted font-medium">
                      02 // CYBER RESILIENCE & CRYPTOGRAPHY
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

                {/* Facet 03: Experiential Praxis */}
                <div className="space-y-2 pt-5 border-t border-border/70">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-text-muted font-medium">
                      03 // EXPERIENTIAL TESTBEDS
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
                  <CheckCircle2 className="w-4 h-4 stroke-[1.5] text-primary" aria-hidden="true" />
                  <span className="font-medium text-text-primary">Outcome-Based Framework</span>
                </div>
                <span className="font-mono text-[11px] text-primary font-semibold">NBA TIER-1</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
