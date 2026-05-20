import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { JsonLd } from "@/components/site/json-ld";
import { PageSkeleton } from "@/components/site/page-skeleton";
import { getDestinations } from "@/lib/api";
import { buildMetadata } from "@/lib/metadata";
import { images } from "@/lib/site-data";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/structured-data";
import {
  AnimatedHeading,
  StaggerContainer,
  MagneticScrollCard,
} from "@/components/animations/AnimatedSection";

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
    <div className="bg-[#fdfcf8] min-h-[100dvh] pt-24 pb-18 sm:pt-32 sm:pb-22 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mx-auto max-w-4xl text-center">
          <AnimatedHeading threshold={0.25} variant="scaleIn">
            <h1 className="font-display1 text-4xl font-semibold tracking-tight text-[#0B3B24] sm:text-5xl lg:text-6xl">
              Destinations
            </h1>
          </AnimatedHeading>
          <AnimatedHeading threshold={0.3} variant="blurIn" delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#667085] sm:text-lg">
              From wildlife parks and misty hill towns to heritage cities and coastal escapes,
              discover the places travelers return to again and again.
            </p>
          </AnimatedHeading>
        </header>

        <StaggerContainer
          className="mt-12 grid gap-x-7 gap-y-10 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
          threshold={0.1}
          staggerDelay={0.18}
        >
          {destinations.map((destination) => (
            <MagneticScrollCard key={destination.slug}>
              <Link
                href={`/destinations/${destination.slug}`}
                className="group block"
                prefetch
              >
                <div className="relative aspect-[16/12] overflow-hidden rounded-[26px] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all duration-400 group-hover:-translate-y-3 group-hover:shadow-[0_24px_56px_rgba(15,23,42,0.14)]">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-5 px-1">
                  <h2 className="font-display text-[1rem] leading-tight text-[#0B3B24] sm:text-[1.65rem]">
                    {destination.name}
                  </h2>
                  <p className="mt-3 max-w-md text-base leading-8 text-[#667085] line-clamp-2">
                    {destination.blurb}
                  </p>
                </div>
              </Link>
            </MagneticScrollCard>
          ))}
        </StaggerContainer>
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
