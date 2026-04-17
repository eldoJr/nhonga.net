import JobsHero from '../organisms/jobsHero'
import JobsGrid from '../organisms/jobsGrid'
import JobCategories from '../organisms/jobCategories'
import TopCompanies from '../organisms/topCompanies'
import JobStats from '../organisms/jobStats'
import CtaSection from '../organisms/ctaSection'

export default function JobsPage() {
  return (
    <>
      <JobsHero />
      <JobsGrid />
      <JobCategories />
      <TopCompanies />
      <JobStats />
      <CtaSection />
    </>
  )
}
