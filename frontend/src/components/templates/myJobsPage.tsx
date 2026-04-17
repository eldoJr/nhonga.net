import { motion } from 'framer-motion'
import { HiEye, HiUsers, HiPencilSquare, HiTrash } from 'react-icons/hi2'
import Button from '../atoms/button'

const myJobs = [
  { title: 'Senior Frontend Developer', status: 'Active', applicants: 24, views: 312, posted: '3 days ago' },
  { title: 'UX Designer', status: 'Active', applicants: 18, views: 198, posted: '1 week ago' },
  { title: 'Marketing Manager', status: 'Closed', applicants: 42, views: 520, posted: '3 weeks ago' },
]

export default function MyJobsPage() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-10"
      >
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Dashboard</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">My Jobs</h1>
        </div>
        <Button size="md" className="gap-2 rounded-lg">
          + Post New Job
        </Button>
      </motion.div>

      <div className="flex flex-col gap-4">
        {myJobs.map((job, i) => (
          <motion.div
            key={job.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-5"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">{job.title}</h3>
                <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${job.status === 'Active' ? 'bg-nhonga-100/60 text-nhonga-700 dark:bg-nhonga-900/30 dark:text-nhonga-400' : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'}`}>
                  {job.status}
                </span>
              </div>
              <p className="text-xs text-gray-400">Posted {job.posted}</p>
            </div>

            <div className="flex items-center gap-6 text-xs text-gray-500">
              <span className="flex items-center gap-1.5"><HiEye className="w-3.5 h-3.5" />{job.views} views</span>
              <span className="flex items-center gap-1.5"><HiUsers className="w-3.5 h-3.5" />{job.applicants} applicants</span>
            </div>

            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 hover:text-nhonga-600 hover:border-nhonga-400 transition-colors cursor-pointer">
                <HiPencilSquare className="w-3.5 h-3.5" />
              </button>
              <button className="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-400 transition-colors cursor-pointer">
                <HiTrash className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {myJobs.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg font-semibold mb-2">No jobs posted yet</p>
          <p className="text-sm">Create your first job listing to start finding talent.</p>
        </div>
      )}
    </section>
  )
}
