/**
 * One H2 per page. Do not reuse an H2 string.
 * Answers are 40–60 words, answer first, and name Dr. Jan Duffy once.
 */
export type OpenHouseWidgetKey =
  | 'home'
  | 'this-weekend'
  | 'summerlin'
  | 'henderson'
  | 'north-las-vegas'
  | 'green-valley'
  | 'spring-valley'
  | 'enterprise'
  | 'neighborhoods'
  | 'neighborhood-summerlin'
  | 'neighborhood-henderson'
  | 'neighborhood-north-las-vegas'
  | 'neighborhood-green-valley'
  | 'neighborhood-spring-valley'
  | 'neighborhood-enterprise'
  | 'price-under-400k'
  | 'price-400-600'
  | 'price-600-800'
  | 'price-800-1m'
  | 'price-over-1m'
  | 'about'
  | 'contact'
  | 'faq'
  | 'blog'
  | 'blog-post'
  | 'search'
  | 'map'
  | 'services'
  | 'buyer-services'
  | 'seller-services'
  | 'home-valuation'
  | 'market-analysis'
  | 'summerlin-open-houses'
  | 'henderson-valuation'
  | 'summerlin-vs-henderson'
  | 'comparison-guide'
  | 'first-home'
  | 'people-also-ask'
  | 'sitemap'
  | 'privacy'
  | 'terms'
  | 'not-found'
  | 'loading'
  | 'content-missing'
  | 'neighborhood-missing'
  | 'southwest-las-vegas'
  | 'centennial-hills'
  | 'skye-canyon'
  | 'inspirada'
  | 'mountains-edge'
  | 'the-lakes'
  | 'southern-highlands'
  | 'boulder-city'
  | 'luxury'
  | 'under-450k'
  | 'condos-townhomes'
  | 'fifty-five-plus'
  | 'new-construction'
  | 'open-house-guide'

export type OpenHouseWidgetCopy = {
  h2: string
  h3: string
  answer: string
  priceMin?: string
  priceMax?: string
}

const answerFor = (place: string): string =>
  `This section shows current for-sale listings in ${place} on Open House Update. Cards load from the MLS through RealScout when the page renders. Weekend open houses are commonly Saturday and Sunday. Confirm the start time on each listing. Call Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. The office phone is in the footer.`

