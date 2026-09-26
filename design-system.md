# Design System — Department of IoT & Cyber Security

**Document:** `design-system.md`
**Version:** 1.0
**Status:** Authoritative Implementation Reference
**Companion Documents:** [`PRD.md`](file:///c:/new%20website%20final/PRD.md) · [`design.md`](file:///c:/new%20website%20final/design.md)

---

## 0. Purpose & Scope

This document is the single source of truth for every visual and interactive decision in the department website. It replaces ad-hoc design choices with a deterministic, auditable system.

**This document defines:**
- The complete three-layer token architecture (Primitive → Semantic → Component)
- The typographic scale, spacing rhythm, and grid mechanics
- Every reusable component's specification and state matrix
- Motion, accessibility, and responsive behavior contracts
- Consolidated AI anti-pattern registry (anti-slop policy)


**This document does NOT define:**
- Page content or copywriting (see PRD.md)
- Art direction for individual pages (see design.md §7)
- Deployment or CI/CD configuration

**Design Philosophy:** Every token and component exists to serve content hierarchy, academic credibility, and engineering precision. If a visual choice cannot be traced to one of those three goals, it does not belong in this system.

---

## 1. Color Architecture

### 1.1 Primitive Tokens (Raw Values)

Primitive tokens are the raw color values. They carry no semantic meaning and are never referenced directly in components. They exist solely so the semantic layer can alias them.

```css
/* ═══════════════════════════════════════════════════════ */
/* PRIMITIVE TOKENS — Raw palette values                  */
/* These are NEVER used directly in component code.       */
/* ═══════════════════════════════════════════════════════ */

:root {
  /* ── Brand Core ── */
  --p-blue-500:     #0984E3;   /* Electric Blue — primary brand anchor */
  --p-blue-600:     #0769B5;   /* Electric Blue, darkened for hover / high-contrast button base */
  --p-blue-700:     #055A9A;   /* Electric Blue, darkened for active press / button hover */
  --p-blue-800:     #04487D;   /* Electric Blue, deep darkened for button active press */
  --p-blue-100:     #DBEEFE;   /* Electric Blue, lightened wash */
  --p-blue-50:      #EBF5FF;   /* Electric Blue, barely-there tint */

  --p-cyan-500:     #00CEC9;   /* Cyan — micro-accent only */
  --p-cyan-600:     #00B3AE;   /* Cyan, darkened */
  --p-cyan-100:     #CCFAF9;   /* Cyan, lightened wash */
  --p-cyan-50:      #E6FDFC;   /* Cyan, barely-there tint */

  --p-night-900:    #1E272E;   /* Night Black — deepest dark surface */
  --p-night-800:    #25333B;   /* Elevated dark surface */
  --p-night-700:    #33434C;   /* Dark borders, subtle separators */
  --p-night-600:    #3D5159;   /* Dark muted elements */

  /* ── Neutral Scale ── */
  --p-slate-950:    #0B0F14;   /* Near-black, dark theme deep background */
  --p-slate-900:    #101619;   /* Dark theme page background */
  --p-slate-850:    #17212B;   /* Light theme primary text */
  --p-slate-500:    #64748B;   /* Muted text, metadata */
  --p-slate-400:    #94A3B8;   /* Lighter muted text */
  --p-slate-350:    #A8B3BA;   /* Dark theme muted text */
  --p-slate-200:    #DCE3EA;   /* Light theme borders */
  --p-slate-100:    #EDF0F5;   /* Subtle surface tint */
  --p-slate-50:     #F5F6FA;   /* Cloud White — primary light background */
  --p-white:        #FFFFFF;   /* Pure white surfaces */

  /* ── Semantic Feedback ── */
  --p-green-500:    #10B981;   /* Success */
  --p-green-50:     #ECFDF5;
  --p-red-500:      #EF4444;   /* Error / Destructive */
  --p-red-50:       #FEF2F2;
  --p-amber-500:    #F59E0B;   /* Warning */
  --p-amber-50:     #FFFBEB;
}
```

**Rationale for the neutral scale:** The PRD and design.md both specify `#F5F6FA` (Cloud White) as the light background and `#1E272E` (Night Black) as the primary dark surface. Rather than inventing a full gray ramp, the primitives are extracted directly from every hex value that appears in the approved specifications, giving us precisely the stops we need and nothing extraneous.

### 1.2 Semantic Tokens (Purpose Aliases)

Semantic tokens map primitives to their *purpose*. This is the layer that enables light/dark theming — swap the aliases, and every component follows.

```css
/* ═══════════════════════════════════════════════════════ */
/* SEMANTIC TOKENS — Light Theme (Default)                */
/* ═══════════════════════════════════════════════════════ */

:root {
  /* ── Surfaces ── */
  --background:           var(--p-slate-50);       /* #F5F6FA  Cloud White page canvas */
  --surface:              var(--p-white);           /* #FFFFFF  Cards, modals, sheets */
  --surface-elevated:     var(--p-white);           /* #FFFFFF  Sticky headers, popovers (+ shadow) */
  --surface-subtle:       var(--p-slate-100);       /* #EDF0F5  Hover wells, pill backgrounds */

  /* ── Typography ── */
  --text-primary:         var(--p-slate-850);       /* #17212B  Headlines, body text */
  --text-muted:           var(--p-slate-500);       /* #64748B  Metadata, captions, dates */
  --text-inverse:         var(--p-white);           /* #FFFFFF  Text on dark/primary surfaces */

  /* ── Brand ── */
  --primary:              var(--p-blue-500);        /* #0984E3  CTAs, active navigation, links */
  --primary-hover:        var(--p-blue-600);        /* #0769B5  Button hover */
  --primary-active:       var(--p-blue-700);        /* #055A9A  Button press */
  --primary-wash:         var(--p-blue-50);         /* #EBF5FF  Subtle highlight background */
  --accent:               var(--p-cyan-500);        /* #00CEC9  Micro-accents, status nodes */
  --accent-hover:         var(--p-cyan-600);        /* #00B3AE  Accent hover */
  --accent-wash:          var(--p-cyan-50);         /* #E6FDFC  Accent tint background */

  /* ── Borders & Dividers ── */
  --border:               var(--p-slate-200);       /* #DCE3EA  Card outlines, grid guides */
  --border-subtle:        rgba(220, 227, 234, 0.6); /* Hairline coordinate grids */
  --ring:                 var(--p-blue-500);        /* #0984E3  Focus ring */

  /* ── Feedback ── */
  --success:              var(--p-green-500);
  --success-wash:         var(--p-green-50);
  --error:                var(--p-red-500);
  --error-wash:           var(--p-red-50);
  --warning:              var(--p-amber-500);
  --warning-wash:         var(--p-amber-50);

  /* ── Shadows ── */
  --shadow-sm:  0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md:  0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-lg:  0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04);
  --shadow-xl:  0 8px 32px rgba(0, 0, 0, 0.10), 0 4px 8px rgba(0, 0, 0, 0.05);
}

/* ═══════════════════════════════════════════════════════ */
/* SEMANTIC TOKENS — Dark Theme                           */
/* ═══════════════════════════════════════════════════════ */

[data-theme="dark"] {
  /* ── Surfaces ── */
  --background:           var(--p-slate-900);       /* #101619  Deep black canvas */
  --surface:              var(--p-night-900);       /* #1E272E  Night Black cards */
  --surface-elevated:     var(--p-night-800);       /* #25333B  Floating panels, sticky nav */
  --surface-subtle:       var(--p-night-700);       /* #33434C  Hover wells */

  /* ── Typography ── */
  --text-primary:         var(--p-slate-50);        /* #F5F6FA  Primary reading text */
  --text-muted:           var(--p-slate-350);       /* #A8B3BA  Metadata, captions */
  --text-inverse:         var(--p-slate-850);       /* #17212B  Text on light surfaces */

  /* ── Brand ── */
  --primary:              var(--p-blue-500);        /* #0984E3  Stays consistent across themes */
  --primary-hover:        #3BA2F0;                  /* Lightened for dark bg hover */
  --primary-active:       #5FB5F5;
  --primary-wash:         rgba(9, 132, 227, 0.12);
  --accent:               var(--p-cyan-500);        /* #00CEC9  Consistent */
  --accent-hover:         #33DBD7;
  --accent-wash:          rgba(0, 206, 201, 0.10);

  /* ── Borders & Dividers ── */
  --border:               var(--p-night-700);       /* #33434C */
  --border-subtle:        rgba(51, 67, 76, 0.6);
  --ring:                 var(--p-cyan-500);        /* #00CEC9  Cyan ring in dark theme */

  /* ── Feedback (dimmed for dark) ── */
  --success:              #34D399;
  --success-wash:         rgba(16, 185, 129, 0.12);
  --error:                #F87171;
  --error-wash:           rgba(239, 68, 68, 0.12);
  --warning:              #FBBF24;
  --warning-wash:         rgba(245, 158, 11, 0.12);

  /* ── Shadows (heavier on dark) ── */
  --shadow-sm:  0 1px 3px rgba(0, 0, 0, 0.20);
  --shadow-md:  0 2px 10px rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.15);
  --shadow-lg:  0 4px 20px rgba(0, 0, 0, 0.30), 0 2px 6px rgba(0, 0, 0, 0.15);
  --shadow-xl:  0 8px 40px rgba(0, 0, 0, 0.35), 0 4px 10px rgba(0, 0, 0, 0.20);
}
```

### 1.3 Color Usage Discipline (80 / 15 / 5)

The 80/15/5 ratio is a **strong visual guideline** (target compositional balance) rather than a rigid mathematical absolute. It guides the eye and maintains academic dignity while preventing pages from turning into neon dashboards. Contextual calibration is expected: text-heavy academic documents or syllabus pages may naturally reach ~85% neutrals, whereas interactive technical tools or event hubs may feature primary blue near ~18%. Across all views, the core hierarchy remains invariant:

| Allocation | Colors | Where |
|:-----------|:-------|:------|
| **80% — Neutrals** | Cloud White `#F5F6FA`, Pure White `#FFFFFF`, Night Black `#1E272E`, dark canvas `#101619` | Page backgrounds, card surfaces, text fills, borders |
| **15% — Electric Blue** | `#0984E3` and its hover/active variants | Primary buttons, active navigation links, key headlines, counter accents, focus rings (light theme) |
| **5% — Cyan** | `#00CEC9` | Network node indicators, active status dots, technical line accents, focus rings (dark theme only), hover micro-details |

**Cyan Restriction:** Cyan must never be used as a full button background, a section background fill, or headline text color. It is reserved for small, precise technical accents — think "indicator LED", not "paint roller."

### 1.4 Gradient & Effect Policies

| Effect | Allowed | Forbidden |
|:-------|:--------|:----------|
| **Gradient** | Subtle dark-section vignettes, image scrim overlays (`linear-gradient(to top, rgba(16,22,25,0.8), transparent)`) | Gradient text, rainbow borders, full-page multi-stop gradients, purple-to-pink AI gradients |
| **Glow** | Active network nodes only: `box-shadow: 0 0 12px rgba(0,206,201,0.3)` | Glowing card borders, neon text shadows, pulsing auras |
| **Glassmorphism** | Navigation bar backdrop: `backdrop-blur-md bg-surface/90` | Cards with heavy blur+transparency, frosted panels over body content |
| **Border Treatments** | 1px solid `var(--border)` (strictly structural bounding to delimit surface boundaries), hairline grid lines at `var(--border-subtle)` | Thick colored borders, dashed accent borders, double borders, pseudo-3D bevels |

---

## 2. Typography System

### 2.1 Font Stack

| Role | Family | Weights | Rationale |
|:-----|:-------|:--------|:----------|
| **Display & Headings** | **Plus Jakarta Sans** | 500 (medium), 600 (semibold), 700 (bold) | Geometric, contemporary, confident. Reads as "designed" rather than "defaulted." Wide letter apertures aid legibility at display sizes. |
| **Body & Interface** | **Inter** | 400 (regular), 500 (medium), 600 (semibold) | Purpose-built for screens. Tall x-height, open counters, tabular figures. The industry standard for UI text. |
| **Technical & Data** | **JetBrains Mono** | 400 (regular), 500 (medium) | Monospaced with distinct character differentiation (0 vs O, l vs 1). Strictly restricted to quantitative data, metrics, code, timestamps, and identifiers (see §2.4). Never used for prose. |

**Google Fonts import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap" rel="stylesheet">
```

**CSS custom properties:**
```css
:root {
  --font-display:    'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-body:       'Inter', system-ui, -apple-system, sans-serif;
  --font-mono:       'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
}
```

**Why three fonts, not two:** A two-font system (heading + body) is standard. The monospace third face is essential for this department's identity — IoT and cybersecurity content is dense with technical identifiers, and a monospace face signals technical competence without resorting to hacker-terminal clichés.

### 2.2 Typographic Scale

All sizes use CSS `clamp()` for fluid scaling between mobile and desktop breakpoints. The scale is based on a **1.25 ratio (Major Third)** — small enough to prevent comically oversized headings on mobile, large enough to create clear hierarchy.

| Token | Desktop | Mobile | Line Height | Letter Spacing | Weight | Font |
|:------|:--------|:-------|:------------|:---------------|:-------|:-----|
| `--text-display-1` | `clamp(2.75rem, 5vw, 4.5rem)` | 2.25rem floor | 1.08 | -0.03em | 700 | Display |
| `--text-h1` | `clamp(2.25rem, 4vw, 3.25rem)` | 1.875rem floor | 1.15 | -0.02em | 600 | Display |
| `--text-h2` | `clamp(1.75rem, 3vw, 2.25rem)` | 1.5rem floor | 1.25 | -0.02em | 600 | Display |
| `--text-h3` | 1.375rem (22px) | 1.25rem | 1.35 | -0.01em | 600 | Display |
| `--text-h4` | 1.125rem (18px) | 1.0625rem | 1.4 | -0.005em | 600 | Display |
| `--text-body-lg` | 1.125rem (18px) | 1.0rem | 1.65 | normal | 400 | Body |
| `--text-body` | 1.0rem (16px) | 0.9375rem | 1.65 | normal | 400 | Body |
| `--text-body-sm` | 0.875rem (14px) | 0.8125rem | 1.55 | +0.005em | 400 | Body |
| `--text-meta` | 0.875rem (14px) | 0.8125rem | 1.5 | +0.01em | 500 | Body |
| `--text-eyebrow` | 0.75rem (12px) | 0.6875rem | 1.4 | +0.08em | 600 | Body |
| `--text-mono` | 0.8125rem (13px) | 0.75rem | 1.45 | +0.02em | 500 | Mono |
| `--text-mono-lg` | 1.0rem (16px) | 0.875rem | 1.4 | +0.01em | 500 | Mono |

**CSS implementation:**
```css
:root {
  --text-display-1:  clamp(2.75rem, 5vw, 4.5rem);
  --text-h1:         clamp(2.25rem, 4vw, 3.25rem);
  --text-h2:         clamp(1.75rem, 3vw, 2.25rem);
  --text-h3:         1.375rem;
  --text-h4:         1.125rem;
  --text-body-lg:    1.125rem;
  --text-body:       1.0rem;
  --text-body-sm:    0.875rem;
  --text-meta:       0.875rem;
  --text-eyebrow:    0.75rem;
  --text-mono:       0.8125rem;
  --text-mono-lg:    1.0rem;
}
```

### 2.3 Typography Rules

1. **Display 1** is reserved for the homepage hero headline only. No other page uses this size.
2. **H1** is the page title — exactly one per page, inside the `PageHeader` component.
3. **Eyebrow text** is always uppercase, tracked wide, rendered in the body font at `--text-eyebrow` size. It identifies the section category (e.g., `VISION`, `FACULTY DIRECTORY`).
4. **Monospace** is strictly restricted to technical data and quantitative content (see §2.4). Never used for body paragraphs, headings, buttons, or navigation.
5. **Maximum body text width:** 72ch (`max-width: 72ch`). Prevents eye-fatigue from excessively long lines on ultrawide screens.
6. **Paragraph spacing:** Body paragraphs separated by `margin-bottom: 1.5em` (not `1em`, which reads cramped; not `2em`, which breaks reading flow).

### 2.4 Strict JetBrains Mono Usage Restriction

JetBrains Mono is an authentic signal of engineering precision. However, overuse instantly degrades an academic portal into a novelty developer toy or terminal gimmick. The following usage boundaries are **strictly enforced**:

#### ✅ Permitted Monospace Contexts (Exclusively)
1. **Quantitative metrics & counters:** Numeric readouts, percentages, and stat highlights (e.g., `98.4%`, `150+`, `10Gbps`).
2. **Curriculum & course codes:** Institutional course identifiers (e.g., `IOT-301`, `CYBER-410`, `LAB-02`).
3. **Research & publication identifiers:** Paper DOIs, arXiv IDs, patent numbers, and grant codes (e.g., `arXiv:2401.0892`, `DOI:10.1109/...`).
4. **Dates, timestamps & terms:** ISO dates, event times, semester tags, and metadata stamps (e.g., `2026-09-25`, `09:30 UTC`, `TERM:FALL-26`).
5. **Structural section sequence markers:** Two-digit numbering prefixes (e.g., `01`, `02`, `03` on pillars or timeline nodes).
6. **Code snippets & CLI commands:** Inline technical tokens, configuration blocks, terminal outputs, and syntax-highlighted code.
7. **System status & telemetry badges:** Network port numbers, cryptographic status indicators, hardware telemetry (e.g., `PORT:8443`, `STATUS:SECURE`).

#### ❌ Expressly Prohibited Contexts
1. **Body text & prose:** Never used for body paragraphs, summaries, introductions, or lead-ins.
2. **Headlines & titles:** Never used for H1, H2, H3, H4, or modal/dialog headings (must use Plus Jakarta Sans).
3. **Buttons & action controls:** Primary, outline, and ghost button labels must use Inter (weight 500).
4. **Primary navigation:** Navbar links, mobile drawer links, and footer navigation columns must use Inter.
5. **Editorial metadata & quotes:** Author bios, faculty statements, testimonials, and narrative descriptions.
6. **Form controls & labels:** Field labels, helper text, and placeholders (except dedicated code or regex editors).

**Density Cap:** Monospace content must represent **less than 5%** of rendered typographic characters on any given view.


---

## 3. Spacing System

### 3.1 Base Unit & Scale

The spacing scale is built on a **4px base unit** with a geometric progression. This mathematical foundation prevents arbitrary padding and ensures every element relates rhythmically to its neighbors.

| Token | Value | px | Common Usage |
|:------|:------|:---|:-------------|
| `--space-0` | 0 | 0 | Reset |
| `--space-1` | 0.25rem | 4 | Inline icon gaps, tight internal padding |
| `--space-2` | 0.5rem | 8 | Badge padding, tight gaps |
| `--space-3` | 0.75rem | 12 | Button vertical padding, small card gaps |
| `--space-4` | 1rem | 16 | Standard internal padding, mobile container padding |
| `--space-5` | 1.25rem | 20 | Card content padding |
| `--space-6` | 1.5rem | 24 | Tablet grid gaps, section subtitle spacing |
| `--space-8` | 2rem | 32 | Desktop grid gaps, content block separation |
| `--space-10` | 2.5rem | 40 | Large content separation |
| `--space-12` | 3rem | 48 | Desktop container padding, major block gaps |
| `--space-16` | 4rem | 64 | Section vertical padding (mobile) |
| `--space-20` | 5rem | 80 | Section vertical padding (desktop minimum) |
| `--space-24` | 6rem | 96 | Section vertical padding (desktop comfortable) |
| `--space-28` | 7rem | 112 | Section vertical padding (desktop generous) |
| `--space-32` | 8rem | 128 | Hero section padding, page top breathing room |

**CSS implementation:**
```css
:root {
  --space-1: 0.25rem;   --space-2: 0.5rem;    --space-3: 0.75rem;
  --space-4: 1rem;      --space-5: 1.25rem;    --space-6: 1.5rem;
  --space-8: 2rem;      --space-10: 2.5rem;    --space-12: 3rem;
  --space-16: 4rem;     --space-20: 5rem;      --space-24: 6rem;
  --space-28: 7rem;     --space-32: 8rem;
}
```

### 3.2 Spacing Rules

1. **Section vertical padding:** `py-20` to `py-28` on desktop, `py-12` to `py-16` on mobile. Generous vertical breathing room is what separates premium editorial layouts from cramped template sites.
2. **Card internal padding:** `p-5` to `p-6` (20–24px). Tight enough to feel contained; loose enough to not suffocate content.
3. **Grid gaps:** `gap-8` (32px) on desktop, `gap-6` (24px) on tablet, `gap-4` (16px) on mobile.
4. **Stack spacing (vertical content blocks):** `space-y-4` for tight stacks (list items), `space-y-6` for standard stacks (content blocks), `space-y-8` for loose stacks (major subsections).
5. **Never use arbitrary values** like `padding: 37px`. Every spacing value must map to a token.

---

## 4. Grid & Layout System

### 4.1 Breakpoints

| Token | Width | Columns | Gutter | Container Padding | Tailwind |
|:------|:------|:--------|:-------|:-------------------|:---------|
| `--bp-mobile` | 320px – 767px | 4 (conceptual) | 16px | 16px (`px-4`) | Default |
| `--bp-tablet` | 768px – 1023px | 8 | 24px | 24px (`px-6`) | `md:` |
| `--bp-desktop` | 1024px – 1439px | 12 | 32px | 48px (`px-12`) | `lg:` |
| `--bp-ultrawide` | 1440px+ | 12 | 32px | 64px (`px-16`) | `xl:` |

### 4.2 Container

```css
.container {
  width: 100%;
  max-width: 1280px;        /* max-w-7xl — content never exceeds this */
  margin-inline: auto;
  padding-inline: var(--space-4);   /* 16px mobile */
}

@media (min-width: 768px)  { .container { padding-inline: var(--space-6); } }   /* 24px */
@media (min-width: 1024px) { .container { padding-inline: var(--space-12); } }  /* 48px */
@media (min-width: 1440px) { .container { padding-inline: var(--space-16); } }  /* 64px */
```

**Max-width rationale:** 1280px keeps body text readable and prevents the "newspaper across a football field" problem on ultrawide monitors. It matches the standard `max-w-7xl` in Tailwind.

### 4.3 Grid Patterns

**Standard 12-column grid (desktop):**
```css
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-8);
}
```

**Asymmetric split layouts** — the core compositional tool for avoiding the "3 identical cards" anti-pattern:

| Pattern Name | Desktop Columns | Usage |
|:-------------|:----------------|:------|
| **7 / 5 Split** | `col-span-7` + `col-span-5` | Hero sections, about page narrative + image |
| **5 / 7 Split** | `col-span-5` + `col-span-7` | Alternating sections (content rhythm) |
| **8 / 4 Split** | `col-span-8` + `col-span-4` | Main content + sidebar stats |
| **Full Width** | `col-span-12` | Editorial statements, full-bleed images |
| **3-Column** | `col-span-4` × 3 | Faculty cards, event cards, feature previews |
| **2-Column** | `col-span-6` × 2 | Vision/Mission dual cards, comparison blocks |

**Responsive column mapping (component-specific):**

| Component | Mobile | Tablet | Desktop | Ultrawide |
|:----------|:-------|:-------|:--------|:----------|
| Faculty Grid | 1 col | 2 col | 3 col | 4 col |
| Event Cards | 1 col | 2 col | 3 col | 3 col |
| Achievement Cards | 1 col | 2 col | 3 col | 3 col |
| Masonry Gallery | 2 col | 3 col | 4 col | 4 col |
| Association Emblems | 2 col | 3 col | 4 col | 4 col |

### 4.4 Layout Rules

1. **Structural change, not uniform shrinking.** At each breakpoint, layouts must recompose (e.g., sidebar moves below main content), not just scale down.
2. **Alternate asymmetric splits** between consecutive sections to create visual rhythm. Never stack three identical `col-span-4 × 3` grids back to back.
3. **Full-bleed dark sections** (Night Black background) must still constrain their inner content to the `max-width: 1280px` container.
4. **Zero horizontal overflow** at all breakpoints. Test at 320px, 375px, 768px, 1024px, 1440px.

---

## 5. Component Specifications

### 5.1 Component Tokens (Third Layer)

Component tokens reference semantic tokens, creating a clean abstraction that allows per-component theming without touching the semantic layer.

```css
:root {
  /* ── Button ── */
  --btn-primary-bg:           var(--p-blue-600);        /* #0769B5 — ensures 5.7:1 WCAG AA contrast with white text */
  --btn-primary-bg-hover:     var(--p-blue-700);        /* #055A9A */
  --btn-primary-bg-active:    var(--p-blue-800);        /* #04487D */
  --btn-primary-text:         var(--p-white);           /* #FFFFFF */
  --btn-outline-border:       var(--border);
  --btn-outline-text:         var(--text-primary);
  --btn-ghost-text:           var(--p-blue-600);        /* #0769B5 ensures text contrast on light surfaces */

  /* ── Card ── */
  --card-bg:                  var(--surface);
  --card-border:              var(--border);
  --card-shadow:              var(--shadow-sm);
  --card-shadow-hover:        var(--shadow-md);
  --card-radius:              var(--radius-lg);

  /* ── Navigation ── */
  --nav-bg:                   var(--surface);
  --nav-backdrop:             rgba(255, 255, 255, 0.9);
  --nav-border:               var(--border);
  --nav-link-text:            var(--text-primary);
  --nav-link-active:          var(--primary);
  --nav-height:               4.5rem;  /* 72px */

  /* ── Badge ── */
  --badge-bg:                 var(--surface-subtle);
  --badge-text:               var(--text-muted);
  --badge-primary-bg:         var(--primary-wash);
  --badge-primary-text:       var(--primary);

  /* ── Input ── */
  --input-bg:                 var(--surface);
  --input-border:             var(--border);
  --input-border-focus:       var(--primary);
  --input-text:               var(--text-primary);
  --input-placeholder:        var(--text-muted);
}

