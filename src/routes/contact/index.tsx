import { $, component$, useSignal } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import FeaturedRealtor from '~/components/agent/featured-realtor'
import GoogleMapEmbed from '~/components/local-seo/google-map-embed'
import HeadingImage from '~/components/media/heading-image'
import OpenHouseWidgetSection from '~/components/realscout/open-house-widget-section'
import EnhancedPageSEO, { createOptimizedHead } from '~/components/seo/enhanced-page-seo'
import { business } from '~/config/business'

export default component$(() => {
  const name = useSignal('')
  const email = useSignal('')
  const phone = useSignal('')
  const message = useSignal('')
  const inquiryType = useSignal('general')

  const isSubmitting = useSignal(false)
  const isSubmitted = useSignal(false)

  const handleSubmit = $(async () => {
    isSubmitting.value = true

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Track contact form submission
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'contact_form_submit', {
        event_category: 'lead_generation',
        event_label: inquiryType.value,
        value: 1,
      })
    }

    isSubmitting.value = false
    isSubmitted.value = true
  })

  return (
    <section class="contact-page">
      <div class="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span class="text-blue-600">Dr. Jan Duffy</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Visit {business.gbpName} at {business.fullAddress}. Call{' '}
            <a class="text-blue-600 underline" href={`tel:${business.phoneTel}`}>
              {business.phoneDisplay}
            </a>{' '}
            to tour Las Vegas open houses this weekend.
          </p>
          <FeaturedRealtor variant="profile" />
          <HeadingImage
            imageKey="contact"
            heading="Contact Dr. Jan Duffy"
            variant="hero"
            priority
          />
        </div>

        <OpenHouseWidgetSection pageKey="contact" />

        <div class="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>

            {!isSubmitted.value ? (
              <form preventdefault:submit onSubmit$={handleSubmit}>
                <div class="space-y-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      bind:value={name}
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      bind:value={email}
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      bind:value={phone}
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(702) 200-3422"
                    />
                  </div>

                  <div>
                    <label for="inquiryType" class="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      bind:value={inquiryType}
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="general">General Question</option>
                      <option value="buying">Buying a Home</option>
                      <option value="selling">Selling a Home</option>
                      <option value="valuation">Home Valuation</option>
                      <option value="investment">Real Estate Investment</option>
                    </select>
                  </div>

                  <div>
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      bind:value={message}
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell me about your real estate needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting.value}
                    class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting.value ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            ) : (
              <div class="text-center py-8">
                <div class="text-green-600 text-6xl mb-4">✓</div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                <p class="text-gray-600 mb-6">
                  Thank you for reaching out. Dr. Jan Duffy will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick$={() => {
                    isSubmitted.value = false
                    name.value = ''
                    email.value = ''
                    phone.value = ''
                    message.value = ''
                    inquiryType.value = 'general'
                  }}
                  class="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div class="space-y-8">
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="text-blue-600 text-2xl">📧</div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Email</h4>
                    <p class="text-gray-600">DrDuffy@OpenHouseUpdate.com</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="text-blue-600 text-2xl">📱</div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Phone</h4>
                    <p class="text-gray-600">(702) 200-3422</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="text-blue-600 text-2xl">📍</div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Office</h4>
                    <p class="text-gray-600">
                      {business.gbpName}
                      <br />
                      {business.streetAddress}
                      <br />
                      {business.addressLocality}, {business.addressRegion} {business.postalCode}
                    </p>
                    <p class="text-gray-600 mt-2">
                      <a class="text-blue-600 underline" href={`tel:${business.phoneTel}`}>
                        {business.phoneDisplay}
                      </a>
                    </p>
                    <p class="text-gray-600">{business.hoursDisplay}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="text-blue-600 text-2xl">⏰</div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Response Time</h4>
                    <p class="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div class="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-lg p-8 text-white">
              <h3 class="text-2xl font-bold mb-4">Quick Actions</h3>
              <div class="space-y-4">
                <a
                  href={`tel:${business.phoneTel}`}
                  class="block bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 transition-colors"
                >
                  <div class="font-semibold">Call {business.phoneDisplay}</div>
                  <div class="text-sm opacity-90">Talk with Dr. Jan Duffy</div>
                </a>
                <a
                  href={business.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 transition-colors"
                >
                  <div class="font-semibold">Get Directions</div>
                  <div class="text-sm opacity-90">{business.fullAddress}</div>
                </a>
                <a
                  href={business.reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 transition-colors"
                >
                  <div class="font-semibold">View Google Reviews</div>
                  <div class="text-sm opacity-90">See {business.gbpName} on Google Maps</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GoogleMapEmbed title="Open House Marketplace Google Map pin at 760 Windover Ct, Las Vegas NV 89138" />

      {/* FAQ Section */}
      <EnhancedPageSEO
        pageKey="contact"
        showFAQs={true}
        faqTitle="Contact Dr. Jan Duffy - Frequently Asked Questions"
        className="mt-12"
      />
    </section>
  )
})

export const head: DocumentHead = createOptimizedHead('contact')
