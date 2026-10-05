import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { services } from "@/lib/site-data";

/**
 * Single source of truth for generative-engine-optimisation (GEO) data.
 * Consumed by the JSON-LD helpers, the homepage FAQ section and the
 * /ai/*.json + /.well-known/ai.txt route handlers so they never drift apart.
 */

/** Bump this only when the homepage content genuinely changes. */
export const siteLastModified = "2026-10-05";

export const socialProfiles = [
  "https://www.facebook.com/tarragonleisure",
  "https://www.instagram.com/tarragonleisure",
] as const;

export type HomeFaq = { question: string; answer: string };

export const homeFaqs: HomeFaq[] = [
  {
    question: "When is the best time to visit Sri Lanka?",
    answer:
      "Sri Lanka has two monsoon seasons, so the best time depends on the coast. The south-west beaches and hill country are at their best from mid-December to March, while the east coast, including Arugam Bay, is best from May to October. Yala leopard spotting is strongest from February to July.",
  },
  {
    question: "Do I need a visa to travel to Sri Lanka?",
    answer:
      "Most visitors need an Electronic Travel Authorisation (ETA), which is applied for online and is usually approved within 24 to 48 hours. We recommend applying at least a week before your flight and only using the official government site, eta.gov.lk. Visa on arrival is available at Bandaranaike International Airport for many nationalities but costs more and involves queues.",
  },
  {
    question: "Does Tarragon Leisure create tailor-made Sri Lanka tours?",
    answer:
      "Yes. We are a travel company based in Matara and we design every itinerary around your dates, pace and interests. Our trips include family-friendly tours, beach holidays, city tours, honeymoons, wildlife safaris and fully customised journeys.",
  },
  {
    question: "How much is a private transfer from Mirissa to Colombo?",
    answer:
      "A private air-conditioned car from Mirissa to Colombo costs LKR 22,000 and a KDH van costs LKR 28,000. Prices are fixed, with highway tolls and fuel included, and come with an English-speaking chauffeur and door-to-door hotel pickup.",
  },
  {
    question: "How do I start planning my trip with Tarragon Leisure?",
    answer:
      "Message us on WhatsApp at +94 77 72 50 794 or use the contact page with your travel dates, group size and the experiences you want. A local expert from our Matara team will come back to you with a proposed itinerary.",
  },
];

export const aiSummary = {
  name: siteConfig.name,
  tagline: siteConfig.tagline,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  location: {
    address: siteConfig.address,
    country: "Sri Lanka",
  },
  contact: {
    email: siteConfig.email,
    phone: siteConfig.phone,
    whatsapp: `https://wa.me/${siteConfig.whatsapp}`,
    contactPage: absoluteUrl("/contact"),
  },
  socialProfiles,
  keyPages: {
    tours: absoluteUrl("/tours"),
    destinations: absoluteUrl("/destinations"),
    transfers: absoluteUrl("/transfers"),
    blog: absoluteUrl("/blog"),
    about: absoluteUrl("/about"),
  },
  llmsTxt: absoluteUrl("/llms.txt"),
  lastModified: siteLastModified,
};

export const aiServices = [
  ...services.map((service) => ({
    name: service.title,
    description: service.blurb,
    url: absoluteUrl("/tours"),
  })),
  {
    name: "Private Chauffeur Transfers & Day Tours",
    description:
      "Fixed-price private car and KDH van transfers from Mirissa to Colombo, Ella, Kandy, Galle, Katunayake airport and Yala, with an English-speaking chauffeur.",
    url: absoluteUrl("/transfers"),
  },
];
