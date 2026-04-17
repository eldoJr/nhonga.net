import NewsletterHero from '../organisms/newsletterHero'
import FeaturedArticles from '../organisms/featuredArticles'
import LatestArticles from '../organisms/latestArticles'
import NewsletterTopics from '../organisms/newsletterTopics'
import CtaSection from '../organisms/ctaSection'

export default function NewsletterPage() {
  return (
    <>
      <NewsletterHero />
      <FeaturedArticles />
      <LatestArticles />
      <NewsletterTopics />
      <CtaSection />
    </>
  )
}
