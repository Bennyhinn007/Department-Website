"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  AnimatePresence,
} from "motion/react";
import {
  Cpu,
  ShieldCheck,
  Radio,
  Network,
  Lock,
  Terminal,
  Activity,
  Zap,
} from "lucide-react";

interface NodeData {
  id: string;
  label: string;
  sublabel: string;
  category: "edge" | "crypto" | "defense" | "network";
  status: "active" | "nominal" | "verified";
  specs: string[];
}

const NODES: NodeData[] = [
  {
    id: "edge-core",
    label: "ARM Cortex-M55 Core",
    sublabel: "Physical Edge Silicon",
    category: "edge",
    status: "active",
    specs: ["ARMv8.1-M Architecture", "TrustZone Security Extension", "500μs RTOS Interrupt Latency"],
  },
  {
    id: "crypto-engine",
    label: "Post-Quantum Enclave",
    sublabel: "Hardware Cryptography",
    category: "crypto",
    status: "verified",
    specs: ["ML-KEM / Kyber-768 Engine", "Hardware AES-256-GCM Engine", "Side-Channel DPA Resistance"],
  },
  {
    id: "bus-switch",
    label: "Zero-Trust CAN-FD Bridge",
    sublabel: "Automotive / SCADA Bus",
    category: "network",
    status: "nominal",
    specs: ["Deterministic Real-Time Sync", "MACsec Bus Authentication", "Fault-Tolerant Redundancy"],
  },
  {
    id: "cyber-telemetry",
    label: "Telemetry Threat Sensor",
    sublabel: "Real-Time Anomaly Engine",
    category: "defense",
    status: "active",
    specs: ["Sub-millisecond Packet Audit", "eBPF Kernel Probes", "MITRE ATT&CK Matrix Correlation"],
  },
];

