# Department Website Design Specification

**Document:** `design.md`  
**Status:** Approved Architectural Standard  
**Visual Direction:** Academic Credibility + Engineering Precision + Modern Digital Craftsmanship + Subtle Cybersecurity Character  
**Core Target:** Premium institutional presence rivaling top-tier global research universities.  

---

## 1. Design Vision & Aesthetic Direction

The department website must be a premium, editorial-quality web application designed with the discipline and refinement of an elite product design team.

```
                    ACADEMIC CREDIBILITY
                            ▲
                            │
   SUBTLE CYBERSECURITY ────┼──── ENGINEERING PRECISION
          CHARACTER         │
                            ▼
               MODERN DIGITAL CRAFTSMANSHIP
```

### Aesthetic Pillars
* **Human-Crafted Over Automated:** Explicitly rejects the appearance of generic AI templates, Bootstrap portals, and over-decorated SaaS landing pages.
* **Academic Gravitas:** Authoritative, confident, and clean without feeling antiquated or bureaucratic.
* **Engineering Discipline:** Exacting alignments, mathematical spacing scales, structured typography, and subtle technical motifs.
* **Restraint Over Spectacle:** Visual impact is achieved through white space, scale contrast, typography, and authentic photography—not visual gimmicks.

---

## 2. Core Design Principles

### 2.1 Content First
The department's academic identity, research, faculty dossiers, and student achievements are the heroes.
* **Prohibited:** Giant decorative typography overpowering readability, excessive ambient animations, decorative cards for single sentences, full-page neon gradients, or oversized 3D assets.
* **Mandated:** Content hierarchy must guide the eye naturally; design elevates substance rather than concealing weak information.

### 2.2 Editorial Rather Than Dashboard
The platform must evoke an elite academic monograph or technology editorial rather than an admin console or SaaS tool.
* **Prohibited:** Compact tables stuffed with small badges, neon hacker terminals, widget dashboards, or generic three-box Bootstrap columns.
* **Mandated:** Asymmetric compositions, authentic full-bleed photography, generous vertical spacing, controlled grid systems, and deliberate section pacing.

### 2.3 Restraint Creates Premium Quality
Motion, gradients, glassmorphism, shadows, and technical graphics are used with surgical restraint. The interface must look impeccable with all motion and visual effects disabled.

---

## 3. Visual Identity & Technical Motif

### 3.1 Subtle Technical References
Avoid the tired clichés of cybersecurity (matrix rain, neon glowing borders, skull graphics, dark hacker terminals, or circuit-board clipart). Instead, integrate refined engineering motifs:
* **Precision Grid Systems:** Subtle hairline coordinate grids (`border-border/40`).
* **Network-Node Motifs:** Clean geometric node connections representing IoT architectures and distributed systems.
* **Data-Flow Lines:** Fine, single-pixel animated vector paths representing secure transmission.
* **Micro-Patterns:** Minimal technical accents, crosshairs, and registration marks used as section headers.
* **Architectural Photography:** High-resolution crops of lab equipment, cleanrooms, and student collaboration.

---

## 4. Official Color Architecture & Token System

### 4.1 Core Palette

| Token Name | Color Name | Hex Code | Primary Role |
| :--- | :--- | :--- | :--- |
| `primary` | **Electric Blue** | `#0984E3` | Brand signature, primary CTAs, active links, key highlights |
| `dark` | **Night Black** | `#1E272E` | Dark surfaces, navigation bars, footers, display headings |
| `accent` | **Cyan** | `#00CEC9` | Micro-accents, active status nodes, technical lines, graph highlights |
| `light` | **Cloud White** | `#F5F6FA` | Primary light canvas background, alternate sections |

### 4.2 Supporting Neutrals

| Token Name | Light Mode Hex | Dark Mode Hex | Usage |
| :--- | :--- | :--- | :--- |
| `surface` | `#FFFFFF` | `#1E272E` | Card containers, modals, dropdowns |
| `surface-elevated` | `#FFFFFF` (with shadow) | `#25333B` | Floating panels, sticky headers, popovers |
| `text-primary` | `#17212B` | `#F5F6FA` | Primary headlines, titles, body reading text |
| `text-muted` | `#64748B` | `#A8B3BA` | Subheadings, dates, metadata, captions |
| `border` | `#DCE3EA` | `#33434C` | Hairline dividers, card outlines, grid guides |
| `background` | `#F5F6FA` | `#101619` | Foundational page background |

