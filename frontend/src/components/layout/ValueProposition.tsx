import { Target, Award, Users } from 'lucide-react';

export const ValueProposition = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Explore Novas Oportunidades',
      description: 'Aceda a milhares de vagas de emprego, serviços freelance e oportunidades de negócio em Moçambique.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Desenvolva a Sua Carreira',
      description: 'Obtenha certificações, participe em formações e conecte-se com mentores para impulsionar o seu crescimento profissional.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Conecte-se com Talentos',
      description: 'Construa a sua rede profissional, encontre parceiros de negócio e colabore com os melhores talentos moçambicanos.',
    },
  ];

  return (
    <section className="bg-emerald-50 dark:bg-[#0a1f1a] py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 border border-emerald-300/60 dark:border-emerald-400/40">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`p-8 backdrop-blur-md bg-gradient-to-br from-emerald-200/80 via-white/70 to-emerald-200/80 dark:from-[#00120F]/80 dark:via-emerald-500/20 dark:to-[#00120F]/80 ${index < values.length - 1 ? 'border-r border-emerald-300/60 dark:border-emerald-400/40' : ''}`}
            >
              <div className="text-nhonga-600 dark:text-nhonga-400 mb-4">{value.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 font-heading">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-body leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
