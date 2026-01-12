import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const exploreItems = [
  { title: 'Empregos', desc: 'Oportunidades de trabalho' },
  { title: 'Serviços', desc: 'Freelancers e consultores' },
  { title: 'Networking', desc: 'Conecte-se com profissionais' },
  { title: 'Académico', desc: 'Bolsas e formação' },
  { title: 'Negócios', desc: 'Parcerias empresariais' },
  { title: 'Eventos', desc: 'Workshops e conferências' }
];

export const dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center font-montserrat text-sm text-nhonga-700 hover:text-nhonga-900 transition-colors"
      >
        Explorar
        <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-nhonga-100 z-50">
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              {exploreItems.map((item) => (
                <a
                  key={item.title}
                  href="#"
                  className="p-3 rounded-lg hover:bg-nhonga-50 transition-colors group"
                >
                  <div className="font-montserrat font-medium text-sm text-nhonga-900 group-hover:text-nhonga-700">
                    {item.title}
                  </div>
                  <div className="font-montserrat text-xs text-nhonga-600 mt-1">
                    {item.desc}
                  </div>
                </a>
              ))}
            </div>
            <hr className="my-4 border-nhonga-100" />
            <div className="text-center">
              <a href="#" className="font-montserrat text-sm text-nhonga-600 hover:text-nhonga-800">
                Ver todas as categorias →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};