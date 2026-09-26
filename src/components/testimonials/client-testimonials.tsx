import { component$ } from '@builder.io/qwik'
import HeadingImage from '~/components/media/heading-image'
import { business } from '~/config/business'

/**
 * Do not invent named client reviews or star counts.
 * Point homebuyers to the live Google Business Profile reviews.
 */
export default component$(() => {
  return (
    <section class="google-reviews-cta">
      <style>{`
        .google-reviews-cta {
          max-width: 900px;
          margin: 0 auto 3rem;
          padding: 0 1rem;
        }
        .google-reviews-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          text-align: center;
        }
        .google-reviews-card h2 {
          color: #0A2540;
          font-size: 1.75rem;
          margin: 1.5rem 1.5rem 0.75rem;
        }
        .google-reviews-card p {
          color: #475569;
          margin: 0 1.5rem 1.25rem;
          line-height: 1.6;
        }
        .google-reviews-card a {
          display: inline-block;
          margin: 0 0.5rem 1.5rem;
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          background: #3A8DDE;
          color: white;
        }
      `}</style>
      <div class="google-reviews-card">
        <HeadingImage
          imageKey="about"
          heading="Google reviews for Open House Marketplace"
          variant="section"
        />
        <h2>Read Google reviews for {business.gbpName}</h2>
        <p>
          {business.agentName}. Reviews live on Google Maps — this site does not publish invented
          star ratings.
        </p>
        <a href={business.reviewsUrl} target="_blank" rel="noopener noreferrer">
          View Google Reviews
        </a>
        <a href={business.writeReviewUrl} target="_blank" rel="noopener noreferrer">
          Write a Google Review
        </a>
      </div>
    </section>
  )
})
