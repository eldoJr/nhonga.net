import { TopHeader, Header } from './components/organisms';
import { tabcontent as TabContent } from './components/molecules';
import { Home } from './components/templates/Home';
import { Publicacoes } from './components/templates/Publicacoes';
import { SobreNos } from './components/templates/SobreNos';
import { Auth } from './pages/public/Auth';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useState, useEffect } from 'react';

function AppContent() {
  const [activeTab, setActiveTab] = useState<string | null>('home');
  const [activePage, setActivePage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTopHeaderVisible, setIsTopHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    if (activePage === 'login') return <Auth initialView="login" onLoginSuccess={() => setActivePage('publicacoes')} />;
    if (activePage === 'register') return <Auth initialView="register" />;
    if (activePage === 'publicacoes') return (
      <ProtectedRoute>
        <Publicacoes />
      </ProtectedRoute>
    );
    if (activePage === 'sobre') return <SobreNos />;
    if (activePage === 'home') return <Home />;
    return <TabContent activeTab={activeTab || ''} />;
  };

  const handlePageChange = (page: string) => {
    setActivePage(page);
    if (page === 'home') {
      setActiveTab('home');
    } else {
      setActiveTab(null);
    }
  };

  const handleTabNavigation = (tabId: string) => {
    if (tabId === 'home') {
      setActivePage('home');
    } else {
      setActivePage('tabs');
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-nhonga-1000 transition-colors">
      {activePage !== 'login' && activePage !== 'register' && (
        <>
          <div className={`transition-all duration-300 ease-out ${!isTopHeaderVisible || isScrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'} overflow-hidden`}>
            <TopHeader activeTab={activeTab} setActiveTab={setActiveTab} onTabClick={handleTabNavigation} />
          </div>
          <div className={`transition-all duration-300 ease-out ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : 'relative'}`}>
            <Header activePage={activePage} setActivePage={handlePageChange} toggleTopHeader={() => setIsTopHeaderVisible(!isTopHeaderVisible)} isTopHeaderVisible={isTopHeaderVisible} />
          </div>
          {isScrolled && isTopHeaderVisible && (
            <div className="fixed top-10 left-0 right-0 z-40 transition-all duration-300 ease-out">
              <TopHeader activeTab={activeTab} setActiveTab={setActiveTab} onTabClick={handleTabNavigation} />
            </div>
          )}
        </>
      )}
      <main className={isScrolled ? 'pt-12' : ''}>
        {renderContent()}
      </main>
      {/* {activePage !== 'login' && activePage !== 'register' && footer()} */}
      </div>
    </ThemeProvider>
  );
}
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App