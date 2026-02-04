export const Newsletter = () => {
  return (
    <section className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6 font-heading">Mantenha-se conectado</h2>
            <div>
              <img 
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/04f290c8baa586175eff911ee952c6a4.png?auto=format%2Ccompress&dpr=2&w=541&h=379" 
                alt="Newsletter" 
                className="w-full h-auto object-cover rounded-lg"
              />
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
