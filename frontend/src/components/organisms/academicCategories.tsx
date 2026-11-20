import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiBookOpen, HiAcademicCap, HiTrophy, HiBriefcase, HiGift, HiClipboardDocumentList } from 'react-icons/hi2'

const categories = [
  { icon: HiBookOpen, title: 'Books', href: '/academic/books' },
  { icon: HiAcademicCap, title: 'Courses', href: '/academic/courses' },
  { icon: HiTrophy, title: 'Competitions', href: '/academic/competitions' },
  { icon: HiBriefcase, title: 'Internships', href: '/academic/internships' },
  { icon: HiGift, title: 'Scholarships Programs', href: '/academic/scholarships' },
  { icon: HiClipboardDocumentList, title: 'Applications', href: '/academic/applications' },
]

export default function AcademicCategories() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pb-6 sm:pb-10">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {categories.map((cat, i) => (
          <Link to={cat.href} key={cat.title}>
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative flex flex-col justify-between rounded-2xl bg-gray-50/80 dark:bg-white/5 border border-gray-200/60 dark:border-gray-800/60 p-6 aspect-square cursor-pointer transition-all duration-300 hover:border-nhonga-300 hover:shadow-xl hover:shadow-nhonga-200/20 dark:hover:border-nhonga-700 dark:hover:shadow-nhonga-500/5 overflow-hidden"
          >
            {/* Background icon watermark */}
            <div className="absolute top-4 right-4 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none">
              <cat.icon className="w-24 h-24" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-nhonga-100/80 dark:bg-nhonga-900/40 flex items-center justify-center text-nhonga-600 dark:text-nhonga-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                <cat.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                {cat.title}
              </h3>
            </div>

            <div className="relative z-10 mt-6 flex items-center justify-end">
              <span className="text-xs font-semibold text-gray-400 group-hover:text-nhonga-500 transition-colors">
                Explore →
              </span>
            </div>
          </motion.div>
          </Link>
        ))}
      </div>
    </section>
  )
}
