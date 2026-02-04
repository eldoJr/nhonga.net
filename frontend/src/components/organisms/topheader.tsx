import { ChevronRight } from 'lucide-react';

const tabs = [
  { id: 'home', label: 'Para si' },
  { id: 'empregos', label: 'Empregos' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'networking', label: 'Networking' },
  { id: 'academico', label: 'Académico' }
];

interface TopHeaderProps {
  activeTab: string | null;
  setActiveTab: (tab: string | null) => void;
  onTabClick: (tabId: string) => void;
}

export const TopHeader = ({ activeTab, setActiveTab, onTabClick }: TopHeaderProps) => {
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabClick(tabId);
  };
  return (
    <div className="border-b border-gray-700 transition-colors" style={{ backgroundColor: '#102D36' }}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-end text-xs">
          {tabs.map((tab, index) => (
            <div key={tab.id} className="flex items-center">
              <button
                onClick={() => handleTabClick(tab.id)}
                className={`px-3 py-1.5 border-b-2 transition-all duration-200 text-xs ${
                  activeTab === tab.id
                    ? 'font-bold bg-nhonga-800 border-nhonga-500 text-white'
                    : 'font-normal hover:bg-nhonga-800/50 border-transparent text-gray-300'
                }`}
                style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
              >
                {tab.label}
              </button>
              {index < tabs.length - 1 && (
                <ChevronRight className="w-3 h-3 text-gray-600 mx-1 mb-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};