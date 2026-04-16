import iconDark from '../../assets/icons/icon-b.svg'
import iconLight from '../../assets/icons/icon-w.svg'

interface IconProps {
  className?: string
  size?: number
}

export default function Icon({ className = '', size = 32 }: IconProps) {
  return (
    <>
      <img
        src={iconLight}
        alt="Nhonga"
        width={size}
        height={size}
        className={`block dark:hidden bg-transparent ${className}`}
      />
      <img
        src={iconDark}
        alt="Nhonga"
        width={size}
        height={size}
        className={`hidden dark:block bg-transparent ${className}`}
      />
    </>
  )
}
