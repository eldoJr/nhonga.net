import { useState } from 'react'
import { clsx } from 'clsx'
import {
  HiOutlineMagnifyingGlass,
  HiOutlineCalendar,
  HiOutlineMapPin,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineTrophy,
  HiOutlineBookmark,
  HiBookmark,
} from 'react-icons/hi2'
import WidgetCard from '../../components/molecules/widgetCard'

const tabs = [
  { key: 'scholarships', label: 'Scholarships', icon: HiOutlineAcademicCap },
  { key: 'courses', label: 'Courses', icon: HiOutlineBookOpen },
  { key: 'competitions', label: 'Competitions', icon: HiOutlineTrophy },
] as const

const scholarships = [
  { id: 's1', title: 'Chevening Scholarship 2026', institution: 'UK Government', location: 'United Kingdom', deadline: '15 Nov 2025', tags: ['Full Funding', 'Masters'], field: 'All Fields' },
  { id: 's2', title: 'DAAD Research Grants', institution: 'German Academic Exchange', location: 'Germany', deadline: '30 Oct 2025', tags: ['Research', 'PhD'], field: 'STEM' },
  { id: 's3', title: 'Bolsa Eduardo Mondlane', institution: 'Governo de Moçambique', location: 'Moçambique', deadline: '28 Feb 2026', tags: ['Full Funding', 'Undergraduate'], field: 'All Fields' },
  { id: 's4', title: 'Mastercard Foundation Scholars', institution: 'University of Cape Town', location: 'South Africa', deadline: '15 Jan 2026', tags: ['Full Funding', 'Undergraduate'], field: 'All Fields' },
  { id: 's5', title: 'Fulbright Program', institution: 'US Department of State', location: 'United States', deadline: '01 Dec 2025', tags: ['Full Funding', 'Masters/PhD'], field: 'All Fields' },
]

const courses = [
  { id: 'c1', title: 'Data Science Fundamentals', institution: 'UEM Online', location: 'Online', deadline: 'Ongoing', tags: ['Certificate', 'Free'], field: 'Technology' },
  { id: 'c2', title: 'Digital Marketing Masterclass', institution: 'Google Africa', location: 'Online', deadline: 'Ongoing', tags: ['Certificate', 'Free'], field: 'Marketing' },
  { id: 'c3', title: 'Project Management Professional', institution: 'PMI Mozambique', location: 'Maputo', deadline: '20 Dec 2025', tags: ['Professional', 'Paid'], field: 'Management' },
  { id: 'c4', title: 'AWS Cloud Practitioner', institution: 'Amazon Web Services', location: 'Online', deadline: 'Ongoing', tags: ['Certificate', 'Paid'], field: 'Technology' },
]

const competitions = [
  { id: 'k1', title: 'Mozambique Innovation Challenge', institution: 'INCM', location: 'Maputo', deadline: '30 Nov 2025', tags: ['$10k Prize', 'Startups'], field: 'Innovation' },
  { id: 'k2', title: 'Africa Code Week Hackathon', institution: 'SAP Africa', location: 'Online', deadline: '15 Oct 2025', tags: ['Coding', 'Teams'], field: 'Technology' },
  { id: 'k3', title: 'Young African Leaders Essay', institution: 'African Union', location: 'Online', deadline: '01 Jan 2026', tags: ['Essay', 'Leadership'], field: 'Social Sciences' },
]

const dataMap = { scholarships, courses, competitions }

const upcomingDeadlines = [
  { title: 'DAAD Research Grants', date: '30 Oct 2025', daysLeft: 12 },
  { title: 'Chevening 2026', date: '15 Nov 2025', daysLeft: 28 },
  { title: 'Innovation Challenge', date: '30 Nov 2025', daysLeft: 43 },
]

