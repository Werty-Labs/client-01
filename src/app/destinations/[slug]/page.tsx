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
import {
  AnimatedHeading,
  StaggerContainer,
  AntiGravityCard,
} from "@/components/animations/AnimatedSection";
import {
  CheckCircle2,
  Calendar,
  Info,
  ArrowRight,
  Lightbulb,
  Activity,
} from "lucide-react";

type DestinationPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";

export async function generateStaticParams() {
  const slugs = await getDestinationSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: DestinationPageProps) {
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

      <article className="bg-background">
        <section className="relative h-[65vh] min-h-[500px]">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            priority
            className="object-cover object-[80%_40%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16 text-white sm:px-6">
            <AnimatedHeading variant="fadeUp" delay={0.1}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                Explore Destination
              </p>
              <h1 className="font-display text-5xl tracking-tight sm:text-7xl lg:text-8xl">
                {destination.name}
              </h1>
            </AnimatedHeading>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Left Column: Description & Activities */}
            <div className="space-y-12 lg:col-span-8">
              <AnimatedHeading variant="fadeUp" delay={0.2}>
                <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
                  <p className="text-xl font-medium leading-relaxed text-foreground md:text-2xl">
                    {destination.description || destination.blurb}
                  </p>
                </div>
              </AnimatedHeading>

              {destination.highlights && destination.highlights.length > 0 && (
                <AnimatedHeading variant="fadeUp" delay={0.3}>
                  <div className="space-y-6">
                    <h3 className="font-display text-3xl">Highlights</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {destination.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-muted-foreground">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedHeading>
              )}

              {destination.activities && destination.activities.length > 0 && (
                <AnimatedHeading variant="fadeUp" delay={0.4}>
                  <div className="space-y-6">
                    <h3 className="font-display text-3xl">Top Activities</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {destination.activities.map((activity, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Activity className="mt-1 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-muted-foreground">
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedHeading>
              )}
            </div>

            {/* Right Column: Stats & Tips */}
            <div className="space-y-8 lg:col-span-4">
              <AnimatedHeading variant="fadeUp" delay={0.3}>
                <Card className="border-none bg-secondary/30 p-6 shadow-none">
                  <h3 className="mb-6 border-b pb-4 font-display text-xl">
                    Quick Facts
                  </h3>
                  <dl className="space-y-4">
                    {destination.bestSeason && (
                      <div className="flex items-center justify-between gap-4">
                        <dt className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          Best Season
                        </dt>
                        <dd className="text-right text-sm font-semibold">
                          {destination.bestSeason}
                        </dd>
                      </div>
                    )}
                    {destination.quickFacts &&
                      Object.entries(destination.quickFacts).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="flex items-center justify-between gap-4"
                          >
                            <dt className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                              <Info className="h-4 w-4" />
                              {key}
                            </dt>
                            <dd className="text-right text-sm font-semibold">
                              {value}
                            </dd>
                          </div>
                        )
                      )}
                  </dl>
                </Card>
              </AnimatedHeading>

              {destination.localTips && destination.localTips.length > 0 && (
                <AnimatedHeading variant="fadeUp" delay={0.4}>
                  <Card className="border-primary/20 bg-primary/5 p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      <h3 className="font-display text-lg">Local Tips</h3>
                    </div>
                    <ul className="space-y-4">
                      {destination.localTips.map((tip, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </AnimatedHeading>
              )}

              <AnimatedHeading variant="fadeUp" delay={0.5}>
                <div className="pt-4">
                  <Button size="lg" className="w-full gap-2" asChild>
                    <Link href="/contact" prefetch>
                      Plan a trip here <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </AnimatedHeading>
            </div>
          </div>
        </section>

        {destination.gallery && destination.gallery.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
            <AnimatedHeading variant="fadeUp">
              <h2 className="mb-10 text-center font-display text-4xl">
                Photo Gallery
              </h2>
            </AnimatedHeading>
            <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {destination.gallery.slice(0, 3).map((img, i) => (
                <AntiGravityCard
                  key={i}
                  className={`relative aspect-square overflow-hidden rounded-xl ${
                    i === 2 ? "hidden lg:block" : ""
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${destination.name} gallery image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </AntiGravityCard>
              ))}
            </StaggerContainer>
          </section>
        )}

        {relatedTours.length > 0 && (
          <section className="bg-secondary/40 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <AnimatedHeading variant="fadeUp">
                <h2 className="mb-12 text-center font-display text-4xl">
                  Tours featuring {destination.name}
                </h2>
              </AnimatedHeading>
              <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedTours.map((tour) => (
                  <AntiGravityCard key={tour.slug}>
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="group block h-full"
                      prefetch
                    >
                      <Card className="h-full overflow-hidden p-0 transition-shadow hover:shadow-lg">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={tour.image}
                            alt={tour.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="font-display text-xl transition-colors group-hover:text-primary">
                            {tour.title}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {tour.duration} · Up to {tour.groupSize}
                          </p>
                        </div>
                      </Card>
                    </Link>
                  </AntiGravityCard>
                ))}
              </StaggerContainer>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
