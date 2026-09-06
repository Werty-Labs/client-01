import { absoluteUrl, siteConfig } from "@/lib/site-config";
import type { Destination, Service, Tour } from "@/types/site";
import type { BlogPost } from "./blog";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: absoluteUrl("/assets/tarragon/logo-white.png"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 439/2, Galle Road",
      addressLocality: "Pamburana, Matara",
      addressCountry: "LK",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.email,
        telephone: siteConfig.phone,
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function aboutPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${siteConfig.name}`,
    description:
      "Learn about the local travel team behind Tarragon Leisure's tailored Sri Lanka tours.",
    url: absoluteUrl("/about"),
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteConfig.name}`,
    description: "Contact Tarragon Leisure to plan your Sri Lanka trip.",
    url: absoluteUrl("/contact"),
  };
}

export function collectionPageJsonLd(
  name: string,
  path: string,
  items: Array<Tour | Destination | Service | BlogPost>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url: absoluteUrl(path),
    numberOfItems: items.length,
  };
}

export function destinationJsonLd(destination: Destination) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.blurb,
    url: absoluteUrl(`/destinations/${destination.slug}`),
    image: absoluteUrl(destination.image),
    touristType: ["Leisure travelers", "Adventure travelers"],
  };
}

export function tourProductJsonLd(tour: Tour) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: tour.title,
    description: tour.summary,
    image: tour.gallery.map((image) => absoluteUrl(image)),
    brand: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function buildArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl(`/blog/${post.slug}#article`),
    headline: post.title,
    description: post.summary,
    image: absoluteUrl(post.image),
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.updatedAt).toISOString(),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/assets/tarragon/logo-white.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
  };
}

export function buildFaqSchema(post: BlogPost) {
  if (!post.faq || post.faq.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item: any) => ({
      "@type": "Question",
      name: item.question || item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer || item.a,
      },
    })),
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.siteUrl}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: absoluteUrl(siteConfig.defaultOgImage),
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 439/2, Galle Road",
      addressLocality: "Pamburana",
      addressRegion: "Matara",
      addressCountry: "LK",
    },
    priceRange: "$$$",
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
  };
}

export function transfersServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Private Chauffeur Transfers & Day Tours from Mirissa",
    description:
      "Book private car and KDH van transfers from Mirissa to Colombo, Ella, Yala, Kandy, airport and more. Fixed prices, English-speaking chauffeur, door-to-door hotel pickup.",
    url: absoluteUrl("/transfers"),
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 439/2, Galle Road",
        addressLocality: "Pamburana, Matara",
        addressCountry: "LK",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Transfer Routes & Day Tours",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Mirissa to Colombo private transfer" },
          priceSpecification: { "@type": "PriceSpecification", priceCurrency: "LKR", minPrice: 22000, maxPrice: 28000 },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Mirissa to Ella private transfer" },
          priceSpecification: { "@type": "PriceSpecification", priceCurrency: "LKR", minPrice: 24000, maxPrice: 30000 },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Mirissa to Airport Katunayake transfer" },
          priceSpecification: { "@type": "PriceSpecification", priceCurrency: "LKR", minPrice: 23000, maxPrice: 29000 },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Yala safari tour from Mirissa" },
          priceSpecification: { "@type": "PriceSpecification", priceCurrency: "LKR", minPrice: 25000, maxPrice: 35000 },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Mirissa to Kandy private transfer" },
          priceSpecification: { "@type": "PriceSpecification", priceCurrency: "LKR", minPrice: 33000, maxPrice: 38000 },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Mirissa to Galle private transfer" },
          priceSpecification: { "@type": "PriceSpecification", priceCurrency: "LKR", minPrice: 8000, maxPrice: 13000 },
        },
      ],
    },
  };
}

export function transfersFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much is a taxi from Mirissa to Colombo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A private car transfer from Mirissa to Colombo costs LKR 22,000 and a KDH van costs LKR 28,000. These are fixed prices with no hidden charges — highway tolls and fuel surcharges are included.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get from Mirissa to Ella?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most comfortable way to get from Mirissa to Ella is by private chauffeur transfer. Tarragon Leisure offers this route for LKR 24,000 (private car) or LKR 30,000 (KDH van), with door-to-door hotel pickup included.",
        },
      },
      {
        "@type": "Question",
        name: "Do your transfer prices include highway tolls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. No additional charges will apply for relevant locations — highway tolls and fuel surcharges are all included in the listed price.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can a vehicle be arranged?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vehicle arrangements can be made within a maximum of 1 hour (between 15 minutes and 1 hour). For best availability, we recommend booking in advance via WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "What vehicles do you offer for private transfers in Sri Lanka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer two vehicle types: a private air-conditioned car (suitable for 1–3 passengers with luggage) and a KDH flat-roof van (ideal for larger groups or passengers with significant luggage). Both come with an English-speaking chauffeur-guide.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a private transfer from Mirissa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply message us on WhatsApp at +94 77 72 50 794 with your route, date, time, and number of passengers. We'll confirm your booking within minutes.",
        },
      },
    ],
  };
}
