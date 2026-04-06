# Design System: CTRLSWING

## 1. Visual Theme & Atmosphere

CTRLSWING's interface is a high-energy marketing agency landing page — bold, direct, and unapologetically confident. The design is built on stark contrasts: a clean white canvas against deep charcoal sections, punctuated by a warm yellow accent (`#ffe17c`) that acts as the visual heartbeat of every page. Where most agency sites lean into minimalist restraint or neon-tech aesthetics, CTRLSWING's design radiates urgency and momentum — it says "we ship fast" before you've read a word.

The signature move is the Anton typeface — a condensed, all-caps display font that gives every headline the impact of a poster. Combined with Satoshi as the body font (clean, geometric, modern), the typographic pairing creates a hierarchy that's impossible to miss: Anton shouts, Satoshi explains. Headlines are set at extreme sizes (up to `text-9xl`) with a crushingly tight line-height of 0.9, creating a stacked, poster-like cadence that demands attention.

What makes the design cohesive is its disciplined four-color palette. Yellow for action, charcoal for authority, sage for subtlety, white for breathing room. Every interactive element earns the yellow. Every dark section earns its weight. A subtle 40px grid pattern overlays key sections, giving the design a structured, engineered feel — like graph paper behind the boldness.

**Key Characteristics:**
- Clean white canvas with deep charcoal (`#171e19`) dark sections for chapter-like rhythm
- Yellow accent (`#ffe17c`) reserved for CTAs, highlights, and high-signal moments
- Anton display font (condensed, uppercase) for all headlines — poster-like impact
- Satoshi geometric sans for body text — clean and modern
- 40px grid pattern overlays on key sections for a structured, engineered feel
- High-contrast light/dark section alternation creating visual chapters
- Glow shadows on CTAs (`0_8px_30px`) instead of traditional drop shadows
- Browser-chrome-styled case study cards as a distinctive visual motif

## 2. Color Palette & Roles

### Primary
- **Yellow** (`#ffe17c`): The core accent color — a warm, buttery gold used for CTAs, highlights, focus states, selected elements, and brand moments. The only chromatic color in the system.
- **Charcoal** (`#171e19`): The primary dark color — a near-black with a faint green undertone. Used for text on light backgrounds, dark section backgrounds, and primary buttons.

### Secondary & Accent
- **Sage** (`#b7c6c2`): A muted blue-green gray for secondary text on dark backgrounds, subtle borders, and de-emphasized content. The quiet counterpart to yellow's energy.
- **Dark Gray** (`#272727`): A warmer secondary dark for form backgrounds, selected states, and card surfaces within dark sections.

### Surface & Background
- **White** (`#ffffff`): The primary page background — clean and bright, providing maximum contrast for charcoal text and yellow accents.
- **Charcoal** (`#171e19`): Dark section backgrounds — used for problem/solution splits, footer, and alternating content sections.
- **Dark Gray** (`#272727`): Secondary dark surface for form containers, selected radio options, and nested dark elements.

### Neutrals & Text
- **Charcoal** (`#171e19`): Primary text on light surfaces.
- **White** (`#ffffff`): Primary text on dark surfaces.
- **Sage** (`#b7c6c2`): Secondary text on dark surfaces — descriptions, labels, supporting copy.
- **Charcoal/80** (`rgba(23,30,25,0.8)`): Secondary body text on light surfaces (FAQ answers, descriptions).
- **Charcoal/60–70**: Tertiary text, metadata, de-emphasized content on light surfaces.

### Opacity System
Heavy use of opacity modifiers on charcoal and sage for subtle variations:
- `/5`, `/10` — Borders, grid lines, faintest separators
- `/20`, `/30` — Subtle borders, secondary dividers
- `/50` — Disabled states, half-strength elements
- `/60`, `/70`, `/80` — Secondary text, muted content
- `/90` — Near-full-strength text

### Semantic
- **Error Red** (`text-red-400`): Form validation errors.
- **Focus Yellow** (`#ffe17c`): 2px outline with 2px offset on focus-visible — yellow is the accessibility color, not blue.
- **Selection Yellow** (`#ffe17c` bg, `#171e19` text): Custom text selection colors matching the brand.

