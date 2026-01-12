import { topheader as TopHeader } from './components/organisms';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="font-gt-walsheim text-4xl font-bold text-nhonga-900 mb-4">
            Conectando Talentos em Moçambique
          </h1>
          <p className="font-montserrat text-lg text-nhonga-700 max-w-2xl mx-auto">
            Plataforma profissional e social de oportunidades para Moçambique, 
            conectando talentos, serviços, negócios e oportunidades académicas.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App