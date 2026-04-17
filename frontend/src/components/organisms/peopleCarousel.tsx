import { useRef } from 'react'
import { motion } from 'framer-motion'
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
    const amount = 340
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 pb-20">
      {/* Nav arrows */}
      <div className="flex items-center justify-end gap-2 mb-6">
        <button
          onClick={() => scroll('left')}
          className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:border-nhonga-400 hover:text-nhonga-600 transition-colors cursor-pointer"
        >
          <HiArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:border-nhonga-400 hover:text-nhonga-600 transition-colors cursor-pointer"
        >
          <HiArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Carousel */}
      <div className="relative -mx-6">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth px-6"
          style={{ scrollbarWidth: 'none' }}
        >
          {people.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group shrink-0 w-[300px] cursor-pointer"
            >
              <div className="relative h-[380px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {person.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                {person.role}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-gray-950 dark:via-gray-950/80" />
      </div>
    </section>
  )
}
