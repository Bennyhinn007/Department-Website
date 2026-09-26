import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        surface: {
          DEFAULT: "var(--surface)",
          elevated: "var(--surface-elevated)",
          subtle: "var(--surface-subtle)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          active: "var(--primary-active)",
          wash: "var(--primary-wash)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          wash: "var(--accent-wash)",
        },
        "text-primary": "var(--text-primary)",
        "text-muted": "var(--text-muted)",
        "text-inverse": "var(--text-inverse)",
        border: {
          DEFAULT: "var(--border)",
          subtle: "var(--border-subtle)",
        },
        ring: "var(--ring)",
        success: {
          DEFAULT: "var(--success)",
          wash: "var(--success-wash)",
        },
        error: {
          DEFAULT: "var(--error)",
          wash: "var(--error-wash)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          wash: "var(--warning-wash)",
        },
        footer: {
          bg: "var(--footer-bg)",
          surface: "var(--footer-surface)",
          border: "var(--footer-border)",
          "text-primary": "var(--footer-text-primary)",
          "text-muted": "var(--footer-text-muted)",
          accent: "var(--footer-accent)",
          "link-hover": "var(--footer-link-hover)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "-apple-system", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
      spacing: {
        "18": "4.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
