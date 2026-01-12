import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export const button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '' 
}: ButtonProps) => {
  const baseClasses = 'font-montserrat font-medium rounded-lg transition-colors';
  
  const variants = {
    primary: 'bg-primary hover:bg-nhonga-600 text-white',
    secondary: 'bg-secondary hover:bg-nhonga-800 text-white',
    ghost: 'bg-transparent hover:bg-nhonga-50 text-nhonga-700',
    outline: 'border border-nhonga-300 hover:border-nhonga-500 text-nhonga-700 hover:bg-nhonga-50'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};