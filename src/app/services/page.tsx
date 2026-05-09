import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { JsonLd } from "@/components/site/json-ld";
import { PageSkeleton } from "@/components/site/page-skeleton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getServices } from "@/lib/api";
import { buildMetadata } from "@/lib/metadata";
import { images } from "@/lib/site-data";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore family tours, beach holidays, city breaks, honeymoons, safaris, and private itinerary design across Sri Lanka.",
  path: "/services",
  image: images.arugamWebp,
});

export const dynamic = "force-static";

async function ServicesContent() {
  const services = await getServices();

  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src={images.arugam4}
          alt="Sri Lanka coast"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 text-white sm:px-6">
          <p className="text-sm uppercase tracking-[0.25em] opacity-90">What we do</p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">Our Services</h1>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <h2 className="font-display text-xl">{service.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{service.blurb}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button asChild size="lg">
            <Link href="/contact" prefetch>
              Tell us your dream trip
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <JsonLd
        data={[
          collectionPageJsonLd("Services", "/services", services),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <Suspense fallback={<PageSkeleton heading="Loading services" cards={6} />}>
        <ServicesContent />
      </Suspense>
    </>
  );
}
