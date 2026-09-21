import { component$, Slot, useStyles$ } from '@builder.io/qwik'
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city'
import { inject } from '@vercel/analytics'
import EnhancedAnalytics from '~/components/analytics/enhanced-analytics'
import StickyHeader from '~/components/layout/header'
import GbpBar from '~/components/local-seo/gbp-bar'
import { MobileSearchButton } from '~/components/modals'
import CrawlerManagement from '~/components/seo/crawler-management'
import EnhancedStructuredData from '~/components/seo/enhanced-structured-data'
import JavaScriptCrawling from '~/components/seo/javascript-crawling'
import Footer from '~/components/starter/footer/footer'
import Header from '~/components/starter/header/header'
import { business } from '~/config/business'
import { toCanonicalUrl } from '~/utils/canonical'

import styles from './styles.css?inline'

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  }
})

export default component$(() => {
  useStyles$(styles)

  return (
    <>
      {/* Enhanced Structured Data */}
      <EnhancedStructuredData type="RealEstateAgent" data={{}} />
      <EnhancedStructuredData type="RealEstateService" data={{}} />
      <EnhancedStructuredData type="WebSite" data={{}} />
      <EnhancedStructuredData type="Organization" data={{}} />
      <EnhancedStructuredData type="LocalBusiness" data={{}} />

      {/* Crawling and Indexing Optimization */}
      <CrawlerManagement
        pageType="home"
        hasImages={true}
        hasVideo={false}
        hasNews={true}
        priority={1.0}
        changeFrequency="daily"
      />

      <JavaScriptCrawling
        hasJavaScript={true}
        criticalJS={['https://em.realscout.com/widgets/realscout-web-components.umd.js']}
        nonCriticalJS={[]}
        progressiveEnhancement={true}
      />

      <Header />
      <StickyHeader />
      <main>
        <Slot />
      </main>
      <GbpBar />
      <Footer />
      <MobileSearchButton />

      {/* Analytics */}
      <script dangerouslySetInnerHTML={`${inject()}`} />
      <EnhancedAnalytics measurementId="G-Q9X8KED9X0" />

      {/* RealScout Script with Enhanced Loading */}
      <script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        crossOrigin="anonymous"
        async
        defer
      />
    </>
  )
})

const defaultTitle = 'Open House Marketplace | Weekend Open Houses Las Vegas | Dr. Jan Duffy'
const defaultDescription = `Weekend open houses and Las Vegas property viewing with ${business.gbpName}. ${business.agentName}, ${business.brokerage}, ${business.fullAddress}. Call ${business.phoneDisplay}.`

export const head: DocumentHead = ({ head, url }) => {
  const title = head.title || defaultTitle
  const hasMeta = (name?: string, property?: string) =>
    head.meta.some((item) => (name ? item.name === name : item.property === property))
  const pageUrl = toCanonicalUrl(url.pathname)

  const meta = [
    ...(!hasMeta('description')
      ? [
          {
            name: 'description',
            content: defaultDescription,
          },
        ]
      : []),
    {
      name: 'author',
      content: business.agentName,
    },
    ...(!hasMeta('robots')
      ? [
          {
            name: 'robots',
            content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
          },
        ]
      : []),
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'theme-color',
      content: '#3A8DDE',
    },
    {
      name: 'msapplication-TileColor',
      content: '#3A8DDE',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: business.gbpName,
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
    {
      name: 'mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'application-name',
      content: business.gbpName,
    },
    ...(!hasMeta(undefined, 'og:title')
      ? [
          {
            property: 'og:title',
            content: title,
          },
        ]
      : []),
    ...(!hasMeta(undefined, 'og:description')
      ? [
          {
            property: 'og:description',
            content: defaultDescription,
          },
        ]
      : []),
    {
      property: 'og:type',
      content: 'website',
    },
    ...(!hasMeta(undefined, 'og:url')
      ? [
          {
            property: 'og:url',
            content: pageUrl,
          },
        ]
      : []),
    {
      property: 'og:site_name',
      content: business.gbpName,
    },
    {
      property: 'og:locale',
      content: 'en_US',
    },
    {
      property: 'og:image',
      content: `${business.siteUrl}/images/og-default.jpg`,
    },
    {
      property: 'og:image:width',
      content: '1200',
    },
    {
      property: 'og:image:height',
      content: '630',
    },
    {
      property: 'og:image:alt',
      content: 'Weekend open houses in Las Vegas with Open House Marketplace',
    },
    ...(!hasMeta('twitter:title')
      ? [
          {
            name: 'twitter:title',
            content: title,
          },
        ]
      : []),
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@drjanetduffy',
    },
    {
      name: 'geo.region',
      content: 'US-NV',
    },
    {
      name: 'geo.placename',
      content: 'Las Vegas, NV 89138',
    },
    {
      name: 'google-site-verification',
      content: '3MLLpJH2Mfg7igpQ-qC_wpBTzvBGvsOUe7V_pJdYAcM',
    },
  ]

  const links = [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
    {
      rel: 'apple-touch-icon',
      href: '/images/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
    {
      rel: 'preconnect',
      href: 'https://em.realscout.com',
    },
    {
      rel: 'preconnect',
      href: 'https://images.openhouseupdate.com',
    },
    {
      rel: 'preconnect',
      href: 'https://imagedelivery.net',
    },
    {
      rel: 'preconnect',
      href: 'https://www.googletagmanager.com',
    },
    {
      rel: 'dns-prefetch',
      href: 'https://em.realscout.com',
    },
    {
      rel: 'sitemap',
      type: 'application/xml',
      href: '/sitemap-index.xml',
    },
  ]

  return {
    title,
    meta,
    links,
  }
}
