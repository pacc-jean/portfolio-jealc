'use client'

import Button from '../components/Button'

export default function AboutSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-semibold">About Me</h2>
      <p className="text-lg text-gray-700 max-w-3xl">
        I’m Jean Luc Kajuga — a full-stack software engineer with a passion for solving real problems through clean, creative code.
        I studied software engineering at Moringa School and graduated in November 2024. Since then, I’ve been sharpening my skills through
        real-world experience, currently volunteering at Voice Of Reconciliation and Pacification (VORP-EA), and building custom solutions like a full website
        for a local Bed & Breakfast.
      </p>
      <p className="text-lg text-gray-700 max-w-3xl">
        I love bringing ideas to life — from backend logic to frontend polish — using tools like React, Next.js, MongoDB, MySQL, Node.js, Python, and more. Whether I’m designing in Figma, automating with Google APIs, or tweaking layouts in CSS, I’m all in.
      </p>

      {/* 🔗 CTA Button */}
      <Button href="/about" variant="outline">
        Find out more →
      </Button>
    </section>
  )
}
