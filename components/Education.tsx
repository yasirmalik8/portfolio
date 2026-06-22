'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Artificial Intelligence',
    period: '2023 – 2025',
    description:
      'Specialized in Artificial Intelligence & Machine Learning and Computer Vision.',
    subjects: ['Artificial Intelligence', 'Machine Learning', 'Computer Vision', 'Deep Learning', 'Generative AI'],
    icon: GraduationCap,
    color: '#00D4FF',
  },
  {
    degree: 'Bachelor of Science in Information Technology',
    period: '2018 – 2022',
    description:
      'Specialized in Information Technology. Graduated with Honors. Capstone project focused on Cab Booking Android Application.',
    subjects: ['Data Structures', 'C++ Programming', 'OOP', 'Java Programming'],
    icon: GraduationCap,
    color: '#7F00FF',
  },
  {
    degree: 'Fsc. Pre Engineering',
    period: '2016 – 2018',
    description: 'Pre-Engineering studies focusing on core science subjects.',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    icon: BookOpen,
    color: '#00D4FF',
  },
  {
    degree: 'Matriculation',
    period: '2014 – 2016',
    description: 'Secondary school education with science subjects.',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    icon: BookOpen,
    color: '#7F00FF',
  },
];

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="education"
      className="relative py-24 lg:py-32"
      style={{
        background:
          'radial-gradient(ellipse at 80% 50%, rgba(0, 212, 255, 0.04) 0%, transparent 60%), #050507',
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(180deg, #00D4FF, transparent)' }}
      />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00D4FF] text-sm uppercase tracking-[4px] font-medium mb-3">
            Academic Background
          </p>
          <h2 className="section-heading text-white">
            My <span className="gradient-text">Education</span>
          </h2>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, #7F00FF, #00D4FF)' }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, #7F00FF 0%, #00D4FF 50%, transparent 100%)' }}
          />

          <div className="space-y-10">
            {education.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex flex-col sm:flex-row gap-6 sm:gap-8 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 sm:left-1/2 sm:-translate-x-1/2 -translate-y-1 w-3.5 h-3.5 rounded-full border-2 border-[#050507] z-10`}
                  style={{
                    background: item.color,
                    boxShadow: `0 0 10px ${item.color}80`,
                    top: '24px',
                  }}
                />

                {/* Date badge — desktop only */}
                <div
                  className={`hidden sm:flex flex-1 ${
                    i % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'
                  } items-start pt-4`}
                >
                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      color: item.color,
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                {/* Card */}
                <div className={`flex-1 sm:flex sm:${i % 2 === 0 ? 'justify-start pl-12' : 'justify-end pr-12'} ml-14 sm:ml-0`}>
                  <div
                    className="glass border border-white/8 rounded-2xl p-6 w-full sm:max-w-md card-hover"
                    style={{ borderColor: `${item.color}20` }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${item.color}15` }}
                      >
                        <item.icon size={20} style={{ color: item.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        {/* Mobile date */}
                        <span
                          className="sm:hidden text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block"
                          style={{
                            background: `${item.color}15`,
                            color: item.color,
                          }}
                        >
                          {item.period}
                        </span>
                        <h3 className="font-bold text-white text-base font-space leading-snug">
                          {item.degree}
                        </h3>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {item.subjects.map((subject) => (
                            <span
                              key={subject}
                              className="text-xs px-2.5 py-1 rounded-full"
                              style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#9ca3af',
                              }}
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
