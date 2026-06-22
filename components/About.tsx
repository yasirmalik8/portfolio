'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Code2, Brain, Mail, Phone, MapPin, Zap, Download } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Projects', icon: Code2 },
  { value: '2+', label: 'Years Exp', icon: Brain },
  { value: '100%', label: 'Commitment', icon: Zap },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#111111]">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <span className="section-badge">About Me</span>
          <h2 className="section-heading mt-6">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 60px rgba(249,115,22,0.1)' }}>
              <Image src="/portfolio/assets/yasir.JPG" alt="Yasir Ahmad Malik" width={480} height={560}
                className="w-full h-auto object-cover" unoptimized />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.5) 0%, transparent 60%)' }} />
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-px rounded-2xl border border-[#F97316]/20 pointer-events-none" />
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }}>
            <h3 className="text-2xl lg:text-3xl font-bold font-space text-white mb-5 leading-snug">
              Building <span className="gradient-text">Intelligent</span> &amp; Scalable Solutions
            </h3>
            <p className="text-white/60 leading-relaxed text-sm mb-4">
              AI Engineer and Flutter Developer with 2 years of combined experience — 1 year in Artificial Intelligence and 1 year in cross-platform mobile development. Experienced in building AI-powered applications, AI agents, and backend services using Python, FastAPI, LangGraph, and Large Language Models (OpenAI, Claude, Gemini).
            </p>
            <p className="text-white/60 leading-relaxed text-sm mb-8">
              Passionate about Generative AI, Agentic AI systems, Machine Learning, and solving real-world problems through innovative technology. Currently pursuing an MS in AI at UET Lahore.
            </p>

            {/* Info list */}
            <div className="space-y-3 mb-8">
              {[
                { icon: Mail, label: 'Email', value: 'yasirahmadmalik8@gmail.com', href: 'mailto:yasirahmadmalik8@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+92 344 2536193', href: 'tel:+923442536193' },
                { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan', href: null },
                { icon: Zap, label: 'Status', value: 'Open to Opportunities', href: null },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(249,115,22,0.1)' }}>
                    <item.icon size={14} className="text-[#F97316]" />
                  </div>
                  <span className="text-white/35 text-xs w-16 shrink-0">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-white/75 hover:text-[#F97316] transition-colors font-medium">{item.value}</a>
                  ) : (
                    <span className="text-sm text-white/75 font-medium">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {stats.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }} className="card-dark p-4 text-center rounded-xl">
                  <s.icon size={18} className="mx-auto mb-2 text-[#F97316]" />
                  <div className="text-xl font-bold font-space gradient-text">{s.value}</div>
                  <div className="text-[11px] text-white/40 mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <a
              href="/portfolio/assets/YasirAhmadMalik(R).pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
