import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import Hero from '@/components/Hero';
import AcademicJourney from '@/components/AcademicJourney';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Index = () => {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <AcademicJourney />
        <Skills />
        <Projects />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
