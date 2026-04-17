import { useState, useRef, useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { HiChevronDown } from 'react-icons/hi2'
import { clsx } from 'clsx'

interface DropdownProps {
  trigger: ReactNode
  children: ReactNode
  className?: string
}

export default function Dropdown({ trigger, children, className = '' }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className={clsx('relative inline-flex', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 cursor-pointer"
      >
        {trigger}
        <HiChevronDown
          className={clsx(
            'w-3.5 h-3.5 text-gray-400 transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>
      {open && (
        <div
          className={clsx(
            'absolute top-full right-0 mt-2 min-w-[160px] z-50',
            'bg-white dark:bg-gray-800 rounded-xl shadow-lg',
            'border border-gray-100 dark:border-gray-700',
            'py-1.5',
          )}
        >
          {typeof children === 'object' && Array.isArray(children)
            ? children.map((child, i) =>
                child ? <div key={i} onClick={() => setOpen(false)}>{child}</div> : null,
              )
            : <div onClick={() => setOpen(false)}>{children}</div>
          }
        </div>
      )}
    </div>
  )
}

interface DropdownItemProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export function DropdownItem({ children, href, onClick, className = '' }: DropdownItemProps) {
  const classes = clsx(
    'w-full text-left px-4 py-1.5 text-xs cursor-pointer block',
    'text-gray-600 dark:text-gray-300',
    'hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white',
    'transition-colors',
    className,
  )

  if (href) {
    return (
      <Link to={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
