import { absoluteUrl, siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export function GET() {
  const body = `# AI crawler policy for ${siteConfig.name}
# Mirrors robots.txt: public content may be crawled, indexed and cited.

User-Agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

# Machine-readable resources
Summary: ${absoluteUrl("/ai/summary.json")}
FAQ: ${absoluteUrl("/ai/faq.json")}
Services: ${absoluteUrl("/ai/service.json")}
LLMs: ${absoluteUrl("/llms.txt")}
Sitemap: ${absoluteUrl("/sitemap.xml")}

Contact: ${siteConfig.email}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
