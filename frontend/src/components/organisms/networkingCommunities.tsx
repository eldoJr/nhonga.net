import { motion } from 'framer-motion'
import {
  HiCodeBracket,
  HiPaintBrush,
  HiChartBar,
  HiHeart,
  HiBuildingOffice2,
  HiWrench,
  HiScale,
  HiMusicalNote,
} from 'react-icons/hi2'

const communities = [
  { icon: HiCodeBracket, name: 'Tech & Engineering', members: '3.2K' },
  { icon: HiPaintBrush, name: 'Design & Creative', members: '1.8K' },
  { icon: HiChartBar, name: 'Finance & Business', members: '2.1K' },
  { icon: HiHeart, name: 'Health & Medicine', members: '1.4K' },
  { icon: HiBuildingOffice2, name: 'Real Estate', members: '960' },
  { icon: HiWrench, name: 'Trades & Services', members: '1.1K' },
  { icon: HiScale, name: 'Law & Governance', members: '780' },
  { icon: HiMusicalNote, name: 'Arts & Media', members: '1.5K' },
]

export default function NetworkingCommunities() {
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
            Communities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
            Find your industry, find your people
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {communities.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group flex flex-col items-center text-center gap-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-gray-700/30 p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-nhonga-200/20 hover:border-nhonga-200/50 dark:hover:border-nhonga-800/40"
            >
              <div className="w-12 h-12 rounded-xl bg-nhonga-100/80 dark:bg-nhonga-900/40 flex items-center justify-center text-nhonga-600 dark:text-nhonga-400 group-hover:scale-110 transition-transform duration-300">
                <c.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                  {c.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{c.members} members</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
