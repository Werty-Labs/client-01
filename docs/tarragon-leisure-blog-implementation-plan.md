# Tarragon Leisure — Blog Section Implementation Plan
**Domain:** tarragonleisure.com | **Framework:** Next.js App Router (React 19) + Tailwind CSS  
**Prepared:** June 2026 | **Goal:** Drive organic traffic from international luxury travel audiences via SEO-optimised static blog pages

---

## Table of Contents

1. [Keyword Research & Priority Framework](#1-keyword-research--priority-framework)
2. [Technical Architecture](#2-technical-architecture)
3. [SEO Infrastructure](#3-seo-infrastructure)
4. [Blog Content Plan — 12 Articles](#4-blog-content-plan--12-articles)
5. [Internal Linking Strategy](#5-internal-linking-strategy)
6. [Rollout Phases](#6-rollout-phases)
7. [Performance Tracking](#7-performance-tracking)

---

## 1. Keyword Research & Priority Framework

### Methodology

Keyword prioritisation is based on cross-referencing three signals:

- **Google Search Console** (once blog is live) — track impressions vs. clicks for quick wins
- **Semrush / Ahrefs Keyword Explorer** — monthly global search volume estimates and keyword difficulty (KD) scores
- **Google SERP analysis** — intent mapping; who currently ranks and whether a boutique operator can compete
- **2026 E-E-A-T signals** — Google's algorithm strongly rewards firsthand local expertise; Tarragon's Colombo-based team is a structural advantage over generic travel aggregators

### Priority Tiers

| Tier | Label | Criteria |
|------|-------|----------|
| **P0** | Publish first | High volume (10,000+ global monthly searches), moderate KD, directly maps to Tarragon's services, clear conversion path |
| **P1** | Publish months 2–3 | Medium volume (2,000–10,000/mo), destination-specific, strong internal linking potential |
| **P2** | Publish months 4–6 | Lower volume but high purchase intent, niche audience, Tarragon brand differentiation |

### Keyword Cluster Overview

| Cluster | Core Keyword | Est. Global Monthly Searches | KD | Priority |
|---------|-------------|-----------------------------|----|----------|
| Itinerary & planning | "2 week Sri Lanka itinerary" | 27,000–40,000 | Medium | **P0** |
| Seasonal guidance | "best time to visit Sri Lanka" | 40,000–74,000 | High | **P0** |
| Safari & wildlife | "Yala National Park safari" | 12,000–18,000 | Medium | **P0** |
| Luxury & honeymoon | "Sri Lanka honeymoon itinerary" | 8,000–14,000 | Low–Medium | **P0** |
| Iconic destination | "Sigiriya rock fortress" | 18,000–27,000 | Medium | **P1** |
| Hill country | "Ella Sri Lanka" | 22,000–33,000 | Medium | **P1** |
| South coast | "Galle Fort things to do" | 6,000–10,000 | Low | **P1** |
| Marine wildlife | "whale watching Mirissa" | 8,000–14,000 | Low | **P1** |
| Scenic railway | "Kandy to Ella train" | 10,000–18,000 | Low–Medium | **P1** |
| Cultural heritage | "cultural triangle Sri Lanka" | 5,000–8,000 | Low | **P2** |
| Surf & east coast | "Arugam Bay surfing" | 6,000–9,000 | Low | **P2** |
| Family travel | "Sri Lanka family holiday" | 4,000–7,000 | Low | **P2** |

> **Note on KD interpretation:** A "High" KD means Lonely Planet, TripAdvisor, Rough Guides, and major OTAs dominate the top 5. Tarragon should not attempt to rank #1 for these; instead, targeting featured snippets (via clear FAQ sections) and page 1 positions 4–10 is realistic in 6–12 months. "Low–Medium" KD means a well-structured, expert-authored page can achieve page 1 within 3–6 months.

### Long-tail keyword opportunities (low KD, high conversion intent)

These should be woven into article body copy and subheadings — not primary targets, but valuable for long-tail ranking:

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
        ├── sigiriya-rock-fortress-guide.mdx
        ├── ella-sri-lanka-travel-guide.mdx
        ├── galle-fort-guide.mdx
        ├── whale-watching-mirissa.mdx
        ├── kandy-ella-train-ride.mdx
        ├── cultural-triangle-sri-lanka.mdx
        ├── arugam-bay-surfing-guide.mdx
        └── sri-lanka-family-travel.mdx

public/
└── blog/
    └── images/
        └── [article-slug]/
            ├── hero.jpg              ← 1920×1080 minimum, WebP preferred
            ├── og-image.jpg          ← 1200×630 for Open Graph
            └── [supporting images]
```

### MDX Frontmatter Schema

Every `.mdx` file must include the following frontmatter. This drives metadata, JSON-LD, and the blog index card:

```yaml
---
title: "The Perfect 2-Week Sri Lanka Itinerary"
slug: "2-week-sri-lanka-itinerary"
excerpt: "A day-by-day guide through Sri Lanka's Cultural Triangle, hill country, wildlife parks, and southern beaches — planned by our local team in Colombo."
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
author: "Tarragon Leisure"
readTime: "12 min"
---
```

### Page Component — `src/app/blog/[slug]/page.tsx`

```tsx
import { buildMetadata } from '@/lib/metadata'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { JsonLd } from '@/components/JsonLd'
import { buildArticleSchema } from '@/lib/structured-data'
import BlogHero from '@/components/blog/BlogHero'
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

  return (
    <>
      <JsonLd data={articleSchema} />
      <BlogBreadcrumb post={post} />
      <BlogHero post={post} />
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

Pass this into the existing `<JsonLd />` component alongside the existing `Organization` and `Website` schemas.

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

### On-Page SEO Checklist (per article)

Every article must satisfy all of the following before publishing:

- [ ] Primary keyword appears in `<h1>` (naturally, not forced)
- [ ] Primary keyword appears in the first 150 words of body copy
- [ ] Primary keyword in `<title>` tag and meta description
- [ ] Canonical URL set correctly via `buildMetadata()`
- [ ] OG image is 1200×630, under 200KB
- [ ] All `next/image` instances have descriptive `alt` text containing relevant keywords
- [ ] At least 2 internal links to `/tours/[slug]` pages
- [ ] At least 1 internal link to a `/destinations/[slug]` page
- [ ] Article length: 1,500–2,500 words (Google 2026 E-E-A-T rewards depth)
- [ ] Contains at least one FAQ section (drives featured snippets)
- [ ] Article schema JSON-LD present and valid (test via Google's Rich Results Test)
- [ ] `updatedAt` frontmatter kept current on any content refresh

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

Blog index page (`/blog`) should be `priority: 0.9`, individual articles `priority: 0.8`.

---

## 4. Blog Content Plan — 12 Articles

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
- **Practical tips block:**
  - Best time of year for this exact route
  - Accommodation style recommendations (boutique vs. resort)
  - Internal transport: private car vs. train segments
  - Budget guidance for mid-range and luxury
- **Variations section:**
  - 10-day version (trim Polonnaruwa, shorten coast)
  - 3-week version (add Trincomalee / Arugam Bay)
- **FAQ section** (targets featured snippets):
  - *Is 2 weeks enough for Sri Lanka?*
  - *What is the best route for 14 days in Sri Lanka?*
  - *Do I need a visa to visit Sri Lanka?*
  - *How much does a 2-week Sri Lanka trip cost?*
- **CTA:** Enquire about a tailor-made 14-day itinerary

**Internal links:** `/tours/cultural-triangle-tour`, `/tours/wildlife-safari-yala`, `/destinations/sigiriya`, `/destinations/ella`, `/destinations/galle`

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

**Why this ranks:** Despite high KD, Google often surfaces a position 4–7 for destination-specific operators with rich, structured content. Local weather expertise signals E-E-A-T. Aim for a featured snippet on "best months" with a clear summary table.

**Body should include:**

- **Introduction:** Sri Lanka's dual monsoon system explained simply. Assurance that there's always a good region to visit year-round.
- **Quick-reference table** (target featured snippet — Google loves tables for this query):

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
- **Tarragon's recommendation:** A clear, opinionated "our favourite time" paragraph — adds personality and E-E-A-T
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
- **FAQ:**
  - *Is Sri Lanka a good honeymoon destination?*
  - *How many days do you need for a Sri Lanka honeymoon?*
  - *What is the best honeymoon hotel in Sri Lanka?*
  - *Can I combine Sri Lanka and the Maldives for a honeymoon?*
- **CTA:** Design your perfect honeymoon — speak to our team (link to `/contact`)

**Internal links:** `/tours/cultural-triangle-tour`, `/tours/wildlife-safari-yala`, `/destinations/sigiriya`, `/destinations/ella`, `/destinations/galle`

---

### Article 05 — P1

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

### Article 06 — P1

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

### Article 07 — P1

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

### Article 08 — P1

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

### Article 09 — P1

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
- **Combining with a private car:** Many travellers take the train one way and have a car waiting at Ella.
- **FAQ:**
  - *How do I book the Kandy to Ella train?*
  - *How long does the Kandy to Ella train take?*
  - *Is it worth taking the train from Kandy to Ella?*
  - *Which train class is best for Kandy to Ella?*
- **CTA:** Let Tarragon handle train bookings as part of your Sri Lanka itinerary

**Internal links:** `/blog/ella-sri-lanka-travel-guide`, `/blog/2-week-sri-lanka-itinerary`, `/destinations/ella`

---

### Article 10 — P2

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

### Article 11 — P2

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

### Article 12 — P2

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

## 5. Internal Linking Strategy

Every article must include a minimum of **3 internal links**, distributed as follows:

| Link type | Target | Purpose |
|-----------|--------|---------|
| Tour page | `/tours/[slug]` (2 per article) | Convert readers into enquiries |
| Destination page | `/destinations/[slug]` (1 per article) | Distribute link equity to existing pages |
| Related blog | `/blog/[slug]` (1–2 per article) | Deepen topical authority, reduce bounce |
| CTA block | `/contact` (every article) | Primary conversion goal |

### Blog Index → Articles
The `/blog` index page links to all articles. Prioritise P0 articles in the hero row of the grid.

### Article → Article (topical clusters)
Group articles into clusters so each links to the others within the same topic:

- **Itinerary cluster:** Article 01 ↔ Article 05 ↔ Article 09 ↔ Article 10
- **Wildlife cluster:** Article 03 ↔ Article 08 ↔ Article 12
- **Seasonal cluster:** Article 02 ↔ Article 03 ↔ Article 08 ↔ Article 11
- **Luxury cluster:** Article 04 ↔ Article 07 ↔ Article 08

---

## 6. Rollout Phases

### Phase 1 — Foundation (Weeks 1–4)

**Goal:** Infrastructure live, P0 articles published, Google indexing initiated.

- [ ] Set up `/blog` route and `[slug]` dynamic route in Next.js App Router
- [ ] Integrate `next-mdx-remote` or `contentlayer` for MDX parsing
- [ ] Build `BlogHero.tsx`, `BlogCard.tsx`, `BlogBody.tsx`, `BlogCTA.tsx`, `RelatedPosts.tsx`
- [ ] Extend `buildArticleSchema()` in `src/lib/structured-data.ts`
- [ ] Update `next-sitemap.config.js` to include blog routes
- [ ] Write and publish **Article 01** (2-week itinerary)
- [ ] Write and publish **Article 02** (best time to visit)
- [ ] Write and publish **Article 03** (Yala safari)
- [ ] Write and publish **Article 04** (honeymoon itinerary)
- [ ] Submit updated `sitemap.xml` to Google Search Console
- [ ] Verify Article schema via [Google Rich Results Test](https://search.google.com/test/rich-results)

### Phase 2 — Growth (Weeks 5–10)

**Goal:** P1 articles live, full internal linking active, performance baseline established.

- [ ] Write and publish **Article 05** (Sigiriya)
- [ ] Write and publish **Article 06** (Ella)
- [ ] Write and publish **Article 07** (Galle Fort)
- [ ] Write and publish **Article 08** (whale watching)
- [ ] Write and publish **Article 09** (Kandy–Ella train)
- [ ] Add category filter (Itineraries / Wildlife / Destinations / Honeymoon) to blog index
- [ ] Implement `RelatedPosts` component, pulling 2 articles per cluster
- [ ] Set up Google Analytics 4 — track `blog` section as a traffic segment
- [ ] Monitor Google Search Console — first impressions data arrives ~2–4 weeks post-publish

### Phase 3 — Scale (Weeks 11–20)

**Goal:** P2 articles live, first content refresh cycle, authority building begins.

- [ ] Write and publish **Article 10** (cultural triangle)
- [ ] Write and publish **Article 11** (Arugam Bay)
- [ ] Write and publish **Article 12** (family travel)
- [ ] Run first **content refresh** on P0 articles — update dates, add new information, check for broken links
- [ ] Begin **link building outreach** — guest posts on travel blogs (DA 30+), journalist requests via HARO/Qwoted, partnerships with luxury travel media

### Phase 4 — Ongoing (Monthly)

**Goal:** Maintain freshness, compound rankings, expand keyword coverage.

- [ ] 1 new article per month targeting an emerging or under-served keyword
- [ ] Monthly content review: update `updatedAt` frontmatter on any revised articles (signals freshness to Google)
- [ ] Google Search Console audit: identify articles ranking p.2–3 for their target keyword; expand them with additional sections to earn p.1
- [ ] Quarterly keyword gap analysis: compare Tarragon's covered topics vs. competitors (use Semrush or Ahrefs)

---

## 7. Performance Tracking

### Key Metrics (Google Search Console)

| Metric | Target at 3 months | Target at 6 months |
|--------|-------------------|-------------------|
| Blog organic impressions/month | 5,000–15,000 | 30,000–80,000 |
| Blog organic clicks/month | 200–600 | 1,500–5,000 |
| Average position (all blog keywords) | 25–40 | 12–25 |
| P0 articles average position | 15–30 | 5–15 |

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

### Monthly Review Checklist

- [ ] Check Search Console for any articles gaining impressions but underperforming on clicks (suggests title/meta description needs A/B testing)
- [ ] Check Core Web Vitals scores for blog pages in PageSpeed Insights — should score 90+ on all three (LCP, CLS, FID/INP)
- [ ] Verify `next/image` is serving correctly sized WebP images — no oversized transfers
- [ ] Check Google Rich Results Test for any Article schema errors
- [ ] Review internal linking — ensure any new `/tours/[slug]` pages are referenced from relevant blog articles

---

*This document should be treated as a living reference. Review and update keyword volume estimates and priority order quarterly using Semrush or Ahrefs, and after the first 3 months of Google Search Console data becomes available.*
