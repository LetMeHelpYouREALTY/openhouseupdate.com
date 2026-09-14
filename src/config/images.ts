export const siteImages = {
  'weekend-open-houses': {
    file: 'hero-weekend-open-houses.jpg',
    alt: 'Weekend open house at a Summerlin Las Vegas home with Red Rock Canyon views',
    width: 1600,
    height: 900,
  },
  summerlin: {
    file: 'heading-summerlin-homes.jpg',
    alt: 'Summerlin Las Vegas homes along Red Rock Canyon in zip codes 89134 to 89138',
    width: 1600,
    height: 900,
  },
  henderson: {
    file: 'heading-henderson-homes.jpg',
    alt: 'Henderson Nevada homes in Green Valley with McCullough Mountains beyond',
    width: 1600,
    height: 900,
  },
  'north-las-vegas': {
    file: 'heading-north-las-vegas-homes.jpg',
    alt: 'Newer North Las Vegas homes in a master-planned community near the Spring Mountains',
    width: 1600,
    height: 900,
  },
  'green-valley': {
    file: 'heading-green-valley-homes.jpg',
    alt: 'Green Valley Henderson homes with tile roofs and desert landscaping',
    width: 1600,
    height: 900,
  },
  'home-valuation': {
    file: 'heading-home-valuation.jpg',
    alt: 'Las Vegas home prepared for a professional market valuation in Summerlin',
    width: 1600,
    height: 900,
  },
  'buyer-services': {
    file: 'heading-buyer-services.jpg',
    alt: 'Staged Las Vegas living room ready for a buyer tour during an open house',
    width: 1600,
    height: 900,
  },
  'seller-services': {
    file: 'heading-seller-staging.jpg',
    alt: 'Professionally staged Las Vegas living room prepared for weekend open house buyers',
    width: 1600,
    height: 900,
  },
  'market-analysis': {
    file: 'heading-market-analysis.jpg',
    alt: 'Las Vegas Valley skyline at dusk used for local real estate market analysis',
    width: 1600,
    height: 900,
  },
  'first-time-buyer': {
    file: 'heading-first-time-buyer.jpg',
    alt: 'Front door of a Las Vegas home for first-time buyers in the valley',
    width: 1600,
    height: 900,
  },
  'map-search': {
    file: 'heading-map-search.jpg',
    alt: 'Map search tools for Las Vegas Valley open houses and homes for sale',
    width: 1600,
    height: 900,
  },
  contact: {
    file: 'heading-contact-office.jpg',
    alt: 'Open House Marketplace office serving 760 Windover Ct, Las Vegas NV 89138',
    width: 1600,
    height: 900,
  },
  about: {
    file: 'heading-about-agent.jpg',
    alt: 'Dr. Jan Duffy real estate office for Open House Marketplace in Summerlin Las Vegas',
    width: 1600,
    height: 900,
  },
  'og-default': {
    file: 'og-default.jpg',
    alt: 'Las Vegas weekend open houses with Dr. Jan Duffy at Open House Marketplace',
    width: 1200,
    height: 630,
  },
  'conversion-rates': {
    file: 'heading-conversion-rates.jpg',
    alt: 'Open house guest table inside a Las Vegas home foyer',
    width: 1200,
    height: 900,
  },
  'strategic-marketing': {
    file: 'heading-strategic-marketing.jpg',
    alt: 'Open house marketing workspace for Las Vegas listings',
    width: 1200,
    height: 900,
  },
  'industry-recognition': {
    file: 'heading-industry-recognition.jpg',
    alt: 'Professional Las Vegas real estate office affiliated with Berkshire Hathaway HomeServices',
    width: 1200,
    height: 900,
  },
  'property-staging': {
    file: 'heading-property-staging.jpg',
    alt: 'Staged Las Vegas dining room prepared for an open house',
    width: 1200,
    height: 900,
  },
  'lead-followup': {
    file: 'heading-lead-followup.jpg',
    alt: 'Follow-up desk for Las Vegas open house buyer leads',
    width: 1200,
    height: 900,
  },
  'neighborhood-expertise': {
    file: 'heading-neighborhood-expertise.jpg',
    alt: 'Las Vegas Valley neighborhoods including trails, golf communities, and Red Rock views',
    width: 1200,
    height: 900,
  },
  'luxury-open-houses': {
    file: 'heading-luxury-open-houses.jpg',
    alt: 'Luxury Las Vegas estate open house with mountain views',
    width: 1600,
    height: 900,
  },
  comparison: {
    file: 'heading-comparison-summerlin-henderson.jpg',
    alt: 'Summerlin Red Rock homes beside Henderson Green Valley homes in Las Vegas Valley',
    width: 1600,
    height: 900,
  },
  'people-also-ask': {
    file: 'heading-people-also-ask.jpg',
    alt: 'Open House Marketplace office desk with Las Vegas Valley neighborhood maps',
    width: 1600,
    height: 900,
  },
  'spring-valley': {
    file: 'heading-spring-valley-homes.jpg',
    alt: 'Spring Valley Las Vegas homes with tile roofs and desert landscaping',
    width: 1600,
    height: 900,
  },
  enterprise: {
    file: 'heading-enterprise-homes.jpg',
    alt: 'Enterprise Las Vegas homes on larger lots near the Spring Mountains',
    width: 1600,
    height: 900,
  },
  logo: {
    file: 'logo.png',
    alt: 'Open House Marketplace logo',
    width: 512,
    height: 512,
  },
} as const

export type SiteImageKey = keyof typeof siteImages

export const getNeighborhoodImageKey = (slug: string): SiteImageKey => {
  switch (slug.toLowerCase()) {
    case 'summerlin':
      return 'summerlin'
    case 'henderson':
      return 'henderson'
    case 'north-las-vegas':
      return 'north-las-vegas'
    case 'green-valley':
      return 'green-valley'
    case 'spring-valley':
      return 'spring-valley'
    case 'enterprise':
      return 'enterprise'
    default:
      return 'weekend-open-houses'
  }
}
