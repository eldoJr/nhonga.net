import { motion } from 'framer-motion'

const avatars = [
  'https://i.pravatar.cc/80?img=3',
  'https://i.pravatar.cc/80?img=8',
  'https://i.pravatar.cc/80?img=5',
  'https://i.pravatar.cc/80?img=12',
  'https://i.pravatar.cc/80?img=16',
]

export default function AcademicHero() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 pt-16 pb-10">
      {/* Green accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-12 h-1.5 rounded-full bg-nhonga-500 mb-16 origin-left"
      />

      <div className="relative flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left — heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            Elevate Ur Level
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mt-4 leading-tight">
            <span className="font-bold">Secure</span>
            <span className="font-light"> Your Future With</span>
            <br />
            <span className="font-bold text-nhonga-500">Nhonga</span>
          </h1>
        </motion.div>

        {/* Right — floating social proof badge */}
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
