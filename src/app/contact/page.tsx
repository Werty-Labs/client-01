import { ContactForm } from "@/components/forms/contact-form";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/structured-data";
import { MessageCircle, Phone, Mail, MapPin, Camera, Share2, Play } from "lucide-react";

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
      <div className="bg-[#f8f9fa] min-h-screen py-20 pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center mb-16 mt-8">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] text-[#0B3B24] mb-6 tracking-tight">
            Chat with a Travel Expert
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light">
            Experience guided serenity before your journey even begins. Connect with our concierge
            team instantly for personalized recommendations and booking assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 text-white font-medium hover:bg-[#20bd5a] transition-colors shadow-sm"
            >
              <MessageCircle className="size-5" />
              Start WhatsApp Chat
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-[#25D366]"></span>
              </span>
              Typically replies in minutes
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1000px] gap-8 px-4 sm:px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-border/40">
              <h2 className="font-display text-[28px] text-[#0B3B24] mb-2 tracking-tight">Send an Enquiry</h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-8">
                Prefer email? Fill out the details below and we'll craft your perfect itinerary.
              </p>
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-border/40">
              <h3 className="font-display text-2xl text-[#0B3B24] mb-6 tracking-tight">Other Ways to<br/>Connect</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f2f5f4] text-[#0B3B24]">
                    <Phone className="size-4" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-[15px] text-[#1c1c1c]">Global Office</p>
                    <p className="text-sm text-muted-foreground mt-0.5">+1 (800) 555-0199</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f2f5f4] text-[#0B3B24]">
                    <Mail className="size-4" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-[15px] text-[#1c1c1c]">General Inquiries</p>
                    <p className="text-sm text-muted-foreground mt-0.5">concierge@tarragon.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f2f5f4] text-[#0B3B24]">
                    <MapPin className="size-4" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-[15px] text-[#1c1c1c]">Headquarters</p>
                    <p className="text-sm text-muted-foreground mt-0.5 whitespace-pre-line leading-relaxed">
                      100 Serenity Way,<br/>
                      Suite 400<br/>
                      New York, NY 10001
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-border/40">
              <h3 className="font-display text-2xl text-[#0B3B24] mb-6 tracking-tight">Follow Our Journeys</h3>
              <div className="flex gap-4">
                <a href="#" className="flex size-11 items-center justify-center rounded-full bg-[#f2f5f4] text-[#0B3B24] hover:bg-[#e8ecea] transition-colors">
                  <Camera className="size-[18px]" strokeWidth={2} />
                </a>
                <a href="#" className="flex size-11 items-center justify-center rounded-full bg-[#f2f5f4] text-[#0B3B24] hover:bg-[#e8ecea] transition-colors">
                  <Share2 className="size-[18px]" strokeWidth={2} />
                </a>
                <a href="#" className="flex size-11 items-center justify-center rounded-full bg-[#f2f5f4] text-[#0B3B24] hover:bg-[#e8ecea] transition-colors">
                  <Play className="size-[18px]" strokeWidth={2} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
