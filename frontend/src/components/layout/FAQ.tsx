import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Posso experimentar o nhonga.net gratuitamente?',
    answer: 'Sim! O nhonga.net oferece um plano gratuito com acesso a funcionalidades básicas de networking e busca de oportunidades.'
  },
  {
    question: 'O que está incluído na plataforma?',
    answer: 'A plataforma inclui perfil profissional, busca de empregos, marketplace de serviços, networking B2B, oportunidades acadêmicas e recursos de desenvolvimento de carreira.'
  },
  {
    question: 'Como posso encontrar oportunidades de emprego?',
    answer: 'Use nossa ferramenta de busca avançada, configure alertas personalizados e conecte-se diretamente com recrutadores e empresas.'
  },
  {
    question: 'Como funciona o marketplace de serviços?',
    answer: 'Profissionais podem criar perfis, listar seus serviços, receber avaliações e conectar-se diretamente com clientes interessados.'
  },
  {
    question: 'Posso encontrar bolsas de estudo na plataforma?',
    answer: 'Sim! Temos uma seção dedicada a oportunidades acadêmicas, incluindo bolsas de estudo nacionais e internacionais.'
  },
  {
    question: 'Como as empresas podem recrutar talentos?',
    answer: 'Empresas podem publicar vagas, buscar candidatos por competências e conectar-se diretamente com profissionais qualificados.'
  },
  {
    question: 'A plataforma oferece recursos de networking B2B?',
    answer: 'Sim! Empresas podem criar perfis corporativos, buscar parceiros comerciais e explorar oportunidades de negócio.'
  },
  {
    question: 'Existem cursos de desenvolvimento profissional?',
    answer: 'Oferecemos conteúdo educativo, webinars e recursos para desenvolvimento de carreira e aprimoramento de competências.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visibleCount = 3;
  const displayedFaqs = showAll ? faqs : faqs.slice(0, visibleCount);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Perguntas frequentes</h2>
      
      <div className="bg-white border border-gray-200">
        {displayedFaqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900 text-sm">{faq.question}</span>
              <ChevronDown 
                className={`w-4 h-4 text-gray-600 transition-transform flex-shrink-0 ml-4 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-600 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {faqs.length > visibleCount && (
        <div className="text-center mt-4">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            {showAll ? 'Mostrar menos' : `Mostrar todas as ${faqs.length} perguntas frequentes`}
            <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>
      )}

    </section>
  );
};
