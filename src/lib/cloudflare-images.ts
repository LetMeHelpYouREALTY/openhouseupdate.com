import { business } from '~/config/business'
import { type SiteImageKey, siteImages } from '~/config/images'

/**
 * Cloudflare Images hosted delivery (Apr 2026 docs):
 *   https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT_NAME>
 *
 * Image IDs are the git filename without extension (custom ID on upload).
 * The default named variant is `public`. Flexible variants (w=,q=) need
 * Images → Delivery → Flexible variants and are optional.
 *
 * Git JPEGs in /public/images remain the backup. jsDelivr is Cloudflare CDN
 * in front of those git copies until hosted uploads return HTTP 200.
 * Pin jsDelivr to the git SHA (PUBLIC_CLOUDFLARE_GIT_CDN_BASE) — @main 404s
 * for files that have not landed on GitHub main yet.
 * Do not use *.workers.dev or trycloudflare.com as the live <img> origin.
 * Do not orange-cloud the Vercel apex.
 */
export const CLOUDFLARE_IMAGES_ACCOUNT_HASH = 'byE6BTe9lNqo21V57n4aPQ'
export const CLOUDFLARE_IMAGES_DELIVERY_BASE = `https://imagedelivery.net/${CLOUDFLARE_IMAGES_ACCOUNT_HASH}`
const GIT_CDN_REPO = 'LetMeHelpYouREALTY/openhouseupdate.com'
const GIT_CDN_MAIN = `https://cdn.jsdelivr.net/gh/${GIT_CDN_REPO}@main/public/images`

const readPublicEnv = (key: string): string => {
  const env = import.meta.env as Record<string, string | undefined>
  return (env[key] || '').trim().replace(/\/$/, '')
}

const isUnusableImgOrigin = (base: string): boolean =>
  base.includes('workers.dev') || base.includes('trycloudflare.com')

export const CLOUDFLARE_GIT_CDN_BASE = (() => {
  const configured = readPublicEnv('PUBLIC_CLOUDFLARE_GIT_CDN_BASE')
  if (configured && !isUnusableImgOrigin(configured)) {
    return configured
  }
  return GIT_CDN_MAIN
})()

const getEnvBase = (): string => {
  const configured =
    readPublicEnv('PUBLIC_CLOUDFLARE_IMAGES_BASE') || readPublicEnv('VITE_CLOUDFLARE_IMAGES_BASE')

  if (!configured || isUnusableImgOrigin(configured)) {
    return CLOUDFLARE_IMAGES_DELIVERY_BASE
  }

  return configured
}

export const imageIdFromFile = (file: string): string => file.replace(/\.(jpg|jpeg|png|webp)$/i, '')

export type ImageTransform = {
  width?: number
  quality?: number
  variant?: string
}

export const getGitCdnFileUrl = (file: string): string => `${CLOUDFLARE_GIT_CDN_BASE}/${file}`

export const getImageFileUrl = (file: string, transform: ImageTransform = {}): string => {
  const base = getEnvBase()
  const width = transform.width ?? 1600
  const quality = transform.quality ?? 80
  const id = imageIdFromFile(file)

  if (base.includes('imagedelivery.net')) {
    const variant = transform.variant || 'public'
    return `${base}/${id}/${variant}`
  }

  if (base.includes('cdn-cgi/image')) {
    return `${base}/width=${width},quality=${quality},format=auto/${file}`
  }

  return `${base}/${file}`
}

export const getSiteImageUrl = (key: SiteImageKey, transform: ImageTransform = {}): string => {
  const image = siteImages[key]
  return getImageFileUrl(image.file, {
    width: transform.width ?? image.width,
    quality: transform.quality,
    variant: transform.variant,
  })
}

export const getSiteGitCdnUrl = (key: SiteImageKey): string =>
  getGitCdnFileUrl(siteImages[key].file)

export const getAbsoluteImageUrl = (key: SiteImageKey, transform: ImageTransform = {}): string => {
  const path = getSiteImageUrl(key, transform)
  if (path.startsWith('http')) {
    return path
  }
  return `${business.siteUrl}${path}`
}

export const getOgImageUrl = (): string => getAbsoluteImageUrl('og-default', { width: 1200 })
