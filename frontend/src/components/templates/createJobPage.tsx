import { motion } from 'framer-motion'
import Button from '../atoms/button'

export default function CreateJobPage() {
  return (
    <section className="w-full max-w-[800px] mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">New Listing</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Create a New Job</h1>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-col gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <Field label="Job Title" placeholder="e.g. Senior Frontend Developer" />
        <Field label="Company Name" placeholder="e.g. Nhonga Inc." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Location" placeholder="e.g. Maputo, Mozambique" />
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Job Type</label>
            <select className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-gray-700 text-sm text-gray-900 dark:text-white outline-none focus:border-nhonga-400 transition-colors">
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Freelance</option>
              <option>Internship</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Salary Range (min)" placeholder="e.g. 30000" />
          <Field label="Salary Range (max)" placeholder="e.g. 60000" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Description</label>
          <textarea
            rows={5}
            placeholder="Describe the role, responsibilities, and requirements..."
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-gray-700 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-nhonga-400 transition-colors resize-none"
          />
        </div>

        <Field label="Skills (comma separated)" placeholder="e.g. React, TypeScript, Figma" />

        <div className="flex items-center justify-end gap-3 pt-4">
          <Button variant="ghost" size="md" className="rounded-lg">Save Draft</Button>
          <Button size="md" className="rounded-lg">Publish Job</Button>
        </div>
      </motion.form>
    </section>
  )
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-gray-700 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-nhonga-400 transition-colors"
      />
    </div>
  )
}
