import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import logo from '/src/assets/icons/logo.png';

export const footer = () => {
  return (
    <footer className="bg-nhonga-1000 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-3">
              <img src={logo} alt="nhonga.net" className="h-6 mr-2 filter brightness-0 invert" />
            </div>
            <p className="text-nhonga-300 text-sm mb-4 font-body">
              Conectando talentos, serviços, negócios e oportunidades académicas em Moçambique.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-nhonga-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-nhonga-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-nhonga-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-nhonga-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Plataforma */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm font-heading">Plataforma</h3>
            <ul className="space-y-2 text-xs font-body">
              <li><a href="#" className="text-nhonga-300 hover:text-white transition-colors duration-200">Como Funciona</a></li>
              <li><a href="#" className="text-nhonga-300 hover:text-white transition-colors duration-200">Preços</a></li>
              <li><a href="#" className="text-nhonga-300 hover:text-white transition-colors duration-200">Segurança</a></li>
              <li><a href="#" className="text-nhonga-300 hover:text-white transition-colors duration-200">Suporte</a></li>
            </ul>
          </div>

          {/* Profissionais */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm font-heading">Profissionais</h3>
            <ul className="space-y-2 text-xs font-body">
              <li><a href="#" className="text-nhonga-300 hover:text-white transition-colors duration-200">Criar Perfil</a></li>
              <li><a href="#" className="text-nhonga-300 hover:text-white transition-colors duration-200">Encontrar Trabalho</a></li>
              <li><a href="#" className="text-nhonga-300 hover:text-white transition-colors duration-200">Networking</a></li>
              <li><a href="#" className="text-nhonga-300 hover:text-white transition-colors duration-200">Formação</a></li>
            </ul>
          </div>

          {/* Empresas */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm font-heading">Empresas</h3>
            <ul className="space-y-2 text-xs font-body">
              <li><a href="#" className="text-nhonga-300 hover:text-white transition-colors duration-200">Contratar Talentos</a></li>
              <li><a href="#" className="text-nhonga-300 hover:text-white transition-colors duration-200">Publicar Vagas</a></li>
              <li><a href="#" className="text-nhonga-300 hover:text-white transition-colors duration-200">Marketplace</a></li>
              <li><a href="#" className="text-nhonga-300 hover:text-white transition-colors duration-200">Parcerias</a></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm font-heading">Recursos</h3>
            <ul className="space-y-2 text-xs font-body">
              <li><a href="#" className="text-nhonga-300 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-nhonga-300 hover:text-white transition-colors duration-200">Centro de Ajuda</a></li>
              <li><a href="#" className="text-nhonga-300 hover:text-white transition-colors duration-200">Comunidade</a></li>
              <li><a href="#" className="text-nhonga-300 hover:text-white transition-colors duration-200">API</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 border-t border-nhonga-800">
          {/* Feito para Moçambique */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm font-heading">Feito para Moçambique</h3>
            <p className="text-nhonga-300 text-xs mb-3 font-body">
              Rede social profissional focada no mercado moçambicano, conectando talentos locais com oportunidades de crescimento.
            </p>
            <div className="flex items-center gap-2 text-xs text-nhonga-400">
              <span>.mz</span>
              <span>Orgulhosamente moçambicano</span>
            </div>
          </div>

          {/* Contactos */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm font-heading">Contactos</h3>
            <div className="space-y-2 text-xs font-body">
              <div className="flex items-center text-nhonga-300">
                <Mail className="w-3 h-3 mr-2" />
                suporte@nhonga.net
              </div>
              <div className="flex items-center text-nhonga-300">
                <Phone className="w-3 h-3 mr-2" />
                +258 84 123 4567
              </div>
              <div className="flex items-center text-nhonga-300">
                <MapPin className="w-3 h-3 mr-2" />
                Maputo, Moçambique
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-nhonga-800 mt-6">
          <p className="text-nhonga-400 text-xs font-body">
            © 2024 Nhonga. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="text-nhonga-400 hover:text-white text-xs transition-colors duration-200 font-body">Privacidade</a>
            <a href="#" className="text-nhonga-400 hover:text-white text-xs transition-colors duration-200 font-body">Termos</a>
            <a href="#" className="text-nhonga-400 hover:text-white text-xs transition-colors duration-200 font-body">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};