import { useState } from 'react';
import { Eye, EyeOff, Briefcase, Search, ShoppingBag, GraduationCap, Users, ArrowRight } from 'lucide-react';
import logo from '/src/assets/icons/logo.png';
import { Input } from '../../components/atoms/input';
import { button as Button } from '../../components/atoms/button';

type UserIntent = 'job-seeker' | 'recruiter' | 'service-provider' | 'academic' | 'business' | null;

const intentOptions = [
  {
    id: 'job-seeker' as UserIntent,
    icon: Search,
    title: 'Procurar Emprego',
    description: 'Encontrar oportunidades de trabalho'
  },
  {
    id: 'recruiter' as UserIntent,
    icon: Briefcase,
    title: 'Recrutar Talentos',
    description: 'Publicar vagas e encontrar candidatos'
  },
  {
    id: 'service-provider' as UserIntent,
    icon: ShoppingBag,
    title: 'Oferecer Serviços',
    description: 'Prestar serviços como freelancer'
  },
  {
    id: 'academic' as UserIntent,
    icon: GraduationCap,
    title: 'Oportunidades Académicas',
    description: 'Bolsas, cursos e formações'
  },
  {
    id: 'business' as UserIntent,
    icon: Users,
    title: 'Networking & Negócios',
    description: 'Conectar empresas e investidores'
  }
];

interface RegisterProps {
  onNavigate?: (page: string) => void;
}

export const Register = ({ onNavigate }: RegisterProps) => {
  const [step, setStep] = useState(1);
  const [selectedIntent, setSelectedIntent] = useState<UserIntent>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  const handleIntentSelect = (intent: UserIntent) => {
    setSelectedIntent(intent);
  };

  const handleContinue = () => {
    if (selectedIntent) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, intent: selectedIntent });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="mb-6 absolute top-8">
        <img src={logo} alt="nhonga.net" className="h-8 mx-auto" />
      </div>

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm p-6">
        {step === 1 ? (
          <>
            <h1 className="text-xl font-gt-walsheim font-bold text-center text-gray-800 mb-1">
              Olá! O que te traz ao nhonganet?
            </h1>
            <p className="text-center text-gray-600 text-sm mb-6">
              Selecione a opção que melhor descreve o seu objetivo
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {intentOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleIntentSelect(option.id)}
                    className={`p-4 rounded-lg border transition-all text-left hover:scale-[1.02] ${
                      selectedIntent === option.id
                        ? 'border-nhonga-500 bg-nhonga-50'
                        : 'border-gray-200 hover:border-nhonga-300'
                    }`}
                  >
                    <Icon className={`w-6 h-6 mb-2 ${
                      selectedIntent === option.id ? 'text-nhonga-600' : 'text-gray-600'
                    }`} />
                    <h3 className="font-gt-walsheim font-semibold text-gray-800 text-sm mb-0.5">
                      {option.title}
                    </h3>
                    <p className="text-xs text-gray-500">{option.description}</p>
                  </button>
                );
              })}
            </div>

            <Button
              onClick={handleContinue}
              variant="secondary"
              size="sm"
              className="w-full flex items-center justify-center gap-2"
              disabled={!selectedIntent}
            >
              Continuar
              <ArrowRight className="w-4 h-4" />
            </Button>

            <p className="text-center text-xs text-gray-600 mt-4">
              Já tem uma conta?{' '}
              <button
                onClick={() => onNavigate?.('login')}
                className="text-blue-600 hover:underline font-medium"
              >
                Entrar
              </button>
            </p>
          </>
        ) : (
          <>
            <button
              onClick={() => setStep(1)}
              className="text-xs text-gray-600 hover:text-nhonga-600 mb-3"
            >
              ← Voltar
            </button>

            <h1 className="text-xl font-gt-walsheim font-bold text-center text-gray-800 mb-1">
              Criar Conta
            </h1>
            <p className="text-center text-gray-600 text-sm mb-4">
              Preencha os seus dados para começar
            </p>

            <div className="grid md:grid-cols-3 gap-2 mb-4">
              <Button size="sm" className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </Button>

              <Button size="sm" variant="outline" className="w-full flex items-center justify-center gap-2 bg-white">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>

              <Button size="sm" className="w-full flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Apple
              </Button>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-gray-500 text-xs">Ou</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Nome"
                  type="text"
                  placeholder="Primeiro nome"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />

                <Input
                  label="Sobrenome"
                  type="text"
                  placeholder="Último nome"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>

              <Input
                label="Email"
                type="email"
                placeholder="exemplo@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />

              <Input
                label="Telefone"
                type="tel"
                placeholder="+258 XX XXX XXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <div className="grid md:grid-cols-2 gap-3">
                <Input
                  label="Palavra-passe"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Mínimo 8 caracteres"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
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
              </div>

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

            <p className="text-center text-xs text-gray-600 mt-4">
              Já tem uma conta?{' '}
              <button
                onClick={() => onNavigate?.('login')}
                className="text-blue-600 hover:underline font-medium"
              >
                Entrar
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
