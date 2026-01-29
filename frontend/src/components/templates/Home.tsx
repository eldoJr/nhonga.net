import { HeroSection } from '../organisms/HeroSection';
import { ValueProposition } from '../layout/ValueProposition';
import { SocialProof } from '../layout/SocialProof';
import { CaseStudies } from '../layout/CaseStudies';
import { DataDrivenCTA } from '../layout/DataDrivenCTA';
import { SearchDiscovery } from '../layout/SearchDiscovery';
import { Testimonials } from '../layout/Testimonials';
import { FAQ } from '../layout/FAQ';
import { Newsletter } from '../layout/Newsletter';
import { Footer } from '../organisms/footer';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <SocialProof />
      <ValueProposition />
      <CaseStudies />
      <DataDrivenCTA />
      <SearchDiscovery />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};