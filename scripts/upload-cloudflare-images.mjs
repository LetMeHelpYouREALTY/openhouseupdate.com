#!/usr/bin/env node
/**
 * Upload git-backed JPEGs to Cloudflare Images with custom IDs.
 *
 * Delivery URL (hosted Images):
 *   https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<image_id>/public
 *
 * Required env:
 *   CLOUDFLARE_API_TOKEN   Account token with Cloudflare Images:Edit
 * Optional:
 *   CLOUDFLARE_ACCOUNT_ID  defaults to the Open House Update Images account
 *
 * Usage:
 *   CLOUDFLARE_API_TOKEN=... pnpm images:upload
 */
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { extname, join } from 'node:path'

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || '2cc579c1ec9e426ed585e933ebf4753b'
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN || ''
const ACCOUNT_HASH = process.env.CLOUDFLARE_IMAGES_ACCOUNT_HASH || 'byE6BTe9lNqo21V57n4aPQ'
const IMAGES_DIR = join(process.cwd(), 'public/images')
const MANIFEST_PATH = join(process.cwd(), 'src/config/cloudflare-image-ids.json')
const ALLOWED = new Set(['.jpg', '.jpeg', '.png', '.webp'])
const GIT_ORIGIN = 'https://www.openhouseupdate.com/images'

const api = (path, init = {}) =>
  fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      ...(init.headers || {}),
    },
  })

const imageIdFromFile = (file) => file.replace(/\.(jpg|jpeg|png|webp)$/i, '')

const mimeFor = (file) => {
  const ext = extname(file).toLowerCase()
  if (ext === '.png') return 'image/png'
  if (ext === '.webp') return 'image/webp'
  return 'image/jpeg'
}

async function getExisting(id) {
  const res = await api(`/images/v1/${encodeURIComponent(id)}`)
  const json = await res.json()
  if (res.ok && json.success) {
    return json.result
  }
  return null
}

async function uploadFile(file) {
  const id = imageIdFromFile(file)
  const existing = await getExisting(id)
  if (existing) {
    return { id, reused: true, result: existing }
  }

  const form = new FormData()
  form.append('url', `${GIT_ORIGIN}/${file}`)
  form.append('id', id)
  form.append('requireSignedURLs', 'false')
  form.append('metadata', JSON.stringify({ filename: file, source: 'git' }))

  let res = await api('/images/v1', { method: 'POST', body: form })
  let json = await res.json()

  if (!res.ok || !json.success) {
    const buf = await readFile(join(IMAGES_DIR, file))
    const local = new FormData()
    local.append('file', new Blob([buf], { type: mimeFor(file) }), file)
    local.append('id', id)
    local.append('requireSignedURLs', 'false')
    res = await api('/images/v1', { method: 'POST', body: local })
    json = await res.json()
  }

  if (!res.ok || !json.success) {
    const already = JSON.stringify(json.errors || json).includes('already exists')
    if (already) {
      const reused = await getExisting(id)
      if (reused) {
        return { id, reused: true, result: reused }
      }
    }
    throw new Error(`Upload failed for ${id}: ${JSON.stringify(json.errors || json)}`)
  }

  return { id, reused: false, result: json.result }
}

async function main() {
  if (!API_TOKEN) {
    console.log('CLOUDFLARE_API_TOKEN is not set.')
    console.log('Create an Account API token with Cloudflare Images:Edit on account', ACCOUNT_ID)
    console.log('Git backups remain in public/images/.')
    process.exit(1)
  }

  const files = (await readdir(IMAGES_DIR)).filter((name) => ALLOWED.has(extname(name).toLowerCase()))
  const manifest = {}

  for (const file of files) {
    const { id, reused, result } = await uploadFile(file)
    const variants = result.variants || [
      `https://imagedelivery.net/${ACCOUNT_HASH}/${id}/public`,
    ]
    manifest[file] = {
      id: result.id || id,
      filename: file,
      variants,
    }
    console.log(`${reused ? 'exists' : 'uploaded'} ${file} -> ${variants[0]}`)
  }

  await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`)
  console.log(`Wrote ${MANIFEST_PATH}`)
  console.log(`PUBLIC_CLOUDFLARE_IMAGES_BASE=https://imagedelivery.net/${ACCOUNT_HASH}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
