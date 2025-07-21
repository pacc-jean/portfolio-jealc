'use client';

import React, { useEffect, useRef } from 'react';
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiPhp,
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
} from 'react-icons/si';
import { FaWindows } from 'react-icons/fa';
import styles from '../styles/AboutSection.module.css';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'Python', icon: <SiPython className="text-blue-400" /> },
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-600" /> },
    { name: 'PHP', icon: < SiPhp className='text-purple-900'/>},
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
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bioRef.current) return;
      
      const scrolled = window.pageYOffset;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Parallax effect for bio content
      if (scrolled + windowHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
        const progress = (scrolled - sectionTop + windowHeight) / (sectionHeight + windowHeight);
        const yPos = -(progress * 20);
        bioRef.current.style.transform = `translateY(${yPos}px)`;
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
            entry.target.classList.add(styles.fadeInUp);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (bioRef.current) {
      observer.observe(bioRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.about} ref={sectionRef}>
      <div className={styles.aboutBackground}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.aboutContent} ref={bioRef}>
          <div className={styles.bioSection}>
            <div className={styles.sectionTitle}>
              <h2>About Me</h2>
              <div className={styles.titleUnderline}></div>
            </div>
            
            <div className={styles.bioContent}>
              <div className={styles.bioText}>
                <p>
                  I am a passionate full-stack developer with a love for creating digital experiences 
                  that blend functionality with aesthetic appeal. My journey in tech started with 
                  curiosity and has evolved into a deep appreciation for clean code, innovative 
                  solutions, and continuous learning.
                </p>
                <p>
                  With expertise spanning front-end frameworks to back-end architectures, I thrive 
                  on turning complex problems into elegant solutions. Whether it is building responsive 
                  web applications, designing intuitive user interfaces, or optimizing database 
                  performance, I approach each project with meticulous attention to detail.
                </p>
                <p>
                  When I am not coding, you will find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community. I believe 
                  in the power of collaboration and the endless possibilities that emerge when 
                  creativity meets technology.
                </p>
              </div>
              
              <div className={styles.bioStats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>2+</div>
                  <div className={styles.statLabel}>Years Experience</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>15+</div>
                  <div className={styles.statLabel}>Projects Completed</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>15+</div>
                  <div className={styles.statLabel}>Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Marquee */}
      <div className={styles.skillsMarquee}>
        <div className={styles.marqueeTitle}>
          <h3>Technologies & Tools</h3>
        </div>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeContent}>
            {/* First set of skills */}
            <div className={styles.marqueeRow}>
              {skills.map((skill, index) => (
                <div key={`first-${index}`} className={styles.skillItem}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className={styles.marqueeRow}>
              {skills.map((skill, index) => (
                <div key={`second-${index}`} className={styles.skillItem}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;