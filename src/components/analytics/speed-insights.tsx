import { component$, useVisibleTask$ } from '@builder.io/qwik'
import { injectSpeedInsights } from '@vercel/speed-insights'

export default component$(() => {
  useVisibleTask$(() => {
    // Inject Speed Insights on client-side only
    injectSpeedInsights({
      framework: 'qwik',
      debug: process.env.NODE_ENV === 'development',
    })
  })

  return null // This component doesn't render anything
})
