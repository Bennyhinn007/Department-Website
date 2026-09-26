import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Campus Reach & Contact",
  description: "Official contact details, campus address, and department administration hours.",
};

export default function ContactPage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-8">
      <Container>
        <Breadcrumbs items={[{ label: "Contact" }]} />
        <div className="pt-4">
          <SectionHeader
            eyebrow="Campus Inquiries"
            title="Campus Reach & Contact"
            description="Connect with departmental administration, research chairs, admissions coordinators, or submit formal institutional inquiries."
            action={<Badge variant="primary">Phase 3 Shell Route</Badge>}
          />
        </div>
        <div className="mt-8 p-6 rounded-[var(--radius-lg)] bg-surface border border-border text-sm text-text-muted">
          <p>
            Route structurally resolved. Verified contact form, interactive campus routing, and faculty office directories scheduled for Phase 4.
          </p>
        </div>
      </Container>
    </div>
  );
}
