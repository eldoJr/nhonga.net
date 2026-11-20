import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiArrowUpTray, HiInformationCircle, HiChevronDown } from 'react-icons/hi2'

const categories = ['Music', 'Films', 'Books', 'Art', 'Projects', 'Independent']
const cities = ['Maputo', 'Beira', 'Nampula', 'Quelimane', 'Tete', 'Pemba', 'Inhambane']

const inputCls = 'w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-nhonga-400 transition-colors appearance-none pr-10'
const labelCls = 'block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2'

export default function SubmitEventSection() {
  const navigate = useNavigate()
  const [visibility, setVisibility] = useState<'free' | 'featured'>('free')
  const [dragOver, setDragOver] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)

  function handleFile(file: File) {
    if (!file.type.startsWith('image/')) return
    setPreview(URL.createObjectURL(file))
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Share Your Work</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white leading-tight">
            <span className="font-light">Submit Your </span>
            <span className="font-bold text-nhonga-500">Project</span>
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
            <div>
              <label className={labelCls}>Project title</label>
              <input type="text" placeholder="e.g. Marrabenta Nova — EP" className={inputCls} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelCls}>Category</label>
                <div className="relative">
                  <select className={inputCls}>
                    <option value="">Select a category</option>
                    {categories.map((c) => <option key={c}>{c}</option>)}
                  </select>
                  <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div>
                <label className={labelCls}>City / Province</label>
                <div className="relative">
                  <select className={inputCls}>
                    {cities.map((c) => <option key={c}>{c}</option>)}
                  </select>
                  <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div>
              <label className={labelCls}>Description</label>
              <textarea
                rows={4}
                placeholder="Tell people what your project is about, who made it and why it matters..."
                className={`${inputCls} resize-none`}
              />
            </div>

            <div>
              <label className={labelCls}>Links (optional)</label>
              <input type="text" placeholder="YouTube, Spotify, portfolio or website link" className={inputCls} />
            </div>
          </form>

          {/* Right — cover + visibility + actions */}
          <div className="flex flex-col gap-6">
            {/* Cover image */}
            <div>
              <label className={labelCls}>Cover image</label>
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f) }}
                onClick={() => document.getElementById('cover-upload')?.click()}
                className={`relative w-full h-52 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${
                  dragOver
                    ? 'border-nhonga-500 bg-nhonga-500/10'
                    : 'border-nhonga-400 bg-nhonga-500/5 hover:bg-nhonga-500/10'
                }`}
              >
                {preview ? (
                  <img src={preview} alt="Cover preview" className="w-full h-full object-cover rounded-2xl" />
                ) : (
                  <>
                    <HiArrowUpTray className="w-6 h-6 text-nhonga-500" />
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Drag an image here or click to upload</p>
                    <p className="text-xs text-gray-400">JPG or PNG · max 5 MB</p>
                  </>
                )}
                <input
                  id="cover-upload"
                  type="file"
                  accept="image/jpeg,image/png"
                  className="hidden"
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
                />
              </div>
            </div>

            {/* Visibility */}
            <div>
              <label className={labelCls}>Visibility</label>
              <div className="grid grid-cols-2 gap-3">
                {(['free', 'featured'] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setVisibility(v)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-colors cursor-pointer ${
                      visibility === v
                        ? 'border-nhonga-500 bg-nhonga-500/10'
                        : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-white/5 hover:border-nhonga-400'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      visibility === v ? 'border-nhonga-500' : 'border-gray-400'
                    }`}>
                      {visibility === v && <span className="w-2 h-2 rounded-full bg-nhonga-500 block" />}
                    </span>
                    <span>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white capitalize">{v === 'free' ? 'Free' : 'Featured'}</p>
                      <p className="text-xs text-gray-400">{v === 'free' ? 'Standard listing' : '50 credits · 7 days on top'}</p>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Info note */}
            <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700">
              <HiInformationCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Every project is reviewed by our team before it is published (usually within 24h).
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
                Submit for review
              </button>
            </div>
          </div>
        </motion.div>


      </section>
    </>
  )
}
