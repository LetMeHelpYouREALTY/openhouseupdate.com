import { business } from '~/config/business'

/** Real public path for each createOptimizedHead / snippet pageKey. */
const PAGE_PATHS: Record<string, string> = {
  homepage: '/',
  about: '/about/',
  contact: '/contact/',
  search: '/search/',
  blog: '/blog/',
  faq: '/faq/',
  services: '/services/',
  'this-weekend': '/this-weekend/',
  'home-valuation': '/services/home-valuation/',
  'buyer-services': '/services/buyer-services/',
  'seller-services': '/services/seller-services/',
  'market-analysis': '/services/market-analysis/',
  summerlin: '/neighborhoods/summerlin/',
  henderson: '/neighborhoods/henderson/',
  'green-valley': '/neighborhoods/green-valley/',
  'north-las-vegas': '/neighborhoods/north-las-vegas/',
  'spring-valley': '/neighborhoods/spring-valley/',
  enterprise: '/neighborhoods/enterprise/',
  'summerlin-vs-henderson': '/summerlin-vs-henderson/',
  comparison: '/summerlin-vs-henderson/',
  'people-also-ask': '/people-also-ask/',
  'summerlin-open-houses': '/summerlin-open-houses/',
  'first-time-buyer-guide': '/how-to-buy-first-home-las-vegas/',
  'how-to-buy-first-home-las-vegas': '/how-to-buy-first-home-las-vegas/',
  'henderson-home-valuation': '/henderson-home-valuation/',
  map: '/map/',
  sitemap: '/sitemap/',
  'privacy-policy': '/privacy-policy/',
  'terms-of-service': '/terms-of-service/',
}

export const canonicalizePath = (pathname: string): string => {
  const trimmed = pathname.trim() || '/'
  const withSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  if (withSlash === '/') {
    return '/'
  }
  return `${withSlash.replace(/\/+$/, '')}/`
}

export const toCanonicalUrl = (pathname: string): string => {
  const origin = business.siteUrl.replace(/\/+$/, '')
  return `${origin}${canonicalizePath(pathname)}`
}

export const canonicalUrlForPageKey = (pageKey: string): string => {
  const path = PAGE_PATHS[pageKey]
  if (path) {
    return toCanonicalUrl(path)
  }
  return toCanonicalUrl(`/${pageKey}/`)
}

export const pagePathForKey = (pageKey: string): string => {
  return PAGE_PATHS[pageKey] || canonicalizePath(`/${pageKey}/`)
}
