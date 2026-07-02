import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Clock,
  MapPin,
  Users,
  Star,
  Car,
  UtensilsCrossed,
  UserCheck,
  Compass,
  type LucideIcon,
} from "lucide-react";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/site/json-ld";
import { TourAmenities } from "@/components/site/tour-amenities";
import { TourExplore } from "@/components/site/tour-explore";
import { TourIncludedExcluded } from "@/components/site/tour-included-excluded";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getTourBySlug, getTourSlugs } from "@/lib/api";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, tourProductJsonLd } from "@/lib/structured-data";

function getHighlightIcon(text: string): LucideIcon {
  const lower = text.toLowerCase();
  if (lower.includes("accommodation") || lower.includes("hotel") || lower.includes("star") || lower.includes("stay") || lower.includes("resort")) return Star;
  if (lower.includes("chauffeur") || lower.includes("car") || lower.includes("transport") || lower.includes("transfer") || lower.includes("vehicle")) return Car;
  if (lower.includes("culinary") || lower.includes("food") || lower.includes("dining") || lower.includes("cuisine") || lower.includes("meal")) return UtensilsCrossed;
  if (lower.includes("guide") || lower.includes("expert") || lower.includes("private")) return UserCheck;
  if (lower.includes("heritage") || lower.includes("culture") || lower.includes("explore")) return Compass;
  return Check;
}

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
        {/* ── Hero Section ── */}
        <section className="relative flex min-h-[75dvh] flex-col justify-center px-4 pt-32 pb-16 sm:px-8 lg:px-16 xl:px-24">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              priority
              className={`object-cover ${
                tour.slug === "yala-wildlife-safari" ? "object-[15%_35%]" : "object-[50%_30%]"
              }`}
              sizes="100vw"
            />
          </div>
          
          {/* Top dark gradient to protect the navbar */}
          <div className="absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
          
          {/* Cinematic Edge Fade */}
          <div className="absolute inset-y-0 left-0 z-0 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent lg:w-3/4 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/50 lg:to-transparent" />

          {/* Content (No box, floating directly on the gradient) */}
          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <div className="max-w-2xl mt-auto lg:mt-0 pt-24 lg:pt-0">
              <p className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.3em] text-white/90">
                <MapPin className="size-4" /> {tour.location}
              </p>
              <h1 className="mt-4 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl text-balance">
                {tour.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
                {tour.summary}
              </p>
            </div>
          </div>
        </section>

        {/* ── Main Content Grid ── */}
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_360px] lg:gap-14">
          {/* Left Column */}
          <div className="space-y-14">
            {/* Curated Experience */}
            <div>
              <h2 className="mb-4 font-display1 text-3xl sm:text-4xl">
                Curated Experience
              </h2>
              <p className="max-w-2xl leading-relaxed text-muted-foreground">
                {tour.summary}
              </p>
            </div>

            {/* Suggested Itinerary */}
            <div>
              <h2 className="mb-8 font-display1 text-2xl sm:text-3xl">
                Suggested Itinerary
              </h2>
              <div className="relative space-y-10 pl-8">
                {/* Vertical timeline line */}
                <div
                  className="absolute left-[7px] top-[6px] w-px bg-primary/25"
                  style={{
                    height: "calc(100% - 12px)",
                  }}
                />
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-8 top-[6px] flex size-4 items-center justify-center rounded-full border-2 border-primary bg-background">
                      <div className="size-1.5 rounded-full bg-primary" />
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-primary mb-1">
                      {day.day}
                    </p>
                    <h3 className="font-display text-lg font-semibold">
                      {day.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {day.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Explore Tours */}
            <TourExplore tour={tour} />

            {/* Included / Excluded */}
            <TourIncludedExcluded tour={tour} />

            {/* Tour Amenities */}
            <TourAmenities tour={tour} />
          </div>

          {/* Right Sidebar */}
          <aside className="self-start lg:sticky lg:top-24">
            <Card className="overflow-hidden border border-border/60 p-0 shadow-sm">
              <div className="p-6 pb-2">
                <h3 className="font-display text-xl font-semibold">
                  Experience Highlights
                </h3>
              </div>

              <div className="border-b border-border/40 mx-6" />

              {/* Highlights list */}
              <ul className="space-y-4 p-6 pt-5">
                {tour.highlights.map((highlight) => {
                  const Icon = getHighlightIcon(highlight);
                  return (
                    <li
                      key={highlight}
                      className="flex items-center gap-3"
                    >
                      <Icon className="size-4.5 shrink-0  text-green-600" />
                      <span className="text-sm">
                        {highlight}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Tour details */}
              <div className="flex items-center gap-4 px-6 pb-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="size-3.5" /> {tour.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="size-3.5" /> Up to {tour.groupSize}
                </span>
              </div>



              {/* CTA */}
              <div className="px-6 pb-6 pt-4">
                <Button asChild className="w-full rounded-md">
                  <Link href="/contact" prefetch>
                    Enquire About This Journey
                  </Link>
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Or WhatsApp us for instant replies.
                </p>
              </div>
            </Card>
          </aside>
        </div>

        {/* ── Visual Serenity Gallery ── */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
          <h2 className="mb-10 text-center font-display1 text-3xl sm:text-4xl">
            Visual Serenity
          </h2>
          <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
            {/* Large featured image */}
            {tour.gallery[0] && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-none md:row-span-2 md:aspect-auto md:h-full">
                <Image
                  src={tour.gallery[0]}
                  alt={`${tour.title} photo 1`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
            )}
            {/* Top-right image */}
            {tour.gallery[1] && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-none">
                <Image
                  src={tour.gallery[1]}
                  alt={`${tour.title} photo 2`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            )}
            {/* Bottom-right image */}
            {tour.gallery[2] && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-none">
                <Image
                  src={tour.gallery[2]}
                  alt={`${tour.title} photo 3`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            )}
          </div>

          {/* Remaining gallery images */}
          {tour.gallery.length > 3 && (
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {tour.gallery.slice(3).map((image, index) => (
                <div
                  key={`${image}-${index + 3}`}
                  className="relative aspect-square overflow-hidden rounded-none"
                >
                  <Image
                    src={image}
                    alt={`${tour.title} photo ${index + 4}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      </article>
    </>
  );
}
