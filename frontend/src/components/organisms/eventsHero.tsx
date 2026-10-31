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

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col gap-4"
      >
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white leading-tight">
          <span className="font-bold">Discover </span>
          <span className="font-bold text-nhonga-500">Events</span>
          <span className="font-light"> Happening Near You</span>
        </h1>

        {/* Categories label + badges on same line */}
        <div className="flex items-start sm:items-center gap-2 sm:gap-3">
          <span className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 shrink-0 pt-1.5 sm:pt-0">Categories</span>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border text-xs font-medium transition-colors cursor-pointer ${
                  active === cat
                    ? 'border-nhonga-500 bg-nhonga-500/10 text-nhonga-600 dark:text-nhonga-400'
                    : 'border-nhonga-500/40 text-gray-600 dark:text-gray-400 hover:border-nhonga-500 hover:text-nhonga-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
