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
        {/*<Image*/}
        {/*  src={images.hero}*/}
        {/*  alt="Sigiriya rock fortress at sunset"*/}
        {/*  fill*/}
        {/*  priority*/}
        {/*  className="object-cover brightness-70"*/}
        {/*  sizes="100vw"*/}
        {/*/>*/}
        <video
            src={images.hero_vid}
            poster={images.hero} // Displays the image while the video loads
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover brightness-80"
/>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="absolute inset-0 -z-20" />
        <div className="mx-auto max-w-7xl px-4 py-24 z-10 text-[#F2F0EF] sm:px-6">
          <p className="text-[10px] sm:text-[15px] uppercase tracking-[0.3em] opacity-80 drop-shadow-[0_0_1px_rgba(0,0,0,0.5)]">
            Welcome to {siteConfig.name}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl drop-shadow-[0_0_8px_rgba(0,0,0,0.7)]">
            Your Sri Lankan adventure awaits.
          </h1>
          <p className="mt-5 max-w-2xl text-lg opacity-90 drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]">
            Wildlife safaris, ancient cities, hill-country trains and palm-fringed
            beaches - crafted into one unforgettable journey.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/tours" prefetch>
                Browse tours
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact" prefetch>
                Plan with us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Explore by interest
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">
            Find your perfect way to travel
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <article
              key={category.title}
              className="group relative overflow-hidden rounded-xl aspect-[3/4]"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <h3 className="font-display text-xl">{category.title}</h3>
                <p className="mt-2 line-clamp-3 text-xs opacity-90">
                  {category.blurb}
                </p>
              </div>
            </article>
          ))}
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
                className="group"
                prefetch
              >
                <Card className="h-full overflow-hidden p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      Featured
                    </span>
                    {tour.price ? (
                      <span className="absolute bottom-3 right-3 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-foreground">
                        From ${tour.price}
                      </span>
                    ) : null}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-display transition group-hover:text-primary">
                      {tour.title}
                    </h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="size-3.5" /> {tour.location}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5" /> {tour.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="size-3.5" /> {tour.groupSize}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="size-3.5 fill-accent text-accent" /> 5.0
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
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
        <div className="absolute inset-0 bg-primary/85" />
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
