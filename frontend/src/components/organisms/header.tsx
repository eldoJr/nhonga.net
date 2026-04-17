import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isAuthenticated = false // TODO: replace with real auth state

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
          className="absolute inset-0 bg-white dark:bg-gray-900 overflow-hidden"
          style={{ borderRadius: 'inherit' }}
        />

        <motion.div
          animate={{ paddingLeft: scrolled ? 8 : 24, paddingRight: scrolled ? 8 : 24 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative z-10 mx-auto flex items-center h-16 max-w-[1400px]"
        >
          <div className="flex items-center shrink-0">
            <Logo width={110} height={32} />
          </div>

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

            {isAuthenticated ? (
              <Dropdown
                trigger={<Avatar name="A" size="md" showStatus />}
              >
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Sign Out</DropdownItem>
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
