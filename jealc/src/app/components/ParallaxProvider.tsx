"use client";

import { useEffect, ReactNode } from 'react';

interface ParallaxProviderProps {
  children: ReactNode;
}

const ParallaxProvider: React.FC<ParallaxProviderProps> = ({ children }) => {
  useEffect(() => {
    const handleSmoothScroll = () => {
      const anchors = document.querySelectorAll('a[href^="#"]');
      anchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
          if (href) {
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        });
      });
    };

    handleSmoothScroll();
  }, []);

  return <>{children}</>;
};

export default ParallaxProvider;