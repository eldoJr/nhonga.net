import { Briefcase, Users, GraduationCap, Building2, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
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
    <div className="bg-emerald-50 dark:bg-[#0a1f1a]">
      {/* Main Section */}
      <section className="py-16 md:py-24 pb-16 md:pb-20 overflow-visible relative rounded-b-[120px] bg-white dark:bg-gradient-to-b dark:from-[#001219] dark:via-[#001219] dark:to-[#0a2a33]">
        {/* Green Halftone Wave Dot Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-b-[120px] flex items-center">
          <svg className="absolute left-0 w-full h-2/3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 500" preserveAspectRatio="xMinYMid meet">
            <defs>
              <filter id="blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" />
              </filter>
              <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
            <g filter="url(#blur)" opacity="0.85">
              {[...Array(100)].map((_, col) => 
                [...Array(25)].map((_, row) => {
                  const x = col * 18;
                  const y = row * 20;
                  const wave1 = Math.sin((x * 0.007) + (y * 0.012)) * 50;
                  const wave2 = Math.cos((x * 0.009) - (y * 0.008)) * 35;
                  const wave3 = Math.sin((x * 0.004) + (y * 0.018)) * 25;
                  const waveY = y + wave1 + wave2 + wave3;
                  const distFromCenter = Math.sqrt(Math.pow(x - 450, 2) + Math.pow(waveY - 250, 2));
                  const density = Math.max(0, 1 - (distFromCenter / 650));
                  const sizeVariation = Math.sin(x * 0.04 + y * 0.05) * 0.5;
                  const size = (0.8 + sizeVariation) * density * 2.2;
                  const opacity = 0.15 + (density * 0.3) + (sizeVariation * 0.05);
                  if (size < 0.3) return null;
                  return (
                    <circle
                      key={`${col}-${row}`}
                      cx={x}
                      cy={waveY}
                      r={size}
                      fill="url(#greenGrad)"
                      opacity={opacity}
                      style={{ mixBlendMode: 'screen' }}
                    />
                  );
                })
              )}            </g>
          </svg>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          {/* Announcement Badge */}
          <div className="flex justify-center mb-8">
            <a 
              href="/novidades"
              className="inline-flex items-center gap-3 px-4 py-2.5 backdrop-blur-md bg-gradient-to-br from-emerald-200/80 via-white/70 to-emerald-200/80 dark:from-[#00120F]/80 dark:via-emerald-500/20 dark:to-[#00120F]/80 hover:from-emerald-300/90 hover:via-white/80 hover:to-emerald-300/90 dark:hover:from-[#00120F]/90 dark:hover:via-emerald-500/30 dark:hover:to-[#00120F]/90 border-2 border-emerald-300/60 dark:border-emerald-400/40 rounded-full transition-all group shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
            >
              <span className="px-2 py-0.5 bg-nhonga-400 text-nhonga-950 text-xs font-bold rounded uppercase">
                Novo
              </span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                Plataforma de oportunidades agora disponível
              </span>
              <ArrowRight className="w-4 h-4 text-nhonga-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Uma plataforma.
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-nhonga-400 to-green-400 bg-clip-text text-transparent leading-tight">
              Infinitas oportunidades.
            </h2>
          </div>

          {/* Description */}
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Conecte talentos, empresas e oportunidades em Moçambique numa única plataforma integrada.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 mb-6 max-w-md mx-auto">
            <a
              href="/cadastro"
              className="w-full px-8 py-4 bg-nhonga-400 hover:bg-nhonga-300 text-nhonga-950 font-bold rounded-lg transition-all shadow-lg hover:shadow-xl text-center"
            >
              Começar Agora
            </a>
            <button
              className="w-full px-8 py-4 backdrop-blur-md bg-transparent hover:bg-white/10 dark:hover:bg-nhonga-800/20 border-2 border-emerald-300/60 dark:border-emerald-400/40 text-gray-900 dark:text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
            >
              <Sparkles className="w-5 h-5 text-nhonga-400" />
              Explorar Plataforma
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Footer Note */}
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Junte-se a milhares de profissionais e empresas.{' '}
            <a href="/sobre" className="text-nhonga-400 hover:underline">
              Saiba mais sobre a nhonga.net
            </a>
          </p>
        </div>
      </section>

      {/* Hero Section with Carousel */}
      <section className="pt-8 md:pb-20 pb-16 md:pb-20 overflow-hidden relative">
        <div className="max-w-[1920px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="flex-shrink-0 lg:w-96 px-6 md:px-12 lg:px-16">
              <h1 className="text-3xl md:text-4xl font-bold text-nhonga-600 dark:text-nhonga-400 mb-4 md:mb-6 leading-tight">
                Conecte Talentos e Oportunidades
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                A plataforma que une profissionais, empresas e oportunidades em Moçambique.
              </p>
              <a 
                href="/sobre"
                className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-semibold hover:text-nhonga-600 dark:hover:text-nhonga-400 transition-colors group focus:outline-none focus:ring-2 focus:ring-nhonga-400 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-nhonga-900 rounded px-1"
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
              <div className="overflow-hidden pb-12"  role="region" aria-label="Carousel de oportunidades">
                {/* Carousel Track */}
                <div 
                  className="flex gap-6 transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(${translateX}px)` }}
                >
                  {cards.map((card, index) => (
                    <article
                      key={index}
                      className={`w-[380px] flex-shrink-0 backdrop-blur-md bg-gradient-to-br from-emerald-200/80 via-white/70 to-emerald-200/80 dark:from-[#00120F]/80 dark:via-emerald-500/20 dark:to-[#00120F]/80 border-2 border-emerald-300/60 dark:border-emerald-400/40 rounded-2xl p-7 shadow-lg shadow-emerald-500/10 transition-all duration-300 flex flex-col ${
                        index === activeIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                      }`}
                    >
                      <div className="text-nhonga-600 dark:text-nhonga-400 mb-4">{card.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{card.title}</h3>
                      <p className="text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">{card.description}</p>
                      <a 
                        href={card.href}
                        className="inline-flex items-center gap-2 text-nhonga-600 dark:text-nhonga-400 font-semibold hover:gap-3 transition-all group focus:outline-none focus:ring-2 focus:ring-nhonga-500 rounded px-1 mt-auto"
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
    </div>
  );
};
