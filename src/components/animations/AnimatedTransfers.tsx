"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Car,
  Check,
  ChevronDown,
  Clock,
  LayoutGrid,
  List,
  Luggage,
  MapPin,
  Navigation,
  Plane,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wind,
  X,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/site-data";
import {
  AnimatedHeading,
  StaggerContainer,
  AntiGravityCard,
} from "@/components/animations/AnimatedSection";

// ─── Custom WhatsApp Icon (Identical to Contact Page) ─────────────────────────
function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.12 1.6 5.92L0 24l6.42-1.68a11.84 11.84 0 0 0 5.63 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.38-8.43ZM12.05 21.3h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.81 1 1.02-3.71-.23-.38a9.46 9.46 0 1 1 17.55-4.84c0 5.21-4.24 9.46-9.35 9.46Zm5.42-7.08c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.41-1.49-.89-.79-1.5-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.49-.5-.66-.5h-.56c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.43s1.04 2.82 1.19 3.02c.15.2 2.06 3.13 5 4.39.7.3 1.24.48 1.66.62.7.22 1.34.19 1.84.12.56-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

// ─── Types ─────────────────────────────────────────────────────────────────────
export type RouteCategory = "ALL" | "AIRPORT" | "COASTAL" | "HILLS" | "TOURS";

export type TransferRoute = {
  id: number;
  route: string;
  destination: string;
  pickup: string;
  car: number;
  van: number;
  isTour?: boolean;
  category: "AIRPORT" | "COASTAL" | "HILLS" | "TOURS";
  durationApprox?: string;
  highlights?: string;
  expressway?: boolean;
};

// ─── Verified Transfer Data ───────────────────────────────────────────────────
const TRANSFERS: TransferRoute[] = [
  {
    id: 1,
    route: "From Mirissa to Colombo (Drop Off / Pickup)",
    pickup: "Mirissa",
    destination: "Colombo",
    car: 22000,
    van: 28000,
    category: "AIRPORT",
    durationApprox: "2h 30m",
    highlights: "Southern Expressway (E01) direct route. Door-to-door hotel drop-off.",
    expressway: true,
  },
  {
    id: 2,
    route: "From Mirissa to Yala (Drop Off / Pickup)",
    pickup: "Mirissa",
    destination: "Yala National Park",
    car: 20000,
    van: 24000,
    category: "TOURS",
    durationApprox: "2h 45m",
    highlights: "Direct transfer to Yala Safari camps, hotels, or gate.",
  },
  {
    id: 3,
    route: "Yala safari tour (both ways with 4 hour stay for safari)",
    pickup: "Mirissa",
    destination: "Yala Safari (Round Trip)",
    car: 25000,
    van: 35000,
    isTour: true,
    category: "TOURS",
    durationApprox: "Full Day",
    highlights: "Both ways transfer with 4-hour safari wait time included.",
  },
  {
    id: 4,
    route: "From Mirissa to Udawalawa (Drop Off / Pickup)",
    pickup: "Mirissa",
    destination: "Udawalawe National Park",
    car: 18000,
    van: 25000,
    category: "TOURS",
    durationApprox: "2h 15m",
    highlights: "Direct hotel or safari camp drop-off.",
  },
  {
    id: 5,
    route: "Udawalawa tour (both ways with 4 hour stay for safari)",
    pickup: "Mirissa",
    destination: "Udawalawe (Round Trip)",
    car: 26000,
    van: 35000,
    isTour: true,
    category: "TOURS",
    durationApprox: "Full Day",
    highlights: "Round trip transfer with 4-hour safari wait included.",
  },
  {
    id: 6,
    route: "From Mirissa to Mattala (Drop Off)",
    pickup: "Mirissa",
    destination: "Mattala Airport (HRI)",
    car: 20000,
    van: 25000,
    category: "AIRPORT",
    durationApprox: "1h 45m",
    highlights: "Southern Expressway route directly to departures.",
    expressway: true,
  },
  {
    id: 7,
    route: "From Mattala to Mirissa (Pickup with paging and parking)",
    pickup: "Mattala Airport (HRI)",
    destination: "Mirissa",
    car: 20000,
    van: 25000,
    category: "AIRPORT",
    durationApprox: "1h 45m",
    highlights: "Includes nameboard paging in arrivals & parking fees.",
    expressway: true,
  },
  {
    id: 8,
    route: "From Mirissa to Negombo (Drop Off / Pickup)",
    pickup: "Mirissa",
    destination: "Negombo Beach / City",
    car: 25000,
    van: 30000,
    category: "AIRPORT",
    durationApprox: "2h 45m",
    highlights: "Direct via Southern Expressway & Katunayake Expressway.",
    expressway: true,
  },
  {
    id: 9,
    route: "From Mirissa to Airport Katunayake (Drop Off)",
    pickup: "Mirissa",
    destination: "Bandaranaike Airport (CMB)",
    car: 23000,
    van: 29000,
    category: "AIRPORT",
    durationApprox: "2h 30m",
    highlights: "Doorstep hotel pickup to international departures. All tolls included.",
    expressway: true,
  },
  {
    id: 10,
    route: "From Airport Katunayake to Mirissa (Pickup with paging)",
    pickup: "Bandaranaike Airport (CMB)",
    destination: "Mirissa",
    car: 24000,
    van: 30000,
    category: "AIRPORT",
    durationApprox: "2h 30m",
    highlights: "Flight tracking + personalized nameboard paging in arrivals.",
    expressway: true,
  },
  {
    id: 11,
    route: "From Mirissa to Dambulla (Drop Off / Pickup)",
    pickup: "Mirissa",
    destination: "Dambulla & Sigiriya",
    car: 37000,
    van: 42000,
    category: "HILLS",
    durationApprox: "4h 30m",
    highlights: "Scenic cross-island transfer into the Cultural Triangle.",
    expressway: true,
  },
  {
    id: 12,
    route: "From Mirissa to Nuwara Eliya (Drop Off / Pickup)",
    pickup: "Mirissa",
    destination: "Nuwara Eliya (Tea Country)",
    car: 31000,
    van: 36000,
    category: "HILLS",
    durationApprox: "5h 00m",
    highlights: "Breathtaking ascent through waterfalls and tea plantations.",
  },
  {
    id: 13,
    route: "From Mirissa to Kandy (Drop Off / Pickup)",
    pickup: "Mirissa",
    destination: "Kandy (Cultural Capital)",
    car: 33000,
    van: 38000,
    category: "HILLS",
    durationApprox: "4h 15m",
    highlights: "Comfortable air-conditioned ride to the Central Highlands.",
    expressway: true,
  },
  {
    id: 14,
    route: "From Mirissa to Galle (Drop Off / Pickup)",
    pickup: "Mirissa",
    destination: "Galle Fort / City",
    car: 8000,
    van: 13000,
    category: "COASTAL",
    durationApprox: "45m",
    highlights: "Scenic coastal highway route or expressway.",
  },
  {
    id: 15,
    route: "Galle round tour",
    pickup: "Mirissa",
    destination: "Galle Fort & Coast (Round Trip)",
    car: 18000,
    van: 23000,
    isTour: true,
    category: "TOURS",
    durationApprox: "Full Day",
    highlights: "Full day tour: Galle Fort ramparts, turtle hatchery & stilt fishermen.",
  },
  {
    id: 16,
    route: "From Mirissa to Unawatuna (Drop Off / Pickup)",
    pickup: "Mirissa",
    destination: "Unawatuna Beach",
    car: 8000,
    van: 12000,
    category: "COASTAL",
    durationApprox: "40m",
    highlights: "Quick point-to-point coastal transfer.",
  },
  {
    id: 17,
    route: "From Mirissa to Weligama (Drop Off / Pickup)",
    pickup: "Mirissa",
    destination: "Weligama Bay",
    car: 5000,
    van: 8000,
    category: "COASTAL",
    durationApprox: "15m",
    highlights: "Door-to-door beach shuttle or surf transfer.",
  },
  {
    id: 18,
    route: "From Mirissa to Hiriketiya (Drop Off / Pickup)",
    pickup: "Mirissa",
    destination: "Hiriketiya & Dikwella",
    car: 12000,
    van: 16000,
    category: "COASTAL",
    durationApprox: "55m",
    highlights: "South coast transfer to horseshoe bay surfing hub.",
  },
  {
    id: 19,
    route: "From Mirissa to Hikkaduwa (Drop Off / Pickup)",
    pickup: "Mirissa",
    destination: "Hikkaduwa",
    car: 12000,
    van: 16000,
    category: "COASTAL",
    durationApprox: "1h 10m",
    highlights: "Scenic drive along the coral sanctuary coast.",
  },
  {
    id: 20,
    route: "From Mirissa to Arugam Bay (Drop Off / Pickup)",
    pickup: "Mirissa",
    destination: "Arugam Bay (East Coast)",
    car: 35000,
    van: 43000,
    category: "COASTAL",
    durationApprox: "4h 30m",
    highlights: "East coast surf transit with space for boards & luggage.",
  },
  {
    id: 21,
    route: "From Mirissa to Ella (Drop Off / Pickup)",
    pickup: "Mirissa",
    destination: "Ella Hill Station",
    car: 24000,
    van: 30000,
    category: "HILLS",
    durationApprox: "3h 30m",
    highlights: "Direct journey to Nine Arches Bridge & Ella peaks.",
  },
  {
    id: 22,
    route: "Ella round tour",
    pickup: "Mirissa",
    destination: "Ella Highlands (Round Trip)",
    car: 30000,
    van: 40000,
    isTour: true,
    category: "TOURS",
    durationApprox: "Full Day",
    highlights: "Round trip: Nine Arches Bridge, Ravana Falls & Little Adam's Peak.",
  },
];

