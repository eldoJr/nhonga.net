import { useState } from 'react'
import { clsx } from 'clsx'
import {
  HiOutlineMagnifyingGlass,
  HiOutlineMapPin,
  HiOutlineStar,
  HiStar,
  HiOutlineChatBubbleLeftRight,
  HiOutlineArrowUpRight,
  HiOutlineAdjustmentsHorizontal,
} from 'react-icons/hi2'
import Avatar from '../../components/atoms/avatar'
import WidgetCard from '../../components/molecules/widgetCard'

const categories = ['All', 'Development', 'Design', 'Marketing', 'Writing', 'Finance', 'Consulting'] as const

const talents = [
  {
    id: '1', name: 'Miguel Sitoe', headline: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/100?img=11',
    location: 'Maputo', rate: '2,500 MZN/hr', rating: 4.9, reviews: 47, category: 'Development',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'], available: true,
  },
  {
    id: '2', name: 'Maria Tembe', headline: 'Brand & Graphic Designer', avatar: 'https://i.pravatar.cc/100?img=20',
    location: 'Maputo', rate: '1,800 MZN/hr', rating: 4.8, reviews: 32, category: 'Design',
    skills: ['Figma', 'Illustrator', 'Branding', 'UI/UX'], available: true,
  },
  {
    id: '3', name: 'Pedro Guebuza', headline: 'Data Scientist & Analyst', avatar: 'https://i.pravatar.cc/100?img=12',
    location: 'Remote', rate: '3,000 MZN/hr', rating: 5.0, reviews: 18, category: 'Development',
    skills: ['Python', 'Machine Learning', 'SQL', 'Power BI'], available: false,
  },
  {
    id: '4', name: 'Teresa Nhaca', headline: 'Financial Consultant', avatar: 'https://i.pravatar.cc/100?img=25',
    location: 'Maputo', rate: '2,200 MZN/hr', rating: 4.7, reviews: 23, category: 'Finance',
    skills: ['Accounting', 'Tax Planning', 'Auditing', 'Excel'], available: true,
  },
  {
    id: '5', name: 'Ana Machel', headline: 'UX Designer & Researcher', avatar: 'https://i.pravatar.cc/100?img=1',
    location: 'Maputo', rate: '2,800 MZN/hr', rating: 4.9, reviews: 56, category: 'Design',
    skills: ['User Research', 'Figma', 'Prototyping', 'Design Systems'], available: true,
  },
  {
    id: '6', name: 'Carlos Tembe', headline: 'Digital Marketing Strategist', avatar: 'https://i.pravatar.cc/100?img=3',
    location: 'Remote', rate: '2,000 MZN/hr', rating: 4.6, reviews: 29, category: 'Marketing',
    skills: ['SEO', 'Google Ads', 'Social Media', 'Analytics'], available: true,
  },
  {
    id: '7', name: 'Fatima Nunes', headline: 'Content Writer & Editor', avatar: 'https://i.pravatar.cc/100?img=5',
    location: 'Remote', rate: '1,500 MZN/hr', rating: 4.8, reviews: 41, category: 'Writing',
    skills: ['Copywriting', 'SEO Writing', 'Editing', 'Portuguese/English'], available: true,
  },
  {
    id: '8', name: 'João Macamo', headline: 'Business Consultant', avatar: 'https://i.pravatar.cc/100?img=14',
    location: 'Maputo', rate: '3,500 MZN/hr', rating: 4.9, reviews: 15, category: 'Consulting',
    skills: ['Strategy', 'Operations', 'Growth', 'B2B'], available: false,
  },
]

const topSkills = [
  { name: 'React / Frontend', count: 124 },
  { name: 'UI/UX Design', count: 98 },
  { name: 'Python / Data', count: 76 },
  { name: 'Digital Marketing', count: 65 },
  { name: 'Content Writing', count: 52 },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-px">
      {[1, 2, 3, 4, 5].map((s) => (
        s <= Math.floor(rating)
          ? <HiStar key={s} className="w-3 h-3 text-amber-400" />
          : <HiOutlineStar key={s} className="w-3 h-3 text-gray-300 dark:text-gray-600" />
      ))}
    </div>
  )
}

