import { useState } from 'react';
import { Eye, EyeOff, ArrowLeft, User, Building2, Briefcase } from 'lucide-react';
import logo from '/src/assets/icons/logo.png';
import { Input } from '../../components/atoms/input';
import { button as Button } from '../../components/atoms/button';
import { authAPI } from '../../services/api';

interface AuthProps {
  initialView?: 'login' | 'register';
}

export const Auth = ({ initialView = 'login' }: AuthProps) => {
  const [view, setView] = useState<'login' | 'register' | 'username' | 'accountType' | 'otp'>(initialView);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [username, setUsername] = useState('');
  const [accountType, setAccountType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [tempData, setTempData] = useState<any>(null);
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const result = await authAPI.login({
        identifier: loginData.email,
        password: loginData.password,
      });
      
      localStorage.setItem('accessToken', result.accessToken);
      localStorage.setItem('refreshToken', result.refreshToken);
      
      // Redirect to dashboard
      window.location.href = '/';
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (registerData.password !== registerData.confirmPassword) {
      setError('As palavras-passe não coincidem');
      return;
    }
    
    setView('username');
  };

  const handleCompleteRegistration = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const result = await authAPI.register({
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        email: registerData.email,
        phone: registerData.phone ? `258${registerData.phone}` : undefined,
        username: username,
        password: registerData.password,
        accountType: accountType.toUpperCase(),
      });
      
      setTempData({ firstName: registerData.firstName, lastName: registerData.lastName, email: registerData.email });
      setView('otp');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      await authAPI.verifyOtp({
        email: tempData?.email,
        otp: otpCode.join(''),
        firstName: tempData?.firstName,
        lastName: tempData?.lastName,
      });
      
      setView('login');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otpCode];
    newOtp[index] = value;
    setOtpCode(newOtp);
    
    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otpCode[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const generateSuggestions = () => {
    const first = registerData.firstName.toLowerCase();
    const last = registerData.lastName.toLowerCase();
    return [
      `${first}${last.charAt(0)}`,
      `${first}_${last}`,
      `${first}.${last}`
    ].filter(s => s.length >= 3);
  };

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
        
        {/* Logo at top left */}
        <div className="absolute top-8 left-8 z-10">
          <img src={logo} alt="nhonga.net" className="h-10 brightness-0 invert" />
        </div>
        
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

              <form className="space-y-3" onSubmit={handleLogin}>
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}
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

                <Button type="submit" variant="secondary" size="sm" className={`w-full ${isLoading ? '!bg-transparent' : ''}`} disabled={isLoading}>
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-1.5">
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></span>
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></span>
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></span>
                    </span>
                  ) : 'Login'}
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
          ) : view === 'register' ? (
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

              <form className="space-y-3" onSubmit={handleRegister}>
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contacto</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <span className="text-lg">🇲🇿</span>
                      <span className="ml-2 text-sm text-gray-600">+258</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="123456789"
                      value={registerData.phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 9);
                        setRegisterData({ ...registerData, phone: value });
                      }}
                      className="w-full pl-20 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Apenas 9 dígitos</p>
                </div>

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

                <Button type="submit" variant="secondary" size="sm" className={`w-full ${isLoading ? '!bg-transparent' : ''}`} disabled={isLoading}>
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-1.5">
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></span>
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></span>
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></span>
                    </span>
                  ) : 'Criar Conta'}
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
          ) : view === 'username' ? (
            <>
              <h1 className="text-xl font-gt-walsheim font-bold text-gray-800 mb-6">Escolha um nome de usuário</h1>
              <p className="text-sm text-gray-600 mb-2">
                O seu nome de usuário será usado para identificá-lo na plataforma.
              </p>
              <p className="text-xs text-amber-600 mb-6 font-medium">
                Nota: O nome de usuário não pode ser alterado após a escolha.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input
                  label="Nome de usuário"
                  type="text"
                  placeholder="@nomedeusuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  helperText="Apenas letras, números e underscores. Mínimo 3 caracteres."
                />

                <div>
                  <p className="text-xs text-gray-600 mb-2">Sugestões:</p>
                  <div className="flex flex-wrap gap-2">
                    {generateSuggestions().map((suggestion, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setUsername(suggestion)}
                        className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                      >
                        @{suggestion}
                      </button>
                    ))}
                  </div>
                </div>

                <Button type="submit" variant="secondary" size="sm" className={`w-full ${isLoading ? '!bg-transparent' : ''}`} onClick={() => setView('accountType')} disabled={isLoading}>
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-1.5">
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></span>
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></span>
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></span>
                    </span>
                  ) : 'Próximo'}
                </Button>
              </form>

              <p className="text-center text-xs text-gray-600 mt-6">
                <button
                  onClick={() => setView('register')}
                  className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1"
                >
                  <ArrowLeft className="w-3 h-3" />
                  Voltar
                </button>
              </p>
            </>
          ) : view === 'otp' ? (
            <>
              <h1 className="text-xl font-gt-walsheim font-bold text-gray-800 mb-6">Verificar Conta</h1>
              <p className="text-sm text-gray-600 mb-6">
                Introduza o código de verificação enviado para {tempData?.email}
              </p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleVerifyOtp(); }}>
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}
                
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Código de Verificação
                  </label>
                  <div className="flex justify-center gap-3">
                    {otpCode.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    Verifique o console do servidor para o código
                  </p>
                </div>

                <Button type="submit" variant="secondary" size="sm" className={`w-full ${isLoading ? '!bg-transparent' : ''}`} disabled={isLoading || otpCode.some(digit => !digit)}>
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-1.5">
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></span>
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></span>
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></span>
                    </span>
                  ) : 'Verificar Conta'}
                </Button>
              </form>

              <p className="text-center text-xs text-gray-600 mt-6">
                <button
                  onClick={() => setView('login')}
                  className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1"
                >
                  <ArrowLeft className="w-3 h-3" />
                  Voltar ao Login
                </button>
              </p>
            </>
          ) : (
            <>
              <h1 className="text-xl font-gt-walsheim font-bold text-gray-800 mb-6">Selecione o tipo de conta</h1>
              <p className="text-sm text-gray-600 mb-6">
                Escolha o tipo de conta que melhor se adequa ao seu perfil.
              </p>

              <div className="space-y-3">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setAccountType('professional')}
                  className={`group w-full p-6 rounded-2xl text-left transition-all duration-300 backdrop-blur-sm relative overflow-hidden ${
                    accountType === 'professional' 
                      ? 'bg-gradient-to-br from-nhonga-500/25 to-nhonga-600/35 border-2 border-nhonga-500 shadow-xl shadow-nhonga-500/25 scale-[1.02]' 
                      : 'bg-white/70 border-2 border-gray-200/80 hover:bg-white/90 hover:border-nhonga-400 hover:shadow-lg hover:scale-[1.01]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-all ${
                      accountType === 'professional'
                        ? 'bg-nhonga-500 text-white shadow-lg shadow-nhonga-500/30'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-nhonga-100 group-hover:text-nhonga-600'
                    }`}>
                      <User className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Profissional</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Para quem procura oportunidades de emprego e networking</p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setAccountType('company')}
                  className={`group w-full p-6 rounded-2xl text-left transition-all duration-300 backdrop-blur-sm relative overflow-hidden ${
                    accountType === 'company' 
                      ? 'bg-gradient-to-br from-nhonga-500/25 to-nhonga-600/35 border-2 border-nhonga-500 shadow-xl shadow-nhonga-500/25 scale-[1.02]' 
                      : 'bg-white/70 border-2 border-gray-200/80 hover:bg-white/90 hover:border-nhonga-400 hover:shadow-lg hover:scale-[1.01]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-all ${
                      accountType === 'company'
                        ? 'bg-nhonga-500 text-white shadow-lg shadow-nhonga-500/30'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-nhonga-100 group-hover:text-nhonga-600'
                    }`}>
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Empresa</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Para empresas que procuram talentos e parceiros</p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setAccountType('freelancer')}
                  className={`group w-full p-6 rounded-2xl text-left transition-all duration-300 backdrop-blur-sm relative overflow-hidden ${
                    accountType === 'freelancer' 
                      ? 'bg-gradient-to-br from-nhonga-500/25 to-nhonga-600/35 border-2 border-nhonga-500 shadow-xl shadow-nhonga-500/25 scale-[1.02]' 
                      : 'bg-white/70 border-2 border-gray-200/80 hover:bg-white/90 hover:border-nhonga-400 hover:shadow-lg hover:scale-[1.01]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-all ${
                      accountType === 'freelancer'
                        ? 'bg-nhonga-500 text-white shadow-lg shadow-nhonga-500/30'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-nhonga-100 group-hover:text-nhonga-600'
                    }`}>
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Freelancer</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Para prestadores de serviços autónomos</p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setAccountType('student')}
                  className={`group w-full p-6 rounded-2xl text-left transition-all duration-300 backdrop-blur-sm relative overflow-hidden ${
                    accountType === 'student' 
                      ? 'bg-gradient-to-br from-nhonga-500/25 to-nhonga-600/35 border-2 border-nhonga-500 shadow-xl shadow-nhonga-500/25 scale-[1.02]' 
                      : 'bg-white/70 border-2 border-gray-200/80 hover:bg-white/90 hover:border-nhonga-400 hover:shadow-lg hover:scale-[1.01]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-all ${
                      accountType === 'student'
                        ? 'bg-nhonga-500 text-white shadow-lg shadow-nhonga-500/30'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-nhonga-100 group-hover:text-nhonga-600'
                    }`}>
                      <User className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Estudante</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Para estudantes em busca de oportunidades acadêmicas</p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setAccountType('nhonguista')}
                  className={`group w-full p-6 rounded-2xl text-left transition-all duration-300 backdrop-blur-sm relative overflow-hidden ${
                    accountType === 'nhonguista' 
                      ? 'bg-gradient-to-br from-nhonga-500/25 to-nhonga-600/35 border-2 border-nhonga-500 shadow-xl shadow-nhonga-500/25 scale-[1.02]' 
                      : 'bg-white/70 border-2 border-gray-200/80 hover:bg-white/90 hover:border-nhonga-400 hover:shadow-lg hover:scale-[1.01]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-all ${
                      accountType === 'nhonguista'
                        ? 'bg-nhonga-500 text-white shadow-lg shadow-nhonga-500/30'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-nhonga-100 group-hover:text-nhonga-600'
                    }`}>
                      <User className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Nhonguista</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Membro especial da comunidade nhonga.net</p>
                    </div>
                  </div>
                </button>
              </div>

              <Button 
                variant="secondary" 
                size="sm" 
                className={`w-full mt-6 ${isLoading ? '!bg-transparent' : ''}`}
                disabled={!accountType || isLoading}
                onClick={() => handleCompleteRegistration()}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></span>
                    <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></span>
                    <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    <span className="w-2 h-2 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></span>
                  </span>
                ) : 'Concluir Registo'}
              </Button>

              <p className="text-center text-xs text-gray-600 mt-6">
                <button
                  onClick={() => setView('username')}
                  className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1"
                >
                  <ArrowLeft className="w-3 h-3" />
                  Voltar
                </button>
              </p>
            </>
          )}

          {view === 'login' && (
            <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-gray-200">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-9" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-9" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
