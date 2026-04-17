import { motion } from 'framer-motion'
import { HiArrowRight, HiMapPin } from 'react-icons/hi2'
import Button from '../atoms/button'

const companies = [
  {
    name: 'Vodacom Mozambique',
    logo: 'https://ui-avatars.com/api/?name=VM&background=E60000&color=fff&bold=true&size=80',
    industry: 'Telecommunications',
    location: 'Maputo',
    openRoles: 12,
  },
  {
    name: 'Standard Bank MZ',
    logo: 'https://ui-avatars.com/api/?name=SB&background=003DA5&color=fff&bold=true&size=80',
    industry: 'Banking & Finance',
    location: 'Maputo',
    openRoles: 8,
  },
  {
    name: 'TotalEnergies',
    logo: 'https://ui-avatars.com/api/?name=TE&background=FF4B00&color=fff&bold=true&size=80',
    industry: 'Energy',
    location: 'Pemba',
    openRoles: 15,
  },
  {
    name: 'Mozal',
    logo: 'https://ui-avatars.com/api/?name=MZ&background=1A5276&color=fff&bold=true&size=80',
    industry: 'Manufacturing',
    location: 'Maputo',
    openRoles: 6,
  },
  {
    name: 'FNB Mozambique',
    logo: 'https://ui-avatars.com/api/?name=FN&background=009A44&color=fff&bold=true&size=80',
    industry: 'Banking & Finance',
    location: 'Maputo',
    openRoles: 9,
  },
  {
    name: 'Cervejas de Mocambique',
    logo: 'https://ui-avatars.com/api/?name=CM&background=8B0000&color=fff&bold=true&size=80',
    industry: 'FMCG',
    location: 'Maputo',
    openRoles: 5,
  },
]

export default function TopCompanies() {
  return (
    <section className="w-full max-w-[1250px] mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
      >
        <div>
          <span className="text-sm font-bold text-nhonga-600 tracking-wide">
            Top Employers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">
            Companies hiring right now
          </h2>
        </div>
        <Button variant="outline" size="md" className="gap-2 rounded-lg shrink-0 group/btn">
          All Companies
          <HiArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {companies.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group flex flex-col gap-5 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-nhonga-200/20 hover:border-nhonga-200/50"
          >
            <div className="flex items-center gap-4">
              <img
                src={c.logo}
                alt={c.name}
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors">
                  {c.name}
                </h3>
                <p className="text-xs text-gray-400">{c.industry}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <HiMapPin className="w-3.5 h-3.5" />
                {c.location}
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-nhonga-100/60 dark:bg-nhonga-900/30 text-nhonga-700 dark:text-nhonga-400 border border-nhonga-200/40 dark:border-nhonga-800/30">
                {c.openRoles} open roles
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
