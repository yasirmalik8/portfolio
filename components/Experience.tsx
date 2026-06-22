'use client';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, TrendingUp } from 'lucide-react';

const experiences = [
  {
    title: 'Junior AI Engineer',
    company: 'Tech Flairz',
    period: 'June 2025 – Present',
    type: 'Full-time',
    description: 'Developed AI agents using LangGraph and LangChain. Integrated OpenAI GPT, Claude, and Gemini APIs into enterprise applications. Built scalable backend services using FastAPI. Designed prompt engineering workflows for AI automation and worked on multi-agent AI architectures for complex decision-making pipelines.',
    highlights: ['LangGraph', 'LangChain', 'OpenAI GPT', 'Claude', 'Gemini', 'FastAPI', 'AI Agents', 'Multi-Agent Systems', 'Prompt Engineering'],
    color: '#F97316',
    icon: TrendingUp,
  },
  {
    title: 'Flutter Developer',
    company: 'Flutterxperts',
    period: 'Jan 2022 – May 2023',
    type: 'Full-time',
    description: 'Developed and maintained cross-platform mobile applications using Flutter and Dart. Built responsive UIs, integrated REST APIs and Firebase services, and implemented state management solutions. Delivered multiple client projects from design to deployment on both iOS and Android platforms.',
    highlights: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Payment Integration', 'Pixel-Perfect UI', 'GetX', 'Provider', 'Google Maps'],
    color: '#F59E0B',
    icon: Briefcase,
  },
];

function AnimatedTimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 30%'] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div ref={ref} className="absolute left-4 sm:left-6 top-0 bottom-0 w-px overflow-hidden">
      <motion.div className="w-full h-full origin-top"
        style={{ scaleY, background: 'linear-gradient(180deg, #F97316 0%, #F59E0B 100%)' }} />
    </div>
  );
}

export default function Experience() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-badge">Experience</span>
            <h2 className="section-heading mt-6">Work History</h2>
          </motion.div>
        </div>

        <div className="relative">
          <AnimatedTimelineLine />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={exp.company} className="relative pl-14 sm:pl-16">
                {/* Dot with pulse */}
                <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-40px' }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="absolute left-2 sm:left-3.5 top-5 z-10">
                  <motion.div animate={{ scale: [1, 1.7, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-full" style={{ background: exp.color }} />
                  <div className="relative w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{ background: exp.color, borderColor: '#111111', boxShadow: `0 0 0 3px ${exp.color}30` }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -50, y: 10 }} whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }} className="card-dark p-6 cursor-default">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${exp.color}12` }}>
                        <exp.icon size={22} style={{ color: exp.color }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg font-space">{exp.title}</h3>
                        <p className="font-semibold text-sm mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-medium px-3 py-1.5 rounded-full block"
                        style={{ background: `${exp.color}12`, color: exp.color, border: `1px solid ${exp.color}25` }}>
                        {exp.period}
                      </span>
                      <span className="text-xs text-white/40 mt-1 block">{exp.type}</span>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tag, ti) => (
                      <motion.span key={tag} initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 + ti * 0.05 }} className="tag">
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
