'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import MobileDrawer from './MobileDrawer'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [showNav, setShowNav] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setShowNav(currentY < lastScrollY || currentY < 10)
      setLastScrollY(currentY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <nav
        className={`fixed w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
          showNav ? 'top-0' : '-top-24'
        } bg-white/80 backdrop-blur-md shadow-md`}
      >
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Jean Luc
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.path}
              href={link.path}
              className={`hover:text-blue-600 transition ${
                pathname === link.path ? 'text-blue-600 font-semibold' : 'text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        {!menuOpen && (
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-gray-800"
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
        )}

      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <MobileDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      )}
    </>
  )
}
