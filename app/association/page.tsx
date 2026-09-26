import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Professional Associations",
  description: "Student chapters, industry partnerships, and professional technical societies.",
};

export default function AssociationPage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-8">
      <Container>
        <Breadcrumbs items={[{ label: "Associations" }]} />
        <div className="pt-4">
          <SectionHeader
            eyebrow="Student Chapters & MoUs"
            title="Professional Associations"
            description="Active institutional chapters including IEEE IoT & Cyber Special Interest Groups, ACM Student Chapter, OWASP Chapter, and industry partner MoUs."
            action={<Badge variant="primary">Phase 3 Shell Route</Badge>}
          />
        </div>
        <div className="mt-8 p-6 rounded-[var(--radius-lg)] bg-surface border border-border text-sm text-text-muted">
          <p>
            Route structurally resolved. Chapter charters, student office-bearers, and industry MoU frameworks scheduled for Phase 4.
          </p>
        </div>
      </Container>
    </div>
  );
}
