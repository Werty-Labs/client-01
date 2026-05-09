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
          <Link
            key={tour.slug}
            href={`/tours/${tour.slug}`}
            className="group relative block w-full aspect-[4/5] rounded-[24px] overflow-hidden"
            prefetch
          >
            <div className="absolute inset-0 z-0">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              {/*<div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/40 to-black/95" />*/}
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
            </div>

            {/* Top Overlay Elements */}
            <div className="relative z-10 flex w-full items-start justify-between p-4">
              {tour.featured ? (
                <span className="rounded-full bg-[#cc0000] px-3 py-1 text-xs font-semibold text-white">
                  Featured
                </span>
              ) : <div />}
              <button className="flex size-8 items-center justify-center rounded-full bg-white/90 text-gray-700 transition hover:bg-white hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </button>
            </div>

            {/* Bottom Content Area */}
            <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col p-4 text-white">
              <h2 className="font-display text-2xl font-medium sm:text-3xl leading-tight">
                {tour.title}
              </h2>

              <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span className="font-medium text-white">5.0</span>
                <span>(120 Reviews)</span>
              </div>

              <div className="my-4 h-px w-full bg-white/20" />

              <div className="flex items-center gap-4 text-sm font-medium text-gray-200">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4" /> {tour.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="size-4" /> {tour.groupSize} people
                </span>
              </div>

              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-xs text-gray-300">From</p>
                  <p className="font-display text-2xl font-bold">${tour.price || "Enquire"}</p>
                </div>
                <div className="flex size-10 items-center justify-center rounded-full bg-[#cc0000] text-white transition-transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
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
