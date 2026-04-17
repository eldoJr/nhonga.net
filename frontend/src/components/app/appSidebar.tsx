import { useState, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { clsx } from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineHome,
  HiOutlineBriefcase,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineDocumentText,
  HiOutlineCog6Tooth,
  HiOutlinePlusCircle,
  HiOutlineMagnifyingGlass,
} from 'react-icons/hi2'
import Icon from '../atoms/icon'
import Logo from '../atoms/logo'

interface NavItem {
  icon: React.ComponentType<{ className?: string }>
  label: string
  route: string
}

const mainNav: NavItem[] = [
  { icon: HiOutlineHome, label: 'Feed', route: '/app' },
  { icon: HiOutlineBriefcase, label: 'Jobs', route: '/app/jobs' },
  { icon: HiOutlineUserGroup, label: 'Network', route: '/app/network' },
  { icon: HiOutlineAcademicCap, label: 'Academic', route: '/app/academic' },
  { icon: HiOutlineDocumentText, label: 'Content', route: '/app/content' },
]

const shortcuts: NavItem[] = [
  { icon: HiOutlinePlusCircle, label: 'Post Job', route: '/app/jobs/post' },
  { icon: HiOutlineMagnifyingGlass, label: 'Find Talent', route: '/app/freelance' },
]

const COLLAPSED = 52
const EXPANDED = 200
const COLLAPSE_DELAY = 200

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
          'relative flex items-center rounded-lg transition-all duration-150',
          expanded ? 'gap-2.5 px-3 py-[7px]' : 'justify-center py-[7px]',
          active
            ? 'text-nhonga-700 dark:text-nhonga-400 bg-nhonga-50/60 dark:bg-nhonga-950/30'
            : 'text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100/70 dark:hover:bg-white/[0.03]',
        )}
      >
        {active && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2.5px] h-3.5 rounded-full bg-nhonga-500" />
        )}

        <div className="relative flex items-center justify-center w-5 h-5">
          <Ico className="w-[18px] h-[18px]" />
        </div>

        {expanded && (
          <span className="text-[13px] font-medium whitespace-nowrap">
            {item.label}
          </span>
        )}
      </Link>

      <AnimatePresence>
        {tip && (
          <motion.div
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.08 }}
            className="absolute left-full top-1/2 -translate-y-1/2 ml-3 z-50 px-2 py-1 rounded-md bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-[11px] font-medium whitespace-nowrap shadow-lg pointer-events-none"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function AppSidebar() {
  const [expanded, setExpanded] = useState(false)
  const collapseTimer = useRef<ReturnType<typeof setTimeout>>(null)
  const { pathname } = useLocation()

  const expand = useCallback(() => {
    if (collapseTimer.current) clearTimeout(collapseTimer.current)
    setExpanded(true)
  }, [])

  const collapse = useCallback(() => {
    collapseTimer.current = setTimeout(() => setExpanded(false), COLLAPSE_DELAY)
  }, [])

  const isActive = (route: string) =>
    route === '/app' ? pathname === '/app' : pathname.startsWith(route)

  return (
    <motion.aside
      onMouseEnter={expand}
      onMouseLeave={collapse}
      animate={{ width: expanded ? EXPANDED : COLLAPSED }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={clsx(
        'fixed top-2 left-2 z-40 flex flex-col',
        'h-[calc(100vh-16px)] rounded-2xl overflow-hidden',
        'bg-white dark:bg-gray-900',
        'border border-gray-200/70 dark:border-gray-800',
        'shadow-sm',
      )}
    >
      {/* Logo */}
      <div className={clsx(
        'h-12 flex items-center shrink-0',
        expanded ? 'px-4' : 'justify-center',
      )}>
        {expanded ? <Logo width={88} height={24} /> : <Icon size={22} />}
      </div>

      <div className="mx-3 border-t border-gray-100 dark:border-gray-800/50" />

      {/* Main nav */}
      <nav className="flex-1 flex flex-col py-2.5 px-2 gap-px overflow-y-auto overflow-x-hidden">
        {mainNav.map((item) => (
          <SidebarLink key={item.route} item={item} expanded={expanded} active={isActive(item.route)} />
        ))}

        <div className="flex justify-center py-2.5">
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

      {/* Bottom */}
      <div className="mx-3 border-t border-gray-100 dark:border-gray-800/50" />
      <div className="py-2 px-2">
        <SidebarLink
          item={{ icon: HiOutlineCog6Tooth, label: 'Settings', route: '/app/settings' }}
          expanded={expanded}
          active={isActive('/app/settings')}
        />
      </div>
    </motion.aside>
  )
}
