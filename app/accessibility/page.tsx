import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata = {
  title: "Accessibility Statement",
  description: "Departmental web accessibility compliance and inclusive digital engineering commitments.",
};

export default function AccessibilityPage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-8">
      <Container>
        <Breadcrumbs items={[{ label: "Accessibility" }]} />
        <div className="pt-4">
          <SectionHeader
            eyebrow="Inclusive Standards"
            title="Accessibility Statement"
            description="The Department of IoT & Cyber Security is committed to ensuring digital accessibility in conformance with WCAG 2.2 Level AA standards."
          />
        </div>
      </Container>
    </div>
  );
}
