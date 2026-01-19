import { ChevronRight } from 'lucide-react';

const tabs = [
  { id: 'empregos', label: 'Empregos' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'networking', label: 'Networking' },
  { id: 'academico', label: 'Académico' }
];

interface TopHeaderProps {
  activeTab: string | null;
  setActiveTab: (tab: string | null) => void;
  onTabClick: () => void;
}

export const TopHeader = ({ activeTab, setActiveTab, onTabClick }: TopHeaderProps) => {
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabClick();
  };
  return (
    <div className="bg-nhonga-1000 border-b border-nhonga-800">
      <div className="w-full px-4">
        <div className="flex items-end text-xs">
          {tabs.map((tab, index) => (
            <div key={tab.id} className="flex items-center">
              <button
                onClick={() => handleTabClick(tab.id)}
                className={`px-3 py-2 border-b-2 transition-all duration-200 font-medium ${
                  activeTab === tab.id
                    ? 'text-white bg-nhonga-900 border-nhonga-500'
                    : 'text-nhonga-400 hover:text-nhonga-200 hover:bg-nhonga-900/50 border-transparent'
                }`}
                style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
              >
                {tab.label}
              </button>
              {index < tabs.length - 1 && (
                <ChevronRight className="w-3 h-3 text-nhonga-400 mx-1 mb-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};