import { Search } from 'lucide-react';

interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

export const searchinput = ({ placeholder = "Pesquisar...", className = "" }: SearchInputProps) => {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-nhonga-600" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 text-sm border border-nhonga-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nhonga-500 focus:border-transparent"
      />
    </div>
  );
};