export const openHouseWidgetCopy: Record<OpenHouseWidgetKey, OpenHouseWidgetCopy> = {
  home: {
    h2: 'Las Vegas Open House Update',
    h3: 'Open Houses This Weekend Across the Las Vegas Valley',
    answer: answerFor('the Las Vegas Valley'),
  },
  'this-weekend': {
    h2: "This Weekend's Las Vegas Open House Update",
    h3: 'Saturday and Sunday Open Houses by Neighborhood',
    answer: answerFor('Las Vegas this weekend'),
  },
  summerlin: {
    h2: 'Summerlin Open House Update',
    h3: 'Summerlin Open Houses This Saturday and Sunday',
    answer: answerFor('Summerlin, Las Vegas'),
  },
  henderson: {
    h2: 'Henderson Open House Update',
    h3: 'New Open Houses in Henderson, Green Valley, and Inspirada',
    answer: answerFor('Henderson, Nevada'),
  },
  'north-las-vegas': {
    h2: 'North Las Vegas Open House Update',
    h3: "This Week's North Las Vegas Open Houses",
    answer: answerFor('North Las Vegas'),
  },
  'green-valley': {
    h2: 'Green Valley Open House Update',
    h3: 'Green Valley and Green Valley Ranch Open Houses',
    answer: answerFor('Green Valley, Henderson'),
  },
  'spring-valley': {
    h2: 'Spring Valley Open House Update',
    h3: 'Spring Valley Open Houses near Chinatown and the 215',
    answer: answerFor('Spring Valley, Las Vegas'),
  },
  enterprise: {
    h2: 'Enterprise Open House Update',
    h3: 'Enterprise, Southern Highlands, and Rhodes Ranch Open Houses',
    answer: answerFor('Enterprise, Clark County'),
  },
  neighborhoods: {
    h2: 'Las Vegas Neighborhood Open House Update',
    h3: 'Open Houses by Valley Community This Weekend',
    answer: answerFor('Las Vegas Valley neighborhoods'),
  },
  'neighborhood-summerlin': {
    h2: 'Summerlin Neighborhood Open House Update',
    h3: 'Open Houses in Summerlin Villages This Weekend',
    answer: answerFor('Summerlin villages'),
  },
  'neighborhood-henderson': {
    h2: 'Henderson Neighborhood Open House Update',
    h3: 'Henderson Open Houses beyond the Green Valley Core',
    answer: answerFor('Henderson neighborhoods'),
  },
  'neighborhood-north-las-vegas': {
    h2: 'North Las Vegas Neighborhood Open House Update',
    h3: 'Skye Canyon and Centennial Hills Open Houses',
    answer: answerFor('North Las Vegas neighborhoods'),
  },
  'neighborhood-green-valley': {
    h2: 'Green Valley Neighborhood Open House Update',
    h3: 'Weekend Open Houses in Green Valley Henderson',
    answer: answerFor('the Green Valley neighborhood'),
  },
  'neighborhood-spring-valley': {
    h2: 'Spring Valley Neighborhood Open House Update',
    h3: 'Weekend Open Houses in Spring Valley Las Vegas',
    answer: answerFor('the Spring Valley neighborhood'),
  },
  'neighborhood-enterprise': {
    h2: 'Enterprise Neighborhood Open House Update',
    h3: 'Weekend Open Houses in Enterprise and Southern Highlands',
    answer: answerFor('the Enterprise neighborhood'),
  },
  'price-under-400k': {
    h2: 'Under $400,000 Open House Update',
    h3: 'Las Vegas Open Houses Listed under $400,000',
    answer: answerFor('Las Vegas homes listed under $400,000'),
    priceMax: '400000',
  },
  'price-400-600': {
    h2: '$400,000 to $600,000 Open House Update',
    h3: 'Las Vegas Open Houses from $400,000 to $600,000',
    answer: answerFor('Las Vegas homes listed from $400,000 to $600,000'),
    priceMin: '400000',
    priceMax: '600000',
  },
  'price-600-800': {
    h2: '$600,000 to $800,000 Open House Update',
    h3: 'Las Vegas Open Houses from $600,000 to $800,000',
    answer: answerFor('Las Vegas homes listed from $600,000 to $800,000'),
    priceMin: '600000',
    priceMax: '800000',
  },
  'price-800-1m': {
    h2: '$800,000 to $1 Million Open House Update',
    h3: 'Las Vegas Open Houses from $800,000 to $1 Million',
    answer: answerFor('the $800,000 to $1 million band'),
    priceMin: '800000',
    priceMax: '1000000',
  },
  'price-over-1m': {
    h2: 'Las Vegas Homes Over $1 Million Open House Update',
    h3: 'Weekend Tours for Las Vegas Listings Above $1 Million',
    answer: answerFor('listings above $1 million'),
    priceMin: '1000000',
  },
  about: {
    h2: 'Agent Open House Update',
    h3: 'Listings Dr. Jan Duffy Uses for Weekend Tours',
    answer: answerFor('the Las Vegas Valley with Dr. Jan Duffy'),
  },
  contact: {
    h2: 'Contact Open House Update',
    h3: 'Tour These Las Vegas Listings with Dr. Jan Duffy',
    answer: answerFor('Las Vegas'),
  },
  faq: {
    h2: 'Open House Questions Update',
    h3: 'Las Vegas Open House Answers, Then the Listings',
    answer: answerFor('Las Vegas after the questions above'),
  },
  blog: {
    h2: 'Las Vegas Open House Blog Update',
    h3: 'Current Valley Listings beside the Latest Articles',
    answer: answerFor('the Las Vegas Valley, beside the blog'),
  },
  'blog-post': {
    h2: 'Article Open House Update',
    h3: 'Current Las Vegas Listings for Readers of This Article',
    answer: answerFor('the Las Vegas Valley, beside this article'),
  },
  search: {
    h2: 'Las Vegas Search Open House Update',
    h3: 'For-Sale Listings You Can Tour This Weekend',
    answer: answerFor('the Las Vegas search results'),
  },
  map: {
    h2: 'Las Vegas Map Open House Update',
    h3: 'Listings to Pair with the Valley Map',
    answer: answerFor('the Las Vegas Valley map area'),
  },
  services: {
    h2: 'Services Open House Update',
    h3: 'Listings Buyers and Sellers Can Tour This Weekend',
    answer: answerFor('Las Vegas while you compare services'),
  },
  'buyer-services': {
    h2: 'Buyer Services Open House Update',
    h3: 'Homes Las Vegas Buyers Can Walk This Weekend',
    answer: answerFor('Las Vegas buyer tours'),
  },
  'seller-services': {
    h2: 'Seller Services Open House Update',
    h3: 'How Weekend Open Houses Sit Next to Active Listings',
    answer: answerFor('Las Vegas seller open houses'),
  },
  'home-valuation': {
    h2: 'Home Value Open House Update',
    h3: 'Active Las Vegas Listings beside a Valuation',
    answer: answerFor('Las Vegas while you price a home'),
  },
  'market-analysis': {
    h2: 'Market Analysis Open House Update',
    h3: 'Active Listings behind the Las Vegas Numbers',
    answer: answerFor('Las Vegas market listings'),
  },
  'summerlin-open-houses': {
    h2: 'Summerlin Saturday Open House Update',
    h3: 'Another Way into Summerlin Weekend Tours',
    answer: answerFor('Summerlin Saturday tours'),
  },
  'henderson-valuation': {
    h2: 'Henderson Value Open House Update',
    h3: 'Henderson Listings to Compare with a Valuation',
    answer: answerFor('Henderson home values'),
  },
  'summerlin-vs-henderson': {
    h2: 'Summerlin and Henderson Open House Update',
    h3: 'Tour Both Areas on the Same Weekend',
    answer: answerFor('Summerlin and Henderson'),
  },
  'comparison-guide': {
    h2: 'Summerlin versus Henderson Open House Update',
    h3: 'Listings to Walk before You Choose a Side of the Valley',
    answer: answerFor('a Summerlin versus Henderson tour'),
  },
  'first-home': {
    h2: 'First Home Tour Open House Update',
    h3: 'Las Vegas Listings for a First Weekend of Tours',
    answer: answerFor('a first Las Vegas home tour'),
  },
  'people-also-ask': {
    h2: 'People Also Ask Open House Update',
    h3: 'Las Vegas Listings behind the Common Questions',
    answer: answerFor('Las Vegas questions on this page'),
  },
  sitemap: {
    h2: 'Site Map Open House Update',
    h3: 'Jump from the Map into Current Las Vegas Listings',
    answer: answerFor('the Las Vegas Valley site map'),
  },
  privacy: {
    h2: 'Privacy Page Open House Update',
    h3: 'Las Vegas Listings, Separate from the Privacy Terms',
    answer: answerFor('Las Vegas, separate from this policy'),
  },
  terms: {
    h2: 'Terms Page Open House Update',
    h3: 'Las Vegas Listings, Separate from the Terms',
    answer: answerFor('Las Vegas, separate from these terms'),
  },
  'not-found': {
    h2: 'Find an Open House Update',
    h3: 'Current Las Vegas Listings If That Page Is Missing',
    answer: answerFor('Las Vegas after a missing page'),
  },
  loading: {
    h2: 'Loading Open House Update',
    h3: 'Las Vegas Listings While Search Tools Load',
    answer: answerFor('Las Vegas while this page loads'),
  },
  'content-missing': {
    h2: 'Missing Page Open House Update',
    h3: 'Las Vegas Listings If This Content Page Is Gone',
    answer: answerFor('Las Vegas if this content page is missing'),
  },
  'neighborhood-missing': {
    h2: 'Unlisted Area Open House Update',
    h3: 'Las Vegas Listings If That Neighborhood Page Is Missing',
    answer: answerFor('Las Vegas if that area page is missing'),
  },
  'southwest-las-vegas': {
    h2: 'Southwest Las Vegas Open House Update',
    h3: 'Southwest Valley Open Houses This Weekend',
    answer: answerFor('southwest Las Vegas'),
  },
  'centennial-hills': {
    h2: 'Centennial Hills Open House Update',
    h3: 'Centennial Hills Open Houses in North Las Vegas',
    answer: answerFor('Centennial Hills, North Las Vegas'),
  },
  'skye-canyon': {
    h2: 'Skye Canyon Open House Update',
    h3: 'Skye Canyon Open Houses in 89084',
    answer: answerFor('Skye Canyon, North Las Vegas'),
  },
  inspirada: {
    h2: 'Inspirada Open House Update',
    h3: 'Inspirada Open Houses in Henderson',
    answer: answerFor('Inspirada, Henderson'),
  },
  'mountains-edge': {
    h2: 'Mountains Edge Open House Update',
    h3: 'Mountains Edge Open Houses in Southwest Las Vegas',
    answer: answerFor('Mountains Edge, southwest Las Vegas'),
  },
  'the-lakes': {
    h2: 'The Lakes Open House Update',
    h3: 'The Lakes Open Houses near Sahara and Durango',
    answer: answerFor('The Lakes, Las Vegas'),
  },
  'southern-highlands': {
    h2: 'Southern Highlands Open House Update',
    h3: 'Southern Highlands Open Houses in 89141',
    answer: answerFor('Southern Highlands, Enterprise'),
  },
  'boulder-city': {
    h2: 'Boulder City Open House Update',
    h3: 'Boulder City Open Houses Southeast of Henderson',
    answer: answerFor('Boulder City, Nevada'),
  },
  luxury: {
    h2: 'Las Vegas Luxury Open House Update',
    h3: 'Open Houses Over $1 Million in Las Vegas and Henderson',
    answer: answerFor('Las Vegas luxury listings over $1 million'),
    priceMin: '1000000',
  },
  'under-450k': {
    h2: 'First-Time Buyer Open House Update',
    h3: 'Las Vegas Open Houses Under $450,000',
    answer: answerFor('Las Vegas listings under $450,000'),
    priceMax: '450000',
  },
  'condos-townhomes': {
    h2: 'Las Vegas Condo Open House Update',
    h3: 'Townhome and Condo Open Houses This Week',
    answer: answerFor('Las Vegas townhomes and condos'),
  },
  'fifty-five-plus': {
    h2: '55+ Community Open House Update',
    h3: 'Open Houses in Sun City Summerlin, Sun City Anthem, and Del Webb Communities',
    answer: answerFor('Las Vegas 55+ communities'),
  },
  'new-construction': {
    h2: 'New Construction Open House Update',
    h3: 'Model Home and New Build Open Houses in Las Vegas',
    answer: answerFor('Las Vegas new construction'),
  },
  'open-house-guide': {
    h2: 'Las Vegas Open House Guide Update',
    h3: 'Listings to Practice the Tour Checklist On',
    answer: answerFor('a Las Vegas open house tour'),
  },
}

export const priceRangeWidgetKey = (range: string): OpenHouseWidgetKey => {
  switch (range) {
    case 'under-400k':
      return 'price-under-400k'
    case '400k-600k':
      return 'price-400-600'
    case '600k-800k':
      return 'price-600-800'
    case '800k-1m':
      return 'price-800-1m'
    case 'over-1m':
      return 'price-over-1m'
    default:
      return 'price-under-400k'
  }
}

export const countWords = (value: string): number =>
  value.trim().split(/\s+/).filter(Boolean).length
