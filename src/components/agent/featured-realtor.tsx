import { component$ } from '@builder.io/qwik'
import { CalendlyBookButton } from '~/components/calendly/calendly-booking'
import { business } from '~/config/business'
import { agentPortrait } from '~/config/images'
import styles from './featured-realtor.module.css'

export type FeaturedRealtorVariant =
  | 'header'
  | 'footer'
  | 'band'
  | 'badge'
  | 'hero'
  | 'profile'
  | 'sidebar'
  | 'byline'

type FeaturedRealtorProps = {
  variant?: FeaturedRealtorVariant
  /** Use on photography heroes so the label stays readable. */
  tone?: 'light' | 'dark'
}

type PortraitProps = {
  priority?: boolean
}

const Portrait = component$<PortraitProps>(({ priority = false }) => {
  return (
    <img
      class={styles.photo}
      src={agentPortrait.src}
      alt={agentPortrait.alt}
      width={agentPortrait.width}
      height={agentPortrait.height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
})

const variantClass = (variant: FeaturedRealtorVariant): string => {
  switch (variant) {
    case 'header':
      return styles.header
    case 'footer':
      return styles.footer
    case 'band':
      return styles.band
    case 'badge':
      return styles.badge
    case 'hero':
      return styles.hero
    case 'profile':
      return styles.profile
    case 'sidebar':
      return styles.sidebar
    case 'byline':
      return styles.byline
    default: {
      const unhandled: never = variant
      return unhandled
    }
  }
}

/**
 * Dr. Jan Duffy as the site Featured Realtor and Open House Expert.
 * Header, footer, and the closing band appear on every page.
 * Hero, profile, sidebar, and byline sit in the section that introduces her.
 */
export default component$<FeaturedRealtorProps>(({ variant = 'band', tone = 'light' }) => {
  const portraitPriority = variant === 'header' || variant === 'badge' || variant === 'hero'
  const label = (
    <span class={styles.copy}>
      <span class={styles.eyebrow}>Featured Realtor</span>
      <span class={styles.name}>{business.agentName}</span>
      <span class={styles.role}>Open House Expert</span>
    </span>
  )

  if (variant === 'band') {
    return (
      <section class={styles.band} aria-label="Featured Realtor Dr. Jan Duffy">
        <div class={styles.bandInner}>
          <Portrait priority={false} />
          <div>
            {label}
            <p class={styles.bio}>
              Dr. Jan Duffy is the Featured Realtor for Las Vegas open houses. She hosts weekend
              tours across the Las Vegas Valley.
            </p>
            <p class={styles.bio}>{business.brokerage}.</p>
            <div class={styles.actions}>
              <a class={`${styles.action} ${styles.call}`} href={`tel:${business.phoneTel}`}>
                Call
              </a>
              <CalendlyBookButton class={`${styles.action} ${styles.book}`} label="Book a Tour" />
              <a class={`${styles.action} ${styles.weekend}`} href="/this-weekend/">
                This Weekend's Open Houses
              </a>
              <a class={`${styles.action} ${styles.about}`} href="/about/">
                About Dr. Duffy
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'profile') {
    const toneClass = tone === 'dark' ? styles.dark : ''
    return (
      <div class={`${styles.profile} ${toneClass}`.trim()}>
        <Portrait priority={portraitPriority} />
        {label}
        <p class={styles.bio}>Dr. Jan Duffy is the Featured Realtor for Las Vegas open houses.</p>
        <div class={styles.actions}>
          <a class={`${styles.action} ${styles.call}`} href={`tel:${business.phoneTel}`}>
            Call
          </a>
          <CalendlyBookButton class={`${styles.action} ${styles.book}`} label="Book a Tour" />
          <a class={`${styles.action} ${styles.about}`} href="/contact/">
            Contact Dr. Duffy
          </a>
        </div>
      </div>
    )
  }

  const className = `${variantClass(variant)} ${tone === 'dark' ? styles.dark : ''}`.trim()

  return (
    <a class={className} href="/about/" title="About Dr. Jan Duffy, Open House Expert">
      <Portrait priority={portraitPriority} />
      {label}
    </a>
  )
})