### 4.3 Color Usage Ratio (80 / 15 / 5)

```
┌──────────────────────────────────────────────────────────────┐
│ Neutral Surfaces & Canvases (80%)                            │
│ Cloud White #F5F6FA / Night Black #1E272E / White #FFFFFF    │
├────────────────────────────────────────┬─────────────────────┤
│ Electric Blue #0984E3 (15%)            │ Cyan #00CEC9 (5%)   │
│ Primary CTAs, Key Metrics, Active Nav  │ Micro-accents, Nodes│
└────────────────────────────────────────┴─────────────────────┘
```

* **Electric Blue (`#0984E3`):** Anchors institutional authority and brand recognition.
* **Cyan (`#00CEC9`):** Controlled strictly for micro-details. Never used as a full button background across the site.
* **Night Black (`#1E272E`):** Provides deep grounding for navigation, footers, and dark-theme elevated surfaces.

### 4.4 Theme Token Matrices

#### Light Theme (Primary Institutional Experience)
```css
:root {
  --background: #F5F6FA;        /* Cloud White */
  --surface: #FFFFFF;           /* Pure White */
  --surface-elevated: #FFFFFF;
  --text-primary: #17212B;      /* Deep Slate Charcoal */
  --text-muted: #64748B;        /* Muted Blue-Gray */
  --border: #DCE3EA;            /* Soft Border */
  --primary: #0984E3;           /* Electric Blue */
  --primary-hover: #0769B5;
  --accent: #00CEC9;            /* Cyan Highlight */
  --ring: #0984E3;
}
```

#### Dark Theme (Deliberate Academic Dark)
```css
[data-theme="dark"] {
  --background: #101619;        /* Deep Black Canvas */
  --surface: #1E272E;           /* Night Black */
  --surface-elevated: #25333B;  /* Elevated Blue-Slate */
  --text-primary: #F5F6FA;      /* Crisp Off-White */
  --text-muted: #A8B3BA;        /* Slate Gray */
  --border: #33434C;            /* Subtle Dark Delineator */
  --primary: #0984E3;           /* Electric Blue */
  --primary-hover: #3BA2F0;
  --accent: #00CEC9;            /* Cyan Highlight */
  --ring: #00CEC9;
}
```

### 4.5 Effects Policies
* **Gradient Policy:** Gradients are strictly limited to subtle SVG graphics, subtle dark section vignettes, and image scrim overlays. Gradient text, rainbow borders, and full-page multi-stop gradients are strictly forbidden.
* **Glow Policy:** No glowing shadows or neon borders around generic cards. Glow is restricted to active network nodes (`box-shadow: 0 0 12px rgba(0,206,201,0.3)`) and status indicators.
* **Contrast Compliance:** All text-to-background combinations must meet or exceed WCAG 2.2 AA (minimum 4.5:1 for normal text, 3:1 for large display titles).

---

## 5. Typographic System

The typography creates distinction through editorial scale, generous line height, and precise tracking.

### 5.1 Font Pairing
* **Display / Headings:** **Outfit** or **Plus Jakarta Sans** (Weights: 500, 600, 700) — modern, architectural, and authoritative.
* **Body / Interface:** **Inter** (Weights: 400, 500, 600) — pristine screen legibility, open counters, and neutrality.
* **Technical Accents / Data:** **JetBrains Mono** or **Fira Code** (Weights: 400, 500) — dates, course codes, research IDs, and metrics.

### 5.2 Responsive Typographic Scale

