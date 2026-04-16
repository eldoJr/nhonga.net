import { useState, useRef, useEffect, type ReactNode } from 'react'
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
            'w-4 h-4 text-gray-500 transition-transform',
            open && 'rotate-180',
          )}
        />
      </button>
      {open && (
        <div
          className={clsx(
            'absolute top-full right-0 mt-2 min-w-[180px] z-50',
            'bg-white dark:bg-gray-800 rounded-lg shadow-lg',
            'border border-gray-100 dark:border-gray-700',
            'py-1',
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}

interface DropdownItemProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export function DropdownItem({ children, onClick, className = '' }: DropdownItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'w-full text-left px-4 py-2 text-sm cursor-pointer',
        'text-gray-700 dark:text-gray-200',
        'hover:bg-gray-50 dark:hover:bg-gray-700',
        'transition-colors',
        className,
      )}
    >
      {children}
    </button>
  )
}
