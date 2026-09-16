import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@builder.io/qwik-city/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const HOSTED_IMAGES_BASE = 'https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ'
const GIT_CDN_BASE =
  'https://cdn.jsdelivr.net/gh/LetMeHelpYouREALTY/openhouseupdate.com@main/public/images'

const resolveImageBase = async (): Promise<string> => {
  const configured = (
    process.env.PUBLIC_CLOUDFLARE_IMAGES_BASE ||
    process.env.VITE_CLOUDFLARE_IMAGES_BASE ||
    ''
  )
    .trim()
    .replace(/\/$/, '')
  if (configured) {
    return configured
  }
  try {
    const res = await fetch(`${HOSTED_IMAGES_BASE}/heading-henderson-homes/public`, {
      method: 'HEAD',
    })
    if (res.ok) {
      return HOSTED_IMAGES_BASE
    }
  } catch {
    // Hosted Images objects are not uploaded yet.
  }
  return GIT_CDN_BASE
}

export default defineConfig(async ({ mode }) => {
  const isProduction = mode === 'production'
  process.env.PUBLIC_CLOUDFLARE_IMAGES_BASE = await resolveImageBase()

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
      include: ['@builder.io/qwik', '@builder.io/qwik-city', '@vercel/analytics'],
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
