import { useRef } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'

const people = [
  {
    name: 'Amara Voss',
    role: 'Architect',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop&crop=faces',
  },
  {
    name: 'Darian Cole',
    role: 'Pilot',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces',
  },
  {
    name: 'Lina Seraphin',
    role: 'Fashion Designer',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&h=500&fit=crop&crop=faces',
  },
  {
    name: 'Nadia Karim',
    role: 'Investigative Journalist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=faces',
  },
  {
    name: 'Tomás Sitoe',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=faces',
  },
  {
    name: 'Celina Machava',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop&crop=faces',
  },
]

export default function PeopleCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(dir: 'left' | 'right') {
    if (!scrollRef.current) return
    const amount = scrollRef.current.offsetWidth * 0.8
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="w-full pb-10 sm:pb-16 lg:pb-24">
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
        className="flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto touch-pan-x pl-4 sm:pl-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {people.map((person) => (
          <div key={person.name} className="group shrink-0 w-[44vw] sm:w-[220px] lg:w-[280px] cursor-pointer">
            <div className="relative h-[56vw] sm:h-[280px] lg:h-[360px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-2">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <button className="w-[80%] py-2 rounded-full bg-nhonga-500 text-white text-xs sm:text-sm font-semibold hover:bg-nhonga-600 transition-colors">
                  See Profile
                </button>
                <button className="w-[80%] py-2 rounded-full border border-white text-white text-xs sm:text-sm font-semibold hover:bg-white/10 transition-colors">
                  Follow
                </button>
              </div>
            </div>
            <h3 className="text-xs sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white truncate">
              {person.name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">
              {person.role}
            </p>
          </div>
        ))}
        {/* Spacer to allow last card to scroll into view */}
        <div className="shrink-0 w-4 sm:w-6" />
      </div>
    </section>
  )
}