### Background Patterns
- **Grid Light**: `linear-gradient(to right, rgba(23,30,25,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,30,25,0.05) 1px, transparent 1px)` at 40px intervals.
- **Grid Dark**: `linear-gradient(to right, rgba(183,198,194,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(183,198,194,0.05) 1px, transparent 1px)` at 40px intervals.
- Applied to: Hero, Problem/Solution, Pricing, Form page backgrounds.

### Gradient System
- CTRLSWING's design is **gradient-free**. Depth and energy come from stark light/dark section alternation, glow shadows on interactive elements, and the yellow accent punching through neutral surfaces.

## 3. Typography Rules

### Font Family
- **Headline / Display**: `Anton` (Google Fonts), fallback: `sans-serif`
- **Body / UI**: `Satoshi` (Fontshare), fallback: `sans-serif`

*Note: Anton is a free Google Font. Satoshi is available from Fontshare. Both are web-safe with proper loading.*

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Case | Notes |
|------|------|------|--------|-------------|----------------|------|-------|
| Hero Display | Anton | 9xl (8rem, lg) | 400 | 0.9 (tightest) | normal | uppercase | Maximum impact, poster presence |
| Hero Display (md) | Anton | 8xl (6rem) | 400 | 0.9 | normal | uppercase | Tablet hero sizing |
| Hero Display (sm) | Anton | 6xl (3.75rem) | 400 | 0.9 | normal | uppercase | Mobile hero sizing |
| Section Heading | Anton | 5xl–6xl | 400 | 0.9 | normal | uppercase | Feature section anchors |
| Sub-heading | Anton | 4xl (2.25rem) | 400 | 0.9 | normal | uppercase | Step titles, pricing tiers |
| Card Title | Anton | 3xl (1.875rem) | 400 | 0.9 | normal | uppercase | Card headings |
| Small Heading | Anton | 2xl (1.5rem) | 400 | normal | normal | uppercase | Buttons, labels, FAQ questions |
| Body Large | Satoshi | lg (1.125rem) | 400 | default (1.5) | normal | normal | Primary body text, descriptions |
| Body Standard | Satoshi | base (1rem) | 400–500 | default | normal | normal | Standard body, button labels |
| Body Small | Satoshi | sm (0.875rem) | 400–500 | default | normal | normal | Navigation, metadata |
| Label Uppercase | Satoshi | sm–xs | 500 | default | widest/wider | uppercase | Section labels, badges, overlines |
| Caption | Satoshi | xs (0.75rem) | 400 | default | normal | normal | Timestamps, small metadata |

### Principles
- **Anton for impact, Satoshi for clarity**: Anton carries all headlines in a single weight (400) — the condensed letterforms and uppercase transform do all the work. No bold needed. Satoshi handles everything else with quiet geometric precision.
- **Always uppercase for Anton**: Anton is never used in sentence case. The condensed vertical proportions are designed for all-caps settings.
- **Ultra-tight headline line-height**: The custom `0.9` line-height (tighter than 1.0) creates stacked, poster-like headlines where lines almost touch — this is the typographic signature of the brand.
- **Generous body contrast**: Body text at default 1.5 line-height provides comfortable reading that contrasts with the compressed headline rhythm.
- **Tracking on small labels**: Uppercase Satoshi text at small sizes uses `tracking-widest` or `tracking-wider` to maintain readability and create a refined label aesthetic.

## 4. Component Stylings

### Buttons

**Primary CTA (Yellow)**
- Background: Yellow (`#ffe17c`)
- Text: Charcoal (`#171e19`), Anton, uppercase, text-xl to text-2xl
- Padding: `px-10 py-5`
- Radius: rounded-lg (8px)
- Shadow: `0 8px 30px rgba(255,225,124,0.4)` (yellow glow)
- Hover: bg-charcoal, text-white, shadow shifts to `0 8px 30px rgba(23,30,25,0.4)`, lift `-translate-y-1`
- Transition: all 300ms
- The hero button — maximum signal, maximum energy

