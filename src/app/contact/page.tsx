import { AnimatedContact } from "@/components/animations/AnimatedContact";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Contact Us — Plan Your Sri Lanka Trip",
  description: "Ready to start planning? Contact Tarragon Leisure to design your bespoke Sri Lanka holiday. Call, WhatsApp, or email our local team.",
  path: "/contact",
});

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
