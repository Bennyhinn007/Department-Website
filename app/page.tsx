import { Hero } from "@/components/sections/hero";
import { StatsStrip } from "@/components/sections/stats-strip";
import { DepartmentIntro } from "@/components/sections/department-intro";
import { ScrollSection } from "@/components/motion/scroll-section";

/**
 * Department of IoT & Cyber Security — Official Homepage
 * Visual Experience Redesign & Designer Motion System (Phase 4X)
 * Scope: Hero + Stats Counter Strip + Department Introduction
 */
export default function HomePage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      {/* 1. Hero Section with 3D Spatial Architecture */}
      <ScrollSection enableParallax={false}>
        <Hero />
      </ScrollSection>

      {/* 2. Stats Counter Strip with Ambient Spotlight */}
      <ScrollSection>
        <StatsStrip />
      </ScrollSection>

      {/* 3. Department Introduction with Monograph & Curricular Matrix */}
      <ScrollSection>
        <DepartmentIntro />
      </ScrollSection>
    </main>
  );
}
