export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface NavigationConfig {
  mainNav: NavItem[];
  drawerGroups: NavGroup[];
  footerNav: {
    title: string;
    items: { label: string; href: string }[];
  }[];
  contactInfo: {
    department: string;
    institution: string;
    building: string;
    email: string;
    phone: string;
    officeHours: string;
  };
  institutionalLinks: { label: string; href: string }[];
  primaryCta: {
    label: string;
    href: string;
  };
}

/**
 * Centralized Canonical Navigation Configuration
 * Authority: PRD.md §2 & design-system.md §5.5
 *
 * All routes are strictly defined here. Route strings are never hardcoded.
 */
export const navigationConfig: NavigationConfig = {
  mainNav: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
      description: "Genesis, facilities, and academic ecosystem",
      children: [
        {
          label: "Department Overview",
          href: "/about",
          description: "Genesis, facilities, and academic ecosystem",
        },
        {
          label: "Vision",
          href: "/vision",
          description: "Strategic research aspirations and societal horizons",
        },
        {
          label: "Mission",
          href: "/mission",
          description: "Pedagogy, ethics, and experiential engineering pillars",
        },
      ],
    },
    {
      label: "Faculty",
      href: "/faculty",
    },
    {
      label: "Glimpse",
      href: "/glimpse",
    },
    {
      label: "Achievements",
      href: "/achievements",
    },
    {
      label: "Associations",
      href: "/association",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  drawerGroups: [
    {
      title: "Core Department",
      items: [
        { label: "Home", href: "/" },
        { label: "About Department", href: "/about" },
        { label: "Vision", href: "/vision" },
        { label: "Mission", href: "/mission" },
      ],
    },
    {
      title: "People & Community",
      items: [
        { label: "Faculty & Staff Directory", href: "/faculty" },
        { label: "Professional Associations & Clubs", href: "/association" },
      ],
    },
    {
      title: "Research & Life",
      items: [
        { label: "Department Glimpse", href: "/glimpse" },
        { label: "Achievements & Honors", href: "/achievements" },
        { label: "Symposia & Events", href: "/events" },
      ],
    },
    {
      title: "Reach & Inquiries",
      items: [
        { label: "Campus Reach & Contact", href: "/contact" },
      ],
    },
  ],

  footerNav: [
    {
      title: "Academic & Vision",
      items: [
        { label: "About Department", href: "/about" },
        { label: "Vision Statement", href: "/vision" },
        { label: "Mission Pillars", href: "/mission" },
        { label: "Faculty Directory", href: "/faculty" },
      ],
    },
    {
      title: "Community & Events",
      items: [
        { label: "Department Glimpse", href: "/glimpse" },
        { label: "Achievements Hub", href: "/achievements" },
        { label: "Student Chapters & MoUs", href: "/association" },
        { label: "Events & Symposia", href: "/events" },
      ],
    },
  ],

  contactInfo: {
    department: "Department of IoT & Cyber Security",
    institution: "National Institute of Advanced Engineering & Technology",
    building: "Computing Sciences & Cyber Labs Complex, Level 4",
    email: "iot-cyber@niaet.edu.in",
    phone: "+91 (0) 11 2890 4100",
    officeHours: "Monday – Friday: 08:30 – 17:30 IST",
  },

  institutionalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Accessibility Statement", href: "/accessibility" },
    { label: "Grievance Helpline", href: "/contact#grievance" },
  ],

  primaryCta: {
    label: "Inquire & Connect",
    href: "/contact",
  },
};
