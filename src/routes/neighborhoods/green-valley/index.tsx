import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import HeadingImage from '~/components/media/heading-image'
import EnhancedPageSEO, { createOptimizedHead } from '~/components/seo/enhanced-page-seo'
import InternalLinking from '~/components/seo/internal-linking'

export default component$(() => {
  return (
    <div class="neighborhood-page">
      <style>{`
        .neighborhood-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        
        .neighborhood-hero {
          position: relative;
          overflow: hidden;
          text-align: center;
          margin-bottom: 3rem;
          padding: 4rem 1.5rem;
          color: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .neighborhood-hero > :not(figure) {
          position: relative;
          z-index: 1;
        }
        
        .neighborhood-hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .neighborhood-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .main-content {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .info-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .info-card h3 {
          color: #0A2540;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          border-bottom: 2px solid #16B286;
          padding-bottom: 0.5rem;
        }
        
        .info-card p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }
        
        .stat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .stat-item {
          text-align: center;
          padding: 1rem;
          background: #F7F9FC;
          border-radius: 8px;
        }
        
        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #16B286;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #666;
          margin-top: 0.25rem;
        }
        
        .main-content h2, .main-content h3 {
          color: #0A2540;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .main-content h2 {
          font-size: 2rem;
          border-bottom: 2px solid #16B286;
          padding-bottom: 0.5rem;
        }
        
        .main-content h3 {
          font-size: 1.5rem;
        }
        
        .main-content ul, .main-content ol {
          margin: 1rem 0;
          padding-left: 2rem;
          color: #666;
          line-height: 1.8;
        }
        
        .main-content li {
          margin-bottom: 0.5rem;
        }
        
        @media (max-width: 968px) {
          .neighborhood-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div class="neighborhood-hero">
        <HeadingImage
          imageKey="green-valley"
          heading="Green Valley Real Estate - Henderson"
          variant="background"
          priority
        />
        <h1>Green Valley Real Estate - Henderson</h1>
        <p style="font-size: 1.2rem; opacity: 0.9;">
          Henderson homes near Green Valley Ranch, Coronado High School, and zip codes 89012–89014
        </p>
      </div>

      <div class="neighborhood-content">
        <div class="main-content">
          <h2>About Green Valley</h2>
          <HeadingImage imageKey="green-valley" heading="About Green Valley" variant="section" />
          <p>
            Green Valley, located in Henderson zip codes 89012 and 89014, sits around Green Valley
            Ranch. Paseos, parks, and the 215 Beltway put most streets within a 15–20 minute drive
            of the Las Vegas Strip. Tour weekend open houses with Dr. Jan Duffy.
          </p>

          <h3>Why Choose Green Valley?</h3>
          <HeadingImage
            imageKey="neighborhood-expertise"
            heading="Why Choose Green Valley?"
            variant="section"
          />
          <ul>
            <li>
              <strong>Schools:</strong> Coronado High School and nearby elementary campuses —
              confirm the attendance zone for each listing
            </li>
            <li>
              <strong>Green Valley Ranch:</strong> Shopping, dining, and the resort along Green
              Valley Parkway
            </li>
            <li>
              <strong>Parks & Recreation:</strong> Neighborhood parks, trails, and the District at
              GVR
            </li>
            <li>
              <strong>Established Streets:</strong> Mature landscaping and 1,800–3,500 sq ft floor
              plans
            </li>
            <li>
              <strong>Housing Mix:</strong> Mid-range to luxury homes including golf-adjacent
              properties
            </li>
            <li>
              <strong>Commute:</strong> I-215 east to Henderson and west toward the airport and
              Strip
            </li>
          </ul>

          <h3>Green Valley Communities</h3>
          <HeadingImage
            imageKey="luxury-open-houses"
            heading="Green Valley Communities"
            variant="section"
          />
          <ul>
            <li>
              <strong>Green Valley Ranch:</strong> Master-planned community with resort-style
              amenities
            </li>
            <li>
              <strong>Coronado Country Club:</strong> Golf community with championship course
            </li>
            <li>
              <strong>Various 1980s–2000s streets:</strong> Mature landscaping and 1,800–3,500 sq ft
              floor plans throughout Green Valley
            </li>
          </ul>

          <h3>Home Prices in Green Valley</h3>
          <HeadingImage
            imageKey="home-valuation"
            heading="Home Prices in Green Valley"
            variant="section"
          />
          <p>
            Green Valley offers a range of housing options from established mid-range homes to
            luxury properties. Entry-level homes start around $400,000-$500,000, while mid-range
            homes typically range from $500,000-$800,000. Luxury homes and custom estates can exceed
            $1 million. The average home price in Green Valley is approximately $650,000-$750,000 as
            of November 2025.
          </p>

          <h3>Schools in Green Valley</h3>
          <HeadingImage imageKey="map-search" heading="Schools in Green Valley" variant="section" />
          <p>
            Green Valley listings often fall in the Coronado High School attendance area, with
            nearby elementary and middle campuses in the Clark County School District. Confirm the
            zone for a specific address with Dr. Jan Duffy before you tour.
          </p>

          <h3>Green Valley Ranch</h3>
          <HeadingImage imageKey="green-valley" heading="Green Valley Ranch" variant="section" />
          <p>
            Green Valley Ranch is a major shopping and entertainment destination featuring premium
            retailers, restaurants, movie theater, and events. This hub provides residents with
            convenient access to shopping and dining without traveling to the Las Vegas Strip.
          </p>
        </div>

        <div class="sidebar">
          <div class="info-card">
            <HeadingImage
              imageKey="green-valley"
              heading="Green Valley Quick Facts"
              variant="card"
            />
            <h3>Quick Facts</h3>
            <div class="stat-grid">
              <div class="stat-item">
                <div class="stat-value">$700K</div>
                <div class="stat-label">Avg Home Price</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">Coronado</div>
                <div class="stat-label">Named High School</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">GVR</div>
                <div class="stat-label">Green Valley Ranch</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">Est.</div>
                <div class="stat-label">1980s</div>
              </div>
            </div>
            <p>
              <strong>Zip Codes:</strong> 89012, 89014
            </p>
            <p>
              <strong>City:</strong> Henderson
            </p>
            <p>
              <strong>Typical inventory:</strong> 1,800–3,500 sq ft homes near Green Valley Ranch
            </p>
          </div>

          <div class="info-card">
            <HeadingImage imageKey="contact" heading="Contact Dr. Jan Duffy" variant="card" />
            <h3>Contact Dr. Jan Duffy</h3>
            <p>Expert Green Valley real estate guidance</p>
            <p>
              <strong>Phone:</strong> (702) 200-3422
            </p>
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              style="display: inline-block; margin-top: 1rem; padding: 0.75rem 1.5rem; background: #16B286; color: white; border-radius: 6px; text-decoration: none;"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <InternalLinking
        title="Explore More Las Vegas Neighborhoods"
        links={[
          {
            title: 'Henderson Real Estate',
            url: '/neighborhoods/henderson/',
            description:
              'Green Valley, Anthem, and Lake Las Vegas homes with parks and trail systems',
          },
          {
            title: 'Summerlin Properties',
            url: '/neighborhoods/summerlin/',
            description: 'Red Rock Canyon views and Downtown Summerlin retail in 89134–89144',
          },
          {
            title: 'Seven Hills Real Estate',
            url: '/neighborhoods/henderson/',
            description: 'Luxury gated community in Henderson',
          },
          {
            title: 'Search Green Valley Properties',
            url: '/search/',
            description: 'Browse all Green Valley homes and open houses',
          },
        ]}
        className="mt-8"
      />
      <EnhancedPageSEO
        pageKey="green-valley"
        showFAQs={true}
        faqTitle="Green Valley Real Estate - Frequently Asked Questions"
        className="mt-8"
      />
    </div>
  )
})

export const head: DocumentHead = createOptimizedHead('green-valley')