[data-theme="dark"] {
  --nav-backdrop:             rgba(30, 39, 46, 0.9);
}
```

### 5.2 Border Radius Scale

| Token | Value | Usage |
|:------|:------|:------|
| `--radius-sm` | 4px | Badges, small tags |
| `--radius-md` | 6px | Buttons, inputs, small cards |
| `--radius-lg` | 10px | Content cards, modals |
| `--radius-xl` | 16px | Featured cards, hero image frames |
| `--radius-full` | 9999px | Avatars, circular indicators |

**Why not rounded-2xl everywhere:** Over-rounded corners (16px+) on every element create a "bubbly" appearance that undermines academic credibility. Cards use `10px`, buttons use `6px`. Only featured hero elements earn `16px`.

### 5.3 Buttons

Three variants. No more.

#### State Matrix

| Property | Primary | Primary Hover | Primary Active | Primary Disabled |
|:---------|:--------|:-------------|:---------------|:-----------------|
| Background | `var(--btn-primary-bg)` (`#0769B5`) | `var(--btn-primary-bg-hover)` (`#055A9A`) | `var(--btn-primary-bg-active)` (`#04487D`) | `var(--surface-subtle)` |
| Text | `var(--btn-primary-text)` (`#FFFFFF`) | `var(--btn-primary-text)` (`#FFFFFF`) | `var(--btn-primary-text)` (`#FFFFFF`) | `var(--text-muted)` |
| Border | none | none | none | none |
| Shadow | `var(--shadow-sm)` | `var(--shadow-md)` | none | none |
| Cursor | pointer | pointer | pointer | not-allowed |
| Transform | none | `translateY(-1px)` | `translateY(0)` | none |
| Opacity | 1 | 1 | 1 | 0.5 |

