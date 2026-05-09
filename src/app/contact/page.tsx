import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { JsonLd } from "@/components/site/json-ld";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/metadata";
import { images } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with Tarragon Leisure to plan your Sri Lanka trip.",
  path: "/contact",
  image: images.colombo,
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
      <div>
        <section className="relative h-[40vh] min-h-[300px]">
          <Image
            src={images.colombo}
            alt="Colombo skyline"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 text-white sm:px-6">
            <p className="text-sm uppercase tracking-[0.25em] opacity-90">Say hello</p>
            <h1 className="mt-2 font-display text-5xl sm:text-6xl">Contact us</h1>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="p-6 sm:p-8">
              <h2 className="mb-1 font-display text-2xl">Tell us about your trip</h2>
              <p className="mb-6 text-sm text-muted-foreground">
                We usually reply within a few hours.
              </p>
              <ContactForm />
            </Card>
          </div>

          <aside className="space-y-4">
            <Card className="p-6">
              <h3 className="mb-4 font-display text-lg">Get in touch</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 text-primary" />
                  {siteConfig.address}
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 text-primary" />
                  {siteConfig.phone}
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 text-primary" />
                  {siteConfig.email}
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="mb-2 font-display text-lg">WhatsApp</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Fastest way to reach us.
              </p>
              <Button asChild className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a]">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </Button>
            </Card>
          </aside>
        </div>
      </div>
    </>
  );
}
