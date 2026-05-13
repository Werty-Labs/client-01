import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { NewsletterForm } from "@/components/site/newsletter-form";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { images } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <>
      <footer className="relative z-10 pt-24 bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
          <div>
            <Image
              src={images.logo}
              alt={siteConfig.name}
              width={180}
              height={72}
              className="mb-3 h-10 w-auto"
            />
            <p className="text-sm opacity-80">{siteConfig.tagline}</p>
          </div>

          <div>
            <h4 className="mb-3 font-display text-lg">Explore</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/tours" prefetch>
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/destinations" prefetch>
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/services" prefetch>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" prefetch>
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-display text-lg">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <MapPin className="size-4" /> {siteConfig.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4" /> {siteConfig.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4" /> {siteConfig.email}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-display text-lg">Newsletter</h4>
            <p className="mb-3 text-sm opacity-80">
              Travel tips and Sri Lanka inspiration.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <div className="border-t border-background/15 py-5 text-center text-xs opacity-70">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </footer>
      <WhatsAppFab />
    </>
  );
}
