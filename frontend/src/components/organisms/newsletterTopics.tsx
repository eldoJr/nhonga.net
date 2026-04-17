import { motion } from 'framer-motion'

const topics = [
  'Career Tips',
  'Market Trends',
  'Freelance',
  'Networking',
  'Technology',
  'Academic',
  'Leadership',
  'Entrepreneurship',
  'Remote Work',
  'Personal Branding',
  'Interview Prep',
  'Mozambique',
]

export default function NewsletterTopics() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <span className="text-sm font-bold text-nhonga-600 tracking-wide">
          Browse by Topic
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
          What are you interested in?
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-wrap gap-3"
      >
        {topics.map((topic, i) => (
          <motion.button
            key={topic}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            whileHover={{ scale: 1.05 }}
            className="px-5 py-2.5 rounded-full text-sm font-semibold border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-white dark:bg-white/5 hover:border-nhonga-400 hover:text-nhonga-600 hover:bg-nhonga-50 dark:hover:bg-nhonga-900/20 dark:hover:text-nhonga-400 transition-all duration-200 cursor-pointer"
          >
            {topic}
          </motion.button>
        ))}
      </motion.div>
    </section>
  )
}
