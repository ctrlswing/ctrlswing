# CTRLSWING Restructure Plan

## Overview

Reposition ctrlswing from "Your entire marketing system, built and running in days" to "Your marketing team for a fraction of the cost" — a one-man marketing team for small business owners. Lower pricing, new site architecture modeled after echelonn.io (case studies, blog, resources, CTA hierarchy), and audience growth through organic search, TVM workshop warm leads, and newsletter.

---

## Positioning

- **New headline:** "Your marketing team for a fraction of the cost"
- **Target audience:** Small business owners (horizontal, not niche-specific)
- **Differentiator:** One person, fully accountable, powered by agentic workflows (AI/agentic angle is behind the scenes — not the headline)
- **Brand voice:** Stays punchy and direct (no change)
- **TVM/Skool:** Referenced as credibility/social proof, not a separate nav item

## Traffic Strategy

- Organic search traffic (SEO)
- Warm leads from TVM workshop sessions (monthly labs) → /resources
- Possible paid search
- Newsletter audience growth (Kit)

---

## Offer Structure

### Pricing Tiers (3 tiers, replacing current 2)

| | Starter | Growth (recommended) | Full System |
|---|---|---|---|
| **One-time price** | ~$750 | ~$1,500 | ~$2,500 |
| **Monthly maintenance** | $99/mo | $149/mo | $249/mo |
| Custom site build | x | x | x |
| Mobile optimization | x | x | x |
| SEO foundation | x | x | x |
| Analytics setup | x | x | x |
| Copywriting | x | x | x |
| Email automations | - | x (2-3 flows) | x (4+ flows) |
| Conversion tracking | - | x | x |
| Google Ads setup | - | - | x |
| Strategy session | - | - | x |
| Priority support | - | - | x |

### Add-ons (available separately)

- Google Ads Management — TBD/mo
- Custom Email Campaign — TBD/ea
- Blog Posts — TBD/ea
- Additional Landing Page — TBD/ea

---

## Site Architecture

### Navigation

`Home | Case Studies | Blog | Resources` + Newsletter (visually differentiated) + "Book a Call" (primary CTA button)

### CTA Hierarchy

- **Primary CTA:** "Book a Call" → /start quiz
- **Secondary CTA:** Newsletter subscribe (Kit, "AI-powered marketing tips for small businesses")
- **CTA repetition:** After case studies, pricing, and FAQ sections (echelonn pattern)
- **Hero:** Both primary + secondary CTA

### Pages

| Route | Status | Purpose |
|-------|--------|---------|
| `/` | Modify | Homepage — restructured sections with new positioning and pricing |
| `/start` | Modify | Multi-step quiz → Discord webhook on submit → cal.com embed on confirmation |
| `/case-studies` | New | Dedicated page: Valle Ballet, Downtown BJJ, Born Simple |
| `/blog` | New | Structure only, no content yet. MDX-based. |
| `/resources` | New | Free .skill files, .plugin files, agent assets. Email-gated downloads. |

---

## Implementation

### Phase 0: Foundation (shared components + data)

Everything else depends on these.

| Task | File | What |
|------|------|------|
| 0.1 | **Create** `src/components/cta-section.tsx` | Reusable CTA block with 3 variants: `hero` (dual CTA), `inline` (compact, used after sections), `final` (full-bleed closer). Primary = "Book a Call" → /start. Secondary = newsletter form. |
| 0.2 | **Create** `src/components/newsletter-form.tsx` | Client component. Email input + subscribe button. Variants: `light`, `dark`, `nav`. Posts to Kit endpoint via `NEXT_PUBLIC_KIT_FORM_URL` env var. Graceful fallback if not configured. |
| 0.3 | **Create** `src/data/case-studies.ts` | Extract Valle Ballet, Downtown BJJ, Born Simple into shared data. Add extended fields (`challenge`, `solution`, `results`, `services`) with placeholder copy for the dedicated page. Remove Fungushead. |
| 0.4 | **Create** `src/data/faqs.ts` | Reworked FAQs for new positioning: "What do I get monthly?", "How is this different from an agency?", "What if I have a site?", "Do I own everything?", "Can I upgrade later?", "What does maintenance include?", etc. |
| 0.5 | **Create** `src/data/pricing.ts` | 3 tiers (Starter $750+$99/mo, Growth $1,500+$149/mo recommended, Full System $2,500+$249/mo) + add-ons array. |

### Phase 1: Navigation & Layout

