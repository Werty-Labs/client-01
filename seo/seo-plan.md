# Tarragon Leisure — Full SEO Plan
**Domain:** tarragonleisure.com | **Framework:** Next.js App Router (React 19) + Tailwind CSS
**Market:** UK & international luxury travel audiences targeting Sri Lanka
**Prepared:** July 2026 | **Last reviewed against:** 3× keyword CSVs (UK market, July 2026) + blog implementation plan v2 + live codebase

---

> **Important context: this is a brand-new site.** There is no existing Domain Authority, no backlink profile, and no Google Search Console history. Every decision in this plan accounts for that reality — the strategy prioritises achievable early wins, strong technical foundations, and the compounding benefits of topical authority rather than immediate Page 1 ambitions on ultra-competitive terms.

---

## Table of Contents

1. [Audit of the Previous SEO Plan — What Was Wrong](#1-audit-of-the-previous-seo-plan--what-was-wrong)
2. [Strategy Overview — What Changes and Why](#2-strategy-overview--what-changes-and-why)
3. [Keyword Data Analysis (CSV Summary)](#3-keyword-data-analysis-csv-summary)
4. [Core Pages SEO Plan](#4-core-pages-seo-plan)
5. [Blog Index Page SEO Plan](#5-blog-index-page-seo-plan)
6. [Implemented Blog Articles — Current Status & Required Fixes](#6-implemented-blog-articles--current-status--required-fixes)
7. [Planned But Not Yet Implemented — Articles 6–15](#7-planned-but-not-yet-implemented--articles-615)
8. [New Blog Articles to Add Next (Beyond the Original 15)](#8-new-blog-articles-to-add-next-beyond-the-original-15)
9. [Internal Linking Map (Complete)](#9-internal-linking-map-complete)
10. [Technical SEO Checklist](#10-technical-seo-checklist)
11. [Tracking & Measurement Plan](#11-tracking--measurement-plan)

---

## 1. Audit of the Previous SEO Plan — What Was Wrong

The first version of this SEO plan (created in the same session) had several significant problems. They are documented here so the same mistakes are not repeated.

### Problems with the previous plan

| Issue | Detail | Why it Matters |
|-------|--------|----------------|
| **New site reality ignored** | The plan set goals and keyword targets as if the site already had authority. A brand-new domain cannot rank for `sri lanka tours` (KD 10 but dominated by OTAs and large aggregators) in the near term. | New sites need to earn topical authority from low-competition, long-tail keywords first before climbing to broader terms. |
| **CSV data misread** | The script output showed UK monthly volumes in the hundreds (e.g., 590, 480, 320) — these are UK-market search volumes, not global. The plan's blog section referenced UK CSV data as if it were representative of global opportunity. | The CSV files are filtered for the UK market only. Global volumes (from the v2 blog plan) are much higher and should be the benchmark for blog content decisions. |
| **Tours page primary keyword was wrong** | `sri lanka group tour packages` (Vol: 320) was assigned as the primary target for `/tours`. Tarragon is a boutique, tailor-made operator — group tour packages are explicitly NOT their product. This is a brand mismatch. | Targeting keywords misaligned with the actual service offering wastes effort and attracts the wrong audience. |
| **About page keyword was hollow** | `local travel guide sri lanka` was assigned as the About page primary keyword. About pages do not rank for informational queries — they rank for branded searches. | About pages should be optimised for trust signals and brand searches, not traffic capture. |
| **Blog section was too thin** | The blog section of the plan was 4 bullet points. It did not map to the 15 planned articles or the 5 already implemented ones. It did not identify what was actually built vs. planned. | An SEO plan for a content-driven site needs a per-article breakdown, not a paragraph summary. |
| **Missing: gap between planned vs. implemented** | Of the 15 articles in the blog plan, 5 have been implemented. The plan never mentioned this gap — it wrote as if everything was theoretical. | The most urgent SEO action is to audit and fix what is already live, not plan future content. |
| **Visa article has a critical factual error** | The live `sri-lanka-visa-eta-guide.mdx` states the standard ETA allows 30 days stay. The v2 implementation plan states Sri Lanka extended the tourist visa to 180 days in early 2026. This is an inaccuracy in a live, indexed article. | Incorrect practical information damages E-E-A-T, erodes trust, and could harm travellers. |
| **Missing frontmatter fields on live articles** | The implementation plan specifies `slug`, `category`, `tags`, `primaryKeyword`, `secondaryKeywords`, `relatedTours`, `relatedDestinations`, `readTime`, `updatedAt`, `authorBio` fields in MDX frontmatter. None of the 5 live articles have these. | Missing frontmatter means structured data schemas cannot be properly populated, internal linking systems are not fed, and the blog index card renders incomplete information. |
| **Technical SEO section was boilerplate** | The previous plan's Technical SEO section was 4 generic bullet points. It did not audit whether the actual codebase (which has `robots.ts`, `sitemap.ts`, `structured-data.ts`, and GA via Vercel Analytics already) was correctly configured. | Technical SEO recommendations must be grounded in the actual codebase, not generic advice. |

---

## 2. Strategy Overview — What Changes and Why

### The core constraint: this is a new domain

A new site with no DA, no backlinks, and no GSC history will not rank on page 1 for `best time to visit sri lanka` (KD: 59, dominated by Lonely Planet, TripAdvisor) in the first 6 months. That is not a failure of strategy — it is how search engines work. The strategy accounts for this.

**Phase 1 (Months 1–3): Fix what's live, build authority foundations**
- Correct all factual and frontmatter errors in the 5 live articles
- Publish the 10 planned-but-not-implemented articles
- Target low-KD, long-tail terms where a new site can appear in months, not years
- Build correct schema, sitemaps, and linking infrastructure

**Phase 2 (Months 4–9): Compound topical authority**
- As topical authority in "Sri Lanka travel" grows, higher-KD terms become more achievable
- Begin targeting mid-competition terms like `Kandy to Ella train`, `Galle Fort things to do`
- Add new articles targeting keyword gaps identified in the CSV data

**Phase 3 (Month 10+): Compete for P0 terms**
- With 20+ articles, a clean backlink profile, and established GSC data, the P0 terms (`best time to visit sri lanka`, `Yala National Park safari`) become realistic targets for page 1

### The three pillars remain valid — but with corrected priorities

1. **Blog as the primary traffic engine** — The blog targets informational keywords where new sites can compete. Commercial pages will rank later, once blog authority compounds.
2. **Commercial pages optimised for conversion, not volume** — `/tours`, `/destinations` should be optimised for brand + qualifier searches (`tarragon leisure tours`, `luxury tailor-made sri lanka tours`) and for converting traffic the blog sends.
3. **Technical excellence as the differentiator** — The Next.js App Router stack enables excellent Core Web Vitals scores. On a new domain, page experience is a meaningful signal.

---

## 3. Keyword Data Analysis (CSV Summary)

> The three CSVs cover UK market search volumes (July 2026). These are lower than global estimates but more directly relevant to Tarragon's primary audience (UK-based international travellers).

### Top opportunities from CSV data (re-analysed)

#### File 1: `sri-lanka-tours` keywords
| Keyword | UK Vol | KD | Opportunity |
|---------|--------|----|-------------|
| sri lanka and maldives tour package | 480 | 5 | **High** — Low KD, high commercial intent, strong CPC (£1.55). Tarragon can target this with a dedicated tour page or blog article. |
| group tour sri lanka | 320 | 11 | Low — Brand mismatch. Tarragon is boutique/tailor-made. |
| tour map of sri lanka | 590 | 5 | **Medium** — Informational, visual. Create a destination map page or embed interactive map in `/destinations`. |
| sri lanka tour places | 480 | 25 | Medium — Higher KD, general informational intent. Good for `/destinations` hub page copy. |

#### File 2: `sri-lanka-travel` keywords
| Keyword | UK Vol | KD | Opportunity |
|---------|--------|----|-------------|
| travel insurance sri lanka | 480 | 6–26 | **High** — Practical pre-trip need. A dedicated blog section or FAQ block on the visa article would capture this. Create a "Before You Go" checklist article. |
| is it safe to travel to sri lanka | 590 | 36 | Medium — High KD for a new site, but critical for trust. Already partially addressed in the safety/solo travel article cluster. |
| where to travel in sri lanka | 590 | 17 | Medium — Good fit for a revamped `/destinations` hub page. |
| intrepid travel sri lanka | 480 | 6 | Competitor branded. Not a target. |

#### File 3: `visit-sri-lanka` keywords
| Keyword | UK Vol | KD | Opportunity |
|---------|--------|----|-------------|
| best time to visit sri lanka | 6,600 | 59 | **Very High volume, Very High KD** — Long-term target (Month 6+). Already implemented. Focus on AI Overview citation, not page 1 ranking in the short term. |
| where to visit in sri lanka | 590 | 12 | **High** — Low KD. Perfect for `/destinations` hub page. |
| sri lanka tourism places to visit | 480 | 17 | Medium — Good for `/destinations` sub-content. |
| best time to visit sri lanka weather | 390 | 16 | **High** — Low-medium KD weather variant. Add a "Sri Lanka Weather Guide" as a new blog article to capture this sub-cluster. |

### Key insight from CSV data not in the previous plan

The map-related keywords (`tour map of sri lanka`, `travel map sri lanka`, `sri lanka travel guide map`) all cluster around **590 UK monthly searches** at **KD 5–12**. This is a genuine, low-competition opportunity that no article currently addresses. A visual, interactive route map embedded on the `/destinations` page or as a standalone "Sri Lanka Route Planner" article would capture this entire cluster efficiently.

---

## 4. Core Pages SEO Plan

### 4a. Home Page (`/`)

**Current state:** `buildMetadata()` is in place. Site config provides tagline `"Sri Lanka Tours & Travel Adventures"` and a reasonable description. `Organization` JSON-LD is implemented via `organizationJsonLd()`. `WebSite` JSON-LD is also present.

**What's good:** The technical implementation is solid. Schema, metadata helper, and Vercel Analytics are all in place.

**What needs improving:**
- The siteConfig `keywords` array is missing high-value terms: `"honeymoon Sri Lanka"`, `"luxury Sri Lanka holidays"`, `"tailor-made Sri Lanka tours"`, `"Sri Lanka holiday packages"`. These should be added.
- The layout title (`Tarragon Leisure`) and page title (`Sri Lanka Tours & Travel Adventures`) are both set via `buildMetadata`. Confirm the rendered `<title>` tag is `"Sri Lanka Tours & Travel Adventures | Tarragon Leisure"` and not just one of these values. The `buildMetadata` function should concatenate them.
- Add `LocalBusiness` schema (or extend `Organization` schema) with the Matara address, phone, and email from `siteConfig`. This is critical for trust signals on a new site.

**Primary keyword target:** `tailor-made Sri Lanka tours` (low competition, brand-aligned, commercial intent)
**Secondary keywords:** `luxury Sri Lanka holidays`, `bespoke Sri Lanka itinerary`, `Sri Lanka travel experts`

**Title tag:** Sri Lanka Tours & Tailor-Made Holidays | Tarragon Leisure
**Meta description:** Plan your perfect Sri Lanka holiday with Tarragon Leisure. We design bespoke tours, luxury safaris, and honeymoon itineraries from our base in Matara. Speak to a local expert today.

**Reasoning:** Targeting `tailor-made` differentiates from OTAs and group tour operators. It reflects Tarragon's actual positioning. "Sri Lanka tours" as a broad term can be included in the description without being the primary target — the site is too new to compete for it directly.

---

### 4b. Destinations Page (`/destinations`)

**Current state:** Unknown (page exists at `/destinations` but metadata not inspected). Assumed to use `buildMetadata()` pattern.

**Primary keyword target:** `where to visit in sri lanka` (UK: 590, KD: 12 — achievable for a new site)
**Secondary keywords:** `where to travel in sri lanka` (590), `sri lanka tourism places to visit` (480), `tour map of sri lanka` (590/KD 5)

**Title tag:** Where to Visit in Sri Lanka | Destinations & Places | Tarragon Leisure
**Meta description:** Discover the best places to visit in Sri Lanka — from the ancient Cultural Triangle to jungle safaris and golden southern beaches. View our interactive travel map.

**On-page requirements:**
1. This page must function as a **topic hub** — linking out to every destination sub-page and to relevant blog articles
2. **Embed or link to a visual travel route map** — this alone can capture the entire map-keyword cluster (590 UK vol, KD 5). This is the highest-ROI quick win in the CSV data.
3. The H1 must contain the primary keyword naturally: e.g., "Where to Visit in Sri Lanka"
4. Use `CollectionPage` or `ItemList` schema to list destinations

**Reasoning:** `where to visit in sri lanka` has a KD of 12, making it genuinely achievable for a new site within 3–6 months. The map cluster at KD 5 is an even faster win. Both require minimal content effort beyond what the destinations page should already contain.

---

### 4c. Tours Page (`/tours`)

**Current state:** Unknown (page exists at `/tours`). The previous plan incorrectly targeted group tour keywords.

**Primary keyword target:** `tailor-made Sri Lanka holiday packages` (low KD, brand-aligned)
**Secondary keywords:** `sri lanka and maldives tour package` (480, KD 5), `luxury Sri Lanka tours`, `private tours Sri Lanka`

**Title tag:** Bespoke Sri Lanka Tour Packages | Tailor-Made Holidays | Tarragon Leisure
**Meta description:** Browse our handcrafted Sri Lanka tour packages — from cultural heritage tours and wildlife safaris to luxury honeymoon itineraries and Sri Lanka–Maldives combinations.

**On-page requirements:**
1. Create a clear **"Sri Lanka & Maldives" combination tour category** or dedicated sub-page. The keyword `sri lanka and maldives tour package` (480 UK, KD 5, CPC £1.55) is the single most commercially attractive low-competition keyword in the CSV data. This is a priority.
2. Each tour card must link to the relevant blog article (e.g., Yala tour → Yala safari blog post) for internal link equity flow
3. Use `Product` or `Service` schema on individual tour pages

**Reasoning:** A new site cannot rank for `sri lanka tours` against OTAs. It can rank for `sri lanka and maldives tour package` — low KD, high commercial intent, and it maps directly to a real Tarragon product.

---

### 4d. About Page (`/about`)

**Current state:** Page exists. No specific keyword strategy from previous plan.

**What this page is for (corrected):** About pages rank primarily for **branded queries** (`Tarragon Leisure reviews`, `about Tarragon Leisure`). They do not rank for informational travel queries. The purpose of this page is **trust and E-E-A-T**, not traffic capture.

**Primary goal:** Establish E-E-A-T signals for Google
**Title tag:** About Tarragon Leisure | Local Sri Lanka Travel Experts Based in Matara
**Meta description:** Tarragon Leisure is a Sri Lanka-based travel company designing personalised tours and luxury itineraries since [year]. Meet the team behind your perfect Sri Lanka journey.

**On-page requirements:**
1. **Team section with real names, photos, and bio copy** — this is the single most important E-E-A-T signal for a new site. A named, faceable team makes every blog article more credible.
2. Physical address (Galle Road, Pamburana, Matara) prominently displayed — supports local trust signals
3. `Person` schema for key team members, nested within the `Organization` schema
4. Link to the blog from the About page with anchor text like "Read our Sri Lanka travel guides" — distributes PageRank to the content engine

**Reasoning:** Google's March 2024+ algorithm updates heavily weight "Who is behind this content?" for travel sites. A generic About page with no named people is a liability for E-E-A-T on a new domain.

---

### 4e. Contact Page (`/contact`)

**Primary goal:** Conversion, not traffic
**Title tag:** Contact Us | Plan Your Sri Lanka Trip | Tarragon Leisure
**Meta description:** Ready to start planning? Contact Tarragon Leisure to design your bespoke Sri Lanka holiday. Call, WhatsApp, or email our local team.

**On-page requirements:**
1. WhatsApp button (already implemented site-wide via `WhatsAppFabGlobal`) — ensure it is also a static link on this page for SEO
2. Physical address, phone, and email consistent with `siteConfig` — this consistency across pages is a trust signal
3. `ContactPage` schema
4. Keep the form fields minimal — name, email, travel month, rough budget, message. Every extra required field reduces conversion rate.

**Reasoning:** Contact pages should optimise for conversion, not organic rankings. The traffic arriving here will come from the blog and tour pages, not from a direct Google search for "contact Sri Lanka travel agency."

---

### 4f. Blog Index Page (`/blog`)

**Current state:** Implemented. Metadata set via `buildMetadata()` pattern in the implementation plan.

**Primary keyword target:** `Sri Lanka travel blog` / `Sri Lanka travel guides`
**Title tag:** Sri Lanka Travel Blog — Expert Guides & Itineraries | Tarragon Leisure
**Meta description:** In-depth Sri Lanka travel guides, itineraries, and insider tips written by our local team in Matara. Safari guides, beach tips, honeymoon itineraries, and more.

**On-page requirements:**
1. Category filter tabs on the index: Itineraries / Wildlife / Destinations / Honeymoon / Practical (Visa, Safety, Nomad)
2. P0 articles pinned to the hero row: `2-week-itinerary`, `best-time-to-visit`, `yala-safari`, `honeymoon-itinerary`, `visa-eta-guide`
3. The blog index page should link to the `/destinations` and `/tours` pages in the sidebar or footer section — this is a free internal link to the commercial pages

---

## 5. Implemented Blog Articles — Current Status & Required Fixes

> **5 of 15 planned articles are live.** This section audits each one against the implementation plan spec and the SEO requirements. These fixes are higher priority than writing new content — broken, incomplete articles actively hurt the site's E-E-A-T on a new domain.

---

### Article 1: `2-week-sri-lanka-itinerary.mdx`
**Status:** Live ✅ | **Critical Issues:** Yes ⚠️

#### What's correct
- Has `answerSummary` and `faq` array in frontmatter ✅
- Good keyword density — "2-week Sri Lanka itinerary", "luxury itinerary" used naturally ✅
- Day-by-day structure is excellent for user experience ✅
- Internal links to Sigiriya, Galle ✅

#### What must be changed

| Issue | Severity | Fix Required |
|-------|----------|--------------|
| **H1 does not contain primary keyword** | 🔴 Critical | H1 is `"The Ultimate 2-Week Luxury Sri Lanka Itinerary"` — this is fine but the word "luxury" is not in the primary keyword `2 week Sri Lanka itinerary`. Change H1 to: `"The Perfect 2-Week Sri Lanka Itinerary (2026 Guide)"` to match the exact target keyword. |
| **Missing frontmatter fields** | 🔴 Critical | `slug`, `category`, `tags`, `primaryKeyword`, `secondaryKeywords`, `relatedTours`, `relatedDestinations`, `readTime`, `updatedAt`, `authorBio` are all absent. The blog system cannot populate schema, related posts, or reading time without these. Add all required fields per the implementation plan spec. |
| **Word count is too short** | 🔴 Critical | The article is only ~750 words. The implementation plan specifies 1,500–2,500 words. Google 2026 E-E-A-T rewards depth. A day-by-day guide that covers 14 days in 750 words is superficial — a competitor with 2,000 words will outrank it. Expand each day section significantly. |
| **No internal links to `/tours/` pages** | 🟡 High | The implementation plan requires "at least 2 internal links to `/tours/[slug]` pages." None exist currently. Add links to the wildlife safari tour and cultural triangle tour pages. |
| **"Introduction to Sri Lanka Luxury Travel" section is weak for E-E-A-T** | 🟡 High | This section talks about private charter flights and helicopters immediately — this skews too high-end and loses travellers with a £3k–£6k budget. The implementation plan suggests introducing Tarragon's local Colombo-based expertise first. Reframe the intro. |
| **FAQ question format mismatch** | 🟡 High | The live article uses `question`/`answer` keys in the FAQ array. The `buildFaqSchema()` function in the plan uses `q`/`a` keys. One of these is wrong — confirm which key names the `buildFaqSchema()` function actually reads and ensure consistency across all 5 articles. |
| **Missing: visa/entry cross-link** | 🟠 Medium | The plan specifies: "Do I need a visa to visit Sri Lanka? — answer briefly, link to Article 05 for full detail." No FAQ question or link to the visa article exists. Add it. |
| **Missing: route map** | 🟠 Medium | The plan specifies an embedded or linked route map. There is no map mention in the current article. A static image map of the 14-day route would add significant value and help capture map-related search queries. |

---

### Article 2: `best-time-to-visit-sri-lanka.mdx`
**Status:** Live ✅ | **Critical Issues:** Yes ⚠️

#### What's correct
- `answerSummary` is clear and front-loaded ✅
- Good FAQ coverage (5 questions) ✅
- Month-by-month breakdown exists ✅
- Good internal linking to Arugam Bay and Yala implied in the text ✅

#### What must be changed

| Issue | Severity | Fix Required |
|-------|----------|--------------|
| **H1 does not match primary keyword** | 🔴 Critical | H1 is `"Decoding Sri Lanka's Seasons: When to Travel"` — clever but wrong for SEO. The primary keyword is `best time to visit sri lanka`. Google needs to see this phrase in the H1. Change to: `"Best Time to Visit Sri Lanka: A Month-by-Month Weather Guide"` |
| **Missing frontmatter fields** | 🔴 Critical | Same issue as Article 1. All structured fields absent. |
| **Word count too short** | 🔴 Critical | ~750 words. Plan specifies 1,500–2,500. The month-by-month section currently covers Jan–Nov in 4 groups. The plan specifies 1–2 paragraphs per month. Expand significantly. |
| **Missing quick-reference table** | 🔴 Critical | The implementation plan's most important differentiator for this article is the month-by-month table (South & West coast / East coast / Hill country / Wildlife parks). This table format is exactly what Google AI Overview extracts for "best time to visit" queries — it is currently absent. Add it immediately. |
| **No "Tarragon's recommendation" section** | 🟡 High | The plan specifies an opinionated "our favourite time" paragraph — adds personality and E-E-A-T. Currently missing. |
| **Festival calendar missing** | 🟡 High | Esala Perahera, Sinhala & Tamil New Year, Vesak — all high-value content for users and AI Overview. Missing. |
| **Missing frontmatter `image` alt text** | 🟠 Medium | The `image` field points to `/assets/blog/best-time-visit.png` but there is no descriptive alt text configured in the frontmatter. The image must have a descriptive alt. |

---

### Article 3: `yala-national-park-safari-guide.mdx`
**Status:** Live ✅ | **Critical Issues:** Yes ⚠️

#### What's correct
- `answerSummary` is well-targeted ✅
- Ethical wildlife section is a genuine differentiator ✅
- Good FAQ coverage (5 questions, block-specific detail) ✅
- Word count is closer to acceptable (~850 words) ✅

#### What must be changed

| Issue | Severity | Fix Required |
|-------|----------|--------------|
| **H1 does not match primary keyword** | 🔴 Critical | H1 is `"The Ultimate Yala National Park Safari Guide"` — "ultimate" is a filler word and "the ultimate" is a weak SEO opening. Change to: `"Yala National Park Safari: The Complete Guide (2026)"` to match the plan's specified title. |
| **Missing frontmatter fields** | 🔴 Critical | Same issue as Articles 1 & 2. |
| **Missing: other parks comparison section** | 🟡 High | The plan specifies a comparison with Udawalawe (elephants), Wilpattu (leopards), Minneriya (Gathering), Kumana (birding). This is a major differentiator — competitors typically only cover Yala. Adding this section significantly increases the article's topical authority and captures long-tail searches for other parks. |
| **Missing: accommodation guide** | 🟡 High | Wild Coast Tented Lodge and Uga Chena Huts are mentioned in the plan but not in the live article. Specific named recommendations are a strong E-E-A-T signal. |
| **Missing: practical info** | 🟠 Medium | Entry fees, getting there from Colombo/Ella/Galle, park rules — none present in the live article. The implementation plan specifies all of this. |
| **Missing internal links to `/tours/`** | 🟠 Medium | Need 2 links to tour pages. Currently none evident. |

---

### Article 4: `sri-lanka-honeymoon-itinerary.mdx`
**Status:** Live ✅ | **Critical Issues:** Yes ⚠️

#### What's correct
- Strong brand voice and luxury positioning ✅
- `answerSummary` and FAQ present ✅
- Practical "Common Mistakes" section is a differentiator ✅
- Sri Lanka vs. Maldives comparison is implied ✅

#### What must be changed

| Issue | Severity | Fix Required |
|-------|----------|--------------|
| **H1 does not match primary keyword** | 🔴 Critical | H1 is `"Crafting the Perfect Sri Lanka Honeymoon Itinerary"` — acceptable but could be stronger. Plan specifies: `"Sri Lanka Honeymoon Itinerary: 10 Days of Romance & Luxury"`. This is more specific (10 days) and better matches search intent. |
| **Missing frontmatter fields** | 🔴 Critical | Same issue. |
| **Word count too short** | 🟡 High | ~700 words. Plan calls for 1,500–2,500. The itinerary only has 4 sections (Days 1–3, 4–6, 7–9, 10–14) with minimal detail per stop. Expand each section with specific hotel recommendations and romantic experience descriptions. |
| **Missing: explicit Sri Lanka vs. Maldives comparison** | 🟡 High | The plan specifies: compare with Bali (overdeveloped) and Maldives (beach-only). Sri Lanka offers cultural depth + wildlife + beach. This comparison is a key differentiator and captures the search intent of couples comparing destinations. |
| **Missing: link to visa guide** | 🟠 Medium | Plan specifies: "Entry requirements: both partners should confirm ETA/visa status ahead of booking — link to Article 05." Not present. |
| **Missing: specific hotel names** | 🟠 Medium | The plan lists specific properties (Water Gardens Sigiriya, Wild Coast Tented Lodge, Uga Chena Huts, Amanwella). These named recommendations are a strong E-E-A-T signal that generic competitor content lacks. |

---

### Article 5: `sri-lanka-visa-eta-guide.mdx`
**Status:** Live ✅ | **Critical Factual Error:** Yes 🔴

#### What's correct
- Clear step-by-step application process ✅
- Official portal URL warning is prominent ✅
- FAQ covers key questions ✅
- Good `answerSummary` ✅

#### What must be changed

| Issue | Severity | Fix Required |
|-------|----------|--------------|
| **FACTUAL ERROR — Wrong visa duration stated** | 🔴 URGENT | The article states: "The standard tourist ETA allows for a stay of up to 30 days." The implementation plan v2 explicitly states Sri Lanka extended the tourist visa to **180 days** in early 2026. The article's extension section then says "extend for 60 days (90 days total)" — also wrong. The correct information per the plan: 180 days standard, extendable up to 270 days. **This must be corrected before the article is indexed.** A travel article giving wrong visa duration is a serious trust and legal liability. |
| **Missing: 2026 digital nomad visa section** | 🔴 Critical | The plan specifies a "Digital Nomad Visa — short overview, full detail linked out" section. This is absent. The digital nomad visa is a major 2026 policy change that differentiates this article. |
| **`answerSummary` does not mention 180-day extension** | 🔴 Critical | The current `answerSummary` says nothing about the 180-day extended stay. This is the most important change in the article. Rewrite the answerSummary to include the 180-day information. |
| **Missing frontmatter fields** | 🔴 Critical | Same issue as all other articles. |
| **Missing: maintenance note** | 🟡 High | The plan specifies this article needs monthly fact-checking. Add a visible "Last verified: July 2026" date block in the article body, distinct from the publish date. This signals currency to readers and search engines. |
| **Missing: common mistakes section** | 🟠 Medium | Applying via unofficial sites, letting visa lapse mid-trip, not printing approval — all specified in the plan, none present. |
| **Missing `changefreq: weekly`** | 🟠 Medium | The visa article should have `changefreq: 'weekly'` in the sitemap config because Sri Lanka visa policy is actively changing. Confirm this is set. |

---

## 6. Summary of Changes Needed Across All 5 Live Articles

### Priority 1 — Do immediately (before further indexing)
1. **Correct the 30-day visa duration error in `sri-lanka-visa-eta-guide.mdx`** — states 30 days when it should be 180 days
2. **Add all required frontmatter fields to all 5 articles** — `slug`, `category`, `tags`, `primaryKeyword`, `secondaryKeywords`, `relatedTours`, `relatedDestinations`, `readTime`, `updatedAt`, `authorBio`
3. **Standardise FAQ frontmatter key format** (`q`/`a` vs `question`/`answer`) — confirm against `buildFaqSchema()` and fix all articles to match

### Priority 2 — Do this week
4. **Fix H1 tags** on all 5 articles to match primary keyword targets
5. **Add the month-by-month table** to `best-time-to-visit-sri-lanka.mdx`
6. **Add internal links to `/tours/` pages** on all articles (minimum 2 per article)
7. **Expand word count** to 1,500+ words on all articles (currently all ~700–850 words)

### Priority 3 — Do within the month
8. Add missing sections to each article per the implementation plan brief (route map on Article 1, festival calendar on Article 2, parks comparison on Article 3, hotel names on Article 4, nomad visa section on Article 5)
9. Add "Last verified" date block to the visa article
10. Add cross-links between articles (visa guide ↔ honeymoon ↔ itinerary)

---

## 7. Planned But Not Yet Implemented — Articles 6–15

These 10 articles are fully briefed in the implementation plan but not yet written. Publish in order of priority.

| Priority | Article | Slug | Primary Keyword | Est. Global Vol | KD | Publish Order |
|----------|---------|------|-----------------|-----------------|-----|---------------|
| P1 | Sigiriya Rock Fortress Guide | `/blog/sigiriya-rock-fortress-guide` | `Sigiriya rock fortress` | 18,000–27,000 | Medium | 1st |
| P1 | Ella Sri Lanka Travel Guide | `/blog/ella-sri-lanka-travel-guide` | `Ella Sri Lanka` | 22,000–33,000 | Medium | 2nd |
| P1 | Galle Fort Guide | `/blog/galle-fort-guide` | `Galle Fort things to do` | 6,000–10,000 | Low | 3rd |
| P1 | Whale Watching Mirissa | `/blog/whale-watching-mirissa` | `whale watching Mirissa` | 8,000–14,000 | Low | 4th |
| P1 | Kandy to Ella Train | `/blog/kandy-ella-train-ride` | `Kandy to Ella train` | 10,000–18,000 | Low–Medium | 5th |
| P2 | Cultural Triangle Guide | `/blog/cultural-triangle-sri-lanka` | `cultural triangle Sri Lanka` | 5,000–8,000 | Low | 6th |
| P2 | Arugam Bay Surfing Guide | `/blog/arugam-bay-surfing-guide` | `Arugam Bay surfing` | 6,000–9,000 | Low | 7th |
| P2 | Sri Lanka Family Travel | `/blog/sri-lanka-family-travel` | `Sri Lanka family holiday` | 4,000–7,000 | Low | 8th |
| P2 | Digital Nomad Guide | `/blog/sri-lanka-digital-nomad-guide` | `Sri Lanka digital nomad visa` | 3,000–6,000 | Low | 9th |
| P2 | Solo Female Travel | `/blog/solo-female-travel-sri-lanka` | `solo female travel Sri Lanka` | 2,000–4,000 | Low | 10th |

**Reasoning for publish order:** P1 articles (Sigiriya, Ella, Galle, Mirissa, Kandy–Ella train) have higher global search volumes AND lower KD than the P0 articles. For a new site, these are actually better near-term targets. The P2 articles (digital nomad, solo female) are newer search categories with low competition and rapidly growing volume.

---

## 8. New Blog Articles to Add Next (Beyond the Original 15)

Based on the CSV data and keyword gaps not covered by the 15 planned articles, the following new articles are recommended for Phase 2 (after the original 15 are published).

---

### New Article A — Priority: High

**Title:** Sri Lanka Weather Guide: What to Pack & What to Expect Month by Month
**Slug:** `/blog/sri-lanka-weather-guide`
**Target URL:** `https://www.tarragonleisure.com/blog/sri-lanka-weather-guide`

**Primary keyword:** `sri lanka weather by month`
**UK Volume:** The CSV shows `best time to visit sri lanka weather` at 390, `best time visit sri lanka weather` at 390 — combined search cluster around weather-specific queries
**KD:** 16 — achievable for a site with established topical authority by Month 4

**Secondary keywords to weave in:**
- `sri lanka monsoon season` (~5,000 global/mo)
- `sri lanka climate` (~8,000 global/mo)
- `what to pack for sri lanka` (~3,000 global/mo)
- `sri lanka december weather` (~6,000 global/mo)
- `sri lanka in april weather`
- `is it rainy in sri lanka`

**Why this article now:** Article 2 (`best time to visit`) covers *when* to go. This article covers *what to expect when you're there* — a different, complementary search intent. Travellers who have already decided on their dates search for what-to-pack queries. This creates a two-article cluster that dominates the seasonal/weather keyword space and allows cross-linking between the two.

**Content brief:**
- What the "monsoon" actually feels like (brief afternoon showers vs. continuous rain — set realistic expectations, not alarming ones)
- Practical packing list by season: wet season vs. dry season
- What to wear at temples (modesty requirements year-round)
- Temperature ranges by region and altitude (hill country is significantly cooler)
- What to expect for photography conditions
- FAQ: Is Sri Lanka good in October? Is it safe to travel during monsoon? What is the weather like in Sri Lanka in March?
- **AnswerBlock summary (draft):** "Sri Lanka has a tropical climate but two distinct monsoon seasons mean the weather varies significantly by region and time of year. The south and west coasts are best December to April; the east coast is best May to September. Hill country (Ella, Kandy) remains pleasant year-round with cooler temperatures at altitude."

**Internal links:** `/blog/best-time-to-visit-sri-lanka`, `/blog/2-week-sri-lanka-itinerary`, `/destinations/ella`, `/destinations/galle`

---

### New Article B — Priority: High

**Title:** Sri Lanka Travel Insurance: What You Need & How to Choose (2026)
**Slug:** `/blog/sri-lanka-travel-insurance`
**Target URL:** `https://www.tarragonleisure.com/blog/sri-lanka-travel-insurance`

**Primary keyword:** `travel insurance sri lanka`
**UK Volume:** 480 (appears three times in the CSV under different phrasing variants — `travel insurance to sri lanka`, `travel insurance for sri lanka`, `travel insurance in sri lanka`) — combined cluster is 480+ with low KD (6–26 range across variants)
**KD:** 6–12 (most variants) — highly achievable for a new site

**Secondary keywords:**
- `do you need travel insurance for sri lanka`
- `best travel insurance sri lanka`
- `travel insurance with safari cover`
- `adventure sports travel insurance sri lanka`
- `medical evacuation insurance sri lanka`

**Why this article now:** This is the highest-frequency, lowest-KD commercial-adjacent keyword in the entire CSV dataset. Every single person planning a Sri Lanka trip will search for travel insurance. Capturing this query builds trust and positions Tarragon as a comprehensive planning resource, not just a tour seller. This is the article that converts "researching travellers" into "ready-to-enquire leads" more efficiently than almost any destination content.

**Content brief:**
- Do you legally need travel insurance for Sri Lanka? (Answer: no legal requirement but strongly recommended)
- What does a good Sri Lanka travel insurance policy cover? — medical, evacuation, trip cancellation, adventure activities (safari jeep rides, hiking, water sports)
- Specific considerations for Sri Lanka: closest medical facility distances, hospital quality in Colombo vs. rural areas, cost of medical care
- Adventure activities that require specialist cover (white-water rafting, scuba diving, hot air ballooning)
- What to look for: cancellation flexibility for monsoon-affected itineraries
- How to claim if something goes wrong: what documents you need
- **Do NOT recommend specific insurance providers** — Tarragon is a tour operator, not a broker. Instead, list the *criteria* a policy should meet. This avoids regulatory issues and keeps the content evergreen.
- FAQ: Is Sri Lanka safe for travel? Do I need adventure cover for Yala safari? Will my UK travel insurance cover Sri Lanka?
- **AnswerBlock summary (draft):** "Travel insurance is not legally required to enter Sri Lanka, but it is strongly recommended. Ensure your policy covers medical evacuation, adventure activities (if doing safaris or hiking), and trip cancellation. UK travellers should check their policy covers the duration of their trip, including any planned Maldives extension."

**Internal links:** `/blog/sri-lanka-visa-eta-guide`, `/blog/yala-national-park-safari-guide`, `/blog/2-week-sri-lanka-itinerary`, `/contact`

---

### New Article C — Priority: Medium

**Title:** Is Sri Lanka Safe to Travel? A Complete 2026 Safety Guide
**Slug:** `/blog/is-sri-lanka-safe-to-travel`
**Target URL:** `https://www.tarragonleisure.com/blog/is-sri-lanka-safe-to-travel`

**Primary keyword:** `is it safe to travel to sri lanka`
**UK Volume:** 590 | **KD:** 36 — higher KD, but critical trust content

**Why this article now (despite higher KD):** The safety query appears in the top 5 of the CSV travel-intent data. Every potential visitor considers this question. For a new travel operator, answering it authoritatively builds the trust that converts browsers into enquirers. Even without a page 1 ranking, this article supports AI Overview citations and provides internal link anchors from every other article. Long-term (Month 9+), as domain authority grows, this article can compete.

**Secondary keywords:**
- `is sri lanka safe for tourists`
- `sri lanka safety tips`
- `is sri lanka safe right now 2026`
- `crime rate sri lanka tourists`
- `is colombo safe`

**Content brief:**
- Overall assessment: Sri Lanka is considered safe for tourists. Honest framing, not alarmist, not dismissive.
- Crime context: petty theft in tourist areas is the primary risk; violent crime against tourists is rare; the 2019 Easter Sunday attacks context and what has changed since
- Regional safety notes: different considerations for Colombo vs. rural areas vs. east coast
- Transport safety: road accident rates in Sri Lanka are higher than UK — private driver vs. self-driving recommendation
- Health safety: water quality, food safety, mosquito-borne illness risk, sun and heat
- Natural events: tsunami awareness, monsoon flooding in some areas
- Scam awareness: common tourist-targeted scams (gem shops, tuk-tuk commission schemes)
- **AnswerBlock summary (draft):** "Sri Lanka is considered safe for tourists in 2026. The primary risks for visitors are petty theft in tourist areas and road accidents — both mitigated by standard precautions. Violent crime against tourists is rare. The country has political and economic stability following the 2022 crisis."

**Internal links:** `/blog/solo-female-travel-sri-lanka`, `/blog/sri-lanka-travel-insurance`, `/blog/sri-lanka-visa-eta-guide`, `/contact`

---

### New Article D — Priority: Medium

**Title:** Sri Lanka & Maldives: How to Plan the Perfect Combination Holiday
**Slug:** `/blog/sri-lanka-maldives-holiday`
**Target URL:** `https://www.tarragonleisure.com/blog/sri-lanka-maldives-holiday`

**Primary keyword:** `sri lanka and maldives tour package`
**UK Volume:** 480 | **KD:** 5 — the lowest-KD, highest-commercial-intent keyword in the entire CSV dataset

**Why this article now:** KD 5 with 480 UK monthly searches and a CPC of £1.55 is the highest-priority commercial keyword in the CSV data that is not yet targeted by any existing or planned content. This keyword maps perfectly to a real Tarragon product. A dedicated article (rather than just a mention on the Tours page) will outperform any competitor who has only a tour listing.

**Secondary keywords:**
- `sri lanka maldives itinerary`
- `combined sri lanka maldives holiday`
- `how to get from sri lanka to maldives`
- `sri lanka maldives honeymoon`
- `sri lankan airlines colombo to male`

**Content brief:**
- Why this combination works: culture + beach, and SriLankan Airlines flies direct Colombo→Malé in ~1.5 hours
- Recommended split: 10 days Sri Lanka + 5 days Maldives is the most popular; 14+7 for longer trips
- When to do it: year-round feasibility (Maldives is consistent; Sri Lanka timing determines which coast to visit)
- The route: how transfers work — fly in/out of Colombo (BIA), fly to Malé, transfer to resort by seaplane or speedboat
- Sample 15-day itinerary combining both countries
- Budget guidance: Maldives significantly increases the trip cost — set realistic expectations
- Which Maldives atolls pair well with southern Sri Lanka itineraries
- FAQ: How do I get from Sri Lanka to Maldives? Can I visit both in 2 weeks? Do I need a visa for both?
- **AnswerBlock summary (draft):** "A Sri Lanka and Maldives combination holiday is one of the most popular choices for UK travellers. SriLankan Airlines flies direct from Colombo to Malé in approximately 1.5 hours. A typical combined trip runs 10–14 days in Sri Lanka followed by 5–7 days in the Maldives, though the split can be adjusted for any budget or travel style."

**Internal links:** `/tours/` (Maldives combo tour page), `/blog/sri-lanka-honeymoon-itinerary`, `/blog/2-week-sri-lanka-itinerary`, `/blog/best-time-to-visit-sri-lanka`, `/contact`

---

### New Article E — Priority: Lower (Month 6+)

**Title:** Colombo City Guide: Where to Stay, Eat & What to Do
**Slug:** `/blog/colombo-travel-guide`

**Primary keyword:** `colombo sri lanka things to do`
**Est. Global Volume:** 8,000–12,000/mo | **KD:** Medium

**Why eventually:** Almost every Sri Lanka itinerary begins and ends in Colombo. A Colombo guide captures arrival-day and pre-departure searches. It also anchors the internal linking structure — every itinerary article references Colombo, but there's no dedicated page to link to. This strengthens topical authority in the "Sri Lanka destinations" cluster without targeting an ultra-competitive term.

**Secondary keywords:** `colombo hotels`, `colombo old town`, `pettah market colombo`, `dutch museum colombo`, `colombo airport to city`

---

### New Article F — Priority: Lower (Month 6+)

**Title:** Trincomalee Travel Guide: Beaches, Whale Watching & Getting There
**Slug:** `/blog/trincomalee-travel-guide`

**Primary keyword:** `trincomalee sri lanka`
**Est. Global Volume:** 6,000–9,000/mo | **KD:** Low

**Why eventually:** Trincomalee is the natural complement to Mirissa for whale watching (May–September) and anchors the east coast cluster alongside Arugam Bay. Once Articles A–D above are published, a Trincomalee guide completes the east coast content cluster and creates strong internal linking between Arugam Bay (Article 12), Mirissa (Article 9), and the best-time-to-visit article.

---

## 9. Internal Linking Map (Complete)

### Cluster structure

```
COMMERCIAL PAGES (link targets for conversion)
├── /tours/wildlife-safari-yala ← Articles: 1, 3, 4, 13
├── /tours/cultural-triangle-tour ← Articles: 1, 4, 6, 11
├── /tours/[maldives-combo] ← Articles: 4, New D
├── /destinations/sigiriya ← Articles: 1, 4, 6, 11
├── /destinations/ella ← Articles: 1, 4, 7, 10
├── /destinations/galle ← Articles: 1, 4, 8, 9, New D
├── /destinations/arugam-bay ← Articles: 2, 12
└── /destinations/yala ← Articles: 3

BLOG CLUSTERS (cross-link within cluster)
├── Itinerary cluster: Art.1 ↔ Art.6 ↔ Art.7 ↔ Art.10 ↔ Art.11
├── Wildlife cluster: Art.3 ↔ Art.9 ↔ Art.13
├── Seasonal cluster: Art.2 ↔ Art.3 ↔ Art.9 ↔ Art.12 ↔ New A
├── Luxury/Honeymoon: Art.4 ↔ Art.8 ↔ Art.9 ↔ New D
├── Practicalities: Art.5 ↔ Art.14 ↔ Art.15 ↔ New B ↔ New C
└── East Coast: Art.12 ↔ New F ↔ Art.9 (Trincomalee whale watching)

EVERY ARTICLE must link to:
├── /contact (primary conversion goal)
└── At least 1 /tours/[slug] page (commercial page link equity)
```

---

## 10. Technical SEO Checklist

> Based on actual codebase inspection. Checked against `layout.tsx`, `robots.ts`, `sitemap.ts`, `page.tsx`, and the blog implementation plan.

### Already implemented ✅
- `Organization` JSON-LD in root layout
- `WebSite` JSON-LD on homepage
- `buildMetadata()` helper in use across pages
- `robots.ts` present
- `sitemap.ts` present
- Vercel Analytics (`@vercel/analytics/next`) in layout
- `WhatsAppFabGlobal` component for conversion
- `next/font` for Bodoni Moda and Be Vietnam Pro (zero layout shift)
- `force-static` rendering on blog and homepage
- `lang="en"` on root `<html>` tag

### Must be verified / implemented

| Item | Status | Action Required |
|------|--------|----------------|
| `Article` JSON-LD on blog posts | ❓ Unknown | Confirm `buildArticleSchema()` is implemented in `structured-data.ts` and called in `blog/[slug]/page.tsx`. If not, implement per the plan spec. |
| `FAQPage` JSON-LD on blog posts | ❓ Unknown | Confirm `buildFaqSchema()` is implemented and called. Confirm key format (`q`/`a`) matches frontmatter. |
| `BreadcrumbList` JSON-LD | ❓ Unknown | Confirm `BlogBreadcrumb.tsx` emits breadcrumb schema. |
| Blog post `sitemap.ts` inclusion | ❓ Unknown | Confirm `sitemap.ts` dynamically includes all `/blog/[slug]` routes. |
| Visa article `changefreq: weekly` | ❓ Unknown | Set `changefreq: 'weekly'` for the visa/ETA article specifically. |
| `LocalBusiness` schema | ❌ Missing | Add to homepage or layout. Include: `name`, `address` (Galle Road, Pamburana, Matara), `telephone`, `email`, `url`. |
| OG image on all blog posts | ❓ Partial | Confirm `ogImage` field is in all live articles and that `buildMetadata()` uses it. |
| Hero image preloading | ❓ Unknown | Confirm `priority` prop is set on `<Image>` in `BlogHero.tsx` — required for LCP < 2.0s target. |
| Core Web Vitals baseline | ❌ Not yet | Run PageSpeed Insights on all 5 live blog pages. Record LCP, INP, CLS. Target: LCP < 2.0s, INP < 200ms, CLS < 0.1. |
| `lang` attribute correctness | ✅ Done | `lang="en"` confirmed in `layout.tsx`. |
| Canonical URLs | ❓ Unknown | Confirm `buildMetadata()` sets a `canonical` URL on every blog page. |
| `noindex` audit | ❓ Unknown | Confirm no blog pages are accidentally marked `noindex` in development environments. Run URL Inspection in GSC once site is indexed. |

---

## 11. Tracking & Measurement Plan

### Month 1–2 targets (new site baselines)

| Metric | Target |
|--------|--------|
| Blog pages crawled and indexed (GSC URL Inspection) | All 5 live articles return HTTP 200, indexable |
| Article + FAQPage schema valid | Pass Google Rich Results Test on all 5 articles |
| Core Web Vitals (PageSpeed Insights lab) | LCP < 2.0s, INP < 200ms, CLS < 0.1 on all pages |
| GSC impressions | First impressions data visible within 4–6 weeks of indexing |

### Month 3–6 targets

| Metric | Target | Reasoning |
|--------|--------|-----------|
| P2 keyword rankings (Galle, Mirissa, Arugam Bay, Ella articles) | Page 1–2 | Low KD articles from a new site realistically land here in 3–5 months with good on-page SEO |
| `sri lanka travel insurance` article | Page 1 | KD 6, highly achievable |
| `sri lanka and maldives tour package` | Page 1–2 | KD 5, direct commercial match |
| Blog organic clicks/month | 200–600 | Consistent with implementation plan targets |
| AI Overview citation (P0 keywords, incognito SERP check) | Baseline established | Track which P0 articles appear in AI Overviews |

### Month 6–12 targets

| Metric | Target |
|--------|--------|
| P1 keyword rankings (Sigiriya, Kandy–Ella, Yala, whale watching) | Page 1–2 |
| P0 keywords (best time to visit, 2-week itinerary) | Page 2–3 approaching Page 1 |
| Blog organic clicks/month | 1,500–5,000 |
| Enquiries attributed to blog (GA4 custom event: `blog_cta_click`) | 5–15/month |

### Monthly review tasks

1. GSC: Check all articles for impressions vs. clicks — high impressions/low CTR = title/meta description needs rewrite, or AI Overview has inserted itself above the result
2. GSC GenAI performance report: check for AI Overview citation on P0 keyword set
3. Visa article fact-check: verify 180-day policy, fees, and official portal URL against `eta.gov.lk`
4. PageSpeed Insights: re-run LCP and INP on any article that received new content additions
5. Rich Results Test: check all articles — any schema error should be corrected within 48 hours
6. Internal linking audit: confirm any new `/tours/[slug]` pages are cross-linked from relevant blog articles

---

*This document is the living SEO reference for tarragonleisure.com. It should be reviewed and updated: after every content publish, monthly for the visa/ETA article, quarterly for keyword volume re-pulls, and after every Google core algorithm update. Last fully reviewed: July 2026.*
