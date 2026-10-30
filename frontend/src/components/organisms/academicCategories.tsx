import { motion } from 'framer-motion'
import { HiBookOpen, HiAcademicCap, HiTrophy, HiBriefcase, HiGift, HiClipboardDocumentList } from 'react-icons/hi2'

const categories = [
  {
    icon: HiBookOpen,
    title: 'Books',
    description: 'Curated reading lists, textbooks, and resources recommended by top professionals and academics.',
  },
  {
    icon: HiAcademicCap,
    title: 'Courses',
    description: 'Online and in-person courses from leading institutions across Mozambique and internationally.',
  },
  {
    icon: HiTrophy,
    title: 'Competitions',
    description: 'Academic challenges, hackathons, and competitions to test your skills and win opportunities.',
  },
  {
    icon: HiBriefcase,
    title: 'Internships',
    description: 'Hands-on internship opportunities with top companies and organizations across Mozambique.',
  },
  {
    icon: HiGift,
    title: 'Scholarships Programs',
    description: 'Funding opportunities, grants, and scholarship programs for students at every level.',
  },
  {
    icon: HiClipboardDocumentList,
    title: 'Applications',
    description: 'Track and manage your applications for scholarships, internships, and academic programs.',
  },
]

export default function AcademicCategories() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-5 sm:px-6 pb-6 sm:pb-10">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative flex flex-col justify-between rounded-2xl bg-gray-50/80 dark:bg-white/5 border border-gray-200/60 dark:border-gray-800/60 p-5 sm:p-8 cursor-pointer transition-all duration-300 hover:border-nhonga-300 hover:shadow-xl hover:shadow-nhonga-200/20 dark:hover:border-nhonga-700 dark:hover:shadow-nhonga-500/5 overflow-hidden"
          >
            {/* Background icon watermark */}
            <div className="absolute top-6 right-6 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none">
              <cat.icon className="w-32 h-32" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-nhonga-100/80 dark:bg-nhonga-900/40 flex items-center justify-center text-nhonga-600 dark:text-nhonga-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                {cat.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed hidden sm:block">
                {cat.description}
              </p>
            </div>

            <div className="relative z-10 mt-6 flex items-center justify-end">
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
