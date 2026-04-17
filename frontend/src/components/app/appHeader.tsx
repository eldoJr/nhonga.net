import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { clsx } from 'clsx'
import {
  HiOutlineBell,
  HiOutlineChatBubbleLeftRight,
  HiOutlineMagnifyingGlass,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineGlobeAlt,
  HiChevronRight,
  HiChevronLeft,
  HiOutlineUser,
  HiOutlineCog6Tooth,
  HiOutlineArrowRightOnRectangle,
  HiArrowRight,
} from 'react-icons/hi2'
import Avatar from '../atoms/avatar'

const routeMeta: Record<string, { label: string; parent?: string }> = {
  '/app': { label: 'Feed' },
  '/app/jobs': { label: 'Jobs' },
  '/app/jobs/post': { label: 'Post a Job', parent: 'Jobs' },
  '/app/jobs/manage': { label: 'Manage', parent: 'Jobs' },
  '/app/jobs/applied': { label: 'Applications', parent: 'Jobs' },
  '/app/network': { label: 'Network' },
  '/app/network/discover': { label: 'Discover', parent: 'Network' },
  '/app/messages': { label: 'Messages' },
  '/app/academic': { label: 'Academic' },
  '/app/content': { label: 'Content' },
  '/app/content/write': { label: 'Write', parent: 'Content' },
  '/app/freelance': { label: 'Freelance' },
  '/app/profile': { label: 'Profile' },
  '/app/profile/edit': { label: 'Edit', parent: 'Profile' },
  '/app/settings': { label: 'Settings' },
}

const languages = [
  { code: 'pt', label: 'Português', flag: '🇲🇿' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
]

function IconBtn({
  children,
  badge,
  onClick,
  className,
}: {
  children: React.ReactNode
  badge?: number | boolean
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'relative p-2 rounded-xl transition-colors cursor-pointer',
        'text-gray-500 dark:text-gray-400',
        'hover:bg-white/60 dark:hover:bg-white/[0.06]',
        'hover:text-gray-700 dark:hover:text-gray-200',
        className,
      )}
    >
      {children}
      {badge && (
        <span className="absolute top-1.5 right-1.5 flex items-center justify-center">
          {typeof badge === 'number' ? (
            <span className="min-w-[16px] h-4 px-1 text-[9px] font-bold bg-nhonga-500 text-white rounded-full flex items-center justify-center leading-none">
              {badge > 9 ? '9+' : badge}
            </span>
          ) : (
            <span className="w-2 h-2 bg-nhonga-500 rounded-full ring-2 ring-gray-100 dark:ring-gray-950" />
          )}
        </span>
      )}
    </button>
  )
}

function useClickOutside(ref: React.RefObject<HTMLElement | null>, handler: () => void) {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) handler()
    }
    document.addEventListener('mousedown', listener)
    return () => document.removeEventListener('mousedown', listener)
  }, [ref, handler])
}

