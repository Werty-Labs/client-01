import type { MetadataRoute } from "next";
import { getDestinationSlugs, getTourSlugs } from "@/lib/api";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [destinationSlugs, tourSlugs, posts] = await Promise.all([
    getDestinationSlugs(),
    getTourSlugs(),
    getAllPosts(),
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
      priority: 0.6,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
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
    {
      url: absoluteUrl("/blog"),
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

  const VISA_SLUG = "sri-lanka-visa-eta-guide";
  const blogRoutes = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: post.slug === VISA_SLUG ? ("weekly" as const) : ("monthly" as const),
    priority: 0.8,
  }));

  return [...staticRoutes, ...destinationRoutes, ...tourRoutes, ...blogRoutes];
}