export default function FindTalentPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [search, setSearch] = useState('')

  const filtered = activeCategory === 'All' ? talents : talents.filter((t) => t.category === activeCategory)

  return (
    <div className="flex gap-6">
      <div className="flex-1 min-w-0 space-y-4">
        {/* Search */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search freelancers, skills, services…"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-[13px] bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 text-gray-800 dark:text-gray-200 placeholder-gray-400 outline-none focus:border-nhonga-400 dark:focus:border-nhonga-600 transition-colors"
            />
          </div>
          <button className="p-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 transition-colors cursor-pointer">
            <HiOutlineAdjustmentsHorizontal className="w-[18px] h-[18px]" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                'px-3.5 py-1.5 rounded-lg text-[12px] font-medium whitespace-nowrap transition-colors cursor-pointer',
                activeCategory === cat
                  ? 'bg-nhonga-500 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200/70 dark:border-gray-800/70 hover:border-gray-300 dark:hover:border-gray-700',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="text-[12px] text-gray-400 dark:text-gray-500">{filtered.length} freelancers found</p>

        {/* Talent grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filtered.map((t) => (
            <div key={t.id} className="group rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-5 hover:border-nhonga-300 dark:hover:border-nhonga-700 transition-all cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="relative">
                  <Avatar name={t.name} src={t.avatar} size="md" />
                  <span className={clsx(
                    'absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-900',
                    t.available ? 'bg-green-500' : 'bg-gray-400',
                  )} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-gray-900 dark:text-white group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors truncate">{t.name}</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">{t.headline}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Stars rating={t.rating} />
                    <span className="text-[10px] text-gray-400">{t.rating} ({t.reviews})</span>
                  </div>
                </div>
                <span className="text-[12px] font-bold text-nhonga-600 dark:text-nhonga-400 shrink-0">{t.rate}</span>
              </div>

              <div className="flex items-center gap-2 mt-3 text-[10px] text-gray-400">
                <span className="flex items-center gap-0.5"><HiOutlineMapPin className="w-3 h-3" />{t.location}</span>
                <span className={clsx(
                  'px-1.5 py-0.5 rounded-full font-medium',
                  t.available
                    ? 'bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400'
                    : 'bg-gray-100 dark:bg-white/[0.04] text-gray-400',
                )}>
                  {t.available ? 'Available' : 'Busy'}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {t.skills.map((s) => (
                  <span key={s} className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-gray-100 dark:bg-white/[0.04] text-gray-500 dark:text-gray-400">{s}</span>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100 dark:border-gray-800/50">
                <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11px] font-semibold border border-nhonga-500 text-nhonga-600 dark:text-nhonga-400 hover:bg-nhonga-50 dark:hover:bg-nhonga-950/20 transition-colors cursor-pointer">
                  <HiOutlineChatBubbleLeftRight className="w-3.5 h-3.5" /> Contact
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11px] font-semibold bg-nhonga-500 text-white hover:bg-nhonga-600 transition-colors cursor-pointer">
                  View Profile <HiOutlineArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="hidden lg:flex flex-col gap-4 w-[280px] shrink-0">
        {/* Stats */}
        <div className="rounded-2xl bg-gradient-to-br from-nhonga-500 to-nhonga-600 p-5 text-white">
          <p className="text-[13px] font-semibold mb-3">Talent Marketplace</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/15 rounded-xl p-3 text-center">
              <p className="text-xl font-bold">850+</p>
              <p className="text-[10px] text-white/70">Freelancers</p>
            </div>
            <div className="bg-white/15 rounded-xl p-3 text-center">
              <p className="text-xl font-bold">120+</p>
              <p className="text-[10px] text-white/70">Categories</p>
            </div>
          </div>
        </div>

        {/* Top skills */}
        <WidgetCard title="Top Skills in Demand">
          <div className="space-y-2.5">
            {topSkills.map((s) => (
              <div key={s.name} className="flex items-center justify-between group cursor-pointer">
                <span className="text-[12px] text-gray-600 dark:text-gray-400 group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors">{s.name}</span>
                <span className="text-[10px] text-gray-400 bg-gray-100 dark:bg-white/[0.04] px-1.5 py-0.5 rounded-full">{s.count}</span>
              </div>
            ))}
          </div>
        </WidgetCard>

        {/* How it works */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-4">
          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 mb-3">How it works</p>
          <div className="space-y-3">
            {[
              { step: '1', text: 'Search for the skill you need' },
              { step: '2', text: 'Review profiles and ratings' },
              { step: '3', text: 'Contact and agree on terms' },
              { step: '4', text: 'Get the work done' },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-nhonga-100 dark:bg-nhonga-950/30 text-nhonga-600 dark:text-nhonga-400 text-[10px] font-bold flex items-center justify-center shrink-0">{s.step}</span>
                <span className="text-[11px] text-gray-500 dark:text-gray-400">{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