const DAY_TOURS_SHOWCASE = [
  {
    id: 3,
    title: "Yala National Park Safari",
    route: "Mirissa ⇄ Yala Safari",
    image: images.yalaLeopard,
    duration: "Full Day (4h Safari wait included)",
    carPrice: 25000,
    vanPrice: 35000,
    description:
      "Witness wild leopards, Asian elephants, and sloth bears in Sri Lanka's premier sanctuary. Includes round-trip chauffeur transfer with 4 hours wait time for your jeep safari.",
    features: ["Hotel pickup 4:30–5:00 AM", "4-hour safari wait time", "Direct park gate drop-off", "Bottled water & A/C"],
  },
  {
    id: 5,
    title: "Udawalawe Elephant Safari",
    route: "Mirissa ⇄ Udawalawe Sanctuary",
    image: images.elephantsWaterSunset,
    duration: "Full Day (4h Safari wait included)",
    carPrice: 26000,
    vanPrice: 35000,
    description:
      "Guaranteed elephant sightings in their natural open habitat against the Udawalawe reservoir. Comfortable both-way journey with 4 hours wait time included.",
    features: ["Scenic inland countryside route", "4-hour safari wait time", "Elephant Transit Home stopover", "All expressway & toll fees"],
  },
  {
    id: 15,
    title: "Galle Fort Heritage & Coast",
    route: "Mirissa ⇄ Galle Fort",
    image: images.galleLighthouse,
    duration: "Full Day Tour",
    carPrice: 18000,
    vanPrice: 23000,
    description:
      "Immerse yourself in UNESCO-listed 17th-century colonial ramparts, maritime museums, artisanal boutiques, sea turtle hatcheries, and famous stilt fishermen.",
    features: ["Walking ramparts at sunset", "Flexible itinerary stops", "Coastal photography spots", "Doorstep villa pickup"],
  },
  {
    id: 22,
    title: "Ella Highland Adventure",
    route: "Mirissa ⇄ Ella Hill Country",
    image: images.ella2,
    duration: "Full Day Tour",
    carPrice: 30000,
    vanPrice: 40000,
    description:
      "Ascend through misty tea plantations into the highlands. Visit Nine Arches Bridge, feel the spray of Ravana Falls, and enjoy cool mountain air.",
    features: ["Nine Arches Bridge train timing", "Ravana Falls viewpoint", "Little Adam's Peak hike", "Authentic tea estate visit"],
  },
];

