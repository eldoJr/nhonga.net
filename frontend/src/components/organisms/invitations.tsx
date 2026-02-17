import { X, Check } from 'lucide-react';
import { button as Button } from '../atoms/button';

export const invitations = () => {
  const invites = [
    {
      name: 'Ana Silva',
      profession: 'Gestora de Projetos',
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Carlos Mondlane',
      profession: 'Diretor de Marketing',
      image: 'https://i.pravatar.cc/150?img=3'
    },
    {
      name: 'Beatriz Macamo',
      profession: 'Consultora Financeira',
      image: 'https://i.pravatar.cc/150?img=5'
    }
  ];

  return (
    <div className="px-4">
      <div className="border border-nhonga-200 p-8">
        <h2 className="text-2xl font-bold text-nhonga-900 mb-8 font-heading">
          Convites Pendentes
        </h2>
        
        <div className="space-y-4">
          {invites.map((invite, index) => (
            <div key={index} className="flex items-center gap-4 pb-4 border-b border-nhonga-200 last:border-0 last:pb-0">
              <img
                src={invite.image}
                alt={invite.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-nhonga-200"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-nhonga-900 font-heading">{invite.name}</h3>
                <p className="text-sm text-nhonga-700 font-body">{invite.profession}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="primary" size="sm" className="flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  Aceitar
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <X className="w-4 h-4" />
                  Ignorar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
