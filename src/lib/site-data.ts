import type { Category, Destination, Service, Tour } from "@/types/site";

export const images = {
  logo: "/assets/tarragon/logo-white.png",
  sigiriya2: "/assets/tarragon/sigiriya.webp",
  heritage: "/assets/tarragon/heritage.jpg",
  yala: "/assets/tarragon/yala.png",
  ella: "/assets/tarragon/ella-2.jpg",
  ella2: "/assets/tarragon/ella.webp",
  surf: "/assets/tarragon/surf.jpg",
  outdoor: "/assets/tarragon/young-man-doing-wakeboarding-in-a-lake-whit-mounta-2026-01-08-02-41-01-utc (1).jpg",
  kandy: "/assets/tarragon/kandy-1.jpg",
  kandy2: "/assets/tarragon/kandy-2.webp",
  teaching: "/assets/tarragon/teaching.jpg",
  sun_set: "/assets/tarragon/tropical-sunset.webp",
  arugamWebp: "/assets/tarragon/arugam-bay.webp",
  colombo: "/assets/tarragon/Colombo_night.webp",
  colombo2: "/assets/tarragon/colombo-2.webp",
  lotus: "/assets/tarragon/lotus-tower-alt.jpg",
  sl: "/assets/tarragon/sri-lanka.jpg",
  galle: "/assets/tarragon/sri-lanka.jpg",
  hero: "/assets/tarragon/hero-image.png",
  hero1: "/assets/tarragon/hero-video-alt.mp4",
  hero_vid: "/assets/tarragon/hero-video.mp4",
  contact: "/assets/tarragon/galle-fort.webp",
  wild: "/assets/tarragon/majestic-leopard-lounging-on-a-rocky-surface-in-a-2026-03-25-04-09-33-utc.webp",
  wellness: "/assets/tarragon/concept-of-spa-relax-and-self-care-with-beautiful-2026-01-09-07-11-51-utc (1) (1) (1).jpg",
  honeymoon2: "/assets/tarragon/honeymoon-2.webp",
  family: "/assets/tarragon/family-2.jpg",
  mirissa: "/assets/tarragon/mirissa.webp",
  eliya: "/assets/tarragon/nuwara-eliya.webp",
  trinco: "/assets/tarragon/trinco.webp",
  anuradhapura2: "/assets/tarragon/anuradhapura-2.webp",
  polonnaruwa: "/assets/tarragon/polonnaruwa.webp",
  beach: "/assets/tarragon/beaches.jpg",
  surfing: "/assets/tarragon/surf-twomen.webp",
} as const;

export const categories: Category[] = [
  {
    title: "Cultural Heritage",
    blurb:
      "Explore Sri Lanka's history with UNESCO sites, ancient temples, and cultural landmarks.",
    image: images.heritage,
  },
  {
    title: "Outdoor Adventures",
    blurb:
      "Embark on thrilling adventures with hikes, surfing, safaris, and more for adrenaline seekers.",
    image: images.outdoor,
  },
  {
    title: "Wildlife & Nature",
    blurb:
      "Experience the beauty of Sri Lanka's wildlife in stunning national parks and serene rainforests.",
    image: images.wild,
  },
  {
    title: "Beach Escapes",
    blurb:
      "Relax on pristine shores, soak up the sun, and unwind with scenic beach views and water activities.",
    image: images.beach,
  },
  {
    title: "Wellness & Retreats",
    blurb:
      "Indulge in Ayurveda, yoga, and peaceful retreats to rejuvenate your body and mind.",
    image: images.wellness,
  },
];

