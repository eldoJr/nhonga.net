import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiEye, HiEyeSlash, HiChevronLeft } from 'react-icons/hi2'
import Logo from '../atoms/logo'
import Button from '../atoms/button'

const countries = ['Mozambique', 'Portugal', 'Brazil', 'South Africa', 'Angola', 'Germany', 'United Kingdom', 'United States', 'Other']
const interests = ['Jobs', 'Freelancing', 'Academic', 'Networking', 'Hiring', 'Courses']
const roles = ['Professional', 'Student', 'Freelancer', 'Recruiter', 'Business Owner']

export default function RegisterPage() {
  const [step, setStep] = useState(0)
  const [showPassword, setShowPassword] = useState(false)

  const next = () => setStep((s) => Math.min(s + 1, 2))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center px-6 py-12">
      <Link to="/" className="mb-10">
        <Logo width={120} height={36} />
      </Link>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-10">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-nhonga-500' : i < step ? 'w-4 bg-nhonga-300' : 'w-4 bg-gray-200 dark:bg-gray-700'}`}
          />
        ))}
      </div>

      <div className="w-full max-w-[480px]">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Create account
              </h1>

              {/* Form */}
              <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); next() }}>
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="First Name" required className="auth-input" />
                  <input type="text" placeholder="Last Name" required className="auth-input" />
                </div>
                <input type="email" placeholder="Enter Email" required className="auth-input" />
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    required
                    className="auth-input pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 cursor-pointer"
                  >
                    {showPassword ? <HiEyeSlash className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
                  </button>
                </div>
                <select required className="auth-input appearance-none">
                  <option value="" disabled selected>Country</option>
                  {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>

                <label className="flex items-start gap-3 mt-2 cursor-pointer">
                  <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-gray-300 text-nhonga-500 focus:ring-nhonga-500" />
                  <span className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    Yes, I understand and agree to the <a href="#" className="text-nhonga-600 underline">Nhonga Terms of Use</a>, including the <a href="#" className="text-nhonga-600 underline">User Agreement</a> and <a href="#" className="text-nhonga-600 underline">Privacy Policy</a>.
                  </span>
                </label>

                <Button size="lg" className="w-full rounded-xl mt-4">
                  Create account
                </Button>
              </form>

              <p className="text-sm text-gray-500 text-center mt-6">
                Already have an account? <Link to="/login" className="text-nhonga-600 font-semibold hover:underline">Log in</Link>.
              </p>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <button onClick={back} className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 mb-6 cursor-pointer">
                <HiChevronLeft className="w-4 h-4" /> Back
              </button>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
                Tell us about you
              </h1>
              <p className="text-sm text-gray-400 text-center mb-8">This helps us personalize your experience.</p>

              <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); next() }}>
                <input type="text" placeholder="Headline (e.g. UX Designer at Nhonga)" className="auth-input" />
                <select className="auth-input appearance-none">
                  <option value="" disabled selected>I am a...</option>
                  {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
                <input type="text" placeholder="Company / Institution (optional)" className="auth-input" />
                <input type="url" placeholder="LinkedIn URL (optional)" className="auth-input" />

                <Button size="lg" className="w-full rounded-xl mt-4">
                  Continue
                </Button>
                <button type="button" onClick={next} className="text-xs text-gray-400 hover:text-gray-600 text-center cursor-pointer">
                  Skip for now
                </button>
              </form>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <button onClick={back} className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 mb-6 cursor-pointer">
                <HiChevronLeft className="w-4 h-4" /> Back
              </button>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
                What interests you?
              </h1>
              <p className="text-sm text-gray-400 text-center mb-8">Select all that apply. You can change this later.</p>

              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-wrap gap-3 justify-center">
                  {interests.map((interest) => (
                    <label key={interest} className="cursor-pointer">
                      <input type="checkbox" className="peer hidden" />
                      <span className="px-5 py-2.5 rounded-full text-sm font-semibold border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 peer-checked:bg-nhonga-500 peer-checked:text-white peer-checked:border-nhonga-500 transition-all inline-block">
                        {interest}
                      </span>
                    </label>
                  ))}
                </div>

                <Link to="/">
                  <Button size="lg" className="w-full rounded-xl mt-4">
                    Get Started
                  </Button>
                </Link>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
