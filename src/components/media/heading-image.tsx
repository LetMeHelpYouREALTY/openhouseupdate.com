import { component$ } from '@builder.io/qwik'
import { heroLcp, optimizedImageSources, type SiteImageKey, siteImages } from '~/config/images'
import { getSiteImageUrl } from '~/lib/cloudflare-images'

type HeadingImageProps = {
  imageKey: SiteImageKey
  alt?: string
  variant?: 'hero' | 'card' | 'section' | 'background'
  priority?: boolean
  class?: string
  heading?: string
}

export default component$<HeadingImageProps>(
  ({ imageKey, alt, variant = 'section', priority = false, class: className = '', heading }) => {
    const image = siteImages[imageKey]
    const src = getSiteImageUrl(imageKey)
    const sources = optimizedImageSources[imageKey]
    const srcSet = sources
      ? sources.map((item) => `${item.src} ${item.width}w`).join(', ')
      : `${getSiteImageUrl(imageKey, { width: Math.min(1200, image.width) })} ${Math.min(1200, image.width)}w, ${getSiteImageUrl(imageKey, { width: image.width })} ${image.width}w`
    const sizes =
      imageKey === 'weekend-open-houses'
        ? heroLcp.sizes
        : variant === 'card'
          ? '(max-width: 768px) 100vw, 400px'
          : '(max-width: 768px) 100vw, 1200px'
    const resolvedAlt = alt || heading || image.alt

    const variantClass =
      variant === 'hero'
        ? 'heading-image heading-image--hero'
        : variant === 'card'
          ? 'heading-image heading-image--card'
          : variant === 'background'
            ? 'heading-image heading-image--background'
            : 'heading-image heading-image--section'

    return (
      <figure class={`${variantClass} ${className}`.trim()}>
        <style>{`
          .heading-image {
            margin: 0;
            overflow: hidden;
            background: #0A2540;
          }
          .heading-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .heading-image--hero {
            width: 100%;
            min-height: 220px;
            max-height: 420px;
            border-radius: 12px;
          }
          .heading-image--hero img {
            min-height: 220px;
            max-height: 420px;
          }
          .heading-image--card {
            width: 100%;
            aspect-ratio: 4 / 3;
            border-radius: 12px 12px 0 0;
          }
          .heading-image--section {
            width: 100%;
            max-height: 320px;
            border-radius: 12px;
            margin-bottom: 1.5rem;
          }
          .heading-image--background {
            position: absolute;
            inset: 0;
            z-index: 0;
            border-radius: inherit;
          }
          .heading-image--background img {
            object-position: center;
          }
          .heading-image--background::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
              135deg,
              rgba(10, 37, 64, 0.78) 0%,
              rgba(58, 141, 222, 0.48) 100%
            );
            pointer-events: none;
          }
        `}</style>
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={resolvedAlt}
          width={image.width}
          height={image.height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          {...({ fetchpriority: priority ? 'high' : 'auto' } as unknown as Record<string, never>)}
        />
      </figure>
    )
  }
)
