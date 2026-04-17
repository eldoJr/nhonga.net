import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/organisms/header'
import Footer from './components/organisms/footer'
import HomePage from './components/templates/homePage'
import AcademicPage from './components/templates/academicPage'
import JobsPage from './components/templates/jobsPage'
import NetworkingPage from './components/templates/networkingPage'
import NewsletterPage from './components/templates/newsletterPage'
import MyJobsPage from './components/templates/myJobsPage'
import FreelancersPage from './components/templates/freelancersPage'
import HiringAboutPage from './components/templates/hiringAboutPage'
import CreateJobPage from './components/templates/createJobPage'
import RegisterPage from './components/templates/registerPage'
import LoginPage from './components/templates/loginPage'
import ForgotPasswordPage from './components/templates/forgotPasswordPage'
import ResetPasswordPage from './components/templates/resetPasswordPage'
import DashboardLayout from './components/layout/dashboardLayout'
import FeedPage from './pages/feed/feedPage'
import BrowseJobsPage from './pages/jobs/browseJobsPage'
import PostJobPage from './pages/jobs/postJobPage'
import NetworkPage from './pages/network/networkPage'
import AcademicHubPage from './pages/academic/academicPage'
import ContentPage from './pages/content/contentPage'
import FindTalentPage from './pages/freelance/findTalentPage'
import SettingsPage from './pages/settings/settingsPage'
import ProfilePage from './pages/profile/profilePage'
import MessagesPage from './pages/messages/messagesPage'

const authRoutes = ['/register', '/login', '/forgot-password', '/reset-password']

function App() {
  const { pathname } = useLocation()
  const isAuth = authRoutes.includes(pathname)
  const isApp = pathname.startsWith('/app')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  if (isAuth) {
    return (
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    )
  }

  if (isApp) {
    const authed = localStorage.getItem('nhonga_auth') === 'true'
    if (!authed) return <Navigate to="/login" replace />

    return (
      <Routes>
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<FeedPage />} />
          <Route path="jobs" element={<BrowseJobsPage />} />
          <Route path="jobs/post" element={<PostJobPage />} />
          <Route path="network" element={<NetworkPage />} />
          <Route path="academic" element={<AcademicHubPage />} />
          <Route path="content" element={<ContentPage />} />
          <Route path="freelance" element={<FindTalentPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="messages" element={<MessagesPage />} />
        </Route>
      </Routes>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/academic" element={<AcademicPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/networking" element={<NetworkingPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/hire/my-jobs" element={<MyJobsPage />} />
        <Route path="/hire/freelancers" element={<FreelancersPage />} />
        <Route path="/hire/about" element={<HiringAboutPage />} />
        <Route path="/hire/create" element={<CreateJobPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
