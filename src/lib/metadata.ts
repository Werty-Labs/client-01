import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: readonly string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultOgImage,
  keywords = siteConfig.keywords,
  type = "website",
  publishedTime,
  modifiedTime,
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  const finalTitle = title === siteConfig.name ? siteConfig.name : `${title} | ${siteConfig.name}`;

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: finalTitle,
    description,
    keywords: [...keywords],
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    openGraph: {
      title: finalTitle,
      description,
      url,
      siteName: siteConfig.name,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
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
      title: finalTitle,
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