**Dark Button (Nav CTA / Secondary)**
- Background: Charcoal (`#171e19`)
- Text: White, Anton, uppercase, text-lg
- Padding: `px-6 py-2`
- Radius: rounded-full (pill)
- Hover: bg-yellow, text-charcoal, scale 1.05
- Transition: all 300ms
- Used in navigation and secondary contexts

**Outline Button (Secondary)**
- Background: White
- Border: 2px solid Charcoal
- Text: Charcoal, Anton, uppercase
- Hover: bg-charcoal, text-white
- Transition: colors 300ms
- Clean secondary action

**Form Button (Contextual)**
- Background: Yellow (`#ffe17c`)
- Text: Charcoal, Anton, uppercase, text-xl
- Padding: `py-5` full-width
- Radius: rounded-xl (12px)
- Disabled: bg-yellow/50, text-charcoal/50, cursor-not-allowed
- Hover (enabled): bg-white
- Used within dark form contexts

### Cards & Containers

**Case Study Card**
- Background: White (light variant) or Charcoal (dark variant)
- Border: `1px solid charcoal/10` (light) or `charcoal` (dark)
- Radius: rounded-xl (12px)
- Overflow: hidden
- Browser chrome header: `h-7` with colored dots (red, yellow, green)
- Screenshot area: `aspect-[4/3]`, object-cover, object-top
- Hover: scale 1.02, 500ms transform transition
- Shadow: shadow-xl on container

**Pricing Card**
- Background: White
- Border: `1px solid charcoal/10` (standard) or `charcoal` (featured)
- Radius: rounded-2xl (16px)
- Padding: `p-8 md:p-12`
- Featured card: `md:-translate-y-4` (lifted above siblings)
- "Recommended" badge: absolute positioned, bg-yellow, rounded-bl-xl
- Hover: shadow-2xl transition

**Maintenance Card**
- Layout: flex row at md+, column on mobile
- Padding: `p-6 md:p-8`
- Radius: rounded-xl (12px)
- Border: standard charcoal/10

### Inputs & Forms

**Text Input (Dark Form)**
- Background: transparent
- Border: bottom-only, `1px solid sage/20`
- Text: white, Satoshi, text-lg
- Padding: `py-4`
- Focus: border-color shifts to yellow, no ring, no outline
- Floating label: sage text, transitions up and to yellow when filled

**Radio Option Cards**
- Padding: `p-6`
- Radius: rounded-xl (12px)
- Border: `1px solid sage/10` (unselected), `4px left border yellow + bg-darkgray` (selected)
- Transition: all 300ms
- Hover: matches selected state

**Custom Checkboxes**
- Size: `h-6 w-6`
- Radius: rounded-md (6px)
- Border: sage/30 (unchecked), yellow with yellow bg (checked)
- Check icon inside when selected

### Navigation
- Position: fixed top, z-50
- Height: `h-20`
- Background: `white/90` with `backdrop-blur-md`
- Border: `border-b border-charcoal/10`
- Logo: Anton, text-3xl, uppercase, tracking-wide
- Links: Satoshi, text-sm, font-medium
- Link hover: text-yellow, transition-colors 200ms
- CTA: Dark button style (charcoal pill)
- Mobile: hamburger menu, full-width dropdown with shadow

### FAQ Accordion
- Element: native `<details>` / `<summary>`
- Border: `border-b border-charcoal/10`
- Summary padding: `py-6`
- Question: Anton, text-2xl, uppercase
- Answer: Satoshi, text-lg, charcoal/80, `pb-6 pr-12`
- Chevron: rotates 180deg on open, transition

### Footer
- Background: Charcoal (`#171e19`)
- Text: sage/80, Satoshi, text-sm
- Border: `border-t border-sage/10`
- Padding: `py-12 px-6`
- Social icons: `w-6 h-6`, white, hover yellow
- Max-width: `max-w-7xl`, centered

