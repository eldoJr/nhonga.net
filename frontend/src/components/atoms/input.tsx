import type { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  error?: string;
}

export const Input = ({ label, icon, error, className = '', ...props }: InputProps) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm text-gray-700 mb-2">{label}</label>}
      <div className="relative">
        <input
          className={`w-full px-4 py-2 bg-blue-50 border border-blue-100 rounded-md focus:outline-none focus:border-nhonga-500 text-gray-700 ${className}`}
          {...props}
        />
        {icon && <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
