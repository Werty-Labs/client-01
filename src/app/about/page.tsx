import { AnimatedAbout } from "@/components/animations/AnimatedAbout";
import { JsonLd } from "@/components/site/json-ld";
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
      <AnimatedAbout />
    </>
  );
}
