import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'

const avatars = [
  'https://i.pravatar.cc/80?img=3',
  'https://i.pravatar.cc/80?img=8',
  'https://i.pravatar.cc/80?img=5',
  'https://i.pravatar.cc/80?img=12',
]

export default function NetworkingHero() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 pt-16 pb-10">
      <div className="relative flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="flex-1">
          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10 max-w-md"
          >
            <div className="flex items-center gap-3 rounded-full bg-nhonga-500 px-6 py-3.5 shadow-lg shadow-nhonga-500/20">
              <input
                type="text"
                placeholder="Search Nhonga..."
                className="flex-1 bg-transparent text-sm text-white placeholder-white/60 outline-none"
              />
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <HiArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              Connect With People
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mt-4 leading-tight max-w-2xl">
              <span className="font-bold">Make </span>
              <span className="font-bold text-nhonga-500">Nhonga</span>
              <span className="font-light"> With Other Professionals</span>
            </h1>
          </motion.div>
        </div>

        {/* Social proof badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="shrink-0"
        >
          <div className="rounded-2xl bg-nhonga-100/60 dark:bg-nhonga-900/30 border border-nhonga-200/50 dark:border-nhonga-800/40 px-5 py-4 shadow-sm">
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-3">
              10k + Avaliations on Nhonga
            </p>
            <div className="flex items-center">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-white dark:border-gray-900 object-cover"
                  style={{ marginLeft: i > 0 ? -8 : 0, zIndex: avatars.length - i }}
                />
              ))}
              <span className="w-9 h-9 rounded-full bg-nhonga-500 text-white text-xs font-bold flex items-center justify-center -ml-2 border-2 border-white dark:border-gray-900">
                +
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
