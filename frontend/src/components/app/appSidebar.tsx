import { useState, useRef, useCallback, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { clsx } from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineHome,
  HiOutlineBriefcase,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineNewspaper,
  HiOutlinePlusCircle,
  HiOutlineMagnifyingGlass,
  HiOutlineBars3,
  HiOutlineGlobeAlt,
} from 'react-icons/hi2'
function SidebarIcon({ size = 24 }: { size?: number }) {
  return (
    <>
      <img src="/icon-b.svg" alt="Nhonga" width={size} height={size} className="block dark:hidden bg-transparent" />
      <img src="/icon-w.svg" alt="Nhonga" width={size} height={size} className="hidden dark:block bg-transparent" />
    </>
  )
}

interface NavItem {
  icon: React.ComponentType<{ className?: string }>
  label: string
  route: string
}

const mainNav: NavItem[] = [
  { icon: HiOutlineHome, label: 'Feed', route: '/app' },
  { icon: HiOutlineGlobeAlt, label: 'Explore', route: '/app/explore' },
  { icon: HiOutlineBriefcase, label: 'Jobs', route: '/app/jobs' },
  { icon: HiOutlineUserGroup, label: 'Network', route: '/app/network' },
  { icon: HiOutlineAcademicCap, label: 'Academic', route: '/app/academic' },
  { icon: HiOutlineNewspaper, label: 'Content', route: '/app/content' },
]

const shortcuts: NavItem[] = [
  { icon: HiOutlinePlusCircle, label: 'Post Job', route: '/app/jobs/post' },
  { icon: HiOutlineMagnifyingGlass, label: 'Find Talent', route: '/app/freelance' },
]

const COLLAPSE_DELAY = 250

function SidebarLink({
  item,
  expanded,
  active,
}: {
  item: NavItem
  expanded: boolean
  active: boolean
}) {
  const Ico = item.icon
  const [tip, setTip] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => !expanded && setTip(true)}
      onMouseLeave={() => setTip(false)}
    >
      <Link
        to={item.route}
        className={clsx(
          'relative flex items-center gap-3 px-3.5 py-2 rounded-xl transition-colors duration-200',
          active
            ? 'text-nhonga-700 dark:text-nhonga-400 bg-nhonga-50/60 dark:bg-nhonga-950/30'
            : 'text-gray-400 dark:text-nhonga-600 hover:text-gray-700 dark:hover:text-nhonga-400 hover:bg-gray-100/70 dark:hover:bg-white/[0.03]',
        )}
      >
        {active && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2.5px] h-4 rounded-full bg-nhonga-500" />
        )}
        <div className="relative shrink-0 flex items-center justify-center w-[22px] h-[22px]">
          <Ico className="w-5 h-5" />
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.15 }}
              className="text-[13px] font-medium whitespace-nowrap overflow-hidden dark:text-gray-200"
            >
              {item.label}
            </motion.span>
          )}
        </AnimatePresence>
      </Link>

      <AnimatePresence>
        {tip && (
          <motion.div
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.08 }}
            className="absolute left-full top-1/2 -translate-y-1/2 ml-3 z-50 px-2.5 py-1.5 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-[11px] font-medium whitespace-nowrap shadow-lg pointer-events-none"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const menuItems = [
  { label: 'Settings', href: '/app/settings' },
  { label: 'Your activity', href: '/app/activity' },
  { label: 'Saved', href: '/app/saved' },
  { label: 'Switch appearance', action: 'theme' },
  { label: 'Report a problem' },
  { label: 'Switch accounts' },
  { label: 'Log out', action: 'signout', danger: true },
] as const

export default function AppSidebar() {
  const [expanded, setExpanded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const collapseTimer = useRef<ReturnType<typeof setTimeout>>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const expand = useCallback(() => {
    if (collapseTimer.current) clearTimeout(collapseTimer.current)
    setExpanded(true)
  }, [])

  const collapse = useCallback(() => {
    collapseTimer.current = setTimeout(() => {
      setExpanded(false)
      setMenuOpen(false)
    }, COLLAPSE_DELAY)
  }, [])

  // Close menu on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close menu when sidebar collapses
  useEffect(() => {
    if (!expanded) setMenuOpen(false)
  }, [expanded])

  const isActive = (route: string) =>
    route === '/app' ? pathname === '/app' : pathname.startsWith(route)

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('nhonga_theme', next ? 'dark' : 'light')
  }

  const handleSignOut = () => {
    localStorage.removeItem('nhonga_auth')
    navigate('/login')
  }

  const handleMenuClick = (item: typeof menuItems[number]) => {
    setMenuOpen(false)
    if ('action' in item && item.action === 'theme') toggleTheme()
    else if ('action' in item && item.action === 'signout') handleSignOut()
    else if ('href' in item && item.href) navigate(item.href)
  }

  return (
    <aside
      onMouseEnter={expand}
      onMouseLeave={collapse}
      className={clsx(
        'fixed top-0 left-0 z-40 flex flex-col h-screen transition-[width] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
        expanded ? 'w-[220px]' : 'w-[58px]',
      )}
    >
      {/* Logo */}
      <div
        className="h-14 flex items-center shrink-0 cursor-pointer px-4"
        onClick={() => window.location.reload()}
      >
        <SidebarIcon />
      </div>

      {/* Main nav — vertically centered */}
      <nav className="flex-1 flex flex-col justify-center py-3 px-2.5 gap-0.5">
        {mainNav.map((item) => (
          <SidebarLink key={item.route} item={item} expanded={expanded} active={isActive(item.route)} />
        ))}

        <div className="flex justify-center py-3">
          <div className="flex gap-[3px]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-[3px] h-[3px] rounded-full bg-gray-200 dark:bg-gray-700" />
            ))}
          </div>
        </div>

        {shortcuts.map((item) => (
          <SidebarLink key={item.route} item={item} expanded={expanded} active={isActive(item.route)} />
        ))}
      </nav>

      {/* Bottom — More menu (custom, not Dropdown component, to control visibility) */}
      <div className="py-2.5 px-2.5 relative" ref={menuRef}>
        <button
          onClick={() => expanded && setMenuOpen((v) => !v)}
          className={clsx(
            'flex items-center gap-3 px-3.5 py-2 rounded-xl transition-colors duration-200 w-full cursor-pointer',
            'text-gray-400 dark:text-nhonga-600 hover:text-gray-700 dark:hover:text-nhonga-400 hover:bg-gray-100/70 dark:hover:bg-white/[0.03]',
          )}
        >
          <HiOutlineBars3 className="w-5 h-5 shrink-0" />
          <AnimatePresence>
            {expanded && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.15 }}
                className="text-[13px] font-medium whitespace-nowrap overflow-hidden"
              >
                More
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 6 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="absolute bottom-full left-1 mb-2 w-[200px] z-50 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-1.5"
            >
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item)}
                  className={clsx(
                    'w-full text-left px-4 py-2 text-[13px] transition-colors cursor-pointer',
                    'danger' in item && item.danger
                      ? 'text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white',
                  )}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  )
}
