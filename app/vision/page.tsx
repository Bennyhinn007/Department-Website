import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Vision Statement",
  description: "Strategic aspirations and long-term research horizon of the department.",
};

export default function VisionPage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-8">
      <Container>
        <Breadcrumbs items={[{ label: "About", href: "/about" }, { label: "Vision" }]} />
        <div className="pt-4">
          <SectionHeader
            eyebrow="Strategic Horizon"
            title="Vision Statement"
            description="To be globally recognized as a premier center of excellence in Internet of Things and Cyber Security engineering, fostering innovative leadership, ethical technology deployment, and pioneering research that secures interconnected societies."
            action={<Badge variant="primary">Phase 3 Shell Route</Badge>}
          />
        </div>
        <div className="mt-8 p-6 rounded-[var(--radius-lg)] bg-surface border border-border text-sm text-text-muted">
          <p>
            Route structurally resolved. Strategic vision statements, research horizons, and leadership perspectives scheduled for Phase 4.
          </p>
        </div>
      </Container>
    </div>
  );
}
