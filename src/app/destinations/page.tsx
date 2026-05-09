import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { JsonLd } from "@/components/site/json-ld";
import { PageSkeleton } from "@/components/site/page-skeleton";
import { Card } from "@/components/ui/card";
import { getDestinations } from "@/lib/api";
import { buildMetadata } from "@/lib/metadata";
import { images } from "@/lib/site-data";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/structured-data";

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

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <header className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-primary">Where to go</p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">Destinations</h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          From ancient cities to surf coasts and tea-clad mountains.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <Link
            key={destination.slug}
            href={`/destinations/${destination.slug}`}
            className="group"
            prefetch
          >
            <Card className="h-full overflow-hidden p-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Travel to
                </p>
                <h2 className="mt-1 font-display text-xl transition group-hover:text-primary">
                  {destination.name}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  {destination.blurb}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
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
