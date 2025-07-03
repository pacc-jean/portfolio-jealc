'use client'

import AboutSection from '../components/AboutSection'
import SkillIconGrid from '../components/SkillIconGrid'

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <AboutSection />
      <div>
        <h3 className="text-2xl font-medium mb-4">Tech Stack</h3>
        <SkillIconGrid />
      </div>
    </div>
  )
}
