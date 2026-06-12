import type { MetadataRoute } from "next";
import { getDestinationSlugs, getTourSlugs } from "@/lib/api";
import { absoluteUrl } from "@/lib/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [destinationSlugs, tourSlugs] = await Promise.all([
    getDestinationSlugs(),
    getTourSlugs(),
  ]);

  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/destinations"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/tours"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const destinationRoutes = destinationSlugs.map((slug) => ({
    url: absoluteUrl(`/destinations/${slug}`),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const tourRoutes = tourSlugs.map((slug) => ({
    url: absoluteUrl(`/tours/${slug}`),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...destinationRoutes, ...tourRoutes];
}
