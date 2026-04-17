import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi2'
import { clsx } from 'clsx'

const faqs = [
  {
    q: 'Is Nhonga free to use?',
    a: 'Yes — creating a profile, browsing jobs, and applying is completely free. Premium features for recruiters and businesses are available with flexible plans.',
  },
  {
    q: 'Who can join Nhonga?',
    a: 'Anyone in Mozambique or abroad looking for professional opportunities, academic growth, or business connections. Whether you\'re a student, freelancer, or enterprise — Nhonga is for you.',
  },
  {
    q: 'How does the AI matching work?',
    a: 'Our algorithm analyzes your profile, skills, and preferences to surface the most relevant jobs, scholarships, and connections — so you spend less time searching and more time growing.',
  },
  {
    q: 'Can companies post jobs on Nhonga?',
    a: 'Absolutely. Companies can create a business profile, post unlimited job listings, and access our talent pool with advanced filtering and recruitment tools.',
  },
  {
    q: 'What types of opportunities are available?',
    a: 'Full-time jobs, internships, freelance gigs, scholarships, academic programs, business partnerships, and professional networking — all in one platform.',
  },
]

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      className={clsx(
        'rounded-2xl border transition-colors duration-200',
        open
          ? 'border-nhonga-200/50 dark:border-nhonga-800/40 bg-white/60 dark:bg-white/5'
          : 'border-gray-200/60 dark:border-gray-800/60 bg-transparent',
      )}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
      >
        <span className="text-sm font-semibold text-gray-900 dark:text-white">{q}</span>
        <HiChevronDown
          className={clsx(
            'w-5 h-5 shrink-0 text-gray-400 transition-transform duration-200',
            open && 'rotate-180 text-nhonga-500',
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="w-full bg-gray-50/70 dark:bg-gray-900/50">
      <div className="max-w-[1250px] mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-bold text-nhonga-600 tracking-wide">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
            Questions? We've got answers.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <FaqItem
                q={faq.q}
                a={faq.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
