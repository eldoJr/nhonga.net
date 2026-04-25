import { useState } from 'react'
import { clsx } from 'clsx'
import {
  HiOutlineMagnifyingGlass,
  HiOutlineUserPlus,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheck,
  HiOutlineXMark,
} from 'react-icons/hi2'
import Avatar from '../../components/atoms/avatar'
import WidgetCard from '../../components/molecules/widgetCard'

const tabs = ['Connections', 'Discover', 'Invitations'] as const

const connections = [
  { id: '1', name: 'Ana Machel', headline: 'UX Designer at Vodacom MZ', avatar: 'https://i.pravatar.cc/100?img=1', mutual: 12 },
  { id: '2', name: 'Carlos Tembe', headline: 'HR Director at Cervejas de MZ', avatar: 'https://i.pravatar.cc/100?img=3', mutual: 8 },
  { id: '3', name: 'Fatima Nunes', headline: 'PhD Candidate at UEM', avatar: 'https://i.pravatar.cc/100?img=5', mutual: 15 },
  { id: '4', name: 'David Mondlane', headline: 'CEO at TechMoz', avatar: 'https://i.pravatar.cc/100?img=8', mutual: 23 },
  { id: '5', name: 'Sofia Cossa', headline: 'Product Manager at Movitel', avatar: 'https://i.pravatar.cc/100?img=9', mutual: 6 },
]

