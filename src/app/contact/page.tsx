import { AnimatedContact } from "@/components/animations/AnimatedContact";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with Tarragon Leisure to plan your Sri Lanka trip.",
  path: "/contact",
});

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          contactPageJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <AnimatedContact />
    </>
  );
}
