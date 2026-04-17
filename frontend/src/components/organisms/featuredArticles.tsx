import { motion } from 'framer-motion'
import { HiClock, HiArrowUpRight } from 'react-icons/hi2'

const featured = {
  title: 'How Mozambique\u2019s Tech Scene Is Creating a New Generation of Leaders',
  excerpt: 'From Maputo to Nampula, young professionals are building startups, launching platforms, and reshaping the country\u2019s digital future.',
  image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
  category: 'Technology',
  readTime: '8 min read',
  author: 'Ana Machel',
}

const side = [
  {
    title: '5 Skills Every Recruiter in Africa Needs in 2025',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=260&fit=crop',
    category: 'Careers',
    readTime: '5 min read',
  },
  {
    title: 'Scholarship Guide: How to Fund Your Studies Abroad',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=400&h=260&fit=crop',
    category: 'Academic',
    readTime: '6 min read',
  },
]

export default function FeaturedArticles() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Main featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
          className="group lg:col-span-3 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-white/5 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-nhonga-200/20 hover:border-nhonga-200/50"
        >
          <div className="relative h-[280px] md:h-[340px] overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-nhonga-500 text-white">
              {featured.category}
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
              <span>{featured.author}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <HiClock className="w-3.5 h-3.5" />
                {featured.readTime}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors">
              {featured.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
              {featured.excerpt}
            </p>
          </div>
        </motion.div>

        {/* Side articles */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {side.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group flex-1 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-white/5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-nhonga-200/20 hover:border-nhonga-200/50"
            >
              <div className="relative h-[140px] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300">
                  {article.category}
                </span>
              </div>
              <div className="p-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <HiClock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-nhonga-100 dark:group-hover:bg-nhonga-900/40 transition-colors">
                  <HiArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-nhonga-600 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
