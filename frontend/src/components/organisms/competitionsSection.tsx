import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiArrowUpRight, HiCurrencyDollar, HiCalendarDays, HiMapPin } from 'react-icons/hi2'
import { competitions } from '../../data/competitions'

const categories = ['All', 'Hackathons', 'Design', 'Business', 'Writing', 'Technology', 'Education']

function CompetitionCard({ comp, index }: { comp: typeof competitions[0]; index: number }) {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex flex-col gap-3 p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-gray-800/60 hover:border-nhonga-300 dark:hover:border-nhonga-700 transition-colors"
    >
      {/* Header: organizer + arrow */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-300 shrink-0">
            {comp.organizer[0]}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400 truncate">{comp.organizer}</span>
        </div>
        <button onClick={() => navigate(`/academic/competitions/${comp.id}`)} className="w-8 h-8 rounded-full bg-nhonga-500 hover:bg-nhonga-600 flex items-center justify-center shrink-0 transition-colors cursor-pointer">
          <HiArrowUpRight className="w-4 h-4 text-gray-950" />
        </button>
      </div>

      {/* Category badge */}
      <span className="inline-flex self-start px-2.5 py-0.5 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300" style={{ backgroundColor: '#E3F8E8' }}>
        {comp.category}
      </span>

      {/* Title */}
      <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">{comp.title}</h3>

      {/* Meta */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <HiCurrencyDollar className="w-3.5 h-3.5 shrink-0" />
          <span>Prize: {comp.prize}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <HiCalendarDays className="w-3.5 h-3.5 shrink-0" />
          <span>Deadline: {comp.deadline}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <HiMapPin className="w-3.5 h-3.5 shrink-0" />
          <span>{comp.location}</span>
        </div>
      </div>

      {/* Join button */}
      <button onClick={() => navigate(`/academic/competitions/${comp.id}`)} className="self-end px-5 py-2 rounded-full bg-[#06210D] hover:bg-nhonga-900 text-xs font-semibold text-nhonga-400 transition-colors cursor-pointer">
        Join
      </button>
    </motion.div>
  )
}

export default function CompetitionsSection() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? competitions : competitions.filter((c) => c.category === active || (active === 'Hackathons' && c.category === 'Hackathon'))

  return (
    <>
      {/* Search + Header */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pt-6 sm:pt-10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 w-full max-w-lg bg-[#06210D] rounded-2xl px-2.5 py-1.5">
            <input
              type="text"
              placeholder="Search Nhonga..."
              className="flex-1 bg-transparent text-sm text-gray-200 placeholder-nhonga-500 outline-none px-2 text-center"
            />
            <button className="flex items-center justify-center w-10 h-7 rounded-2xl bg-nhonga-500 hover:bg-nhonga-600 transition-colors shrink-0 cursor-pointer">
              <HiArrowRight className="w-4 h-4 text-gray-950" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Competitions</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white leading-tight">
            <span className="font-bold">Compete And Grow With </span>
            <span className="font-bold text-nhonga-500">Nhonga</span>
          </h1>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center gap-2 sm:gap-3 flex-wrap"
        >
          <span className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 shrink-0">Categories</span>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border text-xs font-medium transition-colors cursor-pointer ${
                  active === cat
                    ? 'border-nhonga-500 bg-nhonga-500 text-white'
                    : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-nhonga-500 hover:text-nhonga-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((comp, i) => (
            <CompetitionCard key={comp.id} comp={comp} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
