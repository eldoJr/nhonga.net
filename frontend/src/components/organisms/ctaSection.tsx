import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'

export default function CtaSection() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-nhonga-900 via-nhonga-800 to-nhonga-950 px-8 py-16 md:px-16 md:py-20"
      >
        {/* Orb 1 — top right, slow clockwise orbit */}
        <motion.div
          animate={{
            x: [60, -40, -80, 20, 60],
            y: [-40, 30, -20, -60, -40],
            scale: [1, 1.15, 0.95, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-10 right-[15%] w-64 h-64 rounded-full bg-nhonga-400/20 blur-3xl pointer-events-none"
        />

        {/* Orb 2 — bottom left, slower counter orbit */}
        <motion.div
          animate={{
            x: [-30, 50, 20, -60, -30],
            y: [20, -30, 40, -10, 20],
            scale: [1, 0.9, 1.2, 1.05, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-10 left-[10%] w-56 h-56 rounded-full bg-nhonga-300/15 blur-3xl pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-lg text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to Find Your Next Opportunity?
            </h2>
            <p className="text-nhonga-200/80 text-base md:text-lg leading-relaxed">
              Join thousands of professionals across Mozambique. Whether you're hiring or looking — Nhonga connects you to what matters.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-72 px-5 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm outline-none focus:border-nhonga-400/50 focus:bg-white/15 transition-all duration-200"
              />
              <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-nhonga-500 text-white text-sm font-semibold hover:bg-nhonga-400 active:bg-nhonga-600 transition-all duration-200 cursor-pointer group">
                Get Started
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            <p className="text-xs text-nhonga-300/50 mt-3 text-center sm:text-left">
              Free to join. No credit card required.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