export default function AcademicPage() {
  const [activeTab, setActiveTab] = useState<string>('scholarships')
  const [search, setSearch] = useState('')
  const [saved, setSaved] = useState<Set<string>>(new Set())

  const toggleSave = (id: string) => {
    setSaved((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const items = dataMap[activeTab as keyof typeof dataMap] || scholarships

  return (
    <div className="flex gap-6">
      <div className="flex-1 min-w-0 space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: scholarships.length, label: 'Scholarships', color: 'text-nhonga-600', bg: 'bg-nhonga-100 dark:bg-nhonga-950/40' },
            { value: courses.length, label: 'Courses', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-950/40' },
            { value: competitions.length, label: 'Competitions', color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-950/40' },
          ].map((stat) => (
            <div
              key={stat.label}
              className={clsx(
                'rounded-2xl border border-gray-200/70 dark:border-gray-800/70 p-4 transition-all cursor-pointer hover:border-nhonga-300/60 dark:hover:border-nhonga-700/60',
                stat.bg,
              )}
            >
              <p className={clsx('text-2xl font-bold', stat.color)}>{stat.value}</p>
              <p className="text-[12px] font-semibold text-gray-800 dark:text-gray-200 mt-1">{stat.label}</p>
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
            placeholder="Search scholarships, courses, competitions…"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-[13px] bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 text-gray-800 dark:text-gray-200 placeholder-gray-400 outline-none focus:border-nhonga-400 dark:focus:border-nhonga-600 transition-colors"
          />
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={clsx(
                  'flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12px] font-medium transition-colors cursor-pointer',
                  activeTab === tab.key
                    ? 'bg-nhonga-500 text-white'
                    : 'bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200/70 dark:border-gray-800/70 hover:border-gray-300 dark:hover:border-gray-700',
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            )
          })}
        </div>

        <p className="text-[12px] text-gray-400 dark:text-gray-500">{items.length} results</p>

        {/* List */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/70 dark:border-gray-800/70 divide-y divide-gray-100 dark:divide-gray-800/50">
          {items.map((item) => (
            <div
              key={item.id}
              className="group flex items-center gap-4 px-5 py-4 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors cursor-pointer"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-[13px] font-semibold text-gray-900 dark:text-white group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors truncate">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">{item.institution}</p>
                <div className="flex flex-wrap items-center gap-3 mt-1.5 text-[10px] text-gray-400 dark:text-gray-500">
                  <span className="flex items-center gap-1"><HiOutlineMapPin className="w-3 h-3" />{item.location}</span>
                  <span className="flex items-center gap-1"><HiOutlineCalendar className="w-3 h-3" />{item.deadline}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 shrink-0 max-w-[140px] justify-end">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-nhonga-50 dark:bg-nhonga-950/20 text-nhonga-700 dark:text-nhonga-400">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); toggleSave(item.id) }}
                className="p-1.5 rounded-lg text-gray-400 hover:text-nhonga-600 transition-colors shrink-0 cursor-pointer"
              >
                {saved.has(item.id) ? <HiBookmark className="w-4 h-4 text-nhonga-600" /> : <HiOutlineBookmark className="w-4 h-4" />}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="hidden lg:flex flex-col gap-4 w-[280px] shrink-0">
        {/* Upcoming deadlines */}
        <WidgetCard title="Upcoming Deadlines">
          <div className="space-y-3">
            {upcomingDeadlines.map((d) => (
              <div key={d.title} className="flex items-center justify-between group cursor-pointer">
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors truncate">{d.title}</p>
                  <p className="text-[10px] text-gray-400">{d.date}</p>
                </div>
                <span className={clsx(
                  'text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0',
                  d.daysLeft <= 14
                    ? 'bg-red-100 dark:bg-red-950/30 text-red-600 dark:text-red-400'
                    : 'bg-amber-100 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400',
                )}>
                  {d.daysLeft}d left
                </span>
              </div>
            ))}
          </div>
        </WidgetCard>

        {/* Saved */}
        <WidgetCard title="Your Saved Items">
          <div className="text-center py-4">
            <HiOutlineBookmark className="w-8 h-8 text-gray-300 dark:text-gray-700 mx-auto mb-2" />
            <p className="text-[12px] text-gray-400">{saved.size} items saved</p>
            <p className="text-[10px] text-gray-400 mt-0.5">Bookmark items to see them here</p>
          </div>
        </WidgetCard>
      </div>
    </div>
  )
}
