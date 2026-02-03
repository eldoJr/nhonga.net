import type { ReactNode } from 'react';
import { button as Button } from '../atoms/button';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  variant: 'primary' | 'secondary' | 'tertiary';
  image: string;
}

export const FeatureCard = ({ icon, title, description, buttonText, onButtonClick, variant, image }: FeatureCardProps) => {
  const variants = {
    primary: 'from-nhonga-900 to-nhonga-800',
    secondary: 'from-blue-600 to-blue-700',
    tertiary: 'from-nhonga-600 to-nhonga-700'
  };

  return (
    <div className={`bg-gradient-to-br ${variants[variant]} text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-72 flex`}>
      <div className="flex-1 p-7 flex flex-col justify-between">
        <div>
          <div className="mb-3">{icon}</div>
          <h3 className="text-2xl font-bold mb-2.5 leading-tight">{title}</h3>
          <p className="text-sm opacity-90 leading-relaxed">{description}</p>
        </div>
        <Button
          variant="secondary"
          size="lg"
          onClick={onButtonClick}
          className="bg-white text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors w-fit px-5 py-2.5 rounded-md font-semibold text-sm flex items-center gap-2 shadow-sm"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="w-2/5 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
