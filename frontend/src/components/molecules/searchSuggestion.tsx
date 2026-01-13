import { Search } from 'lucide-react';

interface SearchSuggestionProps {
  suggestions: string[];
  title?: string;
}

export const searchSuggestion = ({ suggestions, title = "Search suggestions" }: SearchSuggestionProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="space-y-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            className="flex items-center w-full text-left p-2 hover:bg-gray-50 rounded text-gray-700 text-sm"
          >
            <Search className="w-4 h-4 mr-3 text-gray-400" />
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};