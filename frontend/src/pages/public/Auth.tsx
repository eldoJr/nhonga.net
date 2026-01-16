import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import logo from '/src/assets/icons/logo.png';
import { Input } from '../../components/atoms/input';
import { button as Button } from '../../components/atoms/button';

interface AuthProps {
  initialView?: 'login' | 'register';
}

export const Auth = ({ initialView = 'login' }: AuthProps) => {
  const [view, setView] = useState<'login' | 'register'>(initialView);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <div className="min-h-screen bg-white flex">
      {/* Image Side */}
      <div 
        className={`hidden lg:flex lg:w-3/5 relative overflow-hidden transition-all duration-700 ease-in-out ${
          view === 'login' ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        <img 
          src="https://images.theconversation.com/files/462471/original/file-20220511-26-l87w8j.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1800&fit=crop" 
          alt="Moçambique" 
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
            view === 'login' ? 'scale-100' : 'scale-110'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-nhonga-600/40 to-nhonga-900/60 transition-opacity duration-700"></div>
        <div className={`absolute inset-0 flex items-center justify-center p-12 transition-all duration-700 ${
          view === 'login' ? 'opacity-100 translate-y-0' : 'opacity-100 -translate-y-2'
        }`}>
          <div className="text-white text-center max-w-xl">
            <h2 className={`text-5xl font-montserrat font-extrabold mb-6 tracking-tight transition-all duration-700 ${
              view === 'login' ? 'opacity-100 translate-x-0' : 'opacity-100 translate-x-4'
            }`}>
              {view === 'login' ? 'Bem-vindo ao nhonga.net' : 'Junte-se ao nhonga.net'}
            </h2>
            <p className={`text-xl font-montserrat font-light opacity-95 leading-relaxed transition-all duration-700 delay-100 ${
              view === 'login' ? 'opacity-95 translate-x-0' : 'opacity-95 -translate-x-4'
            }`}>
              Conectando talentos, serviços e oportunidades em Moçambique
            </p>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div 
        className={`w-full lg:w-2/5 flex flex-col items-center justify-center p-8 transition-all duration-700 ease-in-out ${
          view === 'login' ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <div className={`w-full max-w-sm transition-all duration-700 ${
          view === 'login' ? 'opacity-100 translate-x-0' : 'opacity-100 -translate-x-8'
        }`}>
          <div className="mb-8 text-center">
            <img src={logo} alt="nhonga.net" className="h-8 mx-auto" />
          </div>

          {view === 'login' ? (
            <>
              <h1 className="text-xl font-gt-walsheim font-bold text-gray-800 mb-6">Login</h1>

              <div className="space-y-2 mb-6">
                <Button size="sm" className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Continuar com Facebook
                </Button>

                <Button size="sm" variant="outline" className="w-full flex items-center justify-center gap-2 bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continuar com Google
                </Button>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-500 text-xs">Ou</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              <form className="space-y-3">
                <Input
                  label="Email"
                  type="email"
                  placeholder="exemplo@email.com"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                />

                <Input
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Introduza a sua palavra-passe"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  icon={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  }
                />

                <div className="text-right">
                  <a href="#" className="text-xs text-blue-600 hover:underline">
                    Esqueceu a sua palavra-passe?
                  </a>
                </div>

                <Button type="submit" variant="secondary" size="sm" className="w-full">
                  Login
                </Button>
              </form>

              <p className="text-center text-xs text-gray-600 mt-6">
                Ainda não tem uma conta nhonganet?{' '}
                <button
                  onClick={() => setView('register')}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Registar-se
                </button>
              </p>
            </>
          ) : (
            <>
              <h1 className="text-xl font-gt-walsheim font-bold text-gray-800 mb-6">Criar Conta</h1>

              <div className="space-y-2 mb-6">
                <Button size="sm" className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Continuar com Facebook
                </Button>

                <Button size="sm" variant="outline" className="w-full flex items-center justify-center gap-2 bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continuar com Google
                </Button>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-500 text-xs">Ou</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              <form className="space-y-3">
                <Input
                  label="Nome"
                  type="text"
                  placeholder="Primeiro nome"
                  value={registerData.firstName}
                  onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                  required
                />

                <Input
                  label="Sobrenome"
                  type="text"
                  placeholder="Último nome"
                  value={registerData.lastName}
                  onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                  required
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="exemplo@email.com"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  required
                />

                <Input
                  label="Palavra-passe"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Mínimo 8 caracteres"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  required
                  icon={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  }
                />

                <Input
                  label="Confirmar Palavra-passe"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Repita a palavra-passe"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                  required
                  icon={
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  }
                />

                <p className="text-xs text-gray-500">
                  Ao criar uma conta, concorda com os nossos{' '}
                  <a href="#" className="text-blue-600 hover:underline">Termos</a>
                  {' '}e{' '}
                  <a href="#" className="text-blue-600 hover:underline">Privacidade</a>
                </p>

                <Button type="submit" variant="secondary" size="sm" className="w-full">
                  Criar Conta
                </Button>
              </form>

              <p className="text-center text-xs text-gray-600 mt-6">
                Já tem uma conta?{' '}
                <button
                  onClick={() => setView('login')}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Entrar
                </button>
              </p>
            </>
          )}

          <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-gray-200">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-9" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-9" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
