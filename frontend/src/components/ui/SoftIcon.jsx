import { CircleIcon } from '@radix-ui/react-icons'

export function SoftIcon({ icon, Icon, size = 'md', className = '' }) {
  const IconComponent = icon ?? Icon ?? CircleIcon

  const sizeClass = {
    sm: 'soft-icon-sm',
    md: 'soft-icon-md',
    lg: 'soft-icon-lg',
  }[size] ?? 'soft-icon-md'

  return (
    <span className={`soft-icon ${sizeClass} ${className}`.trim()} aria-hidden="true">
      <IconComponent width="18" height="18" />
    </span>
  )
}
