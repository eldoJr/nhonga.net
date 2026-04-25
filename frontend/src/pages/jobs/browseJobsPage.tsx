import { useState } from 'react'
import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import {
  HiOutlineMagnifyingGlass,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineBookmark,
  HiBookmark,
  HiOutlineBuildingOffice2,
  HiOutlineArrowUpRight,
  HiOutlineAdjustmentsHorizontal,
} from 'react-icons/hi2'
import Avatar from '../../components/atoms/avatar'
import WidgetCard from '../../components/molecules/widgetCard'

const tabs = ['All Jobs', 'Full-time', 'Part-time', 'Remote', 'Internship'] as const

const jobs = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'Vodacom Moçambique',
    logo: 'https://ui-avatars.com/api/?name=VM&background=E4002B&color=fff&bold=true&size=80',
    location: 'Maputo',
    type: 'Full-time',
    salary: '80k - 120k MZN',
    posted: '2h ago',
    tags: ['React', 'TypeScript', 'Tailwind'],
    applicants: 24,
  },
  {
    id: '2',
    title: 'Marketing Manager',
    company: 'Cervejas de Moçambique',
    logo: 'https://ui-avatars.com/api/?name=CM&background=D4A017&color=fff&bold=true&size=80',
    location: 'Maputo',
    type: 'Full-time',
    salary: '90k - 140k MZN',
    posted: '5h ago',
    tags: ['Marketing', 'Strategy', 'Leadership'],
    applicants: 38,
  },
  {
    id: '3',
    title: 'Data Analyst',
    company: 'BCI Bank',
    logo: 'https://ui-avatars.com/api/?name=BC&background=003B71&color=fff&bold=true&size=80',
    location: 'Remote',
    type: 'Contract',
    salary: '60k - 90k MZN',
    posted: '1d ago',
    tags: ['Python', 'SQL', 'Power BI'],
    applicants: 15,
  },
  {
    id: '4',
    title: 'UX/UI Designer',
    company: 'Movitel',
    logo: 'https://ui-avatars.com/api/?name=MV&background=FF6B00&color=fff&bold=true&size=80',
    location: 'Maputo',
    type: 'Full-time',
    salary: '70k - 100k MZN',
    posted: '1d ago',
    tags: ['Figma', 'User Research', 'Prototyping'],
    applicants: 42,
  },
  {
    id: '5',
    title: 'Backend Engineer',
    company: 'TechMoz',
    logo: 'https://ui-avatars.com/api/?name=TM&background=10B981&color=fff&bold=true&size=80',
    location: 'Remote',
    type: 'Full-time',
    salary: '100k - 150k MZN',
    posted: '2d ago',
    tags: ['Node.js', 'PostgreSQL', 'AWS'],
    applicants: 19,
  },
  {
    id: '6',
    title: 'Finance Intern',
    company: 'Standard Bank MZ',
    logo: 'https://ui-avatars.com/api/?name=SB&background=0033A0&color=fff&bold=true&size=80',
    location: 'Maputo',
    type: 'Internship',
    salary: '25k MZN',
    posted: '3d ago',
    tags: ['Finance', 'Excel', 'Accounting'],
    applicants: 67,
  },
]

const topCompanies = [
  { name: 'Vodacom MZ', logo: 'https://ui-avatars.com/api/?name=VM&background=E4002B&color=fff&size=40', openJobs: 12 },
  { name: 'BCI Bank', logo: 'https://ui-avatars.com/api/?name=BC&background=003B71&color=fff&size=40', openJobs: 8 },
  { name: 'TechMoz', logo: 'https://ui-avatars.com/api/?name=TM&background=10B981&color=fff&size=40', openJobs: 5 },
]

export default function BrowseJobsPage() {
  const [activeTab, setActiveTab] = useState<string>('All Jobs')
  const [search, setSearch] = useState('')
  const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set())

  const toggleSave = (id: string) => {
    setSavedJobs((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const filtered = activeTab === 'All Jobs'
    ? jobs
    : jobs.filter((j) => j.type === activeTab)

  return (
    <div className="flex gap-6">
      {/* Main */}
      <div className="flex-1 min-w-0 space-y-4">
        {/* Search + filter */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jobs, companies, skills…"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-[13px] bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 text-gray-800 dark:text-gray-200 placeholder-gray-400 outline-none focus:border-nhonga-400 dark:focus:border-nhonga-600 transition-colors"
            />
          </div>
          <button className="p-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 transition-colors cursor-pointer">
            <HiOutlineAdjustmentsHorizontal className="w-[18px] h-[18px]" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                'px-3.5 py-1.5 rounded-lg text-[12px] font-medium whitespace-nowrap transition-colors cursor-pointer',
                activeTab === tab
                  ? 'bg-nhonga-500 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200/70 dark:border-gray-800/70 hover:border-gray-300 dark:hover:border-gray-700',
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-[12px] text-gray-400 dark:text-gray-500">
          {filtered.length} jobs found
        </p>

        {/* Job cards */}
        <div className="space-y-3">
          {filtered.map((job) => (
            <div
              key={job.id}
              className="group rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-5 hover:border-nhonga-300 dark:hover:border-nhonga-700 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <img src={job.logo} alt={job.company} className="w-11 h-11 rounded-xl object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-0.5">{job.company}</p>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleSave(job.id) }}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-nhonga-600 transition-colors shrink-0 cursor-pointer"
                    >
                      {savedJobs.has(job.id) ? <HiBookmark className="w-4 h-4 text-nhonga-600" /> : <HiOutlineBookmark className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-2.5 text-[11px] text-gray-400 dark:text-gray-500">
                    <span className="flex items-center gap-1"><HiOutlineMapPin className="w-3.5 h-3.5" />{job.location}</span>
                    <span className="flex items-center gap-1"><HiOutlineClock className="w-3.5 h-3.5" />{job.type}</span>
                    <span className="flex items-center gap-1"><HiOutlineCurrencyDollar className="w-3.5 h-3.5" />{job.salary}</span>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-gray-100 dark:bg-white/[0.04] text-gray-500 dark:text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400 shrink-0 ml-2">{job.posted} · {job.applicants} applicants</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="hidden lg:flex flex-col gap-4 w-[280px] shrink-0">
        {/* Top companies */}
        <WidgetCard title="Top Companies Hiring">
          <div className="space-y-3">
            {topCompanies.map((c) => (
              <div key={c.name} className="flex items-center gap-2.5 group cursor-pointer">
                <img src={c.logo} alt={c.name} className="w-8 h-8 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors truncate">{c.name}</p>
                  <p className="text-[10px] text-gray-400">{c.openJobs} open positions</p>
                </div>
                <HiOutlineArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-nhonga-500 transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </WidgetCard>

        {/* Salary insights */}
        <WidgetCard title="Salary Insights">
          <div className="space-y-2.5">
            {[
              { role: 'Software Engineer', range: '80k - 150k MZN' },
              { role: 'Marketing Manager', range: '70k - 120k MZN' },
              { role: 'Data Analyst', range: '60k - 100k MZN' },
            ].map((s) => (
              <div key={s.role} className="flex items-center justify-between">
                <span className="text-[12px] text-gray-600 dark:text-gray-400">{s.role}</span>
                <span className="text-[11px] font-semibold text-nhonga-600 dark:text-nhonga-400">{s.range}</span>
              </div>
            ))}
          </div>
        </WidgetCard>
      </div>
    </div>
  )
}
