export type Category = {
  title: string;
  blurb: string;
  image: string;
};

export type Destination = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
  category: string;
  description?: string;
  gallery?: string[];
  highlights?: string[];
  bestSeason?: string;
  activities?: string[];
  quickFacts?: Record<string, string>;
  localTips?: string[];
};

export type TourItineraryDay = {
  day: string;
  title: string;
  details: string;
};

export type Tour = {
  slug: string;
  title: string;
  location: string;
  duration: string;
  groupSize: number;
  price: number | null;
  featured?: boolean;
  image: string;
  gallery: string[];
  summary: string;
  highlights: string[];
  itinerary: TourItineraryDay[];
  advanceFacilities?: { label: string; description: string }[];
  includedExcluded?: { included: string[]; excluded: string[] };
  amenities?: string[];
};

export type Service = {
  title: string;
  blurb: string;
  image: string;
};

export type NavigationItem = {
  href: string;
  label: string;
};