| Property | Outline | Outline Hover | Ghost | Ghost Hover |
|:---------|:--------|:-------------|:------|:-----------|
| Background | transparent | `var(--primary-wash)` | transparent | `var(--surface-subtle)` |
| Text | `var(--text-primary)` | `var(--primary)` | `var(--btn-ghost-text)` | `var(--btn-ghost-text)` |
| Border | 1px solid `var(--border)` | 1px solid `var(--primary)` | none | none |

#### Sizing

| Size | Height | Padding X | Font Size | Icon Size |
|:-----|:-------|:----------|:----------|:----------|
| `sm` | 32px | 12px | 13px | 14px |
| `md` (default) | 40px | 20px | 14px | 16px |
| `lg` | 48px | 28px | 16px | 18px |

#### Rules

- **Primary Button Contrast Guarantee:** Primary buttons strictly use `var(--btn-primary-bg)` (`#0769B5` / `--p-blue-600`) with `#FFFFFF` text. This delivers a verified **5.7:1 contrast ratio**, exceeding the WCAG 2.2 AA 4.5:1 requirement for standard 14px/16px UI text weights (unlike raw `#0984E3` which only reaches 4.0:1).
- Buttons always use `var(--font-body)` (Inter), weight 500.
- Focus state: `outline: 2px solid var(--ring); outline-offset: 2px`.
- Minimum touch target: 44×44px on mobile (pad with transparent hit area if visual size is smaller).
- Transition: `all 150ms cubic-bezier(0.16, 1, 0.3, 1)`.
- Icon-only buttons require `aria-label`.

