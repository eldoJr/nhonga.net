import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { HiBriefcase, HiUserGroup, HiBuildingOffice2, HiAcademicCap } from 'react-icons/hi2'

interface StatProps {
  icon: React.ElementType
  value: number
  suffix: string
  label: string
  delay: number
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionVal = useMotionValue(0)
  const rounded = useTransform(motionVal, (v) => Math.round(v).toLocaleString())
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (isInView) {
      animate(motionVal, value, { duration: 1.8, ease: 'easeOut' })
    }
  }, [isInView, motionVal, value])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

function Stat({ icon: Icon, value, suffix, label, delay }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center gap-3"
    >
      <div className="w-12 h-12 rounded-xl bg-nhonga-100/80 dark:bg-nhonga-900/40 flex items-center justify-center text-nhonga-600 dark:text-nhonga-400">
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
        <AnimatedNumber value={value} suffix={suffix} />
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {label}
      </span>
    </motion.div>
  )
}

const stats = [
  { icon: HiUserGroup, value: 12000, suffix: '+', label: 'Professionals', delay: 0 },
  { icon: HiBriefcase, value: 2400, suffix: '+', label: 'Jobs Posted', delay: 0.1 },
  { icon: HiBuildingOffice2, value: 350, suffix: '+', label: 'Companies', delay: 0.2 },
  { icon: HiAcademicCap, value: 180, suffix: '+', label: 'Scholarships', delay: 0.3 },
]

export default function Stats() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="text-sm font-bold text-nhonga-600 tracking-wide">
          Nhonga in Numbers
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
          Growing every day across Mozambique
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}
