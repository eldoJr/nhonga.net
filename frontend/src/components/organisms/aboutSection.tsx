import { motion } from 'framer-motion'
import { HiBriefcase, HiAcademicCap, HiUserGroup } from 'react-icons/hi2'

const features = [
  {
    icon: <HiBriefcase className="w-6 h-6" />,
    title: 'Professional Opportunities',
    description:
      'Find jobs, internships, and freelance gigs tailored to your skills across Mozambique and beyond.',
  },
  {
    icon: <HiAcademicCap className="w-6 h-6" />,
    title: 'Academic Growth',
    description:
      'Discover scholarships, courses, research programs, and academic events to accelerate your career.',
  },
  {
    icon: <HiUserGroup className="w-6 h-6" />,
    title: 'Meaningful Networking',
    description:
      'Connect with professionals, mentors, and companies that align with your goals and ambitions.',
  },
]

export default function AboutSection() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <span className="text-sm font-bold text-nhonga-600 tracking-wide">
          What is Nhonga?
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mt-3 max-w-3xl leading-tight">
          <span className="font-bold">Nhonga</span>
          <span className="font-light"> is the platform that connects talent to opportunity in Mozambique.</span>
        </h2>
      </motion.div>

      {/* Feature grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col gap-4 rounded-2xl p-6 cursor-pointer bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/40 dark:border-gray-700/30 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-nhonga-200/30 dark:hover:shadow-nhonga-500/5"
          >
            <div className="w-12 h-12 rounded-xl bg-nhonga-100/80 dark:bg-nhonga-900/40 flex items-center justify-center text-nhonga-600 dark:text-nhonga-400 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
