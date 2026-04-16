import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { type ReactNode } from 'react'

interface BentoCardProps {
  title: string
  description: string
  visual?: ReactNode
  className?: string
  index?: number
}

export default function BentoCard({
  title,
  description,
  visual,
  className = '',
  index = 0,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={clsx(
        'group relative rounded-2xl overflow-hidden cursor-pointer',
        'bg-white/60 dark:bg-white/5 backdrop-blur-xl',
        'border border-white/40 dark:border-white/10',
        'shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)]',
        'transition-all duration-300',
        'hover:shadow-xl hover:border-nhonga-200/50 dark:hover:border-nhonga-500/20',
        'flex flex-col',
        className,
      )}
    >
      {/* Visual area */}
      {visual && (
        <div className="relative w-full h-44 flex items-center justify-center px-6 pt-6 overflow-hidden">
          {visual}
        </div>
      )}

      {/* Text content */}
      <div className="px-6 pb-6 pt-5 mt-auto">
        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
