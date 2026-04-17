import HeroSection from '../organisms/heroSection'
import AboutSection from '../organisms/aboutSection'
import BentoGrid from '../organisms/bentoGrid'
import HowItWorks from '../organisms/howItWorks'
import Stats from '../organisms/stats'
import Testimonials from '../organisms/testimonials'
import Faq from '../organisms/faq'
import CtaSection from '../organisms/ctaSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Stats />
      <AboutSection />
      <BentoGrid />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <CtaSection />
    </>
  )
}
