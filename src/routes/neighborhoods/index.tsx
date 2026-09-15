import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import GoogleMapEmbed from '~/components/local-seo/google-map-embed'
import HeadingImage from '~/components/media/heading-image'
import { business } from '~/config/business'
import type { SiteImageKey } from '~/config/images'

const neighborhoods: Array<{
  slug: string
  name: string
  imageKey: SiteImageKey
  heading: string
  blurb: string
}> = [
  {
    slug: 'summerlin',
    name: 'Summerlin',
    imageKey: 'summerlin',
    heading: 'Summerlin Open Houses',
    blurb:
      '89134–89144 against Red Rock Canyon. Palo Verde High School, Downtown Summerlin, 1,800–4,000+ sq ft homes, 20–25 minutes to the Strip via I-215.',
  },
  {
    slug: 'henderson',
    name: 'Henderson',
    imageKey: 'henderson',
    heading: 'Henderson Open Houses',
    blurb:
      '89002–89074 including Green Valley Ranch and Seven Hills. Coronado High School, McCullough views, 15–20 minute Strip commute.',
  },
  {
    slug: 'green-valley',
    name: 'Green Valley',
    imageKey: 'green-valley',
    heading: 'Green Valley Open Houses',
    blurb:
      'Henderson 89012–89014 around Green Valley Ranch. Coronado High School, 1,800–3,500 sq ft floor plans, I-215 access.',
  },
  {
    slug: 'north-las-vegas',
    name: 'North Las Vegas',
    imageKey: 'north-las-vegas',
    heading: 'North Las Vegas Open Houses',
    blurb:
      '89084 Skye Canyon and 89031 Centennial Hills. Newer construction, 1,600–3,200 sq ft plans, I-15 commute.',
  },
  {
    slug: 'spring-valley',
    name: 'Spring Valley',
    imageKey: 'spring-valley',
    heading: 'Spring Valley Open Houses',
    blurb:
      '89103–89147 west of the Strip. Tile-roof inventory, Durango Drive retail, I-215 / Tropicana commute.',
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    imageKey: 'enterprise',
    heading: 'Enterprise Open Houses',
    blurb:
      '89118–89148 southwest valley. Mountain’s Edge 89178, larger lots near the Spring Mountains, I-15 south access.',
  },
]

export default component$(() => {
  return (
    <div class="neighborhoods-hub">
      <style>{`
        .neighborhoods-hub {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        .hub-hero {
          position: relative;
          overflow: hidden;
          text-align: center;
          margin-bottom: 3rem;
          padding: 4rem 1.5rem;
          color: white;
          border-radius: 12px;
        }
        .hub-hero > :not(figure) {
          position: relative;
          z-index: 1;
        }
        .hub-hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .hub-hero p {
          font-size: 1.15rem;
          max-width: 720px;
          margin: 0 auto;
          opacity: 0.95;
        }
        .hub-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .hub-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
        }
        .hub-card h2 {
          color: #0A2540;
          font-size: 1.35rem;
          margin: 1rem 1.25rem 0.5rem;
        }
        .hub-card p {
          color: #475569;
          margin: 0 1.25rem 1.25rem;
          line-height: 1.6;
          flex: 1;
        }
        .hub-cta {
          background: #0A2540;
          color: white;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          margin-bottom: 2rem;
        }
        .hub-cta a {
          display: inline-block;
          margin: 0.5rem;
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          background: #3A8DDE;
          color: white;
        }
        @media (max-width: 768px) {
          .hub-hero h1 {
            font-size: 2rem;
          }
        }
      `}</style>

      <div class="hub-hero">
        <HeadingImage
          imageKey="neighborhood-expertise"
          heading="Las Vegas Neighborhood Open Houses"
          variant="background"
          priority
        />
        <h1>Las Vegas Neighborhood Open Houses</h1>
        <p>
          Tour Summerlin, Henderson, Green Valley, North Las Vegas, Spring Valley, and Enterprise
          this weekend with {business.agentName} at {business.gbpName}, {business.fullAddress}. Call{' '}
          {business.phoneDisplay}.
        </p>
      </div>

      <div class="hub-grid">
        {neighborhoods.map((area) => (
          <a key={area.slug} class="hub-card" href={`/neighborhoods/${area.slug}/`}>
            <HeadingImage imageKey={area.imageKey} heading={area.heading} variant="card" />
            <h2>{area.name}</h2>
            <p>{area.blurb}</p>
          </a>
        ))}
      </div>

      <div class="hub-cta">
        <HeadingImage
          imageKey="comparison"
          heading="Compare inventory in person"
          variant="section"
        />
        <h2>Compare inventory in person</h2>
        <p>
          Open House Marketplace does not rank neighborhoods as safest or best for any group.
          Compare named school campuses, square footage, HVAC age, HOA dues, and I-15 / I-215
          commute.
        </p>
        <a href={`tel:${business.phoneTel}`}>Call {business.phoneDisplay}</a>
        <a href="/this-weekend/">This Weekend’s Open Houses</a>
        <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer">
          Directions
        </a>
      </div>

      <GoogleMapEmbed title="Open House Marketplace at 760 Windover Ct, Las Vegas NV 89138" />
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Las Vegas Neighborhood Open Houses | Summerlin, Henderson, North Las Vegas',
  meta: [
    {
      name: 'description',
      content:
        'Weekend open houses by Las Vegas neighborhood: Summerlin 89134–89144, Henderson, Green Valley, North Las Vegas, Spring Valley, and Enterprise. Open House Marketplace, 760 Windover Ct, Las Vegas NV 89138. Call (702) 200-3422.',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
  ],
}
