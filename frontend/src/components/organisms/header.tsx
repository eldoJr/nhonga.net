export const header = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-14">
          {/* Logo + Navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <img 
                src="/src/assets/icons/logo.svg" 
                alt="nhonga.net" 
                className="h-6 w-6 mr-2"
              />
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-sm font-bold text-primary">
                Home
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Publicações
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Sobre Nós
              </a>
            </nav>
          </div>
          
          {/* Auth */}
          <div className="ml-auto flex items-center space-x-3">
            <a href="#" className="text-sm font-bold text-primary hover:text-nhonga-600">
              Entrar
            </a>
            <span>|</span>
            <div className="flex items-center text-sm text-gray-600">
              <a href="#empregadores" className="hover:text-gray-900">
                Empregadores
              </a>
              <span className="mx-1">\</span>
              <a href="#biscates" className="hover:text-gray-900">
                Biscates
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};