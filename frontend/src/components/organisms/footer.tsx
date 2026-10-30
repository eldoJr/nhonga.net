import { useState, useEffect } from 'react'
import { Switch } from '../ui/switch'
import Dropdown, { DropdownItem } from '../molecules/dropdown'

function ThemeSwitch() {
  const [dark, setDark] = useState(document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('nhonga_theme', dark ? 'dark' : 'light')
  }, [dark])

  return <Switch checked={dark} onCheckedChange={setDark} />
}

const sep = <span className="text-gray-300 dark:text-gray-700 select-none mx-0.5">·</span>

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800/60">
      <div className="max-w-[1250px] mx-auto px-5 sm:px-6 py-3 sm:py-0 sm:h-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 text-xs text-gray-500 dark:text-gray-400">

        {/* Left — nav links */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <Dropdown trigger={<span className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">More Nhonga</span>} position="top">
            <DropdownItem href="/jobs">Jobs</DropdownItem>
            <DropdownItem href="/academic">Academic</DropdownItem>
            <DropdownItem href="/networking">Networking</DropdownItem>
            <DropdownItem href="/services">Services</DropdownItem>
          </Dropdown>

          <span className="text-gray-300 dark:text-gray-700">|</span>

          <Dropdown trigger={<span className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">English</span>} position="top">
            <DropdownItem>Português</DropdownItem>
            <DropdownItem>English</DropdownItem>
          </Dropdown>

          <span className="text-gray-300 dark:text-gray-700">|</span>

          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</a>
          {sep}
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Policy</a>
          {sep}
          <a href="#" className="hidden sm:inline hover:text-gray-900 dark:hover:text-white transition-colors">Cookie preferences</a>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700 mx-0.5">·</span>
          <a href="#" className="hidden md:inline hover:text-gray-900 dark:hover:text-white transition-colors">Share my personal information</a>
        </div>

        {/* Right — copyright + theme switch */}
        <div className="flex items-center gap-4 sm:ml-auto">
          <span className="text-gray-300 dark:text-gray-600 hidden sm:inline select-none">© {new Date().getFullYear()} Nhonga</span>
          <ThemeSwitch />
        </div>

      </div>
    </footer>
  )
}
