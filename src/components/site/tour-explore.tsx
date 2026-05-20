import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import type { Tour } from "@/types/site";

type TourExploreProps = {
  tour: Tour;
};

export function TourExplore({ tour }: TourExploreProps) {
  if (!tour.advanceFacilities) return null;

  return (
    <section className="space-y-8">
      {/* Section heading */}
      <h2 className="font-display text-2xl text-primary">Explore Tours</h2>

      {/* Overview */}
      <div>
        <p className="leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Overview: </span>
          {tour.summary}
        </p>
      </div>

      {/* Highlights + Image */}
      <div className="grid items-start gap-6 sm:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold text-foreground">Highlights:</p>
          <ul className="space-y-3">
            {tour.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2.5">
                <CircleCheckBig className="mt-0.5 size-[18px] shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={tour.image}
            alt={`${tour.title} highlight`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Advance Facilities */}
      <div>
        <h3 className="mb-4 font-display text-xl text-primary">
          Advance Facilities
        </h3>
        <ul className="space-y-3">
          {tour.advanceFacilities.map((facility) => (
            <li key={facility.label} className="flex items-start gap-2.5">
              <CircleCheckBig className="mt-0.5 size-[18px] shrink-0 text-primary" />
              <p className="text-sm leading-relaxed">
                <span className="font-semibold text-foreground">
                  {facility.label}:
                </span>{" "}
                <span className="text-muted-foreground">
                  {facility.description}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
