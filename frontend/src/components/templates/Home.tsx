import { HeroSection } from '../organisms/HeroSection';
import { ValueProposition } from '../layout/ValueProposition';
import { SocialProof } from '../layout/SocialProof';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <SocialProof />
      <ValueProposition />
    </div>
  );
};