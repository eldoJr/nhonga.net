import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import Logo from '../atoms/logo'
import Avatar from '../atoms/avatar'
import Button from '../atoms/button'
import NavLink from '../molecules/navLink'
import Dropdown, { DropdownItem } from '../molecules/dropdown'

const navItems = [
  { label: 'Explore', href: '#', active: true },
  { label: 'Academic', href: '#' },
  { label: 'Jobs', href: '#' },
  { label: 'Newsletter', href: '#' },
  { label: 'Networking', href: '#' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={clsx(
        'w-full sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/60 dark:bg-gray-900/60 shadow-sm'
          : 'bg-white dark:bg-gray-900',
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center px-6 h-16">
        {/* Left: Logo + Navigation */}
        <div className="flex items-center shrink-0">
          <Logo width={110} height={32} />
        </div>

        <nav className="hidden md:flex items-center gap-6 h-full ml-10">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
              active={item.active}
            />
          ))}
        </nav>

        {/* Right: Hire dropdown + Avatar */}
        <div className="flex items-center gap-4 ml-auto">
          <div className="hidden md:block w-px h-6 bg-gray-200 dark:bg-gray-700" />

          <Dropdown
            trigger={
              <span className="text-xs font-semibold tracking-wider uppercase text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                Hire
              </span>
            }
          >
            <DropdownItem>Post a Job</DropdownItem>
            <DropdownItem>Find Talent</DropdownItem>
            <DropdownItem>Pricing</DropdownItem>
          </Dropdown>

          <Dropdown
            trigger={<Avatar name="A" size="md" showStatus />}
          >
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Sign Out</DropdownItem>
          </Dropdown>
        </div>
      </div>
    </motion.header>
  )
}
