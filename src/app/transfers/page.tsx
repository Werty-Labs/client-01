import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { transfersServiceJsonLd, transfersFaqJsonLd } from "@/lib/structured-data";
import { AnimatedTransfers } from "@/components/animations/AnimatedTransfers";

export const metadata = buildMetadata({
  title: "Private Chauffeur Transfers & Day Tours from Mirissa | Prices",
  description:
    "Book private car & KDH van transfers from Mirissa to Colombo, Ella, Yala, Kandy & more. Fixed prices, English-speaking chauffeur. Instant WhatsApp booking.",
  path: "/transfers",
  keywords: [
    "private transfer Mirissa",
    "Mirissa chauffeur service",
    "private driver Mirissa Sri Lanka",
    "Mirissa to Colombo private transfer",
    "Mirissa to Ella transfer",
    "Mirissa to airport taxi",
    "Mirissa to Yala private transfer",
    "Yala safari tour from Mirissa",
    "Mirissa to Kandy private car",
    "Mirissa to Galle taxi price",
    "Mirissa to Hiriketiya transfer",
    "Mirissa to Unawatuna private car",
    "Mirissa to Negombo transfer",
    "Ella day tour from Mirissa",
    "Galle Fort tour from Mirissa",
    "fixed price transfer Sri Lanka",
    "air-conditioned private vehicle Sri Lanka",
    "door-to-door hotel pickup Sri Lanka",
  ],
});

export const dynamic = "force-static";

export default function TransfersPage() {
  return (
    <>
      <JsonLd data={[transfersServiceJsonLd(), transfersFaqJsonLd()]} />
      <AnimatedTransfers />
    </>
  );
}
