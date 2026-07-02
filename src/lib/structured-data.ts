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
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: absoluteUrl("/assets/tarragon/logo-white.png"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colombo",
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
    headline: post.title,
    description: post.summary,
    image: absoluteUrl(post.image),
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
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
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
