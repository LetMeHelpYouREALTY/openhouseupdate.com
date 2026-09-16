import { $, component$, useSignal } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import HeadingImage from '~/components/media/heading-image'
import EnhancedPageSEO, { createOptimizedHead } from '~/components/seo/enhanced-page-seo'
import { getPageFAQs } from '~/data/page-faqs'

export default component$(() => {
  const openFAQ = useSignal<number | null>(null)

  const toggleFAQ = $((index: number) => {
    openFAQ.value = openFAQ.value === index ? null : index
  })

  // Get FAQs from data source
  const peopleAlsoAsk = getPageFAQs('people-also-ask')

  return (
    <section class="people-also-ask-page">
      <style>{`
        .people-also-ask-page {
          min-height: 100vh;
          background: linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%);
        }
        .paa-hero {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          padding: 3rem 1.5rem;
          color: white;
          margin-bottom: 2rem;
        }
        .paa-hero > :not(figure) {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <div class="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div class="text-center mb-16">
          <div class="paa-hero">
            <HeadingImage
              imageKey="people-also-ask"
              heading="People Also Ask"
              variant="background"
              priority
            />
            <h1 class="text-4xl md:text-5xl font-bold mb-6">People Also Ask</h1>
            <p class="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Get answers to the most common questions about Las Vegas real estate, open houses, and
              the housing market
            </p>
          </div>
          <p class="text-gray-600 max-w-3xl mx-auto text-lg">
            Expert insights from Dr. Jan Duffy, your trusted Las Vegas Open House Expert with over
            20 years of experience
          </p>
        </div>

        {/* FAQ Accordion */}
        <div class="max-w-4xl mx-auto mb-16">
          <HeadingImage
            imageKey="about"
            heading="Common Las Vegas real estate questions"
            variant="section"
          />
          <div class="space-y-4">
            {peopleAlsoAsk.map((faq, index) => (
              <div
                key={`paa-${faq.question.slice(0, 20)}-${index}`}
                class="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-blue-600"
              >
                <button
                  type="button"
                  onClick$={() => toggleFAQ(index)}
                  class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h2 class="text-xl font-bold text-gray-900 pr-4">{faq.question}</h2>
                  <div class="text-blue-600 text-3xl font-bold flex-shrink-0">
                    {openFAQ.value === index ? '−' : '+'}
                  </div>
                </button>
                {openFAQ.value === index && (
                  <div class="px-6 pb-6 border-t border-gray-100">
                    <div class="pt-4 text-gray-700 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Expert CTA */}
        <div class="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-xl p-10 text-white text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Have More Questions?</h2>
          <HeadingImage imageKey="contact" heading="Have More Questions?" variant="section" />
          <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Dr. Jan Duffy is here to provide personalized answers and expert guidance for your Las
            Vegas real estate needs
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              class="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Contact Dr. Duffy
            </a>
            <a
              href="/home-valuation"
              class="bg-white bg-opacity-20 text-white py-3 px-8 rounded-lg font-semibold hover:bg-opacity-30 transition-colors text-lg border-2 border-white"
            >
              Get Free Home Valuation
            </a>
          </div>
        </div>

        {/* Related Topics */}
        <div class="max-w-4xl mx-auto">
          <HeadingImage
            imageKey="people-also-ask"
            heading="Explore More Topics"
            variant="section"
          />
          <h2 class="text-2xl font-bold text-gray-900 text-center mb-8">Explore More Topics</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <a
              href="/faq"
              class="bg-white rounded-lg shadow-lg overflow-hidden text-center hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-600"
            >
              <HeadingImage imageKey="people-also-ask" heading="Full FAQ" variant="card" />
              <h3 class="text-lg font-bold text-gray-900 mb-2 mt-4 px-4">Full FAQ</h3>
              <p class="text-gray-600 text-sm px-4 pb-6">Browse all frequently asked questions</p>
            </a>
            <a
              href="/services"
              class="bg-white rounded-lg shadow-lg overflow-hidden text-center hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-600"
            >
              <HeadingImage imageKey="buyer-services" heading="Our Services" variant="card" />
              <h3 class="text-lg font-bold text-gray-900 mb-2 mt-4 px-4">Our Services</h3>
              <p class="text-gray-600 text-sm px-4 pb-6">Learn about buyer and seller services</p>
            </a>
            <a
              href="/about"
              class="bg-white rounded-lg shadow-lg overflow-hidden text-center hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-600"
            >
              <HeadingImage imageKey="about" heading="About Dr. Duffy" variant="card" />
              <h3 class="text-lg font-bold text-gray-900 mb-2 mt-4 px-4">About Dr. Duffy</h3>
              <p class="text-gray-600 text-sm px-4 pb-6">Meet your Open House Expert</p>
            </a>
          </div>
        </div>
      </div>

      {/* SEO FAQ Section */}
      <EnhancedPageSEO pageKey="people-also-ask" showFAQs={true} className="mt-12" />
    </section>
  )
})

export const head: DocumentHead = createOptimizedHead(
  'people-also-ask',
  undefined,
  undefined,
  undefined
)
