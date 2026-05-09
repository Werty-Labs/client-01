import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Clock, MapPin, Users } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { PageSkeleton } from "@/components/site/page-skeleton";
import { Card } from "@/components/ui/card";
import { getTours } from "@/lib/api";
import { buildMetadata } from "@/lib/metadata";
import { images } from "@/lib/site-data";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Tours",
  description:
    "Browse all Sri Lanka tours including wildlife safaris, beach holidays, hill-country escapes, and cultural journeys.",
  path: "/tours",
  image: images.arugamWebp,
});

export const dynamic = "force-static";

async function ToursContent() {
  const tours = await getTours();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <header className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-primary">
          Our journeys
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">All Tours</h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Hand-crafted itineraries across Sri Lanka - pick a starting point and
          we&apos;ll customise the rest.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <Link key={tour.slug} href={`/tours/${tour.slug}`} className="group" prefetch>
            <Card className="h-full overflow-hidden p-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                {tour.featured ? (
                  <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    Featured
                  </span>
                ) : null}
                {tour.price ? (
                  <span className="absolute bottom-3 right-3 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-foreground">
                    From ${tour.price}
                  </span>
                ) : null}
              </div>
              <div className="p-5">
                <h2 className="text-lg font-display transition group-hover:text-primary">
                  {tour.title}
                </h2>
                <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="size-3.5" /> {tour.location}
                </p>
                <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="size-3.5" /> {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="size-3.5" /> {tour.groupSize}
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default async function ToursPage() {
  const tours = await getTours();

  return (
    <>
      <JsonLd
        data={[
          collectionPageJsonLd("Tours", "/tours", tours),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Tours", path: "/tours" },
          ]),
        ]}
      />
      <Suspense fallback={<PageSkeleton heading="Loading tours" showHero={false} />}>
        <ToursContent />
      </Suspense>
    </>
  );
}
