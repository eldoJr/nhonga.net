import { useState, useEffect } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
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
  HiChevronDown,
} from 'react-icons/hi2'
import Logo from '../atoms/logo'
import Avatar from '../atoms/avatar'
import NavLink from '../molecules/navLink'
import Dropdown, { DropdownItem } from '../molecules/dropdown'

const navItems = [
  { label: 'Explore', href: '/explore' },
  { label: 'Academic', href: '/academic' },
  { label: 'Events', href: '/events' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Networking', href: '/networking' },
]

const hireItems = [
  { label: 'My Jobs', href: '/hire/my-jobs' },
  { label: 'Freelancers', href: '/hire/freelancers' },
  { label: 'Hiring on Nhonga', href: '/hire/about' },
  { label: 'Create a New Job', href: '/hire/create' },
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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hireOpen, setHireOpen] = useState(false)
  const [user, setUser] = useState<{ name: string; initials: string } | null>(null)
  const location = useLocation()
  const navigate = useNavigate()

  // Close drawer on route change
  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

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
    <>
      <div className="sticky top-0 z-50 w-full">
        <header className="relative w-full bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
          {/* Header row */}
          <div className="relative z-10 mx-auto flex items-center h-16 max-w-[1400px] px-4 sm:px-6">
            <a href="/" className="flex items-center shrink-0">
              <div className="dark:hidden">
                <Logo width={110} height={32} />
              </div>
              <img src="/logo-w.png" alt="Nhonga" width={110} height={32} className="hidden dark:block" />
            </a>

            {/* Desktop nav */}
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
                {hireItems.map((i) => <DropdownItem key={i.label} href={i.href}>{i.label}</DropdownItem>)}
              </Dropdown>
            </nav>

            <div className="flex items-center gap-3 ml-auto">
              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden p-2 rounded-xl text-gray-500 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen
                  ? <HiOutlineXMark className="w-5 h-5" />
                  : <HiOutlineBars3 className="w-5 h-5" />}
              </button>

              {/* Avatar / Sign In */}
              {user ? (
                <Dropdown trigger={<Avatar name={user.initials} size="md" showStatus />} showChevron={false}>
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
                  className="hidden lg:block text-xs font-semibold tracking-wider uppercase text-nhonga-500 hover:text-nhonga-700 dark:hover:text-nhonga-300 transition-colors"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </header>
      </div>

      {/* Mobile drawer — full-screen overlay, outside sticky container */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 z-50 w-72 bg-white dark:bg-gray-950 shadow-2xl flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 dark:border-gray-800 shrink-0">
                <a href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                  <div className="dark:hidden"><Logo width={90} height={26} /></div>
                  <img src="/logo-w.png" alt="Nhonga" width={90} height={26} className="hidden dark:block" />
                </a>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  <HiOutlineXMark className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-0.5">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      location.pathname === item.href
                        ? 'bg-nhonga-500/10 text-nhonga-600 dark:text-nhonga-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Hire expandable */}
                <div className="mt-1">
                  <button
                    onClick={() => setHireOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                  >
                    Hire
                    <motion.span animate={{ rotate: hireOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <HiChevronDown className="w-4 h-4 text-gray-400" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {hireOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 flex flex-col gap-0.5 pb-1">
                          {hireItems.map((item) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              className="flex items-center px-4 py-2.5 rounded-xl text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>

              {/* Drawer footer — Sign In */}
              {!user && (
                <div className="px-3 py-4 border-t border-gray-100 dark:border-gray-800 shrink-0">
                  <Link
                    to="/login"
                    className="flex items-center justify-center w-full py-3 rounded-xl text-sm font-bold bg-nhonga-500 text-white hover:bg-nhonga-600 transition-colors"
                  >
                    Sign In
                  </Link>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
