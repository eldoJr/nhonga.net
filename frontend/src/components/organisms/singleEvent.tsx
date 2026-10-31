import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiCalendarDays, HiMapPin } from 'react-icons/hi2'
import { events } from '../../data/events'

export default function SingleEvent() {
  const { id } = useParams()
  const navigate = useNavigate()
  const event = events.find((e) => e.id === id)

  if (!event) {
    return (
      <div className="w-full max-w-2xl mx-auto px-5 pt-20 pb-24 text-center">
        <p className="text-gray-500 dark:text-gray-400 mb-4">Event not found.</p>
        <Link to="/events" className="text-nhonga-500 text-sm font-medium hover:underline">
          ← Back to Events
        </Link>
      </div>
    )
  }

  return (
    <section className="w-full max-w-2xl mx-auto px-5 sm:px-6 pt-5 sm:pt-8 pb-16 sm:pb-24">
      {/* Search bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 w-full max-w-md mx-auto"
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

      {/* Content column */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Category badge */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 dark:text-gray-500 hover:text-nhonga-500 dark:hover:text-nhonga-400 transition-colors mb-6 cursor-pointer"
        >
          <HiArrowRight className="w-3.5 h-3.5 rotate-180" />
          Back
        </button>

        {/* Category badge */}
        <span className="text-xs font-bold uppercase tracking-widest text-nhonga-500 mb-3 block">
          {event.category}
        </span>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-snug text-justify mb-6">
          {event.title}
        </h1>

        {/* Image */}
        <div className="w-full rounded-2xl overflow-hidden mb-6 aspect-video">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Date / time / location */}
        <div className="flex flex-col gap-1.5 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <HiCalendarDays className="w-4 h-4 shrink-0 text-nhonga-500" />
            <span>{event.date} &nbsp;·&nbsp; {event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <HiMapPin className="w-4 h-4 shrink-0 text-nhonga-500" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Body content */}
        <div className="flex flex-col gap-5">
          {event.content.map((para, i) => (
            <p key={i} className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
