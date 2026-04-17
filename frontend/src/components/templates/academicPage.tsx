import AcademicHero from '../organisms/academicHero'
import AcademicCategories from '../organisms/academicCategories'
import AcademicStats from '../organisms/academicStats'
import FeaturedScholarships from '../organisms/featuredScholarships'
import CtaSection from '../organisms/ctaSection'

export default function AcademicPage() {
  return (
    <>
      <AcademicHero />
      <AcademicCategories />
      <AcademicStats />
      <FeaturedScholarships />
      <CtaSection />
    </>
  )
}
