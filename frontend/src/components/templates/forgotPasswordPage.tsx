import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiEnvelope, HiChevronLeft } from 'react-icons/hi2'
import Logo from '../atoms/logo'
import Button from '../atoms/button'

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false)

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
        <Link to="/login" className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 mb-6">
          <HiChevronLeft className="w-4 h-4" /> Back to login
        </Link>

        {!sent ? (
          <>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
              Forgot password?
            </h1>
            <p className="text-sm text-gray-400 text-center mb-8">
              Enter your email and we'll send you a link to reset your password.
            </p>

            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              <input type="email" placeholder="Enter Email" required className="auth-input" />
              <Button size="lg" className="w-full rounded-xl mt-2">
                Send Reset Link
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-nhonga-100/80 dark:bg-nhonga-900/40 flex items-center justify-center text-nhonga-600 dark:text-nhonga-400 mx-auto mb-6">
              <HiEnvelope className="w-7 h-7" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Check your email
            </h1>
            <p className="text-sm text-gray-400 mb-8">
              We sent a password reset link to your email. It may take a few minutes to arrive.
            </p>
            <button onClick={() => setSent(false)} className="text-xs text-nhonga-600 font-semibold hover:underline cursor-pointer">
              Didn&apos;t receive it? Try again
            </button>
          </div>
        )}
      </motion.div>
    </div>
  )
}