export const destinations: Destination[] = [
  {
    slug: "yala",
    name: "Yala National Park",
    image: images.yala,
    category: "WILDLIFE",
    blurb:
      "One of the best places in Sri Lanka for wildlife safaris, famous for its leopard population. Visitors can also spot elephants, sloth bears, and a variety of bird species in this diverse ecosystem.",
    description: "Yala National Park is Sri Lanka's most famous wildlife sanctuary, hugging the island's southeastern coastline. It offers incredible biodiversity and is celebrated globally for having one of the highest leopard densities in the world.",
    highlights: [
      "Spotting elusive leopards in Block 1",
      "Watching herds of roaming elephants",
      "Exploring ancient Buddhist ruins inside the park"
    ],
    bestSeason: "February – July",
    activities: [
      "Morning and evening jeep safaris",
      "Wildlife photography",
      "Bird watching in the lagoons"
    ],
    quickFacts: {
      "Area": "979 sq km",
      "Status": "Designated Wildlife Sanctuary since 1900",
      "Altitude": "0-30 meters"
    },
    localTips: [
      "Opt for a morning safari arriving at the gate by 5:30 AM for the best chance to see leopards.",
      "Bring a zoom lens of at least 300mm for wildlife photography."
    ],
    gallery: [
      images.yala,
      images.colombo,
      images.sl
    ]
  },
  {
    slug: "ella",
    name: "Ella",
    image: images.ella2,
    category: "HILLS",
    blurb:
      "A charming hill station known for its lush tea plantations, stunning landscapes, and hiking opportunities. Key attractions include the Nine Arches Bridge, Little Adam's Peak, and Ella Rock.",
    description: "Ella is a picturesque hill-country village surrounded by misty tea plantations and forested peaks. Famous for its relaxed vibe and stunning hiking trails, it serves as the perfect base for exploring Sri Lanka's central highlands.",
    highlights: [
      "Nine Arches Bridge",
      "Ella Rock",
      "Little Adam's Peak",
      "Ravana Falls"
    ],
    bestSeason: "January – May",
    activities: [
      "Hiking to Ella Rock",
      "Watching the train cross the Nine Arches Bridge",
      "Touring a tea factory",
      "Taking a cooking class"
    ],
    quickFacts: {
      "Altitude": "1,041 m",
      "Climate": "Cool and misty",
      "Province": "Uva Province"
    },
    localTips: [
      "Hike Little Adam's Peak at sunrise for breathtaking views before the heat and mist roll in.",
      "Book your scenic train ticket from Kandy well in advance as it sells out quickly."
    ],
    gallery: [
      images.ella,
      images.yala,
      images.sl
    ]
  },
  {
    slug: "galle",
    name: "Galle",
    image: images.galle,
    category: "COASTAL",
    blurb:
      "Renowned for its well-preserved colonial architecture and the historic Galle Fort, a UNESCO World Heritage Site. The fort area features charming streets, boutiques, cafes, and beautiful ocean views.",
    description: "Galle is a captivating coastal city that perfectly blends its colonial past with vibrant tropical beauty. Its centerpiece is the historic Galle Fort, a beautifully preserved architectural marvel built by the Portuguese and Dutch.",
    highlights: [
      "Galle Fort and its ramparts",
      "Historic Galle Lighthouse",
      "Dutch Reformed Church",
      "Boutique shops and cafes"
    ],
    bestSeason: "December – April",
    activities: [
      "Walking along the fort walls at sunset",
      "Exploring colonial architecture",
      "Shopping for gems and local crafts",
      "Visiting the maritime museum"
    ],
    quickFacts: {
      "UNESCO Status": "World Heritage Site since 1988",
      "Established": "Fortified in 1588",
      "Province": "Southern Province"
    },
    localTips: [
      "Visit the fort ramparts just before sunset for the best views and a spectacular atmosphere.",
      "Try the local seafood dishes at the cafes tucked inside the fort's narrow cobblestone streets."
    ],
    gallery: [
      images.galle,
      images.sun_set,
      images.sl
    ]
  },
  {
    slug: "kandy",
    name: "Kandy",
    image: images.kandy2,
    category: "HERITAGE",
    blurb:
      "Famous for the Temple of the Tooth, which houses a sacred relic of the Buddha. Kandy is also known for its picturesque lake, botanical gardens, and cultural performances.",
    description: "Surrounded by lush mountains, Kandy is the cultural capital of Sri Lanka and the last royal capital of the island's ancient kings. The city is centered around a scenic lake and is revered as the home of the sacred Temple of the Tooth Relic.",
    highlights: [
      "Temple of the Sacred Tooth Relic",
      "Royal Botanical Gardens in Peradeniya",
      "Kandy Lake",
      "Udawatta Kele Sanctuary"
    ],
    bestSeason: "January – April",
    activities: [
      "Attending a traditional Kandyan dance performance",
      "Strolling through the botanical gardens",
      "Boating on Kandy Lake",
      "Visiting the Ceylon Tea Museum"
    ],
    quickFacts: {
      "Altitude": "500 m",
      "UNESCO Status": "World Heritage Site since 1988",
      "Significance": "Last capital of the ancient kings' era"
    },
    localTips: [
      "Dress modestly when visiting the Temple of the Tooth, ensuring shoulders and knees are covered.",
      "Try to visit during the Esala Perahera festival in July/August to witness spectacular cultural parades."
    ],
    gallery: [
      images.kandy,
      images.teaching,
      images.ella
    ]
  },
  {
    slug: "sigiriya",
    name: "Sigiriya",
    image: images.sigiriya2,
    category: "HERITAGE",
    blurb:
      "Known for the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site. Visitors can explore ancient frescoes, water gardens, and climb to the summit for stunning views.",
    description: "Sigiriya, or the 'Lion Rock', is an ancient rock fortress and palace ruin dominating the surrounding jungle landscape. This astonishing feat of engineering and art features beautiful frescoes, water gardens, and a dramatic climb to the summit.",
    highlights: [
      "The Lion Gate",
      "Ancient frescoes of maidens",
      "The Mirror Wall",
      "Intricate water gardens at the base"
    ],
    bestSeason: "January – April",
    activities: [
      "Climbing the 1,200 steps to the summit",
      "Exploring the royal gardens",
      "Hiking Pidurangala Rock for sunset views of Sigiriya",
      "Cycling around the ancient ruins"
    ],
    quickFacts: {
      "Height": "200 meters (660 ft) rock column",
      "UNESCO Status": "World Heritage Site since 1982",
      "Era": "Built by King Kashyapa (477 – 495 CE)"
    },
    localTips: [
      "Start your climb as soon as the site opens at 7:00 AM to avoid the intense midday heat and large crowds.",
      "Beware of the resident monkeys and wasp nests on the rock; do not feed the wildlife or make loud noises."
    ],
    gallery: [
      images.sigiriya2,
      images.sun_set,
      images.sigiriya2
    ]
  },
  {
    slug: "colombo",
    name: "Colombo",
    image: images.colombo,
    category: "COASTAL",
    blurb:
      "Sri Lanka's vibrant capital - a mix of modern skyline, colonial-era buildings, bustling markets, and beachfront promenades along Galle Face Green.",
    description: "Colombo is the bustling commercial capital of Sri Lanka, a vibrant metropolis that reflects the island's mix of diverse cultures and colonial history. From historic temples to modern skyscrapers and lively markets, it is a city of exciting contrasts.",
    highlights: [
      "Gangaramaya Temple",
      "Galle Face Green",
      "Pettah Floating Market",
      "National Museum of Colombo",
      "Lotus Tower"
    ],
    bestSeason: "January – March",
    activities: [
      "Eating street food at Galle Face Green",
      "Shopping at Pettah Market",
      "Enjoying the views from the Lotus Tower",
      "Taking a Tuk-Tuk city tour"
    ],
    quickFacts: {
      "Population": "Over 5.6 million (metro)",
      "Status": "Commercial Capital",
      "Area": "37.31 sq km"
    },
    localTips: [
      "Use ride-hailing apps like PickMe or Uber for transparent Tuk-Tuk fares.",
      "Spend an evening strolling along Galle Face Green to experience the local street food and ocean breeze."
    ],
    gallery: [
      images.colombo,
      images.lotus,
      images.colombo2
    ]
  },
  {
    slug: "arugam-bay",
    name: "Arugam Bay",
    image: images.surfing,
    category: "COASTAL",
    blurb:
      "A world-class surfing destination on the east coast with laid-back vibes, golden beaches, and access to Kumana National Park.",
    description: "Arugam Bay is a laid-back coastal town on the east coast, famous for its world-class surf breaks and relaxed bohemian atmosphere. Beyond surfing, it offers pristine beaches, lagoon safaris, and proximity to excellent wildlife parks.",
    highlights: [
      "Main Point surf break",
      "Elephant Rock",
      "Muhudu Maha Viharaya",
      "Kumana National Park nearby",
      "Kudumbigala Monastery"
    ],
    bestSeason: "May – September",
    activities: [
      "Surfing and taking surf lessons",
      "Lagoon safari at Pottuvil or Panama",
      "Wildlife spotting in Kumana",
      "Beachside yoga"
    ],
    quickFacts: {
      "Vibe": "Surfer town",
      "Coast": "East Coast",
      "Key Attraction": "Top 10 surf destination in the world"
    },
    localTips: [
      "Rent a scooter to easily travel between different surf breaks and hidden beaches.",
      "Visit Kumana National Park for a quieter, less crowded alternative to Yala."
    ],
    gallery: [
      images.surfing,
      images.mirissa,
      images.surf
    ]
  },
  {
    slug: "mirissa",
    name: "Mirissa",
    image: images.mirissa,
    category: "COASTAL",
    blurb:
      "A picturesque coastal town famed for whale watching, palm-fringed beaches, and stunning sunsets.",
    description: "Mirissa is a vibrant coastal town in the south known for its golden beaches, vibrant nightlife, and incredible marine life. It is widely considered one of the best places in the world to witness blue whales in their natural habitat.",
    highlights: [
      "Whale watching off the coast",
      "Coconut Tree Hill",
      "Secret Beach",
      "Parrot Rock"
    ],
    bestSeason: "December – April",
    activities: [
      "Whale and dolphin watching tours",
      "Surfing and snorkeling",
      "Enjoying beachfront seafood dinners",
      "Relaxing on Mirissa Beach"
    ],
    quickFacts: {
      "Coast": "South Coast",
      "Famous for": "Blue whale sightings",
      "Vibe": "Lively beach town"
    },
    localTips: [
      "Choose an ethical, registered whale watching operator that respects the animals' space.",
      "Visit Coconut Tree Hill early in the morning to get photos without the large crowds."
    ],
    gallery: [
      images.surf,
      images.sun_set,
      images.sl
    ]
  },
  {
    slug: "nuwara-eliya",
    name: "Nuwara Eliya",
    image: images.eliya,
    category: "HILLS",
    blurb:
      "'Little England' - cool climate, rolling tea estates, colonial bungalows, and Horton Plains nearby.",
    description: "Often referred to as 'Little England', Nuwara Eliya is characterized by its colonial-era bungalows, manicured gardens, and cool climate. Nestled in the heart of tea country, it offers a refreshing contrast to the island's tropical coastal areas.",
    highlights: [
      "Gregory Lake",
      "Hakgala Botanical Garden",
      "Pedro Tea Estate",
      "Victoria Park",
      "Lover's Leap Waterfall"
    ],
    bestSeason: "February – April",
    activities: [
      "Touring a working tea factory",
      "Boating or cycling around Gregory Lake",
      "Playing golf at the Nuwara Eliya Golf Club",
      "Hiking in Horton Plains to World's End"
    ],
    quickFacts: {
      "Altitude": "1,868 m",
      "Climate": "Subtropical highland (cool)",
      "Established": "Founded by Samuel Baker in 1846"
    },
    localTips: [
      "Pack warm clothing, including a jacket or sweater, as temperatures can drop significantly at night.",
      "Stop for a high tea experience at one of the old colonial hotels to step back in time."
    ],
    gallery: [
      images.eliya,
      images.ella,
      images.sl
    ]
  },
  {
    slug: "trincomalee",
    name: "Trincomalee",
    image: images.trinco,
    category: "COASTAL",
    blurb:
      "A natural deepwater harbour on the east coast with pristine beaches, coral reefs and historic temples.",
    description: "Located on the northeast coast, Trincomalee is built around one of the world's deepest natural harbors and features stunning white sand beaches. The area boasts a rich history, ancient Hindu temples, and excellent opportunities for diving and whale watching.",
    highlights: [
      "Koneswaram Temple (Temple of a Thousand Pillars)",
      "Fort Fredrick",
      "Pigeon Island National Park",
      "Nilaveli and Uppuveli beaches",
      "Marble Beach"
    ],
    bestSeason: "May – October",
    activities: [
      "Snorkeling with reef sharks at Pigeon Island",
      "Whale watching (Blue and Sperm whales)",
      "Relaxing on Nilaveli Beach",
      "Exploring Fort Fredrick and the deer that roam there"
    ],
    quickFacts: {
      "Harbor": "5th largest natural harbor in the world",
      "Coast": "East Coast",
      "Key Attraction": "Pigeon Island Marine Sanctuary"
    },
    localTips: [
      "If planning to snorkel at Pigeon Island, go early in the morning to enjoy better visibility and fewer crowds.",
      "When visiting Koneswaram Temple, enjoy the incredible panoramic ocean views from Swami Rock."
    ],
    gallery: [
      images.surf,
      images.sun_set,
      images.sl
    ]
  },
  {
    slug: "anuradhapura",
    name: "Anuradhapura",
    image: images.anuradhapura2,
    category: "HERITAGE",
    blurb:
      "An ancient sacred city with vast stupas, monasteries, and the sacred Bodhi tree.",
    description: "Anuradhapura is one of the ancient capitals of Sri Lanka, renowned for its well-preserved ruins of ancient Sinhala civilization. As a major center of Theravada Buddhism, it is home to magnificent stupas, ancient pools, and the sacred Bodhi Tree.",
    highlights: [
      "Jaya Sri Maha Bodhi (Sacred Fig Tree)",
      "Ruwanwelisaya Stupa",
      "Jetavanaramaya",
      "Abhayagiri Vihāra",
      "Kuttam Pokuna (Twin Ponds)"
    ],
    bestSeason: "July – September, January – March",
    activities: [
      "Cycling through the ancient city ruins",
      "Participating in Buddhist rituals at the Bodhi Tree",
      "Exploring the archaeological museum",
      "Photographing the massive brick stupas"
    ],
    quickFacts: {
      "UNESCO Status": "World Heritage Site since 1982",
      "Era": "Capital from 4th century BCE to 11th century CE",
      "Significance": "First ancient capital of Sri Lanka"
    },
    localTips: [
      "Rent a bicycle to explore the vast complex as walking between monuments can be exhausting.",
      "Wear easily removable sandals, as you must take off your shoes frequently when entering temple grounds."
    ],
    gallery: [
      images.teaching,
      images.eliya,
      images.sl
    ]
  },
  {
    slug: "polonnaruwa",
    name: "Polonnaruwa",
    image: images.polonnaruwa,
    category: "HERITAGE",
    blurb:
      "A medieval capital filled with well-preserved ruins, royal palaces, and rock-carved Buddhas.",
    description: "Polonnaruwa was the second ancient royal capital of Sri Lanka, offering incredibly preserved ruins in a compact and easily navigable archaeological park. The city showcases magnificent monumental architecture and stunning rock sculptures created by masterful ancient artisans.",
    highlights: [
      "Gal Vihara rock statues",
      "The Royal Palace of King Parakramabahu",
      "Parakrama Samudra (massive ancient reservoir)",
      "The Quadrangle (Dalada Maluva)",
      "Lankatilaka Vihara"
    ],
    bestSeason: "July – September, January – March",
    activities: [
      "Cycling around the archaeological park",
      "Admiring the giant Buddha statues of Gal Vihara",
      "Bird watching near the Parakrama Samudra",
      "Visiting the Polonnaruwa Museum"
    ],
    quickFacts: {
      "UNESCO Status": "World Heritage Site since 1982",
      "Era": "Capital from 11th to 13th century CE",
      "Key Figure": "King Parakramabahu I"
    },
    localTips: [
      "Start your tour at the museum to gain helpful context before exploring the ruins.",
      "The ruins are close together, making a half-day bicycle ride the perfect way to see everything."
    ],
    gallery: [
      images.colombo,
      images.sl,
      images.sun_set
    ]
  }
];

