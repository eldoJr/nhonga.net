import { motion } from 'framer-motion'
import {
  HiCodeBracket,
  HiPaintBrush,
  HiChartBar,
  HiHeart,
  HiMegaphone,
  HiWrench,
  HiTruck,
  HiAcademicCap,
} from 'react-icons/hi2'

const categories = [
  { icon: HiCodeBracket, name: 'Technology', jobs: 480 },
  { icon: HiPaintBrush, name: 'Design', jobs: 320 },
  { icon: HiChartBar, name: 'Finance', jobs: 275 },
  { icon: HiHeart, name: 'Healthcare', jobs: 190 },
  { icon: HiMegaphone, name: 'Marketing', jobs: 340 },
  { icon: HiWrench, name: 'Engineering', jobs: 210 },
  { icon: HiTruck, name: 'Logistics', jobs: 145 },
  { icon: HiAcademicCap, name: 'Education', jobs: 160 },
]

export default function JobCategories() {
  return (
    <section className="w-full bg-gray-50/70 dark:bg-gray-900/50">
      <div className="max-w-[1250px] mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-bold text-nhonga-600 tracking-wide">
            Browse by Category
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
            Find jobs in your field
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group flex items-center gap-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-gray-700/30 p-5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-nhonga-200/20 hover:border-nhonga-200/50"
            >
              <div className="w-11 h-11 rounded-xl bg-nhonga-100/80 dark:bg-nhonga-900/40 flex items-center justify-center text-nhonga-600 dark:text-nhonga-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <c.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">{c.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{c.jobs} open roles</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