## 5. Layout Principles

### Spacing System
- Base unit: 4px (Tailwind default)
- Section vertical padding: `py-24 md:py-32` (96px / 128px)
- Section horizontal padding: `px-6` (24px)
- Card internal padding: `p-8 md:p-12` (32px / 48px)
- Component gaps: `gap-4` to `gap-16` depending on context
- Form field spacing: `space-y-6` (24px)
- List item spacing: `space-y-4` to `space-y-8`

### Grid & Container
- Max container width: `max-w-7xl` (80rem / 1280px), centered with `mx-auto`
- Secondary widths: `max-w-6xl` (pricing), `max-w-4xl` (hero video, CTA), `max-w-3xl` (FAQ), `max-w-2xl` (form, descriptions)
- Feature grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` (case studies)
- Pricing grid: `grid-cols-1 md:grid-cols-2`
- How-it-works: `grid-cols-1 lg:grid-cols-12` (sticky sidebar + content)
- Content centering: `flex flex-col items-center text-center` for hero sections

### Whitespace Philosophy
- **Poster pacing**: Each section commands the full viewport with generous vertical padding — the design reads more like a sequence of posters than a scrolling page.
- **Compressed headlines, generous body**: The 0.9 line-height on headlines compresses visual space at the top of each section, creating tension that the relaxed body text releases.
- **Dark/light chapters**: Alternating between white and charcoal sections creates natural reading boundaries — each section is its own environment.

### Border Radius Scale
- Sharp/minimal (0–4px): Structural elements, line separators
- Subtly rounded (6px / `rounded-md`): Custom checkboxes, small UI elements
- Comfortably rounded (8px / `rounded-lg`): Primary CTA buttons, standard elements
- Standard rounded (12px / `rounded-xl`): Cards, form inputs, most containers
- Generously rounded (16px / `rounded-2xl`): Featured cards, prominent containers
- Fully rounded (9999px / `rounded-full`): Pill buttons, navigation CTA, badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Page backgrounds, inline text |
| Bordered (Level 1) | `1px solid charcoal/10` (light) or `sage/10` (dark) | Standard cards, section dividers |
| Subtle (Level 2) | `shadow-sm` | Light card elevation |
| Elevated (Level 3) | `shadow-xl` | Case study cards, pricing cards |
| Prominent (Level 4) | `shadow-2xl` | Hero video, final CTA, featured pricing |
| Glow (Level 5) | `0 8px 30px rgba(255,225,124,0.4)` | Yellow CTA buttons — branded glow |
| Glow Dark (Level 5b) | `0 8px 30px rgba(23,30,25,0.4)` | Hover state — charcoal glow replacing yellow |

**Shadow Philosophy**: CTRLSWING communicates depth through **colored glow shadows** on interactive elements and **scale transitions** on cards. The signature yellow glow (`rgba(255,225,124,0.4)`) on CTAs creates an illuminated, energetic effect — as if the button is emitting light. On hover, the glow swaps to a dark charcoal shadow, creating a dramatic inversion. Cards use standard elevation shadows (`shadow-xl`, `shadow-2xl`) for clean layering without brand-colored effects.

### Decorative Depth
- **Light/Dark alternation**: The most dramatic depth effect comes from alternating between white and charcoal sections — entire sections shift the ambient environment.
- **Featured card lift**: The recommended pricing card uses `md:-translate-y-4` to physically elevate above its siblings.
- **Grid pattern overlay**: Subtle 40px grid lines add a layer of structured texture without competing with content.

## 7. Animations & Transitions

### Standard Transitions
- **Default**: `transition-all duration-300` — the workhorse transition for buttons, cards, and interactive elements.
- **Color-only**: `transition-colors duration-200` — fast color shifts for links and text hover states.
- **Transform**: `transition-transform duration-500` — smooth card hover scales, longer for emphasis.
- **Shadow**: `transition-shadow duration-300` — shadow transitions on card hover.

### Hover Behaviors
- **Button lift**: `hover:-translate-y-1` — subtle upward movement on CTA buttons.
- **Button scale**: `hover:scale-105` — gentle enlargement on secondary buttons.
- **Card scale**: `group-hover:scale-[1.02]` — barely perceptible growth on case study cards.
- **Icon scale**: `hover:scale-110` or `group-hover:scale-110` — slightly more pronounced for small elements.
- **Color swap**: Buttons swap bg/text colors on hover (yellow->charcoal, charcoal->yellow).

### Keyframe Animations
- **slideDown**: `translateY(-10px) → translateY(0)` with opacity — accordion content reveal.
- **fadeIn**: `translateY(10px) → translateY(0)` with opacity — form step transitions (0.3s ease-in-out).
- **pulse**: `animate-pulse` — hero status badge, subtle breathing effect.

### Easing
- Default: ease-in-out
- Custom: `cubic-bezier(0.4, 0, 0.2, 1)` for accordion animations.

## 8. Do's and Don'ts

### Do
- Use white (`#ffffff`) as the primary light background — the clean canvas IS the CTRLSWING personality
- Use Anton at weight 400, always uppercase — the condensed form does the heavy lifting
- Use Yellow (`#ffe17c`) only for CTAs, interactive highlights, and the highest-signal brand moments
- Keep the palette to four colors: yellow, charcoal, sage, white — no additional hues
- Use glow shadows (`0 8px 30px`) on yellow CTAs for the branded illumination effect
- Maintain the display/body split — Anton for headlines, Satoshi for everything else
- Use the ultra-tight 0.9 line-height on all Anton headings for the poster-like stacking
- Alternate between light and dark sections to create chapter-like page rhythm
- Apply the 40px grid pattern on key sections for structured texture
- Use opacity modifiers on charcoal/sage for subtle border and text variations

