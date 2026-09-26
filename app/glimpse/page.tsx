import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Department Glimpse",
  description: "Advanced infrastructure, specialized laboratories, and student learning environments.",
};

export default function GlimpsePage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-8">
      <Container>
        <Breadcrumbs items={[{ label: "Department Glimpse" }]} />
        <div className="pt-4">
          <SectionHeader
            eyebrow="Facilities & Infrastructure"
            title="Department Glimpse"
            description="Explore our specialized hardware security testbeds, embedded IoT sensor labs, cyber range simulation facilities, and high-performance computing clusters."
            action={<Badge variant="primary">Phase 3 Shell Route</Badge>}
          />
        </div>
        <div className="mt-8 p-6 rounded-[var(--radius-lg)] bg-surface border border-border text-sm text-text-muted">
          <p>
            Route structurally resolved. Verified lab facility walkthroughs, equipment directories, and photo galleries scheduled for Phase 4.
          </p>
        </div>
      </Container>
    </div>
  );
}
