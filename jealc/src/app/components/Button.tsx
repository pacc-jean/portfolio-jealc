import { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: ReactNode
  href?: string
  download?: boolean
  variant?: 'primary' | 'outline'
}

export default function Button({ children, href, download = false, variant = 'primary' }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  }

  const className = `${base} ${variants[variant]}`

  if (href) {
    return (
      <Link href={href} download={download} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <button className={className}>
      {children}
    </button>
  )
}
