import { business } from '~/config/business'
import { type SiteImageKey, siteImages } from '~/config/images'

/**
 * Cloudflare is the primary image origin when PUBLIC_CLOUDFLARE_IMAGES_BASE is set.
 * Git copies in /public/images are the backup and the Vercel fallback.
 *
 * Supported base formats:
 * - Cloudflare Images: https://imagedelivery.net/<account_hash>
 * - Cloudflare Image Resizing on an R2 custom domain:
 *   https://images.openhouseupdate.com/cdn-cgi/image
 * - Bare R2/custom domain: https://images.openhouseupdate.com
 */
const getEnvBase = (): string => {
  const env = import.meta.env as Record<string, string | undefined>
  return (env.PUBLIC_CLOUDFLARE_IMAGES_BASE || env.VITE_CLOUDFLARE_IMAGES_BASE || '').replace(
    /\/$/,
    ''
  )
}

export type ImageTransform = {
  width?: number
  quality?: number
}

export const getImageFileUrl = (file: string, transform: ImageTransform = {}): string => {
  const base = getEnvBase()
  const width = transform.width ?? 1600
  const quality = transform.quality ?? 80
  const gitPath = `/images/${file}`

  if (!base) {
    return gitPath
  }

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
