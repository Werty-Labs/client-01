import { Suspense } from "react";
import { JsonLd } from "@/components/site/json-ld";
import { PageSkeleton } from "@/components/site/page-skeleton";
import { AnimatedHome } from "@/components/animations/AnimatedHome";
import { getHomePageData } from "@/lib/api";
import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/metadata";
import { images } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { websiteJsonLd, localBusinessJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Luxury Sri Lanka Tours & Tailor-Made Holidays",
  description: "Plan your perfect Sri Lanka holiday with Tarragon Leisure. We design bespoke tours, luxury safaris, and honeymoon itineraries from our team in Matara. Speak to a local expert today.",
  path: "/",
  image: images.sigiriya2,
  keywords: siteConfig.keywords,
});

export const dynamic = "force-static";

async function HomeContent() {
  const { categories, destinations, featuredTours, services } = await getHomePageData();
  const featuredDestinations = destinations.slice(0, 3);
  const popularTours = featuredTours.slice(0, 3);
  const latestPosts = (await getAllPosts()).slice(0, 3);

  return (
    <AnimatedHome
      categories={categories}
      destinations={featuredDestinations}
      popularTours={popularTours}
      services={services}
      latestPosts={latestPosts}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={[websiteJsonLd(), localBusinessJsonLd()]} />
      <Suspense fallback={<PageSkeleton heading="Loading homepage" cards={6} />}>
        <HomeContent />
      </Suspense>
    </>
  );
}
