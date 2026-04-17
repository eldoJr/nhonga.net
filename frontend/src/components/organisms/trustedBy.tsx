import { motion } from 'framer-motion'

const partners = [
  'Vodacom',
  'Standard Bank',
  'TotalEnergies',
  'Mozal',
  'Cervejas de Moçambique',
  'Mcel',
]

export default function TrustedBy() {
  return (
    <section className="w-full bg-gray-50/70 dark:bg-gray-900/50">
      <div className="max-w-[1250px] mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            Trusted by leading companies in Mozambique
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {partners.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-lg font-bold text-gray-300 dark:text-gray-700 select-none"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
