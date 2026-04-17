import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clsx } from 'clsx'
import {
  HiOutlineBriefcase,
  HiOutlineMapPin,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
  HiOutlineBuildingOffice2,
  HiOutlineTag,
  HiOutlineDocumentText,
  HiOutlineEye,
  HiOutlineCheckCircle,
} from 'react-icons/hi2'

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote']
const experienceLevels = ['Entry Level', 'Mid Level', 'Senior', 'Lead', 'Director']
const categories = ['Technology', 'Marketing', 'Finance', 'Design', 'Engineering', 'Sales', 'HR', 'Operations', 'Other']

export default function PostJobPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    title: '', company: '', location: '', type: 'Full-time', experience: 'Mid Level',
    category: 'Technology', salaryMin: '', salaryMax: '', description: '', requirements: '', benefits: '',
  })

  const set = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }))
  const filled = form.title && form.company && form.location && form.description

  return (
    <div className="flex gap-6">
      <div className="flex-1 min-w-0 space-y-5">
        {/* Header */}
        <div>
          <h2 className="text-[18px] font-bold text-gray-900 dark:text-white">Post a New Job</h2>
          <p className="text-[12px] text-gray-400 mt-0.5">Fill in the details to publish your job listing.</p>
        </div>

        {/* Basic info */}
        <Section title="Basic Information" icon={HiOutlineBriefcase}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
        <Section title="Job Type & Experience" icon={HiOutlineClock}>
          <div className="space-y-3">
            <Field label="Employment Type">
              <div className="flex flex-wrap gap-2">
                {jobTypes.map((t) => (
                  <button
                    key={t}
                    onClick={() => set('type', t)}
                    className={clsx(
                      'px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors cursor-pointer',
                      form.type === t
                        ? 'bg-nhonga-500 text-white'
                        : 'bg-gray-100 dark:bg-white/[0.04] text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/[0.06]',
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="Experience Level">
              <div className="flex flex-wrap gap-2">
                {experienceLevels.map((l) => (
                  <button
                    key={l}
                    onClick={() => set('experience', l)}
                    className={clsx(
                      'px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors cursor-pointer',
                      form.experience === l
                        ? 'bg-nhonga-500 text-white'
                        : 'bg-gray-100 dark:bg-white/[0.04] text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/[0.06]',
                    )}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </Field>
          </div>
        </Section>

        {/* Salary */}
        <Section title="Salary Range" icon={HiOutlineCurrencyDollar}>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Minimum (MZN)">
              <input type="number" value={form.salaryMin} onChange={(e) => set('salaryMin', e.target.value)} placeholder="e.g. 80000" className={inputCls} />
            </Field>
            <Field label="Maximum (MZN)">
              <input type="number" value={form.salaryMax} onChange={(e) => set('salaryMax', e.target.value)} placeholder="e.g. 150000" className={inputCls} />
            </Field>
          </div>
        </Section>

        {/* Description */}
        <Section title="Job Details" icon={HiOutlineDocumentText}>
          <div className="space-y-3">
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
        <div className="flex items-center gap-3 pt-2">
          <button
            disabled={!filled}
            className={clsx(
              'px-6 py-2.5 rounded-xl text-[13px] font-semibold transition-colors',
              filled
                ? 'bg-nhonga-500 text-white hover:bg-nhonga-600 cursor-pointer'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed',
            )}
          >
            Publish Job
          </button>
          <button className="px-6 py-2.5 rounded-xl text-[13px] font-semibold border border-gray-200 dark:border-gray-700 text-gray-500 hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer">
            Save Draft
          </button>
          <button onClick={() => navigate(-1)} className="px-4 py-2.5 rounded-xl text-[13px] text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer">
            Cancel
          </button>
        </div>
      </div>

      {/* Preview sidebar */}
      <div className="hidden lg:flex flex-col gap-4 w-[280px] shrink-0">
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-5 sticky top-20">
          <div className="flex items-center gap-2 mb-4">
            <HiOutlineEye className="w-4 h-4 text-gray-400" />
            <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200">Preview</p>
          </div>

          {form.title ? (
            <div className="space-y-3">
              <div>
                <h3 className="text-[14px] font-bold text-gray-900 dark:text-white">{form.title}</h3>
                <p className="text-[12px] text-gray-500 mt-0.5">{form.company || 'Company'}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-[10px] text-gray-400">
                {form.location && <span className="flex items-center gap-0.5"><HiOutlineMapPin className="w-3 h-3" />{form.location}</span>}
                <span className="flex items-center gap-0.5"><HiOutlineClock className="w-3 h-3" />{form.type}</span>
                <span className="flex items-center gap-0.5"><HiOutlineTag className="w-3 h-3" />{form.experience}</span>
              </div>
              {(form.salaryMin || form.salaryMax) && (
                <p className="text-[11px] font-semibold text-nhonga-600 dark:text-nhonga-400">
                  {form.salaryMin && `${Number(form.salaryMin).toLocaleString()}`}
                  {form.salaryMin && form.salaryMax && ' - '}
                  {form.salaryMax && `${Number(form.salaryMax).toLocaleString()}`} MZN
                </p>
              )}
              {form.description && (
                <p className="text-[11px] text-gray-500 line-clamp-4 leading-relaxed">{form.description}</p>
              )}
              <div className="pt-2 border-t border-gray-100 dark:border-gray-800/50">
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                  <HiOutlineCheckCircle className="w-3.5 h-3.5 text-nhonga-500" />
                  {filled ? 'Ready to publish' : 'Fill required fields'}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-6">
              <HiOutlineBriefcase className="w-8 h-8 text-gray-300 dark:text-gray-700 mx-auto mb-2" />
              <p className="text-[12px] text-gray-400">Start filling in details to see a preview</p>
            </div>
          )}
        </div>

        {/* Tips */}
        <div className="rounded-2xl bg-nhonga-50 dark:bg-nhonga-950/20 border border-nhonga-200/40 dark:border-nhonga-800/30 p-4">
          <p className="text-[12px] font-semibold text-nhonga-700 dark:text-nhonga-400 mb-2">Tips for a great listing</p>
          <ul className="space-y-1.5 text-[11px] text-nhonga-600/80 dark:text-nhonga-400/70">
            <li>• Be specific about the role and responsibilities</li>
            <li>• Include salary range to attract more applicants</li>
            <li>• List 5-8 key requirements, not 20</li>
            <li>• Mention unique benefits and culture</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const inputCls = 'w-full px-3 py-2.5 rounded-xl text-[13px] bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-nhonga-400 dark:focus:border-nhonga-600 transition-colors'

function Section({ title, icon: Icon, children }: { title: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-5">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-4 h-4 text-nhonga-500" />
        <h3 className="text-[13px] font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
      </div>
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
