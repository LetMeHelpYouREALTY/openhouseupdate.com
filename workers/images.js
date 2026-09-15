/**
 * Cloudflare Worker for images.openhouseupdate.com (DNS-only custom domain).
 * Bind R2 bucket IMAGES. Git copies in /public/images remain the backup origin.
 *
 * wrangler.toml:
 *   name = "openhouseupdate-images"
 *   [[r2_buckets]]
 *   binding = "IMAGES"
 *   bucket_name = "openhouseupdate-images"
 *
 * Deploy only after Cloudflare credentials exist. Do not orange-cloud the Vercel apex.
 */
const GIT_ORIGIN = 'https://www.openhouseupdate.com/images'

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const key = url.pathname.replace(/^\/+/, '')
    if (!key || key.includes('..')) {
      return new Response('Not found', { status: 404 })
    }

    if (env.IMAGES) {
      const object = await env.IMAGES.get(key)
      if (object) {
        const headers = new Headers()
        headers.set('Content-Type', object.httpMetadata?.contentType || 'image/jpeg')
        headers.set('Cache-Control', 'public, max-age=2592000, immutable')
        headers.set('Access-Control-Allow-Origin', '*')
        return new Response(object.body, { headers })
      }
    }

    const fallback = await fetch(`${GIT_ORIGIN}/${key}`)
    if (!fallback.ok) {
      return new Response('Not found', { status: 404 })
    }
    const headers = new Headers(fallback.headers)
    headers.set('Cache-Control', 'public, max-age=86400')
    headers.set('X-Image-Source', 'git-backup')
    return new Response(fallback.body, { status: 200, headers })
  },
}
