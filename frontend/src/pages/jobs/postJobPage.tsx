import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx } from 'clsx'
import {
  HiOutlineBriefcase,
  HiOutlineMapPin,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineEye,
  HiOutlineCheckCircle,
  HiOutlineTag,
} from 'react-icons/hi2'

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote']
const experienceLevels = ['Entry Level', 'Mid Level', 'Senior', 'Lead', 'Director']
const categories = ['Technology', 'Marketing', 'Finance', 'Design', 'Engineering', 'Sales', 'HR', 'Operations', 'Other']

const steps = [
  { key: 'basics', label: 'Basics', icon: HiOutlineBriefcase },
  { key: 'type', label: 'Type', icon: HiOutlineClock },
  { key: 'salary', label: 'Salary', icon: HiOutlineCurrencyDollar },
  { key: 'details', label: 'Details', icon: HiOutlineDocumentText },
]

export default function PostJobPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    title: '', company: '', location: '', type: 'Full-time', experience: 'Mid Level',
    category: 'Technology', salaryMin: '', salaryMax: '', description: '', requirements: '', benefits: '',
  })

  const set = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }))

  const completedSteps = [
    form.title && form.company && form.location,
    true,
    true,
    !!form.description,
  ]
  const filled = form.title && form.company && form.location && form.description

  return (
    <div className="flex gap-6">
      <div className="flex-1 min-w-0 space-y-6">
        {/* Step indicator */}
        <div className="flex items-center gap-2">
          {steps.map((step, i) => {
            const Icon = step.icon
            const done = completedSteps[i]
            return (
              <div key={step.key} className="flex items-center gap-2">
                {i > 0 && <div className={clsx('w-8 h-px', done ? 'bg-nhonga-400' : 'bg-gray-200 dark:bg-gray-800')} />}
                <div className={clsx(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium transition-colors',
                  done
                    ? 'bg-nhonga-100 dark:bg-nhonga-950/40 text-nhonga-700 dark:text-nhonga-400'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500',
                )}>
                  <Icon className="w-3.5 h-3.5" />
                  {step.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Basic info */}
        <Section title="Basic Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Job Title" required>
              <input value={form.title} onChange={(e) => set('title', e.target.value)} placeholder="e.g. Senior Frontend Developer" className={inputCls} />
            </Field>
            <Field label="Company Name" required>
              <input value={form.company} onChange={(e) => set('company', e.target.value)} placeholder="e.g. Vodacom Moçambique" className={inputCls} />
            </Field>
            <Field label="Location" required>
              <div className="relative">
                <HiOutlineMapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input value={form.location} onChange={(e) => set('location', e.target.value)} placeholder="e.g. Maputo, Remote" className={clsx(inputCls, 'pl-9')} />
              </div>
            </Field>
            <Field label="Category">
              <select value={form.category} onChange={(e) => set('category', e.target.value)} className={inputCls}>
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
          </div>
        </Section>

        {/* Type & experience */}
        <Section title="Job Type & Experience">
          <div className="space-y-4">
            <Field label="Employment Type">
              <div className="flex flex-wrap gap-2">
                {jobTypes.map((t) => (
                  <button key={t} onClick={() => set('type', t)} className={clsx(chipCls, form.type === t && chipActive)}>
                    {t}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="Experience Level">
              <div className="flex flex-wrap gap-2">
                {experienceLevels.map((l) => (
                  <button key={l} onClick={() => set('experience', l)} className={clsx(chipCls, form.experience === l && chipActive)}>
                    {l}
                  </button>
                ))}
              </div>
            </Field>
          </div>
        </Section>

        {/* Salary */}
        <Section title="Salary Range">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Minimum (MZN)">
              <input type="number" value={form.salaryMin} onChange={(e) => set('salaryMin', e.target.value)} placeholder="e.g. 80000" className={inputCls} />
            </Field>
            <Field label="Maximum (MZN)">
              <input type="number" value={form.salaryMax} onChange={(e) => set('salaryMax', e.target.value)} placeholder="e.g. 150000" className={inputCls} />
            </Field>
          </div>
        </Section>

        {/* Description */}
        <Section title="Job Details">
          <div className="space-y-4">
            <Field label="Description" required>
              <textarea value={form.description} onChange={(e) => set('description', e.target.value)} placeholder="Describe the role, responsibilities, and what a typical day looks like…" rows={5} className={clsx(inputCls, 'resize-none')} />
            </Field>
            <Field label="Requirements">
              <textarea value={form.requirements} onChange={(e) => set('requirements', e.target.value)} placeholder="List the skills, qualifications, and experience needed…" rows={4} className={clsx(inputCls, 'resize-none')} />
            </Field>
            <Field label="Benefits">
              <textarea value={form.benefits} onChange={(e) => set('benefits', e.target.value)} placeholder="Health insurance, remote work, training budget…" rows={3} className={clsx(inputCls, 'resize-none')} />
            </Field>
          </div>
        </Section>

        {/* Actions */}
        <div className="flex items-center gap-3 pb-6">
          <button
            disabled={!filled}
            className={clsx(
              'px-6 py-2.5 rounded-xl text-[13px] font-semibold transition-all',
              filled
                ? 'bg-nhonga-500 text-white hover:bg-nhonga-600 cursor-pointer shadow-sm hover:shadow-md'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed',
            )}
          >
            Publish Job
          </button>
          <button className="px-6 py-2.5 rounded-xl text-[13px] font-semibold text-gray-500 hover:bg-gray-100 dark:hover:bg-white/[0.04] transition-colors cursor-pointer">
            Save Draft
          </button>
          <button onClick={() => navigate(-1)} className="px-4 py-2.5 rounded-xl text-[13px] text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer ml-auto">
            Cancel
          </button>
        </div>
      </div>

      {/* Preview sidebar */}
      <div className="hidden lg:flex flex-col gap-4 w-[300px] shrink-0">
        <div className="rounded-2xl border border-gray-200/70 dark:border-gray-800/70 p-5 sticky top-20 bg-white dark:bg-gray-900">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <HiOutlineEye className="w-4 h-4 text-gray-400" />
              <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200">Live Preview</p>
            </div>
            <div className={clsx(
              'flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full',
              filled
                ? 'bg-nhonga-100 dark:bg-nhonga-950/40 text-nhonga-700 dark:text-nhonga-400'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-400',
            )}>
              <HiOutlineCheckCircle className="w-3 h-3" />
              {filled ? 'Ready' : 'Incomplete'}
            </div>
          </div>

          {form.title ? (
            <div className="space-y-3">
              <div>
                <h3 className="text-[15px] font-bold text-gray-900 dark:text-white leading-snug">{form.title}</h3>
                <p className="text-[12px] text-gray-500 mt-1">{form.company || 'Company'}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {form.location && (
                  <span className="flex items-center gap-1 text-[10px] text-gray-400 bg-gray-50 dark:bg-white/[0.04] px-2 py-1 rounded-lg">
                    <HiOutlineMapPin className="w-3 h-3" />{form.location}
                  </span>
                )}
                <span className="flex items-center gap-1 text-[10px] text-gray-400 bg-gray-50 dark:bg-white/[0.04] px-2 py-1 rounded-lg">
                  <HiOutlineClock className="w-3 h-3" />{form.type}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-gray-400 bg-gray-50 dark:bg-white/[0.04] px-2 py-1 rounded-lg">
                  <HiOutlineTag className="w-3 h-3" />{form.experience}
                </span>
              </div>

              {(form.salaryMin || form.salaryMax) && (
                <p className="text-[12px] font-semibold text-nhonga-600 dark:text-nhonga-400">
                  {form.salaryMin && Number(form.salaryMin).toLocaleString()}
                  {form.salaryMin && form.salaryMax && ' – '}
                  {form.salaryMax && Number(form.salaryMax).toLocaleString()} MZN
                </p>
              )}

              {form.description && (
                <div className="pt-3 border-t border-gray-100 dark:border-gray-800/50">
                  <p className="text-[11px] text-gray-500 line-clamp-5 leading-relaxed">{form.description}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <HiOutlineBriefcase className="w-10 h-10 text-gray-200 dark:text-gray-800 mx-auto mb-3" />
              <p className="text-[12px] text-gray-400">Start filling in details</p>
              <p className="text-[10px] text-gray-300 dark:text-gray-600 mt-0.5">Your listing preview will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const inputCls = 'w-full px-3.5 py-2.5 rounded-xl text-[13px] bg-gray-50 dark:bg-white/[0.03] border border-gray-200/70 dark:border-gray-800/70 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-nhonga-400 dark:focus:border-nhonga-600 focus:bg-white dark:focus:bg-white/[0.05] transition-all'

const chipCls = 'px-3.5 py-1.5 rounded-xl text-[12px] font-medium transition-all cursor-pointer bg-gray-50 dark:bg-white/[0.03] text-gray-500 dark:text-gray-400 border border-gray-200/70 dark:border-gray-800/70 hover:border-gray-300 dark:hover:border-gray-700'

const chipActive = '!bg-nhonga-500 !text-white !border-nhonga-500'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h3 className="text-[14px] font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
      {children}
    </div>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] font-medium text-gray-500 dark:text-gray-400 mb-1.5">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}
