/**
 * Single source of NAP for Open House Marketplace.
 * Values match the live Google Business Profile listing (retrieved 2026-09-14).
 * Do not invent or swap phone/address without updating GBP first.
 */
export const business = {
  gbpName: 'Open House Marketplace',
  siteName: 'Open House Update',
  agentName: 'Dr. Jan Duffy',
  agentAlternateName: 'Janet Duffy',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  license: 'S.0197614.LLC',
  description:
    'Open House Marketplace connects buyers and sellers across Summerlin communities including Summerlin Centre, Sun City Summerlin, The Paseos, The Vistas, and Stonebridge. Weekend open house marketing, buyer representation, and seller strategy for Las Vegas Valley.',
  email: 'DrDuffy@OpenHouseUpdate.com',
  phoneDisplay: '(702) 200-3422',
  phoneTel: '+17022003422',
  phoneE164: '+1-702-200-3422',
  streetAddress: '760 Windover Ct',
  addressLocality: 'Las Vegas',
  addressRegion: 'NV',
  postalCode: '89138',
  addressCountry: 'US',
  fullAddress: '760 Windover Ct, Las Vegas, NV 89138',
  siteUrl: 'https://www.openhouseupdate.com',
  mapsCid: '10510033543364017077',
  mapsUrl: 'https://maps.google.com/maps?cid=10510033543364017077',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=760+Windover+Ct,+Las+Vegas,+NV+89138',
  reviewsUrl: 'https://www.google.com/maps?cid=10510033543364017077',
  writeReviewUrl: 'https://search.google.com/local/writereview?cid=10510033543364017077',
  geo: {
    // GBP did not return lat/lng. Do not use downtown Las Vegas coords — they mismatch 89138.
    latitude: null as number | null,
    longitude: null as number | null,
  },
  hoursDisplay: '8 am to 8 pm',
  openingHours: ['Mo-Su 08:00-20:00'],
  openingHoursSpecification: [
    { dayOfWeek: 'Monday', opens: '08:00', closes: '20:00' },
    { dayOfWeek: 'Tuesday', opens: '08:00', closes: '20:00' },
    { dayOfWeek: 'Wednesday', opens: '08:00', closes: '20:00' },
    { dayOfWeek: 'Thursday', opens: '08:00', closes: '20:00' },
    { dayOfWeek: 'Friday', opens: '08:00', closes: '20:00' },
    { dayOfWeek: 'Saturday', opens: '08:00', closes: '20:00' },
    { dayOfWeek: 'Sunday', opens: '08:00', closes: '20:00' },
  ] as const,
  areaServed: [
    'Las Vegas',
    'Summerlin',
    'Henderson',
    'North Las Vegas',
    'Green Valley',
    'Spring Valley',
  ],
  sameAs: [
    'https://maps.google.com/maps?cid=10510033543364017077',
    'https://www.facebook.com/drjanetduffy',
    'https://www.linkedin.com/in/drjanetduffy',
    'https://www.instagram.com/drjanetduffy',
    'https://www.bhhsnv.com/real-estate-agent/4986/dr-jan-duffy',
  ],
  realScoutOnboarding: 'http://drjanduffy.realscout.com/onboarding',
  /** Confirmed live on 2026-09-26 from the Open House Marketplace booking page. */
  calendlyUrl: 'https://calendly.com/drjanduffy/open-house-tour',
  /** Office Listings embed already used on this site. Do not swap without a fresh RealScout dashboard copy. */
  realScoutAgentEncodedId: 'QWdlbnQtMjI1MDUw',
} as const

export type BusinessConfig = typeof business
