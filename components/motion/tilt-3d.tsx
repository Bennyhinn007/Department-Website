"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number; // Maximum tilt angle in degrees (default 8)
  perspective?: number; // Perspective distance (default 1000px)
  glare?: boolean; // Whether to render dynamic specular spotlight
  glareColor?: string;
}

export function Tilt3D({
  children,
  className = "",
  maxRotation = 8,
  perspective = 1000,
  glare = true,
  glareColor = "rgba(9, 132, 227, 0.08)",
}: Tilt3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const [isHovered, setIsHovered] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);

  const springConfig = { stiffness: 240, damping: 20, mass: 0.1 };
  const rotateX = useSpring(rawRotateX, springConfig);
  const rotateY = useSpring(rawRotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    rawRotateX.set(-normY * maxRotation);
    rawRotateY.set(normX * maxRotation);

    if (glare) {
      setGlarePosition({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
      });
    }
  };

  const handleMouseEnter = () => {
    if (prefersReduced) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rawRotateX.set(0);
    rawRotateY.set(0);
  };

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: `${perspective}px` }}
      className={`relative ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative"
      >
        {children}

        {glare && isHovered && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30"
            style={{
              background: `radial-gradient(circle 280px at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor}, transparent 80%)`,
              mixBlendMode: "screen",
            }}
            aria-hidden="true"
          />
        )}
      </motion.div>
    </div>
  );
}
