import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import FeaturedRealtor from '~/components/agent/featured-realtor'
import HeadingImage from '~/components/media/heading-image'
import OpenHouseWidgetSection from '~/components/realscout/open-house-widget-section'
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
          border-bottom: 2px solid #3A8DDE;
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
          color: #3A8DDE;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #666;
          margin-top: 0.25rem;
        }
        
        @media (max-width: 968px) {
          .neighborhood-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div class="neighborhood-hero">
        <HeadingImage
          imageKey="summerlin"
          heading="Summerlin Real Estate - Las Vegas"
          variant="background"
          priority
        />
        <h1>Summerlin Real Estate - Las Vegas</h1>
        <p style="font-size: 1.2rem; opacity: 0.9;">
          Open houses in Summerlin Centre, The Paseos, The Vistas, and Stonebridge — zip codes
          89134, 89135, 89138, and 89144
        </p>
        <FeaturedRealtor variant="hero" tone="dark" />
      </div>

      <OpenHouseWidgetSection pageKey="neighborhood-summerlin" />

      <div class="neighborhood-content">
        <div class="main-content">
          <h2>About Summerlin</h2>
          <HeadingImage imageKey="about-summerlin" heading="About Summerlin" variant="section" />
          <p>
            Summerlin is a 22,500-acre master-planned community in zip codes 89134, 89135, 89138,
            and 89144. Downtown Summerlin shopping, Red Rock Canyon trailheads, and 200+ miles of
            paths sit minutes from most villages. Open House Marketplace at 760 Windover Ct (89138)
            is the local base for weekend property tours with Dr. Jan Duffy.
          </p>

          <h3>Why Choose Summerlin?</h3>
          <ul>
            <li>
              <strong>Master-Planned Community:</strong> Parks, trails, and village amenities
              designed by the Howard Hughes Corporation
            </li>
            <li>
              <strong>Schools:</strong> Public campuses include Bonner Elementary, Goolsby
              Elementary, and Palo Verde High School
            </li>
            <li>
              <strong>Shopping & Dining:</strong> Downtown Summerlin and Red Rock Casino Resort &
              Spa along Charleston Boulevard
            </li>
            <li>
              <strong>Recreation:</strong> 150+ parks, 200+ miles of trails, golf courses, and
              community centers
            </li>
            <li>
              <strong>Mountain Views:</strong> Red Rock Canyon and the Spring Mountains from many
              89135–89138 streets
            </li>
            <li>
              <strong>Commute:</strong> Approximately 20–25 minutes to the Las Vegas Strip via the
              215 Beltway
            </li>
          </ul>

          <h3>Home Prices in Summerlin</h3>
          <p>
            Summerlin offers diverse housing options from entry-level homes to luxury estates.
            Prices typically range from $400,000 to over $2 million, with premium communities like
            The Ridges and The Summit featuring luxury properties exceeding $3 million. The average
            home price in Summerlin is approximately $650,000-$750,000 as of November 2025.
          </p>

          <h3>Top Communities in Summerlin</h3>
          <ul>
            <li>
              <strong>The Ridges:</strong> Ultra-luxury gated community with resort-style living
            </li>
            <li>
              <strong>The Summit:</strong> Exclusive community with custom homes and mountain views
            </li>
            <li>
              <strong>Red Rock Country Club:</strong> Golf community with championship course
            </li>
            <li>
              <strong>Willows:</strong> Village with mature landscaping and 1990s–2000s housing
              stock
            </li>
            <li>
              <strong>Trails Village:</strong> Active lifestyle community with extensive trail
              system
            </li>
          </ul>

          <h3>Schools in Summerlin</h3>
          <p>
            Summerlin is served by Clark County School District campuses including Bonner
            Elementary, Goolsby Elementary, Rogich Middle School, and Palo Verde High School, plus
            nearby private options. Ask Dr. Jan Duffy for the attendance zone that matches a
            specific listing before you tour.
          </p>

          <h3>Search Summerlin Properties</h3>
          <p>
            Ready to find your dream home in Summerlin? Use our advanced search to browse available
            properties, view open houses, and get expert guidance from Dr. Jan Duffy, your Summerlin
            real estate specialist.
          </p>
        </div>

        <div class="sidebar">
          <div class="info-card">
            <h3>Quick Facts</h3>
            <div class="stat-grid">
              <div class="stat-item">
                <div class="stat-value">$650K</div>
                <div class="stat-label">Avg Home Price</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">22.5K</div>
                <div class="stat-label">Acres</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">150+</div>
                <div class="stat-label">Parks</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">200+</div>
                <div class="stat-label">Miles of Trails</div>
              </div>
            </div>
            <p>
              <strong>Zip Codes:</strong> 89134, 89135, 89138, 89144
            </p>
            <p>
              <strong>Established:</strong> 1990
            </p>
            <p>
              <strong>Developer:</strong> The Howard Hughes Corporation
            </p>
          </div>

          <div class="info-card">
            <FeaturedRealtor variant="sidebar" />
            <h3>Contact Dr. Jan Duffy</h3>
            <p>Expert Summerlin real estate guidance</p>
            <p>
              <strong>Phone:</strong> (702) 200-3422
            </p>
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              style="display: inline-block; margin-top: 1rem; padding: 0.75rem 1.5rem; background: #3A8DDE; color: white; border-radius: 6px; text-decoration: none;"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Internal Linking */}
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
            title: 'North Las Vegas Properties',
            url: '/neighborhoods/north-las-vegas/',
            description: 'New construction in Skye Canyon (89084) and Centennial Hills (89031)',
          },
          {
            title: 'Green Valley Real Estate',
            url: '/neighborhoods/green-valley/',
            description: 'Upscale Henderson community with luxury homes',
          },
          {
            title: 'Search All Properties',
            url: '/search/',
            description: 'Browse all Las Vegas Valley homes and open houses',
          },
        ]}
        className="mt-8"
      />

      {/* FAQ Section */}
      <EnhancedPageSEO
        pageKey="summerlin"
        showFAQs={true}
        faqTitle="Summerlin Real Estate - Frequently Asked Questions"
        className="mt-8"
      />
    </div>
  )
})

export const head: DocumentHead = createOptimizedHead('summerlin')
