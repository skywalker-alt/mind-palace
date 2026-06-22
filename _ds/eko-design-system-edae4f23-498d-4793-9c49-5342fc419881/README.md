# eko Design System

> **"The Operating System for Customer Communication in the Gulf."**
> Playful tech. Soft tech. AI built for operations.

---

## What is eko?

**eko** is a B2B SaaS platform that unifies customer communication channels (WhatsApp, Instagram, SMS, Email, Chat) into a single AI-powered system. Under the hood it pairs a customer-intelligence vector database with an operations dashboard so businesses can scale support, automate workflows, and turn conversations into pipeline.

The brand voice is built around four words: **Playful · Modern · AI-Driven · Professional.** It is *not* a cold enterprise tool — it is a smart, approachable AI partner. The visual identity is internally called **"Eko Playful Tech"** and the core philosophy is **"Soft Tech":** B2B automation that feels human rather than robotic.

The visual world is built from three modular ingredients:

1. **Master Blobs** — organic, hand-drawn shapes (not perfect circles).
2. **Motion Line Vectors** — squiggles, spirals, dashes, knots that represent flow.
3. **The Mascot** — a blue, spiky-haired character with simple line-eyes and a smile.

Layer these on top of each other and you get the signature **"Pre-Layered Composite Cluster"** that anchors most marketing surfaces.

---

## Source materials

This design system was distilled from the following inputs:

| Source | What it gave us |
| --- | --- |
| `assets/eko_brand_guidelines_v4.pdf` | Brand personality, tone, color palette, typography, philosophy. **The source of truth.** |
| `eko-website/` (mounted codebase) | Live product implementation — colors-in-use, component patterns, copy, page architecture. |
| `assets/brand-overview.png` | Reference plate of core blocks: blobs, mascot expressions, motion lines, color swatches. |
| `assets/motion-line-vectors.png` | Line knot / squiggle / dashed-line vocabulary. |
| `assets/composite-cluster.png` | The signature pre-layered composite cluster. |
| `uploads/72c459ad…jpg`, `uploads/79ff…jpg` | **Reference photos only — NOT eko brand.** These are Naolib (Nantes transport) posters provided for *stylistic mood* (playful, organic line work). Do NOT use directly in eko artifacts. |

> **Note on the website codebase.** The current production site (`eko-website/`) uses **Inter** as its body font and `#0066FF` as its primary blue. The official brand guidelines specify **Montserrat** and `#2B7AF3`. This design system follows the **brand guidelines** as the source of truth. Both are documented so an implementer can choose. See `VISUAL FOUNDATIONS → Typography`.

---

## Index — what's in this folder

| File / folder | Purpose |
| --- | --- |
| `README.md` | This file. Start here. |
| `SKILL.md` | Cross-compatible Agent Skill manifest. |
| `colors_and_type.css` | All design tokens: colors, type, spacing, radii, shadows, motion. **Import this first.** |
| `assets/` | Brand assets — logos, mascot, background patterns, illustrations, brand-guideline PDF. |
| `preview/` | Small HTML preview cards that populate the Design System tab. Reference only. |
| `ui_kits/website/` | High-fidelity recreation of the eko marketing site (hero, sticky-scroll, deep-dive rows, CRM mockups, demo form). Includes `index.html` and JSX components. |

---

## CONTENT FUNDAMENTALS

How eko writes copy.

### Voice
Three adjectives, from the guidelines:

- **Smart** — shows intelligence, AI capability, operational depth.
- **Friendly** — approachable, conversational. *Never* robotic.
- **Confident** — a reliable partner that handles core operations.

### Tone
Direct, slightly cocky, founder-energy. Talks to a person, not a procurement officer. Uses second person ("**your** Instagram DMs", "**your** team stops jumping between apps"). The brand was founded by student-athletes, so the messaging often borrows the language of grit, discipline, and efficiency — "stop drowning in DMs," "start closing faster," "on-field focus."

### Casing
- **Brand name** is always lowercase: `eko`. Even at the start of a sentence. Even in headlines.
- **Headlines** use sentence case, not Title Case. ("Turn your Instagram DMs into a revenue-driving CRM.")
- **Buttons** use sentence case. ("Request Demo", "Start closing instantly", "See eko in Action").
- **Eyebrow labels** use ALL CAPS with wide tracking, sparingly. ("DON'T FORGET TO CHECK OUT OUR FREE DEMO →")
- **Section headers** in marketing copy are numbered when describing a flow: ("1. Unify every channel.", "2. Deploy the RAG Agent.").

### Examples (verbatim from the live site)

