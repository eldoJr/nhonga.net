import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiMapPin, HiCheckBadge, HiStar, HiPhoto } from 'react-icons/hi2'

const tabs = ['Overview', 'Portfolio', 'Services', 'Saved', 'Activity history']

const skills = ['Social Media', 'Copywriting', 'Meta Ads', 'Canva', 'Branding', 'Content Strategy']

const services = [
  { title: 'Social media management', desc: 'Monthly plan · 12 posts · reports', price: 'From 8.000 MT/month' },
  { title: 'Brand identity starter', desc: 'Logo, colours and templates', price: 'From 12.000 MT' },
  { title: '1:1 Marketing mentoring', desc: '60-minute online session', price: '1.500 MT/session' },
]

const stats = [
  { value: '4.9', label: '128 reviews', star: true },
  { value: '42', label: 'jobs completed' },
  { value: '310', label: 'connections' },
  { value: '6', label: 'certificates' },
]

export default function ProfileSection() {
  const [activeTab, setActiveTab] = useState('Overview')
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('nhonga_user') || '{"name":"Ana Machava","initials":"A"}')

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
      </section>

      {/* Cover + Avatar + Info */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Cover banner */}
          <div className="relative w-full h-36 sm:h-48 rounded-2xl overflow-hidden" style={{ backgroundColor: '#06210D' }}>
            {/* Decorative blobs */}
            <div className="absolute right-0 top-0 w-64 h-full opacity-30 pointer-events-none">
              <div className="absolute top-4 right-8 w-40 h-40 rounded-full" style={{ backgroundColor: '#0d3d1a' }} />
              <div className="absolute top-12 right-0 w-56 h-56 rounded-full" style={{ backgroundColor: '#0a2e14' }} />
            </div>
          </div>

          {/* Avatar overlapping cover */}
          <div className="relative px-4 sm:px-6 -mt-12 sm:-mt-16 mb-4">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center text-3xl sm:text-4xl font-bold border-4 border-white dark:border-gray-950"
              style={{ backgroundColor: '#6AE589', color: '#06210D' }}>
              {user.initials}
            </div>
          </div>

          {/* Name + actions */}
          <div className="px-4 sm:px-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
                <HiCheckBadge className="w-6 h-6 text-nhonga-500 shrink-0" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Digital Marketing Specialist</p>
              <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-400">
                <HiMapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Maputo, Mozambique</span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-nhonga-500 transition-colors cursor-pointer">
                Share
              </button>
              <button onClick={() => navigate('/profile/edit')} className="px-5 py-2 rounded-full bg-[#06210D] hover:bg-nhonga-900 text-sm font-semibold text-nhonga-400 transition-colors cursor-pointer">
                Edit profile
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="px-4 sm:px-6 mt-5 flex items-center gap-5 sm:gap-8 flex-wrap">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-1.5">
                {s.star && <HiStar className="w-4 h-4 text-amber-400 shrink-0" />}
                <span className="text-sm font-bold text-gray-900 dark:text-white">{s.value}</span>
                <span className="text-xs text-gray-400">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="mt-6 border-b border-gray-200 dark:border-gray-800 px-4 sm:px-6">
            <div className="flex gap-6 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-medium whitespace-nowrap transition-colors cursor-pointer border-b-2 -mb-px ${
                    activeTab === tab
                      ? 'border-nhonga-500 text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Overview content */}
      {activeTab === 'Overview' && (
        <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 py-8 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Left — About + Skills + Portfolio */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex flex-col gap-8">
              {/* About */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">About</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  I help small businesses in Maputo grow online with social media plans, content and simple paid ads. 5 years working with fashion, food and tech brands.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span key={s} className="px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Portfolio */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Portfolio</h2>
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-800 flex items-center justify-center">
                      <HiPhoto className="w-6 h-6 text-gray-300 dark:text-gray-600" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — Services */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Services</h2>
                <button className="text-xs font-medium text-nhonga-500 hover:text-nhonga-600 transition-colors cursor-pointer">See all</button>
              </div>
              {services.map((svc) => (
                <div key={svc.title} className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-gray-800/60">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{svc.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{svc.desc}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <span className="text-xs font-bold text-nhonga-600 dark:text-nhonga-400 whitespace-nowrap">{svc.price}</span>
                    <button className="px-4 py-1.5 rounded-full bg-[#06210D] hover:bg-nhonga-900 text-xs font-semibold text-nhonga-400 transition-colors cursor-pointer">
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </section>
      )}
    </>
  )
}
