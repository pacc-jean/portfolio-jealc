import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import GianaChatButton from './components/GianaChatButton';
import Footer from './components/Footer';
import ParallaxProvider from './components/ParallaxProvider';

export default function Home() {
  return (
    <ParallaxProvider>
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <GianaChatButton />
        <Footer />
      </main>
    </ParallaxProvider>
  );
}
