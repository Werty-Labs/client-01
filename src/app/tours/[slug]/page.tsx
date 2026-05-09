import Image from "next/image";
import Link from "next/link";
import { Check, Clock, MapPin, Users } from "lucide-react";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/site/json-ld";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getTourBySlug, getTourSlugs } from "@/lib/api";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, tourProductJsonLd } from "@/lib/structured-data";

type TourPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";

export async function generateStaticParams() {
  const slugs = await getTourSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);

  if (!tour) {
    return buildMetadata({
      title: "Tour not found",
      description: "The requested tour could not be found.",
      path: `/tours/${slug}`,
    });
  }

  return buildMetadata({
    title: tour.title,
    description: tour.summary,
    path: `/tours/${tour.slug}`,
    image: tour.image,
  });
}

export default async function TourDetailPage({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          tourProductJsonLd(tour),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Tours", path: "/tours" },
            { name: tour.title, path: `/tours/${tour.slug}` },
          ]),
        ]}
      />

      <article>
        <section className="relative h-[60vh] min-h-[420px]">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-12 text-white sm:px-6">
            <p className="flex items-center gap-1 text-sm uppercase tracking-[0.25em] opacity-90">
              <MapPin className="size-3.5" /> {tour.location}
            </p>
            <h1 className="mt-2 max-w-3xl font-display text-4xl sm:text-6xl">
              {tour.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-5 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="size-4" /> {tour.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users className="size-4" /> Up to {tour.groupSize}
              </span>
              {tour.price ? (
                <span className="rounded-full bg-accent px-3 py-1 font-semibold text-accent-foreground">
                  From ${tour.price}
                </span>
              ) : null}
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <div>
              <h2 className="mb-3 font-display text-2xl">Overview</h2>
              <p className="leading-relaxed text-muted-foreground">{tour.summary}</p>
            </div>

            <div>
              <h2 className="mb-4 font-display text-2xl">Highlights</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {tour.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-display text-2xl">Itinerary</h2>
              <ol className="space-y-4">
                {tour.itinerary.map((day) => (
                  <li
                    key={day.day}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <p className="text-xs uppercase tracking-wider text-primary">
                      {day.day}
                    </p>
                    <h3 className="mt-1 font-display text-lg">{day.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {day.details}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="mb-4 font-display text-2xl">Gallery</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {tour.gallery.map((image, index) => (
                  <div key={`${image}-${index}`} className="relative aspect-square">
                    <Image
                      src={image}
                      alt={`${tour.title} photo ${index + 1}`}
                      fill
                      className="rounded-lg object-cover"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="self-start lg:sticky lg:top-24">
            <Card className="p-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Starting from
              </p>
              <p className="mt-1 font-display text-3xl">
                {tour.price ? `$${tour.price}` : "Contact for pricing"}
              </p>
              <p className="text-xs text-muted-foreground">per person</p>
              <Button asChild className="mt-5 w-full">
                <Link href="/contact" prefetch>
                  Enquire now
                </Link>
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Or WhatsApp us for instant replies.
              </p>
            </Card>
          </aside>
        </div>
      </article>
    </>
  );
}
