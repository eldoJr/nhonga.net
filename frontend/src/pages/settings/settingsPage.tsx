import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx } from 'clsx'
import {
  HiOutlineShieldCheck,
  HiOutlineBell,
  HiOutlinePaintBrush,
  HiOutlineGlobeAlt,
  HiOutlineLockClosed,
  HiOutlineArrowRightOnRectangle,
  HiOutlineChevronRight,
  HiOutlineExclamationTriangle,
} from 'react-icons/hi2'

const navItems = [
  { key: 'privacy', label: 'Privacy', icon: HiOutlineShieldCheck },
  { key: 'notifications', label: 'Notifications', icon: HiOutlineBell },
  { key: 'appearance', label: 'Appearance', icon: HiOutlinePaintBrush },
  { key: 'language', label: 'Language', icon: HiOutlineGlobeAlt },
  { key: 'security', label: 'Security', icon: HiOutlineLockClosed },
] as const

const inputCls = 'w-full px-3.5 py-2.5 rounded-xl text-[13px] bg-gray-50 dark:bg-white/[0.03] border border-gray-200/70 dark:border-gray-800/70 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-nhonga-400 dark:focus:border-nhonga-600 focus:bg-white dark:focus:bg-white/[0.05] transition-all'

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={clsx(
        'relative w-9 h-5 rounded-full transition-colors cursor-pointer shrink-0',
        enabled ? 'bg-nhonga-500' : 'bg-gray-300 dark:bg-gray-700',
      )}
    >
      <span className={clsx(
        'absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform',
        enabled ? 'left-[18px]' : 'left-0.5',
      )} />
    </button>
  )
}

function SettingRow({ label, description, children }: { label: string; description?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <div className="min-w-0">
        <p className="text-[13px] font-medium text-gray-800 dark:text-gray-200">{label}</p>
        {description && <p className="text-[11px] text-gray-400 mt-0.5">{description}</p>}
      </div>
      {children}
    </div>
  )
}