### Don't
- Don't use Anton in sentence case or lowercase — it's always uppercase
- Don't use bold weights on Anton — 400 is the only weight; the condensed form provides the emphasis
- Don't introduce colors beyond yellow, charcoal, sage, and white — the palette is deliberately minimal
- Don't use traditional drop shadows on buttons — glow shadows are the brand treatment
- Don't reduce Anton line-height below 0.9 — it's already at the compression limit
- Don't use serif fonts anywhere — the design language is fully geometric sans
- Don't use the grid pattern on every section — reserve it for hero, pricing, and form backgrounds
- Don't use rounded-full on cards or containers — pill shapes are reserved for nav buttons and badges
- Don't add gradients — depth comes from section color alternation and glow shadows
- Don't use cool blues or teals for interactive states — yellow is the universal interactive color (even for focus outlines)

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Stacked layouts, hamburger nav, text-6xl hero, py-24 sections |
| Tablet | 768–1023px (md) | 2-column grids, inline nav, text-7xl–8xl hero, py-32 sections |
| Desktop | 1024px+ (lg) | Full 4-column grids, 12-column layouts, text-9xl hero, sticky elements |

### Touch Targets
- Navigation CTA: pill button with generous padding
- Cards: entire surface is interactive (wrapped in links)
- Buttons: minimum py-5 on primary CTAs
- Recommended minimum: 44x44px

### Collapsing Strategy
- **Navigation**: Full horizontal nav collapses to hamburger at mobile
- **Feature grids**: `grid-cols-4` → `grid-cols-2` → `grid-cols-1`
- **Hero text**: `text-9xl` → `text-8xl` → `text-6xl` progressive scaling
- **Pricing cards**: 2-column → stacked, featured card loses vertical lift on mobile
- **How-it-works**: 12-column with sticky sidebar → single column stacked
- **Section padding**: `py-32` → `py-24`, `px-12` → `px-6`
- **Flex direction**: `flex-row` → `flex-col` for most horizontal layouts

### Image Behavior
- Case study screenshots scale within rounded containers using `object-cover`
- Aspect ratios maintained: `aspect-[4/3]` for case studies, `aspect-video` for hero
- No art direction changes between breakpoints — images scale proportionally

## 9. Z-Index Layering

