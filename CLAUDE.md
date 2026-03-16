# CLAUDE.md — AI Learning Hub (aibasicedu.com)

## Project Overview

AI education platform making artificial intelligence learning accessible to everyone. From complete beginners to seasoned experts — curated learning paths, interactive tutorials, company deep-dives, AI news, glossary, and prompt engineering guides.

**Live domain:** aibasicedu.com
**Repo:** github.com/kelton-1/aibasicedu

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router, Server Components, Turbopack)
- **Language:** TypeScript 5, React 19
- **Styling:** Tailwind CSS 3.4.17 + tailwindcss-animate plugin
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Database:** PostgreSQL via Supabase
- **ORM:** Drizzle ORM
- **AI SDK:** @anthropic-ai/sdk (for content generation scripts)
- **Package Manager:** npm (pnpm in scripts)

## Design System — Black + Gold Premium

The design follows an ultra-premium aesthetic inspired by Apple, xAI (Grok), and other top-tier tech companies. Every design decision must be intentional.

### Core Principles

1. **Minimal and powerful** — no decorative clutter, let content breathe
2. **Black + Gold** — the only accent color is metallic gold. No purple, indigo, cyan, or colorful gradients.
3. **Apple-level whitespace** — sections use `py-24 md:py-32`, generous spacing everywhere
4. **Intentional color placement** — gold is used sparingly for maximum impact

### Color System

**Dark Mode (default):**
- Background: pure black `#000000` → `bg-background`
- Card/Surface: `#0D0D0D` → `bg-card`
- Border: `#262626` → `border-border`
- Muted text: `#737373` → `text-muted-foreground`
- Primary text: `#E5E5E5` → `text-foreground`

**Light Mode:**
- Background: pure white `#FFFFFF` → `bg-background`
- Card/Surface: `#FAFAFA` → `bg-card`
- Border: `#E5E5E5` → `border-border`
- All semantic classes auto-switch via CSS variables

**Gold Accent (both modes):**
- `gold-text` class — metallic gold-bar gradient on text
- `gold-shimmer` class — animated gold shimmer (hero text only)
- `gold-subtle` class — lighter gold text effect
- `gold-line` class — horizontal gold gradient divider
- Tailwind tokens: `text-gold`, `bg-gold`, `border-gold/20`, `text-gold-light`, `bg-gold-light`, `text-gold-mid`

### Typography

- **Font:** Inter (loaded via next/font/google, weights 300-700)
- **Hero:** `text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight`
- **H2 sections:** `text-3xl md:text-5xl font-semibold tracking-tight`
- **Body:** `text-muted-foreground leading-relaxed`
- **Labels:** `label-text` class → `text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground`

### Components

- **Cards:** `rounded-2xl border border-border bg-card p-8` with `hover:border-gold/20`
- **Premium card:** `premium-card` class (defined in globals.css)
- **Buttons primary:** `bg-gold hover:bg-gold-light text-black font-medium rounded-xl`
- **Buttons secondary:** `border border-border bg-transparent hover:bg-accent text-foreground rounded-xl`
- **Container:** `section-container` class → `max-w-6xl mx-auto px-4 md:px-6`
- **SectionHeading:** uses `label` prop (not `badge`) for micro-label above heading

### What NOT to do

- No purple, indigo, cyan, or colorful gradients
- No glassmorphism or backdrop-blur effects on cards
- No particle animations or canvas effects
- No colorful icon backgrounds — use `text-gold` on icons instead
- No shadows in dark mode
- No busy hover effects — transitions should be 300ms, subtle

## Project Structure

```
app/
├── page.tsx                          # Homepage
├── layout.tsx                        # Root layout (Inter font, ThemeProvider, header/footer)
├── globals.css                       # Design system (gold utilities, animations, cards)
├── lib/
│   ├── route-map.ts                  # Central route definitions
│   ├── utils.ts                      # cn() utility
│   └── supabase/                     # Supabase client setup
├── components/                       # Shared app components
│   ├── site-header.tsx               # Sticky header with gold brand
│   ├── site-footer.tsx               # Multi-column footer with gold-line
│   ├── main-nav.tsx                  # Desktop navigation (text-only, no icons)
│   ├── mobile-nav.tsx                # Mobile sheet nav
│   ├── animated-background.tsx       # Ultra-subtle gold radial gradient
│   ├── fade-in.tsx                   # IntersectionObserver fade animation
│   ├── section-heading.tsx           # Reusable section header with label
│   ├── feature-card.tsx              # Feature card with gold icon + arrow link
│   ├── company-logo.tsx              # Company logo card
│   ├── company-header.tsx            # Company detail page header
│   ├── timeline.tsx                  # Timeline with gold dots/lines
│   ├── content-card.tsx              # Generic content card
│   └── newsletter-subscription.tsx   # Email subscribe form
├── about/page.tsx                    # About page
├── browse/page.tsx                   # Resource hub grid
├── companies/page.tsx                # Companies directory (tabbed)
├── companies/[slug]/page.tsx         # Company detail (OpenAI, DeepMind)
├── contact/page.tsx                  # Contact form
├── dashboard/page.tsx                # Learning dashboard (client)
├── get-started/page.tsx              # Onboarding pathways
├── glossary/page.tsx                 # AI glossary (Supabase)
├── news/page.tsx                     # AI news feed (Supabase)
├── personalize/page.tsx              # 4-step assessment quiz (client)
├── playgrounds/page.tsx              # Coming soon
├── privacy/page.tsx                  # Privacy policy
├── projects/page.tsx                 # Coming soon
├── prompts/page.tsx                  # Prompt templates (client)
├── quick-guides/page.tsx             # Coming soon
├── terms/page.tsx                    # Terms of service
├── tutorials/page.tsx                # Tutorial listing (Supabase)
├── tutorials/[id]/page.tsx           # Tutorial router
├── tutorials/prompt-engineering-basics/page.tsx    # Interactive tutorial (client)
├── tutorials/understanding-llms/page.tsx           # Interactive tutorial (client)
└── tutorials/image-generation-playground/page.tsx  # Interactive tutorial (client)

components/
├── ui/                               # shadcn/ui primitives (button, card, input, etc.)
└── theme-provider.tsx                # next-themes provider

lib/
└── db/
    └── schema.ts                     # Drizzle schema (news, glossary, companies, tutorials)

scripts/
├── seed.ts                           # Database seeding
└── generate-content.ts               # Content generation
```

## Database

PostgreSQL via Supabase. Tables: `news_articles`, `glossary_terms`, `companies`, `tutorials`.

**Required env vars:**
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
CONTENT_API_KEY=           # For protected POST endpoints
```

Pages that fetch from Supabase (glossary, news, tutorials) will error without these vars set. All other pages work without them.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint
npm run typecheck    # TypeScript check
npm run seed         # Seed database
```

## Current Status

- All 23 pages redesigned with black + gold premium aesthetic
- 8 stub pages (about, contact, privacy, terms, community, playgrounds, projects, quick-guides) expanded to full pages
- 3 interactive tutorials fully functional with gold-accented styling
- Database-connected pages (glossary, news, tutorials) need Supabase env vars
- Light/dark mode supported via next-themes (dark is default)
