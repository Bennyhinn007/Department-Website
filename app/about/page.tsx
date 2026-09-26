import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "About the Department",
  description: "Genesis, facilities, and academic ecosystem of the Department of IoT & Cyber Security.",
};

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-8">
      <Container>
        <Breadcrumbs items={[{ label: "About" }]} />
        <div className="pt-4">
          <SectionHeader
            eyebrow="Institutional Overview"
            title="About the Department"
            description="Established to advance frontier engineering education, foundational research, and ethical innovation across connected embedded ecosystems and cryptographic security infrastructures."
            action={<Badge variant="primary">Phase 3 Shell Route</Badge>}
          />
        </div>
        <div className="mt-8 p-6 rounded-[var(--radius-lg)] bg-surface border border-border text-sm text-text-muted">
          <p>
            Route structurally resolved. Departmental overview, lab profiles, and administrative history scheduled for Phase 4.
          </p>
        </div>
      </Container>
    </div>
  );
}
