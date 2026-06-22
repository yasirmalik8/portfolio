'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/yasirahmadmalik/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/yasirmalik8',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://x.com/yasirahmadm1428?s=21',
    icon: Twitter,
    label: 'Twitter',
  },
  {
    href: 'https://www.instagram.com/yasir.malik1428?igsh=ODB2Y2ZyYXA0ODN2&utm_source=qr',
    icon: Instagram,
    label: 'Instagram',
  },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleScroll = (href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-white/5">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #7F00FF, #00D4FF, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #7F00FF, #00D4FF)' }}
              >
                Y
              </div>
              <span className="font-space font-semibold text-white">Yasir Ahmad Malik</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Junior AI Engineer & Flutter Developer crafting intelligent and beautiful
              digital experiences from Lahore, Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleScroll(link.href)}
                  className="text-gray-400 hover:text-[#00D4FF] text-sm text-left transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 glass border border-white/8 rounded-xl flex items-center justify-center text-gray-500 hover:text-[#00D4FF] hover:border-[#00D4FF]/30 transition-all duration-300"
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="mailto:yasirahmadmalik8@gmail.com"
                className="text-sm text-[#00D4FF] hover:underline"
              >
                yasirahmadmalik8@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} Yasir Ahmad Malik. Built with
            <Heart size={12} className="text-[#7F00FF] fill-[#7F00FF]" />
            using Next.js & Three.js
          </p>
          <p className="text-xs text-gray-700">
            Lahore, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
