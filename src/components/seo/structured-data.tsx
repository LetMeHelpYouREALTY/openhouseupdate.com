import { component$ } from '@builder.io/qwik'
import { business } from '~/config/business'
import { getAgentPortraitAbsoluteUrl } from '~/config/images'
import { CANONICAL_HOME, CANONICAL_ORIGIN } from '~/utils/canonical'

interface StructuredDataProps {
  type: 'RealEstateAgent' | 'RealEstateService' | 'WebSite'
  data: Record<string, unknown>
}

export default component$<StructuredDataProps>(({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'RealEstateAgent':
        return {
          '@context': 'https://schema.org',
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
          description: 'Open House Expert specializing in Las Vegas properties',
          image: getAgentPortraitAbsoluteUrl(business.siteUrl),
          jobTitle: 'Featured Realtor, Open House Expert',
          url: CANONICAL_HOME,
          telephone: business.phoneE164,
          email: business.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: business.streetAddress,
            addressLocality: business.addressLocality,
            addressRegion: business.addressRegion,
            postalCode: business.postalCode,
            addressCountry: business.addressCountry,
          },
          areaServed: {
            '@type': 'City',
            name: 'Las Vegas',
          },
          serviceType: 'Real Estate Services',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Real Estate Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Property Search',
                  description: 'Find your perfect home in Las Vegas',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Home Valuation',
                  description: 'Get accurate home value estimates',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Property Listings',
                  description: 'Browse featured Las Vegas properties',
                },
              },
            ],
          },
        }

      case 'RealEstateService':
        return {
          '@context': 'https://schema.org',
          '@type': 'RealEstateService',
          name: 'Open House Update - Las Vegas Real Estate',
          description: 'Professional real estate services in Las Vegas, Nevada',
          url: CANONICAL_HOME,
          provider: {
            '@type': 'RealEstateAgent',
            name: 'Dr. Jan Duffy',
          },
          areaServed: {
            '@type': 'City',
            name: 'Las Vegas',
            containedInPlace: {
              '@type': 'State',
              name: 'Nevada',
            },
          },
          serviceType: 'Real Estate Services',
          offers: {
            '@type': 'Offer',
            description: 'Professional real estate services',
            priceRange: '$500,000 - $600,000',
          },
        }

      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Open House Update',
          url: CANONICAL_HOME,
          description: 'Las Vegas real estate services - Find your perfect home',
          potentialAction: {
            '@type': 'SearchAction',
            target: `${CANONICAL_ORIGIN}/search/?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
          publisher: {
            '@type': 'RealEstateAgent',
            name: 'Dr. Jan Duffy',
          },
        }

      default: {
        const _exhaustive: never = type
        void _exhaustive
        return data
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Structured data JSON is safe and controlled
      dangerouslySetInnerHTML={JSON.stringify(getStructuredData())}
    />
  )
})
