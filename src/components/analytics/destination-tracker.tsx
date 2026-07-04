"use client";

import { useEffect } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

export function DestinationTracker({ name }: { name: string }) {
  const { track } = useAnalytics();
  
  useEffect(() => {
    track("destination_viewed", { destination: name });
  }, [name, track]);

  return null;
}
