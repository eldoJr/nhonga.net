import { motion } from 'framer-motion'
import { HiArrowUpRight, HiBookmark } from 'react-icons/hi2'

const jobs = [
  {
    company: 'GOLO',
    logo: 'https://ui-avatars.com/api/?name=GO&background=E8553D&color=fff&bold=true&size=80',
    title: 'Creative Director',
    description: 'Hiring a Creative Director to shape stories, lead ideas, and drive consistent creativity.',
  },
  {
    company: 'Social Sherpa',
    logo: 'https://ui-avatars.com/api/?name=SS&background=2D5F4E&color=fff&bold=true&size=80',
    title: 'Developer with Ux/Ui Skills',
    description: 'We are seeking a highly skilled Full-Stack Developer with strong ux/ui design capabilities.',
  },
  {
    company: 'Markennzoworldwide',
    logo: 'https://ui-avatars.com/api/?name=MW&background=1A1A2E&color=fff&bold=true&size=80',
    title: 'Graphic Designer',
    description: 'We are seeking a highly creative and detail oriented Senior Graphic Designer & Video Editor.',
  },
  {
    company: 'Drumstick Design',
    logo: 'https://ui-avatars.com/api/?name=DD&background=D94F4F&color=fff&bold=true&size=80',
    title: 'Video Editor Cum Motion Designer',
    description: 'Looking for a talented Video Editor with motion design skills for creative campaigns.',
  },
  {
    company: 'Genpact',
    logo: 'https://ui-avatars.com/api/?name=GP&background=0066CC&color=fff&bold=true&size=80',
    title: 'Art Director',
    description: 'We are looking for a highly skilled Art Director with 8-12 years of experience.',
  },
  {
    company: 'Insenses',
    logo: 'https://ui-avatars.com/api/?name=IN&background=E91E8C&color=fff&bold=true&size=80',
    title: 'Brand Designer',
    description: 'We are hiring a brand designer for social brand, and experimental touchpoint.',
  },
]

export default function JobsGrid() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {jobs.map((job, i) => (
          <motion.div
            key={job.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group flex flex-col justify-between rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-[#F4F4F4] dark:bg-white/5 p-6 min-h-[260px] cursor-pointer transition-all duration-300 hover:border-nhonga-300 hover:shadow-lg hover:shadow-nhonga-200/20 dark:hover:border-nhonga-700"
          >
            {/* Header: logo + company + arrow */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {job.company}
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-nhonga-500 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <HiArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Job info */}
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                {job.description}
              </p>
            </div>

            {/* Save button */}
            <div className="mt-6 flex justify-center">
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-nhonga-400 hover:text-nhonga-600 dark:hover:text-nhonga-400 transition-colors cursor-pointer">
                <HiBookmark className="w-4 h-4" />
                Save Job
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
