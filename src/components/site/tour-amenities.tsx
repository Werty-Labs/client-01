import {
  CreditCard,
  Car,
  WashingMachine,
  Armchair,
  UtensilsCrossed,
  Cigarette,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import type { Tour } from "@/types/site";

const amenityIconMap: Record<string, LucideIcon> = {
  "Accepts Credit Cards": CreditCard,
  "Car Parking": Car,
  "Laundry Service": WashingMachine,
  "Outdoor Seating": Armchair,
  "Restaurant": UtensilsCrossed,
  "Smoking Allowed": Cigarette,
  "Wireless Internet": Wifi,
};

type TourAmenitiesProps = {
  tour: Tour;
};

export function TourAmenities({ tour }: TourAmenitiesProps) {
  if (!tour.amenities || tour.amenities.length === 0) return null;

  return (
    <section>
      <h2 className="mb-6 font-display1 text-2xl">Tour Amenities</h2>

      <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
        {tour.amenities.map((amenity) => {
          const Icon = amenityIconMap[amenity];
          return (
            <div key={amenity} className="flex items-center gap-3">
              {Icon ? (
                <Icon className="size-5 shrink-0 text-primary" />
              ) : (
                <span className="size-5 shrink-0" />
              )}
              <span className="text-sm text-foreground">{amenity}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
