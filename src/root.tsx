import { component$ } from '@builder.io/qwik'
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
  useLocation,
} from '@builder.io/qwik-city'
import { heroLcp } from '~/config/images'
import { RouterHead } from './components/router-head/router-head'

/** Discover the homepage hero before the listing script so LCP is not delayed. */
const HomeLcpPreload = component$(() => {
  const loc = useLocation()
  if (loc.url.pathname !== '/') {
    return null
  }

  return (
    <link
      rel="preload"
      as="image"
      href="/images/hero-weekend-open-houses-800.webp"
      imageSrcset={heroLcp.srcSet}
      imageSizes={heroLcp.sizes}
      fetchPriority="high"
    />
  )
})

import './global.css'

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <html
        lang="en"
        {...({ prefix: 'og: https://ogp.me/ns#' } as unknown as Record<string, never>)}
      >
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#3A8DDE" />
          <HomeLcpPreload />

          {/* Preconnect to the listing widget. Analytics loads after the page. */}
          <link rel="preconnect" href="https://em.realscout.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://imagedelivery.net" crossOrigin="anonymous" />
          <link
            rel="preconnect"
            href="https://images.openhouseupdate.com"
            crossOrigin="anonymous"
          />

          <link rel="dns-prefetch" href="https://em.realscout.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

          {/* Manifest and icons */}
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />

          {/* RealScout script once for every office-listings widget on the site. */}
          <script
            src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
            type="module"
          />

          <RouterHead />
        </head>
        <body>
          <RouterOutlet />
          <ServiceWorkerRegister />

          <script
            dangerouslySetInnerHTML={`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q9X8KED9X0');
              window.addEventListener('load', function () {
                var script = document.createElement('script');
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q9X8KED9X0';
                script.async = true;
                document.head.appendChild(script);
              });
            `}
          />

          {/* Performance and error monitoring */}
          <script
            dangerouslySetInnerHTML={`
            // Enhanced error handling for RealScout
            window.addEventListener('error', function(event) {
              if (event.filename && event.filename.includes('realscout')) {
                console.warn('RealScout error detected:', event.message);
                // Track RealScout errors for monitoring
                if (window.gtag) {
                  gtag('event', 'realscout_error', {
                    event_category: 'RealScout',
                    event_label: event.message,
                    value: 1
                  });
                }
              }
            });
            
            // Monitor RealScout widget loading
            document.addEventListener('DOMContentLoaded', function() {
              const checkRealScoutElements = () => {
                const elements = document.querySelectorAll('realscout-simple-search, realscout-advanced-search, realscout-home-value, realscout-listings');
                elements.forEach(element => {
                  if (element && !element.hasAttribute('data-monitored')) {
                    element.setAttribute('data-monitored', 'true');
                    console.log('RealScout widget detected:', element.tagName);
                  }
                });
              };
              
              // Check immediately and after a delay
              checkRealScoutElements();
              setTimeout(checkRealScoutElements, 2000);
            });
          `}
          />
        </body>
      </html>
    </QwikCityProvider>
  )
})
