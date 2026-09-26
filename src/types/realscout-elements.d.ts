/**
 * Office Listings attributes confirmed by the embed already shipped on this site
 * and by the requested dashboard snippet:
 * agent-encoded-id, sort-order, listing-status, property-types, price-min, price-max.
 *
 * RealScout Help Center, "Using the Customizable Widgets" (July 6, 2026), lists
 * Office Listings filters as sort, status, property type, price range, and
 * listing/status change range. It does not publish a city, ZIP, neighborhood,
 * or open-house attribute. Do not add those.
 */
declare module '@builder.io/qwik/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': {
        'agent-encoded-id': string
        'sort-order'?: 'PRICE_LOW' | 'NEWEST' | 'STATUS_AND_SIGNIFICANT_CHANGE'
        'listing-status'?: 'For Sale' | 'For Rent' | 'In Contract' | 'Sold' | 'Rented'
        'property-types'?: string
        'price-min'?: string
        'price-max'?: string
        class?: string
      }
    }
  }
}

export {}
