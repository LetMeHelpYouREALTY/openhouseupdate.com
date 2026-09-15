/**
 * Cloudflare Worker for image delivery.
 * Static assets (git JPEGs copied at deploy) are the Cloudflare origin.
 * Git copies on https://www.openhouseupdate.com/images remain the backup.
 *
 * Optional R2 binding IMAGES can sit in front of assets after the account is claimed.
 * Do not orange-cloud the Vercel apex; serve this Worker on workers.dev or a
 * DNS-only hostname such as images.openhouseupdate.com.
 */
const GIT_ORIGIN = 'https://www.openhouseupdate.com/images'

const cacheHeaders = (source) => {
  const headers = new Headers()
  headers.set('Cache-Control', 'public, max-age=2592000, immutable')
  headers.set('Access-Control-Allow-Origin', '*')
  headers.set('X-Image-Source', source)
  return headers
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const key = url.pathname.replace(/^\/+/, '')
    if (!key || key.includes('..') || key.endsWith('/')) {
      return new Response('Not found', { status: 404 })
    }

    if (env.ASSETS) {
      const assetRequest = new Request(new URL(`/${key}`, url.origin), request)
      const assetResponse = await env.ASSETS.fetch(assetRequest)
      if (assetResponse.ok) {
        const headers = cacheHeaders('cloudflare-assets')
        const contentType = assetResponse.headers.get('Content-Type')
        if (contentType) {
          headers.set('Content-Type', contentType)
        }
        return new Response(assetResponse.body, { status: 200, headers })
      }
    }

    if (env.IMAGES) {
      const object = await env.IMAGES.get(key)
      if (object) {
        const headers = cacheHeaders('cloudflare-r2')
        headers.set('Content-Type', object.httpMetadata?.contentType || 'image/jpeg')
        return new Response(object.body, { headers })
      }
    }

    const fallback = await fetch(`${GIT_ORIGIN}/${key}`)
    if (!fallback.ok) {
      return new Response('Not found', { status: 404 })
    }
    const headers = new Headers(fallback.headers)
    headers.set('Cache-Control', 'public, max-age=86400')
    headers.set('Access-Control-Allow-Origin', '*')
    headers.set('X-Image-Source', 'git-backup')
    return new Response(fallback.body, { status: 200, headers })
  },
}
