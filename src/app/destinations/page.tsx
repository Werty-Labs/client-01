import { Suspense } from "react";
import { JsonLd } from "@/components/site/json-ld";
import { PageSkeleton } from "@/components/site/page-skeleton";
import { getDestinations } from "@/lib/api";
import { buildMetadata } from "@/lib/metadata";
import { images } from "@/lib/site-data";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/structured-data";
import { AnimatedDestinations } from "@/components/animations/AnimatedDestinations";

export const metadata = buildMetadata({
  title: "Destinations",
  description:
    "Explore Sri Lanka's top destinations including Yala, Ella, Galle, Kandy, Sigiriya, Colombo, and more.",
  path: "/destinations",
  image: images.sigiriya,
});

export const dynamic = "force-static";

async function DestinationsContent() {
  const destinations = await getDestinations();
  return <AnimatedDestinations destinations={destinations} />;
}


export default async function DestinationsPage() {
  const destinations = await getDestinations();

  return (
    <>
      <JsonLd
        data={[
          collectionPageJsonLd("Destinations", "/destinations", destinations),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Destinations", path: "/destinations" },
          ]),
        ]}
      />
      <Suspense fallback={<PageSkeleton heading="Loading destinations" showHero={false} />}>
        <DestinationsContent />
      </Suspense>
    </>
  );
}
