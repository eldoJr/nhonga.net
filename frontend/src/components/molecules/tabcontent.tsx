import { Empregos } from '../../pages/public/Empregos';
import { Servicos } from '../../pages/public/Servicos';
import { Networking } from '../../pages/public/Networking';
import { Academico } from '../../pages/public/Academico';

interface TabContentProps {
  activeTab: string;
}

export const tabcontent = ({ activeTab }: TabContentProps) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'empregos':
        return <Empregos />;
      case 'servicos':
        return <Servicos />;
      case 'networking':
        return <Networking />;
      case 'academico':
        return <Academico />;
      default:
        return <Empregos />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {renderContent()}
    </div>
  );
};