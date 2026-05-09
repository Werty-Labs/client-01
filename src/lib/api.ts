import { cache } from "react";
import {
  categories,
  destinations,
  services,
  tours,
} from "@/lib/site-data";
import type { Destination, Tour } from "@/types/site";

export const getCategories = cache(async () => categories);

export const getServices = cache(async () => services);

export const getDestinations = cache(async () => destinations);

export const getDestinationSlugs = cache(async () =>
  destinations.map((destination) => destination.slug),
);

export const getTours = cache(async () => tours);

export const getTourSlugs = cache(async () => tours.map((tour) => tour.slug));

export const getFeaturedTours = cache(async () =>
  tours.filter((tour) => tour.featured),
);

export const getHomePageData = cache(async () => ({
  categories,
  destinations: destinations.slice(0, 6),
  featuredTours: tours.filter((tour) => tour.featured),
  services,
}));

export const getDestinationBySlug = cache(async (slug: string) =>
  destinations.find((destination) => destination.slug === slug) ?? null,
);

export const getTourBySlug = cache(async (slug: string) =>
  tours.find((tour) => tour.slug === slug) ?? null,
);

export const getRelatedToursForDestination = cache(
  async (destination: Destination): Promise<Tour[]> => {
    const token = destination.name.split(" ")[0]?.toLowerCase() ?? "";
    return tours.filter((tour) => tour.location.toLowerCase().includes(token));
  },
);

export const getTourCollectionSummary = cache(async () => ({
  total: tours.length,
  featured: tours.filter((tour) => tour.featured).length,
}));

export const getDestinationCollectionSummary = cache(async () => ({
  total: destinations.length,
}));

export const getServiceCollectionSummary = cache(async () => ({
  total: services.length,
}));

export async function assertDestination(slug: string): Promise<Destination> {
  const destination = await getDestinationBySlug(slug);
  if (!destination) {
    throw new Error(`Missing destination for slug: ${slug}`);
  }
  return destination;
}

export async function assertTour(slug: string): Promise<Tour> {
  const tour = await getTourBySlug(slug);
  if (!tour) {
    throw new Error(`Missing tour for slug: ${slug}`);
  }
  return tour;
}

export async function getAllStaticPagePaths() {
  const destinationPaths = (await getDestinationSlugs()).map(
    (slug) => `/destinations/${slug}`,
  );
  const tourPaths = (await getTourSlugs()).map((slug) => `/tours/${slug}`);

  return [
    "/",
    "/about",
    "/contact",
    "/services",
    "/destinations",
    "/tours",
    ...destinationPaths,
    ...tourPaths,
  ];
}
