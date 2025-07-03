'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md fixed top-0 z-50">
      <Link href="/" className="text-xl font-bold text-blue-600">Jean Luc</Link>
      <div className="space-x-4">
        {navLinks.map(link => (
          <Link
            key={link.path}
            href={link.path}
            className={`hover:text-blue-600 transition ${
              pathname === link.path ? 'text-blue-600 font-semibold' : 'text-gray-700'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