export function Hero3DVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [activeNode, setActiveNode] = useState<NodeData>(NODES[1]); // default to crypto-engine

  // Smooth mouse coordinates for 3D stage rotation & multi-plane parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 22, mass: 0.1 };
  const smoothRotateX = useSpring(mouseY, springConfig);
  const smoothRotateY = useSpring(mouseX, springConfig);

  // Layer parallax springs (different depths)
  const layer1X = useSpring(useMotionValue(0), springConfig);
  const layer1Y = useSpring(useMotionValue(0), springConfig);

  const layer2X = useSpring(useMotionValue(0), springConfig);
  const layer2Y = useSpring(useMotionValue(0), springConfig);

  const layer3X = useSpring(useMotionValue(0), springConfig);
  const layer3Y = useSpring(useMotionValue(0), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1; // -1 to 1
    const normY = (y / rect.height) * 2 - 1; // -1 to 1

    // Subtly tilt stage (max 6 degrees)
    mouseX.set(normX * 5);
    mouseY.set(-normY * 5);

    // Dynamic layer displacement (Multiplane parallax)
    layer1X.set(normX * 8);
    layer1Y.set(normY * 8);

    layer2X.set(normX * 16);
    layer2Y.set(normY * 16);

    layer3X.set(normX * 26);
    layer3Y.set(normY * 26);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    layer1X.set(0);
    layer1Y.set(0);
    layer2X.set(0);
    layer2Y.set(0);
    layer3X.set(0);
    layer3Y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-xl bg-[var(--surface-sunken)] border border-border/80 p-6 md:p-8 overflow-hidden shadow-2xl transition-colors"
      style={{ perspective: "1200px" }}
    >
      {/* Precision Structural Coordinate Header */}
      <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" aria-hidden="true" />
          <span className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
            Interactive Architecture Model // 3D Spatial Bus
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-muted-foreground/80 px-2 py-0.5 rounded bg-muted/60 border border-border/40 hidden sm:inline-block">
            DEPTH: MULTIPLANE 3D
          </span>
          <span className="font-mono text-[11px] text-[var(--primary)] font-medium">
            4 ACTIVE SUBSYSTEMS
          </span>
        </div>
      </div>

      {/* 3D PERSPECTIVE STAGE */}
      <motion.div
        style={{
          rotateX: prefersReduced ? 0 : smoothRotateX,
          rotateY: prefersReduced ? 0 : smoothRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full min-h-[380px] md:min-h-[440px] flex flex-col justify-between"
      >
        {/* LAYER 0 (translateZ: 0px): Isometric Architectural Grid & Circuit Traces */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{ transform: "translateZ(0px)" }}
          aria-hidden="true"
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-border" />
                <circle cx="0" cy="0" r="1.5" fill="currentColor" className="text-border" />
              </pattern>
              <linearGradient id="busGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#archGrid)" />

            {/* Hardware Interconnect Bus Lines */}
            <path
              d="M 60 180 L 220 180 L 220 100 L 480 100 L 480 260 L 640 260"
              fill="none"
              stroke="url(#busGradient)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 120 280 L 220 280 L 320 200 L 520 200 L 580 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[var(--primary)]/30"
            />
          </svg>
        </div>

        {/* LAYER 1 (translateZ: 35px): Multi-Node Interactive Array */}
        <motion.div
          style={{
            x: prefersReduced ? 0 : layer1X,
            y: prefersReduced ? 0 : layer1Y,
            transform: "translateZ(35px)",
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 relative z-10"
        >
          {NODES.map((node) => {
            const isSelected = activeNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node)}
                className={`group relative text-left p-3.5 rounded-lg border transition-all duration-200 select-none ${
                  isSelected
                    ? "bg-card border-[var(--primary)] shadow-md ring-1 ring-[var(--primary)]/30"
                    : "bg-card/70 border-border/60 hover:border-border hover:bg-card/90"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-7 h-7 rounded flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-[var(--primary)] text-white"
                        : "bg-muted text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {node.category === "edge" && <Cpu className="w-4 h-4" />}
                    {node.category === "crypto" && <Lock className="w-4 h-4" />}
                    {node.category === "network" && <Radio className="w-4 h-4" />}
                    {node.category === "defense" && <ShieldCheck className="w-4 h-4" />}
                  </div>

                  <span
                    className={`font-mono text-[9px] px-1.5 py-0.5 rounded uppercase font-semibold ${
                      node.status === "verified"
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                        : "bg-[var(--primary-wash)] text-[var(--primary)] border border-[var(--primary)]/20"
                    }`}
                  >
                    {node.status}
                  </span>
                </div>

                <div className="font-heading font-semibold text-[13px] text-foreground leading-tight line-clamp-1">
                  {node.label}
                </div>
                <div className="font-mono text-[10px] text-muted-foreground mt-0.5">
                  {node.sublabel}
                </div>

                {isSelected && (
                  <motion.div
                    layoutId="node-active-indicator"
                    className="absolute -bottom-px left-3 right-3 h-[2px] bg-[var(--primary)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* LAYER 2 (translateZ: 65px): Central 3D Cryptographic Enclave Wireframe */}
        <motion.div
          style={{
            x: prefersReduced ? 0 : layer2X,
            y: prefersReduced ? 0 : layer2Y,
            transform: "translateZ(65px)",
          }}
          className="relative my-4 flex-1 flex items-center justify-center"
        >
          <div className="relative w-full max-w-[480px] h-[180px] sm:h-[210px] flex items-center justify-center">
            {/* Ambient Rotational Geometric Cage */}
            <motion.div
              animate={prefersReduced ? {} : { rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-dashed border-[var(--primary)]/25 animate-spin-slow" />
              <div className="absolute w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-[var(--accent)]/30" />
            </motion.div>

            {/* Central Cryptographic Core Pod */}
            <div className="relative z-20 flex flex-col items-center text-center p-5 rounded-xl bg-card/95 border border-[var(--primary)]/40 shadow-xl backdrop-blur-sm max-w-sm mx-auto">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)] mb-2.5 shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] font-semibold mb-1">
                SECURE HARDWARE ENCLAVE
              </div>
              <div className="font-heading font-bold text-[16px] text-foreground mb-1">
                {activeNode.label}
              </div>
              <p className="font-body text-[12px] text-muted-foreground max-w-[260px] line-clamp-2">
                Active real-time verification running across physical IoT endpoints and network boundaries.
              </p>

              {/* Dynamic Live Signal Stream */}
              <div className="flex items-center gap-2 mt-3 font-mono text-[10px] text-muted-foreground/90">
                <Activity className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>PULSE: 0.14ms</span>
                <span className="text-border">|</span>
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>FAULT IMMUNE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* LAYER 3 (translateZ: 95px): Telemetry Details & Architectural Verification Card */}
        <motion.div
          style={{
            x: prefersReduced ? 0 : layer3X,
            y: prefersReduced ? 0 : layer3Y,
            transform: "translateZ(95px)",
          }}
          className="relative z-20 rounded-lg bg-card/90 border border-border p-4 shadow-lg backdrop-blur-md"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[var(--primary)]" />
              <span className="font-mono text-[11px] font-semibold text-foreground uppercase tracking-wide">
                Subsystem Specification // {activeNode.sublabel}
              </span>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">
              STANDARDS: ISO/IEC 27001 &bull; NIST 800-53
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {activeNode.specs.map((spec, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 bg-muted/40 border border-border/30 rounded px-2.5 py-1.5"
              >
                <span className="font-mono text-[10px] text-[var(--primary)] font-bold">
                  0{idx + 1}
                </span>
                <span className="font-body text-[12px] text-foreground/90 font-medium leading-tight">
                  {spec}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
