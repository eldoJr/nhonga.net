import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'

const categories = [
  'Culture/Art', 'Films', 'Books', 'Conferences',
  'Academics', 'Sports', 'Exhibitions', 'Shows',
]

export default function EventsHero() {
  const [active, setActive] = useState('Culture/Art')

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
            placeholder="Search events..."
            className="flex-1 bg-transparent text-sm text-gray-200 placeholder-gray-500 outline-none px-1"
          />
          <button className="w-10 h-7 rounded-2xl bg-nhonga-500 flex items-center justify-center shrink-0 cursor-pointer">
            <HiArrowRight className="w-4 h-4 text-gray-950" />
          </button>
        </div>
      </motion.div>

      {/* Label + categories */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-3"
      >
        <span className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 shrink-0">Categories</span>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full border text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                active === cat
                  ? 'border-nhonga-500 bg-nhonga-500/10 text-nhonga-600 dark:text-nhonga-400'
                  : 'border-nhonga-500/40 text-gray-600 dark:text-gray-400 hover:border-nhonga-500 hover:text-nhonga-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
