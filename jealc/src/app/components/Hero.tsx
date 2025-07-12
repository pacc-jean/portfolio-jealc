"use client";

import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
      
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 to-black overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        ref={bgRef}
        className="absolute top-0 left-0 w-[120%] h-[120%] animate-pulse"
        style={{
          background: `
            radial-gradient(circle at 30% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(220, 20, 60, 0.06) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-1/5 left-1/10 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-10 animate-bounce" 
           style={{ animationDelay: '0s', animationDuration: '15s' }} />
      <div className="absolute top-3/5 right-1/6 w-15 h-15 bg-gradient-to-br from-red-600 to-red-800 rounded-lg opacity-10 animate-bounce" 
           style={{ animationDelay: '2s', animationDuration: '15s' }} />
      <div className="absolute bottom-1/5 left-1/5 w-25 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg opacity-10 animate-bounce" 
           style={{ animationDelay: '4s', animationDuration: '15s' }} />
      
      {/* Hero Content */}
      <div ref={textRef} className="relative z-10 max-w-4xl px-8">
        <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-white to-blue-500 bg-clip-text text-transparent animate-pulse">
          Jean Luc Kajuga
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 opacity-90">
          Crafting digital experiences with code, creativity, and a touch of magic
        </p>
        <a 
          href="#projects" 
          className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/50"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;