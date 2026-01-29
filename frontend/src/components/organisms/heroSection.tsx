import { Briefcase, Users, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { FeatureCard } from '../molecules/FeatureCard';

const features = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Encontre o Emprego Ideal',
    description: 'Aceda a milhares de oportunidades de emprego em Moçambique. Conecte-se com as melhores empresas e construa a carreira dos seus sonhos.',
    buttonText: 'Explorar Vagas',
    variant: 'primary' as const,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Conecte-se com Profissionais',
    description: 'Expanda a sua rede profissional. Encontre parceiros de negócio, mentores e oportunidades de colaboração em todo o país.',
    buttonText: 'Começar Networking',
    variant: 'secondary' as const,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop'
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Desenvolva suas Competências',
    description: 'Descubra bolsas de estudo, cursos online e programas de formação. Invista no seu futuro e alcance novos patamares profissionais.',
    buttonText: 'Ver Oportunidades',
    variant: 'tertiary' as const,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop'
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleFeatureClick = (index: number) => {
    console.log(`Feature ${index} clicked`);
  };

  const scrollToSlide = (index: number) => {
    setCurrentSlide(index);
    const container = document.querySelector('.carousel-container');
    if (container) {
      const scrollAmount = (container.scrollWidth / features.length) * index;
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-white dark:bg-nhonga-950 py-4 transition-colors overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-8">
        {/* Carousel Container */}
        <div className="relative mb-8">
          {/* Left blur gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-r from-white dark:from-nhonga-950 to-transparent z-10 pointer-events-none"></div>
          {/* Right blur gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-l from-white dark:from-nhonga-950 to-transparent z-10 pointer-events-none"></div>
          
          <div className="carousel-container overflow-x-auto overflow-y-hidden scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div 
              className="flex gap-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="w-[calc(50%-12px)] min-w-[calc(50%-12px)] flex-shrink-0">
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    buttonText={feature.buttonText}
                    onButtonClick={() => handleFeatureClick(index)}
                    variant={feature.variant}
                    image={feature.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex gap-3">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`transition-all duration-300 rounded-md ${
                currentSlide === index
                  ? 'w-12 h-3 bg-nhonga-600 dark:bg-nhonga-500'
                  : 'w-3 h-3 bg-nhonga-300 dark:bg-nhonga-700 hover:bg-nhonga-400 dark:hover:bg-nhonga-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
