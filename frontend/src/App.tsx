import { Routes, Route } from 'react-router-dom'
import Header from './components/organisms/header'
import Footer from './components/organisms/footer'
import HomePage from './components/templates/homePage'
import AcademicPage from './components/templates/academicPage'
import JobsPage from './components/templates/jobsPage'
import NetworkingPage from './components/templates/networkingPage'
import NewsletterPage from './components/templates/newsletterPage'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/academic" element={<AcademicPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/networking" element={<NetworkingPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
