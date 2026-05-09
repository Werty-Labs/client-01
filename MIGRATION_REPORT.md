# Migration Report

## Scope
- Source app: TanStack Start + TanStack Router static marketing site in `../src`
- Target app: Next.js App Router project in `./`
- Migration goal achieved: all original public routes converted to App Router, assets moved to `public/assets`, UI preserved, build/lint passing

## Phase 1 Audit

### Original routes
| Original route file | URL path |
| --- | --- |
| `src/routes/index.tsx` | `/` |
| `src/routes/about.tsx` | `/about` |
| `src/routes/contact.tsx` | `/contact` |
| `src/routes/services.tsx` | `/services` |
| `src/routes/destinations.tsx` | `/destinations` |
| `src/routes/destinations.$slug.tsx` | `/destinations/:slug` |
| `src/routes/tours.tsx` | `/tours` |
| `src/routes/tours.$slug.tsx` | `/tours/:slug` |
| `src/routes/__root.tsx` | root shell / layout / error / 404 wrapper |

### Original component inventory
| File | Classification |
| --- | --- |
| `src/components/site/Footer.tsx` | Interactive |
| `src/components/site/Header.tsx` | Interactive |
| `src/components/ui/accordion.tsx` | UI-only |
| `src/components/ui/alert-dialog.tsx` | UI-only |
| `src/components/ui/alert.tsx` | UI-only |
| `src/components/ui/aspect-ratio.tsx` | UI-only |
| `src/components/ui/avatar.tsx` | UI-only |
| `src/components/ui/badge.tsx` | UI-only |
| `src/components/ui/breadcrumb.tsx` | UI-only |
| `src/components/ui/button.tsx` | UI-only |
| `src/components/ui/calendar.tsx` | Interactive |
| `src/components/ui/card.tsx` | UI-only |
| `src/components/ui/carousel.tsx` | Interactive |
| `src/components/ui/chart.tsx` | Interactive |
| `src/components/ui/checkbox.tsx` | UI-only |
| `src/components/ui/collapsible.tsx` | UI-only |
| `src/components/ui/command.tsx` | UI-only |
| `src/components/ui/context-menu.tsx` | UI-only |
| `src/components/ui/dialog.tsx` | UI-only |
| `src/components/ui/drawer.tsx` | UI-only |
| `src/components/ui/dropdown-menu.tsx` | UI-only |
| `src/components/ui/form.tsx` | Interactive |
| `src/components/ui/hover-card.tsx` | UI-only |
| `src/components/ui/input-otp.tsx` | Interactive |
| `src/components/ui/input.tsx` | UI-only |
| `src/components/ui/label.tsx` | UI-only |
| `src/components/ui/menubar.tsx` | UI-only |
| `src/components/ui/navigation-menu.tsx` | UI-only |
| `src/components/ui/pagination.tsx` | UI-only |
| `src/components/ui/popover.tsx` | UI-only |
| `src/components/ui/progress.tsx` | UI-only |
| `src/components/ui/radio-group.tsx` | UI-only |
| `src/components/ui/resizable.tsx` | UI-only |
| `src/components/ui/scroll-area.tsx` | UI-only |
| `src/components/ui/select.tsx` | UI-only |
| `src/components/ui/separator.tsx` | UI-only |
| `src/components/ui/sheet.tsx` | UI-only |
| `src/components/ui/sidebar.tsx` | Interactive |
| `src/components/ui/skeleton.tsx` | UI-only |
| `src/components/ui/slider.tsx` | UI-only |
| `src/components/ui/sonner.tsx` | UI-only |
| `src/components/ui/switch.tsx` | UI-only |
| `src/components/ui/table.tsx` | UI-only |
| `src/components/ui/tabs.tsx` | UI-only |
| `src/components/ui/textarea.tsx` | UI-only |
| `src/components/ui/toggle-group.tsx` | Interactive |
| `src/components/ui/toggle.tsx` | UI-only |
| `src/components/ui/tooltip.tsx` | UI-only |

### Original route/page classification
| File | Classification |
| --- | --- |
| `src/routes/__root.tsx` | Interactive |
| `src/routes/index.tsx` | UI-only content page |
| `src/routes/about.tsx` | UI-only content page |
| `src/routes/contact.tsx` | Interactive page |
| `src/routes/services.tsx` | UI-only content page |
| `src/routes/destinations.tsx` | UI-only content page |
| `src/routes/destinations.$slug.tsx` | Data-fetching via local route loader |
| `src/routes/tours.tsx` | UI-only content page |
| `src/routes/tours.$slug.tsx` | Data-fetching via local route loader |

### Original hooks, state, and data
- Hooks: `src/hooks/use-mobile.tsx`
- Global state: none
- Context/Redux/Zustand: none
- React Query: configured in `src/router.tsx` and injected in `src/routes/__root.tsx`, but no query hooks used for runtime data
- Data source: static arrays and image imports in `src/data/site.ts`

