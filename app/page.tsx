import { Hero } from "@/components/sections/hero";
import { StatsStrip } from "@/components/sections/stats-strip";
import { DepartmentIntro } from "@/components/sections/department-intro";

/**
 * Department of IoT & Cyber Security — Official Homepage
 * Phase 4B: Hero + Stats Counter Strip + Department Introduction
 */
export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Stats Counter Strip */}
      <StatsStrip />

      {/* 3. Department Introduction */}
      <DepartmentIntro />
    </>
  );
}