| Level | Desktop Size | Mobile Size | Line Height | Tracking | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 1** | `clamp(2.75rem, 5vw, 4.5rem)` | `2.25rem` | 1.1 | `-0.03em` | 700 |
| **Heading 1** | `clamp(2.25rem, 4vw, 3.25rem)` | `1.875rem` | 1.15 | `-0.02em` | 600 |
| **Heading 2** | `clamp(1.75rem, 3vw, 2.25rem)` | `1.5rem` | 1.25 | `-0.02em` | 600 |
| **Heading 3** | `1.375rem` (22px) | `1.25rem` | 1.35 | `-0.01em` | 600 |
| **Body Large**| `1.125rem` (18px) | `1.0rem` | 1.6 | `normal` | 400 |
| **Body Base** | `1.0rem` (16px) | `0.9375rem`| 1.6 | `normal` | 400 |
| **Metadata**  | `0.875rem` (14px) | `0.8125rem`| 1.5 | `+0.01em` | 500 |
| **Code/Mono** | `0.8125rem` (13px) | `0.75rem` | 1.4 | `+0.02em` | 500 |

---

## 6. Layout System & Grid Matrix

### 6.1 Responsive Breakpoints & Columns
* **Desktop (1024px – 1440px+):** 12-column grid (`gap-8` / 32px), max content width `1280px` (`max-w-7xl`), outer padding `px-8` to `px-12`.
* **Tablet (768px – 1023px):** 8-column grid (`gap-6` / 24px), outer padding `px-6`.
* **Mobile (320px – 767px):** 4-column conceptual grid (`gap-4` / 16px), outer padding `px-4`.

### 6.2 Layout Rules
* Layouts change structurally at breakpoints rather than shrinking content uniformly.
* Asymmetric compositions and alternating column spans create rhythm (`col-span-7` + `col-span-5`).
* Section vertical padding: `py-20` to `py-28` on desktop; `py-12` to `py-16` on mobile.

---

## 7. Page-by-Page Art Direction

### 7.1 Homepage (`/`)
* **Hero Architecture (Split Asymmetry):**
  * *Left Column (7 cols):* Department micro-eyebrow, high-impact headline, positioning narrative, primary CTA (`Explore Programs`), and secondary link (`View Faculty`).
  * *Right Column (5 cols):* High-resolution laboratory imagery framed with hairline engineering markers and subtle live SVG network nodes.
* **Section Rhythm:**
  1. Hero Split
  2. Department Executive Statement (Single wide editorial column)
  3. Key Statistics Counter Strip (Dark Night Black container)
  4. Vision & Mission Editorial Preview (Side-by-side asymmetric cards)
  5. Featured Faculty Showcase (Horizontal carousel or 3-column dossier preview)
  6. Curated Laboratory Glimpse (Asymmetric 4-image showcase)
  7. Recent Milestone Achievements (Filtered card highlights)
  8. Associations & Technical Chapters (Clean emblem row)
  9. Upcoming Events & Symposia (3-card date-forward cards)
  10. Institutional Contact CTA (Full-bleed dark section with direct action)

---

### 7.2 About Department (`/about`)
* **Tone:** Authoritative historical record and academic overview.
* **Layout:**
  * Editorial narrative with two-column typography.
  * Verified milestone timeline detailing department founding, NBA accreditations, and facility upgrades.
  * Infrastructure showcase with callout stats for specialized labs (IoT Prototyping, Cybersecurity Threat Simulation).

---

### 7.3 Vision (`/vision`)
* **Tone:** Contemplative, ambitious, and authoritative.
* **Layout:**
  * A single, oversized vision statement set in high-contrast editorial typography.
  * 4 Strategic Pillars presented in wide modular rows accompanied by subtle vector geometric accents.

---

### 7.4 Mission (`/mission`)
* **Tone:** Structured, goal-oriented, and comprehensive.
* **Layout:**
  * Alternating modular blocks with numbered indicators (`01`, `02`, `03` in JetBrains Mono).
  * Fine connecting lines visually linking curriculum innovation to research, ethical governance, and social impact.

---

### 7.5 Faculty Directory & Profile (`/faculty` & `/faculty/[slug]`)
* **Directory (`/faculty`):**
  * HOD Featured Profile: Full-width elevated card with extensive leadership bio and contact links.
  * Faculty Grid: 3-column (desktop), 2-column (tablet), 1-column (mobile).
  * Card Hover: Controlled image zoom (`scale-105`), Electric Blue role reveal, and direct profile navigation.
