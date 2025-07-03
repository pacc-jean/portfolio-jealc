'use client'

import Button from './Button'
import { Download, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        Jean Luc Kajuga
      </h1>
      <p className="text-xl text-gray-600 mb-6 max-w-xl">
        Full-Stack Software Developer. Passionate about building useful, beautiful, and impactful digital experiences.
      </p>
      <div className="flex gap-4">
        <Button href="/assets/jean-luc-cv.pdf" download>
          <Download size={18} /> Download CV
        </Button>
        <Button href="/projects" variant="outline">
          View Projects <ArrowRight size={18} />
        </Button>
      </div>
    </section>
  )
}