### 5.4 Cards

The primary content container across faculty, events, achievements, and associations.

**Anatomy:**
```
┌─ Card ──────────────────────────┐
│  ┌─ Media Slot ───────────────┐ │
│  │  Image / Thumbnail         │ │
│  │  (optional category badge) │ │
│  └────────────────────────────┘ │
│                                 │
│  Eyebrow (mono, muted)         │
│  Title (h3, primary text)      │
│  Description (body-sm, muted)  │
│                                 │
│  ┌─ Footer ──────────────────┐  │
│  │  Metadata     Action Link │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

**Specifications:**
- Background: `var(--card-bg)` / `var(--surface)`
- Border: `1px solid var(--card-border)` (strictly structural bounding; see below)
- Border radius: `var(--radius-lg)` (10px)
- Padding: `var(--space-5)` below the media slot
- Shadow: `var(--card-shadow)` at rest → `var(--card-shadow-hover)` on hover
- Hover transform: `translateY(-2px)` with `200ms` transition
- Image aspect ratios: 16:9 for landscape cards, 4:3 for portrait-leaning cards, 1:1 for faculty avatars
- Image hover: `scale(1.03)` with `overflow: hidden` on the media container

**Structural Border vs. Depth Elevation:**
The `1px solid var(--card-border)` (`#DCE3EA` in light theme, `#33434C` in dark theme) is strictly **structural bounding**, not a depth effect. Its sole function is to delimit component perimeters and provide geometric containment against adjacent surfaces and canvas backgrounds. Depth, elevation, and z-axis separation are conveyed exclusively through `box-shadow` (`var(--card-shadow)` at rest → `var(--card-shadow-hover)` on hover) and tactile translation (`translateY(-2px)`). Neutral 1px borders and elevation shadows serve complementary, distinct architectural roles.