* **Faculty Dossier (`/faculty/[slug]`):**
  * Top hero with professional portrait, designations, credentials, and office coordinates.
  * Tabbed/Segmented Dossier: Research Interests, Selected Publications (IEEE/Scopus format), Patents, Certifications, and Courses Taught.

---

### 7.6 Glimpse of Department (`/glimpse`)
* **Layout:** Editorial Masonry Gallery (varying aspect ratios: 16:9, 4:3, 3:4, 1:1) to prevent repetitive card fatigue.
* **Category Filters:** `All`, `Laboratories`, `Student Projects`, `Hackathons`, `Workshops`, `Campus Life`.
* **Lightbox System:** Accessible modal with keyboard arrow support, caption readout, timestamp, and zoom toggle.

---

### 7.7 Achievements Hub (`/achievements`)
* **Visual Structure:**
  * Top Hero Feature: Single high-impact recent accomplishment (e.g., National Hackathon First Prize or Major Research Grant).
  * Chronological Grid: Filterable by `Students`, `Faculty`, `Research`, `Competitions`.
  * Card Details: Distinction badge, winning team/scholar, hosting body, date in mono font, and summary.

---

### 7.8 Professional Associations (`/association`)
* **Visual Structure:**
  * Clean, institutional emblem presentation for ACM, IEEE, CSI, and Student Clubs.
  * Detailed mandate, faculty counselors, student office-bearers, annual activities, and official portals.

---

### 7.9 Events Portal & Event Dossier (`/events` & `/events/[slug]`)
* **Hub (`/events`):**
  * Clear timeline segmentation: `Upcoming Symposia` vs. `Archived Events`.
  * Date-forward badges (`24` / `OCT` in distinct block format).
* **Dossier (`/events/[slug]`):**
  * Long-form event report: Keynote speakers, session transcripts, outcome reports, and an **integrated event photo gallery** with lightbox.

---

### 7.10 Contact & Campus Reach (`/contact`)
* **Split Layout:**
  * *Left:* Official department postal address, HOD office cabin, direct phone lines, institutional email, and office hours.
  * *Right:* Clean inquiry form with accessible floating labels and immediate validation.
  * *Below:* Interactive responsive campus map.

---

## 8. Navigation & Header/Drawer Architecture

### 8.1 Desktop Navigation
* **Height:** `72px` sticky with dynamic backdrop blur (`backdrop-blur-md bg-surface/90 border-b border-border/80`).
* **Structure:**
  * Left: Department Crest & Academic Wordmark.
  * Center: Categorized clean dropdowns (`About`, `Academics`, `People`, `Highlights`, `Events`, `Contact`).
  * Right: Light/Dark theme toggle + Primary Portal Action.

### 8.2 Mobile Drawer Navigation
* Triggered via an accessible hamburger button with `aria-expanded` and `aria-controls`.
* Slides smoothly from right (`transform: translateX(0)` in `240ms cubic-bezier(0.16, 1, 0.3, 1)`).
* Traps focus completely; `Escape` key closes drawer instantly.
* Exposes all major routes with comfortable touch targets (minimum 48px height).

---

## 9. Motion Design & Animation Tokens

Motion must remain subordinate to content comprehension.

### 9.1 Timing Scale
* **Microinteractions (Buttons, Toggles):** `150ms` – `200ms`
* **Dropdown & Modal Transitions:** `200ms` – `250ms`
* **Page Route Transitions:** `250ms` – `350ms`
* **Scroll-Triggered Reveals:** `400ms` – `600ms`

### 9.2 Motion Curves (Easing)
* Standard Ease: `cubic-bezier(0.16, 1, 0.3, 1)` (snappy ease-out)
* Smooth Deceleration: `cubic-bezier(0.25, 1, 0.5, 1)`

### 9.3 Strict Accessibility Override
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

## 10. Anti-AI-Generated Design Rules (Anti-Slop Manifesto)

To maintain the highest level of craftsmanship, the following patterns are strictly banned:

