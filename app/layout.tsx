import type { Metadata, Viewport } from "next";
import { fontDisplay, fontBody, fontMono } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Department of IoT & Cyber Security",
    template: "%s | Department of IoT & Cyber Security",
  },
  description:
    "Official website for the Department of IoT & Cyber Security. Leading education, engineering research, and innovation in connected systems and cryptographic security.",
  keywords: [
    "IoT",
    "Cyber Security",
    "Internet of Things",
    "Engineering",
    "Academia",
    "Research",
    "Cryptography",
    "Network Security",
  ],
  authors: [{ name: "Department of IoT & Cyber Security" }],
  metadataBase: new URL("https://iot-cyber.edu"),
  openGraph: {
    title: "Department of IoT & Cyber Security",
    description:
      "Leading education, engineering research, and innovation in connected systems and cryptographic security.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F6FA" },
    { media: "(prefers-color-scheme: dark)", color: "#101619" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <head>
        {/* Anti-flash inline script to establish theme before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var r='light';if(s==='dark'||(s!=='light'&&m)){r='dark';}document.documentElement.setAttribute('data-theme',r);if(r==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-text-primary font-body antialiased">
        <ThemeProvider>
          {/* Accessible Skip Link (WCAG 2.2 AA) */}
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>

          {/* Global Sticky Navbar */}
          <header id="site-header" className="sticky top-0 z-40 w-full" aria-label="Site Header">
            <Navbar />
          </header>

          {/* Main Content Landmark */}
          <main
            id="main-content"
            tabIndex={-1}
            className="flex-1 w-full focus:outline-none"
            aria-label="Main Content"
          >
            {children}
          </main>

          {/* Global Institutional Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
