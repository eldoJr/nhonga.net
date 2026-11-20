import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/organisms/header'
import Footer from './components/organisms/footer'
import HomePage from './components/templates/homePage'
import ExplorePage from './components/templates/explorePage'
import AcademicPage from './components/templates/academicPage'
import JobsPage from './components/templates/jobsPage'
import NetworkingPage from './components/templates/networkingPage'
import EventsPage from './components/templates/eventsPage'
import SingleEventPage from './components/templates/singleEventPage'
import SubmitEventPage from './components/templates/submitEventPage'
import NewsletterPage from './components/templates/newsletterPage'
import SingleNewsletterPage from './components/templates/singleNewsletterPage'
import MyJobsPage from './components/templates/myJobsPage'
import FreelancersPage from './components/templates/freelancersPage'
import HiringAboutPage from './components/templates/hiringAboutPage'
import CreateJobPage from './components/templates/createJobPage'
import RegisterPage from './components/templates/registerPage'
import LoginPage from './components/templates/loginPage'
import ForgotPasswordPage from './components/templates/forgotPasswordPage'
import ResetPasswordPage from './components/templates/resetPasswordPage'
import BooksPage from './components/templates/booksPage'
import CoursesPage from './components/templates/coursesPage'
import SingleCoursePage from './components/templates/singleCoursePage'
import CourseReviewsPage from './components/templates/courseReviewsPage'
import BookReviewsPage from './components/templates/bookReviewsPage'
import SingleBookPage from './components/templates/singleBookPage'
import CompetitionsPage from './components/templates/competitionsPage'
import SingleCompetitionPage from './components/templates/singleCompetitionPage'
import InternshipsPage from './components/templates/internshipsPage'
import AddCourseReviewPage from './components/templates/addCourseReviewPage'
import AddBookReviewPage from './components/templates/addBookReviewPage'
import CoursePaymentPage from './components/templates/coursePaymentPage'
import BookPaymentPage from './components/templates/bookPaymentPage'

const authRoutes = ['/register', '/login', '/forgot-password', '/reset-password']
const fullscreenRoutes = ['/', '/explore']

function App() {
  const { pathname } = useLocation()
  const isAuth = authRoutes.includes(pathname)

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

  return (
    <div className={`flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-white ${fullscreenRoutes.includes(pathname) ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
      <Header />
      <div className={fullscreenRoutes.includes(pathname) ? 'flex-1 flex flex-col overflow-hidden' : 'flex-1'}>
      <Routes>
        <Route path="/" element={<HomePage className="flex-1 overflow-hidden" />} />
        <Route path="/explore" element={<ExplorePage className="flex-1 overflow-hidden" />} />
        <Route path="/academic" element={<AcademicPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/networking" element={<NetworkingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/submit" element={<SubmitEventPage />} />
        <Route path="/events/:id" element={<SingleEventPage />} />
        <Route path="/hire/my-jobs" element={<MyJobsPage />} />
        <Route path="/hire/freelancers" element={<FreelancersPage />} />
        <Route path="/hire/about" element={<HiringAboutPage />} />
        <Route path="/hire/create" element={<CreateJobPage />} />
        <Route path="/academic/books" element={<BooksPage />} />
        <Route path="/academic/courses" element={<CoursesPage />} />
        <Route path="/academic/courses/:id" element={<SingleCoursePage />} />
        <Route path="/academic/courses/:id/pay" element={<CoursePaymentPage />} />
        <Route path="/academic/courses/:id/reviews" element={<CourseReviewsPage />} />
        <Route path="/academic/courses/:id/reviews/add" element={<AddCourseReviewPage />} />
        <Route path="/academic/books/:id" element={<SingleBookPage />} />
        <Route path="/academic/competitions" element={<CompetitionsPage />} />
        <Route path="/academic/competitions/:id" element={<SingleCompetitionPage />} />
        <Route path="/academic/internships" element={<InternshipsPage />} />
        <Route path="/academic/books/:id/pay" element={<BookPaymentPage />} />
        <Route path="/academic/books/:id/reviews" element={<BookReviewsPage />} />
        <Route path="/academic/books/:id/reviews/add" element={<AddBookReviewPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/newsletter/:id" element={<SingleNewsletterPage />} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
