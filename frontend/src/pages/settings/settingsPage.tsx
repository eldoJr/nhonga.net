import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx } from 'clsx'
import {
  HiOutlineUser,
  HiOutlineBell,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
  HiOutlinePaintBrush,
  HiOutlineArrowRightOnRectangle,
} from 'react-icons/hi2'
import Avatar from '../../components/atoms/avatar'

const sections = [
  { key: 'account', label: 'Account', icon: HiOutlineUser },
  { key: 'privacy', label: 'Privacy', icon: HiOutlineShieldCheck },
  { key: 'notifications', label: 'Notifications', icon: HiOutlineBell },
  { key: 'appearance', label: 'Appearance', icon: HiOutlinePaintBrush },
  { key: 'language', label: 'Language', icon: HiOutlineGlobeAlt },
] as const

const inputCls = 'w-full px-3 py-2.5 rounded-xl text-[13px] bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-nhonga-400 dark:focus:border-nhonga-600 transition-colors'

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
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="min-w-0">
        <p className="text-[13px] font-medium text-gray-800 dark:text-gray-200">{label}</p>
        {description && <p className="text-[11px] text-gray-400 mt-0.5">{description}</p>}
      </div>
      {children}
    </div>
  )
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-5">
      <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      {children}
    </div>
  )
}

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-[11px] font-medium text-gray-500 dark:text-gray-400 mb-1.5">{label}</label>
      {children}
    </div>
  )
}

export default function SettingsPage() {
  const [active, setActive] = useState('account')
  const navigate = useNavigate()

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
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-2 sticky top-20">
          {sections.map((s) => {
            const Icon = s.icon
            return (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={clsx(
                  'w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12px] font-medium transition-colors cursor-pointer',
                  active === s.key
                    ? 'bg-nhonga-50 dark:bg-nhonga-950/30 text-nhonga-700 dark:text-nhonga-400'
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/[0.03]',
                )}
              >
                <Icon className="w-4 h-4" />
                {s.label}
              </button>
            )
          })}
          <div className="mx-2 my-1.5 border-t border-gray-100 dark:border-gray-800/50" />
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12px] font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors cursor-pointer"
          >
            <HiOutlineArrowRightOnRectangle className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 space-y-5">
        {active === 'account' && (
          <>
            <SectionCard title="Profile Information">
              <div className="flex items-center gap-4 mb-5">
                <Avatar name="A" size="lg" />
                <div>
                  <button className="px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-nhonga-500 text-white hover:bg-nhonga-600 transition-colors cursor-pointer">
                    Change Photo
                  </button>
                  <p className="text-[10px] text-gray-400 mt-1">JPG, PNG. Max 2MB.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Field label="Full Name"><input defaultValue="Admin" className={inputCls} /></Field>
                <Field label="Username"><input defaultValue="admin" className={inputCls} /></Field>
                <Field label="Email"><input defaultValue="admin@nhonga.net" type="email" className={inputCls} /></Field>
                <Field label="Phone"><input placeholder="+258" className={inputCls} /></Field>
              </div>
              <Field label="Headline" className="mt-3">
                <input placeholder="e.g. Software Engineer at TechMoz" className={inputCls} />
              </Field>
              <Field label="Bio" className="mt-3">
                <textarea placeholder="Tell us about yourself…" rows={3} className={clsx(inputCls, 'resize-none')} />
              </Field>
            </SectionCard>

            <SectionCard title="Password">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Field label="Current Password"><input type="password" placeholder="••••••••" className={inputCls} /></Field>
                <div />
                <Field label="New Password"><input type="password" placeholder="••••••••" className={inputCls} /></Field>
                <Field label="Confirm Password"><input type="password" placeholder="••••••••" className={inputCls} /></Field>
              </div>
            </SectionCard>

            <button className="px-5 py-2.5 rounded-xl text-[13px] font-semibold bg-nhonga-500 text-white hover:bg-nhonga-600 transition-colors cursor-pointer">
              Save Changes
            </button>

            <div className="rounded-2xl border border-red-200 dark:border-red-900/40 p-5">
              <p className="text-[13px] font-semibold text-red-600 dark:text-red-400 mb-1">Danger Zone</p>
              <p className="text-[11px] text-gray-400 mb-3">Permanently delete your account and all data.</p>
              <button className="px-4 py-2 rounded-lg text-[12px] font-semibold border border-red-300 dark:border-red-800 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors cursor-pointer">
                Delete Account
              </button>
            </div>
          </>
        )}

        {active === 'privacy' && (
          <SectionCard title="Privacy Settings">
            <div className="divide-y divide-gray-100 dark:divide-gray-800/50">
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
          </SectionCard>
        )}

        {active === 'notifications' && (
          <SectionCard title="Notification Preferences">
            <div className="divide-y divide-gray-100 dark:divide-gray-800/50">
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
          </SectionCard>
        )}

        {active === 'appearance' && (
          <SectionCard title="Appearance">
            <SettingRow label="Dark Mode" description="Switch between light and dark theme">
              <Toggle enabled={dark} onChange={toggleTheme} />
            </SettingRow>
          </SectionCard>
        )}

        {active === 'language' && (
          <SectionCard title="Language & Region">
            <Field label="Language">
              <select defaultValue="pt" className={inputCls}>
                <option value="pt">Português (Moçambique)</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </Field>
            <Field label="Timezone" className="mt-3">
              <select defaultValue="cat" className={inputCls}>
                <option value="cat">Central Africa Time (CAT) — UTC+2</option>
                <option value="eat">East Africa Time (EAT) — UTC+3</option>
                <option value="gmt">GMT — UTC+0</option>
              </select>
            </Field>
          </SectionCard>
        )}
      </div>
    </div>
  )
}
