import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ParallaxProvider from './components/ParallaxProvider';

export default function Home() {
  return (
    <ParallaxProvider>
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
      </main>
    </ParallaxProvider>
  );
}
