import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiArrowLeft, HiPlus } from 'react-icons/hi2'

const categories = ['All', 'Fiction', 'Non-Fiction', 'Fantasy', 'Psychology', 'Business', 'Self-Help', 'Art & Design']

const books = [
  { title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help', price: 'MT 450', cover: 'https://covers.openlibrary.org/b/id/10527843-L.jpg' },
  { title: 'Deep Work', author: 'Cal Newport', genre: 'Self-Help', price: 'MT 380', cover: 'https://covers.openlibrary.org/b/id/8739161-L.jpg' },
  { title: 'The Lean Startup', author: 'Eric Ries', genre: 'Business', price: 'MT 420', cover: 'https://covers.openlibrary.org/b/id/8739174-L.jpg' },
  { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', genre: 'Psychology', price: 'MT 500', cover: 'https://covers.openlibrary.org/b/id/8739166-L.jpg' },
  { title: 'Zero to One', author: 'Peter Thiel', genre: 'Business', price: 'MT 390', cover: 'https://covers.openlibrary.org/b/id/8739170-L.jpg' },
  { title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction', price: 'MT 320', cover: 'https://covers.openlibrary.org/b/id/8739176-L.jpg' },
  { title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'Non-Fiction', price: 'MT 480', cover: 'https://covers.openlibrary.org/b/id/8739180-L.jpg' },
  { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', genre: 'Business', price: 'MT 350', cover: 'https://covers.openlibrary.org/b/id/8739182-L.jpg' },
]

function BookCard({ book }: { book: typeof books[0] }) {
  return (
    <div className="group shrink-0 w-[70vw] sm:w-[44vw] lg:w-[300px] cursor-pointer">
      <div className="relative h-[44vw] sm:h-[28vw] lg:h-[200px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-2">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate">{book.title}</h3>
      <p className="text-xs font-medium text-nhonga-500 mt-0.5">{book.price}</p>
    </div>
  )
}

export default function BooksSection() {
  const [active, setActive] = useState('All')
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollRef2 = useRef<HTMLDivElement>(null)

  function scroll(ref: React.RefObject<HTMLDivElement>, dir: 'left' | 'right') {
    if (!ref.current) return
    const amount = ref.current.offsetWidth * 0.8
    ref.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  const filtered = active === 'All' ? books : books.filter((b) => b.genre === active)

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
              placeholder="Search books..."
              className="flex-1 bg-transparent text-sm text-gray-200 placeholder-nhonga-500 outline-none px-2 text-center"
            />
            <button className="flex items-center justify-center w-10 h-7 rounded-2xl bg-nhonga-500 hover:bg-nhonga-600 transition-colors shrink-0">
              <HiArrowRight className="w-4 h-4 text-gray-950" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
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
          </div>
          <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-nhonga-400 shrink-0 cursor-pointer" style={{ backgroundColor: '#06210D' }}>
            <HiPlus className="w-3 h-3" /> Upload a Book
          </button>
        </motion.div>
      </section>

      {/* Trending */}
      <section className="w-full pb-10 sm:pb-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 mb-4 sm:mb-6">
          <span className="text-base font-bold text-gray-900 dark:text-white">Trending</span>
          <div className="flex items-center gap-2">
            <button className="h-7 sm:h-8 px-3 rounded-full bg-[#D9D9D9] text-xs font-medium text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer">Show All</button>
            <button onClick={() => scroll(scrollRef, 'left')} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer">
              <HiArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
            <button onClick={() => scroll(scrollRef, 'right')} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer">
              <HiArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto touch-pan-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="shrink-0 w-[max(1.25rem,calc((100vw-1400px)/2))] sm:w-[max(1.5rem,calc((100vw-1400px)/2))]" />
          {filtered.map((book) => <BookCard key={book.title} book={book} />)}
          <div className="shrink-0 w-4 sm:w-6" />
        </div>
      </section>

      {/* Best Sellers */}
      <section className="w-full pb-10 sm:pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 mb-4 sm:mb-6">
          <span className="text-base font-bold text-gray-900 dark:text-white">Best Sellers</span>
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
          {[...books].reverse().map((book) => <BookCard key={book.title + '-bs'} book={book} />)}
          <div className="shrink-0 w-4 sm:w-6" />
        </div>
      </section>
    </>
  )
}