| Task | File | What |
|------|------|------|
| 1.1 | **Modify** `src/components/nav.tsx` | New links: Home, Case Studies, Blog, Resources. Newsletter link (visually differentiated). "Book a Call" as primary CTA button. Remove anchor-link scroll behavior. |
| 1.2 | **Modify** `src/components/footer.tsx` | Add newsletter form (dark variant), new page links, TVM/Skool credibility reference. |
| 1.3 | **Modify** `src/app/layout.tsx` | Update meta title/description/OG/Twitter to reflect new positioning. |
| 1.4 | **Modify** `src/app/opengraph-image.tsx` + `twitter-image.tsx` | Update headline and alt text. |

### Phase 2: Homepage Rewrite

**Modify** `src/app/page.tsx` — the biggest single task.

| Section | Changes |
|---------|---------|
| **Hero** | New headline: "Your marketing team for a fraction of the cost." Dual CTA (Book a Call + Newsletter). Remove video placeholder. |
| **Trust strip** | Keep metrics, add TVM/Skool community credibility. |
| **Problem/Solution** | Rework copy: expensive agencies vs. DIY vs. having a dedicated marketing person at a fraction of the cost. Same layout. |
| **How it works** | 3 steps: Book a Call → I build your system → Your marketing goes live. |
| **Case studies** | 3 cards (not 4), import from data file. "View All" link to /case-studies. **CTA after.** |
| **Pricing** | 3-tier grid. One-time price dominant (Anton, large), monthly below (Satoshi, smaller). Growth tier recommended with visual lift. Add-ons table. **CTA after.** |
| **FAQ** | Import from data file. Reworked questions. **CTA after.** |
| **Final CTA** | "Ready to get your marketing team?" using `CTASection` final variant. |
| **JSON-LD** | Update descriptions, 3 offers, new FAQ entries. |

### Phase 3: Quiz Rework

| Task | File | What |
|------|------|------|
| 3.1 | **Modify** `src/app/start/page.tsx` | Steps 1-4 unchanged. Step 5: Discord webhook fires on submit (unchanged), then show cal.com `<iframe>` embed for immediate booking + "I'll wait to hear from you" fallback below. Cal URL from `NEXT_PUBLIC_CAL_URL` env var. |
| 3.2 | **Modify** `src/app/start/layout.tsx` | Title → "Book a Call", update description. |
| 3.3 | **Create** `.env.example` | Document `DISCORD_WEBHOOK_URL`, `NEXT_PUBLIC_CAL_URL`, `NEXT_PUBLIC_KIT_FORM_URL`. |

### Phase 4: New Pages (parallelizable)

#### 4.1 — Case Studies (`/case-studies`)

- **Create** `src/app/case-studies/page.tsx` + `layout.tsx`
- Full-page showcase of 3 projects. Each gets: large screenshot, name/location, challenge, solution, results list, services tags.
- Alternating light/dark sections. Final CTA at bottom.

#### 4.2 — Blog (`/blog`)

- **Install** `@next/mdx`, `@mdx-js/react`, `gray-matter`
- **Modify** `next.config.ts` for MDX support
- **Create** `src/lib/blog.ts` (getAllPosts, getPostBySlug)
- **Create** `src/components/mdx-components.tsx` (design system typography for MDX)
- **Create** `src/app/blog/page.tsx` (index — handles empty state with "Coming soon")
- **Create** `src/app/blog/[slug]/page.tsx` (individual post)
- **Create** `src/app/blog/layout.tsx`
- **Create** `src/content/blog/` (empty directory for future MDX posts)

#### 4.3 — Resources (`/resources`)

- **Create** `src/data/resources.ts` (resource entries with placeholder data)
- **Create** `src/components/resource-card.tsx` (client component — download gated behind email capture via Kit)
- **Create** `src/app/resources/page.tsx` + `layout.tsx`
- Grid of downloadable assets. Click "Download" → email form → subscribe → unlock download.

### Phase 5: SEO & Misc

| Task | File | What |
|------|------|------|
| 5.1 | **Modify** `src/app/sitemap.ts` | Add /case-studies, /blog, /resources + dynamic blog post entries. |
| 5.2 | **Verify** `src/app/robots.ts` | New routes crawlable. |
| 5.3 | **Modify** `src/app/not-found.tsx` | "Get Started" → "Book a Call". |

### Phase 6: Cleanup

