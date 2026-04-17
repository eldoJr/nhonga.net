import { motion } from 'framer-motion'
import { HiUserPlus, HiMagnifyingGlass, HiRocketLaunch } from 'react-icons/hi2'

const steps = [
  {
    icon: HiUserPlus,
    title: 'Create Your Profile',
    description:
      'Sign up in seconds and build a professional profile that showcases your skills, experience, and goals.',
  },
  {
    icon: HiMagnifyingGlass,
    title: 'Discover Opportunities',
    description:
      'Browse jobs, scholarships, services, and connections — or let our smart matching find them for you.',
  },
  {
    icon: HiRocketLaunch,
    title: 'Grow Your Career',
    description:
      'Apply, connect, and collaborate. Whether hiring or job-seeking, Nhonga accelerates your next move.',
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-bold text-nhonga-600 tracking-wide">
          How It Works
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
          Three steps to your next opportunity
        </h2>
      </motion.div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {/* Connector line (desktop only) */}
        <div className="hidden md:block absolute top-10 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-nhonga-200 via-nhonga-400 to-nhonga-200 dark:from-nhonga-800 dark:via-nhonga-500 dark:to-nhonga-800" />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative flex flex-col items-center text-center"
          >
            {/* Step number + icon */}
            <div className="relative z-10 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-white dark:bg-gray-900 border border-nhonga-200/50 dark:border-nhonga-800/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex items-center justify-center">
                <step.icon className="w-7 h-7 text-nhonga-600 dark:text-nhonga-400" />
              </div>
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-nhonga-500 text-white text-xs font-bold flex items-center justify-center shadow-md">
                {i + 1}
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
