import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'

export default function NetworkingHero() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-5 sm:px-6 pt-5 sm:pt-8 pb-4 sm:pb-6">
      {/* Search bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 w-full max-w-md mx-auto"
      >
        <div className="flex items-center gap-2 rounded-2xl bg-[#06210D] px-2.5 py-1.5">
          <input
            type="text"
            placeholder="Search people, roles..."
            className="flex-1 bg-transparent text-sm text-gray-200 placeholder-gray-500 outline-none px-1"
          />
          <button className="w-10 h-7 rounded-2xl bg-nhonga-500 flex items-center justify-center shrink-0 cursor-pointer">
            <HiArrowRight className="w-4 h-4 text-gray-950" />
          </button>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
          Connect With People
        </p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white leading-tight">
          <span className="font-bold">Make </span>
          <span className="font-bold text-nhonga-500">Nhonga</span>
          <span className="font-light"> With Other Professionals</span>
        </h1>
      </motion.div>
    </section>
  )
}
