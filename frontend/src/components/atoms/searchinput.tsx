import { Search } from 'lucide-react';

interface SearchInputProps {
  placeholder: string;
  icon?: React.ReactNode;
  className?: string;
}

export const searchInput = ({ placeholder, icon = <Search className="w-5 h-5" />, className = "" }: SearchInputProps) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="absolute left-3 text-gray-400">
        {icon}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-700"
      />
    </div>
  );
};