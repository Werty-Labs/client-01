import { Suspense } from "react";
import { PostHogProvider } from "./posthog-provider";

export function PostHogSuspense({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <PostHogProvider>{children}</PostHogProvider>
    </Suspense>
  );
}
