import { useState, useEffect } from 'react'
import { Switch } from '../ui/switch'
import Dropdown, { DropdownItem } from '../molecules/dropdown'

const sep = <span className="text-gray-300 dark:text-gray-700 select-none">·</span>
const pipe = <span className="text-gray-300 dark:text-gray-700 select-none">|</span>

function ThemeSwitch() {
  const [dark, setDark] = useState(document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('nhonga_theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-400 dark:text-gray-500 select-none">Dark</span>
      <Switch checked={dark} onCheckedChange={setDark} />
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 dark:border-gray-800/60">
      <div className="max-w-[1250px] mx-auto px-6 h-8 flex items-center gap-3 flex-wrap text-xs text-gray-500 dark:text-gray-400">

        <Dropdown trigger={<span className="hover:text-gray-900 dark:hover:text-white transition-colors">More Nhonga</span>} position="top">
          <DropdownItem href="/jobs">Jobs</DropdownItem>
          <DropdownItem href="/academic">Academic</DropdownItem>
          <DropdownItem href="/networking">Networking</DropdownItem>
          <DropdownItem href="/services">Services</DropdownItem>
        </Dropdown>

        {pipe}

        <Dropdown trigger={<span className="hover:text-gray-900 dark:hover:text-white transition-colors">English</span>} position="top">
          <DropdownItem>Português</DropdownItem>
          <DropdownItem>English</DropdownItem>
        </Dropdown>

        {pipe}
        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</a>
        {sep}
        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Policy</a>
        {sep}
        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Cookie preferences</a>
        {sep}
        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Share my personal information</a>

        <div className="ml-auto">
          <ThemeSwitch />
        </div>

      </div>
    </footer>
  )
}
