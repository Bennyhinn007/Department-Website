import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata = {
  title: "Privacy Policy",
  description: "Institutional privacy guidelines and digital data protection policies.",
};

export default function PrivacyPage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-8">
      <Container>
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        <div className="pt-4">
          <SectionHeader
            eyebrow="Statutory Compliance"
            title="Privacy Policy"
            description="Our commitment to safeguarding student, faculty, and visitor digital privacy across departmental research portals."
          />
        </div>
      </Container>
    </div>
  );
}
