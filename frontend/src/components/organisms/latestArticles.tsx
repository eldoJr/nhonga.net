import { motion } from 'framer-motion'
import { HiClock, HiArrowRight } from 'react-icons/hi2'
import Button from '../atoms/button'

const articles = [
  {
    title: 'Building a Personal Brand on Nhonga: A Step-by-Step Guide',
    category: 'Career Tips',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=240&fit=crop',
  },
  {
    title: 'Top 10 In-Demand Skills in Mozambique for 2025',
    category: 'Market Trends',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop',
  },
  {
    title: 'How to Write a CV That Gets You Hired',
    category: 'Career Tips',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=240&fit=crop',
  },
  {
    title: 'Freelancing in Africa: Opportunities and Challenges',
    category: 'Freelance',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=240&fit=crop',
  },
  {
    title: 'Networking Tips for Introverts: Making Connections That Count',
    category: 'Networking',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=400&h=240&fit=crop',
  },
  {
    title: 'The Rise of Remote Work in Southern Africa',
    category: 'Market Trends',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=240&fit=crop',
  },
]

export default function LatestArticles() {
  return (
    <section className="w-full bg-gray-50/70 dark:bg-gray-900/50">
      <div className="max-w-[1250px] mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-sm font-bold text-nhonga-600 tracking-wide">
              Latest
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
              Fresh reads for your growth
            </h2>
          </div>
          <Button variant="outline" size="md" className="gap-2 rounded-lg shrink-0 group/btn">
            All Articles
            <HiArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group rounded-2xl overflow-hidden bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-gray-700/30 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-nhonga-200/20 hover:border-nhonga-200/50"
            >
              <div className="relative h-[160px] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-nhonga-100/60 dark:bg-nhonga-900/30 text-nhonga-700 dark:text-nhonga-400 border border-nhonga-200/40 dark:border-nhonga-800/30">
                    {a.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <HiClock className="w-3 h-3" />
                    {a.readTime}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug line-clamp-2 group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors">
                  {a.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