export const tours: Tour[] = [
  {
    slug: "arugam-bay-the-surfing-paradise",
    title: "The Surfing Paradise",
    location: "Arugam Bay",
    duration: "5 days",
    groupSize: 20,
    featured: true,
    image: images.surfing,
    gallery: [images.surfing, images.eliya, images.kandy],
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
    advanceFacilities: [
      { label: "Surfing Guide", description: "Lessons for beginners." },
      { label: "Transportation", description: "Private vehicle from airport." },
      { label: "24/7 Support", description: "Available for assistance." },
    ],
    includedExcluded: {
      included: [
        "Hotel accommodation and breakfast.",
        "Surfing lessons and yoga classes.",
        "Hotel pick-up and drop-off.",
        "Surfing equipment rental.",
        "Breakfast at the hotel.",
      ],
      excluded: [
        "Additional Services",
        "Insurance",
        "Food & Drinks",
        "Tickets",
      ],
    },
    amenities: [
      "Accepts Credit Cards",
      "Car Parking",
      "Laundry Service",
      "Outdoor Seating",
      "Restaurant",
      "Smoking Allowed",
      "Wireless Internet",
    ],
  },
  {
    slug: "colombo-the-vibrant-capital",
    title: "The Vibrant Capital",
    location: "Colombo, Sri Lanka",
    duration: "2 days",
    groupSize: 20,
    featured: true,
    image: images.colombo,
    gallery: [images.colombo, images.lotus, images.colombo2],
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
    advanceFacilities: [
      { label: "City Guide", description: "Expert local guides for every stop." },
      { label: "Transportation", description: "Air-conditioned private vehicle." },
      { label: "24/7 Support", description: "Round-the-clock concierge." },
    ],
    includedExcluded: {
      included: [
        "Hotel accommodation and breakfast.",
        "Private city transport.",
        "Museum and temple entrance fees.",
        "Hotel pick-up and drop-off.",
        "Welcome dinner at a rooftop restaurant.",
      ],
      excluded: [
        "Additional Services",
        "Insurance",
        "Food & Drinks",
        "Tickets",
      ],
    },
    amenities: [
      "Accepts Credit Cards",
      "Car Parking",
      "Laundry Service",
      "Outdoor Seating",
      "Restaurant",
      "Wireless Internet",
    ],
  },
  {
    slug: "sigiriya-rock-fortress-discovery",
    title: "Sigiriya Rock Fortress Discovery",
    location: "Sigiriya",
    duration: "3 days",
    groupSize: 16,
    featured: true,
    image: images.sigiriya2,
    gallery: [images.sigiriya2, images.kandy, images.ella],
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
    advanceFacilities: [
      { label: "Heritage Guide", description: "Certified archaeological guide." },
      { label: "Transportation", description: "Private vehicle with A/C." },
      { label: "24/7 Support", description: "On-call assistance throughout." },
    ],
    includedExcluded: {
      included: [
        "Hotel accommodation and breakfast.",
        "Sigiriya and Dambulla entrance fees.",
        "Hotel pick-up and drop-off.",
        "Cooking class materials.",
        "Village cycling tour.",
      ],
      excluded: [
        "Additional Services",
        "Insurance",
        "Food & Drinks",
        "Tickets",
      ],
    },
    amenities: [
      "Accepts Credit Cards",
      "Car Parking",
      "Laundry Service",
      "Restaurant",
      "Wireless Internet",
    ],
  },
  {
    slug: "yala-wildlife-safari",
    title: "Yala Wildlife Safari",
    location: "Yala National Park",
    duration: "3 days",
    groupSize: 12,
    image: images.yala,
    gallery: [images.yala, images.ella, images.eliya],
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
    advanceFacilities: [
      { label: "Safari Naturalist", description: "Expert wildlife tracker on every drive." },
      { label: "Transportation", description: "4x4 jeep with experienced driver." },
      { label: "24/7 Support", description: "Camp staff available around the clock." },
    ],
    includedExcluded: {
      included: [
        "Luxury tented camp accommodation.",
        "All meals during the safari.",
        "Two full-day jeep safaris.",
        "Bundala birdwatching excursion.",
        "Park entrance fees.",
      ],
      excluded: [
        "Additional Services",
        "Insurance",
        "Food & Drinks outside camp",
        "Souvenirs",
      ],
    },
    amenities: [
      "Accepts Credit Cards",
      "Car Parking",
      "Laundry Service",
      "Outdoor Seating",
      "Restaurant",
      "Wireless Internet",
    ],
  },
  {
    slug: "ella-hill-country-escape",
    title: "Ella Hill Country Escape",
    location: "Ella",
    duration: "4 days",
    groupSize: 14,
    image: images.ella2,
    gallery: [images.ella2, images.ella, images.kandy],
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
    advanceFacilities: [
      { label: "Trekking Guide", description: "Experienced hill-country guide." },
      { label: "Transportation", description: "Private vehicle and train tickets." },
      { label: "24/7 Support", description: "On-call travel coordinator." },
    ],
    includedExcluded: {
      included: [
        "Boutique hotel accommodation.",
        "Daily breakfast and one dinner.",
        "Scenic train tickets (reserved seats).",
        "Tea factory entrance and tasting.",
        "Hotel pick-up and drop-off.",
      ],
      excluded: [
        "Additional Services",
        "Insurance",
        "Food & Drinks",
        "Tickets",
      ],
    },
    amenities: [
      "Accepts Credit Cards",
      "Car Parking",
      "Laundry Service",
      "Outdoor Seating",
      "Restaurant",
      "Smoking Allowed",
      "Wireless Internet",
    ],
  },
  {
    slug: "galle-coastal-heritage",
    title: "Galle Coastal Heritage",
    location: "Galle",
    duration: "3 days",
    groupSize: 18,
    image: images.galle,
    gallery: [images.galle, images.ella, images.eliya],
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
    advanceFacilities: [
      { label: "Heritage Guide", description: "Expert on Dutch-colonial history." },
      { label: "Transportation", description: "Private vehicle from Colombo." },
      { label: "24/7 Support", description: "Available for assistance." },
    ],
    includedExcluded: {
      included: [
        "Boutique hotel inside Galle Fort.",
        "Daily breakfast.",
        "Guided Fort walking tour.",
        "Unawatuna beach transfer.",
        "Hotel pick-up and drop-off.",
      ],
      excluded: [
        "Additional Services",
        "Insurance",
        "Food & Drinks",
        "Tickets",
      ],
    },
    amenities: [
      "Accepts Credit Cards",
      "Car Parking",
      "Laundry Service",
      "Outdoor Seating",
      "Restaurant",
      "Smoking Allowed",
      "Wireless Internet",
    ],
  },
];

export const services: Service[] = [
  {
    title: "Family-Friendly Tours",
    blurb:
      "Carefully paced itineraries with activities everyone - from toddlers to grandparents - will love.",
    image: images.family,
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
    image: images.honeymoon2,
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
    image: images.sigiriya2,
  },
];