const discover = [
  { id: '10', name: 'Miguel Sitoe', headline: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/100?img=11', mutual: 4 },
  { id: '11', name: 'Lucia Chissano', headline: 'Marketing at Standard Bank', avatar: 'https://i.pravatar.cc/100?img=16', mutual: 7 },
  { id: '12', name: 'Pedro Guebuza', headline: 'Data Scientist at BCI', avatar: 'https://i.pravatar.cc/100?img=12', mutual: 3 },
  { id: '13', name: 'Maria Tembe', headline: 'Graphic Designer', avatar: 'https://i.pravatar.cc/100?img=20', mutual: 9 },
  { id: '14', name: 'João Macamo', headline: 'Project Manager at Mozal', avatar: 'https://i.pravatar.cc/100?img=14', mutual: 11 },
  { id: '15', name: 'Teresa Nhaca', headline: 'Accountant at Deloitte MZ', avatar: 'https://i.pravatar.cc/100?img=25', mutual: 2 },
]

const invitations = [
  { id: '20', name: 'Roberto Langa', headline: 'Software Engineer at Paytek', avatar: 'https://i.pravatar.cc/100?img=33', mutual: 5 },
  { id: '21', name: 'Amina Salimo', headline: 'Journalist at Canal de MZ', avatar: 'https://i.pravatar.cc/100?img=44', mutual: 3 },
]

const industries = [
  { name: 'Technology', count: 342 },
  { name: 'Finance & Banking', count: 218 },
  { name: 'Marketing', count: 156 },
  { name: 'Education', count: 134 },
  { name: 'Healthcare', count: 89 },
]

export default function NetworkPage() {
  const [activeTab, setActiveTab] = useState<string>('Connections')
  const [search, setSearch] = useState('')

  const data = activeTab === 'Connections' ? connections
    : activeTab === 'Discover' ? discover
      : invitations

  return (
    <div className="flex gap-6">
      <div className="flex-1 min-w-0 space-y-4">
        {/* Network stats — horizontal cards */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { value: '128', label: 'Connections', trend: '+12 this month', color: 'text-nhonga-600', bg: 'bg-nhonga-100 dark:bg-nhonga-950/40' },
            { value: '2', label: 'Invitations', trend: 'Pending', color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-950/40' },
            { value: '24', label: 'Profile Views', trend: 'Last 30 days', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-950/40' },
            { value: '67%', label: 'Response Rate', trend: 'Above average', color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-950/40' },
          ].map((stat) => (
            <div
              key={stat.label}
              className={clsx(
                'group rounded-2xl border border-gray-200/70 dark:border-gray-800/70 p-4 hover:border-nhonga-300/60 dark:hover:border-nhonga-700/60 transition-all cursor-pointer',
                stat.bg,
              )}
            >
              <p className={clsx('text-2xl font-bold', stat.color)}>{stat.value}</p>
              <p className="text-[12px] font-semibold text-gray-800 dark:text-gray-200 mt-1">{stat.label}</p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">{stat.trend}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search people, companies…"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-[13px] bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 text-gray-800 dark:text-gray-200 placeholder-gray-400 outline-none focus:border-nhonga-400 dark:focus:border-nhonga-600 transition-colors"
          />
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                'px-3.5 py-1.5 rounded-lg text-[12px] font-medium transition-colors cursor-pointer',
                activeTab === tab
                  ? 'bg-nhonga-500 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200/70 dark:border-gray-800/70 hover:border-gray-300 dark:hover:border-gray-700',
              )}
            >
              {tab}
              {tab === 'Invitations' && invitations.length > 0 && (
                <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-bold bg-nhonga-100 text-nhonga-700 dark:bg-nhonga-900/40 dark:text-nhonga-400 rounded-full">
                  {invitations.length}
                </span>
              )}
            </button>
          ))}
        </div>

        <p className="text-[12px] text-gray-400 dark:text-gray-500">{data.length} people</p>

        {/* People list */}
        <div className="space-y-1 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/70 dark:border-gray-800/70 p-2">
          {data.map((person) => (
            <div
              key={person.id}
              className="group flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors"
            >
              <Avatar name={person.name} src={person.avatar} size="md" />
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-gray-900 dark:text-white truncate">{person.name}</p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 truncate">{person.headline}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {activeTab === 'Invitations' ? (
                  <>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-nhonga-500 text-white hover:bg-nhonga-600 transition-colors cursor-pointer">
                      <HiOutlineCheck className="w-3.5 h-3.5" /> Accept
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.04] transition-colors cursor-pointer">
                      <HiOutlineXMark className="w-3.5 h-3.5" /> Ignore
                    </button>
                  </>
                ) : activeTab === 'Discover' ? (
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold border border-nhonga-500/50 text-nhonga-600 dark:text-nhonga-400 hover:bg-nhonga-50 dark:hover:bg-nhonga-950/20 transition-colors cursor-pointer">
                    <HiOutlineUserPlus className="w-3.5 h-3.5" /> Connect
                  </button>
                ) : (
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-gray-500 hover:text-nhonga-600 dark:hover:text-nhonga-400 hover:bg-gray-100 dark:hover:bg-white/[0.04] transition-colors cursor-pointer">
                    <HiOutlineChatBubbleLeftRight className="w-3.5 h-3.5" /> Message
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="hidden lg:flex flex-col gap-4 w-[280px] shrink-0">
        {/* Browse by industry */}
        <WidgetCard title="Browse by Industry">
          <div className="space-y-2">
            {industries.map((ind) => (
              <div key={ind.name} className="flex items-center justify-between group cursor-pointer">
                <span className="text-[12px] text-gray-600 dark:text-gray-400 group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors">{ind.name}</span>
                <span className="text-[10px] text-gray-400 bg-gray-100 dark:bg-white/[0.04] px-1.5 py-0.5 rounded-full">{ind.count}</span>
              </div>
            ))}
          </div>
        </WidgetCard>

        {/* Growing fast */}
        <WidgetCard title="Growing Fast">
          <div className="space-y-3">
            {discover.slice(0, 3).map((p) => (
              <div key={p.id} className="flex items-center gap-2.5">
                <Avatar name={p.name} src={p.avatar} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-semibold text-gray-800 dark:text-gray-200 truncate">{p.name}</p>
                  <p className="text-[10px] text-gray-400 truncate">{p.headline}</p>
                </div>
                <button className="p-1.5 rounded-lg text-nhonga-600 hover:bg-nhonga-50 dark:hover:bg-nhonga-950/30 transition-colors shrink-0 cursor-pointer">
                  <HiOutlineUserPlus className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </WidgetCard>
      </div>
    </div>
  )
}
