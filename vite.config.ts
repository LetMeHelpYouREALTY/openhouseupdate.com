import { execSync } from 'node:child_process'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@builder.io/qwik-city/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const HOSTED_IMAGES_BASE = 'https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ'
const GIT_CDN_REPO = 'LetMeHelpYouREALTY/openhouseupdate.com'
const LOCAL_IMAGES_BASE = '/images'
const PROBE_TIMEOUT_MS = 4000

const resolveGitSha = (): string => {
  const envSha = (process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA || '').trim()
  if (/^[a-f0-9]{7,40}$/i.test(envSha)) {
    return envSha
  }
  try {
    const sha = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim()
    if (/^[a-f0-9]{7,40}$/i.test(sha)) {
      return sha
    }
  } catch {
    // Preview/dev builds may not have a git checkout.
  }
  return 'main'
}

const gitCdnBaseFor = (ref: string): string =>
  `https://cdn.jsdelivr.net/gh/${GIT_CDN_REPO}@${ref}/public/images`

const probeUrl = async (url: string): Promise<boolean> => {
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      signal: AbortSignal.timeout(PROBE_TIMEOUT_MS),
    })
    return res.ok
  } catch {
    return false
  }
}

const resolveImageBase = async (gitCdnBase: string): Promise<string> => {
  const configured = (
    process.env.PUBLIC_CLOUDFLARE_IMAGES_BASE ||
    process.env.VITE_CLOUDFLARE_IMAGES_BASE ||
    ''
  )
    .trim()
    .replace(/\/$/, '')
  const isUnusableOrigin =
    configured.includes('workers.dev') || configured.includes('trycloudflare.com')
  const isStaleMainCdn = configured.includes('cdn.jsdelivr.net') && configured.includes('@main/')
  if (configured && !isUnusableOrigin && !isStaleMainCdn) {
    return configured
  }
  if (await probeUrl(`${HOSTED_IMAGES_BASE}/heading-henderson-homes/public`)) {
    return HOSTED_IMAGES_BASE
  }
  // jsDelivr @main 404s for files that are not on GitHub main yet. Pin to the
  // deploy SHA, and only use it as the live <img> origin after the object 200s.
  if (await probeUrl(`${gitCdnBase}/heading-named-schools.jpg`)) {
    return gitCdnBase
  }
  if (await probeUrl(`${gitCdnBase}/hero-weekend-open-houses.jpg`)) {
    return gitCdnBase
  }
  return LOCAL_IMAGES_BASE
}

export default defineConfig(async ({ mode }) => {
  const isProduction = mode === 'production'
  const gitCdnBase = gitCdnBaseFor(resolveGitSha())
  process.env.PUBLIC_CLOUDFLARE_GIT_CDN_BASE = gitCdnBase
  process.env.PUBLIC_CLOUDFLARE_IMAGES_BASE = await resolveImageBase(gitCdnBase)

  return {
    plugins: [
      qwikCity(),
      qwikVite({
        // Enable faster builds with esbuild
        esbuild: {
          target: 'es2020',
          minify: isProduction,
        },
      }),
      tsconfigPaths(),
    ],

    // Build optimizations
    build: {
      target: 'es2020',
      minify: isProduction ? 'esbuild' : false,
      sourcemap: !isProduction,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['@builder.io/qwik', '@builder.io/qwik-city'],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },

    // Development optimizations
    server: {
      fs: {
        strict: false,
      },
    },

    // Optimize dependencies
    optimizeDeps: {
      include: ['@builder.io/qwik', '@builder.io/qwik-city', '@vercel/analytics', '@vercel/speed-insights'],
    },

    envPrefix: ['VITE_', 'PUBLIC_'],

    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },

    // Performance optimizations
    esbuild: {
      target: 'es2020',
      drop: isProduction ? ['console', 'debugger'] : [],
    },
  }
})
