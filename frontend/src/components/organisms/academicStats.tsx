import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionVal = useMotionValue(0)
  const rounded = useTransform(motionVal, (v) => Math.round(v).toLocaleString())
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (isInView) animate(motionVal, value, { duration: 1.8, ease: 'easeOut' })
  }, [isInView, motionVal, value])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

const stats = [
  { value: 180, suffix: '+', label: 'Scholarships' },
  { value: 850, suffix: '+', label: 'Courses' },
  { value: 2400, suffix: '+', label: 'Books & Resources' },
  { value: 45, suffix: '+', label: 'Partner Institutions' },
]

export default function AcademicStats() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <span className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              <AnimatedNumber value={s.value} suffix={s.suffix} />
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
