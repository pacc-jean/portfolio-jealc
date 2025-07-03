'use client'

import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'VORP-EA Website',
    description: 'Maintaining and building new features for the NGO’s platform — enabling better outreach, engagement, and donor support.',
    tech: ['React', 'Next.js', 'Tailwind', 'Node.js'],
    liveUrl: 'https://vorp-ea.vercel.app',
    githubUrl: '', // if public
  },
  {
    title: 'B&B Booking System',
    description: 'End-to-end website and booking experience for a local Bed & Breakfast. Integrated payments and Google Maps.',
    tech: ['React', 'MongoDB', 'Node.js', 'Google APIs'],
    liveUrl: '', // add later
    githubUrl: '', // add if needed
  },
  {
    title: 'Portfolio Site',
    description: 'This very site — designed and coded from scratch as a live résumé and showcase.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/your-username/portfolio',
  },
]

export default function ProjectsSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
