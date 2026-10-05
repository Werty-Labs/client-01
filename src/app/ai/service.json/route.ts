import { aiServices } from "@/lib/geo-data";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    provider: siteConfig.name,
    areaServed: "Sri Lanka",
    services: aiServices,
  });
}
