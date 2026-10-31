import { useRef } from 'react'
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
    const amount = scrollRef.current.offsetWidth * 0.8
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="w-full pb-16 sm:pb-20">
      {/* Nav row */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 flex items-center justify-end gap-2 mb-4 sm:mb-6">
        <button className="h-7 sm:h-8 px-3 rounded-full bg-[#D9D9D9] text-xs font-medium text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer">
          Show All
        </button>
        <button onClick={() => scroll('left')} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer">
          <HiArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </button>
        <button onClick={() => scroll('right')} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer">
          <HiArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </button>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 overflow-x-auto touch-pan-x pl-4 sm:pl-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {events.map((event) => (
          <div
            key={event.title}
            className="group shrink-0 w-[78vw] sm:w-[55vw] lg:w-[580px] cursor-pointer flex flex-col rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-[#F4F4F4] dark:bg-white/5 hover:border-nhonga-300 dark:hover:border-nhonga-700 transition-all duration-300"
          >
            {/* Top: title + arrow */}
            <div className="flex items-start justify-between gap-2 p-3 sm:p-4 lg:p-5">
              <h3 className="text-xs sm:text-sm lg:text-base text-gray-900 dark:text-white leading-snug line-clamp-2">
                {event.title}
              </h3>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-nhonga-500 flex items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                <HiArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>
            </div>

            {/* Image */}
            <div className="px-3 pb-3">
              <div className="w-full h-[44vw] sm:h-[28vw] lg:h-[280px] rounded-xl overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        ))}
        {/* Spacer */}
        <div className="shrink-0 w-4 sm:w-6" />
      </div>
    </section>
  )
}
