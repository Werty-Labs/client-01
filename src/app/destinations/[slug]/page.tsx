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
import { DestinationGalleryCarousel } from "@/components/site/DestinationGalleryCarousel";
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
            className={`object-cover ${
              destination.slug === "yala"
                ? "object-[15%_35%]"
                : destination.slug === "kandy"
                ? "object-top"
                : "object-[80%_40%]"
            }`}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16 text-white sm:px-6">
            <AnimatedHeading variant="fadeUp" delay={0.1}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                Explore Destination
              </p>
              <h1 className="font-display1 text-5xl tracking-tight sm:text-7xl lg:text-8xl">
                {destination.name}
              </h1>
            </AnimatedHeading>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Left Column: Description & Activities */}
            <div className="space-y-16 lg:col-span-8">
              <AnimatedHeading variant="fadeUp" delay={0.2}>
                <div className="relative pl-6 md:pl-10 border-l-[3px] border-primary/20 max-w-[65ch]">
                  <span className="absolute left-0 top-0 -translate-x-[20%] -translate-y-[45%] font-display1 text-8xl text-primary/10 select-none pointer-events-none">“</span>
                  <p className="font-display1 text-2xl md:text-3xl font-light italic leading-relaxed text-[#0B3B24] tracking-wide">
                    {destination.description || destination.blurb}
                  </p>
                </div>
              </AnimatedHeading>

              {destination.highlights && destination.highlights.length > 0 && (
                <AnimatedHeading variant="fadeUp" delay={0.3}>
                  <div className="space-y-6">
                    <h3 className="font-display1 text-2xl md:text-3xl text-[#0B3B24]">Highlights</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {destination.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="group flex items-start gap-4 rounded-2xl border border-primary/10 bg-white/40 p-4 shadow-[0_10px_30px_rgba(11,59,36,0.01)] transition-all duration-500 hover:-translate-y-[2px] hover:bg-white hover:shadow-[0_20px_40px_rgba(11,59,36,0.04)]"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary font-mono text-xs transition-colors group-hover:bg-primary group-hover:text-white">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-base text-muted-foreground font-medium pt-1 transition-colors group-hover:text-foreground">
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
                    <h3 className="font-display1 text-2xl md:text-3xl text-[#0B3B24]">Top Activities</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {destination.activities.map((activity, i) => (
                        <div
                          key={i}
                          className="group flex items-start gap-4 rounded-2xl border border-primary/10 bg-white/40 p-4 shadow-[0_10px_30px_rgba(11,59,36,0.01)] transition-all duration-500 hover:-translate-y-[2px] hover:bg-white hover:shadow-[0_20px_40px_rgba(11,59,36,0.04)]"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                            <Activity className="h-4 w-4" strokeWidth={1.5} />
                          </span>
                          <span className="text-base text-muted-foreground font-medium pt-1 transition-colors group-hover:text-foreground">
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
                {/* Double-Bezel Outer Shell */}
                <div className="relative rounded-[2rem] bg-black/5 p-1.5 ring-1 ring-black/5">
                  {/* Double-Bezel Inner Core */}
                  <div className="rounded-[calc(2rem-0.375rem)] bg-white p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                    <h3 className="mb-6 border-b border-black/5 pb-4 font-display text-xl text-[#0B3B24] tracking-tight">
                      Quick Facts
                    </h3>
                    <dl className="space-y-4">
                      {destination.bestSeason && (
                        <div className="flex items-center justify-between gap-4">
                          <dt className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <Calendar className="h-4 w-4 text-primary" strokeWidth={1.5} />
                            Best Season
                          </dt>
                          <dd className="text-right text-sm font-semibold text-[#0B3B24]">
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
                                <Info className="h-4 w-4 text-primary" strokeWidth={1.5} />
                                {key}
                              </dt>
                              <dd className="text-right text-sm font-semibold text-[#0B3B24]">
                                {value}
                              </dd>
                            </div>
                          )
                        )}
                    </dl>
                  </div>
                </div>
              </AnimatedHeading>

              {destination.localTips && destination.localTips.length > 0 && (
                <AnimatedHeading variant="fadeUp" delay={0.4}>
                  {/* Double-Bezel Outer Shell */}
                  <div className="relative rounded-[2rem] bg-primary/5 p-1.5 ring-1 ring-primary/10">
                    {/* Double-Bezel Inner Core */}
                    <div className="rounded-[calc(2rem-0.375rem)] bg-white p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Lightbulb className="h-5 w-5" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-display text-lg text-[#0B3B24] tracking-tight">Local Tips</h3>
                      </div>
                      <ul className="space-y-4">
                        {destination.localTips.map((tip, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedHeading>
              )}

              <AnimatedHeading variant="fadeUp" delay={0.5}>
                <div className="pt-4">
                  <Button size="lg" className="w-full h-12 rounded-full bg-[#0B3B24] hover:bg-[#1A6B6B] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] group flex items-center justify-center gap-2" asChild>
                    <Link href="/contact" prefetch>
                      <span>Plan a trip here</span>
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-[1px]">
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                      </div>
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
              <h2 className="mb-10 text-center font-display1 text-4xl">
                Photo Gallery
              </h2>
            </AnimatedHeading>
            <DestinationGalleryCarousel
              gallery={destination.gallery}
              destinationName={destination.name}
            />
          </section>
        )}

        {relatedTours.length > 0 && (
          <section className="bg-secondary/40 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <AnimatedHeading variant="fadeUp">
                <h2 className="mb-12 text-center font-display1 text-4xl">
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
