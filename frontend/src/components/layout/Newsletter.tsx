export const Newsletter = () => {
  return (
    <section className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6 font-heading">Mantenha-se conectado</h2>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-400 p-10 relative overflow-hidden">
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                  <line x1="50" y1="150" x2="350" y2="150" stroke="white" strokeWidth="2" opacity="0.3"/>
                  <line x1="100" y1="100" x2="300" y2="200" stroke="white" strokeWidth="2" opacity="0.3"/>
                  <line x1="100" y1="200" x2="300" y2="100" stroke="white" strokeWidth="2" opacity="0.3"/>
                  <circle cx="100" cy="100" r="3" fill="white"/>
                  <circle cx="200" cy="80" r="3" fill="white"/>
                  <circle cx="300" cy="100" r="3" fill="white"/>
                  <circle cx="150" cy="150" r="3" fill="white"/>
                  <circle cx="250" cy="150" r="3" fill="white"/>
                  <circle cx="100" cy="200" r="3" fill="white"/>
                  <circle cx="200" cy="220" r="3" fill="white"/>
                  <circle cx="300" cy="200" r="3" fill="white"/>
                  <circle cx="50" cy="150" r="4" fill="white"/>
                  <circle cx="350" cy="150" r="4" fill="white"/>
                </svg>
              </div>
              <div className="relative flex items-center justify-center h-64">
                <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none">
                  <ellipse cx="60" cy="60" rx="50" ry="30" stroke="white" strokeWidth="3"/>
                  <circle cx="60" cy="60" r="20" fill="white" opacity="0.2"/>
                  <path d="M 35 60 Q 47.5 50 60 60 Q 72.5 70 85 60" stroke="white" strokeWidth="3" fill="none"/>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 font-heading">Newsletter nhonga.net</h3>
            <p className="text-gray-600 text-sm mb-4 font-body">
              Subscreva para receber novidades sobre oportunidades, recursos de carreira, casos de sucesso e eventos na plataforma.
            </p>

            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700 mb-2 font-body">
                Email profissional
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 text-sm border-2 border-nhonga-600 rounded-xl focus:outline-none focus:border-nhonga-700 transition-colors font-body"
                placeholder="seu.email@exemplo.com"
              />
            </div>

            <p className="text-xs text-gray-500 mb-4 font-body">
              A sua subscrição será entregue em Português. Encontrará um link para cancelar em cada newsletter. Pode gerir as suas subscrições{' '}
              <a href="#" className="text-nhonga-600 hover:underline">aqui</a>. Consulte a nossa{' '}
              <a href="#" className="text-nhonga-600 hover:underline">Política de Privacidade</a> para mais informações.
            </p>

            <button className="bg-nhonga-600 text-white px-6 py-2.5 text-sm font-medium rounded-lg hover:bg-nhonga-700 transition-colors">
              Subscrever
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
