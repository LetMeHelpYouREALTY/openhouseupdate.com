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
          imageKey="spring-valley"
          heading="Spring Valley Open Houses - Las Vegas"
          variant="background"
          priority
        />
        <h1>Spring Valley Open Houses - Las Vegas</h1>
        <p style="font-size: 1.2rem; opacity: 0.9;">
          Weekend tours near Chinatown, Desert Breeze Park, and the 215 Beltway
        </p>
        <FeaturedRealtor variant="hero" tone="dark" />
      </div>

      <OpenHouseWidgetSection pageKey="neighborhood-spring-valley" />

      <div class="neighborhood-content">
        <div class="main-content">
          <h2>About Spring Valley</h2>
          <HeadingImage
            imageKey="about-spring-valley"
            heading="About Spring Valley"
            variant="section"
          />
          <p>
            Spring Valley covers unincorporated Clark County west of the Strip in zip codes 89102,
            89103, 89117, 89146, and 89147. Spring Mountain Road (Chinatown), Rainbow Boulevard, and
            I-215 are the main corridors. Ranch and two-story stucco homes typically run 1,400–2,400
            sq ft on 5,000–8,000 sq ft lots.
          </p>
          <h3>What to compare on a Spring Valley listing</h3>
          <ul>
            <li>
              <strong>Named campuses:</strong> Bonanza High School, Spring Valley High School, and
              the elementary listed on the MLS sheet
            </li>
            <li>
              <strong>Parks:</strong> Desert Breeze Park (soccer fields, skate park) and Spring
              Valley Community Park
            </li>
            <li>
              <strong>Commute:</strong> I-215 to Harry Reid International Airport is about 10–15
              minutes from 89147
            </li>
            <li>
              <strong>Shopping:</strong> Chinatown Plaza, Boca Park, and Rainbow / Flamingo retail
            </li>
            <li>
              <strong>HOA:</strong> Many 1970s–1990s tracts have no HOA; confirm dues on each MLS
              sheet
            </li>
          </ul>
          <h3>Weekend open houses</h3>
          <p>
            Dr. Jan Duffy hosts and tours Spring Valley open houses. Ask for a Saturday route that
            matches your price cap and square footage.
          </p>
        </div>
        <div class="sidebar">
          <div class="info-card">
            <h3>Quick Facts</h3>
            <div class="stat-grid">
              <div class="stat-item">
                <div class="stat-value">89147</div>
                <div class="stat-label">Primary ZIP</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">I-215</div>
                <div class="stat-label">Beltway Access</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">1.4–2.4k</div>
                <div class="stat-label">Typical Sq Ft</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">10–15</div>
                <div class="stat-label">Min to Airport</div>
              </div>
            </div>
            <p>
              <strong>Zip codes:</strong> 89102, 89103, 89117, 89146, 89147
            </p>
          </div>
          <div class="info-card">
            <FeaturedRealtor variant="sidebar" />
            <h3>Contact {business.agentName}</h3>
            <a
              href={business.realScoutOnboarding}
              target="_blank"
              rel="noopener noreferrer"
              style="display: inline-block; margin-top: 1rem; padding: 0.75rem 1.5rem; background: #3A8DDE; color: white; border-radius: 6px; text-decoration: none;"
            >
              Search Spring Valley listings
            </a>
          </div>
        </div>
      </div>

      <InternalLinking
        title="Nearby Las Vegas Valley areas"
        links={[
          {
            title: 'Summerlin Open Houses',
            url: '/neighborhoods/summerlin/',
            description: 'Red Rock-side villages in 89134–89138',
          },
          {
            title: 'Enterprise Open Houses',
            url: '/neighborhoods/enterprise/',
            description: 'Southern Highlands and Rhodes Ranch along I-15',
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
        pageKey="spring-valley"
        showFAQs={true}
        faqTitle="Spring Valley Real Estate Questions"
        className="mt-8"
      />
    </div>
  )
})

export const head: DocumentHead = createOptimizedHead('spring-valley')
