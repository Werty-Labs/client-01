import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/site/json-ld";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  getDestinationBySlug,
  getDestinationSlugs,
  getRelatedToursForDestination,
} from "@/lib/api";
import { buildMetadata } from "@/lib/metadata";
import {
  breadcrumbJsonLd,
  destinationJsonLd,
} from "@/lib/structured-data";

type DestinationPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";

export async function generateStaticParams() {
  const slugs = await getDestinationSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: DestinationPageProps) {
  const { slug } = await params;
  const destination = await getDestinationBySlug(slug);

  if (!destination) {
    return buildMetadata({
      title: "Destination not found",
      description: "The requested destination could not be found.",
      path: `/destinations/${slug}`,
    });
  }

  return buildMetadata({
    title: destination.name,
    description: destination.blurb,
    path: `/destinations/${destination.slug}`,
    image: destination.image,
  });
}

export default async function DestinationDetailPage({
  params,
}: DestinationPageProps) {
  const { slug } = await params;
  const destination = await getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const relatedTours = await getRelatedToursForDestination(destination);

  return (
    <>
      <JsonLd
        data={[
          destinationJsonLd(destination),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Destinations", path: "/destinations" },
            {
              name: destination.name,
              path: `/destinations/${destination.slug}`,
            },
          ]),
        ]}
      />

      <article>
        <section className="relative h-[55vh] min-h-[400px]">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/20" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-12 text-white sm:px-6">
            <p className="text-sm uppercase tracking-[0.25em] opacity-90">Travel to</p>
            <h1 className="mt-2 font-display text-5xl sm:text-7xl">
              {destination.name}
            </h1>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {destination.blurb}
          </p>
          <Button asChild className="mt-8">
            <Link href="/contact" prefetch>
              Plan a trip to {destination.name}
            </Link>
          </Button>
        </div>

        {relatedTours.length ? (
          <section className="bg-secondary/40 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <h2 className="mb-10 text-center font-display text-3xl">
                Tours featuring {destination.name}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedTours.map((tour) => (
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
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-display transition group-hover:text-primary">
                          {tour.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {tour.duration} · Up to {tour.groupSize}
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </article>
    </>
  );
}
