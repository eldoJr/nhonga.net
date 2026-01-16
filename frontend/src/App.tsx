import { TopHeader, Header, footer } from './components/organisms';
import { tabcontent as TabContent } from './components/molecules';
import { Home } from './components/templates/Home';
import { Publicacoes } from './components/templates/Publicacoes';
import { SobreNos } from './components/templates/SobreNos';
import { Auth } from './pages/public/Auth';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('empregos');
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    if (activePage === 'login') return <Auth initialView="login" />;
    if (activePage === 'register') return <Auth initialView="register" />;
    if (activePage === 'publicacoes') return <Publicacoes />;
    if (activePage === 'sobre') return <SobreNos />;
    if (activePage === 'home') return <Home />;
    return <TabContent activeTab={activeTab} />;
  };

  const handlePageChange = (page: string) => {
    setActivePage(page);
    if (page === 'home') {
      setActiveTab('empregos');
    }
  };

  const handleTabNavigation = () => {
    setActivePage('tabs');
  };

  return (
    <div className="min-h-screen bg-white">
      {activePage !== 'login' && activePage !== 'register' && (
        <>
          <TopHeader activeTab={activeTab} setActiveTab={setActiveTab} onTabClick={handleTabNavigation} />
          <Header activePage={activePage} setActivePage={handlePageChange} />
        </>
      )}
      <main>
        {renderContent()}
      </main>
      {activePage !== 'login' && activePage !== 'register' && footer()}
    </div>
  )
}

export default App