"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAnalytics } from "@/hooks/use-analytics";

export function TourCTA() {
  const { track } = useAnalytics();
  return (
    <Button asChild className="w-full rounded-md" onClick={() => track("tour_enquiry_clicked")}>
      <Link href="/contact" prefetch>
        Enquire About This Journey
      </Link>
    </Button>
  );
}
