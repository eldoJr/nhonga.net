import { ChevronRight } from 'lucide-react';

const tabs = [
  { id: 'empregos', label: 'Empregos' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'networking', label: 'Networking' },
  { id: 'academico', label: 'Académico' }
];

interface TopHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const topheader = ({ activeTab, setActiveTab }: TopHeaderProps) => {
  return (
    <div className="bg-nhonga-1000 border-b border-nhonga-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end text-xs">
          {tabs.map((tab, index) => (
            <>
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 border-b-2 ${
                  activeTab === tab.id
                    ? 'text-white bg-nhonga-900 border-nhonga-500 hover:bg-nhonga-800'
                    : 'text-nhonga-300 hover:text-white hover:bg-nhonga-900 border-transparent'
                }`}
              >
                {tab.label}
              </button>
              {index < tabs.length - 1 && (
                <ChevronRight className="w-3 h-3 text-nhonga-400 mx-1 mb-2" />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};