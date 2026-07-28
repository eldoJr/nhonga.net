import { useState, useEffect } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  HiOutlineSun,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineCog6Tooth,
  HiOutlineBookmark,
  HiOutlineBell,
  HiOutlineShieldCheck,
  HiOutlineArrowRightOnRectangle,
} from 'react-icons/hi2'
import Logo from '../atoms/logo'
import Avatar from '../atoms/avatar'
import Button from '../atoms/button'
import NavLink from '../molecules/navLink'
import Dropdown, { DropdownItem } from '../molecules/dropdown'

const navItems = [
  { label: 'Explore', href: '/' },
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
  const [user, setUser] = useState<{ name: string; initials: string } | null>(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 10) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

          <nav className="hidden md:flex items-center gap-6 h-full ml-10">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                label={item.label}
                href={item.href}
                active={location.pathname === item.href}
              />
            ))}
          </nav>

          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden md:block w-px h-6 bg-gray-200 dark:bg-gray-700" />

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

            {/* Theme toggle */}
            <button
              onClick={() => {
                const next = !document.documentElement.classList.contains('dark')
                document.documentElement.classList.toggle('dark', next)
                localStorage.setItem('nhonga_theme', next ? 'dark' : 'light')
              }}
              className="relative p-2 rounded-xl transition-colors text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer"
            >
              <div className="relative w-[18px] h-[18px]">
                <HiOutlineSun className="w-[18px] h-[18px]" />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity dark:opacity-100 opacity-0">
                  <div className="w-[22px] h-[1.5px] bg-current rotate-45 rounded-full" />
                </div>
              </div>
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
              <Link to="/login">
                <Button variant="primary" size="sm">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </motion.header>
    </div>
  )
}
