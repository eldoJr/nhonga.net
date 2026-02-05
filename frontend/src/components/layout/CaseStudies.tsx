import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export const CaseStudies = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const cases = [
    {
      company: 'Vodacom',
      description: 'A Vodacom utilizou a nhonga.net para recrutar 150+ profissionais de tecnologia em 6 meses, reduzindo o tempo de contratação em 40% e conectando-se com talentos qualificados em todo Moçambique.',
      logo: 'https://www.freelogovectors.net/wp-content/uploads/2024/01/vodacom-logo-freelogovectors.net_.png',
    },
    {
      company: 'UEM',
      description: 'A UEM expandiu seu alcance académico através da plataforma, divulgando bolsas de estudo e programas de investigação para mais de 5.000 estudantes, aumentando as candidaturas em 65%.',
      logo: 'https://project.hupedcare.com/images/partners/UEM.png',
    },
    {
      company: 'Banco BCI',
      description: 'O BCI encontrou consultores financeiros especializados e prestadores de serviços através do marketplace, estabelecendo parcerias estratégicas com 30+ profissionais certificados.',
      logo: 'https://play-lh.googleusercontent.com/7DTF6em3QwWVmoXMMMIEkAkAOyyD9e4evBI5VMtwWTXcRtt02lnw-7m5KbdQDJXlWw=w600-h300-pc0xffffff-pd',
    },
    {
      company: 'Mozal',
      description: 'A Mozal utilizou a rede B2B para identificar fornecedores locais e parceiros comerciais, fortalecendo a cadeia de valor moçambicana e criando 200+ oportunidades de negócio.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Mozal_logo.png',
    },
  ];

  return (
    <section className="bg-white dark:bg-gradient-to-b dark:from-[#001219] dark:via-[#001219] dark:to-[#0a2a33] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 font-heading">
          Negócios mais inteligentes. Impacto real.
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-300 mb-10 font-body">
          Descubra como empresas e instituições moçambicanas transformaram seus processos com a nhonga.net
        </p>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-2">
            {cases.map((caseStudy, index) => (
              <div
                key={caseStudy.company}
                className={`border-l-4 ${
                  openIndex === index ? 'border-nhonga-600 dark:border-nhonga-400 bg-gray-50 dark:bg-nhonga-900/30' : 'border-gray-200 dark:border-gray-700'
                } transition-all duration-300`}
              >
                <button
                  onClick={() => setOpenIndex(index)}
                  className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-nhonga-900/30 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white font-heading">
                    {caseStudy.company}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-nhonga-600 dark:text-nhonga-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 space-y-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-body leading-relaxed">
                      {caseStudy.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm text-nhonga-600 dark:text-nhonga-400 font-semibold hover:text-nhonga-700 dark:hover:text-nhonga-300 transition-colors"
                    >
                      Ler o caso de estudo
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="lg:sticky lg:top-24 flex items-center justify-center bg-gray-50 dark:bg-nhonga-900/30 rounded-xl p-8 min-h-[300px]">
            <img
              src={cases[openIndex].logo}
              alt={cases[openIndex].company}
              className="max-w-full max-h-[200px] w-auto h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
