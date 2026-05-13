import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { PageSkeleton } from "@/components/site/page-skeleton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getHomePageData } from "@/lib/api";
import { buildMetadata } from "@/lib/metadata";
import { images } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { websiteJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: siteConfig.tagline,
  description: siteConfig.description,
  path: "/",
  image: images.sigiriya,
  keywords: siteConfig.keywords,
});

export const dynamic = "force-static";

async function HomeContent() {
  const { categories, destinations, featuredTours, services } = await getHomePageData();
  const featuredDestinations = destinations.slice(0, 3);
  const popularTours = featuredTours.slice(0, 3);

  return (
    <>
      <section className="relative isolate flex min-h-screen top-0 items-center">
        <Image
          src={images.hero}
          alt="Sigiriya rock fortress at sunset"
          fill
          priority
          className="object-cover brightness-70"
          sizes="100vw"
        />
{/*        <video*/}
{/*            src={images.hero_vid}*/}
{/*            poster={images.hero} // Displays the image while the video loads*/}
{/*            autoPlay*/}
{/*            muted*/}
{/*            loop*/}
{/*            playsInline*/}
{/*            className="absolute inset-0 w-full h-full object-cover brightness-100"*/}
{/*/>*/}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-0 -z-20" />
        <div className="w-full mx-auto max-w-7xl px-4 py-24 z-10 text-[#F2F0EF] sm:px-6">
          <h1 className="mt-3 max-w-3xl font-display1 text-4xl font-semibold leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl ">
            Discover <span>Sri Lanka</span> Like Never Before
          </h1>
          <p className="mt-5 max-w-2xl text-lg opacity-90  ">
            Wildlife safaris, ancient cities, hill-country trains and palm-fringed
            beaches - crafted into one unforgettable journey.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 bg-whit ">
            <Button asChild size="lg" className={'rounded-full'}>
              <Link href="/tours" prefetch>
                Browse tours
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className={'rounded-full'}>
              <Link href="/contact" prefetch>
                Plan with us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.5l-1.3 2.6c-.2.4-.1 1 .3 1.3L9 14l-4 4-3-1-1 1 4 4 1-1-1-3 4-4 3.4 6.3c.3.5.9.6 1.3.3l2.6-1.3c.4-.2.6-.6.5-1.1z"/></svg> 
            Explore by Experience
          </p>
          <h2 className="mt-4 font-display1 text-4xl sm:text-5xl font-bold tracking-tight text-[#052b36]">
            Experience Diverse Worlds On <br className="hidden sm:inline" /> One Planet
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 items-start">
          {categories.map((category, index) => {
            const isTextTop = index % 2 !== 0;
            return (
              <article key={category.title} className="flex flex-col gap-4 group cursor-pointer">
                {isTextTop && (
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#052b36] group-hover:text-primary transition-colors">{category.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-3">{category.blurb}</p>
                  </div>
                )}
                <div className={`relative w-full overflow-hidden rounded-[24px] ${isTextTop ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}>
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                {!isTextTop && (
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#052b36] group-hover:text-primary transition-colors">{category.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-3">{category.blurb}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-16 flex items-center justify-between gap-6">
          <p className="whitespace-nowrap text-sm text-gray-500 font-medium">Explore more journeys waiting for you</p>
          <div className="h-px flex-1 bg-gray-300"></div>
          <Button asChild size="lg" className="rounded-full bg-[#052b36] hover:bg-[#031d24] text-white pl-6 pr-2 gap-4">
            <Link href="/tours" prefetch>
              View Packages
              <span className="bg-white/10 p-2 rounded-full">
                <ArrowRight className="size-4" />
              </span>
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-[#f4f5fb] py-18 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div>
              <h2 className="font-display1 text-3xl font-semibold tracking-tight text-[#101828] sm:text-4xl lg:text-5xl">
                Explore Popular Tours
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#667085] sm:text-lg">
                Find your next Sri Lanka journey with Tarragon Leisure. From wildlife safaris
                and surf escapes to cultural landmarks, we&apos;ve got the perfect tour for you.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-x-7 gap-y-10 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {popularTours.map((tour, index) => (
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
                    {/*{tour.price !== null ? (*/}
                    {/*  <span className="pb-1 text-base font-medium text-[#667085] sm:text-sm">/pp</span>*/}
                    {/*) : null}*/}
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

          <div className="mt-12 flex justify-center sm:mt-14">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group h-14 rounded-full border-green-600 bg-white px-7 text-base font-medium text-[#101828] shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:border-green-700 hover:bg-[#eef3ff] hover:text-[#101828] hover:shadow-[0_16px_32px_rgba(95,141,255,0.18)] sm:px-8"
            >
              <Link href="/tours" prefetch>
                Browse All Tours
                <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5fb] py-18 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display1 text-4xl font-semibold tracking-tight text-[#101828] sm:text-5xl lg:text-6xl">
              Top Destinations in Sri Lanka
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#667085] sm:text-lg">
              From wildlife parks and misty hill towns to heritage cities and coastal escapes,
              discover the places travelers return to again and again.
            </p>
          </div>

          <div className="mt-12 grid gap-x-7 gap-y-10 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {featuredDestinations.map((destination) => (
              <Link
                key={destination.slug}
                href={`/destinations/${destination.slug}`}
                className="group block"
                prefetch
              >
                <div className="relative aspect-[16/12] overflow-hidden rounded-[26px] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-5 px-1">
                  <h3 className="font-display text-[1rem] leading-tight text-[#101828] sm:text-[1.65rem]">
                    {destination.name}
                  </h3>
                  <p className="mt-3 line-clamp-4 max-w-md text-base leading-8 text-[#667085]">
                    {destination.blurb}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center sm:mt-14">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-full border-[#84adff] bg-white px-7 text-base font-medium text-[#101828] shadow-none transition hover:bg-white hover:text-[#101828] sm:px-8"
            >
              <Link href="/destinations" prefetch className={'hover:scale-105 cursor-pointer'}>
                Browse All Destinations
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Our services
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">
            Curated trips for every traveler
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden p-0">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.blurb}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>



      <section className="relative isolate py-24">
        <Image
          src={images.teaching}
          alt="Smiling travelers in Sri Lanka"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/*<div className="absolute inset-0 bg-primary/85" />*/}
        <div className="relative mx-auto max-w-4xl px-4 text-center text-primary-foreground sm:px-6">
          <h2 className="font-display text-4xl sm:text-5xl">
            Discover Sri Lanka with Tarragon Leisure
          </h2>
          <p className="mx-auto mt-4 max-w-2xl opacity-90">
            Expert knowledge. Tailored experiences. 24/7 support. Let us craft a
            journey you&apos;ll remember forever.
          </p>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            {[
              {
                title: "Expert Knowledge",
                description:
                  "Our team is well-versed in Sri Lanka's best-kept secrets and tourist favorites.",
              },
              {
                title: "Tailored Experiences",
                description:
                  "We design each itinerary to fit your unique preferences.",
              },
              {
                title: "24/7 Support",
                description:
                  "Enjoy peace of mind with our dedicated customer support, available anytime.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur"
              >
                <h3 className="font-display text-xl">{feature.title}</h3>
                <p className="mt-2 text-sm opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild size="lg" variant="secondary">
              <Link href="/services" prefetch>
                Explore our services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
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
