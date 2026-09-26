import * as React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { navigationConfig } from "@/lib/navigation";
import { Container } from "@/components/ui/container";

/**
 * Institutional Footer (design-system.md §5.9)
 *
 * Implements:
 * - Persistent Night Black (#1E272E) background across both themes
 * - High-contrast text (#F5F6FA) with muted metadata (#94A3B8)
 * - 4-column desktop, 2-column tablet, 1-column mobile responsive stacking
 * - Departmental identity, navigation groups, verified contact info, and legal links
 */
export function Footer() {
  const { department, institution, building, email, phone, officeHours } =
    navigationConfig.contactInfo;

  return (
    <footer
      id="site-footer"
      className="w-full bg-footer-bg text-footer-text-primary border-t border-footer-border transition-colors"
      aria-label="Institutional Footer"
    >
      <Container className="py-16 lg:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Identity & Statement (5 cols on desktop) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[var(--radius-md)] bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary stroke-current"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2L4 5V11C4 16.5 7.5 21.3 12 22C16.5 21.3 20 16.5 20 11V5L12 2Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="11" r="2" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
                  <path d="M12 7V9M12 13V15M8.5 12.5L10.5 11.5M15.5 12.5L13.5 11.5" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h2 className="font-display font-bold text-base tracking-tight text-footer-text-primary">
                  {department}
                </h2>
                <p className="text-xs text-footer-text-muted">{institution}</p>
              </div>
            </div>

            <p className="text-sm text-footer-text-muted leading-relaxed max-w-sm">
              Advancing engineering rigor in connected embedded architectures, threat analysis, and cryptographic defenses. Empowering scholars to build resilient, ethical digital ecosystems.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-footer-surface border border-footer-border text-[12px] font-mono text-footer-accent">
                <span className="w-2 h-2 rounded-full bg-footer-accent animate-pulse" aria-hidden="true" />
                NBA & NAAC ACCREDITED DEPARTMENT
              </span>
            </div>
          </div>

          {/* Columns 2 & 3: Navigation Columns (4 cols on desktop) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {navigationConfig.footerNav.map((column) => (
              <div key={column.title} className="space-y-3">
                <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-footer-text-primary">
                  {column.title}
                </h3>
                <ul className="space-y-2 text-sm text-footer-text-muted">
                  {column.items.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:text-footer-link-hover transition-colors duration-150 inline-block py-0.5"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 4: Contact & Reach (4 cols on desktop) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-footer-text-primary">
              Campus Reach & Hours
            </h3>
            <ul className="space-y-2.5 text-sm text-footer-text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 stroke-[1.5] text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  {building}, {institution}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 stroke-[1.5] text-primary flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-footer-link-hover transition-colors underline-offset-4 hover:underline"
                >
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 stroke-[1.5] text-primary flex-shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-footer-link-hover transition-colors"
                >
                  {phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 stroke-[1.5] text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-mono">{officeHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hairline Separator & Legal Baseline */}
        <div className="mt-12 pt-8 border-t border-footer-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-footer-text-muted">
          <p>© {new Date().getFullYear()} {department}. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {navigationConfig.institutionalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-footer-link-hover transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
