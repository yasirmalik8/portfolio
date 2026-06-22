'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Research from '@/components/Research';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Research />
      <Experience />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
