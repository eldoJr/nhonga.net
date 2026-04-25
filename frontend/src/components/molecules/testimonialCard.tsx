import { clsx } from 'clsx'

interface TestimonialCardProps {
  name: string
  handle: string
  image: string
  description: string
  className?: string
}

export default function TestimonialCard({
  name,
  handle,
  image,
  description,
  className = '',
}: TestimonialCardProps) {
  return (
    <div
      className={clsx(
        'mx-2 flex h-32 w-80 shrink-0 cursor-pointer overflow-hidden rounded-xl',
        'bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700 p-3',
        'transition-all duration-300',
        'hover:border-nhonga-400 dark:hover:border-nhonga-500 hover:shadow-[0_0_12px_rgba(106,229,137,0.15)]',
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-gray-100 dark:border-gray-700">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-bold text-gray-900 dark:text-white">{name}</span>
            <span className="text-xs text-gray-400">{handle}</span>
          </div>
          <p className="mt-1 line-clamp-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
