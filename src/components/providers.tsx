"use client";

import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      {children}
      <Toaster closeButton position="top-right" richColors />
    </>
  );
}
