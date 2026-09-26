/** Local portrait. Do not route this file through Cloudflare Images — it ships from /public/images. */
export const agentPortrait = {
  src: '/images/dr-jan-duffy.webp',
  alt: 'Dr. Jan Duffy, Featured Realtor and Las Vegas Open House Expert',
  width: 180,
  height: 180,
} as const

/** Homepage LCP image. Preload this exact srcset so the browser does not wait on layout. */
export const heroLcp = {
  src: '/images/hero-weekend-open-houses.jpg',
  srcSet:
    '/images/hero-weekend-open-houses-800.webp 800w, /images/hero-weekend-open-houses.webp 1280w',
  sizes: '(max-width: 768px) 100vw, 1200px',
} as const

export const getAgentPortraitAbsoluteUrl = (siteUrl: string): string =>
  `${siteUrl.replace(/\/$/, '')}${agentPortrait.src}`

export const siteImages = {
  'weekend-open-houses': {
    file: 'hero-weekend-open-houses.jpg',
    alt: 'Weekend open house at a Summerlin Las Vegas home with Red Rock Canyon views',
    width: 1280,
    height: 720,
  },
  summerlin: {
    file: 'heading-summerlin-homes.jpg',
    alt: 'Summerlin Las Vegas homes along Red Rock Canyon in zip codes 89134 to 89138',
    width: 1280,
    height: 720,
  },
  henderson: {
    file: 'heading-henderson-homes.jpg',
    alt: 'Henderson Nevada homes in Green Valley with McCullough Mountains beyond',
    width: 1280,
    height: 720,
  },
  'north-las-vegas': {
    file: 'heading-north-las-vegas-homes.jpg',
    alt: 'Newer North Las Vegas homes in a master-planned community near the Spring Mountains',
    width: 1280,
    height: 720,
  },
  'green-valley': {
    file: 'heading-green-valley-homes.jpg',
    alt: 'Green Valley Henderson homes with tile roofs and desert landscaping',
    width: 1280,
    height: 720,
  },
  'home-valuation': {
    file: 'heading-home-valuation.jpg',
    alt: 'Las Vegas home prepared for a professional market valuation in Summerlin',
    width: 1280,
    height: 720,
  },
  'buyer-services': {
    file: 'heading-buyer-services.jpg',
    alt: 'Staged Las Vegas living room ready for a buyer tour during an open house',
    width: 1280,
    height: 720,
  },
  'seller-services': {
    file: 'heading-seller-staging.jpg',
    alt: 'Professionally staged Las Vegas living room prepared for weekend open house buyers',
    width: 1280,
    height: 720,
  },
  'market-analysis': {
    file: 'heading-market-analysis.jpg',
    alt: 'Las Vegas Valley skyline at dusk used for local real estate market analysis',
    width: 1280,
    height: 720,
  },
  'first-time-buyer': {
    file: 'heading-first-time-buyer.jpg',
    alt: 'Front door of a Las Vegas home for first-time buyers in the valley',
    width: 1280,
    height: 720,
  },
  'map-search': {
    file: 'heading-map-search.jpg',
    alt: 'Map search tools for Las Vegas Valley open houses and homes for sale',
    width: 1280,
    height: 720,
  },
  contact: {
    file: 'heading-contact-office.jpg',
    alt: 'Open House Marketplace contact page for Las Vegas weekend open houses',
    width: 1280,
    height: 720,
  },
  about: {
    file: 'heading-about-agent.jpg',
    alt: 'Dr. Jan Duffy real estate office for Open House Marketplace in Summerlin Las Vegas',
    width: 1280,
    height: 720,
  },
  'og-default': {
    file: 'og-default.jpg',
    alt: 'Las Vegas weekend open houses with Dr. Jan Duffy at Open House Marketplace',
    width: 1280,
    height: 720,
  },
  'og-homepage': {
    file: 'og-homepage.jpg',
    alt: 'Las Vegas open houses this weekend with Dr. Jan Duffy',
    width: 1200,
    height: 630,
  },
  'conversion-rates': {
    file: 'heading-conversion-rates.jpg',
    alt: 'Open house guest table inside a Las Vegas home foyer',
    width: 1152,
    height: 864,
  },
  'strategic-marketing': {
    file: 'heading-strategic-marketing.jpg',
    alt: 'Open house marketing workspace for Las Vegas listings',
    width: 1152,
    height: 864,
  },
  'industry-recognition': {
    file: 'heading-industry-recognition.jpg',
    alt: 'Professional Las Vegas real estate office affiliated with Berkshire Hathaway HomeServices',
    width: 1152,
    height: 864,
  },
  'property-staging': {
    file: 'heading-property-staging.jpg',
    alt: 'Staged Las Vegas dining room prepared for an open house',
    width: 1152,
    height: 864,
  },
  'lead-followup': {
    file: 'heading-lead-followup.jpg',
    alt: 'Follow-up desk for Las Vegas open house buyer leads',
    width: 1152,
    height: 864,
  },
  'neighborhood-expertise': {
    file: 'heading-neighborhood-expertise.jpg',
    alt: 'Las Vegas Valley neighborhoods including trails, golf communities, and Red Rock views',
    width: 1280,
    height: 720,
  },
  'luxury-open-houses': {
    file: 'heading-luxury-open-houses.jpg',
    alt: 'Luxury Las Vegas estate open house with mountain views',
    width: 1280,
    height: 720,
  },
  comparison: {
    file: 'heading-comparison-summerlin-henderson.jpg',
    alt: 'Summerlin Red Rock homes beside Henderson Green Valley homes in Las Vegas Valley',
    width: 1280,
    height: 720,
  },
  'people-also-ask': {
    file: 'heading-people-also-ask.jpg',
    alt: 'Open House Marketplace office desk with Las Vegas Valley neighborhood maps',
    width: 1280,
    height: 720,
  },
  'spring-valley': {
    file: 'heading-spring-valley-homes.jpg',
    alt: 'Spring Valley Las Vegas homes with tile roofs and desert landscaping',
    width: 1280,
    height: 720,
  },
  enterprise: {
    file: 'heading-enterprise-homes.jpg',
    alt: 'Enterprise Las Vegas homes on larger lots near the Spring Mountains',
    width: 1280,
    height: 720,
  },
  'about-summerlin': {
    file: 'heading-about-summerlin.jpg',
    alt: 'Downtown Summerlin plaza and Red Rock views for the About Summerlin heading',
    width: 1280,
    height: 720,
  },
  'about-henderson': {
    file: 'heading-about-henderson.jpg',
    alt: 'Henderson waterfront path and hillside homes for the About Henderson heading',
    width: 1280,
    height: 720,
  },
  'about-green-valley': {
    file: 'heading-about-green-valley.jpg',
    alt: 'Green Valley Ranch promenade for the About Green Valley heading',
    width: 1280,
    height: 720,
  },
  'about-north-las-vegas': {
    file: 'heading-about-north-las-vegas.jpg',
    alt: 'North Las Vegas park and new homes for the About North Las Vegas heading',
    width: 1280,
    height: 720,
  },
  'about-spring-valley': {
    file: 'heading-about-spring-valley.jpg',
    alt: 'Desert Breeze Park and Spring Valley homes for the About Spring Valley heading',
    width: 1280,
    height: 720,
  },
  'about-enterprise': {
    file: 'heading-about-enterprise.jpg',
    alt: 'Southern Highlands golf-course homes for the About Enterprise heading',
    width: 1280,
    height: 720,
  },
  'comprehensive-search': {
    file: 'heading-comprehensive-search.jpg',
    alt: 'Property search tablet on a Las Vegas kitchen island',
    width: 1152,
    height: 864,
  },
  'location-based': {
    file: 'heading-location-based.jpg',
    alt: 'Las Vegas neighborhood street for location-based open house search',
    width: 1152,
    height: 864,
  },
  'weekend-focused': {
    file: 'heading-weekend-focused.jpg',
    alt: 'Saturday open house walkway with a blank A-frame sign in Las Vegas',
    width: 1152,
    height: 864,
  },
  'market-pricing': {
    file: 'heading-market-pricing.jpg',
    alt: 'Market analysis desk overlooking the Las Vegas Valley',
    width: 1280,
    height: 720,
  },
  logo: {
    file: 'logo.png',
    alt: 'Open House Marketplace logo',
    width: 512,
    height: 512,
  },
} as const

export type SiteImageKey = keyof typeof siteImages

/** Smaller WebP files for homepage images that Lighthouse flagged as oversized JPEGs. */
export const optimizedImageSources: Partial<
  Record<SiteImageKey, { src: string; width: number }[]>
> = {
  'weekend-open-houses': [
    { src: '/images/hero-weekend-open-houses-800.webp', width: 800 },
    { src: '/images/hero-weekend-open-houses.webp', width: 1280 },
  ],
  'strategic-marketing': [{ src: '/images/heading-strategic-marketing-800.webp', width: 800 }],
  'conversion-rates': [{ src: '/images/heading-conversion-rates-800.webp', width: 800 }],
}

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
