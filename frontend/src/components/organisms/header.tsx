import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '/src/assets/icons/logo.png';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Header = ({ activePage, setActivePage }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="nhonga.net" 
              className="h-6 w-auto transition-opacity hover:opacity-80 cursor-pointer"
              onClick={() => handleNavClick('home')}
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleNavClick('home')}
              className={`text-sm font-bold transition-all duration-200 ${
                activePage === 'home'
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-gray-600 hover:text-primary relative group'
              }`}
            >
              Home
              {activePage !== 'home' && (
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              )}
            </button>
            <button 
              onClick={() => handleNavClick('publicacoes')}
              className={`text-sm transition-all duration-200 ${
                activePage === 'publicacoes'
                  ? 'text-primary border-b-2 border-primary pb-1 font-bold'
                  : 'text-gray-600 hover:text-primary relative group'
              }`}
            >
              Publicações
              {activePage !== 'publicacoes' && (
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              )}
            </button>
            <button 
              onClick={() => handleNavClick('sobre')}
              className={`text-sm transition-all duration-200 ${
                activePage === 'sobre'
                  ? 'text-primary border-b-2 border-primary pb-1 font-bold'
                  : 'text-gray-600 hover:text-primary relative group'
              }`}
            >
              Sobre Nós
              {activePage !== 'sobre' && (
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              )}
            </button>
          </nav>
          
          {/* Desktop Auth & Quick Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#" 
              className="text-sm font-bold text-primary hover:text-nhonga-700 transition-colors duration-200"
            >
              Entrar
            </a>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center text-sm text-gray-600 space-x-2">
              <a 
                href="#empregadores" 
                className="hover:text-primary transition-colors duration-200"
              >
                Empregadores
              </a>
              <span className="text-gray-400">•</span>
              <a 
                href="#biscates" 
                className="hover:text-primary transition-colors duration-200"
              >
                Biscates
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-all duration-200"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-2 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => handleNavClick('home')}
                className={`text-sm px-2 py-1 rounded text-left transition-colors ${
                  activePage === 'home' ? 'font-bold text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('publicacoes')}
                className={`text-sm px-2 py-1 rounded text-left transition-colors ${
                  activePage === 'publicacoes' ? 'font-bold text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                Publicações
              </button>
              <button 
                onClick={() => handleNavClick('sobre')}
                className={`text-sm px-2 py-1 rounded text-left transition-colors ${
                  activePage === 'sobre' ? 'font-bold text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                Sobre Nós
              </button>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <a href="#empregadores" className="text-sm text-gray-600 px-2 py-1 block rounded hover:bg-gray-50 hover:text-primary transition-colors">Empregadores</a>
                <a href="#biscates" className="text-sm text-gray-600 px-2 py-1 block rounded hover:bg-gray-50 hover:text-primary transition-colors">Biscates</a>
                <a href="#" className="text-sm font-bold text-primary px-2 py-1 block rounded hover:bg-gray-50 transition-colors">Entrar</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};