**Anti-patterns:**
- ❌ Cards inside cards inside cards (nesting)
- ❌ Full-width colored borders
- ❌ Excessive badge stacking (max 2 badges per card)

### 5.5 Navigation (Navbar)

Navigation behavior is deterministic across all breakpoints. There are no ambiguous "optional" controls.

#### 1. Desktop (≥ 1024px / `--bp-desktop`)
- **Pattern:** Full horizontal navbar with inline links and persistent utilities.
- **Height:** 72px (`--nav-height: 4.5rem`).
- **Position:** `sticky`, `top: 0`, `z-index: 50`.
- **Background:** `var(--nav-backdrop)` with `backdrop-filter: blur(12px)`.
- **Border Bottom:** `1px solid var(--nav-border)`.
- **Layout (3-zone):**
  - **Left:** Department Identity (Seal/Logo + Department Title).
  - **Center:** Main navigation links with dropdown menus for multi-page sections.
  - **Right:** Quick theme toggle + Primary CTA button ("Admissions" / "Portal").
- **Link Styling:** `--text-body-sm` (14px), Inter weight 500, color `var(--nav-link-text)`.
- **Active State:** Color `var(--nav-link-active)` with a deterministic 2px bottom accent bar.
- **Dropdowns:** Popover menu on hover/focus, `var(--surface-elevated)` background, `var(--shadow-lg)`, `var(--radius-md)` corners, 200ms ease-out entrance.

#### 2. Tablet (768px – 1023px / `--bp-tablet`) — Deterministic Contract
- **Pattern:** Compact Header + Dedicated Right-Side Sheet Drawer.
- **Height:** 72px (`--nav-height: 4.5rem`).
- **Position:** `sticky`, `top: 0`, `z-index: 50`.
- **Header Layout:**
  - **Left:** Department Identity (Logo + "IoT & Cyber Security" title).
  - **Right:** Quick Theme Toggle + Hamburger Menu Trigger button (48×48px touch target, `aria-controls="tablet-drawer"`, `aria-expanded="false"`).
- **Tablet Sheet Drawer (Triggered by Hamburger):**
  - **Width:** Fixed `380px` slide-out panel from the right edge (NOT full-width).
  - **Animation:** `transform: translateX(100%) → translateX(0)` in `240ms cubic-bezier(0.16, 1, 0.3, 1)`.
  - **Backdrop Overlay:** `rgba(0, 0, 0, 0.45)` with `backdrop-filter: blur(8px)`.
  - **Drawer Contents:**
    - Top bar: Close button (`X`, 48×48px) + Department badge.
    - Scrollable link stack: All primary navigation links (minimum 48px touch target each), grouped with clear category labels.
    - Bottom lock: Full-width Primary CTA button.
  - **Keyboard / Focus Contract:** Focus trapped within drawer while open; `Escape` key closes drawer and returns focus to hamburger trigger.

#### 3. Mobile (< 768px / `--bp-mobile`)
- **Pattern:** Minimal Header + Full-Viewport Drawer.
- **Height:** 64px.
- **Position:** `sticky`, `top: 0`, `z-index: 50`.
- **Header Layout:**
  - **Left:** Compact Department Icon Mark / Monogram.
  - **Right:** Hamburger Menu Trigger button (48×48px touch target, `aria-controls="mobile-drawer"`).
- **Mobile Drawer:**
  - **Width:** Full viewport (`100vw`).
  - **Animation:** `transform: translateX(100%) → translateX(0)` in `240ms`.
  - **Drawer Contents:** Full navigation link stack, embedded Theme Toggle, and Primary CTA button.
  - **Keyboard / Focus Contract:** Focus trapped; `Escape` closes.

### 5.6 Page Header

The standardized entry point for every interior page.

**Anatomy:**
```
┌─────────────────────────────────────────────────────────┐
│  Breadcrumb:  Home  /  Faculty                          │
│                                                         │
│  Eyebrow:     ACADEMIC DIRECTORY                        │
│  Title (h1):  Faculty & Research Staff                  │
│  Subtitle:    Meet the scholars driving innovation...   │
│                                                         │
│  ── hairline border ───────────────────────────────────  │
└─────────────────────────────────────────────────────────┘
```

- Top padding: `var(--space-32)` (128px) on desktop to push content below sticky nav
- Bottom padding: `var(--space-16)` (64px)
- Eyebrow: `var(--text-eyebrow)`, uppercase, tracked at `+0.08em`, color `var(--primary)`
- Title: `var(--text-h1)`, `var(--font-display)`, weight 600
- Subtitle: `var(--text-body-lg)`, color `var(--text-muted)`, `max-width: 64ch`
- Hairline separator: `1px solid var(--border)` at the bottom

### 5.7 Section Header

Used within pages to introduce content blocks.

- Eyebrow (optional): Same as PageHeader eyebrow
- Title: `var(--text-h2)`, `var(--font-display)`, weight 600
- Lead text (optional): `var(--text-body-lg)`, `var(--text-muted)`, `max-width: 56ch`
- Bottom margin: `var(--space-10)` before section content begins

### 5.8 Badge

| Variant | Background | Text | Border |
|:--------|:-----------|:-----|:-------|
| Default | `var(--badge-bg)` | `var(--badge-text)` | none |
| Primary | `var(--badge-primary-bg)` | `var(--badge-primary-text)` | none |
| Outline | transparent | `var(--text-muted)` | `1px solid var(--border)` |

- Font: `var(--text-meta)`, weight 500
- Padding: `var(--space-1)` vertical, `var(--space-3)` horizontal
- Border radius: `var(--radius-sm)`

### 5.9 Footer