**Hero headline (single sentence, no period optional):**
> Turn your Instagram DMs into a revenue-driving CRM.

**Hero sub:**
> eko unifies your social channels, automates customer conversations, and turns your DM chaos into a smart sales pipeline.

**CTA buttons:**
> See eko in Action →
> Try Free Demo →
> Start closing instantly →
> Request Demo

**Mini-features (numbered, present-tense imperatives):**
> 1. Unify every channel.
> 2. Deploy the RAG Agent.
> 3. Scale your operations.

**Closing CTA (two-clause cadence — problem → outcome):**
> Stop drowning in DMs. Start closing faster.
> Make every social conversation work for your business.

### Vocabulary
Words and phrases the brand uses naturally:

- "DM chaos", "notification chaos", "drowning in DMs"
- "social commerce pipeline", "consultative selling", "high-intent leads"
- "RAG Agent", "vector database", "customer intelligence layer"
- "unified inbox", "operations layer", "communication layer"
- "the operating system for ___" (rhetorical pattern)

### I vs. you
- The brand refers to itself as **"eko"** in the third person (not "we"). The product is the protagonist.
- Talks to the reader as **"you"** / **"your"**.
- First-person plural ("we") only appears in founder/about copy.

### Emoji
**No emoji in product copy or marketing.** The expressive job is done by the mascot, the blobs, and the motion lines — emoji would feel redundant and undercut the "soft tech" register. If a personality moment is needed, use a mascot expression or a motion-line squiggle instead.

### Punctuation tics
- The em-dash and the period are the primary rhythm tools.
- Headlines often end without punctuation when they're a phrase, with a period when they're a complete thought. Both are valid; stay consistent within a section.
- Arrows (`→`) follow CTAs and eyebrow labels.
- No exclamation marks. The energy comes from the visual system, not the punctuation.

---

## VISUAL FOUNDATIONS

### Color
The palette has three tiers.

**Core (per brand guidelines):**

| Token | Hex | Role |
| --- | --- | --- |
| `--eko-blue` | `#2B7AF3` | Intelligence layer, primary brand. All interactive elements. |
| `--eko-blue-bright` | `#4D91F2` | Illustration / mascot / decorative blobs. The "lit" blue. |
| `--deep-navy` | `#111827` | Primary typography — the "anchor" color. |
| `--deep-black` | `#12151D` | Strong contrast + mascot facial features. |
| `--pure-white` | `#FFFFFF` | Backgrounds, breathing room. |
| `--soft-cream` | `#F3F1E8` | Secondary warm background (used in brand-guideline plates). |

**Playful accents** — use these sparingly for highlights, badges, and inside composite illustrations. They are *decorative*, not functional state colors.

| Token | Hex | Role |
| --- | --- | --- |
| `--vibrant-red` | `#E11D48` | Urgency, passion, "human energy". |
| `--energy-yellow` | `#FBBF24` | Optimism, highlights. |
| `--olive-green` | `#84CC16` | Growth, "go" signals. |

**Neutrals** — slate ramp (`--slate-50` … `--slate-900`) and a page background `--bg-page: #F5F5F5` (slightly warm).

**Vibe of imagery:** Cool, bright, hopeful. Lots of white. When color appears it's saturated and confident — no muted/pastel washes, no warm-grain photography, no duotones. The website's hero uses a subtle blue gradient pattern (`bg-pattern-2.png`) as a watermark behind the cream page.

### Typography
- **Primary font:** **Montserrat** (per brand guidelines). Used for both headers and body — the brand explicitly favors a single typeface for clean modern readability.
- **Fallback:** Segoe UI, then system-ui.
- **Live site discrepancy:** the production site uses Inter. Both are geometric sans-serifs with similar metrics. Montserrat is the brand-correct choice; Inter is the implemented choice. Flag and align.
- **Weights in use:** 400 / 500 / 600 / 700 / 800. Display sizes lean 700–800.
- **Letter-spacing:** Tight on large display (`-0.04em` / `-0.02em`). Wide on eyebrow labels (`0.15em`).
- **Line height:** 1.1 for display, 1.5–1.7 for body.

### Spacing & rhythm
4-pt base scale. Major rhythm beats are 16 / 24 / 40 / 64 / 96 / 128. Marketing sections breathe — expect 96–160px of vertical padding between sections. Inside a card, 32px is the standard inside-padding; large showcase cards (intro card, turning-point card) jump to 80px.

