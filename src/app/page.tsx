import { Suspense } from "react";
import { JsonLd } from "@/components/site/json-ld";
import { PageSkeleton } from "@/components/site/page-skeleton";
import { AnimatedHome } from "@/components/animations/AnimatedHome";
import { getHomePageData } from "@/lib/api";
import { buildMetadata } from "@/lib/metadata";
import { images } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { websiteJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: siteConfig.tagline,
  description: siteConfig.description,
  path: "/",
  image: images.sigiriya2,
  keywords: siteConfig.keywords,
});

export const dynamic = "force-static";

async function HomeContent() {
  const { categories, destinations, featuredTours, services } = await getHomePageData();
  const featuredDestinations = destinations.slice(0, 3);
  const popularTours = featuredTours.slice(0, 3);

  return (
    <AnimatedHome
      categories={categories}
      destinations={featuredDestinations}
      popularTours={popularTours}
      services={services}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <Suspense fallback={<PageSkeleton heading="Loading homepage" cards={6} />}>
        <HomeContent />
      </Suspense>
    </>
  );
}
