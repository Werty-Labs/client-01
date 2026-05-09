import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: readonly string[];
  type?: "website" | "article";
};

export function buildMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultOgImage,
  keywords = siteConfig.keywords,
  type = "website",
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
      absolute: title === siteConfig.name ? siteConfig.name : undefined,
    },
    description,
    keywords: [...keywords],
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} hero image`,
        },
      ],
      locale: siteConfig.locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    alternates: {
      canonical: url,
    },
  };
}
