import Header from './components/organisms/header'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Header />

      <main className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Oportunidades Profissionais em Moçambique
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Conectando talentos às melhores oportunidades.
        </p>
      </main>
    </div>
  )
}

export default App
