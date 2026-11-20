import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { jobs } from '../../data/jobs'

type Tab = 'proposal' | 'question'

export default function ApplyJob() {
  const { id } = useParams()
  const navigate = useNavigate()
  const job = jobs.find((j) => j.id === id)

  const [tab, setTab] = useState<Tab>('proposal')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('')
  const [price, setPrice] = useState('')
  const [question, setQuestion] = useState('')

  if (!job) {
    return (
      <div className="w-full max-w-2xl mx-auto px-5 pt-20 pb-24 text-center">
        <p className="text-gray-500 dark:text-gray-400 mb-4">Job not found.</p>
        <button onClick={() => navigate(-1)} className="text-nhonga-500 text-sm font-medium hover:underline cursor-pointer">← Back</button>
      </div>
    )
  }

  return (
    <section className="w-full max-w-[860px] mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-24">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
        className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-8"
      >
        Apply to this job
      </motion.h1>

      {/* Tab switcher */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.08 }}
        className="flex items-center w-full rounded-full bg-gray-100 dark:bg-white/5 p-1 mb-8"
      >
        <button
          onClick={() => setTab('proposal')}
          className={`flex-1 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
            tab === 'proposal'
              ? 'bg-nhonga-400 text-[#0A2E14]'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
          }`}
        >
          Send a Proposal
        </button>
        <button
          onClick={() => setTab('question')}
          className={`flex-1 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
            tab === 'question'
              ? 'bg-nhonga-400 text-[#0A2E14]'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
          }`}
        >
          Ask a question
        </button>
      </motion.div>

      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
      >
        {tab === 'proposal' ? (
          <div className="flex flex-col gap-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">Send a proposal to apply to this job</p>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-800 dark:text-gray-200">Description</label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Provide a detailed job description of the job you can both refer to it during the process"
                className="w-full rounded-2xl bg-gray-100 dark:bg-white/5 border border-transparent focus:border-nhonga-400 outline-none px-5 py-4 text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-600 resize-none transition-colors"
              />
            </div>

            {/* Personal message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-800 dark:text-gray-200">Personal message to the client</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Explain why you are the best for this job"
                className="w-full rounded-2xl bg-gray-100 dark:bg-white/5 border border-transparent focus:border-nhonga-400 outline-none px-5 py-4 text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-600 resize-none transition-colors"
              />
            </div>

            {/* Price */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-800 dark:text-gray-200">Price</label>
              <div className="relative w-full rounded-2xl bg-gray-100 dark:bg-white/5 border border-transparent focus-within:border-nhonga-400 transition-colors overflow-hidden">
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="00$"
                  className="w-full bg-transparent outline-none px-5 py-8 text-4xl font-bold text-center text-gray-300 dark:text-gray-600 placeholder-gray-300 dark:placeholder-gray-700 tracking-tight"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-2">
              <button className="px-8 py-3 rounded-full bg-[#0A2E14] text-nhonga-400 text-sm font-bold hover:bg-nhonga-900 transition-colors cursor-pointer">
                Apply
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">Ask {job.company} a question about this role</p>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-800 dark:text-gray-200">Your question</label>
              <textarea
                rows={5}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="What would you like to know about this role?"
                className="w-full rounded-2xl bg-gray-100 dark:bg-white/5 border border-transparent focus:border-nhonga-400 outline-none px-5 py-4 text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-600 resize-none transition-colors"
              />
            </div>

            <button className="self-start px-8 py-3 rounded-full bg-[#0A2E14] text-nhonga-400 text-sm font-bold hover:bg-nhonga-900 transition-colors cursor-pointer">
              Send
            </button>
          </div>
        )}
      </motion.div>
    </section>
  )
}
