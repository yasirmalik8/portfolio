'use client';

import dynamic from 'next/dynamic';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Dynamically import Hero to avoid SSR issues with Three.js
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });

export default function Home() {
  return (
    <main className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
