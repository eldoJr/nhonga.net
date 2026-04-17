import { clsx } from 'clsx'

interface DotPatternProps {
  className?: string
  id?: string
}

export default function DotPattern({ className = '', id = 'section-dots' }: DotPatternProps) {
  return (
    <div className={clsx('w-full h-24 pointer-events-none', className)}>
      <svg className="w-full h-full" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
        <defs>
          <pattern id={`${id}-pat`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1.2" className="fill-nhonga-400/30" />
          </pattern>
          <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <mask id={`${id}-mask`}>
            <rect width="100%" height="100%" fill={`url(#${id}-fade)`} />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id}-pat)`} mask={`url(#${id}-mask)`} />
      </svg>
    </div>
  )
}