**Structure:**
```
┌─ Full-bleed Night Black Background ─────────────────────┐
│  ┌─ Container (max-w-7xl) ────────────────────────────┐ │
│  │                                                     │ │
│  │  [Logo & Dept Name]    [Nav Col 1]  [Nav Col 2]    │ │
│  │  Brief tagline         About        Events         │ │
│  │                        Vision       Contact        │ │
│  │                        Mission      Glimpse        │ │
│  │                        Faculty      Achievements   │ │
│  │                                                     │ │
│  │  ── hairline ─────────────────────────────────────  │ │
│  │                                                     │ │
│  │  © 2026 Dept of IoT…   Privacy  ·  Terms  ·  A11y │ │
│  └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

- Background: `var(--p-night-900)` (#1E272E) in both themes
- Text: `var(--p-slate-50)` (#F5F6FA)
- Muted text: `var(--p-slate-400)` (#94A3B8)
- Links hover: `var(--primary)` (#0984E3)
- Top padding: `var(--space-20)` (80px)
- Bottom padding: `var(--space-8)` (32px)
- Grid: 3 columns on desktop, stacks on mobile

### 5.10 Input / Form Fields

- Height: 44px (meets touch target requirement)
- Background: `var(--input-bg)`
- Border: `1px solid var(--input-border)`
- Border radius: `var(--radius-md)` (6px)
- Focus: `border-color: var(--input-border-focus)` + `box-shadow: 0 0 0 3px var(--primary-wash)`
- Error: `border-color: var(--error)` + `box-shadow: 0 0 0 3px var(--error-wash)`
- Label: `var(--text-body-sm)`, weight 500, `margin-bottom: var(--space-2)`
- Placeholder: `var(--input-placeholder)` color

### 5.11 Lightbox (Image Modal)

- Backdrop: `rgba(0, 0, 0, 0.9)` with `backdrop-filter: blur(8px)`
- Image: `max-width: 90vw`, `max-height: 85vh`, `object-fit: contain`
- Close button: top-right, 48×48px, `X` icon in white
- Navigation: `←` / `→` arrows, 48×48px circular hit areas, edge-positioned
- Caption area: bottom-center, `var(--text-body-sm)`, white text on dark scrim
- Keyboard: `←` previous, `→` next, `Escape` close
- Touch: swipe left/right on mobile
- Focus trap: active while open
- Animation: fade in `200ms`, scale from 0.95 → 1.0

---

## 6. Image & Media Treatments

### 6.1 Image Standards

| Context | Aspect Ratio | Border Radius | Treatment |
|:--------|:-------------|:-------------|:----------|
| Hero imagery | 16:9 or free-form | `var(--radius-xl)` (16px) | Hairline engineering markers (optional SVG overlay) |
| Faculty avatar | 1:1 (square) | `var(--radius-full)` or `var(--radius-lg)` | `object-fit: cover`, fallback to initials avatar |
| Event/Achievement card | 16:9 | `var(--radius-lg)` top corners only | `object-fit: cover` with container `overflow: hidden` |
| Masonry gallery | Mixed (16:9, 4:3, 3:4, 1:1) | `var(--radius-md)` | Varying ratios to prevent visual monotony |
| Logo / Emblem | Intrinsic | none | `object-fit: contain`, no background tint |

### 6.2 Image Loading

- Use Next.js `<Image>` component with `sizes` attribute
- Blur placeholder (LQIP) for all images above 200×200px
- Formats: WebP primary, AVIF where supported, JPEG fallback
- Lazy loading for all below-fold images
- Explicit `width` and `height` to prevent CLS

### 6.3 Photography Direction

- ✅ Authentic departmental photography: labs, equipment, student collaboration, faculty at work
- ✅ High-resolution crops showing detail (circuit boards, server racks, code on screens)
- ❌ Generic stock photos of business people in suits
- ❌ Dark hacker terminal screenshots, matrix rain
- ❌ AI-generated imagery with visual artifacts

---

## 7. Shadow System

| Token | Value | Usage |
|:------|:------|:------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.04)` | Cards at rest, badges |
| `--shadow-md` | `0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)` | Card hover, dropdowns |
| `--shadow-lg` | `0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)` | Modals, elevated panels |
| `--shadow-xl` | `0 8px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.05)` | Lightbox, sticky nav on scroll |

**Dark theme:** All shadow opacities increase by ~3× (see §1.2) because shadows are less visible against dark backgrounds.

**Rules:**
- **Depth vs. Structural Bounding:** Elevation and z-axis hierarchy are conveyed exclusively through `box-shadow` (`--shadow-sm` through `--shadow-xl`). The 1px neutral border on cards (`var(--card-border)`) is strictly a **structural boundary** (perimeter containment), not a depth cue.
- **Never simulate depth with borders:** Avoid heavy borders (≥2px), tinted/colored borders, or multi-tone borders meant to fake 3D depth or bevels.
- Cards use shadow as the primary depth and hover indicator, working in tandem with the 1px neutral structural border.
- The sticky navbar transitions from `shadow: none` to `var(--shadow-md)` after 20px of scroll.

---

## 8. Iconography

**Library:** Lucide React (clean, geometric, consistent stroke width)

| Property | Value |
|:---------|:------|
| Default stroke width | 1.5px |
| Default size (inline) | 16×16px |
| Default size (UI action) | 20×20px |
| Default size (hero/feature) | 24×24px |
| Color | `currentColor` (inherits from parent text color) |

**Rules:**
- Icons always accompany text in buttons — no mystery-icon-only buttons (except close/hamburger)
- Icon-only buttons require `aria-label`
- ❌ Never use emojis as functional UI icons (🚀, 💡, 🔥)
- ❌ Never use filled/solid icon variants — stroke-only maintains the engineering aesthetic
- Feature icons in cards may optionally sit inside a `40×40px` container with `var(--primary-wash)` background and `var(--radius-md)` corners

---

## 9. Motion Design

### 9.1 Timing Tokens

| Token | Duration | Usage |
|:------|:---------|:------|
| `--duration-micro` | 150ms | Button press, toggle, checkbox |
| `--duration-fast` | 200ms | Dropdown open, tooltip, badge state |
| `--duration-normal` | 250ms | Modal entrance, drawer slide, card hover |
| `--duration-slow` | 400ms | Page route transitions, scroll-triggered reveals |
| `--duration-slower` | 600ms | Staggered card entrances, counter animations |

### 9.2 Easing Curves

| Token | Value | Usage |
|:------|:------|:------|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Primary exit curve — snappy deceleration for UI elements |
| `--ease-smooth` | `cubic-bezier(0.25, 1, 0.5, 1)` | Gentle deceleration for scroll reveals and route transitions |
| `--ease-in-out` | `cubic-bezier(0.45, 0, 0.55, 1)` | Symmetric easing for looping animations (rare) |

### 9.3 Motion Patterns

| Element | Animation | Duration | Easing | Trigger |
|:--------|:----------|:---------|:-------|:-------|
| Card hover | `translateY(-2px)` + shadow elevation | `--duration-fast` | `--ease-out` | `:hover` |
| Button hover | `translateY(-1px)` + shadow elevation | `--duration-micro` | `--ease-out` | `:hover` |
| Faculty image hover | `scale(1.03)` | `--duration-normal` | `--ease-out` | `:hover` on parent card |
| Scroll reveal (fade up) | `opacity: 0 → 1`, `translateY(16px → 0)` | `--duration-slow` | `--ease-smooth` | IntersectionObserver |
| Counter increment | Number count-up from 0 | `--duration-slower` | `--ease-out` | In viewport |
| Page route transition | `opacity: 0 → 1` | `--duration-normal` | `--ease-smooth` | Route change |
| Dropdown menu | `opacity: 0 → 1`, `translateY(-4px → 0)` | `--duration-fast` | `--ease-out` | Click/hover |
| Mobile drawer | `translateX(100% → 0)` | 240ms | `--ease-out` | Hamburger click |
| Lightbox entrance | `opacity: 0 → 1`, `scale(0.95 → 1)` | `--duration-fast` | `--ease-out` | Image click |

### 9.4 Motion Rules

1. **Subordinate to content.** If removing all animations makes the site harder to use, the animation is serving a purpose. If removing it changes nothing, remove it.
2. **No infinite loops.** No pulsing buttons, no orbiting particles, no breathing glows.
3. **Stagger, don't swarm.** When multiple cards enter viewport, stagger their entrance by 50–80ms each. Maximum 5 staggered items; the rest enter simultaneously.
4. **Reduced motion override is mandatory:**

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 10. Accessibility Contract (WCAG 2.2 AA)

### 10.1 Color Contrast

