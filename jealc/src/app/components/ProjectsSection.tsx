"use client";

import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  sourceUrl: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'VORP-EA Website',
      description: 'A lively, responsive website for a newly created NGO; Voice Of Reconciliation and Pacification East Africa (VORP-EA). Features include an informative homepage, programs & team showcase, and donation integration.',
      technologies: ['React', 'Vite', 'TailWind CSS'],
      demoUrl: 'https://vorp-ea.vercel.app',
      sourceUrl: 'https://github.com/pacc-jean/VORP-EA.git'
    },
    {
      id: 2,
      title: 'My Developer Portfolio',
      description: 'A showcase of my work as a developer, including projects, skills, and contact information.',
      technologies: ['Next.js', 'TailWind CSS', 'Vercel'],
      demoUrl: 'https://jealc.vercel.app',
      sourceUrl: 'https://github.com/pacc-jean/portfolio-jealc.git'
    },
    {
      id: 3,
      title: 'Bed and Breakfast Booking App',
      description: 'A user-friendly web application for booking accommodations at Lion Hill Place, Nakuru. Features include a google maps integration, booking placement and email confirmations, and bookings logging onto google sheets.',
      technologies: ['Node.js', 'Nodemailer', 'EmailJs', 'Google APIs', 'React', 'TailWind CSS', 'Vite'],
      demoUrl: 'https://lion-hill-place-frontend.onrender.com',
      sourceUrl: 'https://github.com/pacc-jean/bed-breakfast.git'
    },
    {
      id: 4,
      title: 'G.I.A.N.A',
      description: 'G.I.A.N.A shorthand for (General Interface for AI Navigation and Assistance) is an ambitious, personal, and locally run LLM powered by Ollama (gemma:2b). I hope to use it as an AI assitant in my projects and systems. It is currently still in its infancy.',
      technologies: ['Flask', 'Ollama', 'gemma:2b'],
      demoUrl: '',
      sourceUrl: 'https://github.com/pacc-jean/G.I.A.N.A.git'
    },
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-yellow-400" 
              style={{ textShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}>
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 opacity-80">
            A collection of my recent work and experiments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;