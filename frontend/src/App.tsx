import { TopHeader, Header } from './components/organisms';
import { tabcontent as TabContent } from './components/molecules';
import { Home } from './components/templates/Home';
import { Publicacoes } from './components/templates/Publicacoes';
import { SobreNos } from './components/templates/SobreNos';
import { Auth } from './pages/public/Auth';
import { useState, useEffect } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [activePage, setActivePage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    if (activePage === 'login') return <Auth initialView="login" />;
    if (activePage === 'register') return <Auth initialView="register" />;
    if (activePage === 'publicacoes') return <Publicacoes />;
    if (activePage === 'sobre') return <SobreNos />;
    if (activePage === 'home') return <Home />;
    return <TabContent activeTab={activeTab || ''} />;
  };

  const handlePageChange = (page: string) => {
    setActivePage(page);
    if (page === 'home') {
      setActiveTab(null);
    }
  };

  const handleTabNavigation = () => {
    setActivePage('tabs');
  };

  return (
    <div className="min-h-screen bg-white">
      {activePage !== 'login' && activePage !== 'register' && (
        <>
          <div className={`transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden' : 'h-auto'}`}>
            <TopHeader activeTab={activeTab} setActiveTab={setActiveTab} onTabClick={handleTabNavigation} />
          </div>
          <div className={`${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
            <Header activePage={activePage} setActivePage={handlePageChange} />
          </div>
        </>
      )}
      <main className={isScrolled ? 'pt-12' : ''}>
        {renderContent()}
      </main>
      {/* {activePage !== 'login' && activePage !== 'register' && footer()} */}
    </div>
  )
}

export default App