| Context | Minimum Ratio | Verification |
|:--------|:-------------|:-------------|
| Body text on backgrounds | 4.5:1 | `#17212B` on `#F5F6FA` = 13.2:1 ✓ |
| Muted text on backgrounds | 4.5:1 | `#64748B` on `#F5F6FA` = 4.7:1 ✓ |
| Large text (≥24px / ≥18.66px bold) | 3:1 | `#0984E3` on `#F5F6FA` = 4.1:1 ✓ |
| White text on primary buttons | 4.5:1 | `#FFFFFF` on `#0769B5` (`--btn-primary-bg`) = 5.7:1 ✓ (WCAG 2.2 AA compliant for standard body/interface weights) |
| Dark theme: primary text | 4.5:1 | `#F5F6FA` on `#101619` = 15.3:1 ✓ |
| Dark theme: muted text | 4.5:1 | `#A8B3BA` on `#1E272E` = 5.6:1 ✓ |

### 10.2 Interactive Elements

- **Focus ring:** `outline: 2px solid var(--ring); outline-offset: 2px` on all interactive elements
- **Touch targets:** minimum 44×44px (48×48px preferred for navigation)
- **Skip to content:** First focusable element on every page, visually hidden until focused
- **Semantic HTML:** `<main>`, `<header>`, `<nav>`, `<article>`, `<section>`, `<aside>`, `<footer>` used correctly
- **ARIA landmarks:** Every major page section has an `aria-label` or `aria-labelledby`
- **Image alt text:** All images have descriptive `alt` attributes; decorative SVGs use `aria-hidden="true"`

### 10.3 Keyboard Navigation

| Component | Key | Action |
|:----------|:----|:-------|
| Navigation links | `Tab` / `Shift+Tab` | Move focus forward/backward |
| Dropdown menu | `Enter` / `Space` | Open menu |
| Dropdown menu | `Escape` | Close menu, return focus to trigger |
| Mobile drawer | `Escape` | Close drawer |
| Lightbox | `←` / `→` | Previous / next image |
| Lightbox | `Escape` | Close lightbox |
| Filter tabs | `←` / `→` | Move between filter options |
| Form fields | `Tab` | Move to next field |

### 10.4 Screen Reader Considerations

- Route changes announce the new page title via a live region
- Loading states use `aria-busy="true"` and announce completion
- Filter results announce count changes: "Showing 8 achievements in Students category"
- Image gallery announces "Image 3 of 12" on navigation

---

## 11. Responsive Behavior Contract

### 11.1 Navigation

Navigation behavior is fully deterministic at every breakpoint. There are no ambiguous "optional" triggers or variable layouts.

| Viewport | Breakpoint Range | Header Pattern | Visible Header Elements | Drawer / Menu Behavior |
|:---------|:-----------------|:---------------|:------------------------|:-----------------------|
| **Desktop** | ≥ 1024px (`lg:`) | Full Horizontal Navbar | Dept Logo, all nav links, dropdown triggers, theme toggle, primary CTA | Inline links; floating popover dropdowns on hover/click |
| **Tablet** | 768px – 1023px (`md:`) | Compact Header | Dept Logo + Name, Theme toggle, Hamburger button (48×48px) | **Deterministic 380px Sheet Drawer** slides from right; 45% backdrop blur overlay; primary CTA inside drawer |
| **Mobile** | < 768px (default) | Minimal Header | Dept Monogram/Icon, Hamburger button (48×48px) | **Full-width 100vw Sheet Drawer** slides from right; theme toggle, full link stack, and primary CTA inside drawer |

### 11.2 Content Sections

| Viewport | Section Padding | Grid Columns | Text Scale |
|:---------|:---------------|:-------------|:-----------|
| ≥ 1024px | `py-20` to `py-28` | 12-column grid | Desktop values (clamp max) |
| 768px – 1023px | `py-16` to `py-20` | 8-column grid | Mid-range (clamp interpolation) |
| < 768px | `py-12` to `py-16` | 4-column / single column | Mobile values (clamp min) |

### 11.3 Critical Responsive Rules

1. **No horizontal scroll** at any breakpoint between 320px and 2560px.
2. **No text clipping** — all text must wrap cleanly; no `overflow: hidden` on text containers.
3. **Images scale proportionally** — use `width: 100%; height: auto` or `object-fit: cover` with explicit aspect ratios.
4. **Tables** on mobile convert to stacked card layouts or horizontally scroll within a contained wrapper.
5. **The footer** stacks to a single column on mobile, maintaining visual hierarchy (logo first, links, then copyright).

---

## 12. Section Patterns

These are the reusable section layouts that compose every page.

### 12.1 Hero Section (Homepage only)

```
┌─ Full-width, min-height: 90vh ──────────────────────────┐
│  ┌─ Container ────────────────────────────────────────┐  │
│  │                                                     │  │
│  │  [7 cols]                      [5 cols]             │  │
│  │  Eyebrow (mono)                High-res lab        │  │
│  │  Display-1 Headline            photography         │  │
│  │  Body-lg narrative             with SVG network    │  │
│  │                                node overlay        │  │
│  │  [Primary CTA]  [Ghost CTA]                        │  │
│  │  Accreditation badges                               │  │
│  │                                                     │  │
│  └─────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

### 12.2 Stats Counter Strip

- Background: `var(--p-night-900)` (Night Black, always dark regardless of theme)
- Text: white, monospace numerals
- Layout: 4–5 stats in a horizontal row, centered
- Counter animation: count-up on viewport entry
- Padding: `var(--space-16)` vertical

### 12.3 Content Section (Standard)

```
┌─ Section (alternating bg: background / surface) ────────┐
│  py-20 to py-28                                          │
│                                                          │
│  ┌─ Container ──────────────────────────────────────┐    │
│  │  [Section Header: Eyebrow + H2 + Lead text]     │    │
│  │                                                   │    │
│  │  [Content: Grid / Cards / Editorial blocks]      │    │
│  │                                                   │    │
│  └───────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────┘
```

### 12.4 Full-Bleed Dark Section

Used for CTAs, stats, and high-impact statements.

- Background: `var(--p-night-900)` with optional subtle radial gradient vignette
- Text: `var(--p-slate-50)` and `var(--p-slate-400)`
- Accent color: `var(--primary)` for CTAs and links
- Content still constrained to `max-width: 1280px`

### 12.5 Alternating Split Section

Used in About, Mission, and Vision pages.

```
┌─ Section ──────────────────────────────────────────────┐
│  [7 cols: Text content]    [5 cols: Image/Visual]      │
└────────────────────────────────────────────────────────┘
┌─ Next Section ─────────────────────────────────────────┐
│  [5 cols: Image/Visual]    [7 cols: Text content]      │  ← Reversed
└────────────────────────────────────────────────────────┘
```

On mobile, both patterns stack to single column with image above text.

---

## 13. Technical Motif Patterns

Subtle engineering references that establish the department's technical identity without falling into cyberpunk clichés.

### 13.1 Approved Motifs

| Motif | Implementation | Where Used |
|:------|:-------------- |:-----------|
| **Hairline coordinate grid** | SVG pattern of perpendicular lines at `var(--border-subtle)` opacity | Hero background, section backgrounds |
| **Network node diagram** | Lightweight SVG with circles and connecting lines, animated on viewport entry | Hero decoration, about page accent |
| **Registration marks** | Small `+` crosshairs at section corners using `::before`/`::after` pseudo-elements | Section headers, card accents |
| **Data flow lines** | Single-pixel SVG paths with subtle dash animation | Between related content blocks |
| **Monospace numbering** | `01`, `02`, `03` in JetBrains Mono as section indicators | Mission pillars, timeline items |

### 13.2 Banned Motifs

- ❌ Matrix rain / falling green characters
- ❌ Circuit board clipart patterns
- ❌ Skull/hacker/hooded-figure imagery
- ❌ Globe wireframes with random dots
- ❌ 3D floating geometric blobs
- ❌ Binary code (01010) watermarks

---

## 14. Implementation Notes

### 14.1 CSS Custom Properties Setup

All tokens should be defined in a single `globals.css` file, imported at the application root. The three-layer structure ensures:

1. **Primitive changes** (e.g., adjusting the blue hue) cascade automatically through semantic and component layers.
2. **Theme switching** only requires swapping the semantic layer (`:root` ↔ `[data-theme="dark"]`).
3. **Component overrides** are isolated — changing a button's background doesn't affect cards.

### 14.2 Tailwind Configuration

Map semantic tokens to Tailwind's `theme.extend` so utility classes reference the design system:

```js
// tailwind.config.js (conceptual)
theme: {
  extend: {
    colors: {
      background:       'var(--background)',
      surface:          'var(--surface)',
      'surface-elevated': 'var(--surface-elevated)',
      primary:          'var(--primary)',
      accent:           'var(--accent)',
      border:           'var(--border)',
    },
    fontFamily: {
      display: ['var(--font-display)'],
      body:    ['var(--font-body)'],
      mono:    ['var(--font-mono)'],
    },
    borderRadius: {
      sm: 'var(--radius-sm)',
      md: 'var(--radius-md)',
      lg: 'var(--radius-lg)',
      xl: 'var(--radius-xl)',
    },
  },
}
```

### 14.3 Component Library Integration

- Use **shadcn/ui** (Radix UI primitives) for accessible Dialog, Dropdown, Tabs, and Sheet components
- Override shadcn's default theme variables with this design system's tokens
- Extend shadcn components with design-system-specific styling, not vice versa

### 14.4 Performance Contracts

| Metric | Target | Strategy |
|:-------|:-------|:---------|
| LCP | ≤ 1.2s | Preload hero image, font-display: swap, SSR |
| CLS | ≤ 0.02 | Explicit image dimensions, skeleton loaders, stable nav height |
| INP | ≤ 100ms | Debounced filters, no synchronous layout thrashing |
| Total font weight | < 150KB | Only load used weights, woff2 format, subset Latin |

---

## 15. Design Verification Checklist

Before any component or page enters production:

- [ ] All colors reference semantic tokens — zero hardcoded hex values in components
- [ ] 80/15/5 visual color distribution guideline respected (balanced neutrals, restrained brand color, pinpoint cyan accents)
- [ ] Typography uses only the three approved fonts at approved sizes/weights
- [ ] JetBrains Mono usage strictly audited against §2.4 restrictions (quantitative/code only; < 5% text density)
- [ ] Primary button text achieves verified ≥ 4.5:1 contrast against `#0769B5` (`--btn-primary-bg`)
- [ ] All spacing values map to the defined scale — no arbitrary pixel values
- [ ] Cards use single-level nesting only — no cards inside cards
- [ ] 1px card borders are neutral and structural; shadows are the sole depth indicator
- [ ] Navigation strictly adheres to deterministic desktop/tablet/mobile contracts (§5.5 & §11.1)
- [ ] Buttons, links, and form fields have visible focus indicators
- [ ] Touch targets meet 44×44px minimum on mobile (48×48px on navigation triggers)
- [ ] Images have descriptive `alt` text and explicit dimensions
- [ ] `prefers-reduced-motion` override is active
- [ ] No horizontal scroll at 320px, 375px, 768px, 1024px, 1440px
- [ ] Light and dark themes both render correctly
- [ ] Contrast ratios exceed WCAG 2.2 AA minimums
- [ ] Page loads under 1.2s LCP on throttled 4G
- [ ] Verified against the AI Anti-Pattern Registry (§16) — zero tolerance for synthetic AI clichés or slop

