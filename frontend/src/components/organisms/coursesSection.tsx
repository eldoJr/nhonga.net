import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiArrowLeft, HiClock } from 'react-icons/hi2'
import { courses } from '../../data/courses'

const categories = ['All', 'Design', 'Marketing', 'Technology', 'Business', 'Languages', 'Photography', 'Finance']

function CourseCard({ course }: { course: typeof courses[0] }) {
  return (
    <Link to={`/academic/courses/${course.id}`} className="group shrink-0 w-[70vw] sm:w-[44vw] lg:w-[300px] cursor-pointer">
      <div className="relative w-full h-[44vw] sm:h-[28vw] lg:h-[200px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-3">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate">{course.title}</h3>
      <p className="text-xs text-gray-400 mt-0.5 mb-2">by {course.author}</p>
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1">
          <HiClock className="w-3.5 h-3.5 shrink-0" />
          {course.lessons} lessons · {course.hours}h
        </span>
        <span className={`font-semibold ${course.price === 'Free' ? 'text-nhonga-500' : 'text-gray-900 dark:text-white'}`}>
          {course.price}
        </span>
      </div>
    </Link>
  )
}

export default function CoursesSection() {
  const [active, setActive] = useState('All')
  const scrollRef1 = useRef<HTMLDivElement>(null)
  const scrollRef2 = useRef<HTMLDivElement>(null)

  function scroll(ref: React.RefObject<HTMLDivElement | null>, dir: 'left' | 'right') {
    if (!ref.current) return
    ref.current.scrollBy({ left: dir === 'left' ? -ref.current.offsetWidth * 0.8 : ref.current.offsetWidth * 0.8, behavior: 'smooth' })
  }

  const filtered = active === 'All' ? courses : courses.filter((c) => c.category === active)

  return (
    <>
      {/* Search + Categories */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pt-6 sm:pt-10 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-6"
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
                    : 'border-nhonga-500 text-nhonga-500 hover:bg-nhonga-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Trending Courses */}
      <section className="w-full pb-10 sm:pb-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 mb-4 sm:mb-6">
          <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Trending Courses</span>
          <div className="flex items-center gap-2">
            <button className="h-7 sm:h-8 px-3 rounded-full bg-[#D9D9D9] text-xs font-medium text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer">Show All</button>
            <button onClick={() => scroll(scrollRef1, 'left')} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer">
              <HiArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
            <button onClick={() => scroll(scrollRef1, 'right')} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer">
              <HiArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef1}
          className="flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto touch-pan-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="shrink-0 w-[max(1.25rem,calc((100vw-1400px)/2))] sm:w-[max(1.5rem,calc((100vw-1400px)/2))]" />
          {filtered.map((course) => <CourseCard key={course.id} course={course} />)}
          <div className="shrink-0 w-4 sm:w-6" />
        </div>
      </section>

      {/* Best Sellers */}
      <section className="w-full pb-10 sm:pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 mb-4 sm:mb-6">
          <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Best Sellers</span>
          <div className="flex items-center gap-2">
            <button className="h-7 sm:h-8 px-3 rounded-full bg-[#D9D9D9] text-xs font-medium text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer">Show All</button>
            <button onClick={() => scroll(scrollRef2, 'left')} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer">
              <HiArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
            <button onClick={() => scroll(scrollRef2, 'right')} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer">
              <HiArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef2}
          className="flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto touch-pan-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="shrink-0 w-[max(1.25rem,calc((100vw-1400px)/2))] sm:w-[max(1.5rem,calc((100vw-1400px)/2))]" />
          {[...courses].reverse().map((course) => <CourseCard key={course.id + '-bs'} course={course} />)}
          <div className="shrink-0 w-4 sm:w-6" />
        </div>
      </section>
    </>
  )
}