### Original external API calls
- None
- No `fetch`, `axios`, or React Query network requests were present
- External links/resources only:
  - `https://wa.me/${site.whatsapp}`
  - `https://fonts.googleapis.com/...`
  - `https://fonts.gstatic.com`

### Original environment variables
- No `.env*` files found

### Original third-party libraries
- App/runtime stack: `@tanstack/react-router`, `@tanstack/react-query`, `@tanstack/react-start`, `react`, `react-dom`
- Styling/UI helpers: `tailwindcss`, `class-variance-authority`, `clsx`, `tailwind-merge`, `sonner`, `lucide-react`
- Radix/shadcn primitives present in source: `@radix-ui/react-*`, `cmdk`, `date-fns`, `embla-carousel-react`, `input-otp`, `react-day-picker`, `react-hook-form`, `react-resizable-panels`, `recharts`, `vaul`, `zod`
- Build tooling only: Vite, Cloudflare Vite plugin, TanStack router plugin, Tailwind Vite plugin

## Phase 2-8 Migration Output

### New route mapping
| Original | Next.js App Router |
| --- | --- |
| `/` | `src/app/page.tsx` |
| `/about` | `src/app/about/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |
| `/services` | `src/app/services/page.tsx` |
| `/destinations` | `src/app/destinations/page.tsx` |
| `/destinations/:slug` | `src/app/destinations/[slug]/page.tsx` |
| `/tours` | `src/app/tours/page.tsx` |
| `/tours/:slug` | `src/app/tours/[slug]/page.tsx` |
| 404 | `src/app/not-found.tsx` |
| Root shell | `src/app/layout.tsx` |

### Converted RSC vs Client breakdown
| Route | Server components | Client components |
| --- | --- | --- |
| `/` | `src/app/page.tsx`, `Header`, `Footer` | global `Providers`, `DesktopNavLinks`, `MobileNav`, `NewsletterForm` |
| `/about` | `src/app/about/page.tsx` | global shared clients only |
| `/contact` | `src/app/contact/page.tsx` | `ContactForm` + global shared clients |
| `/services` | `src/app/services/page.tsx` | global shared clients only |
| `/destinations` | `src/app/destinations/page.tsx` | global shared clients only |
| `/destinations/[slug]` | `src/app/destinations/[slug]/page.tsx` | global shared clients only |
| `/tours` | `src/app/tours/page.tsx` | global shared clients only |
| `/tours/[slug]` | `src/app/tours/[slug]/page.tsx` | global shared clients only |

### Shared migration details
- Assets copied from `../src/assets` to `public/assets`
- Static data moved to `src/lib/site-data.ts`
- Types split into `src/types/site.ts`
- Typed data accessors created in `src/lib/api.ts`
- SEO helpers created in `src/lib/metadata.ts`
- JSON-LD helpers created in `src/lib/structured-data.ts`
- Replaced all `<img>` with `next/image`
- Replaced internal router links with `next/link`
- Added `robots.ts`, `sitemap.ts`, route `loading.tsx`, route `error.tsx`, and `next.config.ts` security headers

## Data Fetching Strategy
| Route | Strategy |
| --- | --- |
| `/` | Static RSC using `getHomePageData()` from local typed server-side data module; `dynamic = "force-static"` |
| `/about` | Static RSC; no remote fetch; `dynamic = "force-static"` |
| `/contact` | Static RSC shell with client-only form island; `dynamic = "force-static"` |
| `/services` | Static RSC using `getServices()`; `dynamic = "force-static"` |
| `/destinations` | Static RSC using `getDestinations()`; `dynamic = "force-static"` |
| `/destinations/[slug]` | SSG via `generateStaticParams()` + local lookup `getDestinationBySlug()` |
| `/tours` | Static RSC using `getTours()`; `dynamic = "force-static"` |
| `/tours/[slug]` | SSG via `generateStaticParams()` + local lookup `getTourBySlug()` |

### Notes on fetching conversion
- The original app had no remote API calls to convert
- Because the source data was static and local, the migration uses server-side typed accessors instead of runtime HTTP requests
- React Query and TanStack Router were removed from the migrated app because they were no longer needed

## Validation
- `npm run lint`: passed
- `npm run build`: passed
- Route verification by local production server request:
  - `/`
  - `/about`
  - `/contact`
  - `/services`
  - `/destinations`
  - all 12 destination detail routes
  - `/tours`
  - all 6 tour detail routes
- Result: every verified route responded with HTTP `200`

## Environment Variables
- `NEXT_PUBLIC_SITE_URL`
  - Required for correct canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml`
  - Current fallback in code: `https://www.tarragonleisure.com`

## Limitations / Manual Steps
- Lighthouse was not run in this environment, so the requested score targets were not empirically measured here
- `next/font/google` requires network access during build; the final build passed once network access was available
- The original repository contained many unused shadcn/Radix UI primitives; only the dependencies required by the live site were migrated into `nextjs-output`
- The contact form still matches the original behavior: client-side simulated submit with toast feedback, no backend submission
