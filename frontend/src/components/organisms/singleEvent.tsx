import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiCalendarDays, HiMapPin, HiHeart } from 'react-icons/hi2'
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-nhonga-500 transition-colors mb-6 cursor-pointer"
        >
          <HiArrowRight className="w-3.5 h-3.5 rotate-180" />
          Back
        </button>

        <span className="text-xs font-bold uppercase tracking-widest text-nhonga-500 mb-3 block">
          {event.category}
        </span>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-snug mb-2">
          {event.title}
        </h1>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">by {event.author}</p>

        <div className="w-full rounded-2xl overflow-hidden mb-6 aspect-video">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col gap-1.5 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <HiCalendarDays className="w-4 h-4 shrink-0 text-nhonga-500" />
            <span>{event.date} &nbsp;·&nbsp; {event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <HiMapPin className="w-4 h-4 shrink-0 text-nhonga-500" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <HiHeart className="w-4 h-4 shrink-0 text-nhonga-500" />
            <span>{event.likes} likes</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
