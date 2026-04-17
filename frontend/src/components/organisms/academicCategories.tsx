import { motion } from 'framer-motion'
import { HiBookOpen, HiAcademicCap, HiTrophy } from 'react-icons/hi2'

const categories = [
  {
    icon: HiBookOpen,
    title: 'Books',
    description: 'Curated reading lists, textbooks, and resources recommended by top professionals and academics.',
    count: '2,400+',
  },
  {
    icon: HiAcademicCap,
    title: 'Courses',
    description: 'Online and in-person courses from leading institutions across Mozambique and internationally.',
    count: '850+',
  },
  {
    icon: HiTrophy,
    title: 'Competitions',
    description: 'Academic challenges, hackathons, and competitions to test your skills and win opportunities.',
    count: '120+',
  },
]

export default function AcademicCategories() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative flex flex-col justify-between rounded-2xl bg-gray-50/80 dark:bg-white/5 border border-gray-200/60 dark:border-gray-800/60 p-8 min-h-[280px] cursor-pointer transition-all duration-300 hover:border-nhonga-300 hover:shadow-xl hover:shadow-nhonga-200/20 dark:hover:border-nhonga-700 dark:hover:shadow-nhonga-500/5 overflow-hidden"
          >
            {/* Background icon watermark */}
            <div className="absolute top-6 right-6 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none">
              <cat.icon className="w-32 h-32" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-nhonga-100/80 dark:bg-nhonga-900/40 flex items-center justify-center text-nhonga-600 dark:text-nhonga-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {cat.description}
              </p>
            </div>

            <div className="relative z-10 mt-6 flex items-center justify-between">
              <span className="text-xs font-semibold text-nhonga-600 dark:text-nhonga-400">
                {cat.count} resources
              </span>
              <span className="text-xs font-semibold text-gray-400 group-hover:text-nhonga-500 transition-colors">
                Explore →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
