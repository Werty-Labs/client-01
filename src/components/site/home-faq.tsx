import { ChevronDown } from "lucide-react";
import { homeFaqs } from "@/lib/geo-data";

/**
 * Server-rendered so every answer is present in the HTML for crawlers.
 * Uses native <details> for the expand/collapse behaviour (no client JS).
 */
export function HomeFaq() {
  return (
    <section
      aria-labelledby="home-faq-heading"
      className="relative z-10 bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-[#287A71] font-bold">
            FAQ
          </p>
          <h2
            id="home-faq-heading"
            className="mt-2 font-display1 text-3xl font-bold tracking-tight text-[#0B3B24] sm:text-4xl lg:text-5xl"
          >
            Planning Your Sri Lanka Trip
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {homeFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-2xl border border-black/10 bg-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left font-display text-lg font-medium text-foreground transition-colors hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
