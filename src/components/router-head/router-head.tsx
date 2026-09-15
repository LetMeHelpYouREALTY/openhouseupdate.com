import { component$ } from '@builder.io/qwik'
import { useDocumentHead, useLocation } from '@builder.io/qwik-city'
import { toCanonicalUrl } from '~/lib/canonical'

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead()
  const loc = useLocation()
  const canonicalFromHead = head.links.find((item) => item.rel === 'canonical')
  const canonicalHref = canonicalFromHead?.href || toCanonicalUrl(loc.url.pathname)

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={canonicalHref} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links
        .filter((l) => l.rel !== 'canonical')
        .map((l) => (
          <link key={l.key} {...l} />
        ))}

      {head.styles.map((s) => (
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Qwik's internal style management is safe
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  )
})
