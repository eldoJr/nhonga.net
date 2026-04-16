import { motion } from 'framer-motion'
import {
  HiBriefcase,
  HiAcademicCap,
  HiUserGroup,
  HiGlobeAlt,
  HiSparkles,
  HiRocketLaunch,
} from 'react-icons/hi2'
import BentoCard from '../molecules/bentoCard'

const features = [
  {
    title: 'Job Opportunities',
    description:
      'Discover thousands of professional opportunities across Mozambique and beyond.',
    visual: (
      <div className="flex flex-wrap gap-2">
        {['Engineering', 'Design', 'Marketing', 'Finance', 'Health', 'Tech'].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 text-xs font-medium rounded-full border border-gray-200 text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: 'Academic Growth',
    description:
      'Access scholarships, courses, and academic events to boost your career.',
    visual: (
      <div className="flex items-center justify-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-nhonga-100 flex items-center justify-center text-nhonga-600">
          <HiAcademicCap className="w-5 h-5" />
        </div>
        <div className="w-10 h-10 rounded-xl bg-nhonga-100 flex items-center justify-center text-nhonga-600">
          <HiBriefcase className="w-5 h-5" />
        </div>
        <div className="w-10 h-10 rounded-xl bg-nhonga-100 flex items-center justify-center text-nhonga-600">
          <HiSparkles className="w-5 h-5" />
        </div>
      </div>
    ),
  },
  {
    title: 'Networking',
    description:
      'Connect with professionals, mentors, and industry leaders in your field.',
    visual: (
      <div className="grid grid-cols-3 gap-3">
        {[HiUserGroup, HiGlobeAlt, HiBriefcase, HiSparkles, HiAcademicCap, HiRocketLaunch].map(
          (Icon, i) => (
            <div
              key={i}
              className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400"
            >
              <Icon className="w-4 h-4" />
            </div>
          ),
        )}
      </div>
    ),
  },
  {
    title: 'Global Reach',
    description:
      'Explore international opportunities and expand your professional horizons.',
    visual: (
      <div className="flex flex-col gap-2 w-full">
        {['Mozambique', 'Portugal', 'Brazil', 'South Africa'].map((country) => (
          <div key={country} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-nhonga-500" />
            <span className="text-xs text-gray-500">{country}</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'AI-Powered Matching',
    description:
      'Smart algorithms that connect the right talent with the right opportunities.',
    visual: (
      <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3 w-full">
        <span className="text-xs text-gray-400 font-mono">$ match</span>
        <span className="w-px h-4 bg-nhonga-500 animate-pulse" />
      </div>
    ),
  },
  {
    title: 'Growing Fast',
    description:
      'Thousands of professionals already trust Nhonga to find their next opportunity.',
    visual: (
      <div className="flex flex-col items-start w-full">
        <span className="text-4xl font-black text-gray-900">12K+</span>
        <div className="w-full h-12 mt-2 relative">
          <svg viewBox="0 0 200 40" className="w-full h-full">
            <path
              d="M0 35 Q50 30 80 20 T160 8 T200 2"
              fill="none"
              stroke="#6AE589"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    ),
  },
]

export default function BentoGrid() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Everything You Need
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {features.map((feature, i) => {
          const spans = [
            'md:col-span-5',
            'md:col-span-3',
            'md:col-span-4',
            'md:col-span-4',
            'md:col-span-5',
            'md:col-span-3',
          ]
          return (
            <BentoCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              visual={feature.visual}
              index={i}
              className={`h-full ${spans[i]}`}
            />
          )
        })}
      </div>
    </section>
  )
}
