import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiEye, HiEyeSlash, HiOutlineSun } from 'react-icons/hi2'
import Logo from '../atoms/logo'
import Button from '../atoms/button'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'admin' && password === 'admin123') {
      localStorage.setItem('nhonga_auth', 'true')
      navigate('/app')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center px-6 py-12">
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

      <Link to="/" className="mb-10">
        <div className="dark:hidden"><Logo width={120} height={36} /></div>
        <img src="/logo-w.png" alt="Nhonga" width={120} height={36} className="hidden dark:block" />
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[480px]"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Welcome back
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <input type="text" placeholder="Username" required value={email} onChange={(e) => setEmail(e.target.value)} className="auth-input" />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-nhonga-500 focus:ring-nhonga-500" />
              <span className="text-xs text-gray-500">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-xs text-nhonga-600 font-semibold hover:underline">Forgot password?</Link>
          </div>

          <Button size="lg" className="w-full rounded-xl mt-4">
            Log in
          </Button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Don&apos;t have an account? <Link to="/register" className="text-nhonga-600 font-semibold hover:underline">Sign up</Link>.
        </p>
      </motion.div>
    </div>
  )
}
