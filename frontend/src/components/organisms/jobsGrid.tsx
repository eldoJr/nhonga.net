import { motion } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import { jobs } from '../../data/jobs'

export default function JobsGrid() {
  const navigate = useNavigate()

  return (
    <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pb-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {jobs.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            onClick={() => navigate(`/jobs/${job.id}`)}
            className="group flex flex-col justify-between rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-[#F4F4F4] dark:bg-white/5 p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:border-nhonga-300 hover:shadow-lg hover:shadow-nhonga-200/20 dark:hover:border-nhonga-700"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shrink-0" style={{ backgroundColor: job.color }} />
                  <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate max-w-[80px] sm:max-w-none">{job.company}</span>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-nhonga-500 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity shrink-0">
                  <HiArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
              </div>

              <h3 className="text-sm sm:text-base text-gray-900 dark:text-white mb-1 sm:mb-2 line-clamp-2">
                {job.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 hidden sm:block">
                {job.description}
              </p>
            </div>

            {/* Save button */}
            <div className="mt-3 sm:mt-5 flex justify-center">
              <button
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-white border border-gray-200 dark:border-gray-700 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-nhonga-400 hover:text-nhonga-600 dark:hover:text-nhonga-400 transition-colors cursor-pointer"
              >
                Save Job
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