| Task | What |
|------|------|
| 6.1 | Delete `public/case-studies/fungushead.png` + `.webp` |
| 6.2 | Update `DESIGN.md` — new components, 3-tier pricing, blog typography |
| 6.3 | Install dependencies (`@next/mdx`, `@mdx-js/react`, `gray-matter`) |

---

## Execution Order

```
Phase 0  ──→  Phase 1  ──→  Phase 2 (homepage)
                        ├──→  Phase 3 (quiz)      ──→  Phase 5
                        └──→  Phase 4 (new pages)  ──→  Phase 5
                                                         ↓
                                                      Phase 6
```

Phases 2, 3, and 4 can run in parallel once 0 and 1 are done.

---

## File Manifest

### New Files (14 + 1 directory)

| File | Purpose |
|------|---------|
| `src/components/cta-section.tsx` | Reusable CTA block (hero/inline/final variants) |
| `src/components/newsletter-form.tsx` | Newsletter email capture form |
| `src/components/resource-card.tsx` | Download-gated resource card |
| `src/components/mdx-components.tsx` | Custom MDX component overrides for blog |
| `src/data/case-studies.ts` | Case study data (shared between homepage and /case-studies) |
| `src/data/faqs.ts` | FAQ data (shared, reworked for new positioning) |
| `src/data/pricing.ts` | Pricing tiers + add-ons data |
| `src/data/resources.ts` | Downloadable resources data |
| `src/lib/blog.ts` | Blog post reading/parsing utilities |
| `src/app/case-studies/page.tsx` | Dedicated case studies page |
| `src/app/case-studies/layout.tsx` | Case studies metadata |
| `src/app/blog/page.tsx` | Blog index page |
| `src/app/blog/[slug]/page.tsx` | Individual blog post page |
| `src/app/blog/layout.tsx` | Blog metadata |
| `src/app/resources/page.tsx` | Resources/downloads page |
| `src/app/resources/layout.tsx` | Resources metadata |
| `src/content/blog/` | Directory for MDX blog posts (initially empty) |
| `.env.example` | Environment variable documentation |

### Modified Files (13)

| File | Changes |
|------|---------|
| `src/app/page.tsx` | Complete content rewrite: new hero, 3-tier pricing, 3 case studies, repeated CTAs, new copy, updated JSON-LD |
| `src/components/nav.tsx` | New link structure, "Book a Call" CTA, newsletter link, remove anchor links |
| `src/components/footer.tsx` | Add newsletter form, page links, TVM/Skool reference |
| `src/app/layout.tsx` | Updated metadata for new positioning |
| `src/app/opengraph-image.tsx` | New headline text and alt text |
| `src/app/twitter-image.tsx` | New headline text and alt text |
| `src/app/start/page.tsx` | Step 5 replaced with Cal.com embed + fallback text |
| `src/app/start/layout.tsx` | Updated title/description metadata |
| `src/app/sitemap.ts` | Add new routes + dynamic blog entries |
| `src/app/robots.ts` | Verify new routes crawlable |
| `src/app/not-found.tsx` | Update CTA label to "Book a Call" |
| `next.config.ts` | Add MDX plugin configuration |
| `package.json` | Add @next/mdx, @mdx-js/react, gray-matter |

### Deleted Files (2)

| File | Reason |
|------|--------|
| `public/case-studies/fungushead.png` | Fungushead removed from case studies |
| `public/case-studies/fungushead.webp` | Fungushead removed from case studies |

---

## Risks & Considerations

1. **Kit integration**: Newsletter form requires Kit endpoint. Implement graceful fallback (log to console) until `NEXT_PUBLIC_KIT_FORM_URL` is configured.
2. **Cal.com embed**: Step 5 iframe depends on Cal.com account. Conditional render — fall back to current confirmation if `NEXT_PUBLIC_CAL_URL` is not set.
3. **MDX + Next 16**: Verify `@next/mdx` compatibility with Next 16.2.1. Fallback: `next-mdx-remote`.
4. **Blog empty state**: Blog launches with no content. Index page must show "Coming soon" cleanly.
5. **Pricing display**: One-time price should be visually dominant (Anton, large). Monthly price clearly secondary (Satoshi, smaller, muted) to avoid confusion.
6. **Resources lead gate**: Email-gate adds friction. Consider making some resources ungated via a `gated: boolean` field in resource data.
7. **Homepage length**: Inline CTAs after sections should be compact (single row, not full-bleed) to avoid bloating the page.
