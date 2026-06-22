'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const links = ['Home', 'About', 'Education', 'Research', 'Experience', 'Certifications', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (label: string) => {
    const id = label === 'Home' ? 'hero' : label.toLowerCase();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const navLinks = links.filter(l => l !== 'Contact');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — profile pic + name */}
          <a href="#hero" onClick={e => { e.preventDefault(); scrollTo('Home'); }}
            className="flex items-center gap-2.5 font-space font-bold text-white text-base">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#F97316]/60 shrink-0">
              <Image src="/portfolio/assets/profilepic.jpg" alt="Yasir" fill className="object-cover object-top" unoptimized />
            </div>
            <span className="hidden sm:block tracking-tight text-sm">Yasir Ahmad Malik</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(link => (
              <button key={link} onClick={() => scrollTo(link)}
                className="px-3 py-2 text-xs font-medium text-white/60 hover:text-white transition-colors duration-200 relative group">
                {link}
                <span className="absolute bottom-1 left-3 right-3 h-px bg-gradient-to-r from-[#F97316] to-[#F59E0B] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </button>
            ))}
            <button onClick={() => scrollTo('Contact')}
              className="ml-3 px-4 py-2 text-xs font-semibold rounded-lg text-white transition-all duration-300 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
              Contact Me
            </button>
          </nav>

          {/* Mobile/tablet toggle */}
          <button className="lg:hidden p-2 text-white/70 hover:text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0D0D0D]/95 backdrop-blur-md border-t border-white/5">
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map(link => (
                <button key={link} onClick={() => scrollTo(link)}
                  className="text-left px-4 py-3 text-sm font-medium text-white/60 hover:text-[#F97316] border-b border-white/5 last:border-0 transition-colors rounded-lg hover:bg-white/5">
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
