"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Cpu, Terminal } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { Tilt3D } from "@/components/motion/tilt-3d";

/**
 * Department Introduction — Editorial Monograph & Curricular Blueprint with Designer Motion (Phase 4X)
 *
 * Implements:
 * - Asymmetric 7/5 editorial composition
 * - Academic monograph styling with high-contrast Plus Jakarta Sans display typography
 * - Spring-based scroll entrance choreography
 * - 3D Perspective tilt on Curricular Matrix blueprint
 * - Magnetic CTA button with physics-based hover
 * - 80/15/5 color discipline (neutral surfaces, electric blue accents, restricted cyan telemetry)
 * - Complete WCAG 2.2 AA accessibility and reduced-motion compliance
 */
export function DepartmentIntro() {
  const prefersReduced = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: prefersReduced ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 220, damping: 24 },
    },
  };

  return (
    <section
      aria-labelledby="intro-heading"
      className="w-full py-16 sm:py-20 lg:py-28 bg-background border-b border-border relative overflow-hidden"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start"
        >
          {/* ═══════════════════════════════════════════════════════ */}
          {/* LEFT COLUMN: 7 COLS (EDITORIAL NARRATIVE & THESIS)    */}
          {/* ═══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7">
            {/* Architectural Chapter Eyebrow */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                CHAPTER 01 // FOUNDATIONAL MONOGRAPH
              </span>
            </motion.div>

            {/* Section Heading (Plus Jakarta Sans, H2) */}
            <motion.h2
              id="intro-heading"
              variants={itemVariants}
              className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-[2.6rem] font-bold tracking-tight text-text-primary leading-[1.15]"
            >
              Where Physical-World Computing Converges With Defensive Architecture.
            </motion.h2>

            {/* High-Impact Editorial Thesis Pull-Statement */}
            <motion.div
              variants={itemVariants}
              className="p-5 sm:p-6 rounded-[var(--radius-md)] bg-surface border-l-4 border-l-primary border border-border shadow-sm group hover:border-primary/40 transition-colors"
            >
              <p className="font-body text-sm sm:text-base text-text-primary font-medium leading-relaxed">
                &ldquo;As autonomous sensors, medical instruments, industrial SCADA controllers, and smart utility grids interface directly with societal infrastructure, security can no longer exist as an afterthought software patch. It must be engineered directly into embedded silicon, real-time operating systems, wireless communication stacks, and hardware-rooted cryptographic enclaves.&rdquo;
              </p>
            </motion.div>

            {/* Detailed Body Prose */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl font-body"
            >
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
            </motion.div>

            {/* Action Vector Routing to /about with Magnetic Physics */}
            <motion.div variants={itemVariants} className="pt-2">
              <Magnetic strength={0.25}>
                <Link href="/about" className="inline-block">
                  <Button variant="primary" size="md" className="group">
                    <span>Explore Department History & Facilities</span>
                    <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* RIGHT COLUMN: 5 COLS (CURRICULAR & RESEARCH BLUEPRINT) */}
          {/* ═══════════════════════════════════════════════════════ */}
          <motion.div variants={itemVariants} className="lg:col-span-5 w-full">
            <Tilt3D maxRotation={5} perspective={1000} glareColor="rgba(9, 132, 227, 0.08)">
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
                  <div className="space-y-2 group/facet">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover/facet:scale-125 transition-transform" aria-hidden="true" />
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-text-muted font-medium">
                        01 // SILICON & EMBEDDED COMPUTING
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-sm sm:text-base text-text-primary group-hover/facet:text-primary transition-colors">
                      Silicon to Cloud Edge Computing
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                      Microcontroller architectures, RISC-V firmware development, sensor integration
                      protocols (SPI, I2C, CAN, LoRaWAN), and deterministic edge computation.
                    </p>
                  </div>

                  {/* Facet 02: Cyber Resilience */}
                  <div className="space-y-2 pt-5 border-t border-border/70 group/facet">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover/facet:scale-125 transition-transform" aria-hidden="true" />
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-text-muted font-medium">
                        02 // CYBER RESILIENCE & CRYPTOGRAPHY
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-sm sm:text-base text-text-primary group-hover/facet:text-primary transition-colors">
                      Applied Cryptography & Threat Defense
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                      Hardware Security Modules (HSM), wireless interception defense, secure boot
                      sequences, threat modeling, and defensive cyber range operations.
                    </p>
                  </div>

                  {/* Facet 03: Experiential Praxis */}
                  <div className="space-y-2 pt-5 border-t border-border/70 group/facet">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover/facet:scale-125 transition-transform" aria-hidden="true" />
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-text-muted font-medium">
                        03 // EXPERIENTIAL TESTBEDS
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-sm sm:text-base text-text-primary group-hover/facet:text-primary transition-colors">
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
            </Tilt3D>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
