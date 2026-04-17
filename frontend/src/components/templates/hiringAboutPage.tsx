import { motion } from 'framer-motion'
import { HiRocketLaunch, HiUserGroup, HiSparkles, HiBolt } from 'react-icons/hi2'
import Button from '../atoms/button'

const benefits = [
  { icon: HiUserGroup, title: 'Access Top Talent', description: 'Reach thousands of verified professionals across Mozambique.' },
  { icon: HiSparkles, title: 'AI-Powered Matching', description: 'Our algorithm surfaces the best candidates for your role.' },
  { icon: HiBolt, title: 'Fast Hiring', description: 'Average time to first qualified applicant: 48 hours.' },
  { icon: HiRocketLaunch, title: 'Employer Branding', description: 'Showcase your company culture and attract the right fit.' },
]

const plans = [
  { name: 'Starter', price: 'Free', features: ['1 active job post', 'Basic applicant tracking', 'Email support'], highlighted: false },
  { name: 'Pro', price: '$29/mo', features: ['Unlimited job posts', 'AI candidate matching', 'Priority support', 'Analytics dashboard'], highlighted: true },
  { name: 'Enterprise', price: 'Custom', features: ['Everything in Pro', 'Dedicated account manager', 'API access', 'Custom integrations'], highlighted: false },
]

export default function HiringAboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full max-w-[1250px] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">For Employers</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 leading-tight">
            Hire smarter with <span className="text-nhonga-500">Nhonga</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-base leading-relaxed">
            The fastest way to find, connect, and hire top professionals in Mozambique.
          </p>
          <div className="mt-8">
            <Button size="lg" className="rounded-lg">Start Hiring — Free</Button>
          </div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="w-full bg-gray-50/70 dark:bg-gray-900/50">
        <div className="max-w-[1250px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-4 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-gray-700/30 p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-nhonga-100/80 dark:bg-nhonga-900/40 flex items-center justify-center text-nhonga-600 dark:text-nhonga-400">
                  <b.icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">{b.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full max-w-[1250px] mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-bold text-nhonga-600 tracking-wide">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3">Simple, transparent plans</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-2xl border p-6 flex flex-col ${p.highlighted ? 'border-nhonga-400 bg-nhonga-50/50 dark:bg-nhonga-900/10 shadow-lg shadow-nhonga-200/20' : 'border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-white/5'}`}
            >
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">{p.name}</h3>
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white mt-2 mb-6">{p.price}</p>
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="text-xs text-gray-500 dark:text-gray-400 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nhonga-500 mt-1 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={p.highlighted ? 'primary' : 'outline'} size="md" className="w-full rounded-lg">
                {p.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
