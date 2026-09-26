import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Department Achievements",
  description: "Research grants, national hackathon podiums, patents, and scholar distinctions.",
};

export default function AchievementsPage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-8">
      <Container>
        <Breadcrumbs items={[{ label: "Achievements" }]} />
        <div className="pt-4">
          <SectionHeader
            eyebrow="Honors & Milestones"
            title="Department Achievements"
            description="Documenting our competitive cyber defense victories, student innovations, government research grants, and international patent filings."
            action={<Badge variant="primary">Phase 3 Shell Route</Badge>}
          />
        </div>
        <div className="mt-8 p-6 rounded-[var(--radius-lg)] bg-surface border border-border text-sm text-text-muted">
          <p>
            Route structurally resolved. Verified achievement dossiers, patent registries, and contest honors scheduled for Phase 4.
          </p>
        </div>
      </Container>
    </div>
  );
}
