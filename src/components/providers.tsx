"use client";

import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { PostHogSuspense } from "./analytics/posthog-suspense";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <PostHogSuspense>
      {children}
      <Toaster closeButton position="top-right" richColors />
    </PostHogSuspense>
  );
}
