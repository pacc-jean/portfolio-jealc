'use client'

import { Mail, Github, Linkedin } from 'lucide-react'
import Button from '../components/Button'
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-semibold">Get in Touch</h2>
      <p className="text-lg text-gray-700 max-w-2xl">
        I&apos;m currently open to internship opportunities, freelance work, or collaborating on meaningful projects. Let&apos;s build something great together.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link href="mailto:jean.l.kajuga@gmail.com" className="flex items-center gap-2 text-blue-600 hover:underline">
          <Mail size={18} /> jean.l.kajuga@gmail.com
        </Link>
        <Link href="https://github.com/your-github" target="_blank" className="flex items-center gap-2 text-blue-600 hover:underline">
          <Github size={18} /> github.com/your-github
        </Link>
        <Link href="https://linkedin.com/in/your-linkedin" target="_blank" className="flex items-center gap-2 text-blue-600 hover:underline">
          <Linkedin size={18} /> linkedin.com/in/your-linkedin
        </Link>
      </div>

      <div>
        <Link href="/assets/jean-luc-cv.pdf" target="_blank" rel="noopener noreferrer">
          <Button>
            Download My CV
          </Button>
        </Link>
      </div>
    </section>
  )
}
