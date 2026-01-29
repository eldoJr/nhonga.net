import { HeroSection } from '../organisms/HeroSection';
import { ValueProposition } from '../layout/ValueProposition';
import { SocialProof } from '../layout/SocialProof';
import { CaseStudies } from '../layout/CaseStudies';
import { DataDrivenCTA } from '../layout/DataDrivenCTA';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <SocialProof />
      <ValueProposition />
      <CaseStudies />
      <DataDrivenCTA />
    </div>
  );
};