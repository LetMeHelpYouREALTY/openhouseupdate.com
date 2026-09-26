import { component$ } from '@builder.io/qwik'
import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city'
import FeaturedRealtor from '~/components/agent/featured-realtor'
import OpenHouseWidgetSection from '~/components/realscout/open-house-widget-section'

/**
 * Dedicated neighborhood routes (summerlin, henderson, etc.) take precedence.
 * Unknown slugs 404 so Google does not index thin template duplicates.
 */
export const onGet: RequestHandler = async ({ status }) => {
  status(404)
}

export default component$(() => {
  return (
    <section class="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 class="mb-4 text-3xl font-bold text-gray-900">Neighborhood page not found</h1>
      <FeaturedRealtor variant="hero" />
      <OpenHouseWidgetSection pageKey="neighborhood-missing" />
      <p class="mb-6 text-gray-600">
        That Las Vegas Valley area is not on a dedicated guide yet. See Summerlin, Henderson, North
        Las Vegas, Green Valley, Spring Valley, or Enterprise instead.
      </p>
      <a class="text-blue-700 underline" href="/neighborhoods/">
        Browse neighborhood guides
      </a>
    </section>
  )
})

export const head: DocumentHead = {
  title: 'Neighborhood not found | Open House Update',
  meta: [{ name: 'robots', content: 'noindex, follow' }],
}
