import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiXMark } from 'react-icons/hi2'
import { Switch } from '../ui/switch'

const navItems = [
  { label: 'Profile info', key: 'profile' },
  { label: 'Skills & experience', key: 'skills' },
  { label: 'Education', key: 'education' },
  { label: 'Portfolio', key: 'portfolio' },
  { label: 'Services & prices', key: 'services' },
  { label: 'Saved', key: 'saved' },
  { label: 'Activity history', key: 'activity' },
  { label: 'Account settings', key: 'account' },
]

export default function EditProfileSection() {
  const navigate = useNavigate()
  const [activeNav, setActiveNav] = useState('profile')
  const [anonymous, setAnonymous] = useState(false)
  const [skills, setSkills] = useState(['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL'])
  const [newSkill, setNewSkill] = useState('')

  function removeSkill(s: string) {
    setSkills((prev) => prev.filter((x) => x !== s))
  }

  function addSkill() {
    const trimmed = newSkill.trim()
    if (trimmed && !skills.includes(trimmed)) {
      setSkills((prev) => [...prev, trimmed])
      setNewSkill('')
    }
  }

  return (
    <>
      {/* Search bar */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pt-6 sm:pt-10">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex justify-center mb-8">
          <div className="flex items-center gap-2 w-full max-w-lg bg-[#06210D] rounded-2xl px-2.5 py-1.5">
            <input type="text" placeholder="Search Nhonga..." className="flex-1 bg-transparent text-sm text-gray-200 placeholder-nhonga-500 outline-none px-2 text-center" />
            <button className="flex items-center justify-center w-10 h-7 rounded-2xl bg-nhonga-500 hover:bg-nhonga-600 transition-colors shrink-0 cursor-pointer">
              <HiArrowRight className="w-4 h-4 text-gray-950" />
            </button>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Settings</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Edit <span className="text-nhonga-500">Profile</span>
          </h1>
        </motion.div>
      </section>

      {/* Body */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pb-16 sm:pb-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Sidebar */}
          <div className="w-full lg:w-60 shrink-0">
            <div className="flex flex-col rounded-2xl bg-gray-50 dark:bg-white/5 overflow-hidden p-2 gap-0.5">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveNav(item.key)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-colors cursor-pointer ${
                    activeNav === item.key
                      ? 'bg-[#06210D] text-nhonga-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 font-medium'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Form panel */}
          <div className="flex-1 flex flex-col gap-5">

            {/* Avatar + anonymous mode row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Avatar + photo actions */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shrink-0"
                  style={{ backgroundColor: '#6AE589', color: '#06210D' }}>
                  A
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 rounded-full border border-gray-900 dark:border-gray-200 text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer whitespace-nowrap">
                    Change photo
                  </button>
                  <button className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors cursor-pointer">
                    Remove
                  </button>
                </div>
              </div>

              {/* Anonymous mode — pushed to right */}
              <div className="sm:ml-auto flex items-center justify-between gap-6 px-5 py-3.5 rounded-2xl bg-nhonga-50 dark:bg-nhonga-900/20 border border-nhonga-100 dark:border-nhonga-800/30">
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Anonymous mode</p>
                  <p className="text-xs text-gray-400 mt-0.5">Hide photo and full name</p>
                </div>
                <Switch checked={anonymous} onCheckedChange={setAnonymous} />
              </div>
            </div>

            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">First name</label>
                <input
                  placeholder="Eldo"
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none border border-transparent focus:border-nhonga-500 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Last name</label>
                <input
                  placeholder="Macuacua"
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none border border-transparent focus:border-nhonga-500 transition-colors"
                />
              </div>
            </div>

            {/* Profession + City row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Profession</label>
                <input
                  placeholder="IT Engineer"
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none border border-transparent focus:border-nhonga-500 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">City / Province</label>
                <input
                  placeholder="Vadodara"
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none border border-transparent focus:border-nhonga-500 transition-colors"
                />
              </div>
            </div>

            {/* Short bio */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Short bio</label>
              <textarea
                placeholder="Focus on The Goal"
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none border border-transparent focus:border-nhonga-500 transition-colors resize-none"
              />
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Skills</label>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 dark:text-gray-800" style={{ backgroundColor: '#E3F8E8' }}>
                    {s}
                    <button onClick={() => removeSkill(s)} className="text-gray-500 hover:text-red-500 transition-colors cursor-pointer">
                      <HiXMark className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                <input
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addSkill()}
                  placeholder="+ Add skill"
                  className="px-3 py-1.5 rounded-full border border-dashed border-nhonga-400 bg-transparent text-xs text-nhonga-500 placeholder-nhonga-400 outline-none w-20 focus:w-28 transition-all"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => navigate('/profile')}
                className="px-6 py-2.5 rounded-full bg-gray-100 dark:bg-white/5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button className="px-6 py-2.5 rounded-full bg-[#06210D] hover:bg-nhonga-900 text-sm font-semibold text-nhonga-400 transition-colors cursor-pointer">
                Save changes
              </button>
            </div>
          </div>

        </motion.div>
      </section>
    </>
  )
}
