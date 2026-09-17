import type { NavigationItem } from "@/types/site";

export const siteConfig = {
  name: "Tarragon Leisure",
  tagline: "Sri Lanka Tours & Travel Adventures",
  description:
    "Discover Sri Lanka with tailor-made tours, wildlife safaris, beach holidays, cultural escapes, hill-country adventures, and private travel planning.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tarragonleisure.com",
  phone: "+94 77 72 50 794 / +94 77 22 94 994",
  email: "info@tarragonleisure.com",
  whatsapp: "94777250794",
  address: "No. 439/2, Galle Road, Pamburana, Matara",
  creator: "Tarragon Leisure",
  author: "Tarragon Leisure",
  locale: "en_GB",
  defaultOgImage: "/assets/tarragon/sigiriya-2.jpg",
  keywords: [
    "Sri Lanka tours",
    "Sri Lanka travel",
    "Sri Lanka safari",
    "Sri Lanka holidays",
    "tailor-made Sri Lanka trips",
    "Arugam Bay tours",
    "Sigiriya tour packages",
    "luxury Sri Lanka holidays",
    "Sri Lanka honeymoon",
    "Sri Lanka and Maldives tour",
    "bespoke Sri Lanka itinerary",
    "Yala National Park safari",
    "Kandy Ella train",
    "Galle Fort Sri Lanka",
  ],
} as const;

export const mainNavigation: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/destinations", label: "Destinations" },
  { href: "/transfers", label: "Transfers" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
