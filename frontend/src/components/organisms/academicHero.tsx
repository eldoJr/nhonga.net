import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'

export default function AcademicHero() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-5 sm:px-6 pt-6 sm:pt-10 pb-6 sm:pb-10">
      {/* Search bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center mb-6 sm:mb-10"
      >
        <div className="flex items-center gap-2 w-full max-w-lg bg-[#06210D] rounded-2xl px-2.5 py-1.5">
          <input
            type="text"
            placeholder="Search Nhonga..."
            className="flex-1 bg-transparent text-sm text-gray-200 placeholder-gray-500 outline-none px-2"
          />
          <button className="flex items-center justify-center w-10 h-7 rounded-2xl bg-nhonga-500 hover:bg-nhonga-600 transition-colors shrink-0">
            <HiArrowRight className="w-4 h-4 text-gray-950" />
          </button>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-3xl"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          Elevate Ur Level
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mt-3 sm:mt-4 leading-tight">
          <span className="font-bold">Secure</span>
          <span className="font-light"> Your Future With</span>
          <br />
          <span className="font-bold text-nhonga-500">Nhonga</span>
        </h1>
      </motion.div>
    </section>
  )
}
