import { type ReactNode } from 'react'
import { clsx } from 'clsx'

interface WidgetCardProps {
  title: string
  action?: ReactNode
  children: ReactNode
  className?: string
}

export default function WidgetCard({ title, action, children, className }: WidgetCardProps) {
  return (
    <div className={clsx(
      'rounded-2xl overflow-hidden',
      className,
    )}>
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <h3 className="text-[13px] font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
        {action}
      </div>
      <div className="px-4 pb-4">
        {children}
      </div>
    </div>
  )
}
