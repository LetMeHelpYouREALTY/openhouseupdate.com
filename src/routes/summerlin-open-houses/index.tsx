import { component$, useVisibleTask$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import FeaturedRealtor from '~/components/agent/featured-realtor'
import HeadingImage from '~/components/media/heading-image'
import OpenHouseWidgetSection from '~/components/realscout/open-house-widget-section'
import EnhancedPageSEO from '~/components/seo/enhanced-page-seo'
import InternalLinking from '~/components/seo/internal-linking'

export default component$(() => {
  useVisibleTask$(() => {
    if (typeof window !== 'undefined') {
      const initializeRealScout = () => {
        const script = document.querySelector('script[src*="realscout-web-components"]')
        if (!script) {
          setTimeout(initializeRealScout, 500)
          return
        }

        const checkElements = () => {
          if (customElements.get('realscout-advanced-search')) {
            const widget = document.querySelector('realscout-advanced-search')
            if (widget) {
              widget.setAttribute('default-location', 'Summerlin, Las Vegas, NV')
              widget.setAttribute('price-min', '400000')
            }
            return
          }
          setTimeout(checkElements, 200)
        }
        checkElements()
      }
      initializeRealScout()
    }
  })

  return (
    <div class="location-page">
      <style>{`
        .location-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        
        .location-hero {
          position: relative;
          overflow: hidden;
          text-align: center;
          margin-bottom: 3rem;
          padding: 4rem 1.5rem;
          color: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .location-hero > :not(figure) {
          position: relative;
          z-index: 1;
        }
        
        .location-hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .search-section {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          margin-bottom: 2rem;
        }
        
        .info-section {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          margin-bottom: 2rem;
        }
        
        .info-section h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          border-bottom: 2px solid #3A8DDE;
          padding-bottom: 0.5rem;
        }
        
        .info-section p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 1rem;
        }
        
        realscout-advanced-search {
          width: 100%;
          min-height: 480px;
        }
      `}</style>

      <div class="location-hero">
        <HeadingImage
          imageKey="summerlin"
          heading="Summerlin Open Houses"
          variant="background"
          priority
        />
        <h1>Summerlin Open Houses</h1>
        <p style="font-size: 1.2rem; opacity: 0.9;">
          Find open houses in Summerlin, Las Vegas's premier master-planned community
        </p>
        <FeaturedRealtor variant="hero" tone="dark" />
      </div>

      <OpenHouseWidgetSection pageKey="summerlin-open-houses" />

      <div class="search-section">
        <h2 style="color: #0A2540; margin-bottom: 1rem;">Search Summerlin Properties</h2>
        <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw" />
      </div>

      <div class="info-section">
        <h2>About Summerlin Open Houses</h2>
        <HeadingImage
          imageKey="about-summerlin"
          heading="About Summerlin Open Houses"
          variant="section"
        />
        <p>
          Summerlin open houses offer the opportunity to explore Las Vegas's premier master-planned
          community. Located in zip codes 89134, 89135, 89138, and 89144, Summerlin features
          1,800–4,000+ sq ft homes, Palo Verde High School, West Career and Technical Academy,
          Downtown Summerlin, and Red Rock Canyon trailheads. Weekend open houses are common in The
          Ridges, The Summit, and villages throughout 89134–89144.
        </p>
        <p>
          Dr. Jan Duffy, an Open House Expert, hosts numerous open houses throughout Summerlin,
          providing visitors with expert insights about neighborhoods, schools, amenities, and
          market conditions. Whether you're looking for a luxury estate in The Ridges or a
          2,000–3,000 sq ft home elsewhere in Summerlin, weekend open houses let you compare
          inventory in person.
        </p>
      </div>

      {/* Internal Linking */}
      <InternalLinking
        title="Explore Summerlin More"
        links={[
          {
            title: 'Summerlin Real Estate Guide',
            url: '/neighborhoods/summerlin/',
            description: 'Learn more about Summerlin neighborhoods, schools, and amenities',
          },
          {
            title: 'This Weekend Open Houses',
            url: '/this-weekend/',
            description: 'Browse all weekend open houses in Las Vegas Valley',
          },
          {
            title: 'Buyer Services',
            url: '/services/buyer-services/',
            description: 'Get expert buyer representation in Summerlin',
          },
          {
            title: 'Contact Dr. Jan Duffy',
            url: '/contact/',
            description: 'Schedule a personalized Summerlin property tour',
          },
        ]}
        className="mt-8"
      />

      {/* FAQ Section */}
      <EnhancedPageSEO pageKey="summerlin-open-houses" showFAQs={false} className="mt-8" />
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Summerlin Open Houses - Find Properties in Summerlin | Dr. Jan Duffy',
  meta: [
    {
      name: 'description',
      content:
        'Find open houses in Summerlin, Las Vegas. Browse Summerlin properties, view weekend open houses, and get expert guidance from Dr. Jan Duffy.',
    },
    {
      name: 'keywords',
      content:
        'Summerlin open houses, Summerlin real estate, open houses Summerlin, Summerlin homes, Summerlin properties, Las Vegas Summerlin',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://www.openhouseupdate.com/summerlin-open-houses/',
    },
  ],
}
