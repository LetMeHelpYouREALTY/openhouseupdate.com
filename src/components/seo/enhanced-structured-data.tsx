import { component$ } from '@builder.io/qwik'
import { business } from '~/config/business'
import { getAgentPortraitAbsoluteUrl } from '~/config/images'
import { getAbsoluteImageUrl } from '~/lib/cloudflare-images'

interface EnhancedStructuredDataProps {
  type:
    | 'RealEstateAgent'
    | 'RealEstateService'
    | 'WebSite'
    | 'Organization'
    | 'LocalBusiness'
    | 'BreadcrumbList'
    | 'FAQPage'
    | 'Review'
    | 'AggregateRating'
  data?: Record<string, unknown>
  pageType?: string
  propertyData?: Record<string, unknown>
  breadcrumbs?: Array<{ name: string; url: string }>
  faqs?: Array<{ question: string; answer: string }>
  reviews?: Array<{
    author: string
    rating: number
    reviewBody: string
    datePublished: string
    location?: string
  }>
}

export default component$<EnhancedStructuredDataProps>(
  ({
    type,
    data = {},
    pageType = 'general',
    propertyData = {},
    breadcrumbs = [],
    faqs = [],
    reviews = [],
  }) => {
    // Use parameters to avoid linting errors
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _pageType = pageType
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _propertyData = propertyData
    const getStructuredData = () => {
      switch (type) {
        case 'RealEstateAgent':
          return {
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'Dr. Jan Duffy',
            alternateName: 'Janet Duffy',
            jobTitle: 'Open House Expert',
            description:
              'Professional Open House Expert specializing in Las Vegas properties with over 20 years of experience in open house marketing, lead generation, and buyer conversion',
            url: business.siteUrl,
            telephone: business.phoneE164,
            email: business.email,
            image: getAgentPortraitAbsoluteUrl(business.siteUrl),
            logo: getAbsoluteImageUrl('logo'),
            address: {
              '@type': 'PostalAddress',
              streetAddress: business.streetAddress,
              addressLocality: business.addressLocality,
              addressRegion: business.addressRegion,
              postalCode: business.postalCode,
              addressCountry: business.addressCountry,
            },
            hasMap: business.mapsUrl,
            areaServed: [
              {
                '@type': 'City',
                name: 'Las Vegas',
                containedInPlace: {
                  '@type': 'State',
                  name: 'Nevada',
                },
              },
              {
                '@type': 'City',
                name: 'Henderson',
              },
              {
                '@type': 'City',
                name: 'Summerlin',
              },
            ],
            serviceType: 'Real Estate Services',
            hasCredential: [
              {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'Real Estate License',
                recognizedBy: {
                  '@type': 'Organization',
                  name: 'Nevada Real Estate Division',
                },
              },
              {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'Open House Expert Certification',
                name: 'Open House Expert',
                description:
                  'Specialized expertise in open house marketing, staging, and lead conversion',
              },
            ],
            knowsAbout: [
              'Open House Marketing',
              'Property Staging',
              'Lead Generation',
              'Buyer Conversion',
              'Las Vegas Real Estate',
              'Neighborhood Analysis',
              'Market Pricing',
              'Real Estate Transactions',
            ],
            memberOf: {
              '@type': 'Organization',
              name: 'Berkshire Hathaway HomeServices Nevada Properties',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Real Estate Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Property Search',
                    description: 'Find your perfect home in Las Vegas with advanced search tools',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Home Valuation',
                    description: 'Get accurate home value estimates with market analysis',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Buyer Representation',
                    description: 'Expert guidance for home buyers throughout the process',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Seller Representation',
                    description: 'Professional marketing and selling services',
                  },
                },
              ],
            },
            sameAs: [...business.sameAs],
          }

        case 'RealEstateService':
          return {
            '@context': 'https://schema.org',
            '@type': 'RealEstateService',
            name: 'Open House Marketplace - Las Vegas Real Estate',
            alternateName: [business.siteName, business.agentName],
            description:
              'Professional real estate services in Las Vegas, Nevada. Expert guidance for buying and selling homes.',
            url: business.siteUrl,
            logo: getAbsoluteImageUrl('logo'),
            image: getAbsoluteImageUrl('og-default'),
            provider: {
              '@type': 'RealEstateAgent',
              name: 'Dr. Jan Duffy',
              jobTitle: 'Open House Expert',
              image: getAgentPortraitAbsoluteUrl(business.siteUrl),
              url: 'https://www.openhouseupdate.com/about',
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
              priceRange: '$300,000 - $2,000,000',
              availability: 'https://schema.org/InStock',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Real Estate Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Home Buying Services',
                    description: 'Complete buyer representation and guidance',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Home Selling Services',
                    description: 'Professional marketing and selling assistance',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Market Analysis',
                    description: 'Comprehensive market reports and analysis',
                  },
                },
              ],
            },
          }

        case 'WebSite':
          return {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: business.gbpName,
            alternateName: business.siteName,
            url: business.siteUrl,
            description:
              'Las Vegas real estate services - Find your perfect home with expert guidance',
            inLanguage: 'en-US',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.openhouseupdate.com/search?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
            publisher: {
              '@type': 'RealEstateAgent',
              name: 'Dr. Jan Duffy',
              url: 'https://www.openhouseupdate.com/about',
            },
            mainEntity: {
              '@type': 'RealEstateService',
              name: 'Open House Marketplace - Las Vegas Real Estate',
            },
          }

        case 'Organization':
          return {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: business.gbpName,
            alternateName: business.siteName,
            url: business.siteUrl,
            logo: getAbsoluteImageUrl('logo'),
            description: business.description,
            address: {
              '@type': 'PostalAddress',
              streetAddress: business.streetAddress,
              addressLocality: business.addressLocality,
              addressRegion: business.addressRegion,
              postalCode: business.postalCode,
              addressCountry: business.addressCountry,
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: business.phoneE164,
              contactType: 'customer service',
              email: business.email,
              availableLanguage: ['English', 'Spanish'],
            },
            sameAs: [...business.sameAs],
          }

        case 'LocalBusiness':
          return {
            '@context': 'https://schema.org',
            '@type': ['RealEstateAgent', 'LocalBusiness'],
            '@id': `${business.siteUrl}/#localbusiness`,
            name: business.gbpName,
            alternateName: [business.siteName, business.agentName],
            image: [
              getAgentPortraitAbsoluteUrl(business.siteUrl),
              getAbsoluteImageUrl('og-default'),
              getAbsoluteImageUrl('about'),
              getAbsoluteImageUrl('weekend-open-houses'),
            ],
            employee: {
              '@type': 'Person',
              name: business.agentName,
              jobTitle: 'Featured Realtor, Open House Expert',
              image: getAgentPortraitAbsoluteUrl(business.siteUrl),
              telephone: business.phoneE164,
              url: `${business.siteUrl}/about`,
            },
            logo: getAbsoluteImageUrl('logo'),
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
            hasMap: business.mapsUrl,
            url: business.siteUrl,
            openingHours: business.openingHours,
            openingHoursSpecification: business.openingHoursSpecification.map((hours) => ({
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: hours.dayOfWeek,
              opens: hours.opens,
              closes: hours.closes,
            })),
            priceRange: '$$',
            areaServed: business.areaServed.map((name) => ({
              '@type': 'City',
              name,
            })),
            sameAs: business.sameAs,
          }

        case 'BreadcrumbList':
          if (breadcrumbs.length === 0) return null
          return {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbs.map((crumb, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: crumb.name,
              item: crumb.url,
            })),
          }

        case 'FAQPage':
          if (faqs.length === 0) return null
          return {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }

        case 'Review':
          if (reviews.length === 0) return null
          // Return array of reviews for multiple reviews
          if (reviews.length > 1) {
            return reviews.map((review) => ({
              '@context': 'https://schema.org',
              '@type': 'Review',
              itemReviewed: {
                '@type': 'RealEstateAgent',
                name: 'Dr. Jan Duffy',
                url: 'https://www.openhouseupdate.com/about',
              },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: review.rating.toString(),
                bestRating: '5',
                worstRating: '1',
              },
              author: {
                '@type': 'Person',
                name: review.author,
              },
              reviewBody: review.reviewBody,
              datePublished: review.datePublished,
              ...(review.location && {
                locationCreated: {
                  '@type': 'Place',
                  name: review.location,
                },
              }),
            }))
          }
          // Single review
          return {
            '@context': 'https://schema.org',
            '@type': 'Review',
            itemReviewed: {
              '@type': 'RealEstateAgent',
              name: 'Dr. Jan Duffy',
              url: 'https://www.openhouseupdate.com/about',
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: reviews[0].rating.toString(),
              bestRating: '5',
              worstRating: '1',
            },
            author: {
              '@type': 'Person',
              name: reviews[0].author,
            },
            reviewBody: reviews[0].reviewBody,
            datePublished: reviews[0].datePublished,
            ...(reviews[0].location && {
              locationCreated: {
                '@type': 'Place',
                name: reviews[0].location,
              },
            }),
          }

        case 'AggregateRating': {
          if (reviews.length === 0) {
            return null
          }
          const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0)
          const averageRating = totalRating / reviews.length
          return {
            '@context': 'https://schema.org',
            '@type': 'AggregateRating',
            '@id': 'https://www.openhouseupdate.com/#aggregateRating',
            ratingValue: averageRating.toFixed(1),
            reviewCount: reviews.length.toString(),
            bestRating: '5',
            worstRating: '1',
          }
        }

        default: {
          const _exhaustive: never = type
          void _exhaustive
          return data
        }
      }
    }

    const structuredData = getStructuredData()

    if (!structuredData) return null

    // Handle arrays of reviews
    if (Array.isArray(structuredData)) {
      return (
        <>
          {structuredData.map((data, index) => {
            const dataString = JSON.stringify(data)
            return (
              <script
                key={`structured-data-${dataString.substring(0, 50)}-${index}`}
                type="application/ld+json"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from typed data
                dangerouslySetInnerHTML={dataString}
              />
            )
          })}
        </>
      )
    }

    const dataString = JSON.stringify(structuredData)
    return (
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from typed data
        dangerouslySetInnerHTML={dataString}
      />
    )
  }
)
