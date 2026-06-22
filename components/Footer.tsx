'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, MessageCircle, Mail, ArrowUp } from 'lucide-react';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/yasirahmadmalik/', icon: Linkedin, label: 'LinkedIn', color: '#0A66C2', bg: 'rgba(10,102,194,0.15)' },
  { href: 'https://github.com/yasirmalik8', icon: Github, label: 'GitHub', color: '#E6EDF3', bg: 'rgba(230,237,243,0.1)' },
  { href: 'https://x.com/yasirahmadm1428?s=21', icon: Twitter, label: 'Twitter', color: '#1D9BF0', bg: 'rgba(29,155,240,0.15)' },
  { href: 'https://www.instagram.com/yasir.malik1428?igsh=ODB2Y2ZyYXA0ODN2&utm_source=qr', icon: Instagram, label: 'Instagram', color: '#E1306C', bg: 'rgba(225,48,108,0.15)' },
  { href: 'https://wa.me/923467336193', icon: MessageCircle, label: 'WhatsApp', color: '#25D366', bg: 'rgba(37,211,102,0.15)' },
];

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleScroll = (href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0D0D0D] border-t border-white/5">
      {/* Orange gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #F97316, #F59E0B, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>YM</div>
              <span className="font-space font-semibold text-white">Yasir Ahmad Malik</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Junior AI Engineer &amp; Flutter Developer crafting intelligent and beautiful digital experiences from Lahore, Pakistan.
            </p>
            <a href="mailto:yasirahmadmalik8@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-[#F97316] hover:text-[#F59E0B] transition-colors font-medium">
              <Mail size={14} />
              yasirahmadmalik8@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs text-white/30 uppercase tracking-widest mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navLinks.map(link => (
                <button key={link.href} onClick={() => handleScroll(link.href)}
                  className="text-white/45 hover:text-[#F97316] text-sm text-left transition-colors duration-200">
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Back to top */}
          <div>
            <h4 className="text-xs text-white/30 uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map(s => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ background: s.bg, border: `1px solid ${s.color}40`, color: s.color }}>
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
            <button onClick={scrollToTop}
              className="flex items-center gap-2 text-xs text-white/35 hover:text-[#F97316] transition-colors duration-200 font-medium">
              <ArrowUp size={14} />
              Back to top
            </button>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">&copy; {new Date().getFullYear()} Yasir Ahmad Malik. All rights reserved.</p>
          <p className="text-xs text-white/20">Lahore, Pakistan &bull; Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
