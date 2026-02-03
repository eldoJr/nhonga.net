import { Briefcase, Users, GraduationCap, Building2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const cards = [
  {
    title: 'Oportunidades de Emprego',
    description: 'Aceda a milhares de vagas em Moçambique e conecte-se com as melhores empresas do país.',
    link: 'Explorar Vagas',
    icon: <Briefcase className="w-6 h-6" />,
    href: '/vagas'
  },
  {
    title: 'Rede Profissional',
    description: 'Expanda sua rede, encontre mentores e descubra oportunidades de colaboração.',
    link: 'Começar Networking',
    icon: <Users className="w-6 h-6" />,
    href: '/rede'
  },
  {
    title: 'Desenvolvimento de Carreira',
    description: 'Descubra bolsas de estudo, cursos online e programas de formação profissional.',
    link: 'Ver Oportunidades',
    icon: <GraduationCap className="w-6 h-6" />,
    href: '/formacao'
  },
  {
    title: 'Marketplace de Serviços',
    description: 'Conecte-se com prestadores de serviços e empresas para projetos e parcerias.',
    link: 'Explorar Serviços',
    icon: <Building2 className="w-6 h-6" />,
    href: '/servicos'
  }
];

const CARD_WIDTH = 380;
const GAP = 24;

export const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((activeIndex + 1) % cards.length);
  const prev = () => setActiveIndex((activeIndex - 1 + cards.length) % cards.length);
  const goTo = (index: number) => setActiveIndex(index);

  const translateX = -(activeIndex * (CARD_WIDTH + GAP));

  return (
    <section className="bg-gradient-to-br from-nhonga-900 via-nhonga-800 to-nhonga-900 dark:from-nhonga-950 dark:to-nhonga-900 py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex-shrink-0 lg:w-96 px-6 md:px-12 lg:px-16">
            <h1 className="text-3xl md:text-4xl font-bold text-nhonga-400 mb-4 md:mb-6 leading-tight">
              Conecte Talentos e Oportunidades
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              A plataforma que une profissionais, empresas e oportunidades em Moçambique.
            </p>
            <a 
              href="/sobre"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-nhonga-400 transition-colors group focus:outline-none focus:ring-2 focus:ring-nhonga-400 focus:ring-offset-2 focus:ring-offset-nhonga-900 rounded px-1"
            >
              Saiba Mais
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            {/* Dots Navigation */}
            <div className="flex items-center gap-1.5 mt-8 md:mt-12">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-nhonga-300 ${
                    activeIndex === index
                      ? 'w-6 h-1.5 bg-nhonga-400'
                      : 'w-1.5 h-1.5 bg-nhonga-600 hover:bg-nhonga-500'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                  aria-current={activeIndex === index}
                />
              ))}
            </div>
          </div>

          {/* Cards Carousel - Full Bleed Right */}
          <div className="flex-1 -mr-6 md:-mr-12 lg:-mr-16 min-w-0 relative">
            {/* Arrow Controls - Outside viewport */}
            <button
              onClick={prev}
              className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-nhonga-400 hover:bg-nhonga-300 items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-nhonga-300 shadow-lg"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5 text-nhonga-900" />
            </button>

            <button
              onClick={next}
              className="hidden lg:flex absolute right-20 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-nhonga-400 hover:bg-nhonga-300 items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-nhonga-300 shadow-lg"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-5 h-5 text-nhonga-900" />
            </button>

            {/* Carousel Viewport */}
            <div className="overflow-hidden" role="region" aria-label="Carousel de oportunidades">
              {/* Carousel Track */}
              <div 
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                {cards.map((card, index) => (
                  <article
                    key={index}
                    className={`w-[380px] flex-shrink-0 bg-white dark:bg-nhonga-800 rounded-2xl p-7 shadow-xl transition-all duration-300 ${
                      index === activeIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                    }`}
                  >
                    <div className="text-nhonga-600 dark:text-nhonga-400 mb-4">{card.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{card.title}</h3>
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{card.description}</p>
                    <a 
                      href={card.href}
                      className="inline-flex items-center gap-2 text-nhonga-600 dark:text-nhonga-400 font-semibold hover:gap-3 transition-all group focus:outline-none focus:ring-2 focus:ring-nhonga-500 rounded px-1"
                    >
                      {card.link}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
