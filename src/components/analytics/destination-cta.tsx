"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";

export function DestinationCTA() {
  const { track } = useAnalytics();
  return (
    <Button size="lg" className="w-full h-12 rounded-full bg-[#0B3B24] hover:bg-[#1A6B6B] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] group flex items-center justify-center gap-2" asChild onClick={() => track("plan_trip_clicked", { location: "destination_page" })}>
      <Link href="/contact" prefetch>
        <span>Plan a trip here</span>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-[1px]">
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
        </div>
      </Link>
    </Button>
  );
}