| Banned Anti-Pattern | Required Engineering Replacement |
| :--- | :--- |
| Centered headline + 3 identical cards in every section | Asymmetric editorial layouts, alternating column spans, split narratives |
| Glowing neon text & cyberpunk green matrices | Hairline technical grids, clean typography, precise vector lines |
| Generic purple-to-pink AI gradient backgrounds | Pure `#F5F6FA` and `#1E272E` backgrounds with 80/15/5 color discipline |
| Card-inside-card-inside-card syndrome | Clear vertical rhythm, borders, and whitespace separation |
| Emojis as UI icons (🚀, 💡, 🔥) | Clean, geometric vector icons (Lucide React) |
| Random 3D blobs floating aimlessly | Purposeful, lightweight SVG network diagrams or real lab photos |
| Stock photography of generic business models | Real departmental lab, classroom, student, and faculty imagery |
| Infinite-loop pulsing animations | Restrained scroll-triggered entrance choreography |

---

## 11. Design Authenticity Pre-Flight Checklist

Before approving any screen or component, verify:
1. [ ] Does this look like an authentic engineering department or a generic template?
2. [ ] Does typography carry the hierarchy before adding decorative containers?
3. [ ] Are all color usages following the 80% Neutral / 15% Electric Blue / 5% Cyan ratio?
4. [ ] Does the page remain legible and structured with animations completely disabled?
5. [ ] Is there zero horizontal scroll at 320px, 375px, 768px, 1024px, and 1440px?
6. [ ] Are all touch targets at least 44x44px on mobile devices?
7. [ ] Are all contrast ratios exceeding 4.5:1 for normal text?
8. [ ] Does every image have meaningful descriptive `alt` text?
9. [ ] Are loading skeleton states and friendly error boundaries implemented?

---

## 12. Component Architecture Directory

```
components/
├── layout/
│   ├── Navbar.tsx             # Sticky header with grouped navigation
│   ├── MobileDrawer.tsx       # Focus-trapped mobile drawer menu
│   ├── Footer.tsx             # Institutional footer with sitemap & contact
│   └── Breadcrumb.tsx         # Route breadcrumb hierarchy
│
├── typography/
│   ├── PageHeader.tsx         # Standardized page title, badge, and abstract
│   ├── SectionHeader.tsx      # Section eyebrow, title, and descriptive lead
│   └── Eyebrow.tsx            # Small uppercase monospace section tag
│
├── faculty/
│   ├── FacultyCard.tsx        # Individual faculty directory card
│   ├── FacultyGrid.tsx        # Responsive grid with designation filters
│   └── FacultyDossier.tsx     # Full biographical and publication profile
│
├── events/
│   ├── EventCard.tsx          # Date-badge event preview card
│   ├── EventHero.tsx          # Featured event header
│   └── EventGallery.tsx       # Dedicated media grid with lightbox integration
│
├── achievements/
│   ├── AchievementCard.tsx    # Card displaying award, recipient, and date
│   └── CategoryFilter.tsx     # Zero-reload client-side category switcher
│
├── gallery/
│   ├── MasonryGrid.tsx        # Asymmetric CSS column gallery
│   └── Lightbox.tsx           # Full-screen modal with keyboard navigation
│
├── associations/
│   └── AssociationCard.tsx    # Chapter card with emblem and mission
│
├── graphics/
│   ├── NetworkGraphic.tsx     # Lightweight SVG node visualization
│   └── GridBackground.tsx     # Subtle hairline engineering coordinate grid
│
└── ui/
    ├── Button.tsx             # Variant-based button (Primary, Outline, Ghost)
    ├── Badge.tsx              # Category and status indicator tag
    ├── Container.tsx          # Max-width responsive container wrapper
    └── ThemeToggle.tsx        # Smooth Light/Dark mode switcher
```

---

## 13. Definition of Done for Visual Implementation

A page or component is considered production-ready only when:
* [x] Dedicated route implemented with canonical URL structure.
* [x] Tested across viewport widths: 320px, 375px, 768px, 1024px, 1440px.
* [x] Both Light Theme (`#F5F6FA`) and Dark Theme (`#101619` / `#1E272E`) verified.
* [x] Official palette respected: Electric Blue `#0984E3` and Cyan `#00CEC9` applied to specification.
* [x] No layout thrash, jank, or horizontal overflow.
* [x] Fluid typography implemented without unformatted wrapping or clipping.
* [x] Motion respects `prefers-reduced-motion`.
* [x] SEO metadata, title, and open-graph tags defined per route.