export default function SettingsPage() {
  const [active, setActive] = useState('privacy')
  const navigate = useNavigate()
  const [showDanger, setShowDanger] = useState(false)

  const [notifications, setNotifications] = useState({
    email: true, push: true, jobs: true, messages: true, network: false, marketing: false,
  })
  const [privacy, setPrivacy] = useState({
    profilePublic: true, showEmail: false, showPhone: false, activityVisible: true,
  })
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

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
    <div className="flex gap-6">
      {/* Left nav */}
      <div className="hidden md:flex flex-col w-[200px] shrink-0">
        <div className="sticky top-20 space-y-1">
          {navItems.map((s) => {
            const Icon = s.icon
            return (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={clsx(
                  'w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-[12px] font-medium transition-colors cursor-pointer',
                  active === s.key
                    ? 'bg-nhonga-100 dark:bg-nhonga-950/40 text-nhonga-700 dark:text-nhonga-400'
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.03]',
                )}
              >
                <Icon className="w-4 h-4" />
                {s.label}
                <HiOutlineChevronRight className={clsx('w-3 h-3 ml-auto transition-opacity', active === s.key ? 'opacity-100' : 'opacity-0')} />
              </button>
            )
          })}

          <div className="h-px bg-gray-100 dark:bg-gray-800/50 my-2" />

          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-[12px] font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors cursor-pointer"
          >
            <HiOutlineArrowRightOnRectangle className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 max-w-2xl space-y-6">
        {active === 'privacy' && (
          <div>
            <h2 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Privacy</h2>
            <p className="text-[12px] text-gray-400 mb-5">Control who can see your information.</p>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/70 dark:border-gray-800/70 px-5 divide-y divide-gray-100 dark:divide-gray-800/50">
              <SettingRow label="Public Profile" description="Anyone can see your profile">
                <Toggle enabled={privacy.profilePublic} onChange={() => setPrivacy((p) => ({ ...p, profilePublic: !p.profilePublic }))} />
              </SettingRow>
              <SettingRow label="Show Email" description="Display email on your profile">
                <Toggle enabled={privacy.showEmail} onChange={() => setPrivacy((p) => ({ ...p, showEmail: !p.showEmail }))} />
              </SettingRow>
              <SettingRow label="Show Phone" description="Display phone number on your profile">
                <Toggle enabled={privacy.showPhone} onChange={() => setPrivacy((p) => ({ ...p, showPhone: !p.showPhone }))} />
              </SettingRow>
              <SettingRow label="Activity Visible" description="Others can see your activity">
                <Toggle enabled={privacy.activityVisible} onChange={() => setPrivacy((p) => ({ ...p, activityVisible: !p.activityVisible }))} />
              </SettingRow>
            </div>
          </div>
        )}

        {active === 'notifications' && (
          <div>
            <h2 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Notifications</h2>
            <p className="text-[12px] text-gray-400 mb-5">Choose what you want to be notified about.</p>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/70 dark:border-gray-800/70 px-5 divide-y divide-gray-100 dark:divide-gray-800/50">
              <SettingRow label="Email Notifications" description="Receive updates via email">
                <Toggle enabled={notifications.email} onChange={() => setNotifications((n) => ({ ...n, email: !n.email }))} />
              </SettingRow>
              <SettingRow label="Push Notifications" description="Browser push notifications">
                <Toggle enabled={notifications.push} onChange={() => setNotifications((n) => ({ ...n, push: !n.push }))} />
              </SettingRow>
              <SettingRow label="Job Alerts" description="New jobs matching your profile">
                <Toggle enabled={notifications.jobs} onChange={() => setNotifications((n) => ({ ...n, jobs: !n.jobs }))} />
              </SettingRow>
              <SettingRow label="Messages" description="New messages from connections">
                <Toggle enabled={notifications.messages} onChange={() => setNotifications((n) => ({ ...n, messages: !n.messages }))} />
              </SettingRow>
              <SettingRow label="Network Updates" description="Connection requests and updates">
                <Toggle enabled={notifications.network} onChange={() => setNotifications((n) => ({ ...n, network: !n.network }))} />
              </SettingRow>
              <SettingRow label="Marketing" description="Product updates and tips">
                <Toggle enabled={notifications.marketing} onChange={() => setNotifications((n) => ({ ...n, marketing: !n.marketing }))} />
              </SettingRow>
            </div>
          </div>
        )}

        {active === 'appearance' && (
          <div>
            <h2 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Appearance</h2>
            <p className="text-[12px] text-gray-400 mb-5">Customize how Nhonga looks for you.</p>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/70 dark:border-gray-800/70 px-5">
              <SettingRow label="Dark Mode" description="Switch between light and dark theme">
                <Toggle enabled={dark} onChange={toggleTheme} />
              </SettingRow>
            </div>
          </div>
        )}

        {active === 'language' && (
          <div>
            <h2 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Language & Region</h2>
            <p className="text-[12px] text-gray-400 mb-5">Set your preferred language and timezone.</p>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/70 dark:border-gray-800/70 p-5 space-y-4">
              <div>
                <label className="block text-[11px] font-medium text-gray-500 dark:text-gray-400 mb-1.5">Language</label>
                <select defaultValue="pt" className={inputCls}>
                  <option value="pt">Português (Moçambique)</option>
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-500 dark:text-gray-400 mb-1.5">Timezone</label>
                <select defaultValue="cat" className={inputCls}>
                  <option value="cat">Central Africa Time (CAT) — UTC+2</option>
                  <option value="eat">East Africa Time (EAT) — UTC+3</option>
                  <option value="gmt">GMT — UTC+0</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {active === 'security' && (
          <div>
            <h2 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Security</h2>
            <p className="text-[12px] text-gray-400 mb-5">Manage your password and account security.</p>

            {/* Change password */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/70 dark:border-gray-800/70 p-5 space-y-4">
              <h3 className="text-[13px] font-semibold text-gray-800 dark:text-gray-200">Change Password</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-[11px] font-medium text-gray-500 dark:text-gray-400 mb-1.5">Current Password</label>
                  <input type="password" placeholder="••••••••" className={inputCls} />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-gray-500 dark:text-gray-400 mb-1.5">New Password</label>
                  <input type="password" placeholder="••••••••" className={inputCls} />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-gray-500 dark:text-gray-400 mb-1.5">Confirm Password</label>
                  <input type="password" placeholder="••••••••" className={inputCls} />
                </div>
              </div>
              <button className="px-5 py-2 rounded-xl text-[12px] font-semibold bg-nhonga-500 text-white hover:bg-nhonga-600 transition-colors cursor-pointer">
                Update Password
              </button>
            </div>

            {/* Danger zone — collapsed by default */}
            <div className="mt-6">
              <button
                onClick={() => setShowDanger((v) => !v)}
                className="flex items-center gap-2 text-[12px] font-medium text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
              >
                <HiOutlineExclamationTriangle className="w-4 h-4" />
                {showDanger ? 'Hide danger zone' : 'Show danger zone'}
                <HiOutlineChevronRight className={clsx('w-3 h-3 transition-transform', showDanger && 'rotate-90')} />
              </button>

              {showDanger && (
                <div className="mt-3 rounded-2xl border border-red-200/60 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10 p-5">
                  <p className="text-[13px] font-semibold text-red-600 dark:text-red-400 mb-1">Delete Account</p>
                  <p className="text-[11px] text-gray-500 mb-4">This action is permanent. All your data, posts, and connections will be permanently removed.</p>
                  <button className="px-4 py-2 rounded-xl text-[12px] font-semibold border border-red-300 dark:border-red-800 text-red-500 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors cursor-pointer">
                    Delete My Account
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
