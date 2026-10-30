import { Switch as BaseSwitch } from '@base-ui/react/switch'
import { clsx } from 'clsx'

interface SwitchProps {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
}

export function Switch({ checked, defaultChecked, onCheckedChange, className }: SwitchProps) {
  return (
    <BaseSwitch.Root
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      className={clsx(
        'relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent',
        'bg-gray-300 dark:bg-gray-600',
        'transition-colors duration-200 ease-in-out',
        'data-[checked]:bg-nhonga-500',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nhonga-500 focus-visible:ring-offset-2',
        className,
      )}
    >
      <BaseSwitch.Thumb
        className={clsx(
          'pointer-events-none block h-4 w-4 rounded-full bg-white shadow-sm',
          'transition-transform duration-200 ease-in-out',
          'translate-x-0 data-[checked]:translate-x-4',
        )}
      />
    </BaseSwitch.Root>
  )
}
