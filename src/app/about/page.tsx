import { AnimatedAbout } from "@/components/animations/AnimatedAbout";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { images } from "@/lib/site-data";
import { aboutPageJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Local Sri Lanka Travel Experts",
  description:
    "Tarragon Leisure is a Sri Lanka-based travel company designing personalised tours and luxury itineraries. Meet the team behind your perfect Sri Lanka journey.",
  path: "/about",
  image: images.elephantsWaterSunset,
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
      <AnimatedAbout />
    </>
  );
}