type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = [
  {
    q: "How much is a private taxi from Mirissa to Colombo or Airport Katunayake?",
    a: "A private car transfer from Mirissa to Colombo costs LKR 22,000 (KDH Van: LKR 28,000). For Bandaranaike International Airport (CMB), a private car is LKR 23,000 and a KDH Van is LKR 29,000. For airport pickups, the price is LKR 24,000 / LKR 30,000 which includes real-time flight tracking, personalized nameboard paging in the arrivals hall, and all airport parking fees.",
  },
  {
    q: "Are Southern Expressway (E01) highway tolls and fuel surcharges included?",
    a: "Yes, 100%. All quoted prices are completely fixed and transparent. Highway toll tickets, expressway surcharges, fuel, and driver allowances are fully covered. There are never any surprise meter adjustments or hidden charges.",
  },
  {
    q: "How quickly can a vehicle be arranged for short-notice transfers?",
    a: "Vehicles can typically be dispatched within 15 minutes to 1 hour across Mirissa, Weligama, Matara, and surrounding south coast towns. However, for airport runs and long-distance transfers, booking in advance via WhatsApp ensures priority vehicle scheduling.",
  },
  {
    q: "What is the difference between the Private Car and KDH Van?",
    a: "Our Executive Private Car (sedan or compact crossover) comfortably accommodates 1–3 passengers with 3 standard luggage bags. Our Luxury Toyota KDH Van (flat roof) is ideal for 4–8 passengers or travelers with extensive baggage, surfboards, or family travel needs. Both vehicles are modern, air-conditioned, and chauffeured by certified English-speaking drivers.",
  },
  {
    q: "Can we make spontaneous stops along the way for photos, tea, or lunch?",
    a: "Absolutely! Unlike generic bus or shuttle rides, our transfers are 100% private. Feel free to ask your chauffeur for brief photo stops, fresh coconut water stands, scenic viewpoints, or recommended local restaurants along the journey.",
  },
  {
    q: "How do I confirm and pay for my transfer?",
    a: "Simply tap the 'Book via WhatsApp' button. Share your route, date, pickup time, hotel name, and number of passengers. We confirm availability within minutes. Payment can be made directly in cash (LKR, USD, EUR, or GBP) upon completion, or pre-arranged via bank transfer.",
  },
];

// ─── Helpers ───────────────────────────────────────────────────────────────────
function fmt(n: number) {
  return `LKR ${n.toLocaleString("en-LK")}`;
}

function buildWhatsAppUrl(route: string, vehicle: "Private Car" | "KDH Van", price: number) {
  const text = `Hello Tarragon Leisure! I would like to book a private transfer:
Route: ${route}
Vehicle: ${vehicle} (Fixed price: ${fmt(price)})
Please let me know availability. Thank you!`;
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}

