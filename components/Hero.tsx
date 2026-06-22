'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Instagram, ChevronDown } from 'lucide-react';

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

const ROLES = ['Junior AI Engineer', 'Flutter Developer', 'Software Engineer'];

function TypewriterText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fullText = ROLES[currentIndex];
    const typingSpeed = isDeleting ? 60 : 110;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentText, isDeleting, currentIndex]);

  return (
    <span className="gradient-text font-space font-bold">
      {currentText}
      <span className="inline-block w-0.5 h-7 bg-[#00D4FF] ml-1 animate-pulse align-middle" />
    </span>
  );
}

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/yasirahmadmalik/',
    icon: Linkedin,
    label: 'LinkedIn',
    color: '#0077B5',
  },
  {
    href: 'https://github.com/yasirmalik8',
    icon: Github,
    label: 'GitHub',
    color: '#ffffff',
  },
  {
    href: 'https://x.com/yasirahmadm1428?s=21',
    icon: Twitter,
    label: 'Twitter',
    color: '#1DA1F2',
  },
  {
    href: 'https://www.instagram.com/yasir.malik1428?igsh=ODB2Y2ZyYXA0ODN2&utm_source=qr',
    icon: Instagram,
    label: 'Instagram',
    color: '#E1306C',
  },
];

export default function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050507]"
    >
      {/* Gradient background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #7F00FF 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #00D4FF 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Three.js Scene */}
      <HeroScene />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#00D4FF]/20"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-gray-300 font-medium">Available for Hire</span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-gray-400 text-lg mb-2 font-space">Hi, I&apos;m</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-space text-white leading-tight">
                Yasir Ahmad
                <br />
                <span className="gradient-text">Malik</span>
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-300 h-9 flex items-center"
            >
              <TypewriterText />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-base leading-relaxed max-w-lg"
            >
              Passionate AI Engineer & Flutter Developer bridging the gap between
              artificial intelligence and user-friendly mobile experiences. Based in
              Lahore, Pakistan.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => handleScroll('projects')}
                className="relative px-7 py-3.5 rounded-full font-semibold text-white text-sm overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #7F00FF 0%, #00D4FF 100%)',
                }}
              >
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#7F00FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)',
                  }}
                />
              </button>

              <button
                onClick={() => handleScroll('contact')}
                className="px-7 py-3.5 rounded-full font-semibold text-[#00D4FF] text-sm border border-[#00D4FF]/40 hover:bg-[#00D4FF]/10 hover:border-[#00D4FF] transition-all duration-300 glass"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <span className="text-xs text-gray-500 uppercase tracking-widest">Follow me</span>
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-gray-700 to-transparent" />
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
                  >
                    <social.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #7F00FF, #00D4FF, #7F00FF)',
                  padding: '3px',
                  borderRadius: '50%',
                  animation: 'spin 6s linear infinite',
                }}
              />

              {/* Animated border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 60%, #00D4FF 80%, transparent 100%)',
                  borderRadius: '50%',
                }}
              />

              {/* Glass card */}
              <div
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden animate-pulse-glow"
                style={{
                  border: '2px solid rgba(0, 212, 255, 0.3)',
                  boxShadow:
                    '0 0 40px rgba(0, 212, 255, 0.2), 0 0 80px rgba(127, 0, 255, 0.1), inset 0 0 40px rgba(0, 0, 0, 0.3)',
                }}
              >
                <Image
                  src="/portfolio/assets/profilepic.jpg"
                  alt="Yasir Ahmad Malik"
                  fill
                  className="object-cover object-top"
                  unoptimized
                  priority
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent 60%, rgba(5,5,7,0.4) 100%)',
                  }}
                />
              </div>

              {/* Stats floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-8 top-1/4 glass border border-white/10 rounded-2xl px-4 py-3 text-center"
              >
                <div className="text-xl font-bold gradient-text font-space">15+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -right-8 bottom-1/4 glass border border-white/10 rounded-2xl px-4 py-3 text-center"
              >
                <div className="text-xl font-bold gradient-text font-space">2+</div>
                <div className="text-xs text-gray-400">Years Exp</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => handleScroll('about')}
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-[#00D4FF]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
