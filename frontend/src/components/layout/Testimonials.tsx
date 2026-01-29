export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Eldo A.',
      avatar: 'https://eldomacuacua-github.vercel.app/static/e02f95899e580ac370d0bf0232cd0e49/b8244/me.webp',
      quote: 'Consegui um emprego na área de tecnologia em apenas 2 meses através da nhonga.net. A plataforma conectou-me com empresas que procuravam exatamente o meu perfil.',
    },
    {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=12',
      quote: 'A nhonga.net mantém-me motivado a crescer profissionalmente. Com cada oportunidade, estou a obter mais valor da plataforma. Posso aceder a vagas, serviços e networking!',
    },
    {
      name: 'Jane doe',
      avatar: 'https://i.pravatar.cc/150?img=5',
      quote: 'Aprecio muito a flexibilidade que tenho com a nhonga.net. Posso explorar diferentes oportunidades e conectar-me com profissionais sem custos adicionais. Isto motiva-me a aprender ainda mais!',
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 font-heading">
          O que os profissionais estão a alcançar através da nhonga.net
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <h3 className="font-bold text-gray-900 font-heading">{testimonial.name}</h3>
              </div>
              <p className="text-sm text-gray-700 font-body leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
