import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiArrowUpRight, HiCurrencyDollar, HiCalendarDays, HiMapPin, HiChevronDown } from 'react-icons/hi2'
import { internships } from '../../data/internships'

const cities = ['All', 'Maputo', 'Matola', 'Beira', 'Nampula', 'Remote']
const areas = ['All', 'Marketing', 'Technology', 'Finance', 'Design', 'NGO', 'HR', 'Writing']
const modes = ['Remote / On-site', 'Remote', 'On-site', 'Hybrid']
const paidOpts = ['Paid only', 'All', 'Unpaid']

function FilterPill({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false)
  const display = value === options[0] ? label : value
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-sm text-gray-700 dark:text-gray-300 hover:border-nhonga-400 transition-colors cursor-pointer"
      >
        {display} <HiChevronDown className="w-3.5 h-3.5 text-gray-400" />
      </button>
      {open && (
        <div className="absolute top-full mt-1 left-0 z-20 min-w-[140px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false) }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors cursor-pointer ${value === opt ? 'bg-nhonga-500/10 text-nhonga-600 dark:text-nhonga-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function InternshipCard({ item, index }: { item: typeof internships[0]; index: number }) {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex flex-col gap-3 p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-gray-800/60 hover:border-nhonga-300 dark:hover:border-nhonga-700 transition-colors"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-300 shrink-0">
            {item.company[0]}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400 truncate">{item.company}</span>
        </div>
        <button
          onClick={() => navigate(`/academic/internships/${item.id}`)}
          className="w-8 h-8 rounded-full bg-nhonga-500 hover:bg-nhonga-600 flex items-center justify-center shrink-0 transition-colors cursor-pointer"
        >
          <HiArrowUpRight className="w-4 h-4 text-gray-950" />
        </button>
      </div>

      {/* Badge */}
      <span className="inline-flex self-start px-2.5 py-0.5 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300" style={{ backgroundColor: '#E3F8E8' }}>
        {item.category}
      </span>

      {/* Title */}
      <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">{item.title}</h3>

      {/* Meta */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <HiCurrencyDollar className="w-3.5 h-3.5 shrink-0" /><span>{item.stipend}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <HiCalendarDays className="w-3.5 h-3.5 shrink-0" /><span>{item.duration}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <HiMapPin className="w-3.5 h-3.5 shrink-0" /><span>{item.location}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 mt-1">
        <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-nhonga-500 transition-colors cursor-pointer">
          Save
        </button>
        <button
          onClick={() => navigate(`/academic/internships/${item.id}`)}
          className="px-5 py-2 rounded-full bg-nhonga-500 hover:bg-nhonga-600 text-xs font-semibold text-gray-950 transition-colors cursor-pointer"
        >
          Apply
        </button>
      </div>
    </motion.div>
  )
}

export default function InternshipsSection() {
  const [city, setCity] = useState('All')
  const [area, setArea] = useState('All')
  const [mode, setMode] = useState('Remote / On-site')
  const [paid, setPaid] = useState('Paid only')

  const filtered = internships.filter((i) => {
    if (city !== 'All' && i.city !== city) return false
    if (area !== 'All' && i.category !== area) return false
    if (mode !== 'Remote / On-site' && i.type !== mode) return false
    if (paid === 'Paid only' && !i.paid) return false
    if (paid === 'Unpaid' && i.paid) return false
    return true
  })

  return (
    <>
      {/* Search + Header */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pt-6 sm:pt-10 pb-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex justify-center mb-8">
          <div className="flex items-center gap-2 w-full max-w-lg bg-[#06210D] rounded-2xl px-2.5 py-1.5">
            <input type="text" placeholder="Search Nhonga..." className="flex-1 bg-transparent text-sm text-gray-200 placeholder-nhonga-500 outline-none px-2 text-center" />
            <button className="flex items-center justify-center w-10 h-7 rounded-2xl bg-nhonga-500 hover:bg-nhonga-600 transition-colors shrink-0 cursor-pointer">
              <HiArrowRight className="w-4 h-4 text-gray-950" />
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Internships</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white leading-tight">
            <span className="font-bold">Start Your Career With </span>
            <span className="font-bold text-nhonga-500">Nhonga</span>
          </h1>
        </motion.div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <FilterPill label="City: All" options={cities.map((c, i) => i === 0 ? 'All' : c)} value={city} onChange={setCity} />
            <FilterPill label="Area: All" options={areas} value={area} onChange={setArea} />
            <FilterPill label="Remote / On-site" options={modes} value={mode} onChange={setMode} />
            <FilterPill label="Paid only" options={paidOpts} value={paid} onChange={setPaid} />
          </div>
          <span className="text-sm text-gray-400 shrink-0">{filtered.length} internships found</span>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pb-16 sm:pb-24">
        {filtered.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-16">No internships match your filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filtered.map((item, i) => <InternshipCard key={item.id} item={item} index={i} />)}
          </div>
        )}
      </section>
    </>
  )
}
