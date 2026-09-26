import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Mission Pillars",
  description: "Pedagogy, ethics, and experiential engineering pillars of the department.",
};

export default function MissionPage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-8">
      <Container>
        <Breadcrumbs items={[{ label: "About", href: "/about" }, { label: "Mission" }]} />
        <div className="pt-4">
          <SectionHeader
            eyebrow="Core Directives"
            title="Mission Pillars"
            description="Delivering rigorous outcome-based curricula, world-class experiential laboratories, and multidisciplinary research collaborations with leading industry and defense institutions."
            action={<Badge variant="primary">Phase 3 Shell Route</Badge>}
          />
        </div>
        <div className="mt-8 p-6 rounded-[var(--radius-lg)] bg-surface border border-border text-sm text-text-muted">
          <p>
            Route structurally resolved. Mission statements, program educational objectives (PEOs), and outcome maps scheduled for Phase 4.
          </p>
        </div>
      </Container>
    </div>
  );
}
