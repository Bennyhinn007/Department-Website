import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata = {
  title: "Terms of Use",
  description: "Institutional terms of use for departmental computing infrastructure and digital services.",
};

export default function TermsPage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-8">
      <Container>
        <Breadcrumbs items={[{ label: "Terms of Use" }]} />
        <div className="pt-4">
          <SectionHeader
            eyebrow="Institutional Terms"
            title="Terms of Use"
            description="Guidelines governing acceptable digital use of departmental network resources, academic software, and web portals."
          />
        </div>
      </Container>
    </div>
  );
}