### Backgrounds
- **Page background** is a soft `#F5F5F5` cream with a subtle, fixed, full-bleed blue-gradient pattern image (`bg-pattern-2.png`) — never a hard gradient and never a solid white. This adds a hint of atmosphere without competing with content.
- **Surface backgrounds** are pure white (`#FFFFFF`) or a slightly cooler `--slate-50` for nested grids.
- **No full-bleed photography** as a page background. No grain. No noise overlays.
- **Patterns/textures:** the blue-gradient watermark is the only one. The rest of the texture is provided by blob illustrations and motion lines layered on white.

### Animation
The signature easing is `cubic-bezier(0.16, 1, 0.3, 1)` — a soft, decelerating ease. Used for fade-in-on-scroll, view transitions, and button hovers. Durations are 300–800ms — measured, never bouncy. Framer Motion handles the actual motion. No bounces, no springs, no rotation tricks; motion is always **opacity + small translateY (20–40px)**, fading into final position.

### Hover states
- **Primary buttons:** background goes from `--eko-blue` to `--eko-blue-deep` (`#1D4ED8`); add `translateY(-2px)` and bump shadow from `shadow-xs` → `shadow-sm`.
- **Secondary/link text:** color shifts from `--slate-600` → `--slate-900`. No underline appears on hover unless it's a body-text link.
- **Cards:** lift `translateY(-4px)` + shadow bump. Border stays the same.
- Transition duration is `0.2s ease` for color shifts, `0.3s var(--ease-out-soft)` for transforms.

### Press / active states
Buttons return to baseline (lose the `translateY`). No color-darken beyond the hover state. No scale-down. The aesthetic is "calm — never jittery."

### Borders
- Borders are hairlines: `1px solid rgba(0,0,0,0.05)` for ambient dividers, `1px solid var(--slate-100)` for cards, `1px solid var(--slate-200)` for inputs and pipeline columns.
- Borders are *quiet* — they delineate without competing.

### Shadow system
A four-step ladder. Shadows are diffuse and soft, never directional/punchy.

| Token | Use |
| --- | --- |
| `--shadow-xs` | Default button rest state |
| `--shadow-sm` | Button hover, soft card lift |
| `--shadow-md` | Tinted brand shadow (`rgba(0,102,255,0.12)`) — used on primary CTA |
| `--shadow-lg` | Pipeline / mockup cards |
| `--shadow-xl` | Large hero / intro showcase cards |

Inner shadows are not used. Drop shadows on the logo are **forbidden** (per guidelines).

### Protection gradients vs. capsules
The hero phone mockup uses a `mask-image: linear-gradient(to bottom, black 80%, transparent 100%)` so the bottom of the image fades into the page — a protection gradient instead of a hard crop. Pills (`border-radius: 9999px`) are the standard "capsule" used for nav-CTA, AI insight tags, and the "back to home" button.

### Transparency & blur
Sparingly. The sticky scroll-section's right-hand container uses `background: rgba(255,255,255,0.9)` + `backdrop-filter: blur(8px)`. The "back" button on the demo page uses the same recipe. **Don't overuse blur** — it's reserved for moments where content needs to feel "lifted" off the page.

### Corner radii
| Token | px | Where |
| --- | --- | --- |
| `--radius-sm` | 8px | Pipeline cards, small chips |
| `--radius-md` | 12px | Inputs, form fields, primary buttons |
| `--radius-lg` | 20px | Floating status cards |
| `--radius-xl` | 24px | Feature cards, deep-dive mockups |
| `--radius-2xl` | 32px | Demo card, support cards |
| `48px` | — | Intro showcase card (signature large radius) |
| `--radius-pill` | 9999px | Nav CTA, tags, back-button |

**Rule of thumb:** the bigger the surface, the bigger the radius. Hero containers go all the way to 48px.

### Cards
A typical eko card is **white**, with **`--radius-xl` to `--radius-2xl`** corners, **a hairline border** (`1px solid var(--border-subtle)`), and **`--shadow-xl`** elevation. No accent borders on the left edge. No tinted backgrounds. Hover lifts the card 4px and bumps the shadow one step.

### Layout rules
- Max content width: **1200px**, 1280px on richer mockup sections.
- Side padding: **40px** desktop, **20px** mobile.
- The navbar is **sticky** at top, transparent over the page background. It never gets a solid fill.
- The footer is a simple thin row, hairline border on top, low contrast.
- Hero is always **left-aligned** *or* **centered** — never right-aligned.

### Composite illustrations & motion-line backdrops
The brand's signature illustration vocabulary works two ways:

1. **Pre-Layered Composite Cluster** — the "trophy" illustration: blobs *stacked under* black motion-line knots, with the mascot peeking out. Use as a single anchor moment near a headline. **One per surface, max.**
2. **Scattered motion-line backdrop** — the more common usage. *Individual* squiggles, knots, dashes, and spirals from the motion-line vocabulary are sprinkled **behind** content as decorative texture. Each line is its own element, rotated independently, never repeating. Stroke is always navy `#111827`, ~5px weight, round caps. Foreground content sits on top with no scrim.

