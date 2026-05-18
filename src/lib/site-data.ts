import type { Category, Destination, Service, Tour } from "@/types/site";

export const images = {
  logo: "/assets/tarragon/K-0020-white.png",
  sigiriya: "/assets/tarragon/sigiriya.jpg",
  yala: "/assets/tarragon/yala-safari.jpg",
  ella: "/assets/tarragon/ella.jpg",
  surf: "/assets/tarragon/surf.jpg",
  kandy: "/assets/tarragon/kandy.jpg",
  kumana: "/assets/tarragon/Kumana-National-Park-Safari.jpg",
  kudumbigala: "/assets/tarragon/kudumbigala-monastery.jpg",
  teaching: "/assets/tarragon/a-cool-day-of-teaching.jpg",
  arugamWebp: "/assets/tarragon/ArugamBay.webp",
  arugam4: "/assets/tarragon/Arugam-Bay-4.jpg",
  colombo: "/assets/tarragon/colombo-sri-lanka.jpg",
  lotus: "/assets/tarragon/lotus-tower.jpg",
  stock1: "/assets/tarragon/StockSnap_J45DTZD2VJ.jpg",
  stock2: "/assets/tarragon/StockSnap_8B828310AC.jpg",
  sl: "/assets/tarragon/sl.jpg",
  galle: "/assets/tarragon/sl.jpg",
  hero:"/assets/tarragon/AI2.png",
  hero1:"/assets/tarragon/smoothly_generate_video_form_t.mp4",
  hero_vid:"/assets/tarragon/Hero_Vid Final1.mp4",
  contact: "/assets/tarragon/tour-7.jpg",
} as const;

export const categories: Category[] = [
  {
    title: "Cultural Heritage",
    blurb:
      "Explore Sri Lanka's history with UNESCO sites, ancient temples, and cultural landmarks.",
    image: images.sigiriya,
  },
  {
    title: "Outdoor Adventures",
    blurb:
      "Embark on thrilling adventures with hikes, surfing, safaris, and more for adrenaline seekers.",
    image: images.surf,
  },
  {
    title: "Wildlife & Nature",
    blurb:
      "Experience the beauty of Sri Lanka's wildlife in stunning national parks and serene rainforests.",
    image: images.yala,
  },
  {
    title: "Beach Escapes",
    blurb:
      "Relax on pristine shores, soak up the sun, and unwind with scenic beach views and water activities.",
    image: images.arugamWebp,
  },
  {
    title: "Wellness & Retreats",
    blurb:
      "Indulge in Ayurveda, yoga, and peaceful retreats to rejuvenate your body and mind.",
    image: images.ella,
  },
];

export const destinations: Destination[] = [
  {
    slug: "yala",
    name: "Yala National Park",
    image: images.yala,
    blurb:
      "One of the best places in Sri Lanka for wildlife safaris, famous for its leopard population. Visitors can also spot elephants, sloth bears, and a variety of bird species in this diverse ecosystem.",
  },
  {
    slug: "ella",
    name: "Ella",
    image: images.ella,
    blurb:
      "A charming hill station known for its lush tea plantations, stunning landscapes, and hiking opportunities. Key attractions include the Nine Arches Bridge, Little Adam's Peak, and Ella Rock.",
  },
  {
    slug: "galle",
    name: "Galle",
    image: images.galle,
    blurb:
      "Renowned for its well-preserved colonial architecture and the historic Galle Fort, a UNESCO World Heritage Site. The fort area features charming streets, boutiques, cafes, and beautiful ocean views.",
  },
  {
    slug: "kandy",
    name: "Kandy",
    image: images.kandy,
    blurb:
      "Famous for the Temple of the Tooth, which houses a sacred relic of the Buddha. Kandy is also known for its picturesque lake, botanical gardens, and cultural performances.",
  },
  {
    slug: "sigiriya",
    name: "Sigiriya",
    image: images.sigiriya,
    blurb:
      "Known for the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site. Visitors can explore ancient frescoes, water gardens, and climb to the summit for stunning views.",
  },
  {
    slug: "colombo",
    name: "Colombo",
    image: images.colombo,
    blurb:
      "Sri Lanka's vibrant capital - a mix of modern skyline, colonial-era buildings, bustling markets, and beachfront promenades along Galle Face Green.",
  },
  {
    slug: "arugam-bay",
    name: "Arugam Bay",
    image: images.arugamWebp,
    blurb:
      "A world-class surfing destination on the east coast with laid-back vibes, golden beaches, and access to Kumana National Park.",
  },
  {
    slug: "mirissa",
    name: "Mirissa",
    image: images.stock2,
    blurb:
      "A picturesque coastal town famed for whale watching, palm-fringed beaches, and stunning sunsets.",
  },
  {
    slug: "nuwara-eliya",
    name: "Nuwara Eliya",
    image: images.teaching,
    blurb:
      "'Little England' - cool climate, rolling tea estates, colonial bungalows, and Horton Plains nearby.",
  },
  {
    slug: "anuradhapura",
    name: "Anuradhapura",
    image: images.stock1,
    blurb:
      "An ancient sacred city with vast stupas, monasteries, and the sacred Bodhi tree.",
  },
  {
    slug: "polonnaruwa",
    name: "Polonnaruwa",
    image: images.kudumbigala,
    blurb:
      "A medieval capital filled with well-preserved ruins, royal palaces, and rock-carved Buddhas.",
  },
  {
    slug: "trincomalee",
    name: "Trincomalee",
    image: images.sl,
    blurb:
      "A natural deepwater harbour on the east coast with pristine beaches, coral reefs and historic temples.",
  },
];

