import { motion } from 'framer-motion'
import { clsx } from 'clsx'

interface NavLinkProps {
  label: string
  href?: string
  active?: boolean
  className?: string
  onClick?: () => void
}

export default function NavLink({
  label,
  href = '#',
  active = false,
  className = '',
  onClick,
}: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={clsx(
        'relative px-1 py-2 text-xs font-semibold tracking-wider uppercase transition-colors',
        active
          ? 'text-nhonga-700 dark:text-nhonga-400'
          : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
        className,
      )}
    >
      {label}
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-nhonga-500"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
    </a>
  )
}
