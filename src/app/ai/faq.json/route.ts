import { homeFaqs } from "@/lib/geo-data";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    faqs: homeFaqs.map(({ question, answer }) => ({ question, answer })),
  });
}
//test comment
