"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  enableParallax?: boolean;
}

/**
 * Editorial Scroll Section Wrapper
 * Adds subtle scale/opacity deceleration as sections scroll past viewport,
 * creating an Awwwards-style architectural stacking depth.
 */
export function ScrollSection({
  children,
  className = "",
  enableParallax = true,
}: ScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle entry and exit transformations
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.985, 1, 1, 0.985]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.92, 1, 1, 0.92]);

  if (prefersReduced || !enableParallax) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={containerRef}
      style={{
        scale,
        opacity,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
