import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '/src/assets/icons/logo.png';
import logoWhite from '/src/assets/images/logo-w.png';
import { HeaderDropdown } from '../molecules';
import { useTheme } from '../../contexts/ThemeContext';
import { NhongaAI } from './nhongaai';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Header = ({ activePage, setActivePage }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme, effectiveTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleNavClick = (page: string) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white dark:bg-nhonga-950 border-b border-gray-200 dark:border-nhonga-800 shadow-sm transition-colors">
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src={effectiveTheme === 'dark' ? logoWhite : logo} 
              alt="nhonga.net" 
              className="h-6 w-auto transition-opacity hover:opacity-80 cursor-pointer"
              onClick={() => handleNavClick('home')}
            />
            <div className="w-px h-6 bg-gray-300 dark:bg-nhonga-700"></div>
            
            {/* Desktop Navigation */}
            {!isSearchOpen && (
              <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleNavClick('home')}
                className={`text-xs font-bold transition-all duration-200 relative ${
                  activePage === 'home'
                    ? 'text-primary'
                    : 'text-gray-700 dark:text-nhonga-150 hover:text-primary group'
                }`}
                style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
              >
                Home
                <span className={`absolute -bottom-3 left-0 h-0.5 bg-primary transition-all duration-200 ${
                  activePage === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
              <button 
                onClick={() => handleNavClick('publicacoes')}
                className={`text-xs font-bold transition-all duration-200 relative ${
                  activePage === 'publicacoes'
                    ? 'text-primary'
                    : 'text-gray-700 dark:text-nhonga-150 hover:text-primary group'
                }`}
                style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
              >
                Publicações
                <span className={`absolute -bottom-3 left-0 h-0.5 bg-primary transition-all duration-200 ${
                  activePage === 'publicacoes' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
              <button 
                onClick={() => handleNavClick('sobre')}
                className={`text-xs font-bold transition-all duration-200 relative ${
                  activePage === 'sobre'
                    ? 'text-primary'
                    : 'text-gray-700 dark:text-nhonga-150 hover:text-primary group'
                }`}
                style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
              >
                Sobre Nós
                <span className={`absolute -bottom-3 left-0 h-0.5 bg-primary transition-all duration-200 ${
                  activePage === 'sobre' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            </nav>
            )}
            
            {/* Search Input */}
            {isSearchOpen && (
              <div className="flex-1 max-w-3xl flex items-center bg-gray-100 dark:bg-nhonga-900 h-10 px-3 gap-2">
                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32" className="text-gray-500 dark:text-nhonga-150">
                  <path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  autoFocus
                  className="w-[768px] text-sm border-none outline-none bg-transparent text-gray-900 dark:text-nhonga-150 placeholder:text-gray-500 dark:placeholder:text-nhonga-400"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                />
                {searchValue && (
                  <button onClick={() => setSearchValue('')} className="text-gray-500 dark:text-nhonga-150 hover:text-gray-700 dark:hover:text-nhonga-300">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>
          
          {/* Desktop Auth & Quick Links */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 hover:bg-gray-100 dark:hover:bg-nhonga-900 transition-colors rounded">
              <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32" className="text-gray-600 dark:text-nhonga-150">
                <path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"></path>
              </svg>
            </button>
            <button onClick={() => setIsChatOpen(!isChatOpen)} className="p-2 hover:bg-gray-100 dark:hover:bg-nhonga-900 transition-colors rounded">
              <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32" className="text-gray-600 dark:text-nhonga-150">
                <path d="M17.74,30,16,29l4-7h6a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2H6A2,2,0,0,0,4,8V20a2,2,0,0,0,2,2h9v2H6a4,4,0,0,1-4-4V8A4,4,0,0,1,6,4H26a4,4,0,0,1,4,4V20a4,4,0,0,1-4,4H21.16Z"></path>
                <path d="M8 10H24V12H8zM8 16H18V18H8z"></path>
              </svg>
            </button>
            <HeaderDropdown
              trigger={
                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32" className="text-gray-600 dark:text-nhonga-150">
                  <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM28,15H22A24.26,24.26,0,0,0,19.21,4.45,12,12,0,0,1,28,15ZM16,28a5,5,0,0,1-.67,0A21.85,21.85,0,0,1,12,17H20a21.85,21.85,0,0,1-3.3,11A5,5,0,0,1,16,28ZM12,15a21.85,21.85,0,0,1,3.3-11,6,6,0,0,1,1.34,0A21.85,21.85,0,0,1,20,15Zm.76-10.55A24.26,24.26,0,0,0,10,15h-6A12,12,0,0,1,12.79,4.45ZM4.05,17h6a24.26,24.26,0,0,0,2.75,10.55A12,12,0,0,1,4.05,17ZM19.21,27.55A24.26,24.26,0,0,0,22,17h6A12,12,0,0,1,19.21,27.55Z"></path>
                </svg>
              }
              items={[
                { label: 'Português', subtitle: 'Português (PT)', onClick: () => {} },
                { label: 'Coming soon...', onClick: () => {} }
              ]}
            />
            <HeaderDropdown
              trigger={
                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32" className="text-gray-600 dark:text-nhonga-150">
                  <path d="M16 4a5 5 0 11-5 5 5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0016 2zM26 30H24V25a5 5 0 00-5-5H13a5 5 0 00-5 5v5H6V25a7 7 0 017-7h6a7 7 0 017 7z"></path>
                </svg>
              }
              items={[
                { label: 'Settings', onClick: () => {} },
                { 
                  label: 'Theme', 
                  hasChevron: true, 
                  onClick: () => {},
                  subItems: [
                    { label: 'Light', onClick: () => setTheme('light'), isActive: theme === 'light' },
                    { label: 'Dark', onClick: () => setTheme('dark'), isActive: theme === 'dark' },
                    { label: 'System', onClick: () => setTheme('system'), isActive: theme === 'system' }
                  ]
                },
                { label: 'Centro de Ajuda', onClick: () => {} },
                { label: 'Entrar / Registar', onClick: () => handleNavClick('login') }
              ]}
            />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-nhonga-150 hover:text-primary hover:bg-gray-50 dark:hover:bg-nhonga-900 rounded-md transition-all duration-200"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-nhonga-800 py-2 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => handleNavClick('home')}
                className={`text-sm px-2 py-1 rounded text-left transition-colors ${
                  activePage === 'home' ? 'font-bold text-primary' : 'text-gray-600 dark:text-nhonga-150 hover:bg-gray-50 dark:hover:bg-nhonga-900 hover:text-primary'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('publicacoes')}
                className={`text-sm px-2 py-1 rounded text-left transition-colors ${
                  activePage === 'publicacoes' ? 'font-bold text-primary' : 'text-gray-600 dark:text-nhonga-150 hover:bg-gray-50 dark:hover:bg-nhonga-900 hover:text-primary'
                }`}
              >
                Publicações
              </button>
              <button 
                onClick={() => handleNavClick('sobre')}
                className={`text-sm px-2 py-1 rounded text-left transition-colors ${
                  activePage === 'sobre' ? 'font-bold text-primary' : 'text-gray-600 dark:text-nhonga-150 hover:bg-gray-50 dark:hover:bg-nhonga-900 hover:text-primary'
                }`}
              >
                Sobre Nós
              </button>
              <div className="border-t border-gray-200 dark:border-nhonga-800 pt-2 mt-2">
                <a href="#empregadores" className="text-sm text-gray-600 dark:text-nhonga-150 px-2 py-1 block rounded hover:bg-gray-50 dark:hover:bg-nhonga-900 hover:text-primary transition-colors">Empregadores</a>
                <a href="#biscates" className="text-sm text-gray-600 dark:text-nhonga-150 px-2 py-1 block rounded hover:bg-gray-50 dark:hover:bg-nhonga-900 hover:text-primary transition-colors">Biscates</a>
                <button onClick={() => handleNavClick('login')} className="text-sm font-bold text-primary px-2 py-1 block rounded hover:bg-gray-50 dark:hover:bg-nhonga-900 transition-colors w-full text-left">Entrar</button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      <NhongaAI isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </header>
  );
};
