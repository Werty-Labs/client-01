import { AnimatedContact } from "@/components/animations/AnimatedContact";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Plan Your Sri Lanka Holiday — Get a Free Quote",
  description: "Ready to start planning? Contact Tarragon Leisure to design your bespoke Sri Lanka holiday. Call, WhatsApp, or email our local team in Matara.",
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
