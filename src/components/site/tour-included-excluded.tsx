import { Check, X } from "lucide-react";
import type { Tour } from "@/types/site";

type TourIncludedExcludedProps = {
  tour: Tour;
};

export function TourIncludedExcluded({ tour }: TourIncludedExcludedProps) {
  if (!tour.includedExcluded) return null;

  const { included, excluded } = tour.includedExcluded;

  return (
    <section>
      <h2 className="mb-6 font-display text-2xl text-primary">
        Included/Exclude
      </h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {/* Included items */}
        <ul className="space-y-3">
          {included.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Check className="mt-0.5 size-[18px] shrink-0 text-primary" />
              <span className="text-sm leading-relaxed text-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Excluded items */}
        <ul className="space-y-3">
          {excluded.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <X className="mt-0.5 size-[18px] shrink-0 text-foreground" />
              <span className="text-sm leading-relaxed text-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
