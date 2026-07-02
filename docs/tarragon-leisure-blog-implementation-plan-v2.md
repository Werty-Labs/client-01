# Tarragon Leisure — Blog Section Implementation Plan (v2)
**Domain:** tarragonleisure.com | **Framework:** Next.js App Router (React 19) + Tailwind CSS
**Prepared:** July 2026 (revision of June 2026 plan) | **Goal:** Drive organic + AI-Overview-cited traffic from international luxury travel audiences via SEO-optimised static blog pages

> **What changed in this revision:** Corrected the Core Web Vitals target (FID → INP, LCP threshold tightened), added AI Overview / Generative Engine Optimization (GEO) guidance throughout, added a visa/ETA/digital-nomad keyword cluster reflecting Sri Lanka's 2026 policy changes, added FAQPage schema, added competitive-differentiation steps, and expanded the content plan from 12 to 15 articles. Everything from the original plan is preserved except where explicitly marked **[UPDATED]** or **[NEW]**.

---

## Table of Contents

1. [Keyword Research & Priority Framework](#1-keyword-research--priority-framework)
2. [Technical Architecture](#2-technical-architecture)
3. [SEO Infrastructure](#3-seo-infrastructure)
4. [AI Overview / GEO Optimization](#4-ai-overview--geo-optimization-new)
5. [Blog Content Plan — 15 Articles](#5-blog-content-plan--15-articles)
6. [Internal Linking Strategy](#6-internal-linking-strategy)
7. [Competitive Differentiation](#7-competitive-differentiation-new)
8. [Rollout Phases](#8-rollout-phases)
9. [Performance Tracking](#9-performance-tracking)

---

## 1. Keyword Research & Priority Framework

### Methodology

Keyword prioritisation is based on cross-referencing four signals:

- **Google Search Console** (once blog is live) — track impressions vs. clicks for quick wins, plus the new **GenAI performance report** for AI Overview / AI Mode citation tracking **[UPDATED]**
- **Semrush / Ahrefs Keyword Explorer** — monthly global search volume estimates and keyword difficulty (KD) scores. Re-pull all volumes before Phase 1 kicks off — several of these estimates predate Sri Lanka's 2026 visa policy changes and may already be stale **[UPDATED]**
- **Google SERP analysis** — intent mapping; who currently ranks, whether a boutique operator can compete, and — critically — whether an **AI Overview already occupies the top of the SERP** for that query (check logged out, in incognito) **[UPDATED]**
- **2026 E-E-A-T signals** — Google's algorithm strongly rewards firsthand local expertise; Tarragon's Colombo-based team is a structural advantage over generic travel aggregators and AI-generated competitor content

### Priority Tiers

| Tier | Label | Criteria |
|------|-------|----------|
| **P0** | Publish first | High volume (10,000+ global monthly searches), moderate KD, directly maps to Tarragon's services, clear conversion path |
| **P1** | Publish months 2–3 | Medium volume (2,000–10,000/mo), destination-specific, strong internal linking potential |
| **P2** | Publish months 4–6 | Lower volume but high purchase intent, niche audience, Tarragon brand differentiation |

### Keyword Cluster Overview **[UPDATED — new clusters added]**

| Cluster | Core Keyword | Est. Global Monthly Searches | KD | Priority |
|---------|-------------|-----------------------------|----|----------|
| Itinerary & planning | "2 week Sri Lanka itinerary" | 27,000–40,000 | Medium | **P0** |
| Seasonal guidance | "best time to visit Sri Lanka" | 40,000–74,000 | High | **P0** |
| Safari & wildlife | "Yala National Park safari" | 12,000–18,000 | Medium | **P0** |
| Luxury & honeymoon | "Sri Lanka honeymoon itinerary" | 8,000–14,000 | Low–Medium | **P0** |
| **Visa / entry [NEW]** | **"Sri Lanka visa ETA"** | **est. 20,000–35,000 (re-verify — volume rising post policy change)** | **Low–Medium** | **P0** |
| Iconic destination | "Sigiriya rock fortress" | 18,000–27,000 | Medium | **P1** |
| Hill country | "Ella Sri Lanka" | 22,000–33,000 | Medium | **P1** |
| South coast | "Galle Fort things to do" | 6,000–10,000 | Low | **P1** |
| Marine wildlife | "whale watching Mirissa" | 8,000–14,000 | Low | **P1** |
| Scenic railway | "Kandy to Ella train" | 10,000–18,000 | Low–Medium | **P1** |
| Cultural heritage | "cultural triangle Sri Lanka" | 5,000–8,000 | Low | **P2** |
| Surf & east coast | "Arugam Bay surfing" | 6,000–9,000 | Low | **P2** |
| Family travel | "Sri Lanka family holiday" | 4,000–7,000 | Low | **P2** |
| **Remote work / long-stay [NEW]** | **"Sri Lanka digital nomad visa"** | **est. 3,000–6,000 (new, growing fast — re-verify monthly for first 2 quarters)** | **Low** | **P2** |
| **Solo & safety [NEW]** | **"solo female travel Sri Lanka"** | **est. 2,000–4,000** | **Low** | **P2** |

> **Note on KD interpretation:** A "High" KD means Lonely Planet, TripAdvisor, Rough Guides, and major OTAs dominate the top 5. Tarragon should not attempt to rank #1 for these; instead, targeting featured snippets / AI Overview citation (via clear, front-loaded answer blocks and FAQ sections) and page 1 positions 4–10 is realistic in 6–12 months. "Low–Medium" KD means a well-structured, expert-authored page can achieve page 1 within 3–6 months.

> **Competitive note [NEW]:** A direct competitor (Sithiyam Travel) is already publishing near-identical article titles for several of these clusters (best time to visit, Yala, Mirissa, Galle, UNESCO sites). This isn't a reason to drop these topics, but every brief in Section 5 must state one concrete differentiator versus existing top-ranking content — see [Section 7](#7-competitive-differentiation-new).

### Long-tail keyword opportunities (low KD, high conversion intent)

Weave into article body copy and subheadings — not primary targets, but valuable for long-tail ranking:

- "private driver Sri Lanka tour"
- "tailor-made Sri Lanka holiday"
- "luxury boutique hotels Sri Lanka south coast"
- "Yala leopard safari best time"
- "Sri Lanka 2 weeks first time"
- "Sri Lanka and Maldives combined holiday"
- "Sigiriya rock fortress entry fee tips"
- "Ella to Yala private tour"
- "best beach Sri Lanka December"
- "Sri Lanka honeymoon packages luxury"
- "whale watching Mirissa season"
- "Kandy to Ella train booking tips"
- **"Sri Lanka ETA application" [NEW]**
- **"Sri Lanka 180 day tourist visa" [NEW]**
- **"Sri Lanka digital nomad visa requirements" [NEW]**
- **"Colombo to Kandy expressway travel time" [NEW]**
- **"is Sri Lanka safe for solo female travellers" [NEW]**

---

## 2. Technical Architecture

### File & Folder Structure

```
src/
├── app/
│   └── blog/
│       ├── page.tsx                  ← Blog index (static)
│       ├── [slug]/
│       │   └── page.tsx              ← Individual article (static, dynamic route)
│       └── layout.tsx                ← Optional blog-specific layout wrapper
├── components/
│   └── blog/
│       ├── BlogCard.tsx              ← Article card used on index
│       ├── BlogHero.tsx              ← Cinematic full-width hero for articles
│       ├── BlogBody.tsx              ← MDX content renderer
│       ├── AnswerBlock.tsx           ← [NEW] Front-loaded direct-answer component for AI Overview extraction
│       ├── RelatedPosts.tsx          ← "You might also like" block
│       ├── BlogCTA.tsx               ← Teal/Amber branded enquiry CTA block
│       └── BlogBreadcrumb.tsx        ← Breadcrumb nav (feeds BreadcrumbList schema)
├── lib/
│   └── blog.ts                       ← getAllPosts(), getPostBySlug() helpers
└── content/
    └── blog/
        ├── 2-week-sri-lanka-itinerary.mdx
        ├── best-time-to-visit-sri-lanka.mdx
        ├── yala-national-park-safari-guide.mdx
        ├── sri-lanka-honeymoon-itinerary.mdx
        ├── sri-lanka-visa-eta-guide.mdx                  ← [NEW]
        ├── sigiriya-rock-fortress-guide.mdx
        ├── ella-sri-lanka-travel-guide.mdx
        ├── galle-fort-guide.mdx
        ├── whale-watching-mirissa.mdx
        ├── kandy-ella-train-ride.mdx
        ├── cultural-triangle-sri-lanka.mdx
        ├── arugam-bay-surfing-guide.mdx
        ├── sri-lanka-family-travel.mdx
        ├── sri-lanka-digital-nomad-guide.mdx             ← [NEW]
        └── solo-female-travel-sri-lanka.mdx               ← [NEW]

public/
└── blog/
    └── images/
        └── [article-slug]/
            ├── hero.jpg              ← 1920×1080 minimum, WebP/AVIF preferred [UPDATED — see CWV notes]
            ├── og-image.jpg          ← 1200×630 for Open Graph
            └── [supporting images]
```

### MDX Frontmatter Schema **[UPDATED — added `answerSummary` and `faq` fields]**

Every `.mdx` file must include the following frontmatter. This drives metadata, JSON-LD, the blog index card, and the new AI-Overview-oriented `AnswerBlock`:

```yaml
---
title: "The Perfect 2-Week Sri Lanka Itinerary"
slug: "2-week-sri-lanka-itinerary"
excerpt: "A day-by-day guide through Sri Lanka's Cultural Triangle, hill country, wildlife parks, and southern beaches — planned by our local team in Colombo."
answerSummary: "Two weeks is the ideal length for a first-time Sri Lanka trip: enough time for the Cultural Triangle, hill country, a wildlife safari, and the south coast without rushing. Recommended route: Colombo (2 days) → Sigiriya/Dambulla (2 days) → Polonnaruwa (1 day) → Kandy (2 days) → Ella (2 days) → Yala (2 days) → South coast (3 days)."
heroImage: "/blog/images/2-week-sri-lanka-itinerary/hero.jpg"
ogImage: "/blog/images/2-week-sri-lanka-itinerary/og-image.jpg"
publishedAt: "2026-07-10"
updatedAt: "2026-07-10"
category: "Itineraries"
tags: ["itinerary", "planning", "first-time", "2 weeks"]
primaryKeyword: "2 week Sri Lanka itinerary"
secondaryKeywords:
  - "Sri Lanka 14 day itinerary"
  - "Sri Lanka travel guide first time"
  - "things to do Sri Lanka"
relatedTours:
  - "cultural-triangle-tour"
  - "wildlife-safari-yala"
relatedDestinations:
  - "sigiriya"
  - "ella"
  - "yala"
faq:
  - q: "Is 2 weeks enough for Sri Lanka?"
    a: "Yes — two weeks covers the Cultural Triangle, hill country, a wildlife safari, and the south coast comfortably without feeling rushed."
  - q: "What is the best route for 14 days in Sri Lanka?"
    a: "..."
author: "Tarragon Leisure"
authorBio: "Written by Tarragon Leisure's Colombo-based travel planning team."
readTime: "12 min"
---
```

> `answerSummary` (40–60 words) feeds the new `AnswerBlock` component, rendered directly under the H1 — this is the single highest-leverage change for AI Overview / featured-snippet extraction (see [Section 4](#4-ai-overview--geo-optimization-new)). `faq` array feeds both the visible FAQ section and the new `FAQPage` JSON-LD schema.

### Page Component — `src/app/blog/[slug]/page.tsx` **[UPDATED — AnswerBlock added]**

```tsx
import { buildMetadata } from '@/lib/metadata'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { JsonLd } from '@/components/JsonLd'
import { buildArticleSchema, buildFaqSchema } from '@/lib/structured-data'
import BlogHero from '@/components/blog/BlogHero'
import AnswerBlock from '@/components/blog/AnswerBlock'
import BlogBody from '@/components/blog/BlogBody'
import BlogCTA from '@/components/blog/BlogCTA'
import RelatedPosts from '@/components/blog/RelatedPosts'
import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb'

// Force static generation at build time
export const dynamic = 'force-static'

// Pre-generate all blog slugs at build time
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

// Per-article metadata via existing buildMetadata helper
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug)
  return buildMetadata({
    title: `${post.title} | Tarragon Leisure`,
    description: post.excerpt,
    canonical: `https://www.tarragonleisure.com/blog/${post.slug}`,
    ogImage: post.ogImage,
    ogType: 'article',
  })
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug)
  const articleSchema = buildArticleSchema(post)
  const faqSchema = buildFaqSchema(post) // [NEW]

  return (
    <>
      <JsonLd data={articleSchema} />
      {post.faq?.length > 0 && <JsonLd data={faqSchema} />}
      <BlogBreadcrumb post={post} />
      <BlogHero post={post} />
      <AnswerBlock summary={post.answerSummary} /> {/* [NEW] */}
      <BlogBody post={post} />
      <BlogCTA />
      <RelatedPosts post={post} />
    </>
  )
}
```

### Blog Index Page — `src/app/blog/page.tsx`

```tsx
import { getAllPosts } from '@/lib/blog'
import { buildMetadata } from '@/lib/metadata'
import BlogCard from '@/components/blog/BlogCard'

export const dynamic = 'force-static'

export const metadata = buildMetadata({
  title: 'Sri Lanka Travel Blog — Expert Guides & Itineraries | Tarragon Leisure',
  description: 'In-depth travel guides, itineraries, and insider tips for Sri Lanka from our local team in Colombo. Safaris, beaches, hill country, honeymoons, and more.',
  canonical: 'https://www.tarragonleisure.com/blog',
})

export default async function BlogIndex() {
  const posts = await getAllPosts()

  return (
    <main>
      {/* Cinematic hero — edge gradient, Bodoni Moda heading */}
      <section className="relative h-[50vh] ...">
        <h1>Sri Lanka Travel Guides</h1>
      </section>
      {/* Post grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ...">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </section>
    </main>
  )
}
```

### `BlogHero.tsx` — Design Pattern

Following the existing cinematic pattern. No "muddy glass boxes":

```tsx
// Asymmetric edge gradient, NOT a backdrop-blur box
<section className="relative h-[70vh] w-full overflow-hidden">
  <Image
    src={post.heroImage}
    alt={post.title}
    fill
    className="object-cover"
    priority
    // [UPDATED] priority + explicit sizes required to hit LCP < 2.0s — see Section 2a
    sizes="100vw"
  />
  {/* Edge gradient — left-weighted for text readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
  <div className="absolute bottom-12 left-8 md:left-16 max-w-2xl">
    <p className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-3">
      {post.category}
    </p>
    {/* Bodoni Moda — matches existing site heading typography */}
    <h1 className="font-bodoni text-4xl md:text-5xl text-white leading-tight mb-4">
      {post.title}
    </h1>
    <p className="text-white/70 text-base font-vietnam">
      {post.readTime} read · Updated {formatDate(post.updatedAt)}
    </p>
  </div>
</section>
```

### `AnswerBlock.tsx` — [NEW] AI Overview / Featured Snippet Component

Renders immediately below the hero, before the main body. This is the single block most likely to be lifted verbatim into an AI Overview or featured snippet, so keep it factual, concise (40–60 words), and free of marketing language.

```tsx
// Plain, high-contrast, no decoration — optimised for extraction, not persuasion
<section className="max-w-3xl mx-auto px-6 py-8 border-l-4 border-[#1A6B6B]">
  <p className="font-vietnam text-lg text-gray-800 leading-relaxed">
    {post.answerSummary}
  </p>
</section>
```

### `BlogCTA.tsx` — Conversion Block

This appears at the bottom of every article, linking readers to the enquiry flow:

```tsx
// Styled in Deep Teal (#1A6B6B) with Warm Amber (#F5A623) accent
<section className="bg-[#1A6B6B] rounded-2xl p-8 md:p-12 my-16">
  <h2 className="font-bodoni text-3xl text-white mb-4">
    Ready to Plan Your Sri Lanka Journey?
  </h2>
  <p className="text-white/80 font-vietnam mb-6 max-w-xl">
    Our local team in Colombo crafts tailor-made itineraries for every
    traveller. No templates, no group tours — just your perfect Sri Lanka trip.
  </p>
  <a
    href="/contact"
    className="inline-block bg-[#F5A623] text-[#1A6B6B] font-semibold
               px-8 py-3 rounded-full hover:bg-amber-400 transition-colors"
  >
    Start Planning
  </a>
</section>
```

### 2a. Performance Budget — Core Web Vitals **[UPDATED — corrected for 2026]**

The original plan's target ("90+ on LCP, CLS, FID/INP") is outdated and must be replaced:

| Metric | Old target (incorrect) | **Corrected 2026 target** | Notes |
|---|---|---|---|
| LCP | < 2.5s | **< 2.0s** | Google's March 2026 core update tightened the "Good" threshold from 2.5s to 2.0s. Pages between 2.0–2.5s now sit in "Needs Improvement." |
| ~~FID~~ | ~~< 100ms~~ | **Removed — do not track** | FID was fully replaced by INP in March 2024. Any dashboards, docs, or QA checklists still referencing FID should be corrected. |
| INP | (not specified) | **< 200ms** | INP is now an equal ranking signal alongside LCP and CLS, not a supplementary one. Measure via field data (CrUX / Search Console), not Lighthouse lab data alone — lab tools only approximate INP via Total Blocking Time. |
| CLS | < 0.1 | **< 0.1** | Unchanged. Every hero image, embedded map, and ad/CTA block needs explicit width/height to avoid shift. |

**Implementation checklist:**
- [ ] Serve hero and body images as WebP/AVIF, correctly sized per breakpoint via `next/image` `sizes` prop — no oversized transfers
- [ ] Preload the hero image and critical fonts (`font-display: swap`) on article pages, since the hero is almost always the LCP element
- [ ] Audit third-party scripts on blog pages (chat widgets, analytics) for main-thread blocking — these are the most common cause of poor INP
- [ ] Reserve explicit space for any embedded route map (Article 01) and related-posts grid to avoid CLS
- [ ] Run PageSpeed Insights + Search Console's Core Web Vitals report (field data) monthly, not just Lighthouse (lab data) at build time — rankings depend on real-user field data, not lab scores

---

## 3. SEO Infrastructure

### Article JSON-LD Schema

Extend `src/lib/structured-data.ts` to add `buildArticleSchema()`:

```typescript
export function buildArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://www.tarragonleisure.com${post.ogImage}`,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "author": {
      "@type": "Organization",
      "name": "Tarragon Leisure",
      "url": "https://www.tarragonleisure.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tarragon Leisure",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.tarragonleisure.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.tarragonleisure.com/blog/${post.slug}`
    }
  }
}
```

### `buildFaqSchema()` — [NEW]

Add alongside `buildArticleSchema()`. This was missing from the original plan — the doc specified FAQ *sections* in every article but never implemented the matching schema, so those sections weren't eligible for FAQ rich results or AI Overview extraction.

```typescript
export function buildFaqSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faq.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  }
}
```

### Breadcrumb Schema

Update `BlogBreadcrumb.tsx` to emit `BreadcrumbList` JSON-LD (plugs into existing `<JsonLd />` system):

```
Home → Blog → [Article Title]
```

```typescript
// Breadcrumb structured data for each article
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tarragonleisure.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.tarragonleisure.com/blog" },
    { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.tarragonleisure.com/blog/${post.slug}` }
  ]
}
```

### On-Page SEO Checklist (per article) **[UPDATED — new items marked]**

Every article must satisfy all of the following before publishing:

- [ ] Primary keyword appears in `<h1>` (naturally, not forced)
- [ ] Primary keyword appears in the first 150 words of body copy
- [ ] Primary keyword in `<title>` tag and meta description
- [ ] **`answerSummary` (40–60 words) written and rendered in `AnswerBlock` immediately below the hero [NEW]**
- [ ] Canonical URL set correctly via `buildMetadata()`
- [ ] OG image is 1200×630, under 200KB
- [ ] All `next/image` instances have descriptive `alt` text containing relevant keywords
- [ ] At least 2 internal links to `/tours/[slug]` pages
- [ ] At least 1 internal link to a `/destinations/[slug]` page
- [ ] Article length: 1,500–2,500 words (Google 2026 E-E-A-T rewards depth)
- [ ] Contains at least one FAQ section (drives featured snippets / AI Overview citation)
- [ ] **`FAQPage` JSON-LD present and matches visible FAQ content exactly [NEW]**
- [ ] Article schema JSON-LD present and valid (test via Google's Rich Results Test)
- [ ] `updatedAt` frontmatter kept current on any content refresh
- [ ] **Page confirmed indexable: no accidental `noindex`, robots.txt block, or login wall; returns HTTP 200 (test via Search Console URL Inspection tool) [NEW]**
- [ ] **Article states at least one concrete differentiator vs. current top-3 ranking competitor content (see Section 7) [NEW]**
- [ ] **LCP < 2.0s and INP < 200ms confirmed on a mobile PageSpeed Insights test before publish [NEW]**

### `next-sitemap` Configuration

Add blog posts to the sitemap automatically. In `next-sitemap.config.js`:

```js
module.exports = {
  siteUrl: 'https://www.tarragonleisure.com',
  generateRobotsTxt: true,
  priority: 0.8,          // Blog posts
  changefreq: 'monthly',
  // Existing tour and destination pages remain at their current config
}
```

Blog index page (`/blog`) should be `priority: 0.9`, individual articles `priority: 0.8`. **The visa/ETA article (Article 05) should use `changefreq: 'weekly'` given how frequently Sri Lankan entry policy is currently changing. [NEW]**

---

## 4. AI Overview / GEO Optimization **[NEW SECTION]**

This section did not exist in the original plan. As of 2026, AI Overviews and AI Mode occupy the top of the SERP for a meaningful share of informational and commercial-investigation queries — exactly the query types this blog targets. The underlying discipline is still SEO (76% of AI Overview citations also rank in the organic top 10), but the following practices materially improve citation odds:

### Content structure
- **Lead with the answer.** Every H2 that maps to a question-style query (most of the FAQ items, and headings like "Best time to visit Yala") should open with a direct 1–3 sentence answer before any elaboration. Models extract from the top of a section, not the middle.
- **Use tables and lists generously** for anything comparative or sequential (the month-by-month table in Article 02 is a good existing example — replicate this pattern in Articles 03, 05, 06, 09, and the new Article 14).
- **Avoid "spammy chunking."** Don't fragment content into unnaturally short paragraphs purely for extraction — Google's own guidance and independent studies flag this as counterproductive; content still needs to read well for a human who clicks through.
- **Match conversational, full-question phrasing** in headings where natural ("How many days do you need in Ella?" rather than just "Duration"), since users increasingly search in full questions rather than short keywords.

### Technical prerequisites
- Confirm every blog page is crawlable and indexable (see checklist above) — a page ineligible for standard indexing cannot appear in AI Overviews regardless of content quality.
- Keep Core Web Vitals within the corrected targets in Section 2a — slow, unstable pages are effectively invisible to both classic ranking and AI citation systems.
- Implement `FAQPage` and `Article` schema on every post (Section 3) — structured data materially helps disambiguation for both classic rich results and AI summarization.

### Tracking
- Use **Google Search Console's GenAI performance report** (rolled out June 2026) as the primary tracking surface once available on this property. Where it isn't yet fully populated, watch for the classic proxy signal: rising impressions with falling CTR on a keyword usually means an AI Overview has inserted itself above the organic result.
- Supplement with **manual, logged-out SERP checks** for the P0 keyword set monthly — check whether an AI Overview appears and whether tarragonleisure.com is cited.
- Treat AI Overview citation as a **credibility and brand-lift metric**, not purely a traffic metric — being named alongside recognised travel authorities builds trust even on the queries where it doesn't generate a click.

---

## 5. Blog Content Plan — 15 Articles

---

### Article 01 — P0

**Title:** The Perfect 2-Week Sri Lanka Itinerary (2026 Guide)
**Slug:** `/blog/2-week-sri-lanka-itinerary`
**Target URL:** `https://www.tarragonleisure.com/blog/2-week-sri-lanka-itinerary`

**Primary keyword:** `2 week Sri Lanka itinerary`
Est. global monthly searches: **27,000–40,000** | KD: Medium

**Secondary keywords to weave in naturally:**
- `Sri Lanka 14 day itinerary` (~14,000/mo)
- `Sri Lanka travel guide first time` (~8,000/mo)
- `things to do Sri Lanka` (~22,000/mo)
- `Sri Lanka itinerary` (broad, ~40,000/mo)
- `private driver Sri Lanka` (~3,500/mo)

**Search intent:** Informational → Planning. Travellers mapping out a first or second visit, deciding which regions to include and in what order.

**Why this ranks:** 14 days is the most searched itinerary length for Sri Lanka. A day-by-day guide from a local team is differentiated from generic OTA content and signals strong E-E-A-T.

**AnswerBlock summary (draft):** "Two weeks is the ideal length for a first-time Sri Lanka trip: enough time for the Cultural Triangle, hill country, a wildlife safari, and the south coast without rushing. Recommended route: Colombo → Sigiriya → Polonnaruwa → Kandy → Ella → Yala → South coast." **[NEW]**

**Body should include:**

- **Introduction:** Why 2 weeks is the ideal duration (covers Cultural Triangle, hill country, wildlife, coast without rushing). One short paragraph establishing Tarragon as the author — Colombo-based local experts.
- **How to read this itinerary:** Note that the route can be customised (link to `/services` or contact page). Mention private driver as the recommended transport mode.
- **Day-by-day breakdown (days 1–14):**
  - Days 1–2: Colombo — arrival, city orientation, Pettah Market, Galle Face Green
  - Days 3–4: Cultural Triangle — Sigiriya Rock Fortress, Dambulla Cave Temple (link to `/destinations/sigiriya`)
  - Day 5: Polonnaruwa — ancient city ruins, cycling tour
  - Days 6–7: Kandy — Temple of the Tooth Relic, Botanical Gardens, Kandyan dance
  - Days 8–9: Ella & hill country — scenic train from Kandy, Nine Arch Bridge, Little Adam's Peak, tea plantation visit (link to `/destinations/ella`)
  - Days 10–11: Yala National Park — leopard safari, morning and evening game drives (link to `/tours/wildlife-safari-yala`)
  - Days 12–14: Southern coast — Mirissa, Galle Fort, beach time, whale watching (seasonal) (link to `/destinations/galle`)
- **Map section:** Embed or link to a visual route map
- **Getting around note [NEW]:** Mention the Central Expressway's phased Colombo–Kandy opening, which is reducing transfer times to the Cultural Triangle and hill country — a genuinely useful, currently under-covered logistics detail
- **Practical tips block:**
  - Best time of year for this exact route
  - Accommodation style recommendations (boutique vs. resort)
  - Internal transport: private car vs. train segments
  - Budget guidance for mid-range and luxury
  - **Entry requirements at a glance, with a link to the new visa/ETA guide (Article 05) rather than duplicating detail [UPDATED]**
- **Variations section:**
  - 10-day version (trim Polonnaruwa, shorten coast)
  - 3-week version (add Trincomalee / Arugam Bay)
- **FAQ section** (targets featured snippets / AI Overview citation):
  - *Is 2 weeks enough for Sri Lanka?*
  - *What is the best route for 14 days in Sri Lanka?*
  - *Do I need a visa to visit Sri Lanka?* — answer briefly, link to Article 05 for full detail
  - *How much does a 2-week Sri Lanka trip cost?*
- **CTA:** Enquire about a tailor-made 14-day itinerary

**Internal links:** `/tours/cultural-triangle-tour`, `/tours/wildlife-safari-yala`, `/destinations/sigiriya`, `/destinations/ella`, `/destinations/galle`, `/blog/sri-lanka-visa-eta-guide` **[UPDATED]**

---

### Article 02 — P0

**Title:** Best Time to Visit Sri Lanka: A Month-by-Month Guide
**Slug:** `/blog/best-time-to-visit-sri-lanka`

**Primary keyword:** `best time to visit Sri Lanka`
Est. global monthly searches: **40,000–74,000** | KD: High (Lonely Planet, Rough Guides dominate)

**Secondary keywords:**
- `Sri Lanka weather by month` (~9,000/mo)
- `Sri Lanka monsoon season` (~5,000/mo)
- `when to go to Sri Lanka` (~8,000/mo)
- `best time for safari Sri Lanka` (~2,500/mo)
- `Sri Lanka December weather` (~6,000/mo)

**Search intent:** Informational. Travellers who have Sri Lanka on their list and are deciding when to book.

**Why this ranks:** Despite high KD, Google often surfaces a position 4–7 for destination-specific operators with rich, structured content, and tables like the one below are exactly the format AI Overviews favour for extraction. Local weather expertise signals E-E-A-T.

**Competitive note [NEW]:** Sithiyam Travel already publishes a directly competing "Best Time to Visit Sri Lanka in 2026" guide — differentiate with Tarragon's own opinionated "our favourite time" section (already planned below) and the quick-reference table, kept more scannable than typical competitor prose.

**Body should include:**

- **Introduction:** Sri Lanka's dual monsoon system explained simply. Assurance that there's always a good region to visit year-round.
- **AnswerBlock summary (draft):** "There's no single best time to visit Sri Lanka — it depends on region. December to March is best for the south and west coast and Cultural Triangle; May to September suits the east coast and offers peak wildlife viewing. Hill country works well year-round." **[NEW]**
- **Quick-reference table** (target featured snippet / AI Overview — Google loves tables for this query):

| Month | South & West coast | East coast | Hill country | Wildlife parks |
|-------|-------------------|------------|--------------|----------------|
| Jan | ✅ Excellent | ⚠️ Wet | ✅ Good | ✅ Good |
| Feb | ✅ Excellent | ⚠️ Wet | ✅ Good | ✅ Good |
| Mar | ✅ Best | ⚠️ Wet | ✅ Good | ✅ Good |
| Apr | ✅ Good | ✅ Improving | ✅ Good | ✅ Good |
| May | ❌ Wet | ✅ Good | ✅ Good | ✅ Good |
| Jun | ❌ Wet | ✅ Excellent | ✅ Good | ✅ Best |
| Jul | ❌ Wet | ✅ Best | ✅ Good | ✅ Best |
| Aug | ❌ Wet | ✅ Best | ✅ Good | ✅ Best |
| Sep | ❌ Wet | ✅ Excellent | ✅ Good | ✅ Good |
| Oct | ⚠️ Transitioning | ⚠️ Wet | ✅ Good | ⚠️ Variable |
| Nov | ✅ Improving | ⚠️ Wet | ✅ Good | ✅ Good |
| Dec | ✅ Best | ⚠️ Wet | ✅ Good | ✅ Good |

- **Month-by-month narrative:** 1–2 paragraphs per month covering: weather, what's open, what to avoid, crowd levels, pricing notes
- **By region sections:**
  - South & West Coast (Galle, Mirissa, Colombo, Bentota): Dec–April
  - East Coast (Arugam Bay, Trincomalee, Passikudah): May–September
  - Hill country (Ella, Kandy, Nuwara Eliya): year-round with nuance
  - Cultural Triangle (Sigiriya, Dambulla, Polonnaruwa): Nov–April ideal
  - Wildlife parks (Yala, Minneriya, Udawalawe): seasonal detail per park
- **Special interest subsections:**
  - Best time for whale watching (Mirissa: Nov–April; Trincomalee: May–Sep)
  - Best time for surfing (Arugam Bay: June–October)
  - Best time for leopard safari in Yala (Feb–July, dry season)
  - Elephant Gathering at Minneriya (August–September)
- **Festival calendar:** Esala Perahera (July/August), Sinhala & Tamil New Year (April), Vesak (May)
- **Tarragon's recommendation:** A clear, opinionated "our favourite time" paragraph — adds personality and E-E-A-T, and doubles as a differentiator vs. AI-generated competitor content
- **FAQ:**
  - *What is the best month to visit Sri Lanka?*
  - *Can you visit Sri Lanka during monsoon season?*
  - *What is Sri Lanka like in December?*
- **CTA:** Plan your trip around the perfect season with a tailor-made itinerary

**Internal links:** `/tours/wildlife-safari-yala`, `/destinations/arugam-bay`, `/destinations/galle`, `/blog/yala-national-park-safari-guide`, `/blog/whale-watching-mirissa`

---

### Article 03 — P0

**Title:** Yala National Park Safari: The Complete Guide (2026)
**Slug:** `/blog/yala-national-park-safari-guide`

**Primary keyword:** `Yala National Park safari`
Est. global monthly searches: **12,000–18,000** | KD: Medium

**Secondary keywords:**
- `Yala safari leopard` (~6,000/mo)
- `best safari Sri Lanka` (~4,500/mo)
- `Yala National Park best time to visit` (~3,500/mo)
- `Sri Lanka wildlife safari` (~5,000/mo)
- `Yala safari private jeep` (~1,200/mo)

**Search intent:** Mixed informational + commercial investigation. People researching safari options before booking — prime audience for Tarragon's wildlife tour pages.

**Body should include:**

- **Introduction:** Why Yala is Sri Lanka's most celebrated park — world's highest leopard density. Set expectation: a well-planned safari with a knowledgeable guide beats a rushed group jeep.
- **AnswerBlock summary (draft):** "Yala National Park is Sri Lanka's most visited wildlife reserve, home to the world's highest density of leopards. Best visited February–July during the dry season when animals gather at waterholes; Block 1 sees the most leopard sightings, Block 5 offers a quieter alternative." **[NEW]**
- **Wildlife you can see:** Leopards (the main draw), elephants, sloth bears, crocodiles, water buffalo, over 215 bird species. Honest note: wildlife sightings are never guaranteed — this is wild nature.
- **Best time to visit Yala:**
  - Feb–July: dry season, best leopard visibility around waterholes
  - August–October: park partially closes (Block 1 closes in September)
  - Avoid: peak rainy months (Oct–Nov) for Block 1
- **Park zones explained:** Block 1 (most visited, highest leopard density) vs. Block 5 (quieter, fewer vehicles). Recommend Block 5 morning + Block 1 evening for serious wildlife enthusiasts.
- **Safari timing tips:** Morning game drives (6–10am) vs. evening (3–7pm). Why sunrise is superior.
- **How to get the most from your safari:**
  - Hire a specialist guide (not just a driver)
  - Private jeep vs. shared — why private always wins for wildlife photography and experience
  - What to bring: binoculars, camera settings, clothing colours
- **Accommodation options near Yala:** Range from budget to ultra-luxury (Wild Coast Tented Lodge, Uga Chena Huts)
- **Other national parks to compare:**
  - Udawalawe — best for elephants (guaranteed)
  - Wilpattu — largest park, fewer crowds, good for leopards
  - Minneriya — Elephant Gathering (Aug–Sep)
  - Kumana — best for birding, rarely crowded
- **Practical information:** Entrance fees, how to get there from Colombo/Ella/Galle, park rules
- **FAQ:**
  - *What animals can you see in Yala National Park?*
  - *Is Yala or Udawalawe better for elephants?*
  - *When is the best time to see leopards in Yala?*
  - *How far is Yala from Colombo?*
- **CTA:** Book a private Yala safari with Tarragon Leisure (link to `/tours/wildlife-safari-yala`)

**Internal links:** `/tours/wildlife-safari-yala`, `/destinations/yala`, `/blog/best-time-to-visit-sri-lanka`, `/blog/2-week-sri-lanka-itinerary`

---

### Article 04 — P0

**Title:** Sri Lanka Honeymoon Itinerary: 10 Days of Romance & Luxury
**Slug:** `/blog/sri-lanka-honeymoon-itinerary`

**Primary keyword:** `Sri Lanka honeymoon itinerary`
Est. global monthly searches: **8,000–14,000** | KD: Low–Medium

**Secondary keywords:**
- `honeymoon in Sri Lanka` (~7,000/mo)
- `Sri Lanka honeymoon packages luxury` (~3,000/mo)
- `romantic places in Sri Lanka` (~4,500/mo)
- `Sri Lanka and Maldives honeymoon` (~2,500/mo)
- `boutique hotels Sri Lanka honeymoon` (~1,500/mo)

**Search intent:** High purchase intent. Newly engaged couples actively planning and comparing operators. This is Tarragon's highest-converting article type.

**Why this ranks and converts:** Low–Medium KD means achievable page 1 rankings. Luxury honeymoon travellers have high lifetime value — even one booking from this article justifies significant effort.

**Body should include:**

- **Introduction:** Sri Lanka as a honeymoon destination — why couples choose it (diversity, romance, relative seclusion vs. Bali/Maldives, easy to combine culture + beach + wildlife). Tarragon's personal tone: "We help honeymooners craft journeys that feel entirely their own."
- **Why Sri Lanka for a honeymoon?** Compared to Bali (overdeveloped), Maldives (beach-only), Sri Lanka offers cultural depth + wildlife + beach + luxury in 10 days.
- **10-day luxury itinerary (the hero content):**
  - Days 1–2: Colombo arrival. Stay at Shangri-La or Galle Face Hotel. Sunset at Galle Face Green. Fine dining.
  - Days 3–4: Sigiriya. Stay at Water Gardens Sigiriya (private pool villa). Climb Sigiriya at dawn. Explore Dambulla Cave Temple.
  - Days 5–6: Kandy. Stay at Heritance Kandy. Temple of the Tooth Relic. Spice garden and cooking class. Kandyan cultural show.
  - Day 7: Scenic train to Ella. Reserve a first-class compartment. Tea estate picnic lunch on arrival.
  - Days 8–9: Yala. Luxury tented camp (Wild Coast Tented Lodge or Uga Chena Huts). Private dawn and dusk safaris. Sundowner on the camp deck.
  - Day 10: Southern coast. Mirissa or Tangalle beach villa. Sunset boat trip or whale watching (seasonal).
- **Romantic experiences to add:** Private cooking class, couples Ayurveda treatment, hot air balloon over Sigiriya (seasonal), private beach dinner, stargazing at a hill country estate.
- **Accommodation guide:** Curated list of the most romantic hotels by region (boutique and ultra-luxury only — no generic chain hotels).
- **Practical honeymoon tips:**
  - Best time of year (December–March for south/west; May–August for east)
  - Combining with the Maldives (SriLankan Airlines direct, ~1 hour)
  - Private car vs. train segments — advice for honeymooners
  - How far in advance to book
  - **Entry requirements: both partners should confirm ETA/visa status ahead of booking — link to Article 05 [UPDATED]**
- **FAQ:**
  - *Is Sri Lanka a good honeymoon destination?*
  - *How many days do you need for a Sri Lanka honeymoon?*
  - *What is the best honeymoon hotel in Sri Lanka?*
  - *Can I combine Sri Lanka and the Maldives for a honeymoon?*
- **CTA:** Design your perfect honeymoon — speak to our team (link to `/contact`)

**Internal links:** `/tours/cultural-triangle-tour`, `/tours/wildlife-safari-yala`, `/destinations/sigiriya`, `/destinations/ella`, `/destinations/galle`, `/blog/sri-lanka-visa-eta-guide` **[UPDATED]**

---

### Article 05 — P0 **[NEW ARTICLE]**

**Title:** Sri Lanka Visa Guide 2026: ETA, Tourist Visa & Digital Nomad Visa Explained
**Slug:** `/blog/sri-lanka-visa-eta-guide`
**Target URL:** `https://www.tarragonleisure.com/blog/sri-lanka-visa-eta-guide`

**Primary keyword:** `Sri Lanka visa ETA`
Est. global monthly searches: **20,000–35,000 (verify via Semrush/Ahrefs before publish — volume is rising due to 2026 policy change)** | KD: Low–Medium

**Secondary keywords:**
- `Sri Lanka ETA application` (high)
- `Sri Lanka tourist visa 2026`
- `Sri Lanka 180 day visa`
- `Sri Lanka visa on arrival`
- `Sri Lanka digital nomad visa` (cross-link to Article 14 rather than duplicating full detail)

**Search intent:** High practical intent, top-of-funnel but essential — every visitor needs this information regardless of trip type, making it a strong funnel-wide internal-linking hub.

**Why this ranks:** Sri Lanka reinstated its ETA requirement for nearly all foreign nationals in October 2025 and extended tourist visa validity from 90 to 180 days in early 2026. Most existing content covering this is thin news-style writeups rather than a maintained evergreen guide — a genuine content gap Tarragon's local team is well placed to fill credibly.

**AnswerBlock summary (draft):** "Most visitors to Sri Lanka need an Electronic Travel Authorization (ETA), applied for online before arrival via the official government portal. As of 2026, the standard tourist visa allows stays of up to 180 days, extendable to 270 days. Apply only through the official portal — third-party sites charge higher fees for no added benefit."

**Body should include:**

- **Introduction:** Brief, reassuring overview — getting into Sri Lanka is straightforward if you use the right channel and apply early.
- **Do you need a visa for Sri Lanka?** Direct answer near the top for snippet/AI Overview extraction.
- **The ETA system explained:**
  - What it is, who needs it, how it replaced the brief e-visa experiment reinstated October 2025
  - Tourist ETA vs. Business ETA vs. Transit Visa — validity and entry rules for each
  - How to apply via the official government portal only (name the correct official domain explicitly; warn against third-party sites that charge inflated fees)
  - Processing time and recommended lead time (apply 3–4 weeks before travel)
  - Required documents: passport valid 6+ months beyond entry, proof of onward travel, etc.
- **2026 extended stay rules:**
  - Standard tourist visa now permits stays up to 180 days, extendable in stages up to 270 days
  - What's changed vs. the old 30-day system, and why it matters for slow-travel and multi-region itineraries
- **Digital Nomad Visa — short overview, full detail linked out:**
  - One-year, renewable, USD 500 fee, minimum income threshold for applicants earning from overseas sources
  - Link out to the full Article 14 guide rather than duplicating
- **Common mistakes to avoid:** Applying via unofficial sites, leaving it too late, not printing proof of approval for airline check-in, letting visa validity lapse mid-trip
- **FAQ:**
  - *Do I need a visa to visit Sri Lanka?*
  - *How long can I stay in Sri Lanka on a tourist visa?*
  - *How do I apply for a Sri Lanka ETA?*
  - *Can I extend my Sri Lanka visa after arrival?*
- **CTA:** Let our team help you plan a trip around your visa timeline — enquire now

**Internal links:** `/blog/2-week-sri-lanka-itinerary`, `/blog/sri-lanka-honeymoon-itinerary`, `/blog/sri-lanka-digital-nomad-guide`, `/contact`

**Maintenance note:** This article covers actively shifting government policy. Flag for a **monthly** fact-check (not quarterly like the rest of the blog) and keep `updatedAt` current every time policy details are re-verified. Do not state fees or validity periods without a "verify against the official portal" caveat, since these can change without notice.

---

### Article 06 — P1

**Title:** Sigiriya Rock Fortress: Everything You Need to Know Before You Go
**Slug:** `/blog/sigiriya-rock-fortress-guide`

**Primary keyword:** `Sigiriya rock fortress`
Est. global monthly searches: **18,000–27,000** | KD: Medium

**Secondary keywords:**
- `Sigiriya Sri Lanka` (~22,000/mo)
- `climbing Sigiriya tips` (~2,000/mo)
- `Sigiriya vs Pidurangala` (~1,500/mo)
- `Sigiriya entrance fee` (~3,500/mo)
- `Sigiriya frescoes` (~1,800/mo)

**Body should include:**

- **Introduction:** Brief history of the 5th-century royal citadel. What makes it unique — a palace atop a 200m volcanic rock.
- **History & significance:** King Kashyapa (477–495 CE), the Lion Gate, Mirror Wall, cloud maidens frescoes. Why it's a UNESCO World Heritage Site.
- **The climb — what to expect:**
  - Step-by-step of the ascent (approx. 1,200 steps, 1.5–2 hours up)
  - Key features: water gardens at the base, Boulder Garden, Frescoes platform (halfway), Lion Platform, summit palace ruins
  - Physical difficulty rating and tips for less-fit travellers
- **Pidurangala Rock comparison:** Why locals prefer Pidurangala for the best view of Sigiriya. How to do both in one day. Entrance fee difference.
- **Practical information:**
  - Entrance fees (foreigners): USD 30–40 (check current SLTDA rates)
  - Opening times: 7am–5:30pm
  - Best time to arrive: dawn (beat crowds and heat). Visiting at sunset.
  - What to wear and bring (hat, water, non-slip shoes)
  - Drone rules and photography tips
- **Day trip logistics:** How far from Colombo (4 hours), Kandy (3 hours), Dambulla (30 min). Best base: Habarana or Sigiriya village.
- **Where to stay near Sigiriya:** Water Gardens Sigiriya, Aliya Resort, budget guesthouses in Sigiriya village.
- **What to combine:** Dambulla Cave Temple (30 min), Polonnaruwa (1 hour), Minneriya National Park for evening elephant safari.
- **FAQ:**
  - *How hard is it to climb Sigiriya?*
  - *Is Sigiriya worth visiting?*
  - *What is the best time to visit Sigiriya?*
  - *How do I get from Colombo to Sigiriya?*
- **CTA:** Include Sigiriya in a tailor-made Cultural Triangle tour (link to `/tours/cultural-triangle-tour`)

**Internal links:** `/tours/cultural-triangle-tour`, `/destinations/sigiriya`, `/blog/2-week-sri-lanka-itinerary`, `/blog/cultural-triangle-sri-lanka`

---

### Article 07 — P1

**Title:** Ella, Sri Lanka: The Ultimate Travel Guide
**Slug:** `/blog/ella-sri-lanka-travel-guide`

**Primary keyword:** `Ella Sri Lanka`
Est. global monthly searches: **22,000–33,000** | KD: Medium

**Secondary keywords:**
- `things to do in Ella Sri Lanka` (~8,000/mo)
- `Ella Rock hike` (~3,000/mo)
- `Nine Arch Bridge Ella` (~5,000/mo)
- `Little Adam's Peak Ella` (~2,500/mo)
- `best hotels Ella Sri Lanka` (~4,000/mo)

**Body should include:**

- **Introduction:** Why Ella has become Sri Lanka's most loved hill country town — the balance of jungle hikes, tea, cool air, and a relaxed pace.
- **Top things to do:**
  1. Hike Ella Rock (3–4 hours, harder but rewarding — panoramic view)
  2. Walk Little Adam's Peak (1 hour, easier, hugely photogenic — good for sunrise)
  3. See the Nine Arch Bridge (best viewed during a train pass — timings guide)
  4. Visit a working tea estate and factory
  5. Ravana Falls and Ravana Cave (history + swimming)
  6. Hike to Ella Gap viewpoint
- **How to get to Ella:**
  - Train from Kandy (most scenic — first-class booking tips, 6–7 hours)
  - Train from Colombo (longer but doable)
  - Private car from Yala (2 hours) — good for those combining wildlife + hill country
- **How long to stay:** Recommend 2 nights minimum, 3 nights ideal.
- **Where to stay:** Range from boutique eco-lodges (98 Acres Resort, Ella Jungle Resort) to budget guesthouses. Tips for waking up to the valley view.
- **Ella as a base:** Day trips to Nuwara Eliya, Horton Plains (World's End), Diyaluma Falls.
- **Food & drink:** Best cafes with valley views, local rice and curry spots, rooftop sunset bars.
- **FAQ:**
  - *How many days should I spend in Ella?*
  - *Is the Ella Rock hike worth it?*
  - *When is the train from Kandy to Ella?*
  - *Is Ella good for families?*
- **CTA:** Enquire about a private hill country journey including Ella

**Internal links:** `/destinations/ella`, `/tours/cultural-triangle-tour`, `/blog/kandy-ella-train-ride`, `/blog/2-week-sri-lanka-itinerary`

---

### Article 08 — P1

**Title:** Galle Fort: History, Hotels & What to Do in Sri Lanka's Colonial Gem
**Slug:** `/blog/galle-fort-guide`

**Primary keyword:** `Galle Fort things to do`
Est. global monthly searches: **6,000–10,000** | KD: Low

**Secondary keywords:**
- `Galle Sri Lanka` (~15,000/mo)
- `Galle Fort hotels` (~4,000/mo)
- `Galle Fort restaurants` (~3,000/mo)
- `Galle Fort UNESCO` (~2,000/mo)
- `things to do in Galle Sri Lanka` (~5,000/mo)

**Competitive note [NEW]:** A near-identical "Galle Sri Lanka (2026) – Fort, Beaches & Travel Guide" already ranks from a competitor. Differentiate with named, currently-operating restaurant/hotel recommendations and a clear day-trip logistics section rather than general history alone.

**Body should include:**

- **Introduction:** Galle Fort as Sri Lanka's most atmospheric town — Dutch colonial architecture, boutique hotels, galleries, and sunset walks on the ramparts.
- **History of Galle Fort:** Portuguese (1588), Dutch (1663 rebuild), British era. UNESCO inscription (1988). Why it's still a living community, not a museum.
- **Top things to do:**
  1. Walk the ramparts at sunset (the signature Galle experience)
  2. Dutch Reformed Church (1755) and National Maritime Museum
  3. Explore the streets — recommended walking route
  4. Art galleries and boutique shopping (Sri Lankan designers, antiques)
  5. Day trip to Unawatuna Beach (5 min from Fort)
  6. Turtle hatchery at Kosgoda (30 min north)
  7. Madu River boat safari (Bentota, 1 hour north)
- **Where to stay inside the Fort:** Amangalla (ultra-luxury), The Fort Bazaar, Galle Fort Hotel. Tips on booking.
- **Best restaurants:** Fort-specific recommendations with cuisine type.
- **Day trips from Galle:** Mirissa (whale watching, 30 min), Tangalle (1 hour), Udawalawe (2 hours).
- **How to get to Galle:** From Colombo (train is scenic and cheap; 2.5 hours), private car (2 hours), from Mirissa (30 min).
- **FAQ:**
  - *Is Galle Fort worth visiting?*
  - *How long do you need in Galle Fort?*
  - *Can you stay inside Galle Fort?*
  - *How far is Galle from Colombo?*
- **CTA:** Combine Galle with a private south coast itinerary

**Internal links:** `/destinations/galle`, `/blog/sri-lanka-honeymoon-itinerary`, `/blog/whale-watching-mirissa`, `/blog/2-week-sri-lanka-itinerary`

---

### Article 09 — P1

**Title:** Whale Watching in Mirissa: Season, Boats & Insider Tips
**Slug:** `/blog/whale-watching-mirissa`

**Primary keyword:** `whale watching Mirissa`
Est. global monthly searches: **8,000–14,000** | KD: Low

**Secondary keywords:**
- `whale watching Sri Lanka` (~10,000/mo)
- `blue whale Sri Lanka` (~4,000/mo)
- `Mirissa whale watching season` (~3,000/mo)
- `dolphin watching Mirissa` (~2,500/mo)
- `whale watching Mirissa tour` (~2,000/mo)

**Body should include:**

- **Introduction:** Why the waters off Mirissa are one of the world's best locations for blue whale sightings — the deepwater trench just 1km offshore.
- **What you can see:** Blue whales (the largest animal on Earth), sperm whales, bryde's whales, spinner dolphins, flying fish, whale sharks (occasional).
- **Best season for whale watching in Mirissa:** November–April (peak: December–March). Why timing matters within the season.
- **Alternative: Trincomalee whale watching** (May–September, east coast) — humpbacks, blue whales; good for travellers visiting the east coast.
- **Choosing a responsible operator:** Red flags (overcrowded boats, engines too close to whales). What to look for in a reputable tour. Note that Tarragon recommends specific licensed operators.
- **Typical tour format:** Departure time (5–6am), duration (4–6 hours), what's included, what to expect (boat motion, weather conditions).
- **Practical tips:** What to wear, seasickness prevention, camera settings for whale photography, phone waterproofing.
- **Combining whale watching with Galle Fort (30 min):** How to structure a south coast day.
- **Where to stay in Mirissa:** Beachfront options, budget vs. boutique.
- **FAQ:**
  - *When is the best time to go whale watching in Mirissa?*
  - *Is whale watching in Sri Lanka guaranteed?*
  - *How early should I book whale watching in Mirissa?*
  - *Are there dolphins in Mirissa?*
- **CTA:** Add whale watching to a tailor-made south coast itinerary

**Internal links:** `/destinations/mirissa`, `/blog/galle-fort-guide`, `/blog/best-time-to-visit-sri-lanka`, `/blog/sri-lanka-honeymoon-itinerary`

---

### Article 10 — P1

**Title:** The Kandy to Ella Train: Booking, Scenery & Everything You Need to Know
**Slug:** `/blog/kandy-ella-train-ride`

**Primary keyword:** `Kandy to Ella train`
Est. global monthly searches: **10,000–18,000** | KD: Low–Medium

**Secondary keywords:**
- `Sri Lanka scenic train ride` (~6,000/mo)
- `Kandy Ella train booking` (~4,500/mo)
- `Ella train first class` (~3,000/mo)
- `Sri Lanka train schedule` (~5,000/mo)
- `blue train Sri Lanka` (~2,000/mo)

**Body should include:**

- **Introduction:** Why the Kandy to Ella train is ranked among the world's most beautiful railway journeys — cloud forest, tea estates, waterfall glimpses, Nine Arch Bridge approach.
- **Route overview:** Kandy → Peradeniya → Nanu Oya (for Nuwara Eliya) → Haputale → Ella. Distance, elevation change, journey time (5.5–7 hours depending on service).
- **Train classes explained:**
  - First class (reserved, observation car) — must book in advance
  - Second class (reserved seats) — comfortable, book ahead
  - Third class (unreserved) — budget, standing room only during peak season
  - Recommendation: First class for maximum scenery and comfort
- **How to book:**
  - Online via eRail (official Sri Lanka Railway booking site) — opens 30 days ahead, sells out in minutes for popular dates
  - In person at Colombo Fort or Kandy station — arrive early
  - Via a local agent / Tarragon Leisure — removes the hassle entirely
- **Which side to sit on:** Right side (Kandy to Ella) for tea estate views. Left side for Ella Rock approach.
- **Departure times:** List of the main services and which has the best light for photography.
- **Stopping en route:** Getting on or off at Nanu Oya (for Nuwara Eliya), Haputale — flexibility tips.
- **What to bring:** Snacks, cash for vendors, camera, light jacket (gets cold above 1,500m).
- **Extending the journey:** Option to continue past Ella toward Badulla.
- **Combining with a private car:** Many travellers take the train one way and have a car waiting at Ella. Mention road-transfer times are improving as the Central Expressway extension opens in phases. **[UPDATED]**
- **FAQ:**
  - *How do I book the Kandy to Ella train?*
  - *How long does the Kandy to Ella train take?*
  - *Is it worth taking the train from Kandy to Ella?*
  - *Which train class is best for Kandy to Ella?*
- **CTA:** Let Tarragon handle train bookings as part of your Sri Lanka itinerary

**Internal links:** `/blog/ella-sri-lanka-travel-guide`, `/blog/2-week-sri-lanka-itinerary`, `/destinations/ella`

---

### Article 11 — P2

**Title:** The Cultural Triangle, Sri Lanka: Sigiriya, Dambulla & Polonnaruwa
**Slug:** `/blog/cultural-triangle-sri-lanka`

**Primary keyword:** `cultural triangle Sri Lanka`
Est. global monthly searches: **5,000–8,000** | KD: Low

**Secondary keywords:**
- `Dambulla cave temple` (~7,000/mo)
- `Polonnaruwa ancient city` (~4,500/mo)
- `Anuradhapura Sri Lanka` (~5,000/mo)
- `UNESCO sites Sri Lanka` (~3,000/mo)
- `Sri Lanka ancient cities tour` (~2,000/mo)

**Body should include:**

- **Introduction:** What the Cultural Triangle is (roughly: Kandy–Sigiriya–Anuradhapura triangle), why it's essential for first-time visitors, the civilisational depth of Sri Lanka's ancient kingdoms.
- **The four main sites:**
  1. **Sigiriya** — history, what to see, time needed, tips (cross-reference `/blog/sigiriya-rock-fortress-guide`)
  2. **Dambulla Cave Temple** — five caves, 150+ Buddha statues, ceiling frescoes; practical visit guide
  3. **Polonnaruwa** — better-preserved ruins than Anuradhapura; cycling tour recommendation; key monuments (Gal Vihara, Vatadage)
  4. **Anuradhapura** — Sri Lanka's first ancient capital; Sacred Bodhi Tree; best explored by bicycle or tuk-tuk
- **How long to spend in the Cultural Triangle:** Minimum 3 nights recommended, 4–5 nights for those who love history.
- **Best base:** Habarana (central, close to Sigiriya, Dambulla, and Minneriya). Sigiriya village for luxury pool villas.
- **Combining with wildlife:** Minneriya (Elephant Gathering, Aug–Sep), Kaudulla, Habarana lake boat safari.
- **Itinerary suggestions:** 2-day and 4-day loops from Colombo.
- **Getting around:** Private driver essential (distances are manageable but signage can be poor). No reliable public transport between sites.
- **FAQ:**
  - *What is the Cultural Triangle in Sri Lanka?*
  - *How long does it take to see the Cultural Triangle?*
  - *Can I visit the Cultural Triangle without a guide?*

**Internal links:** `/tours/cultural-triangle-tour`, `/destinations/sigiriya`, `/blog/sigiriya-rock-fortress-guide`, `/blog/2-week-sri-lanka-itinerary`

---

### Article 12 — P2

**Title:** Arugam Bay Surfing Guide: Waves, Season & Where to Stay
**Slug:** `/blog/arugam-bay-surfing-guide`

**Primary keyword:** `Arugam Bay surfing`
Est. global monthly searches: **6,000–9,000** | KD: Low

**Secondary keywords:**
- `Arugam Bay Sri Lanka` (~12,000/mo)
- `surf Sri Lanka` (~5,000/mo)
- `best surf spots Sri Lanka` (~2,500/mo)
- `Arugam Bay best time to visit` (~3,000/mo)
- `Arugam Bay surf season` (~2,000/mo)

**Body should include:**

- **Introduction:** Why Arugam Bay has earned its place on Asia's surfing map — the right-hand point break, the laid-back vibe, and east coast seclusion.
- **Surf season:** May–October (peak: July–September). Why the east coast's opposite monsoon to the south/west makes it ideal in the middle of the year.
- **Surf spots breakdown:**
  - Main Point (Arugam Bay): best for intermediates and experienced surfers
  - Pottuvil Point: hollow, powerful — advanced surfers
  - Elephant Rock: beginner-friendly
  - Lighthouse Point and Peanut Farm: longboarding, mellow
- **Surf levels and lessons:** Where to find reputable surf schools, board hire prices, what to expect if you're a beginner.
- **Beyond surfing:** Kumana National Park day trip (excellent birding and leopards, very few tourists), Pottuvil lagoon boat safari, Arugam Bay's restaurants and nightlife (surprisingly good).
- **Getting to Arugam Bay:** From Colombo (8–9 hours by road or bus), from Ella (3–4 hours by private car). Flight option via Trincomalee.
- **Where to stay:** Budget surf hostels vs. beachfront boutique guesthouses (Aarunya, Stardust Hotel).
- **FAQ:**
  - *Is Arugam Bay good for beginners?*
  - *When is the best time to surf in Arugam Bay?*
  - *Is Arugam Bay worth visiting?*

**Internal links:** `/destinations/arugam-bay`, `/blog/best-time-to-visit-sri-lanka`, `/blog/2-week-sri-lanka-itinerary`

---

### Article 13 — P2

**Title:** Sri Lanka with Kids: The Complete Family Travel Guide
**Slug:** `/blog/sri-lanka-family-travel`

**Primary keyword:** `Sri Lanka family holiday`
Est. global monthly searches: **4,000–7,000** | KD: Low

**Secondary keywords:**
- `family holidays Sri Lanka` (~5,000/mo)
- `Sri Lanka with kids` (~3,500/mo)
- `family friendly Sri Lanka itinerary` (~2,000/mo)
- `best beaches Sri Lanka families` (~2,500/mo)
- `Pinnawala elephant orphanage` (~6,000/mo)

**Body should include:**

- **Introduction:** Why Sri Lanka works brilliantly for families — manageable distances, friendly locals, huge variety that keeps children engaged (wildlife, beaches, culture, trains), and a level of infrastructure that's comfortable without being sanitised.
- **Best experiences for kids:**
  1. Elephant encounters (Udawalawe, Pinnawala Elephant Orphanage — note welfare concerns; prioritise ethical options)
  2. Yala safari game drives
  3. Train from Kandy to Ella
  4. Turtle hatchery visits (Kosgoda, Rekawa)
  5. Rock climbing Sigiriya (manageable for kids 8+)
  6. White water rafting on the Kelani River (Kitulgala)
  7. Beach days in Bentota or Negombo (calm seas, child-safe)
- **Sample 10-day family itinerary:** Colombo → Negombo → Cultural Triangle → Kandy → Ella → Yala → south coast beach
- **Practical family tips:**
  - Car seat availability (Tarragon provides on request)
  - Food — Sri Lankan cuisine is adjustable for heat-sensitive children
  - Health: mosquito repellent, sun protection, tap water safety
  - Best beaches for young children (calm water): Bentota, Passikudah, Mirissa (sheltered end)
  - Hotel tips: villas and family suites vs. standard rooms
- **What ages work best?** Honest breakdown of activities by age group (under 5, 5–10, 10+).
- **FAQ:**
  - *Is Sri Lanka suitable for young children?*
  - *What is the best beach in Sri Lanka for families?*
  - *Is it safe to travel to Sri Lanka with kids?*
- **CTA:** Design a family itinerary with Tarragon — we handle car seats, pacing, and child-friendly accommodation

**Internal links:** `/tours/wildlife-safari-yala`, `/destinations/ella`, `/blog/yala-national-park-safari-guide`, `/blog/kandy-ella-train-ride`

---

### Article 14 — P2 **[NEW ARTICLE]**

**Title:** Sri Lanka for Digital Nomads: Visa, Cost of Living & Best Places to Work Remotely
**Slug:** `/blog/sri-lanka-digital-nomad-guide`

**Primary keyword:** `Sri Lanka digital nomad visa`
Est. global monthly searches: **3,000–6,000 (new and growing — re-verify monthly for the first two quarters after launch)** | KD: Low

**Secondary keywords:**
- `digital nomad Sri Lanka`
- `Sri Lanka cost of living digital nomad`
- `best places to work remotely Sri Lanka`
- `Sri Lanka coworking spaces`
- `Weligama digital nomad`

**Search intent:** Practical/planning, a distinct audience segment from Tarragon's typical leisure traveller — long-stay, higher lifetime value if Tarragon offers extended tailor-made trips or relocation support services.

**Why this ranks:** Sri Lanka's Digital Nomad Visa only launched in February 2026, and most existing coverage is generic visa-explainer content without genuine local, on-the-ground detail — a gap Tarragon's Colombo base is well placed to fill with named neighbourhoods, real cost breakdowns, and connectivity notes.

**Body should include:**

- **Introduction:** Sri Lanka's entry into the global remote-work map — why it's a serious, affordable contender alongside Bali and Chiang Mai.
- **AnswerBlock summary (draft):** "Sri Lanka's Digital Nomad Visa, launched February 2026, allows remote workers earning at least USD 2,000/month from overseas sources to live in the country for up to one year, renewable. Popular bases include Colombo, Weligama, and Ahangama. Monthly living costs typically run USD 900–1,500 outside Colombo."
- **Visa requirements at a glance:** Income threshold, application fee, required documents — briefly, with a link back to Article 05 for the full visa/ETA picture rather than duplicating
- **Best places to base yourself:**
  - Colombo — most infrastructure, coworking spaces, networking, fastest internet
  - Weligama / Ahangama — south coast surf-and-work lifestyle, growing nomad community
  - Kandy / hill country — quieter, cooler, better suited to writers and asynchronous workers
- **Cost of living breakdown:** Accommodation, food, transport, coworking — realistic monthly ranges
- **Internet & connectivity reality check:** Fibre availability in cities and coworking spaces vs. inconsistent rural Wi-Fi; recommend an eSIM/mobile hotspot backup, honestly flagging Sri Lanka's global broadband ranking rather than overselling connectivity
- **Who this suits (and who it doesn't):** Good fit for asynchronous workers, writers, freelancers; proceed with caution for anyone needing constant high-frequency video calls
- **Practical tips:** Banking, health insurance requirements, SIM/eSIM setup on arrival
- **FAQ:**
  - *What is the Sri Lanka Digital Nomad Visa?*
  - *How much does it cost to live in Sri Lanka as a digital nomad?*
  - *Is the internet good enough for remote work in Sri Lanka?*
  - *Where should digital nomads stay in Sri Lanka?*
- **CTA:** If Tarragon offers longer-stay planning or relocation support, invite enquiries here; otherwise link back to standard tailor-made trip planning as a soft conversion path

**Internal links:** `/blog/sri-lanka-visa-eta-guide`, `/destinations/galle` (for Weligama/Ahangama proximity), `/contact`

---

### Article 15 — P2 **[NEW ARTICLE]**

**Title:** Is Sri Lanka Safe for Solo Female Travellers? A Complete 2026 Guide
**Slug:** `/blog/solo-female-travel-sri-lanka`

**Primary keyword:** `solo female travel Sri Lanka`
Est. global monthly searches: **2,000–4,000 (verify)** | KD: Low

**Secondary keywords:**
- `is Sri Lanka safe for solo female travellers`
- `solo travel Sri Lanka itinerary`
- `Sri Lanka safety tips women`
- `best places to stay solo Sri Lanka`

**Search intent:** Reassurance-seeking, high-consideration research query — travellers deciding *whether* to book, not just *how*. High trust-building value even where conversion isn't immediate.

**Body should include:**

- **Introduction:** An honest, non-alarmist overview — current traveller reports widely describe Sri Lanka as safe for solo female travellers, alongside sensible, standard precautions.
- **AnswerBlock summary (draft):** "Sri Lanka is generally considered safe for solo female travellers, with low rates of serious crime against tourists. As with any destination, standard precautions apply: book reputable transport and accommodation, dress modestly at religious sites, and stay alert in crowded areas after dark."
- **Practical safety tips:** Transport (reputable private drivers vs. unmetered tuk-tuks), accommodation vetting, dress norms at temples, common tourist-targeted scams and how to avoid them
- **Best regions/towns for solo travellers:** Ella, Galle Fort, Mirissa — walkable, well-trodden, strong guesthouse culture
- **Sample 10-day solo itinerary:** Lighter-paced version of the flagship 2-week itinerary, adjusted for solo logistics and social opportunities (guesthouses, group tours for safaris)
- **Meeting other travellers:** Hostel/guesthouse culture, group safari and whale-watching tours as natural social points
- **What locals and past travellers say:** General, non-attributed sentiment summary — keep this evidence-based and non-sensational
- **FAQ:**
  - *Is Sri Lanka safe for solo female travellers?*
  - *What should solo female travellers avoid in Sri Lanka?*
  - *Is it easy to travel solo in Sri Lanka?*
- **CTA:** Tarragon can arrange a private driver and pre-vetted stays for solo travellers who want independence with a safety net

**Internal links:** `/blog/2-week-sri-lanka-itinerary`, `/blog/ella-sri-lanka-travel-guide`, `/blog/galle-fort-guide`, `/blog/sri-lanka-visa-eta-guide`

---

## 6. Internal Linking Strategy

Every article must include a minimum of **3 internal links**, distributed as follows:

| Link type | Target | Purpose |
|-----------|--------|---------|
| Tour page | `/tours/[slug]` (2 per article) | Convert readers into enquiries |
| Destination page | `/destinations/[slug]` (1 per article) | Distribute link equity to existing pages |
| Related blog | `/blog/[slug]` (1–2 per article) | Deepen topical authority, reduce bounce |
| CTA block | `/contact` (every article) | Primary conversion goal |

### Blog Index → Articles
The `/blog` index page links to all articles. Prioritise P0 articles (including the new visa guide, Article 05) in the hero row of the grid.

### Article → Article (topical clusters) **[UPDATED — new clusters added]**

Group articles into clusters so each links to the others within the same topic:

- **Itinerary cluster:** Article 01 ↔ Article 06 ↔ Article 10 ↔ Article 11
- **Wildlife cluster:** Article 03 ↔ Article 09 ↔ Article 13
- **Seasonal cluster:** Article 02 ↔ Article 03 ↔ Article 09 ↔ Article 12
- **Luxury cluster:** Article 04 ↔ Article 08 ↔ Article 09
- **Practicalities cluster [NEW]:** Article 05 (visa/ETA) ↔ Article 14 (digital nomad) ↔ Article 15 (solo female travel) — these three are the "before you go / is this trip right for me" cluster and should cross-link heavily even though topically distinct, since Article 05 is the natural funnel entry point for all of them

### Pillar pages [NEW — recommended addition]

With 15 articles live, flat article-to-article linking alone under-serves topical authority. Consider adding lightweight pillar/hub sections (not full new pages initially — can start as expanded sections on existing `/destinations` or `/tours` pages) for:

- **Wildlife safaris hub** — links Articles 03, 09, 13
- **Hill country hub** — links Articles 07, 10
- **Before-you-go / practicalities hub** — links Articles 05, 14, 15

---

## 7. Competitive Differentiation **[NEW SECTION]**

A live search during planning found a direct competitor (Sithiyam Travel) already publishing near-identical titles for several planned articles: best time to visit, Yala safari, Mirissa, Galle Fort, and UNESCO/Cultural Triangle content. This doesn't change *which* topics to cover — the keyword data still supports all of them — but it changes *how* each brief should be written.

**Before writing each article:**
1. Search the primary keyword (logged out) and note the top 3–5 ranking pages and whether an AI Overview appears.
2. Identify one concrete gap in what currently ranks — a missing practical detail, an outdated fact, a format competitors haven't used (e.g., a comparison table, an embedded route map, a downloadable checklist).
3. State that differentiator explicitly in the brief before drafting (this has been added to the checklist in Section 3).

**Standing differentiators available to Tarragon across all articles:**
- Real, named operator experience (specific hotels, guides, drivers) vs. generic aggregator lists
- A Colombo-based team that can speak with firsthand authority on rapidly-changing practicalities (visa rules, expressway openings, park closures) — competitors publishing static or AI-generated content will lag here if the freshness cadence in Section 8 is maintained
- Direct booking/enquiry conversion path baked into every article via `BlogCTA`, which most competing content (aggregator or affiliate-driven) either lacks or buries

---

## 8. Rollout Phases

### Phase 1 — Foundation (Weeks 1–4) **[UPDATED]**

**Goal:** Infrastructure live, P0 articles published (including the new visa guide), Google indexing initiated, corrected performance targets in place from day one.

- [ ] Set up `/blog` route and `[slug]` dynamic route in Next.js App Router
- [ ] Integrate `next-mdx-remote` or `contentlayer` for MDX parsing
- [ ] Build `BlogHero.tsx`, `BlogCard.tsx`, `BlogBody.tsx`, `AnswerBlock.tsx` **[NEW]**, `BlogCTA.tsx`, `RelatedPosts.tsx`
- [ ] Extend `src/lib/structured-data.ts` with `buildArticleSchema()` **and `buildFaqSchema()` [NEW]**
- [ ] Update `next-sitemap.config.js` to include blog routes, with weekly changefreq for the visa guide **[UPDATED]**
- [ ] Set performance budgets per Section 2a: LCP < 2.0s, INP < 200ms, CLS < 0.1 — remove any FID references from existing QA docs/dashboards **[NEW]**
- [ ] Re-pull current keyword volumes via Semrush/Ahrefs for the full keyword set before finalising briefs, especially the visa/nomad cluster **[NEW]**
- [ ] Write and publish **Article 01** (2-week itinerary)
- [ ] Write and publish **Article 02** (best time to visit)
- [ ] Write and publish **Article 03** (Yala safari)
- [ ] Write and publish **Article 04** (honeymoon itinerary)
- [ ] Write and publish **Article 05 — Sri Lanka Visa/ETA guide [NEW, P0]**
- [ ] Submit updated `sitemap.xml` to Google Search Console
- [ ] Verify Article + FAQ schema via [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Confirm all 5 published pages pass URL Inspection (indexable, HTTP 200, no accidental noindex) **[NEW]**
- [ ] Run mobile PageSpeed Insights on all 5 pages and confirm LCP/INP/CLS targets before considering Phase 1 complete **[NEW]**

### Phase 2 — Growth (Weeks 5–10)

**Goal:** P1 articles live, full internal linking active, performance baseline established, AI Overview citation tracking begins.

- [ ] Write and publish **Article 06** (Sigiriya)
- [ ] Write and publish **Article 07** (Ella)
- [ ] Write and publish **Article 08** (Galle Fort)
- [ ] Write and publish **Article 09** (whale watching)
- [ ] Write and publish **Article 10** (Kandy–Ella train)
- [ ] Add category filter (Itineraries / Wildlife / Destinations / Honeymoon / Practicalities **[UPDATED]**) to blog index
- [ ] Implement `RelatedPosts` component, pulling 2 articles per cluster, including the new practicalities cluster **[UPDATED]**
- [ ] Set up Google Analytics 4 — track `blog` section as a traffic segment
- [ ] Monitor Google Search Console — first impressions data arrives ~2–4 weeks post-publish
- [ ] **Begin monitoring the GenAI performance report in Search Console, once populated, alongside manual logged-out SERP checks for all P0 keywords [NEW]**
- [ ] **Perform the first monthly fact-check on Article 05 (visa/ETA) — confirm fees, validity periods, and portal URLs are still accurate [NEW]**

### Phase 3 — Scale (Weeks 11–20) **[UPDATED]**

**Goal:** P2 articles live, first content refresh cycle, authority building begins, competitive-gap review completed.

- [ ] Write and publish **Article 11** (cultural triangle)
- [ ] Write and publish **Article 12** (Arugam Bay)
- [ ] Write and publish **Article 13** (family travel)
- [ ] Write and publish **Article 14 — Digital Nomad guide [NEW, P2]**
- [ ] Write and publish **Article 15 — Solo Female Travel guide [NEW, P2]**
- [ ] Run first **content refresh** on P0 articles — update dates, add new information, check for broken links, re-verify all visa/entry facts across every article that references them
- [ ] Run the **competitive-gap check** from Section 7 against all 15 published articles — confirm each still states a real differentiator vs. current top-ranking pages
- [ ] Begin **link building outreach** — guest posts on travel blogs (DA 30+), journalist requests via HARO/Qwoted, partnerships with luxury travel media

### Phase 4 — Ongoing (Monthly) **[UPDATED]**

**Goal:** Maintain freshness, compound rankings, expand keyword coverage, sustain AI Overview citation.

- [ ] 1 new article per month targeting an emerging or under-served keyword
- [ ] Monthly content review: update `updatedAt` frontmatter on any revised articles (signals freshness to Google)
- [ ] **Monthly fact-check specifically on Article 05 (visa/ETA) and Article 14 (digital nomad) given how actively these policies are changing in 2026 [NEW]**
- [ ] Google Search Console audit: identify articles ranking p.2–3 for their target keyword; expand them with additional sections to earn p.1
- [ ] **Monthly manual, logged-out SERP check on all P0 keywords for AI Overview presence and citation status [NEW]**
- [ ] Quarterly keyword gap analysis: compare Tarragon's covered topics vs. competitors (use Semrush or Ahrefs) — explicitly re-check Sithiyam Travel and other identified competitors for new overlapping content **[UPDATED]**
- [ ] Quarterly Core Web Vitals field-data audit across all blog pages (Search Console CWV report, not just build-time Lighthouse) **[NEW]**

---

## 9. Performance Tracking

### Key Metrics (Google Search Console)

| Metric | Target at 3 months | Target at 6 months |
|--------|-------------------|-------------------|
| Blog organic impressions/month | 5,000–15,000 | 30,000–80,000 |
| Blog organic clicks/month | 200–600 | 1,500–5,000 |
| Average position (all blog keywords) | 25–40 | 12–25 |
| P0 articles average position | 15–30 | 5–15 |
| **AI Overview citations (P0 keyword set) [NEW]** | **Baseline established** | **Cited on 3+ of 5 P0 keywords** |
| **Core Web Vitals: % blog URLs passing (LCP<2.0s, INP<200ms, CLS<0.1) [NEW]** | **80%+** | **95%+** |

### Google Analytics 4 — Custom Events

Set up these conversion events in GA4 to track blog-driven leads:

```js
// Track clicks on the BlogCTA "Start Planning" button
gtag('event', 'blog_cta_click', {
  article_slug: window.location.pathname,
  article_title: document.title,
})

// Track scroll depth on blog articles (50%, 75%, 100%)
// Use GA4's built-in scroll depth trigger with threshold at 75%
```

### Monthly Review Checklist **[UPDATED]**

- [ ] Check Search Console for any articles gaining impressions but underperforming on clicks (suggests title/meta description needs A/B testing, or that an AI Overview has inserted itself above the result — check both)
- [ ] **Check the Search Console GenAI performance report (once populated) for citation trends [NEW]**
- [ ] Check Core Web Vitals scores for blog pages in PageSpeed Insights **and the Search Console field-data report** — confirm LCP < 2.0s and INP < 200ms, not the outdated FID metric **[UPDATED]**
- [ ] Verify `next/image` is serving correctly sized WebP/AVIF images — no oversized transfers
- [ ] Check Google Rich Results Test for any Article or FAQPage schema errors **[UPDATED]**
- [ ] Review internal linking — ensure any new `/tours/[slug]` pages are referenced from relevant blog articles
- [ ] **Re-verify all visa, fee, and policy facts in Article 05 and Article 14 against official sources [NEW]**
- [ ] **Manual logged-out SERP spot-check for AI Overview presence/citation on the P0 keyword set [NEW]**

---

*This document should be treated as a living reference. Review and update keyword volume estimates and priority order quarterly using Semrush or Ahrefs, and after the first 3 months of Google Search Console data becomes available. Given the pace of change in Sri Lanka's 2026 visa policy and in Google's AI Overview rollout, the visa/ETA article and the AI Overview tracking sections should be reviewed on a monthly cadence rather than quarterly until both stabilise.*
