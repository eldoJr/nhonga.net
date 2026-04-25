import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import TestimonialCard from '../molecules/testimonialCard'

/* ── Infinite scroll row ── */

interface ScrollRowProps {
  children: ReactNode
  reverse?: boolean
  pauseOnHover?: boolean
  repeat?: number
  className?: string
}

function ScrollRow({
  children,
  reverse = false,
  pauseOnHover = true,
  repeat = 3,
  className = '',
}: ScrollRowProps) {
  return (
    <div
      className={clsx(
        'pause-on-hover relative flex w-full overflow-hidden [--gap:12px] [--duration:30s]',
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={clsx(
            'flex shrink-0 gap-[--gap]',
            reverse ? 'animate-scroll-right' : 'animate-scroll-left',
            pauseOnHover && 'scroll-animated',
          )}
          style={{ animationPlayState: 'running' }}
        >
          {children}
        </div>
      ))}

      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 dark:from-gray-900 dark:via-transparent dark:to-gray-900" />
    </div>
  )
}

/* ── Data ── */

const testimonials = [
  {
    name: 'Ana Machel',
    handle: '@anamachel',
    image: 'https://i.pravatar.cc/100?img=1',
    description: 'Nhonga helped me land my dream job in just two weeks. The platform is incredibly intuitive.',
  },
  {
    name: 'Carlos Tembe',
    handle: '@carlostembe',
    image: 'https://i.pravatar.cc/100?img=3',
    description: 'As a recruiter, I found top talent faster than any other platform. Highly recommend.',
  },
  {
    name: 'Fatima Nunes',
    handle: '@fatimanunes',
    image: 'https://i.pravatar.cc/100?img=5',
    description: 'The scholarship section changed my life. I got accepted into a program I never thought possible.',
  },
  {
    name: 'David Mondlane',
    handle: '@davidmond',
    image: 'https://i.pravatar.cc/100?img=8',
    description: 'Networking on Nhonga connected me with mentors who shaped my entire career path.',
  },
  {
    name: 'Sofia Cossa',
    handle: '@sofiacossa',
    image: 'https://i.pravatar.cc/100?img=9',
    description: 'Clean design, fast results. I posted a job and had 50 qualified applicants in 48 hours.',
  },
  {
    name: 'Miguel Sitoe',
    handle: '@miguelsitoe',
    image: 'https://i.pravatar.cc/100?img=11',
    description: 'The AI matching is spot on. Every recommendation felt tailored to my skills and goals.',
  },
  {
    name: 'Lucia Chissano',
    handle: '@luciachissano',
    image: 'https://i.pravatar.cc/100?img=16',
    description: 'From internship to full-time — Nhonga was with me every step of the way.',
  },
  {
    name: 'Pedro Guebuza',
    handle: '@pedroguebuza',
    image: 'https://i.pravatar.cc/100?img=12',
    description: 'Best professional platform in Mozambique. Nothing else comes close.',
  },
]

/* ── Component ── */

export default function Testimonials() {
  return (
    <section className="w-full bg-gray-50/70 dark:bg-gray-900">
      <div className="max-w-[1250px] mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Loved by Professionals
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-lg mx-auto">
          See what our community has to say about Nhonga.
        </p>
      </motion.div>

      <div className="flex flex-col gap-4">
        <ScrollRow>
          {testimonials.slice(0, 4).map((t) => (
            <TestimonialCard key={t.handle} {...t} />
          ))}
        </ScrollRow>

        <ScrollRow reverse>
          {testimonials.slice(4).map((t) => (
            <TestimonialCard key={t.handle} {...t} />
          ))}
        </ScrollRow>

        <ScrollRow>
          {[...testimonials].reverse().slice(0, 4).map((t) => (
            <TestimonialCard key={t.handle + '-3'} {...t} />
          ))}
        </ScrollRow>
      </div>
      </div>
    </section>
  )
}
