"use client";

import React, { useState } from "react";

/**
 * Department of IoT & Cyber Security — Official Landing Page
 * Powered by Kage Full-Document WebGL + Three.js Architectural Engine
 */
export default function HomePage() {
  const [source, setSource] = useState<"/department.html" | "/landing-pages/kage.html">("/department.html");

  return (
    <main className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#070b0e] select-none">
      {/* Full-Frame Three.js + WebGL Interactive Document Host */}
      <iframe
        src={source}
        title="Department of IoT & Cyber Security"
        className="w-full h-full border-0 m-0 p-0 block"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />

      {/* Floating System Architecture Switcher (Discrete bottom-right) */}
      <aside
        aria-label="Engine Mode Switcher"
        className="fixed bottom-3 right-4 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#070b0e]/85 backdrop-blur-md border border-[rgba(9,132,227,0.35)] shadow-xl text-[11px] font-mono text-[#cad3dc]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#00cec9] animate-pulse" aria-hidden="true" />
        <span className="text-[#7a8996]">ENGINE:</span>
        <button
          type="button"
          onClick={() => setSource("/department.html")}
          className={`px-2 py-0.5 rounded transition-colors ${
            source === "/department.html"
              ? "bg-[#0984e3] text-white font-semibold shadow-sm"
              : "text-[#cad3dc] hover:text-white"
          }`}
        >
          DEPT 3D
        </button>
        <span className="text-[rgba(223,231,224,0.15)]">|</span>
        <button
          type="button"
          onClick={() => setSource("/landing-pages/kage.html")}
          className={`px-2 py-0.5 rounded transition-colors ${
            source === "/landing-pages/kage.html"
              ? "bg-[#0984e3] text-white font-semibold shadow-sm"
              : "text-[#cad3dc] hover:text-white"
          }`}
        >
          KAGE SOURCE
        </button>
      </aside>
    </main>
  );
}
