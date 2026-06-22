'use client';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen, ExternalLink } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Artificial Intelligence',
    institution: 'University of Engineering & Technology Lahore',
    link: 'https://www.uet.edu.pk/home/',
    period: '2023 – 2026',
    description: 'Specialized in Artificial Intelligence & Machine Learning and Computer Vision. Currently pursuing advanced studies in Generative AI and Agentic Systems.',
    subjects: ['Artificial Intelligence', 'Machine Learning', 'Computer Vision', 'Deep Learning', 'Generative AI'],
    icon: GraduationCap,
    color: '#F97316',
  },
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Ghazi University Dera Ghazi Khan',
    link: 'https://gudgk.edu.pk/',
    period: '2018 – 2022',
    description: 'Graduated with Honors. Specialized in Information Technology. Capstone project focused on Cab Booking Android Application using Flutter and Firebase.',
    subjects: ['Data Structures', 'C++ Programming', 'OOP', 'Java Programming', 'Database Systems'],
    icon: GraduationCap,
    color: '#F59E0B',
  },
  {
    degree: 'FSc. Pre-Engineering',
    institution: 'Punjab College Taunsa Sharif',
    link: 'https://pgc.edu/campus/taunsa-sharif/',
    period: '2016 – 2018',
    description: 'Pre-Engineering studies focusing on core science subjects with strong foundation in Mathematics and Physics.',
    subjects: ['Mathematics', 'Physics', 'Chemistry'],
    icon: BookOpen,
    color: '#F97316',
  },
  {
    degree: 'Matriculation (SSC)',
    institution: 'New Garrison Public Higher Secondary School, Taunsa Sharif',
    link: null,
    period: '2014 – 2016',
    description: 'Secondary school education with science group subjects. Built strong fundamentals in Mathematics and Natural Sciences.',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    icon: BookOpen,
    color: '#F59E0B',
  },
];

function AnimatedTimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div ref={ref} className="absolute left-4 sm:left-6 top-0 bottom-0 w-px overflow-hidden">
      <motion.div className="w-full h-full origin-top"
        style={{ scaleY, background: 'linear-gradient(180deg, #F97316 0%, #F59E0B 100%)' }} />
    </div>
  );
}

export default function Education() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section id="education" className="relative py-24 lg:py-32 bg-[#0D0D0D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-badge">Education</span>
            <h2 className="section-heading mt-6">Academic Background</h2>
          </motion.div>
        </div>

        <div className="relative">
          <AnimatedTimelineLine />
          <div className="space-y-8">
            {education.map((item, i) => (
              <div key={item.degree} className="relative pl-14 sm:pl-16">
                {/* Dot */}
                <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-40px' }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="absolute left-2 sm:left-3.5 top-5 z-10 w-5 h-5 rounded-full border-2"
                  style={{ background: item.color, borderColor: '#0D0D0D', boxShadow: `0 0 0 3px ${item.color}30` }} />

                <motion.div initial={{ opacity: 0, x: -40, y: 10 }} whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }} className="card-dark p-6 cursor-default">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${item.color}15` }}>
                        <item.icon size={18} style={{ color: item.color }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base font-space leading-snug">{item.degree}</h3>
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-semibold mt-0.5 hover:underline transition-colors"
                            style={{ color: item.color }}>
                            {item.institution}
                            <ExternalLink size={11} />
                          </a>
                        ) : (
                          <p className="text-sm font-semibold mt-0.5" style={{ color: item.color }}>{item.institution}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full shrink-0 self-start sm:self-auto"
                      style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}>
                      {item.period}
                    </span>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.subjects.map((subject, si) => (
                      <motion.span key={subject} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.2 + si * 0.06 }} className="tag">
                        {subject}
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
