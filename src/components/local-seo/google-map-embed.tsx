import { component$ } from '@builder.io/qwik'
import { business } from '~/config/business'

type GoogleMapEmbedProps = {
  title?: string
  height?: string
}

export default component$<GoogleMapEmbedProps>(
  ({ title = 'Open House Marketplace on Google Maps', height = '360px' }) => {
    const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
      business.fullAddress
    )}&cid=${business.mapsCid}&z=15&output=embed`

    return (
      <section class="gbp-map" aria-label={title}>
        <style>{`
          .gbp-map {
            width: 100%;
            margin: 0 auto 2rem;
            max-width: 1200px;
            padding: 0 1rem;
          }
          .gbp-map iframe {
            width: 100%;
            border: 0;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          }
          .gbp-map-caption {
            margin-top: 0.75rem;
            text-align: center;
            color: #475569;
            font-size: 0.95rem;
          }
          .gbp-map-caption a {
            color: #0c4a84;
            font-weight: 700;
          }
        `}</style>
        <iframe
          src={embedSrc}
          title={title}
          height={height}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullscreen
        />
        <p class="gbp-map-caption">
          {business.gbpName} · {business.fullAddress} · Pin on{' '}
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
            Google Maps
          </a>
        </p>
      </section>
    )
  }
)
