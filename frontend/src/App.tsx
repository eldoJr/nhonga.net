import { topheader as TopHeader, header as Header } from './components/organisms';
import { tabcontent as TabContent } from './components/molecules';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('empregos');

  return (
    <div className="min-h-screen bg-white">
      <TopHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <Header />
      <main>
        <TabContent activeTab={activeTab} />
      </main>
    </div>
  )
}

export default App