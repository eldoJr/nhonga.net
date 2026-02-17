import { MapPin, Users, TrendingUp } from 'lucide-react';
import { button as Button } from '../atoms/button';

export const companyCards = () => {
  const allCompanies = [
    {
      name: 'TechMoz Solutions',
      industry: 'Tecnologia',
      location: 'Maputo',
      employees: '50-200',
      growth: '+45%',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400'
    },
    {
      name: 'Agro Moçambique',
      industry: 'Agricultura',
      location: 'Beira',
      employees: '200-500',
      growth: '+32%',
      logo: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400'
    },
    {
      name: 'Finance Group MZ',
      industry: 'Finanças',
      location: 'Maputo',
      employees: '100-250',
      growth: '+28%',
      logo: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400'
    },
    {
      name: 'Creative Studio',
      industry: 'Design & Marketing',
      location: 'Matola',
      employees: '20-50',
      growth: '+56%',
      logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400'
    },
    {
      name: 'Construções Nampula',
      industry: 'Construção Civil',
      location: 'Nampula',
      employees: '150-300',
      growth: '+38%',
      logo: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400'
    },
    {
      name: 'Saúde Plus',
      industry: 'Saúde',
      location: 'Maputo',
      employees: '80-150',
      growth: '+42%',
      logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400'
    },
    {
      name: 'Educação Digital',
      industry: 'Educação',
      location: 'Quelimane',
      employees: '30-80',
      growth: '+51%',
      logo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400'
    },
    {
      name: 'Transportes Tete',
      industry: 'Logística',
      location: 'Tete',
      employees: '100-200',
      growth: '+29%',
      logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400'
    },
    {
      name: 'Energia Renovável MZ',
      industry: 'Energia',
      location: 'Inhambane',
      employees: '60-120',
      growth: '+48%',
      logo: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400'
    },
    {
      name: 'Turismo Moçambique',
      industry: 'Turismo',
      location: 'Vilankulo',
      employees: '40-90',
      growth: '+62%',
      logo: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400'
    },
    {
      name: 'Consultoria Empresarial',
      industry: 'Consultoria',
      location: 'Maputo',
      employees: '25-60',
      growth: '+35%',
      logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400'
    },
    {
      name: 'Indústria Alimentar',
      industry: 'Alimentação',
      location: 'Chimoio',
      employees: '180-350',
      growth: '+26%',
      logo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400'
    }
  ];

  const renderCompanyGrid = (companies: typeof allCompanies) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-nhonga-200">
      {companies.map((company, index: number) => (
        <div key={index} className="px-6 first:pl-0 last:pr-0">
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <img
                src={company.logo}
                alt={company.name}
                className="w-full h-20 object-cover"
              />
            </div>
            <h3 className="font-semibold text-nhonga-900 mb-2 text-lg font-heading">
              {company.name}
            </h3>
            <p className="text-sm text-nhonga-600 mb-4 font-body">{company.industry}</p>
            <div className="space-y-2 mb-6 flex-grow">
              <div className="flex items-center gap-2 text-sm text-nhonga-600 font-body">
                <MapPin className="w-4 h-4" />
                {company.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-nhonga-600 font-body">
                <Users className="w-4 h-4" />
                {company.employees} funcionários
              </div>
              <div className="flex items-center gap-2 text-sm text-primary font-semibold font-body">
                <TrendingUp className="w-4 h-4" />
                {company.growth} crescimento
              </div>
            </div>
            <div className="mt-auto">
              <Button variant="primary" size="sm" className="w-full font-heading">
                Seguir
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="border border-nhonga-200 p-8">
        <h2 className="text-2xl font-bold text-nhonga-900 mb-8 font-heading">
          Empresas em Destaque
        </h2>
        {renderCompanyGrid(allCompanies.slice(0, 4))}
        
        <div className="border-t border-nhonga-200 mt-8 pt-8">
          {renderCompanyGrid(allCompanies.slice(4, 8))}
        </div>
        
        <div className="border-t border-nhonga-200 mt-8 pt-8">
          {renderCompanyGrid(allCompanies.slice(8, 12))}
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
