import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiArrowLeft, HiCurrencyDollar, HiCalendarDays, HiMapPin, HiCheckCircle, HiClipboardDocumentList } from 'react-icons/hi2'
import { competitions } from '../../data/competitions'

export default function SingleCompetition() {
  const { id } = useParams()
  const navigate = useNavigate()
  const comp = competitions.find((c) => c.id === id)

  if (!comp) {
    return (
      <div className="w-full max-w-2xl mx-auto px-5 pt-20 pb-24 text-center">
        <p className="text-gray-500 dark:text-gray-400 mb-4">Competition not found.</p>
        <button onClick={() => navigate(-1)} className="text-nhonga-500 text-sm font-medium hover:underline cursor-pointer">← Back</button>
      </div>
    )
  }

  return (
    <>
      {/* Search */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pt-6 sm:pt-10 pb-4">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex justify-center mb-6">
          <div className="flex items-center gap-2 w-full max-w-lg bg-[#06210D] rounded-2xl px-2.5 py-1.5">
            <input type="text" placeholder="Search Nhonga..." className="flex-1 bg-transparent text-sm text-gray-200 placeholder-nhonga-500 outline-none px-2 text-center" />
            <button className="flex items-center justify-center w-10 h-7 rounded-2xl bg-nhonga-500 hover:bg-nhonga-600 transition-colors shrink-0 cursor-pointer">
              <HiArrowRight className="w-4 h-4 text-gray-950" />
            </button>
          </div>
        </motion.div>

        {/* Back + breadcrumb */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }} className="flex items-center gap-2 mb-4">
          <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-xs text-gray-400 hover:text-nhonga-500 transition-colors cursor-pointer">
            <HiArrowLeft className="w-3.5 h-3.5" /> Competitions
          </button>
          <span className="text-gray-300 dark:text-gray-600">/</span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300" style={{ backgroundColor: '#E3F8E8' }}>{comp.category}</span>
        </motion.div>

        {/* Organizer */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-center gap-2.5 mb-3">
          <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-300 shrink-0">
            {comp.organizer[0]}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">{comp.organizer}</span>
        </motion.div>

        {/* Title */}
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-snug">
          {comp.title}
        </motion.h1>
      </section>

      {/* Main */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-start">

          {/* Left — description + eligibility + requirements */}
          <div className="flex flex-col gap-8">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{comp.description}</p>

            <div>
              <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <HiCheckCircle className="w-4 h-4 text-nhonga-500" /> Eligibility
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {comp.eligibility.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nhonga-500 shrink-0 mt-1.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <HiClipboardDocumentList className="w-4 h-4 text-nhonga-500" /> Requirements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {comp.requirements.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <HiCheckCircle className="w-4 h-4 text-nhonga-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — info card + join */}
          <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700">
            {/* Prize */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Prize</p>
              <p className="text-2xl font-bold text-nhonga-500">{comp.prize}</p>
            </div>

            <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />

            {/* Meta */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <HiCurrencyDollar className="w-4 h-4 shrink-0 text-gray-400" />
                <span>Prize: {comp.prize}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <HiCalendarDays className="w-4 h-4 shrink-0 text-gray-400" />
                <span>Deadline: {comp.deadline}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <HiMapPin className="w-4 h-4 shrink-0 text-gray-400" />
                <span>{comp.location}</span>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />

            {/* Join */}
            <button className="w-full py-3 rounded-2xl bg-[#06210D] text-sm font-semibold text-nhonga-400 hover:bg-nhonga-900 transition-colors cursor-pointer">
              Join Competition
            </button>
            <p className="text-xs text-gray-400 text-center">Free to enter · No registration fee</p>
          </div>
        </motion.div>
      </section>
    </>
  )
}
