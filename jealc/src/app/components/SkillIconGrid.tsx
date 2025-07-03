'use client'

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiGooglecloud,
  SiGithub,
  SiGit,
  SiFigma,
  SiCanva,
  SiWix,
  SiMailchimp,
  SiLinux
} from 'react-icons/si'
import { FaJava, FaWindows } from 'react-icons/fa'


const skills = [
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'Python', icon: <SiPython className="text-blue-400" /> },
  { name: 'Java', icon: <FaJava className="text-red-600" /> },
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-600" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
  { name: 'Google APIs', icon: <SiGooglecloud className="text-blue-400" /> },
  { name: 'GitHub', icon: <SiGithub /> },
  { name: 'Git', icon: <SiGit className="text-red-500" /> },
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'Canva', icon: <SiCanva className="text-purple-500" /> },
  { name: 'Wix', icon: <SiWix className="text-black" /> },
  { name: 'Mailchimp', icon: <SiMailchimp className="text-yellow-400" /> },
  { name: 'Linux', icon: <SiLinux /> },
  { name: 'Windows', icon: <FaWindows className="text-blue-500" /> },
]

export default function SkillIconGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {skills.map(({ name, icon }) => (
        <div key={name} className="flex flex-col items-center text-center group">
          <div className="text-3xl group-hover:scale-110 transition">{icon}</div>
          <span className="mt-2 text-sm text-gray-700">{name}</span>
        </div>
      ))}
    </div>
  )
}
