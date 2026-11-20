import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiArrowLeft, HiBookmark } from 'react-icons/hi2'
import { jobs } from '../../data/jobs'

export default function SingleJob() {
  const { id } = useParams()
  const navigate = useNavigate()
  const job = jobs.find((j) => j.id === id)

  if (!job) {
    return (
      <div className="w-full max-w-2xl mx-auto px-5 pt-20 pb-24 text-center">
        <p className="text-gray-500 dark:text-gray-400 mb-4">Job not found.</p>
        <button onClick={() => navigate(-1)} className="text-nhonga-500 text-sm font-medium hover:underline cursor-pointer">← Back to Jobs</button>
      </div>
    )
  }

  return (
    <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 pt-6 sm:pt-10 pb-20">

      {/* Search bar */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex justify-center mb-8">
        <div className="flex items-center gap-2 w-full max-w-lg bg-[#06210D] rounded-2xl px-2.5 py-1.5">
          <input type="text" placeholder="Search Nhonga..." className="flex-1 bg-transparent text-sm text-gray-200 placeholder-nhonga-500 outline-none px-2 text-center" />
          <button className="flex items-center justify-center w-10 h-7 rounded-2xl bg-nhonga-500 hover:bg-nhonga-600 transition-colors shrink-0 cursor-pointer">
            <HiArrowRight className="w-4 h-4 text-gray-950" />
          </button>
        </div>
      </motion.div>

      {/* Back */}
      <motion.button
        initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}
        onClick={() => navigate(-1)}
        className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-nhonga-500 transition-colors mb-6 cursor-pointer"
      >
        <HiArrowLeft className="w-3.5 h-3.5" /> Back to jobs
      </motion.button>

      {/* Title row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05 }}
        className="flex items-start justify-between gap-4 mb-2"
      >
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-none tracking-tight mb-3">
            {job.title}
          </h1>
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full shrink-0" style={{ backgroundColor: job.color }} />
            <span className="text-base font-semibold text-gray-700 dark:text-gray-300">{job.company}</span>
          </div>
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 shrink-0 pt-2 hidden sm:block">
          Job Details
        </span>
      </motion.div>

      {/* Divider */}
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="origin-left w-full h-px bg-gray-200 dark:bg-gray-800 my-8" />

      {/* Body */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start"
      >
        {/* Left — prose */}
        <div className="flex flex-col gap-10">

          {/* About */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">About the role</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {job.description}
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Bring your ideas to life through thoughtful creative work. Collaborate with a team, explore new approaches and help shape projects from the first idea to the final delivery.
            </p>
          </div>

          {/* What you'll do */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">What you'll do</h2>
            <ul className="flex flex-col gap-2.5">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  <span className="text-nhonga-500 font-bold shrink-0 mt-0.5">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Let your work speak */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Let your work speak</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Share a little about yourself and a portfolio or examples of your work when you apply.
            </p>
          </div>

          {/* Requirements */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Requirements</h2>
            <ul className="flex flex-col gap-2.5">
              {job.requirements.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  <span className="text-nhonga-500 font-bold shrink-0 mt-0.5">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — sticky card */}
        <div className="lg:sticky lg:top-24">
          <div className="rounded-3xl bg-[#0A2E14] dark:bg-[#0A2E14] p-7 flex flex-col gap-5">

            {/* Compensation */}
            <div>
              <p className="text-sm text-gray-400 mb-1">Compensation</p>
              <p className="text-4xl font-bold text-nhonga-400 leading-none">{job.salary}</p>
            </div>

            <div className="w-full h-px bg-white/10" />

            {/* CTA copy */}
            <div>
              <p className="text-base font-bold text-white mb-1">Ready for your next step?</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Introduce yourself to {job.company} and share what you can bring to the role.
              </p>
            </div>

            {/* Apply */}
            <button onClick={() => navigate(`/jobs/${job.id}/apply`)} className="w-full py-3.5 rounded-full bg-nhonga-400 hover:bg-nhonga-300 text-[#0A2E14] text-sm font-bold transition-colors cursor-pointer">
              Apply now
            </button>

            {/* Save */}
            <button className="w-full py-3.5 rounded-full border border-white/20 bg-white text-gray-800 text-sm font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer">
              <HiBookmark className="w-4 h-4" /> Save Job
            </button>

            <p className="text-xs text-gray-500 text-center">Not ready? Save this job for later.</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