export const tours: Tour[] = [
  {
    slug: "arugam-bay-the-surfing-paradise",
    title: "The Surfing Paradise",
    location: "Arugam Bay",
    duration: "5 days",
    groupSize: 20,
    price: null,
    featured: true,
    image: images.arugamWebp,
    gallery: [images.arugamWebp, images.arugam4, images.kumana, images.kudumbigala],
    summary:
      "Ride world-class waves, explore Kumana National Park, and unwind on the laid-back east coast of Sri Lanka.",
    highlights: [
      "Surf the iconic Main Point break",
      "Safari in Kumana National Park",
      "Visit Kudumbigala Monastery",
      "Sunset beach BBQ",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Beach Welcome",
        details:
          "Transfer from Colombo, check-in, sunset welcome dinner on the beach.",
      },
      {
        day: "Day 2",
        title: "Surf Lessons",
        details:
          "Morning and afternoon sessions at Baby Point with certified instructors.",
      },
      {
        day: "Day 3",
        title: "Kumana Safari",
        details: "Full-day jeep safari with picnic lunch in the park.",
      },
      {
        day: "Day 4",
        title: "Heritage & Lagoon",
        details: "Visit Kudumbigala Monastery and a lagoon boat ride.",
      },
      {
        day: "Day 5",
        title: "Departure",
        details: "Free morning, transfer back to Colombo.",
      },
    ],
  },
  {
    slug: "colombo-the-vibrant-capital",
    title: "The Vibrant Capital",
    location: "Colombo, Sri Lanka",
    duration: "2 days",
    groupSize: 20,
    price: 200,
    featured: true,
    image: images.colombo,
    gallery: [images.colombo, images.lotus, images.stock1],
    summary:
      "A two-day immersion in Sri Lanka's bustling capital - colonial heritage, modern skyline, street food and Galle Face sunsets.",
    highlights: [
      "Lotus Tower observation deck",
      "Pettah market walk",
      "Galle Face Green at sunset",
      "Gangaramaya Temple visit",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "City Highlights",
        details:
          "Independence Square, Gangaramaya Temple, Pettah market, sunset at Galle Face.",
      },
      {
        day: "Day 2",
        title: "Modern Colombo",
        details: "Lotus Tower, art galleries, rooftop dinner.",
      },
    ],
  },
  {
    slug: "sigiriya-rock-fortress-discovery",
    title: "Sigiriya Rock Fortress Discovery",
    location: "Sigiriya",
    duration: "3 days",
    groupSize: 16,
    price: 320,
    featured: true,
    image: images.sigiriya,
    gallery: [images.sigiriya, images.kandy, images.ella],
    summary:
      "Climb the legendary Lion Rock, explore the cave temples of Dambulla, and experience cultural Sri Lanka.",
    highlights: [
      "Sunrise climb of Sigiriya",
      "Dambulla cave temples",
      "Village cycling tour",
      "Traditional Sri Lankan cooking class",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Sigiriya",
        details: "Check-in, evening village walk.",
      },
      {
        day: "Day 2",
        title: "Sigiriya & Dambulla",
        details: "Sunrise climb, afternoon at Dambulla caves.",
      },
      {
        day: "Day 3",
        title: "Departure",
        details: "Cooking class and transfer.",
      },
    ],
  },
  {
    slug: "yala-wildlife-safari",
    title: "Yala Wildlife Safari",
    location: "Yala National Park",
    duration: "3 days",
    groupSize: 12,
    price: 380,
    image: images.yala,
    gallery: [images.yala, images.kumana, images.kudumbigala],
    summary:
      "Track leopards, elephants and sloth bears through Sri Lanka's most famous national park.",
    highlights: [
      "Two full-day jeep safaris",
      "Luxury tented camp",
      "Birdwatching at Bundala",
      "Beachside dinner at Kirinda",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Evening Safari",
        details: "Transfer to camp, short evening drive.",
      },
      {
        day: "Day 2",
        title: "Full-Day Safari",
        details: "Sunrise to sunset in the park with packed meals.",
      },
      {
        day: "Day 3",
        title: "Bundala & Departure",
        details: "Morning birdwatching, transfer back.",
      },
    ],
  },
  {
    slug: "ella-hill-country-escape",
    title: "Ella Hill Country Escape",
    location: "Ella",
    duration: "4 days",
    groupSize: 14,
    price: 420,
    image: images.ella,
    gallery: [images.ella, images.teaching, images.kandy],
    summary:
      "Tea plantations, scenic train rides, and the iconic Nine Arches Bridge in Sri Lanka's hill country.",
    highlights: [
      "Kandy to Ella scenic train",
      "Little Adam's Peak hike",
      "Tea factory tour",
      "Nine Arches Bridge sunrise",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Train to Ella",
        details: "Board the famous blue train from Kandy.",
      },
      {
        day: "Day 2",
        title: "Hikes & Bridges",
        details: "Little Adam's Peak and Nine Arches.",
      },
      {
        day: "Day 3",
        title: "Tea Country",
        details: "Tea factory and plantation walk.",
      },
      {
        day: "Day 4",
        title: "Departure",
        details: "Transfer to Colombo.",
      },
    ],
  },
  {
    slug: "galle-coastal-heritage",
    title: "Galle Coastal Heritage",
    location: "Galle",
    duration: "3 days",
    groupSize: 18,
    price: 280,
    image: images.galle,
    gallery: [images.galle, images.stock1, images.stock2],
    summary:
      "Wander the cobbled streets of Galle Fort, swim at Unawatuna, and watch sunsets over the ramparts.",
    highlights: [
      "Galle Fort guided walk",
      "Lighthouse and ramparts at sunset",
      "Unawatuna beach day",
      "Stilt fishermen of Koggala",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Fort Walk",
        details: "Check-in inside the Fort, evening walk.",
      },
      {
        day: "Day 2",
        title: "Beach & Boutiques",
        details: "Unawatuna swim and Fort shopping.",
      },
      {
        day: "Day 3",
        title: "Departure",
        details: "Stilt fishermen visit, return transfer.",
      },
    ],
  },
];

export const services: Service[] = [
  {
    title: "Family-Friendly Tours",
    blurb:
      "Carefully paced itineraries with activities everyone - from toddlers to grandparents - will love.",
    image: images.stock2,
  },
  {
    title: "Beach Holidays",
    blurb:
      "From Mirissa to Arugam Bay, sun-soaked stays with snorkeling, surfing and seafood.",
    image: images.arugamWebp,
  },
  {
    title: "City Tours",
    blurb: "Discover Colombo, Galle and Kandy with expert local guides.",
    image: images.colombo,
  },
  {
    title: "Honeymoon Tours",
    blurb:
      "Romantic escapes blending boutique stays, private dinners and unforgettable experiences.",
    image: images.ella,
  },
  {
    title: "Wildlife Safaris",
    blurb:
      "Yala, Wilpattu, Udawalawe and Kumana - Sri Lanka's best wildlife under expert naturalists.",
    image: images.yala,
  },
  {
    title: "Customized Tours",
    blurb:
      "Tell us your dream trip - we design a one-of-a-kind itinerary just for you.",
    image: images.sigiriya,
  },
];
