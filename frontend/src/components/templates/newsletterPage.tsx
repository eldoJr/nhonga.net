import NewsletterHero from '../organisms/newsletterHero'
import FeaturedArticles from '../organisms/featuredArticles'
import LatestArticles from '../organisms/latestArticles'
import NewsletterTopics from '../organisms/newsletterTopics'

export default function NewsletterPage() {
  return (
    <>
      <NewsletterHero />
      <FeaturedArticles />
      <LatestArticles />
      <NewsletterTopics />
    </>
  )
}
