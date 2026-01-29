import { Search } from 'lucide-react';
import { useState } from 'react';

export const SearchDiscovery = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Negócios',
    'Tecnologia',
    'Saúde',
    'Educação',
    'Engenharia',
    'Biscates',
    'Finanças',
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6 font-heading">
          Pesquise 10.000+ oportunidades
        </h2>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ex. Desenvolvedor de Software"
            className="w-full pl-12 pr-16 py-3 text-sm border-2 border-nhonga-600 rounded-xl focus:outline-none focus:border-nhonga-700 transition-colors font-body"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-nhonga-600 text-white rounded-lg hover:bg-nhonga-700 transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 items-center">
          <span className="text-sm font-medium text-gray-900">Popular:</span>
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-1.5 text-sm font-medium text-nhonga-600 bg-nhonga-50 hover:bg-nhonga-100 rounded-lg transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
