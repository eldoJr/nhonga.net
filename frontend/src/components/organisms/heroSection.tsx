import { Search, MapPin, ArrowRight, ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import logo from '/src/assets/icons/logo.png';
import logoWhite from '/src/assets/images/logo-w.png';
import { button as Button } from '../atoms/button';
import { useTheme } from '../../contexts/ThemeContext';

const jobSuggestions = [
  'trabalho remoto',
  'recém-formado',
  'meio período',
  'contabilista',
  'trabalho remoto meio período',
  'professor',
  'entrada de dados',
  'vaga para recém-formados',
  'analista de dados',
  'designer gráfico'
];

const locationSuggestions = [
  'Maputo, Maputo',
  'Matola, Maputo Província',
  'Xai-Xai, Gaza',
  'Inhambane, Inhambane',
  'Beira, Sofala',
  'Chimoio, Manica',
  'Tete, Tete',
  'Quelimane, Zambézia',
  'Nampula, Nampula',
  'Pemba, Cabo Delgado',
  'Lichinga, Niassa'
];

const trendingCategories = {
  profissionais: [
    'Professores de Línguas',
    'Desenvolvedores Web',
    'Costureiras',
    'Contadores',
    'Mecânicos Auto',
    'Cozinheiros',
    'Electricistas',
    'Enfermeiros',
    'Designers Gráficos',
    'Tradutores'
  ],
  servicos: [
    'Limpeza Doméstica',
    'Reparações Gerais',
    'Jardinagem',
    'Transporte',
    'Cuidados Infantis',
    'Aulas Particulares',
    'Segurança',
    'Pintura',
    'Carpintaria'
  ],
  educacao: [
    'Bolsas UEM',
    'Cursos Online',
    'Intercâmbios',
    'Estágios',
    'Workshops'
  ],
  biscates: [
    'Pintura',
    'Limpeza',
    'Mudanças',
    'Carga/Descarga',
    'Lavagem Carros',
    'Construção',
    'Venda Produtos'
  ],
  marketplace: [
    'Artesanato',
    'Agricultura',
    'Arte Local',
    'Tecnologia',
    'Moda',
    'Serviços',
    'Educação & Cursos'
  ]
};

export const heroSection = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showTrending, setShowTrending] = useState(false);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const [jobQuery, setJobQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const { effectiveTheme } = useTheme();

  return (
    <>
      <div className="bg-white dark:bg-nhonga-950 py-12 transition-colors">
        <div className="max-w-4xl mx-auto px-4">
        {/* Main Search Bar */}
        <div className="relative mb-12">
          <div className="flex items-center bg-white dark:bg-nhonga-900 rounded-2xl shadow-lg border-2 border-primary dark:border-nhonga-600">
            {/* Job Title Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-nhonga-400" />
              <input
                type="text"
                placeholder="Cargo, competências ou empresa"
                value={jobQuery}
                onChange={(e) => setJobQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="w-full pl-12 pr-10 py-4 bg-transparent rounded-l-2xl text-gray-700 dark:text-nhonga-150 focus:outline-none font-body placeholder:text-gray-400 dark:placeholder:text-nhonga-400"
              />
              {jobQuery && (
                <button
                  onClick={() => setJobQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-nhonga-400 hover:text-gray-600 dark:hover:text-nhonga-300 transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            {/* Location Input */}
            <div className="relative flex-1 border-l border-nhonga-200 dark:border-nhonga-700">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-nhonga-400" />
              <input
                type="text"
                placeholder="Localização ou 'remoto'"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                onFocus={() => setShowLocationSuggestions(true)}
                onBlur={() => setTimeout(() => setShowLocationSuggestions(false), 200)}
                className="w-full pl-12 pr-10 py-4 bg-transparent text-gray-700 dark:text-nhonga-150 focus:outline-none font-body placeholder:text-gray-400 dark:placeholder:text-nhonga-400"
              />
              {locationQuery && (
                <button
                  onClick={() => setLocationQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-nhonga-400 hover:text-gray-600 dark:hover:text-nhonga-300 transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            {/* Find Jobs Button */}
            <Button 
              variant="primary" 
              size="lg" 
              className="rounded-xl m-2 font-heading"
            >
              Procurar
            </Button>
          </div>

          {/* Search Suggestions Dropdown */}
          {showSuggestions && (
            <div className="absolute top-full left-0 w-1/2 mt-2 bg-white dark:bg-nhonga-900 border border-nhonga-200 dark:border-nhonga-700 rounded-xl shadow-xl z-10 animate-in slide-in-from-top-2 fade-in duration-200">
              <div className="p-4">
                <div className="text-sm font-semibold text-nhonga-800 dark:text-nhonga-150 mb-3 font-heading">Sugestões de pesquisa</div>
                {jobSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setJobQuery(suggestion);
                      setShowSuggestions(false);
                    }}
                    onMouseDown={(e) => e.preventDefault()}
                    className="flex items-center w-full text-left p-3 hover:bg-nhonga-50 dark:hover:bg-nhonga-800 hover:scale-[1.02] rounded-lg text-nhonga-700 dark:text-nhonga-200 text-sm transition-all duration-150 font-body group"
                  >
                    <Search className="w-4 h-4 mr-3 text-nhonga-400 group-hover:text-nhonga-600 transition-colors duration-150" />
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Location Suggestions Dropdown */}
          {showLocationSuggestions && (
            <div className="absolute top-full right-0 w-1/2 mt-2 bg-white dark:bg-nhonga-900 border border-nhonga-200 dark:border-nhonga-700 rounded-xl shadow-xl z-10 animate-in slide-in-from-top-2 fade-in duration-200">
              <div className="p-4">
                <div className="text-sm font-semibold text-nhonga-800 dark:text-nhonga-150 mb-3 font-heading">Localizações em Moçambique</div>
                {locationSuggestions.map((location, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setLocationQuery(location);
                      setShowLocationSuggestions(false);
                    }}
                    onMouseDown={(e) => e.preventDefault()}
                    className="flex items-center w-full text-left p-3 hover:bg-nhonga-50 hover:scale-[1.02] rounded-lg text-nhonga-700 text-sm transition-all duration-150 font-body group"
                  >
                    <MapPin className="w-4 h-4 mr-3 text-nhonga-400 group-hover:text-nhonga-600 transition-colors duration-150" />
                    {location}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Brand Section */}
        <div className="text-center mb-8">
          <div className="mb-6">
            <img src={effectiveTheme === 'dark' ? logoWhite : logo} alt="nhonga.net" className="h-12 mx-auto mb-4" />
          </div>
          
          <h1 className="text-3xl font-bold text-nhonga-900 dark:text-nhonga-100 mb-4 font-heading">
            A sua próxima oportunidade profissional começa aqui
          </h1>
          
          <p className="text-lg text-nhonga-700 dark:text-nhonga-300 mb-8 font-body">
            Crie uma conta ou inicie sessão para receber recomendações de emprego personalizadas.
          </p>
          
          <Button 
            variant="primary" 
            size="lg" 
            className="rounded-xl inline-flex items-center gap-3 mb-6 font-heading shadow-lg"
          >
            Começar Agora
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          <div className="mb-8">
            <a href="#" className="text-primary hover:text-nhonga-700 dark:hover:text-nhonga-400 transition-colors duration-200 font-medium font-body">
              Publique o seu CV – Demora apenas alguns segundos
            </a>
          </div>
          
          <div className="text-sm text-nhonga-600 dark:text-nhonga-400 mb-8 font-body">
            Nhonga disponível em <span className="font-semibold text-nhonga-800 dark:text-nhonga-200">Português</span>
          </div>
          
          <div className="relative inline-block">
            <Button 
              variant="ghost" 
              onClick={() => setShowTrending(!showTrending)}
              className="flex items-center gap-2 font-medium font-body"
            >
              O que está em alta no Nhonga
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showTrending ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </div>

        </div>
      </div>

      {/* Trending Section - Outside main container */}
    {showTrending && (
      <div className="bg-white dark:bg-nhonga-950 py-8 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Profissionais */}
            <div>
              <h4 className="font-semibold text-nhonga-800 dark:text-nhonga-150 mb-3 text-sm font-heading">Profissionais</h4>
              <ul className="space-y-2">
                {trendingCategories.profissionais.slice(0, 8).map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-xs text-nhonga-600 dark:text-nhonga-300 hover:text-primary hover:underline transition-all duration-200 font-body">
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-xs text-primary font-medium hover:text-nhonga-700 dark:hover:text-nhonga-400 hover:underline transition-all duration-200 font-body">
                    Ver todos
                  </a>
                </li>
              </ul>
            </div>

            {/* Serviços Locais */}
            <div>
              <h4 className="font-semibold text-nhonga-800 dark:text-nhonga-150 mb-3 text-sm font-heading">Serviços Locais</h4>
              <ul className="space-y-2">
                {trendingCategories.servicos.slice(0, 8).map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-xs text-nhonga-600 dark:text-nhonga-300 hover:text-primary hover:underline transition-all duration-200 font-body">
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-xs text-primary font-medium hover:text-nhonga-700 hover:underline transition-all duration-200 font-body">
                    Ver todos
                  </a>
                </li>
              </ul>
            </div>

            {/* Educação */}
            <div>
              <h4 className="font-semibold text-nhonga-800 dark:text-nhonga-150 mb-3 text-sm font-heading">Educação</h4>
              <ul className="space-y-2">
                {trendingCategories.educacao.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-xs text-nhonga-600 dark:text-nhonga-300 hover:text-primary hover:underline transition-all duration-200 font-body">
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-xs text-primary font-medium hover:text-nhonga-700 hover:underline transition-all duration-200 font-body">
                    Ver todas
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Biscates */}
            <div>
              <h4 className="font-semibold text-nhonga-800 dark:text-nhonga-150 mb-3 text-sm font-heading">Biscates</h4>
              <ul className="space-y-2">
                {trendingCategories.biscates.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-xs text-nhonga-600 dark:text-nhonga-300 hover:text-primary hover:underline transition-all duration-200 font-body">
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-xs text-primary font-medium hover:text-nhonga-700 hover:underline transition-all duration-200 font-body">
                    Ver todos
                  </a>
                </li>
              </ul>
            </div>

            {/* Marketplace */}
            <div>
              <h4 className="font-semibold text-nhonga-800 dark:text-nhonga-150 mb-3 text-sm font-heading">Marketplace</h4>
              <ul className="space-y-2">
                {trendingCategories.marketplace.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-xs text-nhonga-600 dark:text-nhonga-300 hover:text-primary hover:underline transition-all duration-200 font-body">
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-xs text-primary font-medium hover:text-nhonga-700 hover:underline transition-all duration-200 font-body">
                    Ver todos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};