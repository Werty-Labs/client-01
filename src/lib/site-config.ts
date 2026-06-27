import type { NavigationItem } from "@/types/site";

export const siteConfig = {
  name: "Tarragon Leisure",
  tagline: "Sri Lanka Tours & Travel Adventures",
  description:
    "Discover Sri Lanka with tailor-made tours, wildlife safaris, beach holidays, cultural escapes, hill-country adventures, and private travel planning.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tarragonleisure.com",
  phone: "+94 77 000 0000",
  email: "info@tarragonleisure.com",
  whatsapp: "94770000000",
  address: "Colombo, Sri Lanka",
  creator: "Tarragon Leisure",
  author: "Tarragon Leisure",
  locale: "en_US",
  defaultOgImage: "/assets/tarragon/sigiriya-2.jpg",
  keywords: [
    "Sri Lanka tours",
    "Sri Lanka travel",
    "Sri Lanka safari",
    "Sri Lanka holidays",
    "tailor-made Sri Lanka trips",
    "Arugam Bay tours",
    "Sigiriya tour packages",
  ],
} as const;

export const mainNavigation: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
