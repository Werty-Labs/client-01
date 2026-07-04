import { Check } from "lucide-react";
import type { Tour } from "@/types/site";

type TourIncludedExcludedProps = {
  tour: Tour;
};

export function TourIncludedExcluded({ tour }: TourIncludedExcludedProps) {
  if (!tour.includedExcluded) return null;

  const { included } = tour.includedExcluded;

  return (
    <section>
      <h2 className="mb-6 font-display1 text-2xl text-primary">
        What's Included
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {included.map((item) => (
          <div key={item} className="flex items-start gap-2.5">
            <Check className="mt-0.5 size-[18px] shrink-0 text-primary" />
            <span className="text-sm leading-relaxed text-foreground">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
