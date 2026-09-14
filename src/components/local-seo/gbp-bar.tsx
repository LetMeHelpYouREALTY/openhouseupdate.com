import { component$ } from '@builder.io/qwik'
import { business } from '~/config/business'

export default component$(() => {
  return (
    <section class="gbp-bar" aria-label="Open House Marketplace office details">
      <style>{`
        .gbp-bar {
          background: #0A2540;
          color: #fff;
          padding: 1.25rem 1.5rem;
          border-top: 3px solid #3A8DDE;
        }
        .gbp-bar-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 1.5rem;
          align-items: center;
        }
        .gbp-bar h2 {
          font-size: 1.15rem;
          margin: 0 0 0.35rem;
          font-weight: 700;
        }
        .gbp-bar p {
          margin: 0.15rem 0;
          font-size: 0.95rem;
          color: #e2e8f0;
        }
        .gbp-bar a {
          color: #fff;
          text-decoration: underline;
        }
        .gbp-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: flex-end;
        }
        .gbp-actions a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.7rem 1.1rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          min-height: 44px;
        }
        .gbp-actions .call {
          background: #16B286;
        }
        .gbp-actions .directions {
          background: #3A8DDE;
        }
        .gbp-actions .reviews {
          background: transparent;
          border: 2px solid #fff;
        }
        @media (max-width: 800px) {
          .gbp-bar-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .gbp-actions {
            justify-content: center;
          }
        }
      `}</style>
      <div class="gbp-bar-inner">
        <div>
          <h2>{business.gbpName}</h2>
          <p>
            {business.agentName} · {business.brokerage}
          </p>
          <p>
            <a href={business.mapsUrl}>
              {business.streetAddress}, {business.addressLocality}, {business.addressRegion}{' '}
              {business.postalCode}
            </a>
          </p>
          <p>
            <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a> ·{' '}
            {business.hoursDisplay}
          </p>
        </div>
        <div class="gbp-actions">
          <a class="call" href={`tel:${business.phoneTel}`}>
            Call
          </a>
          <a
            class="directions"
            href={business.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Directions
          </a>
          <a class="reviews" href={business.reviewsUrl} target="_blank" rel="noopener noreferrer">
            View Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
})
