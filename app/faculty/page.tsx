import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Faculty & Staff Directory",
  description: "Distinguished scholars, researchers, and mentors of the department.",
};

export default function FacultyPage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-8">
      <Container>
        <Breadcrumbs items={[{ label: "Faculty Directory" }]} />
        <div className="pt-4">
          <SectionHeader
            eyebrow="Academic Council"
            title="Faculty & Staff Directory"
            description="Our faculty comprises doctorate-holding academicians, industry fellows, and researchers working across embedded cryptography, SCADA security, and edge intelligence."
            action={<Badge variant="primary">Phase 3 Shell Route</Badge>}
          />
        </div>
        <div className="mt-8 p-6 rounded-[var(--radius-lg)] bg-surface border border-border text-sm text-text-muted">
          <p>
            Route structurally resolved. Verified faculty profile cards, research publications, and contact dossiers scheduled for Phase 4.
          </p>
        </div>
      </Container>
    </div>
  );
}
