'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, TrendingUp } from 'lucide-react';

const experiences = [
  {
    title: 'Junior AI Engineer Intern',
    company: 'Tech Flariz',
    period: 'June 2025 – Present',
    type: 'Full-time Internship',
    description:
      'Developed and deployed computer vision models for quality control in manufacturing lines. Optimized backend inference latency by 40% using TensorFlow Serving and FastAPI.',
    highlights: ['Computer Vision', 'TensorFlow Serving', 'FastAPI', 'Quality Control AI', '40% Latency Reduction'],
    color: '#00D4FF',
    icon: TrendingUp,
  },
  {
    title: 'Flutter Developer',
    company: 'Flutterxperts',
    period: 'Jan 2022 – May 2023',
    type: 'Full-time',
    description:
      'Collaborated with the design team to implement pixel-perfect UI components. Integrated third-party APIs for real-time data tracking and payment gateways in a customer-facing app.',
    highlights: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Payment Integration', 'Pixel-Perfect UI'],
    color: '#7F00FF',
    icon: Briefcase,
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      className="relative py-24 lg:py-32"
      style={{
        background:
          'radial-gradient(ellipse at 20% 50%, rgba(127, 0, 255, 0.05) 0%, transparent 60%), #050507',
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(180deg, #7F00FF, transparent)' }}
      />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7F00FF] text-sm uppercase tracking-[4px] font-medium mb-3">
            Work History
          </p>
          <h2 className="section-heading text-white">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, #00D4FF, #7F00FF)' }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, #00D4FF 0%, #7F00FF 100%)' }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-20 sm:pl-24"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 sm:left-6 top-6 w-5 h-5 rounded-full border-2 border-[#050507] z-10 flex items-center justify-center"
                  style={{
                    background: exp.color,
                    boxShadow: `0 0 15px ${exp.color}60`,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div
                  className="glass border rounded-2xl p-6 card-hover"
                  style={{ borderColor: `${exp.color}25` }}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${exp.color}15` }}
                      >
                        <exp.icon size={22} style={{ color: exp.color }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg font-space">
                          {exp.title}
                        </h3>
                        <p style={{ color: exp.color }} className="font-semibold text-sm">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span
                        className="text-xs font-semibold px-3 py-1.5 rounded-full block"
                        style={{
                          background: `${exp.color}15`,
                          color: exp.color,
                        }}
                      >
                        {exp.period}
                      </span>
                      <span className="text-xs text-gray-500 mt-1 block">{exp.type}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{
                          background: `${exp.color}10`,
                          border: `1px solid ${exp.color}30`,
                          color: exp.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
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
