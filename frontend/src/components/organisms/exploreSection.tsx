import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import exploreImg from '../../assets/images/explore.png'

const avatars = [
  'https://i.pravatar.cc/80?img=3',
  'https://i.pravatar.cc/80?img=8',
  'https://i.pravatar.cc/80?img=5',
  'https://i.pravatar.cc/80?img=12',
  'https://i.pravatar.cc/80?img=16',
]

const links = [
  { label: 'Academic', href: '/academic' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Newsletter', href: '/newsletter' },
  { label: 'Networking', href: '/networking' },
  { label: 'Hire', href: '/hire/about' },
]

export default function ExploreSection({ className = '' }: { className?: string }) {
  return (
    <section className={`w-full flex-1 flex flex-col bg-white dark:bg-gray-950 overflow-hidden ${className}`}>
      <div className="w-full max-w-[1400px] mx-auto px-6 flex-1 flex flex-col justify-center">



        <div className="relative flex flex-col lg:flex-row items-start justify-between gap-10 flex-1">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8 justify-center self-stretch max-w-xs lg:max-w-none"
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight whitespace-nowrap">
              <span className="text-gray-900 dark:text-white">Create, Work, Earn </span>
              <span className="text-nhonga-500">Nhonga</span>
            </h1>

            <div className="flex flex-row items-center gap-3 whitespace-nowrap">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 whitespace-nowrap">
                Explore
              </span>
              <nav className="flex flex-row flex-nowrap gap-2">
                {links.map((l, i) => (
                  <motion.div
                    key={l.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      to={l.href}
                      className="px-5 py-2 rounded-full border border-nhonga-500/50 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-nhonga-500 hover:text-nhonga-500 dark:hover:text-nhonga-400 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Right — badge + image */}
          <div className="hidden lg:block relative flex-1 self-stretch">
            {/* Badge top-right */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-0 right-0"
            >
              <div className="rounded-2xl bg-nhonga-100/60 dark:bg-nhonga-900/30 border border-nhonga-200/50 dark:border-nhonga-800/40 px-5 py-4 shadow-sm">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  10k + Avaliations on Nhonga
                </p>
                <div className="flex items-center">
                  {avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-9 h-9 rounded-full border-2 border-white dark:border-gray-900 object-cover"
                      style={{ marginLeft: i > 0 ? -8 : 0, zIndex: avatars.length - i }}
                    />
                  ))}
                  <span className="w-9 h-9 rounded-full bg-nhonga-500 text-white text-xs font-bold flex items-center justify-center -ml-2 border-2 border-white dark:border-gray-900">
                    +
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Image flush to bottom */}
            <motion.img
              src={exploreImg}
              alt="Explore Nhonga"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bottom-0 right-0 h-[500px] md:h-[600px] lg:h-[700px] w-auto object-contain object-bottom"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
