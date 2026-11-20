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
  HiOutlineXMark,
  HiChevronDown,
  HiOutlineGlobeAlt,
  HiOutlineAcademicCap,
  HiOutlineCalendarDays,
  HiOutlineUserGroup,
  HiOutlineNewspaper,
  HiOutlineMagnifyingGlass,
} from 'react-icons/hi2'
import Logo from '../atoms/logo'
import Avatar from '../atoms/avatar'
import NavLink from '../molecules/navLink'
import Dropdown, { DropdownItem } from '../molecules/dropdown'

const navItems = [
  { label: 'Explore', href: '/explore', icon: HiOutlineGlobeAlt },
  { label: 'Academic', href: '/academic', icon: HiOutlineAcademicCap },
  { label: 'Events', href: '/events', icon: HiOutlineCalendarDays },
  { label: 'Jobs', href: '/jobs', icon: HiOutlineBriefcase },
  { label: 'Networking', href: '/networking', icon: HiOutlineUserGroup },
  { label: 'Newsletter', href: '/newsletter', icon: HiOutlineNewspaper },
]

const guestNavItems = [
  { label: 'Explore', href: '/explore', icon: HiOutlineGlobeAlt },
  { label: 'Jobs', href: '/jobs', icon: HiOutlineBriefcase },
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
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        <header className={`relative w-full bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 transition-shadow duration-300 ${scrolled ? 'shadow-[0_8px_40px_0_rgba(0,0,0,0.25)]' : 'shadow-[0_2px_8px_0_rgba(0,0,0,0.18),0_1px_0_0_rgba(0,0,0,0.08)]'}`}>
          {/* Header row */}
          <div className="relative z-10 mx-auto flex items-center h-16 max-w-[1400px] px-4 sm:px-6">
            {/* Mobile: burger left */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 flex flex-col justify-center gap-1.5 transition-colors mr-3"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiOutlineXMark className="w-5 h-5 text-gray-500" /> : (
                <>
                  <span className="block h-0.5 w-6 bg-gray-800 dark:bg-gray-200 rounded-full" />
                  <span className="block h-0.5 w-4 bg-gray-800 dark:bg-gray-200 rounded-full" />
                </>
              )}
            </button>

            {/* Logo */}
            <a href="/" className="flex items-center shrink-0">
              <div className="dark:hidden">
                <Logo width={110} height={32} />
              </div>
              <img src="/logo-w.png" alt="Nhonga" width={110} height={32} className="hidden dark:block" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-14 h-full ml-10">
              {(user ? navItems : guestNavItems).map((item) => (
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
                  <span className="text-xs font-semibold tracking-wider uppercase text-gray-900 hover:text-nhonga-500 dark:text-gray-400 dark:hover:text-white transition-colors">
                    Hire
                  </span>
                }
              >
                {hireItems.map((i) => <DropdownItem key={i.label} href={i.href}>{i.label}</DropdownItem>)}
              </Dropdown>
            </nav>

            <div className="flex items-center gap-2 ml-auto">
              {/* Mobile right: sparkles + search */}
              <div className="flex items-center gap-1 lg:hidden">
                <button className="p-2" aria-label="Sparkles">
                  <svg aria-hidden="true" fill="none" focusable="false" height="24" viewBox="0 0 20 20" width="24">
                    <path d="M8.766 4.552C8.932 4.146 9.506 4.146 9.672 4.552L10.568 6.751C11.065 7.968 12.032 8.935 13.250 9.430L15.448 10.328C15.853 10.494 15.853 11.069 15.448 11.236L13.250 12.131C12.032 12.628 11.065 13.595 10.568 14.813L9.672 17.011C9.506 17.417 8.932 17.417 8.766 17.011L7.875 14.813C7.377 13.595 6.403 12.628 5.190 12.131L2.990 11.236C2.583 11.069 2.583 10.494 2.990 10.328L5.190 9.430C6.403 8.935 7.377 7.968 7.875 6.751L8.766 4.552Z" fill="url(#sparkle_0)" />
                    <path d="M14.414 3.226C14.506 3.000 14.826 3.000 14.918 3.226L15.312 4.189C15.404 4.416 15.583 4.596 15.809 4.688L16.773 5.081C16.999 5.173 16.999 5.493 16.773 5.585L15.809 5.979C15.583 6.072 15.404 6.250 15.312 6.478L14.918 7.440C14.826 7.666 14.506 7.666 14.414 7.440L14.020 6.478C13.928 6.250 13.749 6.072 13.523 5.979L12.559 5.585C12.333 5.493 12.333 5.173 12.559 5.081L13.523 4.688C13.749 4.596 13.928 4.416 14.020 4.189L14.414 3.226Z" fill="url(#sparkle_1)" />
                    <defs>
                      <radialGradient id="sparkle_0" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2.379 3.941) rotate(45) scale(18.917 17.211)">
                        <stop stopColor="#6AE589" />
                        <stop offset="1" stopColor="#22c55e" />
                      </radialGradient>
                      <radialGradient id="sparkle_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.283 2.950) rotate(45) scale(6.591 5.996)">
                        <stop stopColor="#6AE589" />
                        <stop offset="1" stopColor="#22c55e" />
                      </radialGradient>
                    </defs>
                  </svg>
                </button>
                <button className="p-2 text-gray-500 dark:text-gray-400" aria-label="Search">
                  <HiOutlineMagnifyingGlass className="w-5 h-5" />
                </button>
              </div>
              {/* Avatar / Sign In — desktop only */}
              <div className="hidden lg:flex items-center">
              {user ? (
                <Dropdown trigger={
                  <span className="flex items-center gap-1">
                    <Avatar name={user.initials} size="md" />
                    <HiChevronDown className="w-3.5 h-3.5 text-gray-400" />
                  </span>
                } showChevron={false}>
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
          </div>
        </header>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="lg:hidden fixed inset-0 z-50 bg-white dark:bg-gray-950 flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 dark:border-gray-800 shrink-0">
                <a href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                  <div className="dark:hidden"><Logo width={110} height={32} /></div>
                  <img src="/logo-w.png" alt="Nhonga" width={110} height={32} className="hidden dark:block" />
                </a>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  <HiOutlineXMark className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-3 py-2 flex flex-col">
                <p className="px-4 pt-1 pb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-600">Navigation</p>
                {(user ? navItems : guestNavItems).map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-nhonga-500/10 text-nhonga-600 dark:text-nhonga-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-nhonga-500' : 'text-gray-400'}`} />
                      {item.label}
                    </Link>
                  )
                })}

                {/* Hire expandable */}
                <div>
                  <button
                    onClick={() => setHireOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HiOutlineBriefcase className="w-4 h-4 text-gray-400 shrink-0" />
                      Hire
                    </span>
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
                        <div className="ml-[2.375rem] border-l border-gray-100 dark:border-gray-800 pl-3 flex flex-col pb-1 mt-0.5">
                          {hireItems.map((item) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              className="flex items-center px-3 py-1.5 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Account section for logged-in users */}
                {user && (
                  <>
                    <p className="px-4 pt-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-600">Account</p>
                    {userMenuItems.map(({ label, href, icon: Icon }) => (
                      <Link
                        key={label}
                        to={href}
                        className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                      >
                        <Icon className="w-4 h-4 text-gray-400 shrink-0" />
                        {label}
                      </Link>
                    ))}
                  </>
                )}
                {/* Sign out / Sign in */}
                <div className="mt-3 px-3">
                  <div className="border-t border-nhonga-500/30 pt-3">
                    {user ? (
                      <button
                        onClick={handleSignOut}
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-red-50 dark:bg-red-900/10 text-red-500 dark:text-red-400 transition-colors"
                      >
                        <HiOutlineArrowRightOnRectangle className="w-4 h-4 shrink-0" />
                        Sign Out
                      </button>
                    ) : (
                      <Link
                        to="/login"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-nhonga-500 hover:bg-nhonga-600 text-gray-950 transition-colors"
                      >
                        Sign In
                      </Link>
                    )}
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
