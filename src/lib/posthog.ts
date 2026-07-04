import posthog from "posthog-js";

// Initialize at module level — runs once when this module is first loaded
// on the client. The window check prevents this from running on the server.
if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
    ui_host: "https://app.posthog.com",
    capture_pageview: false,
    capture_pageleave: true,
    opt_out_capturing_by_default: false,
    capture_performance: false, // Prevents web-vitals.js CDN load
    loaded: (ph) => {
      // Explicitly opt in to clear any stale opt-out flags
      ph.opt_in_capturing();
    },
  });
}

export default posthog;
