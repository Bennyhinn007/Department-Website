"use client";

import React from "react";
import { KageLandingPage } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import { LandingPageFrame } from "@/src/shaders/landing-pages/LandingPageFrame";

/**
 * Exact Scene component from the ThreeUI prompt specification:
 * Component: KageLandingPage
 * Runtime: Full HTML + DOM/CSS + Three.js
 * Source revision: SHA-256 c8e06b90397a
 */
export function Scene() {
  return (
    <div className="shader-frame">
      <KageLandingPage
        headingFont="onest"
        bodyFont="onest"
        headingWeight="400"
        bodyWeight="300"
        primaryColor="#e0231c"
        headingSize={46}
        bodySize={17}
        headingLetterSpacing={-0.012}
      />
    </div>
  );
}

/**
 * Department of IoT & Cyber Security — Official 3D Experience
 * Preserves 100% of Kage's WebGL physical world, camera choreography, and lighting
 * populated with authentic Department programs, faculty, labs, and research testbeds.
 */
export function DepartmentScene() {
  return (
    <div className="shader-frame">
      <LandingPageFrame
        title="Department of IoT & Cyber Security — National Institute of Engineering"
        sourceUrl="/department.html"
      />
    </div>
  );
}
