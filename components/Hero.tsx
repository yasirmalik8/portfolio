'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Github, Twitter, Instagram, MessageCircle, ArrowRight, Download } from 'lucide-react';

const roles = ['Junior AI Engineer', 'Flutter Developer', 'Software Engineer'];
const socials = [
  { href: 'https://www.linkedin.com/in/yasirahmadmalik/', icon: Linkedin, label: 'LinkedIn', color: '#0A66C2', bg: 'rgba(10,102,194,0.15)' },
  { href: 'https://github.com/yasirmalik8', icon: Github, label: 'GitHub', color: '#E6EDF3', bg: 'rgba(230,237,243,0.1)' },
  { href: 'https://x.com/yasirahmadm1428?s=21', icon: Twitter, label: 'Twitter', color: '#1D9BF0', bg: 'rgba(29,155,240,0.15)' },
  { href: 'https://www.instagram.com/yasir.malik1428?igsh=ODB2Y2ZyYXA0ODN2&utm_source=qr', icon: Instagram, label: 'Instagram', color: '#E1306C', bg: 'rgba(225,48,108,0.15)' },
  { href: 'https://wa.me/923467336193', icon: MessageCircle, label: 'WhatsApp', color: '#25D366', bg: 'rgba(37,211,102,0.15)' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col lg:flex-row bg-[#0D0D0D] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)' }} />
      </div>

      {/* Left — Text */}
      <div className="flex-1 flex items-center justify-center lg:justify-end px-6 sm:px-10 lg:pr-16 xl:pr-20 py-14 lg:py-0 relative z-10 order-2 lg:order-1">
        <div className="max-w-lg w-full">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-7">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-white/50 uppercase tracking-widest">Available for hire</span>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-white/50 text-base font-medium mb-2">Hi, I am</motion.p>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-space font-bold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)' }}>
            Yasir Ahmad<br />Malik
          </motion.h1>

          {/* Typewriter */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="flex items-center gap-2 mb-8 h-9">
            <span className="text-base sm:text-xl font-semibold gradient-text">{displayed}</span>
            <span className="inline-block w-0.5 h-5 bg-[#F97316] animate-pulse" />
          </motion.div>

          {/* Social icons */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="flex items-center gap-3 mb-10">
            {socials.map(s => (
              <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                whileHover={{ scale: 1.15, y: -3 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{ background: s.bg, border: `1px solid ${s.color}40`, color: s.color }}>
                <s.icon size={16} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
              View Work <ArrowRight size={15} />
            </button>
            <a href="/portfolio/assets/YasirAhmadMalik(R).pdf" download
              className="px-6 py-3 rounded-xl border border-white/15 text-sm font-semibold text-white/80 hover:border-[#F97316]/50 hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
              <Download size={15} /> Download CV
            </a>
          </motion.div>
        </div>
      </div>

      {/* Right — Profile image */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden order-1 lg:order-2 min-h-[360px] sm:min-h-[420px] lg:min-h-0 py-16 lg:py-0">
        {/* Orange glow behind image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-80 h-80 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }} />
        </div>

        {/* Circular image */}
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10">
          {/* Outer glow ring */}
          <div className="absolute -inset-3 rounded-full opacity-35 blur-lg"
            style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }} />
          {/* Gradient border ring */}
          <div className="absolute -inset-1 rounded-full"
            style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }} />
          {/* Image */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden">
            <Image src="/portfolio/assets/profilepic.jpg" alt="Yasir Ahmad Malik"
              fill className="object-cover object-top" unoptimized priority />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <motion.span animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity }}
          className="text-[9px] uppercase tracking-[4px] text-white/40">Scroll</motion.span>
        <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center pt-1.5">
          <motion.div className="w-1 h-1.5 rounded-full bg-[#F97316]"
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
}
