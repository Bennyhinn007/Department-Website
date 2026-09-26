import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";

/**
 * Locked Font Architecture (design-system.md §2.1)
 *
 * 1. Display & Headings: Plus Jakarta Sans (500, 600, 700)
 * 2. Body & Interface:   Inter (400, 500, 600) — DEFAULT FONT
 * 3. Technical & Data:   JetBrains Mono (400, 500) — STRICT §2.4 RESTRICTION (<5% density, quantitative only)
 */

export const fontDisplay = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const fontBody = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
