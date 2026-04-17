import { motion } from 'framer-motion'
import { HiArrowRight, HiCheckBadge, HiBriefcase, HiUserGroup, HiAcademicCap } from 'react-icons/hi2'
import Button from '../atoms/button'
import iconWhite from '../../assets/icons/icon-b.svg'

const floatingStats = [
  { icon: HiBriefcase, label: '2,400+ Jobs', x: '8%', y: '18%', delay: 0 },
  { icon: HiUserGroup, label: '12K+ Pros', x: '55%', y: '8%', delay: 0.8 },
  { icon: HiAcademicCap, label: '300+ Bolsas', x: '30%', y: '72%', delay: 1.6 },
  { icon: HiCheckBadge, label: '98% Trust', x: '68%', y: '62%', delay: 2.4 },
]

export default function CtaSection() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 pt-8 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative overflow-hidden rounded-2xl border border-nhonga-200/50 dark:border-nhonga-800/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — visual side */}
          <div className="relative min-h-[280px] lg:min-h-[360px] bg-gradient-to-br from-nhonga-500 to-nhonga-700 overflow-hidden">
            {/* Repeating icon pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" aria-hidden="true">
              <defs>
                <pattern id="cta-icon-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <image href={iconWhite} x="16" y="16" width="48" height="48" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-icon-pattern)" />
            </svg>

            {/* Large centered watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <img src={iconWhite} alt="" className="w-36 lg:w-48 opacity-[0.06]" />
            </div>

            {/* Floating stat pills */}
            {floatingStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="absolute"
                style={{ left: stat.x, top: stat.y }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: stat.delay,
                  ease: 'easeInOut',
                }}
              >
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 shadow-lg">
                  <stat.icon className="w-4 h-4 text-white/90" />
                  <span className="text-xs font-semibold text-white whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Soft radial glow */}
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-nhonga-300/20 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right — content side */}
          <div className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl px-8 py-14 md:px-14 md:py-16 flex flex-col justify-center">
            <span className="text-sm font-bold text-nhonga-600 tracking-wide">
              Join Nhonga
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4 leading-tight">
              Your next opportunity is one step away.
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-md">
              Whether you're hiring top talent or building your career — thousands of professionals across Mozambique are already here.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-5 py-3 rounded-lg bg-gray-100/80 dark:bg-white/10 border border-gray-200/60 dark:border-white/15 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 text-sm outline-none focus:border-nhonga-400 focus:bg-white dark:focus:bg-white/15 transition-all duration-200"
              />
              <Button size="lg" className="gap-2 rounded-lg shrink-0 group/btn">
                Get Started
                <HiArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Free to join · No credit card required
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
