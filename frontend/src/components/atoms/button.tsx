import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  disabled = false,
  type = 'button'
}: ButtonProps) => {
  const baseClasses = 'font-montserrat font-medium rounded-md transition-colors';
  
  const variants = {
    primary: 'bg-primary hover:bg-nhonga-600 text-white disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-secondary hover:bg-nhonga-800 text-white disabled:opacity-50 disabled:cursor-not-allowed',
    ghost: 'bg-transparent hover:bg-nhonga-50 text-nhonga-700 disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'border border-nhonga-300 hover:border-nhonga-500 text-nhonga-700 hover:bg-nhonga-50 disabled:opacity-50 disabled:cursor-not-allowed'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};