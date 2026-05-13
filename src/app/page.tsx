import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Clock, MapPin, Star, Users } from "lucide-react";
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
        <div className="mx-auto max-w-7xl px-4 py-24 z-10 text-[#F2F0EF] sm:px-6">
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl ">
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
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.5l-1.3 2.6c-.2.4-.1 1 .3 1.3L9 14l-4 4-3-1-1 1 4 4 1-1-1-3 4-4 3.4 6.3c.3.5.9.6 1.3.3l2.6-1.3c.4-.2.6-.6.5-1.1z"/></svg> 
            Explore by Experience
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#052b36]">
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

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary">
                Featured
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                Popular tours
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/tours" prefetch>
                All tours <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour) => (
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
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/90" />
                </div>
                
                {/* Top Overlay Elements */}
                <div className="relative z-10 flex w-full items-start justify-between p-4">
                  <span className="rounded-full bg-[#cc0000] px-3 py-1 text-xs font-semibold text-white">
                    Featured
                  </span>
                  <button className="flex size-8 items-center justify-center rounded-full bg-white/90 text-gray-700 transition hover:bg-white hover:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  </button>
                </div>
                
                {/* Bottom Content Area */}
                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col p-4 text-white">
                  <h3 className="font-display text-2xl font-medium sm:text-3xl leading-tight">
                    {tour.title}
                  </h3>
                  
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-200">
                    <Star className="size-4 fill-white text-white" />
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
                      <ArrowRight className="size-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary">
                Travel to
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                Top destinations in Sri Lanka
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/destinations" prefetch>
                View all <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                href={`/destinations/${destination.slug}`}
                className="group"
                prefetch
              >
                <Card className="h-full overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-xl">
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
                    <h3 className="mt-1 font-display text-xl">{destination.name}</h3>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                      {destination.blurb}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
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
