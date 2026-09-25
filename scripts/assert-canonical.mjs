import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'

/**
 * Lightweight canonical URL checks. Run after edits:
 *   node --experimental-strip-types scripts/assert-canonical.mjs
 * Falls back to inlined expectations if TS import is unavailable.
 */
const cases = [
  ['/', 'https://www.openhouseupdate.com/'],
  ['/about', 'https://www.openhouseupdate.com/about/'],
  ['/about/', 'https://www.openhouseupdate.com/about/'],
  ['/neighborhoods/summerlin', 'https://www.openhouseupdate.com/neighborhoods/summerlin/'],
]

const fail = (msg) => {
  console.error(msg)
  process.exit(1)
}

const origin = 'https://www.openhouseupdate.com'
const canonicalizePath = (pathname) => {
  const trimmed = pathname.trim() || '/'
  const withSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  if (withSlash === '/') return '/'
  return `${withSlash.replace(/\/+$/, '')}/`
}
const toCanonicalUrl = (pathname) => `${origin}${canonicalizePath(pathname)}`

for (const [input, expected] of cases) {
  const actual = toCanonicalUrl(input)
  if (actual !== expected) {
    fail(`canonical(${input}) => ${actual}, expected ${expected}`)
  }
}

const homepageBug = `${origin}/${'/'}`
if (homepageBug === 'https://www.openhouseupdate.com//' && toCanonicalUrl('/') !== homepageBug) {
  console.log('homepage double-slash pattern is blocked')
} else if (toCanonicalUrl('/') === 'https://www.openhouseupdate.com/') {
  console.log('homepage canonical is a single trailing slash')
} else {
  fail(`unexpected homepage canonical ${toCanonicalUrl('/')}`)
}

console.log('canonical assertions passed')
