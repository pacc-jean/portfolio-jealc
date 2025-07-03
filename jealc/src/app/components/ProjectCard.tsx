'use client'

import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
}

export default function ProjectCard({ title, description, tech, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm text-blue-600">
        {liveUrl && (
          <a href={liveUrl} target="_blank" className="flex items-center gap-1 hover:underline">
            Live <ExternalLink size={14} />
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank" className="flex items-center gap-1 hover:underline">
            Code <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  )
}
