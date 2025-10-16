"use client";

import { useEffect, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  sourceUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      
      const scrolled = window.pageYOffset;
      const cardOffset = cardRef.current.offsetTop;
      const cardHeight = cardRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      if (scrolled + windowHeight > cardOffset && scrolled < cardOffset + cardHeight) {
        const cardScrolled = scrolled - cardOffset + windowHeight;
        const cardYPos = -(cardScrolled * 0.1);
        cardRef.current.style.transform = `translateY(${cardYPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      const card = cardRef.current;
      card.style.opacity = '0';
      card.style.transform = 'translateY(50px)';
      card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-yellow-400/10 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/30 hover:shadow-xl hover:shadow-black/30 relative overflow-hidden group"
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 text-yellow-400">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href={project.demoUrl} 
            className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/40"
          >
            To Project
          </a>
          {/*<a 
            href={project.sourceUrl} 
            className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/40"
          >
            Source Code
          </a>*/}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;