| Level | Z-Index | Use |
|-------|---------|-----|
| Skip link | z-[100] | Accessibility skip-to-content link |
| Navigation | z-50 | Fixed top nav bar |
| Form header | z-20 | Sticky form progress bar |
| Content | z-10 | Standard elevated content |
| Base | z-0 | Default layer |
| Background | z-[-1] | Grid patterns, decorative overlays |

## 10. Accessibility

- **Focus visible**: `outline: 2px solid #ffe17c; outline-offset: 2px` — yellow focus rings on all focusable elements
- **Selection**: Yellow background with charcoal text
- **Skip link**: sr-only by default, appears on focus with yellow bg and Anton text
- **Semantic HTML**: Proper heading hierarchy, `<main>`, `<section>`, `<nav>`, `<footer>`, `<details>`/`<summary>`
- **Form labels**: Associated via `htmlFor`, floating label pattern with visual feedback
- **ARIA**: `aria-label` on icon-only links, `aria-expanded` on mobile menu, `aria-hidden` on decorative elements
- **Screen readers**: `.sr-only` text on icon buttons and decorative elements
- **Color contrast**: High contrast by design — charcoal on white, white on charcoal, yellow accents pass on both

## 11. Agent Prompt Guide

### Quick Color Reference
- Brand Accent: "Yellow (#ffe17c)"
- Primary Dark: "Charcoal (#171e19)"
- Secondary Dark: "Dark Gray (#272727)"
- Muted Accent: "Sage (#b7c6c2)"
- Light Surface: "White (#ffffff)"
- Subtle Border (light): "charcoal/10"
- Subtle Border (dark): "sage/10"

### Example Component Prompts
- "Create a hero section on white with a headline at text-9xl Anton weight 400, line-height 0.9, uppercase. Use Charcoal (#171e19) text. Highlight one word with a Yellow (#ffe17c) background rotated 15deg behind it. Add a subtitle in Charcoal/70 at text-lg Satoshi. Place a Yellow CTA button with Charcoal text, rounded-lg, glow shadow (0 8px 30px rgba(255,225,124,0.4))."
- "Design a case study card on white with 1px solid charcoal/10 border and rounded-xl. Add a browser chrome header (h-7) with three colored dots. Screenshot area at aspect-[4/3] with object-cover. Hover: scale 1.02 over 500ms. Shadow-xl on container."
- "Build a dark section on Charcoal (#171e19) with white headline text in Anton at text-5xl uppercase, line-height 0.9. Use Sage (#b7c6c2) for body text at text-lg Satoshi. Apply grid pattern overlay at 40px intervals with sage/5 lines."
- "Create a pricing card on white with rounded-2xl, 1px solid charcoal/10 border. Title in Anton text-3xl uppercase. Price in Anton text-5xl. Features list in Satoshi text-lg. Add a Yellow CTA button full-width. For featured variant: add charcoal border, md:-translate-y-4, and 'Recommended' badge (bg-yellow, Anton text-sm, rounded-bl-xl)."
- "Create a form step on Charcoal (#171e19) with grid pattern overlay. Radio option cards: rounded-xl, p-6, border sage/10. Selected state: 4px left border yellow, bg-darkgray (#272727). Input fields: transparent bg, bottom border sage/20 only, white text, focus border yellow. Floating labels in Sage."

### Iteration Guide
1. Focus on ONE component at a time
2. Reference specific color names — "use Sage (#b7c6c2)" not "make it gray"
3. Always specify Anton vs Satoshi explicitly — "Anton for the heading, Satoshi for the body"
4. For Anton, always include "uppercase" and "weight 400" — it has no other valid configuration
5. For shadows, use "glow shadow (0 8px 30px rgba(255,225,124,0.4))" for CTAs — never generic "drop shadow"
6. Specify the background context — "on white" or "on Charcoal (#171e19)"
7. Include the grid pattern when applicable — "with 40px grid pattern overlay at charcoal/5 lines"
8. For hover states, describe the color swap — "hover swaps to bg-charcoal text-white" not just "hover effect"