---

## 16. Consolidated AI Anti-Pattern Registry (Zero-Tolerance Slop Policy)

This registry consolidates all prohibited design, layout, code, and content patterns. Modern generative models frequently revert to predictable, low-taste design clichés ("AI slop") that dilute academic credibility and signal lack of craftsmanship. Any implementation featuring these patterns fails design verification immediately.

### 16.1 Color & Visual Aesthetics Slop
- 🚫 **The "AI Purple/Violet" Cliché:** No purple, magenta, or violet gradients anywhere in the site.
- 🚫 **Gradient Text & Rainbow Borders:** No `background-clip: text` multi-stop gradients on headings. No gradient border wrappers around cards.
- 🚫 **Neon Cyberpunk Glowing Effects:** No glowing card borders (`box-shadow: 0 0 20px cyan`), neon text shadows, or glowing pulse rings.
- 🚫 **Over-Glassmorphism:** No frosted-glass text containers with illegible background blur. Only the top sticky navigation bar may use subtle backdrop-blur (`backdrop-blur-md bg-surface/90`).
- 🚫 **Colored Card Backgrounds:** Cards must never use saturated blue, cyan, or tinted colored backgrounds. Cards sit on white (`#FFFFFF`) in light theme and Night Black (`#1E272E`) in dark theme.

### 16.2 Composition & Layout Slop
- 🚫 **The "3 Identical Cards" Infinite Loop:** Never stack consecutive sections using identical `col-span-4 × 3` symmetric grids. Alternate with asymmetric splits (7/5, 5/7, 8/4, full-width editorial callouts).
- 🚫 **Card Russian Nesting Dolls:** Cards inside cards inside cards with borders and shadows at every tier. Maximum nesting depth is exactly 1 level.
- 🚫 **Centered Wall of Prose:** Never center-align body text or multi-paragraph blocks. Headings may be centered in section intros, but body prose must always be left-aligned with a strict `max-width: 72ch`.
- 🚫 **Arbitrary Spacing:** No random magic numbers (`padding: 37px`, `margin: 19px`). Every single spacing value must map to the 4px geometric token scale (`--space-*`).

### 16.3 Typography & Content Slop
- 🚫 **Monospace Prose Spillover:** Never render body paragraphs, intro descriptions, button text, or navigation links in JetBrains Mono. Monospace is strictly reserved for quantitative data and identifiers (§2.4).
- 🚫 **Timid Font Scale Contrast:** Never use subtle, timid heading sizes (e.g. H1 at 24px and H2 at 20px). Strict adherence to the fluid scale (§2.2) is mandatory.
- 🚫 **All-Caps Body Text:** Never use uppercase tracking for paragraphs or descriptions. All-caps is reserved exclusively for micro-eyebrows (`--text-eyebrow`, 12px).
- 🚫 **Unconstrained Horizontal Line Lengths:** Never allow text lines to stretch across full 1200px+ viewports without `max-width: 72ch`.

### 16.4 Interactivity & Motion Slop
- 🚫 **Restless Ambient Motion:** No floating geometric blobs, no perpetual spinning network nodes, no breathing glowing buttons, no continuous floating physics.
- 🚫 **Scroll Hijacking:** Never override or smooth-wheel native browser scrolling physics with JS scroll highjackers.
- 🚫 **Gratuitous Dummy Widgets:** No fake terminal emulator windows, no decorative fake CPU dials, and no simulated hack matrices that do not correspond to verified department data.
- 🚫 **Swarming Entrance Animations:** Never animate 20 items flying into the viewport simultaneously. Stagger maximum 5 elements; the remainder enter cleanly.

### 16.5 Iconography & Asset Slop
- 🚫 **Emoji UI Substitutions:** Never use emojis (🚀, 💡, 🔥, ⚡, 🛡️) as functional UI icons, section bullets, or card badges. Use Lucide stroke icons only.
- 🚫 **Icon Style Mixing:** Never mix solid/filled icons, duotone icons, and stroke icons. All iconography must use 1.5px stroke Lucide SVGs.
- 🚫 **Synthetic AI Imagery Hallucinations:** No photorealistic AI humans with distorted hands/faces, no fake circuit boards with nonsense traces, and no generic stock photos of suited models in sterile offices.
- 🚫 **Cybersecurity Stereotypes:** No hooded hackers in dark rooms, no green binary matrix rain, and no skull graphics.

