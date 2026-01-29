import { HeroSection } from '../organisms/HeroSection';
import { ValueProposition } from '../layout/ValueProposition';
import { SocialProof } from '../layout/SocialProof';
import { CaseStudies } from '../layout/CaseStudies';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <SocialProof />
      <ValueProposition />
      <CaseStudies />
    </div>
  );
};