"use client";

import posthog from "@/lib/posthog";

type ConversionEvent =
  | "contact_form_submitted"
  | "tour_enquiry_clicked"
  | "blog_article_read"
  | "destination_viewed"
  | "service_cta_clicked"
  | "plan_trip_clicked"
  | "whatsapp_clicked";

export function useAnalytics() {
  function track(event: ConversionEvent, properties?: Record<string, unknown>) {
    posthog.capture(event, properties);
  }
  return { track };
}
