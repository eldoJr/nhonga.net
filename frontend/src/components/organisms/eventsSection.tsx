import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiHeart, HiPlus } from 'react-icons/hi2'
import { HiOutlineHeart } from 'react-icons/hi2'
import { events } from '../../data/events'
import CreatorBanner from '../molecules/creatorBanner'

const categories = ['All', 'Projects', 'Films', 'Books', 'Music', 'Art', 'Independent']

function EventCard({ event, index }: { event: typeof events[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link to={`/events/${event.id}`} className="group flex flex-col gap-2 cursor-pointer">
        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="inline-flex self-start px-2.5 py-0.5 rounded-full bg-nhonga-500/15 text-nhonga-600 dark:text-nhonga-400 text-xs font-semibold">
          {event.category}
        </span>
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white leading-snug line-clamp-2 group-hover:text-nhonga-500 transition-colors">
          {event.title}
        </h3>
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>by {event.author}</span>
          <span className="flex items-center gap-1">
            <HiHeart className="w-3.5 h-3.5 text-nhonga-500" />
            {event.likes}
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default function EventsSection() {
  const [active, setActive] = useState('All')
  const navigate = useNavigate()

  const filtered = active === 'All' ? events : events.filter((e) => e.category === active)

  return (
    <>
      {/* Search + Hero */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pt-6 sm:pt-10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 w-full max-w-lg bg-[#06210D] rounded-2xl px-2.5 py-1.5">
            <input
              type="text"
              placeholder="Search Nhonga..."
              className="flex-1 bg-transparent text-sm text-gray-200 placeholder-nhonga-500 outline-none px-2 text-center"
            />
            <button className="flex items-center justify-center w-10 h-7 rounded-2xl bg-nhonga-500 hover:bg-nhonga-600 transition-colors shrink-0 cursor-pointer">
              <HiArrowRight className="w-4 h-4 text-gray-950" />
            </button>
          </div>
        </motion.div>

        {/* Title row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Discover Projects</p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white leading-tight">
              <span className="font-light">Share Your Work With </span>
              <span className="font-bold text-nhonga-500">Nhonga</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-nhonga-500 hover:text-nhonga-500 transition-colors cursor-pointer">
              <HiOutlineHeart className="w-4 h-4" /> Favorites
            </button>
            <button onClick={() => navigate('/events/submit')} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#06210D] text-sm font-medium text-nhonga-400 hover:bg-nhonga-900 transition-colors cursor-pointer">
              <HiPlus className="w-4 h-4" /> Submit Project
            </button>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center gap-2 sm:gap-3 flex-wrap"
        >
          <span className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 shrink-0">Categories</span>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border text-xs font-medium transition-colors cursor-pointer ${
                  active === cat
                    ? 'border-nhonga-500 bg-nhonga-500 text-white'
                    : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-nhonga-500 hover:text-nhonga-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Trending grid */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pb-10 sm:pb-14">
        <div className="flex items-center justify-between mb-5">
          <span className="text-base font-bold text-gray-900 dark:text-white">Trending this week</span>
          <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-nhonga-500 transition-colors cursor-pointer">
            Show all
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {filtered.slice(0, 4).map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </section>

      {/* Creator banner */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pb-16 sm:pb-24">
        <CreatorBanner />
      </section>
    </>
  )
}
