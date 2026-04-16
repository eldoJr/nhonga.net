import logoDark from '../../assets/icons/logo-b.svg'
import logoLight from '../../assets/icons/logo-w.svg'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export default function Logo({ className = '', width = 120, height = 40 }: LogoProps) {
  return (
    <>
      <img
        src={logoLight}
        alt="Nhonga"
        width={width}
        height={height}
        className={`block dark:hidden bg-transparent ${className}`}
      />
      <img
        src={logoDark}
        alt="Nhonga"
        width={width}
        height={height}
        className={`hidden dark:block bg-transparent ${className}`}
      />
    </>
  )
}
