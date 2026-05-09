import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/site/json-ld";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/metadata";
import { images } from "@/lib/site-data";
import { aboutPageJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Meet the local Sri Lanka travel experts behind Tarragon Leisure and learn how we craft tailor-made journeys across the island.",
  path: "/about",
  image: images.teaching,
});

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          aboutPageJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <div>
        <section className="relative h-[45vh] min-h-[340px]">
          <Image
            src={images.teaching}
            alt="Sri Lanka countryside"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 text-white sm:px-6">
            <p className="text-sm uppercase tracking-[0.25em] opacity-90">Our story</p>
            <h1 className="mt-2 font-display text-5xl sm:text-6xl">
              About Tarragon Leisure
            </h1>
          </div>
        </section>

        <div className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-lg leading-relaxed text-muted-foreground sm:px-6">
          <p>
            Tarragon Leisure is a Sri Lanka-based boutique travel company crafting
            deeply personal journeys across the island. We believe a great trip is
            more than a checklist - it is about meeting the right people, eating in
            the right places, and slowing down at the right moments.
          </p>
          <p>
            Our team of local guides, naturalists and experience designers has
            decades of combined experience and an obsessive love for Sri Lanka -
            from the leopards of Yala to the tea trains of Ella, the surf of
            Arugam Bay and the cobbled streets of Galle Fort.
          </p>
          <p>
            Every itinerary we build is unique. We listen first, suggest second,
            and stay with you the whole way through.
          </p>
        </div>

        <section className="bg-secondary/40 py-16">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 text-center sm:px-6 sm:grid-cols-3">
            {[
              { number: "10+", label: "Years of experience" },
              { number: "1,200+", label: "Happy travelers" },
              { number: "25+", label: "Destinations covered" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-8"
              >
                <p className="font-display text-4xl text-primary">{stat.number}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="/contact" prefetch>
                Let&apos;s plan your trip
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
