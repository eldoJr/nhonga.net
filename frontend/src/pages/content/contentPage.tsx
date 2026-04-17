import { useState } from 'react'
import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import {
  HiOutlineMagnifyingGlass,
  HiOutlineClock,
  HiOutlineHeart,
  HiOutlineChatBubbleOvalLeft,
  HiOutlinePencilSquare,
  HiOutlineArrowUpRight,
} from 'react-icons/hi2'
import Avatar from '../../components/atoms/avatar'
import WidgetCard from '../../components/molecules/widgetCard'

const categories = ['All', 'Career Tips', 'Technology', 'Market Trends', 'Freelance', 'Networking', 'Academic'] as const

const articles = [
  {
    id: '1',
    title: 'How Mozambique\'s Tech Scene Is Creating a New Generation of Leaders',
    excerpt: 'From Maputo to Nampula, young professionals are building startups and reshaping the digital future.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop',
    category: 'Technology',
    readTime: '8 min',
    author: { name: 'Ana Machel', avatar: 'https://i.pravatar.cc/100?img=1' },
    likes: 234,
    comments: 45,
    featured: true,
  },
  {
    id: '2',
    title: 'Top 10 In-Demand Skills in Mozambique for 2025',
    excerpt: 'The job market is shifting fast. Here are the skills employers are looking for right now.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop',
    category: 'Market Trends',
    readTime: '6 min',
    author: { name: 'Carlos Tembe', avatar: 'https://i.pravatar.cc/100?img=3' },
    likes: 189,
    comments: 32,
  },
  {
    id: '3',
    title: 'Building a Personal Brand on Nhonga: A Step-by-Step Guide',
    excerpt: 'Your profile is your first impression. Make it count with these proven strategies.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=240&fit=crop',
    category: 'Career Tips',
    readTime: '4 min',
    author: { name: 'Fatima Nunes', avatar: 'https://i.pravatar.cc/100?img=5' },
    likes: 156,
    comments: 28,
  },
  {
    id: '4',
    title: 'Freelancing in Africa: Opportunities and Challenges',
    excerpt: 'The gig economy is booming across the continent. Here\'s what you need to know.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=240&fit=crop',
    category: 'Freelance',
    readTime: '7 min',
    author: { name: 'David Mondlane', avatar: 'https://i.pravatar.cc/100?img=8' },
    likes: 98,
    comments: 15,
  },
  {
    id: '5',
    title: 'Networking Tips for Introverts: Making Connections That Count',
    excerpt: 'You don\'t need to be the loudest in the room to build a powerful network.',
    image: 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=400&h=240&fit=crop',
    category: 'Networking',
    readTime: '4 min',
    author: { name: 'Sofia Cossa', avatar: 'https://i.pravatar.cc/100?img=9' },
    likes: 112,
    comments: 19,
  },
  {
    id: '6',
    title: 'Scholarship Guide: How to Fund Your Studies Abroad',
    excerpt: 'A comprehensive guide to finding and winning scholarships for Mozambican students.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=400&h=240&fit=crop',
    category: 'Academic',
    readTime: '10 min',
    author: { name: 'Lucia Chissano', avatar: 'https://i.pravatar.cc/100?img=16' },
    likes: 287,
    comments: 56,
  },
]

const trending = articles.slice().sort((a, b) => b.likes - a.likes).slice(0, 4)

const topics = [
  { name: 'Career Tips', count: 48 },
  { name: 'Technology', count: 36 },
  { name: 'Market Trends', count: 24 },
  { name: 'Freelance', count: 18 },
  { name: 'Networking', count: 15 },
  { name: 'Academic', count: 12 },
]

