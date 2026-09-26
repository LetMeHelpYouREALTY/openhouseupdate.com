import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import FeaturedRealtor from '~/components/agent/featured-realtor'
import HeadingImage from '~/components/media/heading-image'
import OpenHouseWidgetSection from '~/components/realscout/open-house-widget-section'
import EnhancedPageSEO, { createOptimizedHead } from '~/components/seo/enhanced-page-seo'
import InternalLinking from '~/components/seo/internal-linking'
import { business } from '~/config/business'

export default component$(() => {
  return (
    <div class="neighborhood-page">
      <style>{`
        .neighborhood-page { max-width: 1200px; margin: 0 auto; padding: 2rem 1rem; }
        .neighborhood-hero { position: relative; overflow: hidden; text-align: center; margin-bottom: 3rem; padding: 4rem 1.5rem; color: white; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .neighborhood-hero > :not(figure) { position: relative; z-index: 1; }
        .neighborhood-hero h1 { font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; }
        .neighborhood-content { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; margin-bottom: 2rem; }
        .main-content { background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .sidebar { display: flex; flex-direction: column; gap: 1.5rem; }
        .info-card { background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .info-card h3 { color: #0A2540; font-size: 1.3rem; font-weight: 600; margin-bottom: 1rem; border-bottom: 2px solid #3A8DDE; padding-bottom: 0.5rem; }
        .info-card p { color: #666; line-height: 1.6; margin-bottom: 0.5rem; }
        .stat-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1rem; }
        .stat-item { text-align: center; padding: 1rem; background: #F7F9FC; border-radius: 8px; }
        .stat-value { font-size: 1.5rem; font-weight: 700; color: #3A8DDE; }
        .stat-label { font-size: 0.9rem; color: #666; margin-top: 0.25rem; }
        .main-content h2, .main-content h3 { color: #0A2540; margin-top: 2rem; margin-bottom: 1rem; }
        .main-content h2 { font-size: 2rem; border-bottom: 2px solid #3A8DDE; padding-bottom: 0.5rem; }
        .main-content ul { margin: 1rem 0; padding-left: 2rem; color: #666; line-height: 1.8; }
        @media (max-width: 968px) { .neighborhood-content { grid-template-columns: 1fr; } }
      `}</style>

      <div class="neighborhood-hero">
        <HeadingImage
          imageKey="enterprise"
          heading="Enterprise Open Houses - Las Vegas"
          variant="background"
          priority
        />
        <h1>Enterprise Open Houses - Las Vegas</h1>
        <p style="font-size: 1.2rem; opacity: 0.9;">
          Southern Highlands, Rhodes Ranch, and Cactus Avenue listings south of the airport
        </p>
        <FeaturedRealtor variant="hero" tone="dark" />
      </div>

      <OpenHouseWidgetSection pageKey="neighborhood-enterprise" />

      <div class="neighborhood-content">
        <div class="main-content">
          <h2>About Enterprise</h2>
          <HeadingImage imageKey="about-enterprise" heading="About Enterprise" variant="section" />
          <p>
            Enterprise is unincorporated Clark County south of Harry Reid International Airport, in
            zip codes 89118, 89139, 89141, and 89183. Southern Highlands, Rhodes Ranch, and newer
            tracts along Cactus Avenue and Dean Martin Drive make up most of the weekend open-house
            inventory. Two-story stucco homes often run 1,800–3,200 sq ft.
          </p>
          <h3>What to compare on an Enterprise listing</h3>
          <ul>
            <li>
              <strong>Named campuses:</strong> Desert Oasis High School, Liberty High School, and
              the elementary printed on the MLS
            </li>
            <li>
              <strong>Master plans:</strong> Southern Highlands (89141) and Rhodes Ranch (89139)
              with golf and guard gates on some streets
            </li>
            <li>
              <strong>Commute:</strong> I-15 at Cactus or Sloan; 15–25 minutes to the Strip
              depending on traffic
            </li>
            <li>
              <strong>Recreation:</strong> Exploration Peak Park and the Southern Highlands trail
              network
            </li>
            <li>
              <strong>HOA:</strong> Most 2000s-and-later tracts have monthly dues — read the resale
              package before you tour
            </li>
          </ul>
          <h3>Weekend open houses</h3>
          <p>
            {business.agentName} maps Saturday Enterprise tours from {business.gbpName} at{' '}
            {business.fullAddress}. Call {business.phoneDisplay} with your price cap and bedroom
            count.
          </p>
        </div>
        <div class="sidebar">
          <div class="info-card">
            <h3>Quick Facts</h3>
            <div class="stat-grid">
              <div class="stat-item">
                <div class="stat-value">89141</div>
                <div class="stat-label">Southern Highlands</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">I-15</div>
                <div class="stat-label">Cactus Interchange</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">1.8–3.2k</div>
                <div class="stat-label">Typical Sq Ft</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">15–25</div>
                <div class="stat-label">Min to Strip</div>
              </div>
            </div>
            <p>
              <strong>Zip codes:</strong> 89118, 89139, 89141, 89183
            </p>
            <p>
              <strong>Office:</strong> {business.fullAddress}
            </p>
          </div>
          <div class="info-card">
            <FeaturedRealtor variant="sidebar" />
            <h3>Contact {business.agentName}</h3>
            <p>
              <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
            </p>
            <a
              href={business.realScoutOnboarding}
              target="_blank"
              rel="noopener noreferrer"
              style="display: inline-block; margin-top: 1rem; padding: 0.75rem 1.5rem; background: #3A8DDE; color: white; border-radius: 6px; text-decoration: none;"
            >
              Search Enterprise listings
            </a>
          </div>
        </div>
      </div>

      <InternalLinking
        title="Nearby Las Vegas Valley areas"
        links={[
          {
            title: 'Henderson Open Houses',
            url: '/neighborhoods/henderson/',
            description: 'Green Valley, Anthem, and 89052–89074 inventory',
          },
          {
            title: 'Spring Valley Open Houses',
            url: '/neighborhoods/spring-valley/',
            description: 'Chinatown, Desert Breeze Park, and 89147',
          },
          {
            title: 'This Weekend Open Houses',
            url: '/this-weekend/',
            description: 'Saturday and Sunday tours valley-wide',
          },
        ]}
        className="mt-8"
      />

      <EnhancedPageSEO
        pageKey="enterprise"
        showFAQs={true}
        faqTitle="Enterprise Real Estate Questions"
        className="mt-8"
      />
    </div>
  )
})

export const head: DocumentHead = createOptimizedHead('enterprise')
