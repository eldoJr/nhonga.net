import { ArrowRight } from 'lucide-react';

export const DataDrivenCTA = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading leading-tight">
              82% dos profissionais na nhonga.net reportam benefícios de carreira, como conseguir um novo emprego, obter uma promoção, ganhar competências aplicáveis e muito mais.¹
            </h2>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-nhonga-600 text-white text-sm font-semibold rounded-lg hover:bg-nhonga-700 transition-colors shadow-md">
              Comece Gratuitamente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-nhonga-500 to-blue-600 rounded-[2.5rem] transform rotate-3"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl">
              <img
                src="https://gestaodesegurancaprivada.com.br/wp-content/uploads/Profissao-definicao.jpg"
                alt="Profissional moçambicano usando smartphone"
                className="w-full h-[320px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
