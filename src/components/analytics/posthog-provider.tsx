"use client";

import posthog from "@/lib/posthog";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    posthog.capture("$pageview", { $current_url: window.location.href });
  }, [pathname]);

  return <>{children}</>;
}