export default function AppHeader() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState('pt')
  const [avatarOpen, setAvatarOpen] = useState(false)

  const langRef = useRef<HTMLDivElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)

  useClickOutside(langRef, () => setLangOpen(false))
  useClickOutside(avatarRef, () => setAvatarOpen(false))

  const meta = routeMeta[pathname] || { label: 'Workspace' }
  const currentLang = languages.find((l) => l.code === lang)!

  const canGoBack = window.history.length > 1
  const canGoForward = true // browser doesn't expose forward stack; always enabled visually

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  return (
    <header
      className={clsx(
        'sticky top-0 z-30 h-14 flex items-center gap-4 px-6 relative transition-shadow duration-300',
        'bg-gray-100 dark:bg-gray-950',
        'border-b border-gray-200/50 dark:border-gray-800/50',
        scrolled && 'shadow-[0_4px_12px_-2px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]',
      )}
    >
      {/* Left — Nav buttons + Breadcrumb */}
      <div className="flex items-center gap-2 min-w-0 shrink-0">
        {/* Back / Forward */}
        <div className="flex items-center gap-0.5">
          <button
            onClick={() => canGoBack && navigate(-1)}
            disabled={!canGoBack}
            className={clsx(
              'p-1 rounded-lg transition-colors',
              canGoBack
                ? 'text-gray-500 dark:text-gray-400 hover:bg-white/60 dark:hover:bg-white/[0.06] hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer'
                : 'text-gray-300 dark:text-gray-700 cursor-default',
            )}
          >
            <HiChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigate(1)}
            className={clsx(
              'p-1 rounded-lg transition-colors',
              'text-gray-500 dark:text-gray-400 hover:bg-white/60 dark:hover:bg-white/[0.06] hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer',
            )}
          >
            <HiChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="w-px h-4 bg-gray-200 dark:bg-gray-800" />

        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 min-w-0">
          {meta.parent && (
            <>
              <span className="text-sm text-gray-400 dark:text-gray-600">{meta.parent}</span>
              <HiChevronRight className="w-3 h-3 text-gray-300 dark:text-gray-700 shrink-0" />
            </>
          )}
          <h1 className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
            {meta.label}
          </h1>
        </div>
      </div>

      {/* Center — Search input */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
        <div className="relative w-[420px] flex items-center">
          <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search anything…"
            className={clsx(
              'w-full pl-9 pr-11 py-2 rounded-xl text-[13px]',
              'bg-white dark:bg-white/[0.04]',
              'border border-gray-200 dark:border-gray-800',
              'text-gray-800 dark:text-gray-200',
              'placeholder-gray-400 dark:placeholder-gray-500',
              'outline-none focus:border-nhonga-400 dark:focus:border-nhonga-600',
              'focus:ring-1 focus:ring-nhonga-400/20 dark:focus:ring-nhonga-600/20',
              'transition-all',
            )}
          />
          <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-lg bg-nhonga-500 hover:bg-nhonga-600 active:bg-nhonga-700 transition-colors cursor-pointer">
            <HiArrowRight className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>

      {/* Right — Actions */}
      <div className="flex items-center gap-1 ml-auto shrink-0">
        {/* Messages */}
        <Link to="/app/messages" className={clsx(
          'relative p-2 rounded-xl transition-colors',
          'text-gray-500 dark:text-gray-400',
          'hover:bg-white/60 dark:hover:bg-white/[0.06]',
          'hover:text-gray-700 dark:hover:text-gray-200',
        )}>
          <HiOutlineChatBubbleLeftRight className="w-[18px] h-[18px]" />
          <span className="absolute top-1.5 right-1.5 min-w-[16px] h-4 px-1 text-[9px] font-bold bg-nhonga-500 text-white rounded-full flex items-center justify-center leading-none">
            3
          </span>
        </Link>

        {/* Notifications */}
        <IconBtn badge>
          <HiOutlineBell className="w-[18px] h-[18px]" />
        </IconBtn>

        <div className="w-px h-5 bg-gray-200 dark:bg-gray-800 mx-1" />

        {/* Theme toggle */}
        <IconBtn onClick={toggleTheme}>
          {dark ? (
            <HiOutlineSun className="w-[18px] h-[18px]" />
          ) : (
            <HiOutlineMoon className="w-[18px] h-[18px]" />
          )}
        </IconBtn>

        {/* Language */}
        <div ref={langRef} className="relative">
          <button
            onClick={() => setLangOpen((v) => !v)}
            className={clsx(
              'flex items-center gap-1.5 px-2 py-2 rounded-xl transition-colors cursor-pointer',
              'text-gray-500 dark:text-gray-400',
              'hover:bg-white/60 dark:hover:bg-white/[0.06]',
              'hover:text-gray-700 dark:hover:text-gray-200',
            )}
          >
            <HiOutlineGlobeAlt className="w-[18px] h-[18px]" />
            <span className="text-[11px] font-semibold uppercase tracking-wide">{currentLang.code}</span>
          </button>

          {langOpen && (
            <div className="absolute top-full right-0 mt-2 w-[160px] z-50 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-1 overflow-hidden">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setLangOpen(false) }}
                  className={clsx(
                    'w-full flex items-center gap-2.5 px-3 py-2 text-[12px] transition-colors',
                    lang === l.code
                      ? 'bg-nhonga-50 dark:bg-nhonga-950/30 text-nhonga-700 dark:text-nhonga-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700',
                  )}
                >
                  <span className="text-base leading-none">{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="w-px h-5 bg-gray-200 dark:bg-gray-800 mx-1" />

        {/* Avatar dropdown */}
        <div ref={avatarRef} className="relative">
          <button
            onClick={() => setAvatarOpen((v) => !v)}
            className="flex items-center gap-2 p-1 rounded-xl hover:bg-white/60 dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
          >
            <Avatar name="A" size="sm" showStatus />
          </button>

          {avatarOpen && (
            <div className="absolute top-full right-0 mt-2 w-[180px] z-50 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-1 overflow-hidden">
              <div className="px-3 py-2.5 border-b border-gray-100 dark:border-gray-700">
                <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200">Admin</p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500">admin@nhonga.net</p>
              </div>

              <div className="py-1">
                <Link
                  to="/app/profile"
                  onClick={() => setAvatarOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 text-[12px] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <HiOutlineUser className="w-4 h-4" />
                  Profile
                </Link>
                <Link
                  to="/app/settings"
                  onClick={() => setAvatarOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 text-[12px] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <HiOutlineCog6Tooth className="w-4 h-4" />
                  Settings
                </Link>
              </div>

              <div className="border-t border-gray-100 dark:border-gray-700 py-1">
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-[12px] text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <HiOutlineArrowRightOnRectangle className="w-4 h-4" />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