**Never** cluster the motion lines together in normal usage — that's reserved for the trophy composite. The default behavior is to spread them.

---

## ICONOGRAPHY

eko does not maintain a proprietary icon font or SVG sprite. The production site uses **[`lucide-react`](https://lucide.dev)** — a clean, geometric, two-tone line icon set with a 24px default size and ~1.5–2px stroke. Icons are rendered in `--eko-blue` (`#2B7AF3`) on white surfaces or white on blue surfaces.

**Approach:**
- **Library:** Lucide (lucide-react @ ~0.4xx). Stroke width 2, line caps round.
- **Color usage:** Icons in feature/CTA contexts use `--eko-blue`. Icons inside dark cards switch to neutral grays. Never multi-color icons.
- **Backgrounds:** Feature icons frequently sit inside a 56px rounded square (`--radius-md`) with `--eko-blue-soft` (`#EFF6FF`) tinted fill.
- **Sizes in use:** 16px (inline button), 20px (mock card headers), 24px (default), 32+px (feature tiles).

**Icons observed in the live site:**
`LayoutGrid · Bot · TrendingUp · Sparkles · ArrowRight · MessageSquare · ShoppingBag · Users · Zap · AtSign · ArrowUpRight`

> **Substitution note.** Because the brand has no first-party icon set, this design system loads Lucide from CDN inside its UI kits. If the team later commits to a custom set, swap the references in `ui_kits/website/index.html`.

**No emoji.** The personality budget belongs to the mascot.
**Unicode glyphs** appear only as arrows in copy (`→`, `←`) and as currency/units inside data.

**Brand illustration assets (in `assets/`):**
| File | What it is |
| --- | --- |
| `logo.png` | The full eko logo (blue mascot + black wordmark). **Primary.** |
| `logo-website.png` | Same logo as shipped on the live site. |
| `mascot.png` | Hand-drawn mascot in marker — used on the Thank-You page. Black on white. |
| `brand-overview.png` | Reference plate: master blobs, mascot expressions, motion-line vectors, color swatches, composite clusters. |
| `motion-line-vectors.png` | The line-knot / squiggle / dashed-line vocabulary, isolated. |
| `composite-cluster.png` | A high-quality composite cluster ready to drop into layouts. |
| `bg-pattern-2.png` | The fixed page-background blue gradient watermark. |
| `bg-pattern.jpg` | Alternate, more saturated blue gradient. |
| `hero-phone-final.png` | Hero phone mockup used on the live site. |
| `unified-channel.png` · `second-step.png` · `third-step.png` | Sticky-scroll feature illustrations. |
| `ecosystem-visualization.png` | The communication → intelligence → operations stack diagram. |
| `phone-frame.png` · `chat-screen.png` | Phone bezel + chat UI for in-mock screens. |
| `eko_brand_guidelines_v4.pdf` | The brand book itself. |

---

## How to use this system

1. In any new HTML artifact, link `colors_and_type.css` first:
   ```html
   <link rel="stylesheet" href="../colors_and_type.css">
   ```
2. Apply semantic type classes: `.eko-display`, `.eko-h1`, `.eko-h2`, `.eko-body`, `.eko-eyebrow`.
3. Use the variables for colors, radii, shadows, motion. Don't invent new ones.
4. For full surfaces, build on the components in `ui_kits/website/` — buttons, navbar, cards, form fields, hero, deep-dive rows are all factored out.
5. Reach for the mascot + composite cluster sparingly. They are anchor moments, not wallpaper.

---

## Caveats & open questions

- **Font files:** The brand-correct font (Montserrat) is loaded from Google Fonts CDN rather than self-hosted .woff2 files. If brand wants to self-host (typical for production), the team will need to drop weight files into `fonts/` and replace the `@import` at the top of `colors_and_type.css`.
- **Brand-vs-implementation drift:** The shipping website uses Inter / `#0066FF`. This system follows the *guidelines* (Montserrat / `#2B7AF3`). Decide one canonical pair and revise the other surface.
- **Mobile app:** Not in scope. No mobile codebase or Figma was provided, so no mobile UI kit is included.
- **Arabic typography:** The brand serves the Gulf and supports Arabic, but no Arabic type pairing is documented in v4 of the brand book. Recommend adding an Arabic companion (e.g. **IBM Plex Sans Arabic** or **Cairo**) before any Arabic copy ships.
