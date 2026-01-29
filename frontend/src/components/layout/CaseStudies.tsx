import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export const CaseStudies = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const cases = [
    {
      company: 'Vodacom Moçambique',
      description: 'A Vodacom utilizou a nhonga.net para recrutar 150+ profissionais de tecnologia em 6 meses, reduzindo o tempo de contratação em 40% e conectando-se com talentos qualificados em todo Moçambique.',
      logo: 'https://www.freelogovectors.net/wp-content/uploads/2024/01/vodacom-logo-freelogovectors.net_.png',
    },
    {
      company: 'Universidade Eduardo Mondlane',
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
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 font-heading">
          Negócios mais inteligentes. Impacto real.
        </h2>
        <p className="text-lg text-gray-600 mb-12 font-body">
          Descubra como empresas e instituições moçambicanas transformaram seus processos com a nhonga.net
        </p>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {cases.map((caseStudy, index) => (
              <div
                key={caseStudy.company}
                className={`border-l-4 ${
                  openIndex === index ? 'border-nhonga-600 bg-gray-50' : 'border-gray-200'
                } transition-all duration-300`}
              >
                <button
                  onClick={() => setOpenIndex(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-900 font-heading">
                    {caseStudy.company}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-nhonga-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 space-y-4">
                    <p className="text-gray-700 font-body leading-relaxed">
                      {caseStudy.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-nhonga-600 font-semibold hover:text-nhonga-700 transition-colors"
                    >
                      Ler o caso de estudo
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="lg:sticky lg:top-24 flex items-center justify-center bg-gray-50 rounded-2xl p-12 min-h-[400px]">
            <img
              src={cases[openIndex].logo}
              alt={cases[openIndex].company}
              className="max-w-full max-h-[300px] w-auto h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
