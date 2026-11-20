import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiArrowLeft, HiBookOpen, HiLanguage, HiCheckCircle, HiStar } from 'react-icons/hi2'
import { books } from '../../data/books'

const avatars = [
  'https://i.pravatar.cc/80?img=3',
  'https://i.pravatar.cc/80?img=8',
  'https://i.pravatar.cc/80?img=5',
  'https://i.pravatar.cc/80?img=12',
]

export default function SingleBook() {
  const { id } = useParams()
  const navigate = useNavigate()
  const book = books.find((b) => b.id === id)

  if (!book) {
    return (
      <div className="w-full max-w-2xl mx-auto px-5 pt-20 pb-24 text-center">
        <p className="text-gray-500 dark:text-gray-400 mb-4">Book not found.</p>
        <button onClick={() => navigate(-1)} className="text-nhonga-500 text-sm font-medium hover:underline cursor-pointer">← Back to Books</button>
      </div>
    )
  }

  return (
    <>
      {/* Search bar */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pt-6 sm:pt-10 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-6"
        >
          <div className="flex items-center gap-2 w-full max-w-lg bg-[#06210D] rounded-2xl px-2.5 py-1.5">
            <input type="text" placeholder="Search Nhonga..." className="flex-1 bg-transparent text-sm text-gray-200 placeholder-nhonga-500 outline-none px-2 text-center" />
            <button className="flex items-center justify-center w-10 h-7 rounded-2xl bg-nhonga-500 hover:bg-nhonga-600 transition-colors shrink-0 cursor-pointer">
              <HiArrowRight className="w-4 h-4 text-gray-950" />
            </button>
          </div>
        </motion.div>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="flex items-center gap-2 flex-wrap mb-4"
        >
          <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-xs text-gray-400 hover:text-nhonga-500 transition-colors cursor-pointer">
            <HiArrowLeft className="w-3.5 h-3.5" /> Books
          </button>
          <span className="text-gray-300 dark:text-gray-600">/</span>
          <span className="px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-300">{book.genre}</span>
        </motion.div>

        {/* Title + author */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-snug mb-1">{book.title}</h1>
          <p className="text-sm text-gray-400">by {book.author}</p>
        </motion.div>
      </section>

      {/* Main content */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          {/* Top: cover + right panel */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_420px] gap-8 lg:gap-12 items-stretch">
            {/* Cover */}
            <div className="w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 h-full flex items-center justify-center p-8">
              <img src={book.cover} alt={book.title} className="h-full max-h-[420px] w-auto object-contain drop-shadow-xl" />
            </div>

            {/* Right panel */}
            <div className="flex flex-col gap-4">
              {/* Price */}
              <p className="text-3xl font-bold text-nhonga-500">{book.price}</p>

              {/* Meta */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiBookOpen className="w-4 h-4 shrink-0 text-gray-400" />
                  <span>{book.pages} pages</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiLanguage className="w-4 h-4 shrink-0 text-gray-400" />
                  <span>{book.language}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  {[1,2,3,4,5].map((s) => <HiStar key={s} className={`w-4 h-4 ${s <= 4 ? 'text-yellow-400' : 'text-gray-200 dark:text-gray-700'}`} />)}
                  <span className="ml-1 text-xs text-gray-400">4.6 · 832 reviews</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{book.description}</p>

              {/* Buy */}
              <button onClick={() => navigate(`/academic/books/${book.id}/pay`)} className="w-full py-3 rounded-3xl bg-[#06210D] text-sm font-semibold text-nhonga-400 hover:bg-nhonga-900 transition-colors cursor-pointer">
                Buy book
              </button>

              {/* Add to cart */}
              <button className="w-full py-3 rounded-3xl border border-gray-900 dark:border-white text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
                Add to Cart
              </button>

              {/* Reviews link */}
              <button
                onClick={() => navigate(`/academic/books/${book.id}/reviews`)}
                className="text-sm text-gray-400 hover:text-nhonga-500 transition-colors cursor-pointer text-center"
              >
                View all reviews
              </button>

              {/* Testimonials */}
              <div className="flex flex-col items-center gap-3 px-4 py-5 rounded-2xl bg-gray-50 dark:bg-white/5">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">832 Reader Reviews</p>
                <div className="flex items-center">
                  {avatars.map((src, i) => (
                    <img key={i} src={src} alt="" className="w-9 h-9 rounded-full border-2 border-white dark:border-gray-900 object-cover" style={{ marginLeft: i > 0 ? -8 : 0, zIndex: avatars.length - i }} />
                  ))}
                  <span className="w-9 h-9 rounded-full bg-nhonga-500 text-white text-xs font-bold flex items-center justify-center -ml-2 border-2 border-white dark:border-gray-900 cursor-pointer" style={{ zIndex: avatars.length + 1 }}>+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: What you'll learn */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">What you'll learn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {book.learns.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <HiCheckCircle className="w-4 h-4 text-nhonga-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
