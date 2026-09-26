import { $, component$, useVisibleTask$ } from '@builder.io/qwik'
import { business } from '~/config/business'

const WIDGET_SRC = 'https://assets.calendly.com/assets/external/widget.js'
const WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css'

/** Brand colors passed through Calendly's supported embed parameters. */
export const calendlyEmbedUrl = `${business.calendlyUrl}?primary_color=0c4a84&text_color=0a2540&background_color=ffffff`

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement
        resize?: boolean
      }) => void
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

let calendlyReady: Promise<void> | undefined

function loadCalendly(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }
  if (window.Calendly) {
    return Promise.resolve()
  }
  if (!calendlyReady) {
    calendlyReady = new Promise((resolve, reject) => {
      if (!document.querySelector('link[data-calendly-css]')) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = WIDGET_CSS
        link.dataset.calendlyCss = 'true'
        document.head.appendChild(link)
      }
      const existing = document.querySelector('script[data-calendly-widget]')
      if (existing) {
        existing.addEventListener('load', () => resolve(), { once: true })
        return
      }
      const script = document.createElement('script')
      script.src = WIDGET_SRC
      script.async = true
      script.dataset.calendlyWidget = 'true'
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Scheduling calendar failed to load'))
      document.body.appendChild(script)
    })
  }
  return calendlyReady
}

export const openCalendlyPopup = $(async () => {
  try {
    await loadCalendly()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyEmbedUrl })
      return
    }
  } catch {
    // Open the scheduling page directly when the embed script cannot load.
  }
  window.location.assign(business.calendlyUrl)
})

type CalendlyBookButtonProps = {
  label?: string
  class?: string
}

/** Opens the scheduler without loading it until the click. */
export const CalendlyBookButton = component$<CalendlyBookButtonProps>(
  ({ label = 'Book a Tour', class: className = '' }) => {
    return (
      <button type="button" class={className} onClick$={openCalendlyPopup}>
        {label}
      </button>
    )
  }
)

/**
 * Full scheduler. The script loads only after this section is on screen,
 * so it does not compete with the homepage hero.
 */
export const CalendlyInline = component$(() => {
  useVisibleTask$(() => {
    const parent = document.getElementById('book-a-tour-frame')
    if (!parent || parent.dataset.ready === 'true') {
      return
    }
    loadCalendly()
      .then(() => {
        if (!(window.Calendly && parent.isConnected) || parent.dataset.ready === 'true') {
          return
        }
        parent.dataset.ready = 'true'
        parent.replaceChildren()
        window.Calendly.initInlineWidget({
          url: calendlyEmbedUrl,
          parentElement: parent,
          resize: true,
        })
      })
      .catch(() => {
        parent.dataset.ready = 'failed'
      })
  })

  return (
    <section class="book-tour" id="book-a-tour" aria-labelledby="book-a-tour-heading">
      <style>{`
        .book-tour {
          background: #ffffff;
          color: #0a2540;
          padding: 2.5rem 1.25rem 3rem;
        }
        .book-tour-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .book-tour h2 {
          margin: 0 0 0.5rem;
          color: #0a2540;
          font-size: 2rem;
          line-height: 1.2;
        }
        .book-tour p {
          margin: 0 0 1rem;
          max-width: 65ch;
          color: #334155;
          line-height: 1.6;
        }
        .book-tour-frame {
          min-width: 320px;
          min-height: 700px;
          background: #f8fafc;
          border-radius: 12px;
          overflow: hidden;
        }
        .book-tour-fallback {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          margin-top: 0.75rem;
          padding: 0.65rem 1rem;
          border-radius: 8px;
          background: #0c4a84;
          color: #ffffff;
          font-weight: 700;
          text-decoration: none;
        }
      `}</style>
      <div class="book-tour-inner">
        <h2 id="book-a-tour-heading">Book a private showing</h2>
        <p>
          Pick a time with {business.agentName} for a tour or a consultation. Weekend open houses
          stay on the public schedule.
        </p>
        <div id="book-a-tour-frame" class="book-tour-frame" />
        <a class="book-tour-fallback" href={business.calendlyUrl}>
          Open the scheduling page
        </a>
      </div>
    </section>
  )
})
