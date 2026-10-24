import { getAllPosts } from "@/lib/blog";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = await getAllPosts();
  const feedUrl = absoluteUrl("/blog/rss.xml");

  // Newest real content change, not the build time, so the feed date stays honest.
  const lastBuildDate = posts.reduce(
    (latest, post) => Math.max(latest, new Date(post.updatedAt).getTime()),
    0,
  );

  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.summary)}</description>${
        post.category ? `\n      <category>${escapeXml(post.category)}</category>` : ""
      }
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${siteConfig.name} — Sri Lanka Travel Blog`)}</title>
    <link>${absoluteUrl("/blog")}</link>
    <description>${escapeXml("Sri Lanka travel guides and itineraries from our local team in Matara.")}</description>
    <language>en-gb</language>
    <lastBuildDate>${new Date(lastBuildDate).toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
