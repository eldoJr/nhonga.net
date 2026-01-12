import { ChevronRight } from 'lucide-react';

export const topheader = () => {
  return (
    <div className="bg-nhonga-1000 border-b border-nhonga-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end text-xs">
          <button className="px-3 py-2 text-white bg-nhonga-900 border-b-2 border-nhonga-500 hover:bg-nhonga-800">
            Empregos
          </button>
          <ChevronRight className="w-3 h-3 text-nhonga-400 mx-1 mb-2" />
          <button className="px-3 py-2 text-nhonga-300 hover:text-white hover:bg-nhonga-900 border-b-2 border-transparent">
            Serviços
          </button>
          <ChevronRight className="w-3 h-3 text-nhonga-400 mx-1 mb-2" />
          <button className="px-3 py-2 text-nhonga-300 hover:text-white hover:bg-nhonga-900 border-b-2 border-transparent">
            Networking
          </button>
          <ChevronRight className="w-3 h-3 text-nhonga-400 mx-1 mb-2" />
          <button className="px-3 py-2 text-nhonga-300 hover:text-white hover:bg-nhonga-900 border-b-2 border-transparent">
            Académico
          </button>
        </div>
      </div>
    </div>
  );
};