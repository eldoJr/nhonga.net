import { motion } from 'framer-motion'
import { HiCalendar, HiMapPin, HiArrowRight } from 'react-icons/hi2'
import Button from '../atoms/button'

const scholarships = [
  {
    title: 'Chevening Scholarship 2025',
    institution: 'UK Government',
    location: 'United Kingdom',
    deadline: '15 Nov 2025',
    tags: ['Full Funding', 'Masters'],
  },
  {
    title: 'AUST African Leaders Scholarship',
    institution: 'African University of Science & Technology',
    location: 'Nigeria',
    deadline: '30 Dec 2025',
    tags: ['Partial Funding', 'STEM'],
  },
  {
    title: 'Bolsa Eduardo Mondlane',
    institution: 'Governo de Moçambique',
    location: 'Moçambique',
    deadline: '28 Feb 2026',
    tags: ['Full Funding', 'Undergraduate'],
  },
  {
    title: 'DAAD Scholarship Programme',
    institution: 'German Academic Exchange Service',
    location: 'Germany',
    deadline: '15 Oct 2025',
    tags: ['Full Funding', 'Research'],
  },
]

export default function FeaturedScholarships() {
  return (
    <section className="w-full bg-gray-50/70 dark:bg-gray-900/50">
      <div className="max-w-[1250px] mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-sm font-bold text-nhonga-600 tracking-wide">
              Scholarships
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
              Featured Opportunities
            </h2>
          </div>
          <Button variant="outline" size="md" className="gap-2 rounded-lg shrink-0 group/btn">
            View All
            <HiArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {scholarships.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-gray-700/30 p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-nhonga-200/20 hover:border-nhonga-200/50 dark:hover:border-nhonga-800/40"
            >
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {s.institution}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <HiMapPin className="w-3.5 h-3.5" />
                    {s.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiCalendar className="w-3.5 h-3.5" />
                    {s.deadline}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-nhonga-100/60 dark:bg-nhonga-900/30 text-nhonga-700 dark:text-nhonga-400 border border-nhonga-200/40 dark:border-nhonga-800/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
