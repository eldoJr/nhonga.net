import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiEye, HiEyeSlash, HiCheckCircle } from 'react-icons/hi2'
import Logo from '../atoms/logo'
import Button from '../atoms/button'

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [done, setDone] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center px-6 py-12">
      <Link to="/" className="mb-10">
        <Logo width={120} height={36} />
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[480px]"
      >
        {!done ? (
          <>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
              Reset password
            </h1>
            <p className="text-sm text-gray-400 text-center mb-8">
              Enter your new password below.
            </p>

            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setDone(true) }}>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="New Password"
                  required
                  className="auth-input pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showPassword ? <HiEyeSlash className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  required
                  className="auth-input pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showConfirm ? <HiEyeSlash className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
                </button>
              </div>
              <Button size="lg" className="w-full rounded-xl mt-2">
                Reset Password
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-nhonga-100/80 dark:bg-nhonga-900/40 flex items-center justify-center text-nhonga-600 dark:text-nhonga-400 mx-auto mb-6">
              <HiCheckCircle className="w-7 h-7" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Password updated
            </h1>
            <p className="text-sm text-gray-400 mb-8">
              Your password has been reset successfully. You can now log in.
            </p>
            <Link to="/login">
              <Button size="lg" className="rounded-xl">
                Go to Login
              </Button>
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  )
}
