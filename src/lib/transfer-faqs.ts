/**
 * Single source of truth for the /transfers FAQ. Rendered by the visible
 * accordion in AnimatedTransfers and by transfersFaqJsonLd, so the FAQPage
 * schema always matches the questions shown on the page.
 */
export type TransferFaq = { q: string; a: string };

export const transferFaqs: TransferFaq[] = [
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
