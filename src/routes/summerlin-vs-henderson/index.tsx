import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import HeadingImage from '~/components/media/heading-image'
import EnhancedPageSEO from '~/components/seo/enhanced-page-seo'
import InternalLinking from '~/components/seo/internal-linking'

export default component$(() => {
  return (
    <div class="comparison-page">
      <style>{`
        .comparison-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        
        .comparison-hero {
          position: relative;
          overflow: hidden;
          text-align: center;
          margin-bottom: 3rem;
          padding: 3rem 1.5rem;
          color: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .comparison-hero > :not(figure) {
          position: relative;
          z-index: 1;
        }
        
        .comparison-hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .comparison-table {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          margin-bottom: 2rem;
          overflow-x: auto;
        }
        
        .comparison-table table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .comparison-table th {
          background: #F7F9FC;
          padding: 1rem;
          text-align: left;
          font-weight: 600;
          color: #0A2540;
          border-bottom: 2px solid #3A8DDE;
        }
        
        .comparison-table td {
          padding: 1rem;
          border-bottom: 1px solid #e5e7eb;
          color: #666;
        }
        
        .comparison-table tr:hover {
          background: #F7F9FC;
        }
        
        .section {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          margin-bottom: 2rem;
        }
        
        .section h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          border-bottom: 2px solid #3A8DDE;
          padding-bottom: 0.5rem;
        }
        
        .section h3 {
          color: #0A2540;
          font-size: 1.5rem;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .pros-cons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 1rem;
        }
        
        .pros, .cons {
          padding: 1.5rem;
          border-radius: 8px;
        }
        
        .pros {
          background: #d1fae5;
          border-left: 4px solid #16B286;
        }
        
        .cons {
          background: #fee2e2;
          border-left: 4px solid #ef4444;
        }
        
        .pros h4, .cons h4 {
          font-weight: 600;
          margin-bottom: 1rem;
          color: #0A2540;
        }
        
        .pros ul, .cons ul {
          list-style: none;
          padding: 0;
        }
        
        .pros li, .cons li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
        }
        
        .pros li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #16B286;
          font-weight: bold;
        }
        
        .cons li:before {
          content: "✗";
          position: absolute;
          left: 0;
          color: #ef4444;
          font-weight: bold;
        }
        
        @media (max-width: 768px) {
          .pros-cons {
            grid-template-columns: 1fr;
          }
          
          .comparison-table {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div class="comparison-hero">
        <HeadingImage
          imageKey="comparison"
          heading="Summerlin vs Henderson: Complete Comparison"
          variant="background"
          priority
        />
        <h1>Summerlin vs Henderson: Complete Comparison</h1>
        <p style="font-size: 1.2rem; opacity: 0.9;">
          Which Las Vegas community is right for you? Compare Summerlin and Henderson to make an
          informed decision.
        </p>
      </div>

      <div class="comparison-table">
        <h2 style="margin-bottom: 1.5rem; color: #0A2540;">Quick Comparison</h2>
        <table>
          <thead>
            <tr>
              <th>Factor</th>
              <th>Summerlin</th>
              <th>Henderson</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Average Home Price</strong>
              </td>
              <td>$650K - $750K</td>
              <td>$550K - $650K</td>
            </tr>
            <tr>
              <td>
                <strong>Location</strong>
              </td>
              <td>West Las Vegas (zip codes 89134-89144)</td>
              <td>Southeast Las Vegas (zip codes 89002-89074)</td>
            </tr>
            <tr>
              <td>
                <strong>Named high schools</strong>
              </td>
              <td>Palo Verde High / West Career and Technical Academy</td>
              <td>Coronado High / Green Valley High</td>
            </tr>
            <tr>
              <td>
                <strong>Recreation</strong>
              </td>
              <td>Red Rock Canyon, 200+ miles of trails</td>
              <td>Lake Las Vegas, Green Valley Ranch, parks</td>
            </tr>
            <tr>
              <td>
                <strong>Commute to Las Vegas</strong>
              </td>
              <td>15-25 minutes</td>
              <td>20-30 minutes</td>
            </tr>
            <tr>
              <td>
                <strong>Founded</strong>
              </td>
              <td>1990</td>
              <td>1953</td>
            </tr>
            <tr>
              <td>
                <strong>Master-Planned</strong>
              </td>
              <td>Yes (Howard Hughes)</td>
              <td>Multiple communities</td>
            </tr>
            <tr>
              <td>
                <strong>Fit if you want</strong>
              </td>
              <td>Red Rock access, Downtown Summerlin, $600K+ mid-range</td>
              <td>Green Valley Ranch, Lake Las Vegas, $500K–$700K mid-range</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="section">
        <h2>Summerlin Overview</h2>
        <HeadingImage imageKey="summerlin" heading="Summerlin Overview" variant="section" />
        <p>
          Summerlin (zip codes 89134, 89135, 89138, 89144) is a Howard Hughes master-planned
          community on the west side of the valley with Red Rock Canyon views, Downtown Summerlin
          shopping, golf, and 200+ miles of trails. Named high schools include Palo Verde High and
          West Career and Technical Academy.
        </p>

        <div class="pros-cons">
          <div class="pros">
            <h4>Pros of Summerlin</h4>
            <ul>
              <li>Palo Verde High and West Career and Technical Academy</li>
              <li>Beautiful mountain views of Red Rock Canyon</li>
              <li>Downtown Summerlin shopping and dining</li>
              <li>Extensive park system (150+ parks, 200+ miles trails)</li>
              <li>Premier master-planned community design</li>
              <li>Luxury communities like The Ridges</li>
              <li>Strong property value appreciation</li>
              <li>Proximity to Red Rock Canyon National Conservation Area</li>
            </ul>
          </div>
          <div class="cons">
            <h4>Cons of Summerlin</h4>
            <ul>
              <li>Higher home prices ($650K-$750K average)</li>
              <li>Higher HOA fees in premium communities</li>
              <li>Traffic can be heavier in peak times</li>
              <li>Limited affordable housing options</li>
              <li>Farther from Las Vegas Strip</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="section">
        <h2>Henderson Overview</h2>
        <HeadingImage imageKey="henderson" heading="Henderson Overview" variant="section" />
        <p>
          Henderson (zip codes 89002, 89011, 89012, 89014, 89015, 89052, 89074) is Nevada’s
          second-largest city, with Green Valley Ranch, Lake Las Vegas, Coronado High School, and
          more mid-range housing than 89134–89138. Commute to central Las Vegas is typically 20–30
          minutes via I-215.
        </p>

        <div class="pros-cons">
          <div class="pros">
            <h4>Pros of Henderson</h4>
            <ul>
              <li>More affordable than Summerlin ($550K-$650K average)</li>
              <li>Coronado High and Green Valley High</li>
              <li>Green Valley Ranch, Lake Las Vegas, and city parks</li>
              <li>Diverse communities (Green Valley, Seven Hills, Lake Las Vegas)</li>
              <li>Good value for money</li>
              <li>Strong community feel</li>
              <li>Access to Lake Las Vegas and outdoor recreation</li>
            </ul>
          </div>
          <div class="cons">
            <h4>Cons of Henderson</h4>
            <ul>
              <li>Slightly longer commute to Las Vegas (20-30 min)</li>
              <li>Less centralized shopping than Downtown Summerlin</li>
              <li>School ratings slightly lower than Summerlin</li>
              <li>Older established areas may need updates</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="section">
        <h2>Which is Better for You?</h2>
        <HeadingImage
          imageKey="comparison"
          heading="How to compare Summerlin and Henderson"
          variant="section"
        />

        <h3>Choose Summerlin If:</h3>
        <ul>
          <li>You want Palo Verde High / West Career and Technical Academy campuses</li>
          <li>Budget allows for $650K+ home prices</li>
          <li>You want luxury amenities and resort-style living</li>
          <li>Mountain views and proximity to Red Rock Canyon are important</li>
          <li>You value master-planned community design</li>
          <li>You want strong long-term property value appreciation</li>
        </ul>

        <h3>Choose Henderson If:</h3>
        <ul>
          <li>You want better value and more affordable options</li>
          <li>You want Coronado High or Green Valley High campuses</li>
          <li>You prefer Green Valley Ranch, Lake Las Vegas, or 1950s–1990s housing stock</li>
          <li>Budget is $550K-$650K range</li>
          <li>You want diverse community options (Green Valley, Seven Hills, etc.)</li>
          <li>Access to Lake Las Vegas recreation is appealing</li>
        </ul>
      </div>

      <div class="section">
        <h2>Bottom Line</h2>
        <p>
          Both Summerlin and Henderson offer trail systems, named high schools, and weekend open
          houses. Summerlin sits against Red Rock with higher average prices; Henderson offers more
          mid-range inventory around Green Valley Ranch and Lake Las Vegas.
        </p>
        <p>
          Dr. Jan Duffy can help you explore both communities, compare specific neighborhoods, and
          find the perfect home for your needs and budget. Contact us to schedule neighborhood tours
          and get expert guidance on choosing between Summerlin and Henderson.
        </p>
      </div>

      {/* Internal Linking */}
      <InternalLinking
        title="Explore These Communities"
        links={[
          {
            title: 'Summerlin Real Estate',
            url: '/neighborhoods/summerlin/',
            description: 'Browse Summerlin homes for sale',
          },
          {
            title: 'Henderson Real Estate',
            url: '/neighborhoods/henderson/',
            description: 'Browse Henderson homes for sale',
          },
          {
            title: 'Green Valley Properties',
            url: '/neighborhoods/green-valley/',
            description: 'Explore Green Valley in Henderson',
          },
          {
            title: 'Search All Properties',
            url: '/search/',
            description: 'Browse all Las Vegas Valley homes',
          },
        ]}
        className="mt-8"
      />

      {/* FAQ Section */}
      <EnhancedPageSEO pageKey="comparison" showFAQs={false} className="mt-8" />
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Summerlin vs Henderson: Complete Comparison | Dr. Jan Duffy',
  meta: [
    {
      name: 'description',
      content:
        'Compare Summerlin vs Henderson Las Vegas on home prices, named school campuses, commute times, HOA dues, and weekend open-house inventory.',
    },
    {
      name: 'keywords',
      content:
        'Summerlin vs Henderson, compare Las Vegas neighborhoods, Summerlin or Henderson, best Las Vegas community, Las Vegas neighborhood comparison',
    },
    {
      property: 'og:title',
      content: 'Summerlin vs Henderson: Complete Comparison | Dr. Jan Duffy',
    },
    {
      property: 'og:description',
      content:
        'Compare Summerlin vs Henderson Las Vegas on home prices, named school campuses, commute times, HOA dues, and weekend open-house inventory.',
    },
    {
      property: 'og:type',
      content: 'article',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://www.openhouseupdate.com/summerlin-vs-henderson/',
    },
  ],
}
