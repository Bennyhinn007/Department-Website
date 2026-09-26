"use client";

import React, { useState } from "react";
import { Scene, DepartmentScene } from "@/components/Scene";

export default function HomePage() {
  const [activeEngine, setActiveEngine] = useState<"department" | "kage">("department");

  return (
    <main className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#05070a] select-none">
      {/* Active 3D WebGL World */}
      {activeEngine === "department" ? <DepartmentScene /> : <Scene />}

      {/* Mode Switcher: Department 3D <-> Kage Source Experience */}
      <aside
        aria-label="Engine Mode Switcher"
        className="fixed bottom-3 right-4 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#070b0e]/90 backdrop-blur-md border border-[rgba(9,132,227,0.35)] shadow-2xl text-[11px] font-mono text-[#cad3dc]"
      >
        <span
          className={`w-2 h-2 rounded-full ${
            activeEngine === "department" ? "bg-[#00cec9]" : "bg-[#e0231c]"
          } animate-pulse`}
          aria-hidden="true"
        />
        <span className="text-[#7a8996]">ENGINE:</span>
        <button
          type="button"
          onClick={() => setActiveEngine("department")}
          className={`px-2.5 py-0.5 rounded transition-all ${
            activeEngine === "department"
              ? "bg-[#0984e3] text-white font-semibold shadow-md"
              : "text-[#cad3dc] hover:text-white"
          }`}
        >
          DEPT 3D
        </button>
        <span className="text-[rgba(223,231,224,0.15)]">|</span>
        <button
          type="button"
          onClick={() => setActiveEngine("kage")}
          className={`px-2.5 py-0.5 rounded transition-all ${
            activeEngine === "kage"
              ? "bg-[#e0231c] text-white font-semibold shadow-md"
              : "text-[#cad3dc] hover:text-white"
          }`}
        >
          KAGE TEMPLE
        </button>
      </aside>
    </main>
  );
}
