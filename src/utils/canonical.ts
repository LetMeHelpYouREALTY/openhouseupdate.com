import { business } from '~/config/business'

/** Production origin. Always www + https — never the request host. */
export const CANONICAL_ORIGIN = business.siteUrl.replace(/\/$/, '')

/**
 * Maps snippet/page keys to the live path Google should index.
 * Nested service and neighborhood URLs must not collapse to `/{pageKey}/`.
 */
export const PAGE_KEY_PATHS: Record<string, string> = {
  homepage: '/',
  about: '/about/',
  contact: '/contact/',
  faq: '/faq/',
  services: '/services/',
  'home-valuation': '/services/home-valuation/',
  'buyer-services': '/services/buyer-services/',
  'seller-services': '/services/seller-services/',
  'market-analysis': '/services/market-analysis/',
  search: '/search/',
  map: '/map/',
  'this-weekend': '/this-weekend/',
  neighborhoods: '/neighborhoods/',
  summerlin: '/neighborhoods/summerlin/',
  henderson: '/neighborhoods/henderson/',
  'north-las-vegas': '/neighborhoods/north-las-vegas/',
  'green-valley': '/neighborhoods/green-valley/',
  'spring-valley': '/neighborhoods/spring-valley/',
  enterprise: '/neighborhoods/enterprise/',
  blog: '/blog/',
  'people-also-ask': '/people-also-ask/',
  'how-to-buy-first-home': '/how-to-buy-first-home-las-vegas/',
  'summerlin-vs-henderson': '/summerlin-vs-henderson/',
  'summerlin-vs-henderson-comparison': '/summerlin-vs-henderson-comparison/',
  'open-houses-for-sale': '/open-houses-for-sale/',
  'privacy-policy': '/privacy-policy/',
  'terms-of-service': '/terms-of-service/',
  sitemap: '/sitemap/',
}

const FILE_PATH = /\.[a-z0-9]+$/i

/**
 * One self-referencing canonical: https + www, no query/hash, trailing slash on pages.
 */
export function toCanonicalUrl(pathOrUrl = '/'): string {
  let path = pathOrUrl.trim() || '/'

  if (/^https?:\/\//i.test(path)) {
    try {
      const parsed = new URL(path)
      path = parsed.pathname
    } catch {
      path = '/'
    }
  }

  path = path.split('?')[0].split('#')[0]
  if (!path.startsWith('/')) {
    path = `/${path}`
  }
  path = path.replace(/\/{2,}/g, '/')

  if (path.length > 1 && FILE_PATH.test(path)) {
    return `${CANONICAL_ORIGIN}${path}`
  }

  if (path === '/') {
    return `${CANONICAL_ORIGIN}/`
  }

  const trimmed = path.replace(/\/+$/, '')
  return `${CANONICAL_ORIGIN}${trimmed}/`
}

export function canonicalForPageKey(pageKey: string): string {
  const mapped = PAGE_KEY_PATHS[pageKey]
  if (mapped) {
    return toCanonicalUrl(mapped)
  }
  return toCanonicalUrl(`/${pageKey}/`)
}
