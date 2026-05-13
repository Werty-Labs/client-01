import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Clock, MapPin, Users } from "lucide-react";
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

      <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <Link
            key={tour.slug}
            href={`/tours/${tour.slug}`}
            className="group block"
            prefetch
          >
            <div className="relative aspect-[16/12] overflow-hidden rounded-[26px] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 z-10 flex items-start opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="mx-4 mt-4 flex w-full items-center justify-between rounded-full bg-white/95 px-4 py-3 text-[#101828] shadow-[0_14px_30px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_18px_36px_rgba(15,23,42,0.18)] sm:mx-6 sm:mt-6">
                  <span className="flex items-center gap-2 text-sm font-medium text-[#667085] sm:text-base">
                    <Clock className="size-4 text-[#344054]" />
                    {tour.duration}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#101828] sm:text-base">
                    Explore Now
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5 px-1">
              <div className="flex items-end gap-1.5 text-[#101828]">
                <span className="text-[1.1rem] font-semibold leading-none tracking-tight sm:text-[1.55rem]">
                  {tour.price !== null ? `$${tour.price.toFixed(2)}` : "Enquire"}
                </span>
              </div>
              <h3 className="mt-4 text-[1.45rem] font-sm leading-tight text-[#101828] transition-colors duration-300 group-hover:text-[#0f4c81] sm:text-[1.65rem]">
                {tour.title}
              </h3>
              <div className="mt-3 flex items-center gap-2 text-base text-[#667085] sm:text-lg">
                <MapPin className="size-4 shrink-0 text-[#344054] sm:size-4" />
                <span>{tour.location}</span>
              </div>
            </div>
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
