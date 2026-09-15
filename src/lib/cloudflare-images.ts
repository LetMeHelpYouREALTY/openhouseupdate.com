import { business } from '~/config/business'
import { type SiteImageKey, siteImages } from '~/config/images'

/**
 * Git JPEGs in /public/images are the source of truth and the onError backup.
 * Cloudflare delivers those files to browsers.
 *
 * Default origin is Cloudflare's CDN in front of the public GitHub copies
 * (jsDelivr). Responses include `server: cloudflare` and `cf-ray`.
 *
 * Override with PUBLIC_CLOUDFLARE_IMAGES_BASE / VITE_CLOUDFLARE_IMAGES_BASE:
 * - Cloudflare Images: https://imagedelivery.net/<account_hash>
 * - Image Resizing on a DNS-only host: https://images.openhouseupdate.com/cdn-cgi/image
 * - Worker/R2 custom domain: https://images.openhouseupdate.com
 *
 * Do not use *.workers.dev or trycloudflare.com as the live <img> origin.
 * workers.dev is behind Bot Fight Mode (403 cf-mitigated: challenge).
 * Quick tunnels expire with the machine that opened them.
 * Do not orange-cloud the Vercel apex.
 */
export const CLOUDFLARE_GIT_CDN_BASE =
  'https://cdn.jsdelivr.net/gh/LetMeHelpYouREALTY/openhouseupdate.com@main/public/images'

const isUnusableImgOrigin = (base: string): boolean =>
  base.includes('workers.dev') || base.includes('trycloudflare.com')

const getEnvBase = (): string => {
  const env = import.meta.env as Record<string, string | undefined>
  const configured = (env.PUBLIC_CLOUDFLARE_IMAGES_BASE || env.VITE_CLOUDFLARE_IMAGES_BASE || '')
    .trim()
    .replace(/\/$/, '')

  if (!configured || isUnusableImgOrigin(configured)) {
    return CLOUDFLARE_GIT_CDN_BASE
  }

  return configured
}

export type ImageTransform = {
  width?: number
  quality?: number
}

export const getImageFileUrl = (file: string, transform: ImageTransform = {}): string => {
  const base = getEnvBase()
  const width = transform.width ?? 1600
  const quality = transform.quality ?? 80

  if (base.includes('imagedelivery.net')) {
    const id = file.replace(/\.(jpg|jpeg|png|webp)$/i, '')
    return `${base}/${id}/w=${width},q=${quality},fit=cover`
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
  })
}

export const getAbsoluteImageUrl = (key: SiteImageKey, transform: ImageTransform = {}): string => {
  const path = getSiteImageUrl(key, transform)
  if (path.startsWith('http')) {
    return path
  }
  return `${business.siteUrl}${path}`
}

export const getOgImageUrl = (): string => getAbsoluteImageUrl('og-default', { width: 1200 })
