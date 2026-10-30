import { useRef } from 'react'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiArrowRight, HiArrowUpRight } from 'react-icons/hi2'

const events = [
  {
    title: 'Neko Health Turned a Dreaded Blood Test Into an Experience People Want to Repeat',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
  },
  {
    title: "How Maputo's Creative Scene Is Redefining African Contemporary Art",
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&h=500&fit=crop',
  },
  {
    title: 'Tech Conferences Are Back — And They Look Nothing Like Before',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
  },
  {
    title: 'Sports Events Driving Youth Engagement Across Mozambique',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=500&fit=crop',
  },
  {
    title: 'Book Fairs Are Becoming Cultural Landmarks in Emerging Cities',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop',
  },
]

export default function EventsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(dir: 'left' | 'right') {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'left' ? -640 : 640, behavior: 'smooth' })
  }

  return (
    <section className="w-full pb-16 overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-5 sm:px-6">
        {/* Nav row */}
        <div className="flex items-center justify-end gap-2 mb-6">
          <button className="h-8 px-3 rounded-full bg-[#D9D9D9] text-xs font-medium text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer">
            Show All
          </button>
          <button
            onClick={() => scroll('left')}
            className="w-8 h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer"
          >
            <HiArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-8 h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer"
          >
            <HiArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            paddingLeft: 'max(20px, calc((100vw - 1250px) / 2 + 20px))',
            paddingRight: 'max(20px, calc((100vw - 1250px) / 2 + 20px))',
          }}
        >
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group shrink-0 w-[72vw] sm:w-[52vw] lg:w-[calc(46%-10px)] h-[320px] sm:h-[360px] lg:h-[380px] cursor-pointer flex flex-col rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-[#F4F4F4] dark:bg-white/5 hover:border-nhonga-300 dark:hover:border-nhonga-700 transition-all duration-300"
            >
              {/* Top: title + arrow */}
              <div className="flex items-start justify-between gap-3 p-4 sm:p-5">
                <h3 className="text-sm sm:text-base text-gray-900 dark:text-white leading-snug line-clamp-2">
                  {event.title}
                </h3>
                <div className="w-8 h-8 rounded-full bg-nhonga-500 flex items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                  <HiArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Image — with padding so it doesn't touch corners */}
              <div className="px-3 pb-3">
                <div className="h-[200px] sm:h-[240px] lg:h-[260px] w-full rounded-xl overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 lg:w-64 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-gray-950 dark:via-gray-950/80" />
      </div>
    </section>
  )
}
