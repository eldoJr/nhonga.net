import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiCreditCard, HiCalendarDays } from 'react-icons/hi2'
import { scholarships } from '../../data/scholarships'

const levels = ['All', 'Bachelor', 'Master', 'Technical', 'Full tuition', 'Partial']

function ScholarshipCard({ item, index }: { item: typeof scholarships[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex flex-col gap-3 p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-gray-800/60 hover:border-nhonga-300 dark:hover:border-nhonga-700 transition-colors"
    >
      {/* Institution */}
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-nhonga-100 dark:bg-nhonga-900/40 flex items-center justify-center text-sm font-bold text-nhonga-700 dark:text-nhonga-400 shrink-0">
          {item.institution[0]}
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400 truncate">{item.institution}</span>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">{item.title}</h3>

      {/* Meta */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <HiCreditCard className="w-3.5 h-3.5 shrink-0" />
          <span>{item.coverage}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <HiCalendarDays className="w-3.5 h-3.5 shrink-0" />
          <span>Deadline: {item.deadline}</span>
        </div>
      </div>

      {/* Level badge + actions */}
      <div className="flex items-center justify-between mt-1">
        <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300" style={{ backgroundColor: '#E3F8E8' }}>
          {item.level}
        </span>
        <div className="flex items-center gap-3">
          <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-nhonga-500 transition-colors cursor-pointer">
            Save
          </button>
          <button className="px-5 py-2 rounded-full bg-nhonga-500 hover:bg-nhonga-600 text-xs font-semibold text-gray-950 transition-colors cursor-pointer">
            Apply
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function ScholarshipsSection() {
  const [active, setActive] = useState('All')

  const filtered = scholarships.filter((s) => {
    if (active === 'All') return true
    if (active === 'Full tuition') return s.coverage.toLowerCase().startsWith('full')
    if (active === 'Partial') return !s.coverage.toLowerCase().startsWith('full')
    return s.level.includes(active)
  })

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
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white leading-tight">
            <span className="font-bold">Find Scholarships With </span>
            <span className="font-bold text-nhonga-500">Nhonga</span>
          </h1>
        </motion.div>

        {/* Level filters */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="flex items-center gap-2 flex-wrap">
          <span className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 shrink-0">Level</span>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setActive(lvl)}
                className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border text-xs font-medium transition-colors cursor-pointer ${
                  active === lvl
                    ? 'border-nhonga-500 bg-nhonga-500 text-white'
                    : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-nhonga-500 hover:text-nhonga-500'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Transparent process banner */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-[#06210D] px-6 py-5"
        >
          <div>
            <p className="text-sm font-bold text-white">Transparent process</p>
            <p className="text-xs text-gray-400 mt-0.5">Funds are paid directly to the school — never to individuals.</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-full bg-nhonga-500 flex items-center justify-center text-xs font-bold text-gray-950">1</span>
              <span className="text-xs font-semibold text-white">Submitted</span>
            </div>
            <div className="w-8 h-px bg-nhonga-500" />
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-full bg-nhonga-500 flex items-center justify-center text-xs font-bold text-gray-950">2</span>
              <span className="text-xs font-semibold text-white">Under review</span>
            </div>
            <div className="w-8 h-px bg-nhonga-500" />
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-full bg-nhonga-500 flex items-center justify-center text-xs font-bold text-gray-950">3</span>
              <span className="text-xs font-semibold text-white">Approved / Rejected</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pb-16 sm:pb-24">
        {filtered.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-16">No scholarships match your filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {filtered.map((item, i) => <ScholarshipCard key={item.id} item={item} index={i} />)}
          </div>
        )}
      </section>
    </>
  )
}
