import { component$ } from '@builder.io/qwik'
import { type DocumentHead, useLocation } from '@builder.io/qwik-city'
import HeadingImage from '~/components/media/heading-image'
import { createSEOHead } from '~/components/seo/seo-head'
import { business } from '~/config/business'
import { getBlogPostBySlug } from '~/data/blog-posts'
import { renderBlogHtml } from '~/lib/blog-markdown'
import { getAbsoluteImageUrl } from '~/lib/cloudflare-images'

export default component$(() => {
  const location = useLocation()
  const post = getBlogPostBySlug(location.params.slug)

  if (!post) {
    return (
      <section class="container mx-auto px-6 py-16 text-center">
        <HeadingImage imageKey="page-not-found" heading="Article not found" variant="section" />
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Article not found</h1>
        <p class="text-gray-600 mb-6">That blog post is not published on Open House Marketplace.</p>
        <a href="/blog" class="text-blue-600 font-semibold">
          Back to the Las Vegas real estate blog
        </a>
      </section>
    )
  }

  return (
    <article class="blog-post-page">
      <style>{`
        .blog-post-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 1rem 4rem;
        }
        .blog-post-meta {
          color: #64748b;
          margin: 1rem 0 1.5rem;
        }
        .blog-html h1 {
          display: none;
        }
        .blog-html h2 {
          color: #0A2540;
          font-size: 1.75rem;
          font-weight: 700;
          margin: 2rem 0 0.75rem;
        }
        .blog-html h3 {
          color: #0A2540;
          font-size: 1.25rem;
          font-weight: 600;
          margin: 1.5rem 0 0.5rem;
        }
        .blog-html p,
        .blog-html li {
          color: #334155;
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .blog-html ul {
          padding-left: 1.25rem;
          list-style: disc;
          margin-bottom: 1.25rem;
        }
        .blog-cta {
          margin-top: 2.5rem;
          padding: 1.5rem;
          background: #F7F9FC;
          border-radius: 12px;
        }
      `}</style>
      <p>
        <a href="/blog" class="text-blue-600">
          ← Las Vegas real estate blog
        </a>
      </p>
      <HeadingImage imageKey={post.imageKey} heading={post.title} variant="hero" priority />
      <h1 class="text-4xl font-bold text-gray-900 mt-6">{post.title}</h1>
      <p class="blog-post-meta">
        {post.date} · {post.readTime} · {post.author}
      </p>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: HTML is generated from author-controlled blog markdown */}
      <div class="blog-html" dangerouslySetInnerHTML={renderBlogHtml(post.content)} />
      <div class="blog-cta">
        <HeadingImage
          imageKey="weekend-open-houses"
          heading="Tour this weekend’s open houses"
          variant="section"
        />
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Tour this weekend’s open houses</h2>
        <p class="text-gray-700 mb-4">
          {business.agentName} at {business.gbpName}, {business.fullAddress}. Call{' '}
          <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a> or get{' '}
          <a href={business.directionsUrl}>directions</a>.
        </p>
        <a
          href="/this-weekend"
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          This Weekend’s Open Houses
        </a>
      </div>
    </article>
  )
})

export const head: DocumentHead = ({ params }) => {
  const post = getBlogPostBySlug(params.slug)
  if (!post) {
    return {
      title: 'Article not found | Open House Marketplace',
      meta: [{ name: 'robots', content: 'noindex, follow' }],
    }
  }

  return createSEOHead({
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    canonicalUrl: `${business.siteUrl}/blog/${post.slug}`,
    ogImage: getAbsoluteImageUrl(post.imageKey, { width: 1200 }),
    ogImageAlt: post.title,
    ogType: 'article',
    articleAuthor: post.author,
    articleSection: post.category,
    articleTags: post.keywords,
  })
}
