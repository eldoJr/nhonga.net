import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiArrowUpTray, HiStar, HiInformationCircle } from 'react-icons/hi2'

interface Props {
  itemTitle: string
  itemType?: string
}

const inputCls = 'w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-nhonga-400 transition-colors'
const labelCls = 'block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2'

export default function AddReviewSection({ itemTitle }: Props) {
  const navigate = useNavigate()
  const [rating, setRating] = useState(4)
  const [hovered, setHovered] = useState(0)
  const [dragOver, setDragOver] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)

  function handleFile(file: File) {
    if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) return
    if (file.type.startsWith('image/')) setPreview(URL.createObjectURL(file))
  }

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
            <span className="font-light">Write a </span>
            <span className="font-bold text-nhonga-500">Review</span>
          </h1>
        </motion.div>
      </section>

      {/* Form */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-12"
        >
          {/* Left — fields */}
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            {/* Star rating */}
            <div>
              <label className={labelCls}>Your rating</label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onMouseEnter={() => setHovered(s)}
                    onMouseLeave={() => setHovered(0)}
                    onClick={() => setRating(s)}
                    className="cursor-pointer"
                  >
                    <HiStar className={`w-8 h-8 transition-colors ${s <= (hovered || rating) ? 'text-yellow-400' : 'text-gray-200 dark:text-gray-700'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={labelCls}>Title (required)</label>
              <input type="text" placeholder="Summarise your experience in a few words" className={inputCls} />
            </div>

            <div>
              <label className={labelCls}>Your review</label>
              <textarea
                rows={4}
                placeholder="What did you like? What could be better?"
                className={`${inputCls} resize-none`}
              />
            </div>

            <div>
              <label className={labelCls}>What's your public name? (required)</label>
              <input type="text" placeholder="e.g. Ana P." className={inputCls} />
            </div>
          </form>

          {/* Right — media upload + actions */}
          <div className="flex flex-col gap-4">
            <div>
              <label className={labelCls}>Share a video or photo</label>
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f) }}
                onClick={() => document.getElementById('review-upload')?.click()}
                className={`relative w-full h-52 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${
                  dragOver ? 'border-nhonga-500 bg-nhonga-500/10' : 'border-nhonga-400 bg-nhonga-500/5 hover:bg-nhonga-500/10'
                }`}
              >
                {preview ? (
                  <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-2xl" />
                ) : (
                  <>
                    <HiArrowUpTray className="w-6 h-6 text-nhonga-500" />
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Drag a video or image here or click to upload</p>
                    <p className="text-xs text-gray-400">JPG, PNG or MP4 · max 20 MB</p>
                  </>
                )}
                <input
                  id="review-upload"
                  type="file"
                  accept="image/jpeg,image/png,video/mp4"
                  className="hidden"
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
                />
              </div>
            </div>

            {/* Info note */}
            <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700">
              <HiInformationCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Reviews are public and moderated. Be honest and respectful — no personal contacts or offensive language.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-400 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button className="flex-1 py-3 rounded-2xl bg-[#06210D] text-sm font-semibold text-nhonga-400 hover:bg-nhonga-900 transition-colors cursor-pointer">
                Submit review
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
