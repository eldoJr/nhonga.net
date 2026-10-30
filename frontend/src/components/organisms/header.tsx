import { useState, useEffect } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineCog6Tooth,
  HiOutlineBookmark,
  HiOutlineBell,
  HiOutlineShieldCheck,
  HiOutlineArrowRightOnRectangle,
  HiOutlineBars3,
  HiOutlineXMark,
} from 'react-icons/hi2'
import Logo from '../atoms/logo'
import Avatar from '../atoms/avatar'
import NavLink from '../molecules/navLink'
import Dropdown, { DropdownItem } from '../molecules/dropdown'

const navItems = [
  { label: 'Explore', href: '/explore' },
  { label: 'Academic', href: '/academic' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Newsletter', href: '/newsletter' },
  { label: 'Networking', href: '/networking' },
]

const userMenuItems = [
  { label: 'My Profile', href: '/profile', icon: HiOutlineUser },
  { label: 'My Jobs', href: '/hire/my-jobs', icon: HiOutlineBriefcase },
  { label: 'Saved Items', href: '/saved', icon: HiOutlineBookmark },
  { label: 'Notifications', href: '/notifications', icon: HiOutlineBell },
  { label: 'Account Settings', href: '/settings', icon: HiOutlineCog6Tooth },
  { label: 'Privacy & Security', href: '/privacy', icon: HiOutlineShieldCheck },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hireOpen, setHireOpen] = useState(false)
  const [user, setUser] = useState<{ name: string; initials: string } | null>(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 10) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const raw = localStorage.getItem('nhonga_user')
    setUser(raw ? JSON.parse(raw) : null)
  }, [location.pathname])

  function handleSignOut() {
    localStorage.removeItem('nhonga_auth')
    localStorage.removeItem('nhonga_user')
    setUser(null)
    navigate('/')
  }

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center">
      <motion.header
        animate={{
          maxWidth: scrolled ? 1250 : 1400,
          borderRadius: scrolled ? 16 : 0,
          marginTop: scrolled ? 12 : 0,
          paddingLeft: scrolled ? 24 : 0,
          paddingRight: scrolled ? 24 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full"
      >
        {/* Glass background */}
        <motion.div
          animate={{
            opacity: scrolled ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 shadow-lg border border-white/20 dark:border-gray-700/30 overflow-hidden"
          style={{ borderRadius: 'inherit' }}
        />

        {/* Green light glow — animated */}
        <motion.div
          animate={{
            opacity: scrolled ? 0.5 : 0,
            x: scrolled ? ['-20%', '120%'] : '0%',
          }}
          transition={{
            opacity: { duration: 0.3 },
            x: { duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
          }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ borderRadius: 'inherit' }}
        >
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-nhonga-400/30 via-nhonga-300/10 to-transparent blur-2xl" />
        </motion.div>

        {/* Non-scrolled solid bg */}
        <motion.div
          animate={{ opacity: scrolled ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-white dark:bg-transparent overflow-hidden"
          style={{ borderRadius: 'inherit' }}
        />

        <motion.div
          animate={{ paddingLeft: scrolled ? 8 : 24, paddingRight: scrolled ? 8 : 24 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative z-10 mx-auto flex items-center h-16 max-w-[1400px]"
        >
          <a href="/" className="flex items-center shrink-0">
            <div className="dark:hidden">
              <Logo width={110} height={32} />
            </div>
            <img
              src="/logo-w.png"
              alt="Nhonga"
              width={110}
              height={32}
              className="hidden dark:block"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6 h-full ml-10">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                label={item.label}
                href={item.href}
                active={location.pathname === item.href}
              />
            ))}
            <div className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
            <Dropdown
              trigger={
                <span className="text-xs font-semibold tracking-wider uppercase text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Hire
                </span>
              }
            >
              <DropdownItem href="/hire/my-jobs">My Jobs</DropdownItem>
              <DropdownItem href="/hire/freelancers">Freelancers</DropdownItem>
              <DropdownItem href="/hire/about">Hiring on Nhonga</DropdownItem>
              <DropdownItem href="/hire/create">Create a New Job</DropdownItem>
            </Dropdown>
          </nav>

          <div className="flex items-center gap-4 ml-auto">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-xl text-gray-500 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiOutlineXMark className="w-5 h-5" /> : <HiOutlineBars3 className="w-5 h-5" />}
            </button>

            {user ? (
              <Dropdown
                trigger={<Avatar name={user.initials} size="md" showStatus />}
                showChevron={false}
              >
                {/* User info header */}
                <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Professional Account</p>
                </div>
                {userMenuItems.map(({ label, href, icon: Icon }) => (
                  <DropdownItem key={label} href={href}>
                    <span className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 opacity-60" />
                      {label}
                    </span>
                  </DropdownItem>
                ))}
                <div className="border-t border-gray-100 dark:border-gray-700 mt-1 pt-1">
                  <DropdownItem onClick={handleSignOut}>
                    <span className="flex items-center gap-2.5 text-red-500 dark:text-red-400">
                      <HiOutlineArrowRightOnRectangle className="w-4 h-4" />
                      Sign Out
                    </span>
                  </DropdownItem>
                </div>
              </Dropdown>
            ) : (
              <Link
                to="/login"
                className="text-xs font-semibold tracking-wider uppercase text-nhonga-500 hover:text-nhonga-700 dark:hover:text-nhonga-300 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-3 right-3 sm:left-4 sm:right-4 mt-2 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/40 shadow-xl z-40"
          >
            <nav className="flex flex-col p-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    location.pathname === item.href
                      ? 'bg-nhonga-500/10 text-nhonga-600 dark:text-nhonga-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Hire expandable */}
              <div className="border-t border-gray-100 dark:border-gray-800 mt-1 pt-1">
                <button
                  onClick={() => setHireOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                >
                  Hire
                  <motion.span
                    animate={{ rotate: hireOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400"
                  >
                    ▾
                  </motion.span>
                </button>
                <AnimatePresence>
                  {hireOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4"
                    >
                      {[
                        { label: 'My Jobs', href: '/hire/my-jobs' },
                        { label: 'Freelancers', href: '/hire/freelancers' },
                        { label: 'Hiring on Nhonga', href: '/hire/about' },
                        { label: 'Create a New Job', href: '/hire/create' },
                      ].map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="block px-4 py-2.5 rounded-xl text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Sign In */}
              {!user && (
                <div className="border-t border-gray-100 dark:border-gray-800 mt-1 pt-1 px-2 pb-1">
                  <Link
                    to="/login"
                    className="block w-full text-center px-4 py-3 rounded-xl text-sm font-bold tracking-wider uppercase text-gray-900 dark:text-white hover:bg-nhonga-500/10 hover:text-nhonga-600 dark:hover:text-nhonga-400 transition-colors"
                  >
                    Sign In
                  </Link>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
