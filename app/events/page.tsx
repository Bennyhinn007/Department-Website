import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Symposia & Events",
  description: "Annual technical symposia, national cyber drills, guest lectures, and student hackathons.",
};

export default function EventsPage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-8">
      <Container>
        <Breadcrumbs items={[{ label: "Events" }]} />
        <div className="pt-4">
          <SectionHeader
            eyebrow="Academic Calendar"
            title="Symposia & Events"
            description="Explore upcoming national conferences, CTF competitions, industry workshops, and guest lectures hosted by the Department of IoT & Cyber Security."
            action={<Badge variant="primary">Phase 3 Shell Route</Badge>}
          />
        </div>
        <div className="mt-8 p-6 rounded-[var(--radius-lg)] bg-surface border border-border text-sm text-text-muted">
          <p>
            Route structurally resolved. Event calendar, registration portals, and past archive dossiers scheduled for Phase 4.
          </p>
        </div>
      </Container>
    </div>
  );
}
