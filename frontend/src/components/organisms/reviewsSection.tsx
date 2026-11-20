import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiStar } from 'react-icons/hi2'
import type { Review } from '../../data/reviews'

export type { Review }

interface Props {
  itemTitle: string
  itemType: string
  rating: number
  totalReviews: number
  distribution: { stars: number; pct: number }[]
  reviews: Review[]
}

const filters = ['Most recent', 'Highest rated', 'With photos']

function Stars({ count, size = 'sm' }: { count: number; size?: 'sm' | 'lg' }) {
  const sz = size === 'lg' ? 'w-7 h-7' : 'w-4 h-4'
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <HiStar key={s} className={`${sz} ${s <= count ? 'text-yellow-400' : 'text-gray-200 dark:text-gray-700'}`} />
      ))}
    </div>
  )
}

export default function ReviewsSection({ itemTitle, itemType, rating, totalReviews, distribution, reviews }: Props) {
  const [active, setActive] = useState('Most recent')
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <>
      {/* Search + Header */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pt-6 sm:pt-10 pb-8">
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">{itemTitle}</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white leading-tight">
            <span className="font-bold">{itemType} </span>
            <span className="font-bold text-nhonga-500">Reviews</span>
          </h1>
        </motion.div>
      </section>

      {/* Main */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-start"
        >
          {/* Left — score card */}
          <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-white/5">
            <p className="text-5xl font-bold text-gray-900 dark:text-white">{rating.toFixed(1)}</p>
            <Stars count={Math.round(rating)} size="lg" />
            <p className="text-sm text-gray-500 dark:text-gray-400">Based on {totalReviews.toLocaleString()} reviews</p>

            {/* Distribution bars */}
            <div className="flex flex-col gap-2">
              {distribution.map(({ stars, pct }) => (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-xs text-gray-600 dark:text-gray-400 w-2">{stars}</span>
                  <HiStar className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                  <div className="flex-1 h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <div className="h-full rounded-full bg-nhonga-500" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-xs text-gray-400 w-7 text-right">{pct}%</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate(`${pathname}/add`)}
              className="w-full py-3 rounded-2xl bg-[#06210D] text-sm font-semibold text-nhonga-400 hover:bg-nhonga-900 transition-colors cursor-pointer mt-2">
              Write a review
            </button>
          </div>

          {/* Right — filter + review list */}
          <div className="flex flex-col gap-4">
            {/* Filter tabs */}
            <div className="flex items-center gap-2 flex-wrap">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                    active === f
                      ? 'bg-[#06210D] text-nhonga-400'
                      : 'border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-nhonga-400'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Review cards */}
            <div className="flex flex-col gap-3">
              {reviews.map((r, i) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex flex-col gap-2 p-5 rounded-2xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-nhonga-100 dark:bg-nhonga-900/40 flex items-center justify-center text-sm font-semibold text-nhonga-600 dark:text-nhonga-400 shrink-0">
                        {r.author[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{r.author}</p>
                        <Stars count={r.rating} />
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 shrink-0">{r.ago}</span>
                  </div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{r.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{r.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
