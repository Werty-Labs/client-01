import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

import { images } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <>
      <footer className="relative z-10 pt-10 bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-4">
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
                <Link href="/about" prefetch>
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
                <MapPin className="size-4 shrink-0" /> {siteConfig.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" /> 
                <div className="flex flex-col gap-1">
                  <a href="tel:+94777250794" className="hover:opacity-80 transition-opacity">+94 77 72 50 794</a>
                  <a href="tel:+94772294994" className="hover:opacity-80 transition-opacity">+94 77 22 94 994</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" /> 
                <a href={`mailto:${siteConfig.email}`} className="hover:opacity-80 transition-opacity">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-display text-lg">Social Media</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="https://www.facebook.com/tarragonleisure" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <FacebookIcon className="size-4" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/tarragonleisure?igsh=ZDI0YWdna3hoOTVq" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <InstagramIcon className="size-4" /> Instagram
                </a>
              </li>

            </ul>
          </div>
        </div>
        <div className="border-t border-background/15 py-5 text-center text-xs opacity-70">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </footer>
    </>
  );
}
