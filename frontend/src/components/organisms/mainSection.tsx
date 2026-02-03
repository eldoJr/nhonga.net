import { ArrowRight, Sparkles } from 'lucide-react';

export const MainSection = () => {
  return (
    <section className="py-16 md:py-24 pb-32 md:pb-40 overflow-hidden relative" style={{ backgroundColor: '#001219' }}>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#001219]/50"></div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <a 
            href="/novidades"
            className="inline-flex items-center gap-3 px-4 py-2 bg-nhonga-800/50 hover:bg-nhonga-800 border border-nhonga-700 rounded-full transition-all group"
          >
            <span className="px-2 py-0.5 bg-nhonga-400 text-nhonga-950 text-xs font-bold rounded uppercase">
              Novo
            </span>
            <span className="text-gray-300 text-sm">
              Plataforma de oportunidades agora disponível
            </span>
            <ArrowRight className="w-4 h-4 text-nhonga-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Uma plataforma.
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-nhonga-400 to-green-400 bg-clip-text text-transparent leading-tight">
            Infinitas oportunidades.
          </h2>
        </div>

        {/* Description */}
        <p className="text-center text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
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
            className="w-full px-8 py-4 bg-[#0a1f26] hover:bg-[#0d2730] border border-[#1a3d47] text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-5 h-5 text-nhonga-400" />
            Explorar Plataforma
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-400">
          Junte-se a milhares de profissionais e empresas.{' '}
          <a href="/sobre" className="text-nhonga-400 hover:underline">
            Saiba mais sobre a nhonga.net
          </a>
        </p>
      </div>
    </section>
  );
};
