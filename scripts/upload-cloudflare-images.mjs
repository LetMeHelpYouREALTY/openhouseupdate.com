#!/usr/bin/env node
/**
 * Upload git-backed images to Cloudflare Images and/or R2.
 *
 * Required env:
 *   CLOUDFLARE_ACCOUNT_ID
 * Optional:
 *   CLOUDFLARE_API_TOKEN          -> Cloudflare Images
 *   CLOUDFLARE_IMAGES_ACCOUNT_HASH
 *   CLOUDFLARE_R2_PUBLIC_BASE     -> printed delivery URLs
 *
 * Usage:
 *   node scripts/upload-cloudflare-images.mjs
 */
import { readdir, writeFile } from 'node:fs/promises'
import { extname, join } from 'node:path'

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || ''
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN || ''
const IMAGES_DIR = join(process.cwd(), 'public/images')
const MANIFEST_PATH = join(process.cwd(), 'src/config/cloudflare-image-ids.json')
const ALLOWED = new Set(['.jpg', '.jpeg', '.png', '.webp'])

async function uploadToCloudflareImages(filePath, id) {
  const { readFile } = await import('node:fs/promises')
  const buf = await readFile(filePath)
  const form = new FormData()
  form.append('file', new Blob([buf]))
  form.append('id', id)
  form.append('requireSignedURLs', 'false')

  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${API_TOKEN}` },
      body: form,
    }
  )
  const json = await res.json()
  if (!res.ok || !json.success) {
    throw new Error(`Cloudflare Images upload failed for ${id}: ${JSON.stringify(json.errors || json)}`)
  }
  return json.result
}

async function main() {
  if (!ACCOUNT_ID || !API_TOKEN) {
    console.log('Cloudflare credentials not set.')
    console.log('Git backup remains in public/images/. Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN to upload.')
    console.log('Then set PUBLIC_CLOUDFLARE_IMAGES_BASE on Vercel to the Images or R2 delivery origin.')
    process.exit(0)
  }

  const files = (await readdir(IMAGES_DIR)).filter((name) => ALLOWED.has(extname(name).toLowerCase()))
  const manifest = {}

  for (const file of files) {
    const id = file.replace(/\.(jpg|jpeg|png|webp)$/i, '')
    console.log(`Uploading ${file} as ${id}...`)
    const result = await uploadToCloudflareImages(join(IMAGES_DIR, file), id)
    manifest[file] = {
      id: result.id,
      filename: file,
      variants: result.variants,
    }
  }

  await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`)
  console.log(`Wrote ${MANIFEST_PATH}`)
  console.log('Set PUBLIC_CLOUDFLARE_IMAGES_BASE to https://imagedelivery.net/<account_hash>')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
