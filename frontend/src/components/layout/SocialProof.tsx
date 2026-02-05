export const SocialProof = () => {
  const partners = [
    { name: 'Universidade Eduardo Mondlane', logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjp6tSxyp4oMzQ12JYsCXgYfb8BX4a9VYxaA&s" },
    { name: 'Vodacom Moçambique', logo: "https://www.freelogovectors.net/wp-content/uploads/2024/01/vodacom-logo-freelogovectors.net_.png" },
    { name: 'Banco BCI', logo: "https://play-lh.googleusercontent.com/7DTF6em3QwWVmoXMMMIEkAkAOyyD9e4evBI5VMtwWTXcRtt02lnw-7m5KbdQDJXlWw=w600-h300-pc0xffffff-pd" },
    { name: 'Mozal', logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Mozal_logo.png" },
    { name: 'Standard Bank', logo: "https://wp.logos-download.com/wp-content/uploads/2025/04/Standard_Bank_Logo.png?dl" },
    { name: 'Millennium BIM', logo: "https://play-lh.googleusercontent.com/3e0eRom_G4L2NnH1gniDHfQBMzzPudJwE0SLTKHwSiZbvIkytZCJl6zfy2Kxq_-_I0Q=w600-h300-pc0xffffff-pd" },
  ];

  return (
    <section className="bg-white dark:bg-[#102D36] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-left text-2xl font-semibold text-gray-700 dark:text-white mb-4 font-heading">
          Empresas e Instituições que Confiam na nhonga.net
        </h2>
        <p className="text-left text-gray-600 dark:text-gray-300 mb-12 font-body">
          Conectando os melhores talentos com as principais organizações de Moçambique
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
