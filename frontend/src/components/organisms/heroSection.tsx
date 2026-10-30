import { motion, useReducedMotion } from 'framer-motion'
import heroImg from '../../assets/images/hero.png'

export default function HeroSection({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion()

  return (
    <section className={`relative w-full max-w-[1400px] mx-auto bg-white dark:bg-gray-950 flex flex-col ${className}`}>

      {/* ── Mobile layout (< sm) ── layered composition */}
      <div className="relative flex sm:hidden flex-col flex-1">
        {/* Title */}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-30 text-2xl font-normal leading-snug text-center text-gray-900 dark:text-gray-100 max-w-[260px] mx-auto pt-10"
        >
          The World&rsquo;s Best Professionals Are On
        </motion.h1>

        {/* Layered image + NHONGA text */}
        <div className="relative flex-1 overflow-hidden">
          {/* NHONGA behind image */}
          <div
            className="absolute inset-0 flex items-start justify-center select-none pointer-events-none z-0 -pt-2"
            aria-hidden="true"
          >
            <span className="font-montserrat font-bold text-[72px] tracking-normal text-nhonga-400 dark:text-nhonga-500 leading-[108%] whitespace-nowrap">
              NHONGA
            </span>
          </div>

          {/* Image */}
          <motion.img
            src={heroImg}
            alt="Professional on Nhonga"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 w-full h-full object-cover object-top"
          />

          {/* NHON in front, GA transparent */}
          <div
            className="absolute inset-0 flex items-start justify-center select-none pointer-events-none z-20 -pt-2"
            aria-hidden="true"
          >
            <span className="font-montserrat font-bold text-[72px] tracking-normal leading-[108%] whitespace-nowrap">
              <span className="text-nhonga-400 dark:text-nhonga-500">NHO</span>
              <span className="text-transparent">NGA</span>
            </span>
          </div>
        </div>

        {/* CTA floating over image */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute bottom-4 left-5 right-5 z-30 flex flex-col gap-1.5 bg-transparent backdrop-blur-sm border border-nhonga-500/40 rounded-xl p-2"
        >
          <a href="#" className="flex items-center justify-center py-2.5 text-sm font-semibold text-white bg-nhonga-500 rounded-lg hover:bg-nhonga-600 transition-colors">
            Hire a Professional
          </a>
          <a href="#" className="flex items-center justify-center py-2.5 text-sm font-semibold text-white border border-white/30 rounded-lg hover:border-white/60 transition-colors">
            Look For a Job
          </a>
        </motion.div>
      </div>

      {/* ── Tablet + Desktop layout (≥ sm) ── layered composition */}
      <div
        className="hidden sm:flex relative items-end justify-center flex-1"
      >
        {/* Subtitle */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute left-6 md:left-12 lg:left-16 top-[30%] md:top-[35%] z-30 max-w-[200px] md:max-w-[240px] lg:max-w-xs"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-normal leading-tight text-gray-900 dark:text-gray-100">
            The World&rsquo;s Best Professionals Are On
          </h1>
        </motion.div>

        {/* NHONGA behind image — reduced size, shifted up */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 translate-y-[12%]"
          aria-hidden="true"
        >
          <span className="font-montserrat font-bold text-[110px] md:text-[170px] lg:text-[210px] tracking-normal text-nhonga-400 dark:text-nhonga-500 leading-[108%] whitespace-nowrap">
            NHONGA
          </span>
        </div>

        {/* Hero image — bottom-aligned */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 flex justify-center"
        >
          <img
            src={heroImg}
            alt="Professional on Nhonga"
            className="h-[360px] md:h-[500px] lg:h-[600px] xl:h-[660px] w-auto object-contain"
          />
        </motion.div>

        {/* NHON in front of image, GA transparent */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-20 translate-y-[12%]"
          aria-hidden="true"
        >
          <span className="font-montserrat font-bold text-[110px] md:text-[170px] lg:text-[210px] tracking-normal leading-[108%] whitespace-nowrap">
            <span className="text-nhonga-400 dark:text-nhonga-500">NHON</span>
            <span className="text-transparent">GA</span>
          </span>
        </div>

        {/* CTA — floats over image, larger container, smaller buttons on lg */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-8 md:bottom-10 lg:bottom-12 left-0 right-0 z-30 flex justify-center"
        >
          <div className="inline-flex items-stretch bg-transparent backdrop-blur-sm border border-nhonga-500/40 rounded-full p-4 md:p-5 lg:p-6 gap-3">
            <a
              href="#"
              className="flex items-center justify-center px-7 md:px-8 lg:px-6 py-3 md:py-3.5 lg:py-2.5 text-sm lg:text-xs font-semibold text-white bg-nhonga-500 rounded-full hover:bg-nhonga-600 transition-colors"
            >
              Hire a Professional
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-7 md:px-8 lg:px-6 py-3 md:py-3.5 lg:py-2.5 text-sm lg:text-xs font-semibold text-white border border-white/30 rounded-full hover:border-white/60 transition-colors"
            >
              Look For a Job
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
