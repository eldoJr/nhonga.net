import { UserPlus } from 'lucide-react';
import { button as Button } from '../atoms/button';

export const peopleYouMayKnow = () => {
  const allPeople = [
    {
      name: 'Luís Fernandes',
      profession: 'Engenheiro de Software',
      cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
      image: 'https://i.pravatar.cc/150?img=12',
      mutualConnections: 15
    },
    {
      name: 'Carla Moreira',
      profession: 'Gestora de Produto',
      cover: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400',
      image: 'https://i.pravatar.cc/150?img=9',
      mutualConnections: 9
    },
    {
      name: 'Miguel Costa',
      profession: 'Analista de Dados',
      cover: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400',
      image: 'https://i.pravatar.cc/150?img=13',
      mutualConnections: 6
    },
    {
      name: 'Sofia Pereira',
      profession: 'Designer UX/UI',
      cover: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
      image: 'https://i.pravatar.cc/150?img=10',
      mutualConnections: 11
    },
    {
      name: 'João Machado',
      profession: 'Consultor Financeiro',
      cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
      image: 'https://i.pravatar.cc/150?img=14',
      mutualConnections: 8
    },
    {
      name: 'Mariana Silva',
      profession: 'Arquiteta',
      cover: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=400',
      image: 'https://i.pravatar.cc/150?img=16',
      mutualConnections: 13
    },
    {
      name: 'Pedro Santos',
      profession: 'Advogado',
      cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400',
      image: 'https://i.pravatar.cc/150?img=15',
      mutualConnections: 7
    },
    {
      name: 'Isabel Rodrigues',
      profession: 'Médica',
      cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      image: 'https://i.pravatar.cc/150?img=20',
      mutualConnections: 10
    },
    {
      name: 'Tiago Almeida',
      profession: 'Engenheiro Civil',
      cover: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
      image: 'https://i.pravatar.cc/150?img=17',
      mutualConnections: 5
    },
    {
      name: 'Rita Oliveira',
      profession: 'Jornalista',
      cover: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400',
      image: 'https://i.pravatar.cc/150?img=21',
      mutualConnections: 12
    },
    {
      name: 'André Gomes',
      profession: 'Contador',
      cover: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
      image: 'https://i.pravatar.cc/150?img=18',
      mutualConnections: 14
    },
    {
      name: 'Catarina Lopes',
      profession: 'Psicóloga',
      cover: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400',
      image: 'https://i.pravatar.cc/150?img=22',
      mutualConnections: 9
    },
    {
      name: 'Fernando Dias',
      profession: 'Chef de Cozinha',
      cover: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
      image: 'https://i.pravatar.cc/150?img=19',
      mutualConnections: 6
    },
    {
      name: 'Gabriela Nunes',
      profession: 'Fotógrafa',
      cover: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400',
      image: 'https://i.pravatar.cc/150?img=23',
      mutualConnections: 11
    },
    {
      name: 'Hugo Martins',
      profession: 'Veterinário',
      cover: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400',
      image: 'https://i.pravatar.cc/150?img=24',
      mutualConnections: 8
    },
    {
      name: 'Inês Carvalho',
      profession: 'Farmacêutica',
      cover: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400',
      image: 'https://i.pravatar.cc/150?img=25',
      mutualConnections: 13
    },
    {
      name: 'Jorge Ribeiro',
      profession: 'Eletricista',
      cover: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400',
      image: 'https://i.pravatar.cc/150?img=26',
      mutualConnections: 7
    },
    {
      name: 'Laura Pinto',
      profession: 'Dentista',
      cover: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400',
      image: 'https://i.pravatar.cc/150?img=27',
      mutualConnections: 10
    },
    {
      name: 'Manuel Sousa',
      profession: 'Carpinteiro',
      cover: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400',
      image: 'https://i.pravatar.cc/150?img=28',
      mutualConnections: 5
    },
    {
      name: 'Nádia Ferreira',
      profession: 'Enfermeira',
      cover: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400',
      image: 'https://i.pravatar.cc/150?img=29',
      mutualConnections: 16
    },
    {
      name: 'Orlando Costa',
      profession: 'Bombeiro',
      cover: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400',
      image: 'https://i.pravatar.cc/150?img=30',
      mutualConnections: 12
    },
    {
      name: 'Paula Mendes',
      profession: 'Bibliotecária',
      cover: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=400',
      image: 'https://i.pravatar.cc/150?img=31',
      mutualConnections: 8
    },
    {
      name: 'Rui Tavares',
      profession: 'Músico',
      cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
      image: 'https://i.pravatar.cc/150?img=32',
      mutualConnections: 14
    },
    {
      name: 'Sandra Azevedo',
      profession: 'Tradutora',
      cover: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400',
      image: 'https://i.pravatar.cc/150?img=33',
      mutualConnections: 9
    },
    {
      name: 'Vasco Correia',
      profession: 'Piloto',
      cover: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400',
      image: 'https://i.pravatar.cc/150?img=34',
      mutualConnections: 11
    },
    {
      name: 'Teresa Fonseca',
      profession: 'Professora',
      cover: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
      image: 'https://i.pravatar.cc/150?img=35',
      mutualConnections: 15
    },
    {
      name: 'Vítor Ramos',
      profession: 'Engenheiro Mecânico',
      cover: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      image: 'https://i.pravatar.cc/150?img=36',
      mutualConnections: 10
    },
    {
      name: 'Zélia Monteiro',
      profession: 'Assistente Social',
      cover: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
      image: 'https://i.pravatar.cc/150?img=37',
      mutualConnections: 13
    }
  ];

  const renderPeopleGrid = (people: typeof allPeople) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-nhonga-200">
      {people.map((person, index) => (
        <div key={index} className="px-6 first:pl-0 last:pr-0">
          <div className="flex flex-col h-full items-center">
            <div className="relative w-full mb-12">
              <div className="w-full h-24 bg-gradient-to-br from-nhonga-400 to-nhonga-600 overflow-hidden">
                <img src={person.cover} alt="" className="w-full h-full object-cover opacity-50" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-10">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>
            <h3 className="font-semibold text-nhonga-900 text-center text-sm mb-1 font-heading">
              {person.name}
            </h3>
            <p className="text-xs text-nhonga-700 text-center mb-2 font-body">
              {person.profession}
            </p>
            <p className="text-xs text-nhonga-600 text-center mb-4 font-body">
              {person.mutualConnections} conexões em comum
            </p>
            <div className="mt-auto w-full">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-1">
                <UserPlus className="w-4 h-4" />
                Conectar
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
          Pessoas que Talvez Conheça
        </h2>
        {renderPeopleGrid(allPeople.slice(0, 4))}
        
        <div className="border-t border-nhonga-200 mt-8 pt-8">
          {renderPeopleGrid(allPeople.slice(4, 8))}
        </div>
        
        <div className="border-t border-nhonga-200 mt-8 pt-8">
          {renderPeopleGrid(allPeople.slice(8, 12))}
        </div>
        
        <div className="border-t border-nhonga-200 mt-8 pt-8">
          {renderPeopleGrid(allPeople.slice(12, 16))}
        </div>
        
        <div className="border-t border-nhonga-200 mt-8 pt-8">
          {renderPeopleGrid(allPeople.slice(16, 20))}
        </div>
        
        <div className="border-t border-nhonga-200 mt-8 pt-8">
          {renderPeopleGrid(allPeople.slice(20, 24))}
        </div>
        
        <div className="border-t border-nhonga-200 mt-8 pt-8">
          {renderPeopleGrid(allPeople.slice(24, 28))}
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
