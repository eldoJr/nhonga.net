import { motion } from 'framer-motion'
import { HiArrowRight, HiStar, HiMapPin } from 'react-icons/hi2'

const freelancers = [
  { name: 'Sofia Cossa', role: 'UI/UX Designer', location: 'Maputo', rating: 4.9, projects: 48, image: 'https://i.pravatar.cc/120?img=9' },
  { name: 'Miguel Sitoe', role: 'Full-Stack Developer', location: 'Beira', rating: 4.8, projects: 62, image: 'https://i.pravatar.cc/120?img=11' },
  { name: 'Ana Machel', role: 'Content Writer', location: 'Maputo', rating: 5.0, projects: 35, image: 'https://i.pravatar.cc/120?img=1' },
  { name: 'Carlos Tembe', role: 'Video Editor', location: 'Nampula', rating: 4.7, projects: 29, image: 'https://i.pravatar.cc/120?img=3' },
  { name: 'Lucia Chissano', role: 'Brand Strategist', location: 'Maputo', rating: 4.9, projects: 41, image: 'https://i.pravatar.cc/120?img=16' },
  { name: 'David Mondlane', role: 'Data Analyst', location: 'Maputo', rating: 4.6, projects: 22, image: 'https://i.pravatar.cc/120?img=8' },
]

const skills = ['All', 'Design', 'Development', 'Writing', 'Marketing', 'Video', 'Data']

export default function FreelancersPage() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Talent</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Find Freelancers</h1>
      </motion.div>

      {/* Skill filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="flex flex-wrap gap-2 mb-10"
      >
        {skills.map((s, i) => (
          <button
            key={s}
            className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${i === 0 ? 'bg-nhonga-500 text-white border-nhonga-500' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-nhonga-400 hover:text-nhonga-600'}`}
          >
            {s}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {freelancers.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-nhonga-200/20 hover:border-nhonga-200/50"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={f.image} alt={f.name} className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 dark:border-gray-800" />
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">{f.name}</h3>
                <p className="text-xs text-gray-500">{f.role}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1"><HiMapPin className="w-3.5 h-3.5" />{f.location}</span>
              <span className="flex items-center gap-1"><HiStar className="w-3.5 h-3.5 text-amber-400" />{f.rating}</span>
              <span>{f.projects} projects</span>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-end">
              <span className="text-xs font-semibold text-gray-400 group-hover:text-nhonga-500 flex items-center gap-1 transition-colors">
                View Profile <HiArrowRight className="w-3 h-3" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
