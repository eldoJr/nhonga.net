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
    primary: 'bg-gradient-to-br from-nhonga-950 via-nhonga-900 to-nhonga-950 text-white',
    secondary: 'bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 text-white',
    tertiary: 'bg-gradient-to-br from-nhonga-700 via-nhonga-600 to-nhonga-700 text-white'
  };

  return (
    <div className={`${variants[variant]} rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.01] h-[320px] flex`}>
      <div className="flex-1 p-10 flex flex-col justify-between">
        <div>
          <div className="mb-6 text-white">
            {icon}
          </div>
          <h3 className="text-3xl font-bold mb-4 font-heading leading-tight">
            {title}
          </h3>
          <p className="text-base mb-8 font-body leading-relaxed opacity-95">
            {description}
          </p>
        </div>
        <Button
          variant="secondary"
          size="lg"
          onClick={onButtonClick}
          className="font-heading bg-white text-gray-900 hover:bg-gray-100 w-fit px-6 py-3 rounded-lg font-semibold shadow-md flex items-center gap-2"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
      <div className="w-2/5 relative overflow-hidden rounded-r-3xl">
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
