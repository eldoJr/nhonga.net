import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiEye, HiEyeSlash, HiOutlineSun } from 'react-icons/hi2'
import appleIcon from '../../assets/icons/apple.png'
import googleIcon from '../../assets/icons/google.png'
import Logo from '../atoms/logo'
import Button from '../atoms/button'

const countries = ['Mozambique', 'Portugal', 'Brazil', 'South Africa', 'Angola', 'Germany', 'United Kingdom', 'United States', 'Other']

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center px-5 py-8 sm:px-6 sm:py-12">
      <button
        onClick={() => {
          const next = !document.documentElement.classList.contains('dark')
          document.documentElement.classList.toggle('dark', next)
          localStorage.setItem('nhonga_theme', next ? 'dark' : 'light')
        }}
        className="absolute top-6 right-6 p-2 rounded-xl transition-colors text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer"
      >
        <div className="relative w-[18px] h-[18px]">
          <HiOutlineSun className="w-[18px] h-[18px]" />
          <div className="absolute inset-0 flex items-center justify-center transition-opacity dark:opacity-100 opacity-0">
            <div className="w-[22px] h-[1.5px] bg-current rotate-45 rounded-full" />
          </div>
        </div>
      </button>

      <Link to="/" className="absolute top-5 left-6">
        <div className="dark:hidden"><Logo width={110} height={32} /></div>
        <img src="/logo-w.png" alt="Nhonga" width={110} height={32} className="hidden dark:block" />
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[480px]"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-5 sm:mb-6">
          Create account
        </h1>

        {/* Social login */}
        <div className="flex gap-2 sm:gap-3 mb-5 sm:mb-6">
          <button className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-w-0">
            <img src={appleIcon} alt="Apple" className="w-5 h-5 shrink-0 object-contain" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 truncate">Continue with Apple</span>
          </button>
          <button className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-w-0">
            <img src={googleIcon} alt="Google" className="w-5 h-5 shrink-0 object-contain" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 truncate">Continue with Google</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5 sm:mb-6">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          <span className="text-xs text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
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
    </div>
  )
}
