import Header from './components/organisms/header'
import HeroSection from './components/organisms/heroSection'
import AboutSection from './components/organisms/aboutSection'
import BentoGrid from './components/organisms/bentoGrid'
import HowItWorks from './components/organisms/howItWorks'
import Stats from './components/organisms/stats'
import Testimonials from './components/organisms/testimonials'
import Faq from './components/organisms/faq'
import CtaSection from './components/organisms/ctaSection'
import Footer from './components/organisms/footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Header />
      <HeroSection />
      <Stats />
      <AboutSection />
      <BentoGrid />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App
