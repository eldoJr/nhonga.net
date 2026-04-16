import { clsx } from 'clsx'

interface AvatarProps {
  name?: string
  src?: string
  size?: 'sm' | 'md' | 'lg'
  showStatus?: boolean
  className?: string
}

const sizeMap = {
  sm: 'w-7 h-7 text-xs',
  md: 'w-9 h-9 text-sm',
  lg: 'w-12 h-12 text-base',
}

const statusSizeMap = {
  sm: 'w-2 h-2',
  md: 'w-2.5 h-2.5',
  lg: 'w-3 h-3',
}

function getInitial(name?: string) {
  if (!name) return '?'
  return name.charAt(0).toUpperCase()
}

export default function Avatar({
  name,
  src,
  size = 'md',
  showStatus = false,
  className = '',
}: AvatarProps) {
  return (
    <div className={clsx('relative inline-flex shrink-0', className)}>
      {src ? (
        <img
          src={src}
          alt={name || 'Avatar'}
          className={clsx(
            'rounded-full object-cover border-2 border-nhonga-500',
            sizeMap[size],
          )}
        />
      ) : (
        <div
          className={clsx(
            'rounded-full flex items-center justify-center',
            'bg-nhonga-100 text-nhonga-800 font-semibold',
            'border-2 border-nhonga-500',
            sizeMap[size],
          )}
        >
          {getInitial(name)}
        </div>
      )}
      {showStatus && (
        <span
          className={clsx(
            'absolute bottom-0 right-0 rounded-full bg-green-500',
            'ring-2 ring-white dark:ring-gray-900',
            statusSizeMap[size],
          )}
        />
      )}
    </div>
  )
}
