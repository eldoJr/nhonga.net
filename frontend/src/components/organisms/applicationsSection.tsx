import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'
import { applications, type AppType, type AppStatus } from '../../data/applications'

const tabs = ['All', 'Scholarships', 'Internships', 'Competitions', 'Jobs']

const typeMap: Record<string, AppType> = {
  Scholarships: 'Scholarship',
  Internships: 'Internship',
  Competitions: 'Competition',
  Jobs: 'Job',
}

const statusStyles: Record<AppStatus, string> = {
  'Submitted':    'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300',
  'Under review': 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  'Approved':     'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  'Rejected':     'bg-red-50 text-red-500 dark:bg-red-900/30 dark:text-red-400',
}

export default function ApplicationsSection() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? applications
    : applications.filter((a) => a.type === typeMap[active])

  const underReview = applications.filter((a) => a.status === 'Under review').length
  const approved    = applications.filter((a) => a.status === 'Approved').length

  return (
    <>
      {/* Search + Header */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pt-6 sm:pt-10 pb-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex justify-center mb-8">
          <div className="flex items-center gap-2 w-full max-w-lg bg-[#06210D] rounded-2xl px-2.5 py-1.5">
            <input type="text" placeholder="Search Nhonga..." className="flex-1 bg-transparent text-sm text-gray-200 placeholder-nhonga-500 outline-none px-2 text-center" />
            <button className="flex items-center justify-center w-10 h-7 rounded-2xl bg-nhonga-500 hover:bg-nhonga-600 transition-colors shrink-0 cursor-pointer">
              <HiArrowRight className="w-4 h-4 text-gray-950" />
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Academic · Applications</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white leading-tight">
            <span className="font-bold">My </span>
            <span className="font-bold text-nhonga-500">Applications</span>
          </h1>
        </motion.div>

        {/* Tabs + stat badges */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border text-xs font-medium transition-colors cursor-pointer ${
                  active === tab
                    ? 'border-nhonga-500 bg-nhonga-500 text-white'
                    : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-nhonga-500 hover:text-nhonga-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/40">
              <span className="text-lg font-bold text-amber-600 dark:text-amber-400">{underReview}</span>
              <span className="text-xs font-medium text-amber-600 dark:text-amber-400">Under review</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/40">
              <span className="text-lg font-bold text-green-600 dark:text-green-400">{approved}</span>
              <span className="text-xs font-medium text-green-600 dark:text-green-400">Approved</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Table */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pb-16 sm:pb-24">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} className="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 overflow-hidden">

          {/* Table header — desktop only */}
          <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-6 py-3 bg-gray-50 dark:bg-white/5 text-xs text-gray-400 dark:text-gray-500 font-medium">
            <span>Application</span>
            <span>Type</span>
            <span>Sent on</span>
            <span>Status</span>
            <span />
          </div>

          {filtered.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-16">No applications found.</p>
          ) : (
            filtered.map((app, i) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="border-t border-gray-100 dark:border-gray-800/60 hover:bg-gray-50/60 dark:hover:bg-white/[0.02] transition-colors"
              >
                {/* Mobile card */}
                <div className="sm:hidden flex flex-col gap-2 px-4 py-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{app.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{app.organization}</p>
                    </div>
                    <span className={`shrink-0 inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[app.status]}`}>
                      {app.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="font-medium text-gray-600 dark:text-gray-300">{app.type}</span>
                      <span>·</span>
                      <span>{app.sentOn}</span>
                    </div>
                    <button className="text-xs text-nhonga-500 font-medium cursor-pointer">View details</button>
                  </div>
                </div>

                {/* Desktop row */}
                <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center px-6 py-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{app.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{app.organization}</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{app.type}</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{app.sentOn}</span>
                  <span className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-medium ${statusStyles[app.status]}`}>
                    {app.status}
                  </span>
                  <button className="text-xs text-gray-400 hover:text-nhonga-500 transition-colors cursor-pointer whitespace-nowrap">
                    View details
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </section>
    </>
  )
}