// ─── Component ─────────────────────────────────────────────────────────────────
export function AnimatedTransfers() {
  const [selectedCategory, setSelectedCategory] = useState<RouteCategory>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Filtered transfer list
  const filteredTransfers = useMemo(() => {
    return TRANSFERS.filter((item) => {
      const matchesCat = selectedCategory === "ALL" || item.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.route.toLowerCase().includes(q) ||
        item.destination.toLowerCase().includes(q) ||
        item.pickup.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#0B3B24]">
      {/* Subtle Grain Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ─── Hero Section ───────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[92dvh] items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        {/* Background Image with Cinematic Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/transfers/hero-transfers.jpg"
            alt="Luxury chauffeur car driving along scenic Sri Lanka coastal road"
            fill
            priority
            className="object-cover brightness-[0.78] contrast-[1.05]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B3B24]/95 via-black/45 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center text-white">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
          >
            <span className="size-2 rounded-full bg-[#F5A623] animate-pulse" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5A623]">
              Fixed Fares · Tolls Included · English Chauffeurs
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
            className="mt-6 font-display1 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05]"
          >
            Effortless Private Transfers &amp; Scenic Day Tours
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/85 font-light"
          >
            Travel across Sri Lanka in air-conditioned luxury. Direct door-to-door hotel pickup from Mirissa,
            Southern Expressway (E01) routes to Colombo &amp; Airport, and professional certified chauffeurs.
          </motion.p>

          {/* Action Buttons: WhatsApp button matching contact page style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                "Hello Tarragon Leisure! I would like to inquire about booking a private transfer."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] pl-6 pr-2 py-2 text-white font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-[0_12px_32px_rgba(37,211,102,0.35)]"
            >
              <span className="text-sm font-semibold">Start WhatsApp Chat</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 group-hover:translate-x-0.5">
                <WhatsAppIcon className="size-5" />
              </div>
            </a>

            <a
              href="#rates"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40"
            >
              <span>Explore All Fares</span>
              <ChevronDown className="size-4 animate-bounce" />
            </a>
          </motion.div>

          {/* Double-Bezel Floating Trust Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.32, 0.72, 0, 1] }}
            className="mt-14 mx-auto max-w-4xl rounded-[2.2rem] bg-white/[0.04] p-1.5 ring-1 ring-white/15 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <div className="rounded-[calc(2.2rem-0.375rem)] bg-white/[0.06] p-4 sm:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center">
                <div className="px-3 py-2">
                  <p className="font-display1 text-2xl sm:text-3xl font-bold text-[#F5A623]">22+</p>
                  <p className="mt-1 text-xs text-white/70 font-medium">Islandwide Routes</p>
                </div>
                <div className="px-3 py-2">
                  <p className="font-display1 text-2xl sm:text-3xl font-bold text-[#F5A623]">100%</p>
                  <p className="mt-1 text-xs text-white/70 font-medium">Tolls &amp; Fees Included</p>
                </div>
                <div className="px-3 py-2">
                  <p className="font-display1 text-2xl sm:text-3xl font-bold text-[#F5A623]">15–60m</p>
                  <p className="mt-1 text-xs text-white/70 font-medium">Rapid Chauffeur Dispatch</p>
                </div>
                <div className="px-3 py-2">
                  <div className="flex items-center justify-center gap-1 text-[#F5A623]">
                    <Star className="size-4 fill-current" />
                    <span className="font-display1 text-2xl sm:text-3xl font-bold text-white">4.9</span>
                  </div>
                  <p className="mt-1 text-xs text-white/70 font-medium">Verified Guest Rating</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Rate Explorer Section ───────────────────────────────────────────── */}
      <section id="rates" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedHeading threshold={0.2} variant="fadeUp">
            <p className="text-xs uppercase tracking-[0.25em] text-[#287A71] font-bold">
              Transparent Tariff
            </p>
          </AnimatedHeading>
          <AnimatedHeading threshold={0.2} variant="fadeUp" delay={0.1}>
            <h2 className="mt-3 font-display1 text-3xl sm:text-5xl font-semibold tracking-tight text-[#0B3B24]">
              Transfer Routes &amp; Live Fares
            </h2>
          </AnimatedHeading>
          <AnimatedHeading threshold={0.2} variant="fadeUp" delay={0.2}>
            <p className="mt-4 text-base text-[#667085] leading-relaxed">
              All prices are fixed per vehicle — not per person. All airport and Colombo transfers use the
              Southern Expressway (E01) with toll fees 100% pre-paid for seamless speed.
            </p>
          </AnimatedHeading>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-12 space-y-6">
          {/* Top Bar: Category Pills & Search */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {(
                [
                  { id: "ALL", label: `All Routes (${TRANSFERS.length})` },
                  { id: "AIRPORT", label: "Airport & Colombo" },
                  { id: "COASTAL", label: "South Coast Beaches" },
                  { id: "HILLS", label: "Hill Country & Cultural" },
                  { id: "TOURS", label: "Safari & Day Tours" },
                ] as const
              ).map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? "bg-[#0B3B24] text-white shadow-[0_4px_16px_rgba(11,59,36,0.2)]"
                        : "bg-white text-[#344054] border border-[#0B3B24]/10 hover:border-[#0B3B24]/30 hover:bg-[#f4f5fb]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input & View Switcher */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#667085]" />
                <input
                  type="text"
                  placeholder="Search destination (e.g. Airport, Ella)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-[#0B3B24]/15 bg-white py-2 pl-9 pr-9 text-xs text-[#0B3B24] placeholder-[#667085] shadow-sm focus:border-[#0B3B24] focus:outline-none focus:ring-1 focus:ring-[#0B3B24]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <X className="size-3.5" />
                  </button>
                )}
              </div>

              {/* View Toggle */}
              <div className="hidden sm:flex items-center rounded-full border border-[#0B3B24]/15 bg-white p-1 shadow-sm">
                <button
                  onClick={() => setViewMode("cards")}
                  aria-label="Cards view"
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    viewMode === "cards" ? "bg-[#0B3B24] text-white" : "text-[#667085] hover:text-[#0B3B24]"
                  }`}
                >
                  <LayoutGrid className="size-3.5" />
                  <span>Cards</span>
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  aria-label="Table view"
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    viewMode === "table" ? "bg-[#0B3B24] text-white" : "text-[#667085] hover:text-[#0B3B24]"
                  }`}
                >
                  <List className="size-3.5" />
                  <span>Table</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-[#667085] px-1">
            <span>
              Showing <strong>{filteredTransfers.length}</strong> available routes
              {searchQuery && ` matching "${searchQuery}"`}
            </span>
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-[#287A71] font-semibold hover:underline">
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* ── Visual Double-Bezel Cards View ── */}
        {viewMode === "cards" && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredTransfers.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="group/card relative flex flex-col justify-between rounded-[2.2rem] bg-[#0B3B24]/[0.03] p-1.5 ring-1 ring-[#0B3B24]/10 shadow-[0_12px_36px_rgba(11,59,36,0.03)] hover:shadow-[0_22px_50px_rgba(11,59,36,0.1)] transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Double-Bezel Inner Core */}
                  <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-[calc(2.2rem-0.375rem)] bg-white p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                    {/* Top Bar with Badges */}
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#287A71] bg-[#287A71]/10 px-3 py-1 rounded-full">
                          #{item.id.toString().padStart(2, "0")}
                        </span>
                        {item.isTour ? (
                          <span className="rounded-full bg-[#F5A623]/15 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#b87a00]">
                            Round Trip Tour
                          </span>
                        ) : item.expressway ? (
                          <span className="rounded-full bg-[#0B3B24]/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#0B3B24]">
                            Expressway (E01)
                          </span>
                        ) : (
                          <span className="rounded-full bg-gray-100 px-3 py-1 font-mono text-[10px] font-medium text-gray-600">
                            Door-to-Door
                          </span>
                        )}
                      </div>

                      {/* Route Title */}
                      <h3 className="mt-4 font-display text-lg font-bold text-[#0B3B24] leading-snug group-hover/card:text-[#287A71] transition-colors">
                        {item.route}
                      </h3>

                      {/* Highlights / Meta */}
                      {item.highlights && (
                        <p className="mt-2 text-xs text-[#667085] leading-relaxed line-clamp-2">
                          {item.highlights}
                        </p>
                      )}

                      {item.durationApprox && (
                        <div className="mt-3 flex items-center gap-1.5 text-xs text-[#667085] font-medium">
                          <Clock className="size-3.5 text-[#287A71]" />
                          <span>Approx. {item.durationApprox}</span>
                        </div>
                      )}
                    </div>

                    {/* Pricing Comparison Box */}
                    <div className="mt-6 pt-5 border-t border-[#0B3B24]/10">
                      <div className="grid grid-cols-2 gap-3">
                        {/* Car Box */}
                        <div className="rounded-xl bg-[#FDFCF8] p-3 border border-[#0B3B24]/5">
                          <div className="flex items-center gap-1 text-[11px] font-medium text-[#667085]">
                            <Car className="size-3 text-[#0B3B24]" />
                            <span>Private Car</span>
                          </div>
                          <p className="mt-1 font-display font-bold text-sm text-[#0B3B24]">
                            {fmt(item.car)}
                          </p>
                          <span className="text-[10px] text-gray-400">1–3 Guests</span>
                        </div>

                        {/* Van Box */}
                        <div className="rounded-xl bg-[#FDFCF8] p-3 border border-[#0B3B24]/5">
                          <div className="flex items-center gap-1 text-[11px] font-medium text-[#667085]">
                            <Users className="size-3 text-[#287A71]" />
                            <span>KDH Van</span>
                          </div>
                          <p className="mt-1 font-display font-bold text-sm text-[#0B3B24]">
                            {fmt(item.van)}
                          </p>
                          <span className="text-[10px] text-gray-400">4–8 Guests</span>
                        </div>
                      </div>

                      {/* WhatsApp Buttons with Contact Page Green [#25D366] & Button-in-Button */}
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <a
                          href={buildWhatsAppUrl(item.route, "Private Car", item.car)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center justify-between rounded-full bg-[#25D366] hover:bg-[#20bd5a] pl-3.5 pr-1.5 py-1.5 text-[11px] font-semibold text-white shadow-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                        >
                          <span>Book Car</span>
                          <div className="flex size-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:scale-110 group-hover/btn:translate-x-0.5">
                            <WhatsAppIcon className="size-3.5" />
                          </div>
                        </a>
                        <a
                          href={buildWhatsAppUrl(item.route, "KDH Van", item.van)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center justify-between rounded-full bg-[#25D366] hover:bg-[#20bd5a] pl-3.5 pr-1.5 py-1.5 text-[11px] font-semibold text-white shadow-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                        >
                          <span>Book Van</span>
                          <div className="flex size-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:scale-110 group-hover/btn:translate-x-0.5">
                            <WhatsAppIcon className="size-3.5" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* ── Table View ── */}
        {viewMode === "table" && (
          <div className="mt-8 rounded-[2.2rem] bg-[#0B3B24]/[0.03] p-1.5 ring-1 ring-[#0B3B24]/10 shadow-[0_16px_40px_rgba(11,59,36,0.04)]">
            <div className="overflow-hidden rounded-[calc(2.2rem-0.375rem)] bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#0B3B24]/10 bg-[#0B3B24] text-white">
                      <th className="py-4 px-6 font-semibold tracking-wider font-mono text-xs">#</th>
                      <th className="py-4 px-6 font-semibold">Route / Destination</th>
                      <th className="py-4 px-6 font-semibold">Duration / Notes</th>
                      <th className="py-4 px-6 text-right font-semibold">Private Car (1–3 Pax)</th>
                      <th className="py-4 px-6 text-right font-semibold">KDH Van (4–8 Pax)</th>
                      <th className="py-4 px-6 text-center font-semibold">Instant Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0B3B24]/5">
                    {filteredTransfers.map((row, idx) => (
                      <tr
                        key={row.id}
                        className={`hover:bg-[#0B3B24]/[0.02] transition-colors ${
                          idx % 2 === 0 ? "bg-white" : "bg-[#FDFCF8]"
                        }`}
                      >
                        <td className="py-4 px-6 font-mono text-xs text-[#667085]">
                          {row.id.toString().padStart(2, "0")}
                        </td>
                        <td className="py-4 px-6">
                          <span className="font-semibold text-[#0B3B24]">{row.route}</span>
                          {row.isTour && (
                            <span className="ml-2 inline-flex items-center rounded-full bg-[#F5A623]/15 px-2 py-0.5 text-[10px] font-bold text-[#b87a00]">
                              Day Tour
                            </span>
                          )}
                          {row.expressway && (
                            <span className="ml-2 inline-flex items-center rounded-full bg-[#0B3B24]/10 px-2 py-0.5 text-[10px] font-semibold text-[#0B3B24]">
                              Expressway
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-xs text-[#667085] max-w-xs">
                          {row.durationApprox && <span className="font-medium text-[#0B3B24]">{row.durationApprox} · </span>}
                          {row.highlights}
                        </td>
                        <td className="py-4 px-6 text-right font-bold text-[#0B3B24] tabular-nums whitespace-nowrap">
                          {fmt(row.car)}
                        </td>
                        <td className="py-4 px-6 text-right font-bold text-[#0B3B24] tabular-nums whitespace-nowrap">
                          {fmt(row.van)}
                        </td>
                        <td className="py-4 px-6 text-center whitespace-nowrap">
                          <a
                            href={buildWhatsAppUrl(row.route, "Private Car", row.car)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white pl-3.5 pr-1.5 py-1.5 text-xs font-semibold shadow-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                          >
                            <span>Book</span>
                            <div className="flex size-5 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:scale-110">
                              <WhatsAppIcon className="size-3" />
                            </div>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Double-Bezel Pricing Policy Box */}
        <div className="mt-10 rounded-[2.2rem] bg-[#0B3B24]/[0.03] p-1.5 ring-1 ring-[#0B3B24]/10 shadow-[0_8px_30px_rgba(11,59,36,0.03)]">
          <div className="rounded-[calc(2.2rem-0.375rem)] bg-white p-6 sm:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#287A71]/10 text-[#287A71]">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-[#0B3B24]">
                  Tarragon Leisure Guaranteed Pricing Policy
                </h4>
                <ul className="mt-2 grid gap-2 text-xs text-[#667085] sm:grid-cols-3">
                  <li className="flex items-center gap-2">
                    <Check className="size-3.5 text-[#287A71]" />
                    <span><strong>Zero Hidden Tolls:</strong> All expressway &amp; parking included.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-3.5 text-[#287A71]" />
                    <span><strong>Fuel Fluctuations:</strong> Listed prices held firm once booked.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-3.5 text-[#287A71]" />
                    <span><strong>Flexible Pickup:</strong> From any hotel or villa in Mirissa &amp; south coast.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Curated Day Tours & Safari Experiences (Double-Bezel Architecture) ─── */}
      <section className="bg-[#FCFAF5] py-20 sm:py-28 border-y border-[#0B3B24]/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <AnimatedHeading threshold={0.2} variant="fadeUp">
              <p className="text-xs uppercase tracking-[0.25em] text-[#287A71] font-bold">
                Scenic Day Excursions
              </p>
            </AnimatedHeading>
            <AnimatedHeading threshold={0.2} variant="fadeUp" delay={0.1}>
              <h2 className="mt-3 font-display1 text-3xl sm:text-5xl font-semibold tracking-tight text-[#0B3B24]">
                Day Tours &amp; Safari Adventures
              </h2>
            </AnimatedHeading>
            <AnimatedHeading threshold={0.2} variant="fadeUp" delay={0.2}>
              <p className="mt-4 text-base text-[#667085] leading-relaxed">
                Full-day round trip transfers from Mirissa. Your chauffeur waits for you during your safari or sightseeing,
                ensuring seamless, stress-free return travel to your hotel.
              </p>
            </AnimatedHeading>
          </div>

          <StaggerContainer
            className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            threshold={0.15}
            staggerDelay={0.15}
          >
            {DAY_TOURS_SHOWCASE.map((tour) => (
              <AntiGravityCard key={tour.id} className="h-full flex flex-col">
                {/* Double-Bezel Outer Shell */}
                <div className="group/tour flex flex-col h-full rounded-[2.5rem] bg-[#0B3B24]/[0.04] p-2 ring-1 ring-[#0B3B24]/10 shadow-[0_20px_45px_rgba(11,59,36,0.05)] hover:shadow-[0_30px_60px_rgba(11,59,36,0.12)] transition-all duration-500 hover:-translate-y-1.5">
                  {/* Double-Bezel Inner Core */}
                  <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-[calc(2.5rem-0.5rem)] bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                    {/* Tour Image */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden">
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/tour:scale-105"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                      
                      {/* Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold text-[#0B3B24] shadow-sm">
                          {tour.duration}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                        <h3 className="font-display text-xl font-bold leading-snug drop-shadow-sm">
                          {tour.title}
                        </h3>
                        <p className="text-xs text-white/80 font-medium mt-0.5">{tour.route}</p>
                      </div>
                    </div>

                    {/* Body Details */}
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <p className="text-xs text-[#667085] leading-relaxed line-clamp-3">
                          {tour.description}
                        </p>

                        <ul className="mt-4 space-y-2 border-t border-[#0B3B24]/10 pt-4">
                          {tour.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-2 text-xs text-[#344054]">
                              <Check className="size-3.5 text-[#287A71] shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Prices & Contact WhatsApp Button */}
                      <div className="mt-6 pt-4 border-t border-[#0B3B24]/10">
                        <div className="flex items-baseline justify-between mb-2.5">
                          <span className="text-xs text-[#667085]">Private Car:</span>
                          <span className="font-display font-bold text-sm text-[#0B3B24]">{fmt(tour.carPrice)}</span>
                        </div>
                        <div className="flex items-baseline justify-between mb-4">
                          <span className="text-xs text-[#667085]">KDH Van:</span>
                          <span className="font-display font-bold text-sm text-[#0B3B24]">{fmt(tour.vanPrice)}</span>
                        </div>

                        <a
                          href={buildWhatsAppUrl(tour.title, "Private Car", tour.carPrice)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex w-full items-center justify-between rounded-full bg-[#25D366] hover:bg-[#20bd5a] pl-5 pr-2 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                        >
                          <span>Book Safari Tour</span>
                          <div className="flex size-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:scale-110 group-hover/btn:translate-x-0.5">
                            <WhatsAppIcon className="size-4" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AntiGravityCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Executive Fleet Showcase (Double-Bezel Architecture) ─────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedHeading threshold={0.2} variant="fadeUp">
            <p className="text-xs uppercase tracking-[0.25em] text-[#287A71] font-bold">
              Impeccable Standards
            </p>
          </AnimatedHeading>
          <AnimatedHeading threshold={0.2} variant="fadeUp" delay={0.1}>
            <h2 className="mt-3 font-display1 text-3xl sm:text-5xl font-semibold tracking-tight text-[#0B3B24]">
              Our Executive Fleet
            </h2>
          </AnimatedHeading>
          <AnimatedHeading threshold={0.2} variant="fadeUp" delay={0.2}>
            <p className="mt-4 text-base text-[#667085] leading-relaxed">
              Every vehicle in our fleet is fully air-conditioned, rigorously sanitized, and inspected prior to departure.
              Driven exclusively by English-speaking, certified chauffeurs with deep route expertise.
            </p>
          </AnimatedHeading>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Executive Private Car - Double Bezel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="group/fleet rounded-[2.6rem] bg-[#0B3B24]/[0.04] p-2 sm:p-2.5 ring-1 ring-[#0B3B24]/10 shadow-[0_24px_50px_rgba(11,59,36,0.06)] hover:shadow-[0_32px_64px_rgba(11,59,36,0.12)] transition-all duration-500"
          >
            {/* Double-Bezel Inner Core */}
            <div className="overflow-hidden rounded-[calc(2.6rem-0.625rem)] bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.95)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/assets/transfers/car-chauffeur.jpg"
                  alt="Executive private car transfer with chauffeur in Sri Lanka"
                  fill
                  className="object-cover transition-transform duration-700 group-hover/fleet:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 z-10">
                  <span className="rounded-full bg-[#0B3B24] text-white px-4 py-1.5 font-mono text-xs font-semibold shadow-md">
                    From LKR 5,000
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display1 text-2xl font-bold text-[#0B3B24]">Executive Private Car</h3>
                    <p className="mt-1 text-xs text-[#667085]">Premium Sedan or Crossover (e.g. Toyota Crown / Axio / Prius)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B3B24] bg-[#0B3B24]/10 px-3 py-1 rounded-full">
                      <Users className="size-3.5" /> 1–3 Guests
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B3B24] bg-[#0B3B24]/10 px-3 py-1 rounded-full">
                      <Luggage className="size-3.5" /> 3 Bags
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-[#667085] leading-relaxed">
                  The perfect choice for couples, solo travelers, and business airport runs. Quiet, plush seating with ample legroom
                  and full climate control.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[#0B3B24]/10 pt-6 text-xs text-[#344054]">
                  <div className="flex items-center gap-2">
                    <Wind className="size-4 text-[#287A71]" />
                    <span>Dual-Zone Climate A/C</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-[#287A71]" />
                    <span>Bottled Mineral Water</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-[#287A71]" />
                    <span>English-Speaking Chauffeur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-[#287A71]" />
                    <span>15m–1hr Rapid Dispatch</span>
                  </div>
                </div>

                {/* Contact Page WhatsApp Button */}
                <div className="mt-8">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                      "Hello Tarragon Leisure! I would like to book an Executive Private Car transfer."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex w-full items-center justify-between rounded-full bg-[#25D366] hover:bg-[#20bd5a] pl-6 pr-2 py-2.5 text-xs font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-sm"
                  >
                    <span>Book Private Car on WhatsApp</span>
                    <div className="flex size-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:scale-110 group-hover/btn:translate-x-0.5">
                      <WhatsAppIcon className="size-4" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Luxury Toyota KDH Van - Double Bezel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
            className="group/fleet rounded-[2.6rem] bg-[#0B3B24]/[0.04] p-2 sm:p-2.5 ring-1 ring-[#0B3B24]/10 shadow-[0_24px_50px_rgba(11,59,36,0.06)] hover:shadow-[0_32px_64px_rgba(11,59,36,0.12)] transition-all duration-500"
          >
            {/* Double-Bezel Inner Core */}
            <div className="overflow-hidden rounded-[calc(2.6rem-0.625rem)] bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.95)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/assets/transfers/kdh-van.jpg"
                  alt="Luxury Toyota KDH Van on Sri Lanka expressway"
                  fill
                  className="object-cover transition-transform duration-700 group-hover/fleet:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 z-10">
                  <span className="rounded-full bg-[#F5A623] text-white px-4 py-1.5 font-mono text-xs font-bold shadow-md">
                    From LKR 8,000
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display1 text-2xl font-bold text-[#0B3B24]">Luxury Toyota KDH Van</h3>
                    <p className="mt-1 text-xs text-[#667085]">Flat-Roof &amp; High-Roof Available (Toyota HiAce Super GL)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B3B24] bg-[#0B3B24]/10 px-3 py-1 rounded-full">
                      <Users className="size-3.5" /> 4–8 Guests
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B3B24] bg-[#0B3B24]/10 px-3 py-1 rounded-full">
                      <Luggage className="size-3.5" /> 6–8 Bags
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-[#667085] leading-relaxed">
                  Spacious luxury travel for families, surf groups with board bags, and luggage-heavy itineraries.
                  High panoramic windows and individual rear A/C vents for ultimate panoramic comfort.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[#0B3B24]/10 pt-6 text-xs text-[#344054]">
                  <div className="flex items-center gap-2">
                    <Wind className="size-4 text-[#F5A623]" />
                    <span>Individual Rear Air Vents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Luggage className="size-4 text-[#F5A623]" />
                    <span>Surfboard &amp; Stroller Space</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-[#F5A623]" />
                    <span>Reclining Plush Seats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-[#F5A623]" />
                    <span>Certified Long-Haul Driver</span>
                  </div>
                </div>

                {/* Contact Page WhatsApp Button */}
                <div className="mt-8">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                      "Hello Tarragon Leisure! I would like to book a Luxury Toyota KDH Van transfer."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex w-full items-center justify-between rounded-full bg-[#25D366] hover:bg-[#20bd5a] pl-6 pr-2 py-2.5 text-xs font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-sm"
                  >
                    <span>Book KDH Van on WhatsApp</span>
                    <div className="flex size-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:scale-110 group-hover/btn:translate-x-0.5">
                      <WhatsAppIcon className="size-4" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── The Tarragon Chauffeur Standard (Double-Bezel Bento Grid) ──────── */}
      <section className="bg-[#0B3B24] py-20 sm:py-28 text-white relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div
          className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)" }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[#F5A623] font-semibold">
              The Tarragon Standard
            </p>
            <h2 className="mt-3 font-display1 text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Why Discerning Travelers Choose Us
            </h2>
            <p className="mt-4 text-base text-white/75 leading-relaxed">
              We eliminate the uncertainty and stress of island travel with certified chauffeurs,
              pre-paid expressway tolls, and dependable door-to-door luxury.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Bento Card 1 - Double Bezel */}
            <div className="rounded-[2.2rem] bg-white/[0.04] p-1.5 ring-1 ring-white/10 backdrop-blur-sm">
              <div className="h-full rounded-[calc(2.2rem-0.375rem)] bg-white/[0.06] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#F5A623]/20 text-[#F5A623]">
                  <Shield className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">100% Tolls Included</h3>
                <p className="mt-2 text-xs text-white/70 leading-relaxed">
                  Southern Expressway (E01) tolls and airport terminal parking fees are fully pre-paid. No awkward meter negotiations.
                </p>
              </div>
            </div>

            {/* Bento Card 2 - Double Bezel */}
            <div className="rounded-[2.2rem] bg-white/[0.04] p-1.5 ring-1 ring-white/10 backdrop-blur-sm">
              <div className="h-full rounded-[calc(2.2rem-0.375rem)] bg-white/[0.06] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#287A71]/30 text-[#48b3a7]">
                  <Plane className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">Airport Paging Service</h3>
                <p className="mt-2 text-xs text-white/70 leading-relaxed">
                  Your chauffeur tracks your incoming flight in real time and awaits your arrival in the terminal with a personalized nameboard.
                </p>
              </div>
            </div>

            {/* Bento Card 3 - Double Bezel */}
            <div className="rounded-[2.2rem] bg-white/[0.04] p-1.5 ring-1 ring-white/10 backdrop-blur-sm">
              <div className="h-full rounded-[calc(2.2rem-0.375rem)] bg-white/[0.06] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#F5A623]/20 text-[#F5A623]">
                  <Clock className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">15m–1hr Fast Dispatch</h3>
                <p className="mt-2 text-xs text-white/70 leading-relaxed">
                  Need an urgent ride from your hotel? Our dedicated local driver network across Mirissa &amp; Weligama responds rapidly.
                </p>
              </div>
            </div>

            {/* Bento Card 4 - Double Bezel */}
            <div className="rounded-[2.2rem] bg-white/[0.04] p-1.5 ring-1 ring-white/10 backdrop-blur-sm">
              <div className="h-full rounded-[calc(2.2rem-0.375rem)] bg-white/[0.06] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#287A71]/30 text-[#48b3a7]">
                  <Navigation className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">Certified Local Guides</h3>
                <p className="mt-2 text-xs text-white/70 leading-relaxed">
                  Friendly, polite English-speaking chauffeurs who know the safest routes, best scenic photo spots, and hidden gems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How to Book (Double-Bezel 3-Step Flow) ─────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#287A71] font-bold">
            Seamless Process
          </p>
          <h2 className="mt-3 font-display1 text-3xl sm:text-5xl font-semibold tracking-tight text-[#0B3B24]">
            How to Book in 3 Simple Steps
          </h2>
          <p className="mt-3 text-base text-[#667085]">
            No complicated forms or payment hurdles. Direct, human booking in minutes.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "Message Us on WhatsApp",
              desc: "Share your pickup location, destination, date, preferred time, and passenger count.",
            },
            {
              step: "02",
              title: "Instant Confirmation",
              desc: "We confirm your vehicle assignment and guaranteed fixed price within minutes.",
            },
            {
              step: "03",
              title: "Doorstep Chauffeur Pickup",
              desc: "Your chauffeur arrives at your hotel or airport terminal on time. Relax and enjoy the ride.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="rounded-[2.2rem] bg-[#0B3B24]/[0.03] p-1.5 ring-1 ring-[#0B3B24]/10 shadow-[0_12px_36px_rgba(11,59,36,0.03)]"
            >
              {/* Double-Bezel Inner Core */}
              <div className="relative flex flex-col items-center rounded-[calc(2.2rem-0.375rem)] bg-white p-7 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                <div className="flex size-14 items-center justify-center rounded-full bg-[#0B3B24] font-display1 text-xl font-bold text-[#F5A623] shadow-md">
                  {s.step}
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-[#0B3B24]">{s.title}</h3>
                <p className="mt-2 text-xs text-[#667085] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Us WhatsApp Button Styling */}
        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
              "Hello Tarragon Leisure! I would like to book a private transfer."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] pl-6 pr-2 py-2 text-white font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-md hover:scale-105"
          >
            <span className="text-sm font-semibold">Message Us on WhatsApp Now</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 group-hover:translate-x-0.5">
              <WhatsAppIcon className="size-5" />
            </div>
          </a>
        </div>
      </section>

      {/* ─── Frequently Asked Questions (Double-Bezel Accordion) ─────────────── */}
      <section className="bg-[#FCFAF5] py-20 sm:py-28 border-t border-[#0B3B24]/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[#287A71] font-bold">
              Got Questions?
            </p>
            <h2 className="mt-3 font-display1 text-3xl sm:text-5xl font-semibold tracking-tight text-[#0B3B24]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-[#0B3B24]/[0.03] p-1 ring-1 ring-[#0B3B24]/10 transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="overflow-hidden rounded-[calc(1rem-0.125rem)] bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left font-display font-semibold text-sm sm:text-base text-[#0B3B24]"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span
                        className={`flex size-6 shrink-0 items-center justify-center rounded-full bg-[#0B3B24]/5 text-[#0B3B24] transition-transform duration-300 ${
                          isOpen ? "rotate-180 bg-[#0B3B24] text-white" : ""
                        }`}
                      >
                        <ChevronDown className="size-4" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                          className="overflow-hidden px-6 pb-6 pt-0"
                        >
                          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed border-t border-[#0B3B24]/5 pt-4">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Fallback */}
          <div className="mt-12 text-center text-xs text-[#667085]">
            Have a custom destination or multi-day chauffeur inquiry?{" "}
            <Link href="/contact" className="font-semibold text-[#0B3B24] underline hover:text-[#287A71]">
              Contact our travel desk
            </Link>{" "}
            or call us on{" "}
            <a href={`tel:${siteConfig.phone.split("/")[0].trim()}`} className="font-semibold text-[#0B3B24]">
              {siteConfig.phone.split("/")[0].trim()}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
