import { Search, X } from 'lucide-react';
import { useState } from 'react';
import { button as Button } from '../../components/atoms/button';
import { companyCards } from '../../components/organisms/companyCards';
import { netSidebar } from '../../components/organisms/netSidebar';
import { invitations } from '../../components/organisms/invitations';
import { peopleYouMayKnow } from '../../components/organisms/people';
import { trendingCard } from '../../components/organisms/trendingCard';

export const Networking = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Tecnologia', count: 1234 },
    { name: 'Negócios', count: 892 },
    { name: 'Marketing', count: 567 },
    { name: 'Finanças', count: 445 },
    { name: 'Engenharia', count: 678 },
    { name: 'Saúde', count: 334 },
    { name: 'Educação', count: 456 },
    { name: 'Design', count: 389 }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-nhonga-50 to-white py-12 border-b border-nhonga-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-nhonga-900 mb-4 font-heading">
            Expanda a Sua Rede Profissional
          </h1>
          <p className="text-lg text-nhonga-700 mb-8 font-body">
            Conecte-se com profissionais, empresários e investidores em Moçambique
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center bg-white rounded-2xl shadow-lg border-2 border-primary">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Procurar profissionais, empresas ou áreas de interesse"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-4 bg-transparent rounded-2xl text-gray-700 focus:outline-none font-body"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            <Button variant="primary" size="lg" className="rounded-xl m-2 font-heading">
              Procurar
            </Button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-nhonga-600 font-body">
              <span className="font-semibold text-nhonga-800">8.456</span> profissionais na plataforma
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-lg font-semibold text-nhonga-800 mb-4 font-heading">
            Áreas de Interesse
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                className="px-4 py-2 bg-white border border-nhonga-200 rounded-lg hover:bg-nhonga-50 hover:border-primary hover:scale-[1.02] transition-all text-sm text-nhonga-700 font-body"
              >
                {cat.name} <span className="text-nhonga-500 font-semibold">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-6">
                {netSidebar()}
                {trendingCard()}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {invitations()}
              {peopleYouMayKnow()}
              {companyCards()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};