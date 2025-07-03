'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { X, User, HelpCircle, Home, Briefcase } from 'lucide-react'

export default function MobileDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-1/2 left-0 h-[80%] w-72 bg-white/10 backdrop-blur-md text-white z-[999] shadow-lg rounded-r-3xl p-6"
    >
      {/* Close Button */}
      <div className="flex justify-end mb-4">
        <button onClick={onClose}>
          <X className="text-black" />
        </button>
      </div>

      {/* Profile Section */}
        <Image
          src="/assets/avatar.jpg"
          alt="Profile"
          width={64}
          height={64}
          className="w-16 h-16 rounded-full border-2 border-white mb-2"
        />
        <p className="text-lg text-black font-semibold">Hello, I&#39;m Jean Luc</p>

      {/* Nav Items */}
      <div className="flex flex-col gap-4 text-black text-sm">
        <NavItem icon={<Home size={18} />} label="Home" href="/" />
        <NavItem icon={<User size={18} />} label="About" href="/about" />
        <NavItem icon={<Briefcase size={18} />} label="Projects" href="/projects" />
        <NavItem icon={<HelpCircle size={18} />} label="Contact" href="/contact" />
      </div>

    </motion.div>
  )
}

function NavItem({ icon, label, href, bold }: { icon: React.ReactNode; label: string; href: string; bold?: boolean }) {
  return (
    <Link href={href} className={`flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/10 ${bold ? 'font-bold' : ''}`}>
      {icon}
      <span>{label}</span>
    </Link>
  )
}