export default function ContentPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [search, setSearch] = useState('')

  const featured = articles.find((a) => a.featured)!
  const rest = articles.filter((a) => !a.featured)
  const filtered = activeCategory === 'All' ? rest : rest.filter((a) => a.category === activeCategory)

  return (
    <div className="flex gap-6">
      <div className="flex-1 min-w-0 space-y-4">
        {/* Search */}
        <div className="relative">
          <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles, topics…"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-[13px] bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 text-gray-800 dark:text-gray-200 placeholder-gray-400 outline-none focus:border-nhonga-400 dark:focus:border-nhonga-600 transition-colors"
          />
        </div>

        {/* Featured article */}
        <div className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 hover:border-nhonga-300 dark:hover:border-nhonga-700 transition-all cursor-pointer">
          <div className="relative h-[200px] overflow-hidden">
            <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-nhonga-500 text-white">
              Featured
            </span>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <Avatar name={featured.author.name} src={featured.author.avatar} size="sm" />
              <span className="text-[11px] text-gray-500">{featured.author.name}</span>
              <span className="text-[11px] text-gray-400">·</span>
              <span className="flex items-center gap-0.5 text-[11px] text-gray-400"><HiOutlineClock className="w-3 h-3" />{featured.readTime}</span>
            </div>
            <h2 className="text-[16px] font-bold text-gray-900 dark:text-white group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors leading-snug">
              {featured.title}
            </h2>
            <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1.5 line-clamp-2">{featured.excerpt}</p>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                'px-3 py-1.5 rounded-lg text-[12px] font-medium whitespace-nowrap transition-colors cursor-pointer',
                activeCategory === cat
                  ? 'bg-nhonga-500 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200/70 dark:border-gray-800/70 hover:border-gray-300 dark:hover:border-gray-700',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((article) => (
            <div
              key={article.id}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 hover:border-nhonga-300 dark:hover:border-nhonga-700 transition-all cursor-pointer"
            >
              <div className="relative h-[140px] overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-600 dark:text-gray-300">
                  {article.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-[13px] font-semibold text-gray-900 dark:text-white group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <Avatar name={article.author.name} src={article.author.avatar} size="sm" />
                    <div>
                      <p className="text-[11px] font-medium text-gray-700 dark:text-gray-300">{article.author.name}</p>
                      <p className="text-[10px] text-gray-400 flex items-center gap-0.5"><HiOutlineClock className="w-2.5 h-2.5" />{article.readTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 text-[10px] text-gray-400">
                    <span className="flex items-center gap-0.5"><HiOutlineHeart className="w-3 h-3" />{article.likes}</span>
                    <span className="flex items-center gap-0.5"><HiOutlineChatBubbleOvalLeft className="w-3 h-3" />{article.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="hidden lg:flex flex-col gap-4 w-[280px] shrink-0">
        {/* Write CTA */}
        <div className="rounded-2xl bg-gradient-to-br from-nhonga-500 to-nhonga-600 p-5 text-white">
          <HiOutlinePencilSquare className="w-8 h-8 mb-3 opacity-80" />
          <p className="text-[14px] font-semibold mb-1">Share your knowledge</p>
          <p className="text-[11px] text-white/70 mb-4">Write an article and reach thousands of professionals.</p>
          <Link
            to="/app/content/write"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-nhonga-600 text-[12px] font-semibold hover:bg-white/90 transition-colors"
          >
            Write Article <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Topics */}
        <WidgetCard title="Topics">
          <div className="space-y-2">
            {topics.map((t) => (
              <button
                key={t.name}
                onClick={() => setActiveCategory(t.name)}
                className={clsx(
                  'w-full flex items-center justify-between py-1 text-[12px] transition-colors cursor-pointer',
                  activeCategory === t.name
                    ? 'text-nhonga-600 dark:text-nhonga-400 font-semibold'
                    : 'text-gray-600 dark:text-gray-400 hover:text-nhonga-600 dark:hover:text-nhonga-400',
                )}
              >
                <span>{t.name}</span>
                <span className="text-[10px] text-gray-400 bg-gray-100 dark:bg-white/[0.04] px-1.5 py-0.5 rounded-full">{t.count}</span>
              </button>
            ))}
          </div>
        </WidgetCard>

        {/* Trending */}
        <WidgetCard title="Trending Articles">
          <div className="space-y-3">
            {trending.map((a, i) => (
              <div key={a.id} className="flex items-start gap-2.5 group cursor-pointer">
                <span className="text-[16px] font-bold text-gray-200 dark:text-gray-700 leading-none shrink-0 w-5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors line-clamp-2 leading-snug">
                    {a.title}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{a.likes} likes · {a.readTime}</p>
                </div>
              </div>
            ))}
          </div>
        </WidgetCard>
      </div>
    </div>
  )
}
