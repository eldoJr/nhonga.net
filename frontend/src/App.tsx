import Header from './components/organisms/header'
import HeroSection from './components/organisms/heroSection'
import BentoGrid from './components/organisms/bentoGrid'
import Testimonials from './components/organisms/testimonials'
import CtaSection from './components/organisms/ctaSection'
import Footer from './components/organisms/footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Header />
      <HeroSection />
      <BentoGrid />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App
