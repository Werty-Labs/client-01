import { aiSummary } from "@/lib/geo-data";

export const dynamic = "force-static";

export function GET() {
  return Response.json(aiSummary);
}
