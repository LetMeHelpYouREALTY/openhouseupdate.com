import { component$ } from '@builder.io/qwik'
import { business } from '~/config/business'
import { type OpenHouseWidgetKey, openHouseWidgetCopy } from '~/data/open-house-widget-copy'

type OpenHouseWidgetSectionProps = {
  pageKey: OpenHouseWidgetKey
  /** Optional overrides so a blog post can keep a unique H2 without a new key. */
  h2?: string
  h3?: string
  answer?: string
}

/**
 * Dashboard embed (source of truth), loaded once from src/root.tsx:
 * <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module"></script>
 * <realscout-office-listings
 *   agent-encoded-id="QWdlbnQtMjI1MDUw"
 *   sort-order="PRICE_LOW"
 *   listing-status="For Sale"
 *   property-types=",SFR"
 *   price-min="600000"
 *   price-max="900000">
 * </realscout-office-listings>
 *
 * Difference from an earlier draft: sort-order is PRICE_LOW, not NEWEST, and
 * property-types is ",SFR", not "SFR,MF,TC". The dashboard snippet has no city,
 * ZIP, or open-house attribute, so those are not set. Price-band pages may
 * replace price-min or price-max. When a page sets only one side, the other
 * dashboard default is omitted so the range stays valid.
 *
 * TODO: Event schema. No open-house feed exists beyond this widget.
 * Do not add a second RealScout script tag in this component.
 */
export default component$<OpenHouseWidgetSectionProps>((props) => {
  // Do not destructure props. Qwik's optimizer drops `pageKey` and SSR throws
  // "pageKey is not defined" on every page.
  const copy = openHouseWidgetCopy[props.pageKey]
  const heading = props.h2 ?? copy.h2
  const subhead = props.h3 ?? copy.h3
  const summary = props.answer ?? copy.answer
  const priceMin = copy.priceMin ?? (copy.priceMax ? undefined : '600000')
  const priceMax = copy.priceMax ?? (copy.priceMin ? undefined : '900000')
  const updated = new Date()
  const iso = updated.toISOString()
  const label = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(updated)
  const headingId = `open-house-update-${props.pageKey}`

  return (
    <section class="ohu-widget" aria-labelledby={headingId}>
      <style>{`
        .ohu-widget {
          max-width: 1100px;
          margin: 0 auto 2.5rem;
          padding: 1.5rem 1.25rem 2rem;
        }
        .ohu-widget-heading {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.75rem 1.5rem;
        }
        .ohu-widget h2 {
          margin: 0;
          color: #0A2540;
          font-size: 2rem;
          line-height: 1.2;
        }
        .ohu-widget time {
          color: #334155;
          font-size: 0.95rem;
          font-weight: 700;
        }
        .ohu-widget h3 {
          margin: 0.75rem 0 0.5rem;
          color: #0A2540;
          font-size: 1.25rem;
        }
        .ohu-widget .ohu-answer {
          margin: 0 0 1.25rem;
          color: #334155;
          font-size: 1.05rem;
          line-height: 1.6;
          max-width: 70ch;
        }
        .ohu-frame {
          position: relative;
          min-height: 720px;
          border-radius: 12px;
          background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
          overflow: hidden;
        }
        .ohu-frame realscout-office-listings {
          --rs-listing-divider-color: rgb(101, 141, 172);
          display: block;
          width: 100%;
          min-height: 720px;
        }
        @media (max-width: 768px) {
          .ohu-widget h2 { font-size: 1.5rem; }
          .ohu-frame,
          .ohu-frame realscout-office-listings { min-height: 640px; }
        }
      `}</style>
      <div class="ohu-widget-heading">
        <h2 id={headingId}>{heading}</h2>
        <time dateTime={iso}>Updated {label}</time>
      </div>
      <h3>{subhead}</h3>
      <p class="ohu-answer">{summary}</p>
      <div class="ohu-frame">
        <realscout-office-listings
          agent-encoded-id={business.realScoutAgentEncodedId}
          sort-order="PRICE_LOW"
          listing-status="For Sale"
          property-types=",SFR"
          price-min={priceMin}
          price-max={priceMax}
        />
        <noscript>
          <p>
            Listing cards need JavaScript. Search Las Vegas homes at{' '}
            <a href="/search/">the Open House Update search page</a>. The office phone is in the
            footer.
          </p>
        </noscript>
      </div>
    </section>
  )
})
