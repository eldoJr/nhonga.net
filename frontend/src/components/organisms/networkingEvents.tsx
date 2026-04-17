import { motion } from 'framer-motion'
import { HiCalendar, HiMapPin, HiUserGroup, HiArrowRight } from 'react-icons/hi2'
import Button from '../atoms/button'

const events = [
  {
    title: 'Maputo Tech Summit 2025',
    date: '12 Aug 2025',
    location: 'Maputo, Mozambique',
    attendees: 420,
    tag: 'Technology',
  },
  {
    title: 'Women in Business Forum',
    date: '28 Sep 2025',
    location: 'Beira, Mozambique',
    attendees: 180,
    tag: 'Leadership',
  },
  {
    title: 'Creative Africa Meetup',
    date: '15 Oct 2025',
    location: 'Online',
    attendees: 650,
    tag: 'Design',
  },
]

export default function NetworkingEvents() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
      >
        <div>
          <span className="text-sm font-bold text-nhonga-600 tracking-wide">
            Events
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
            Upcoming networking events
          </h2>
        </div>
        <Button variant="outline" size="md" className="gap-2 rounded-lg shrink-0 group/btn">
          All Events
          <HiArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {events.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-white/5 backdrop-blur-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-nhonga-200/20 hover:border-nhonga-200/50"
          >
            {/* Color bar */}
            <div className="h-1.5 bg-gradient-to-r from-nhonga-400 to-nhonga-600" />

            <div className="p-6 flex flex-col gap-4">
              <span className="self-start px-3 py-1 text-xs font-medium rounded-full bg-nhonga-100/60 dark:bg-nhonga-900/30 text-nhonga-700 dark:text-nhonga-400 border border-nhonga-200/40 dark:border-nhonga-800/30">
                {e.tag}
              </span>

              <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors">
                {e.title}
              </h3>

              <div className="flex flex-col gap-2 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <HiCalendar className="w-3.5 h-3.5" />
                  {e.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <HiMapPin className="w-3.5 h-3.5" />
                  {e.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <HiUserGroup className="w-3.5 h-3.5" />
                  {e.attendees} attending
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
