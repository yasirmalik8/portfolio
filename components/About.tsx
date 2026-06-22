'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Code2, Brain, Smartphone } from 'lucide-react';

const stats = [
  {
    value: '15+',
    label: 'Projects Completed',
    icon: Code2,
    color: '#00D4FF',
  },
  {
    value: '2+',
    label: 'Years Experience',
    icon: Brain,
    color: '#7F00FF',
  },
  {
    value: '100%',
    label: 'Commitment',
    icon: Smartphone,
    color: '#00D4FF',
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#050507]">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(180deg, #7F00FF, transparent)' }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00D4FF] text-sm uppercase tracking-[4px] font-medium mb-3">
            Who I Am
          </p>
          <h2 className="section-heading text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #7F00FF, #00D4FF)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Decorative elements */}
              <div
                className="absolute -top-4 -left-4 w-32 h-32 rounded-2xl opacity-20"
                style={{ background: 'linear-gradient(135deg, #7F00FF, #00D4FF)' }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl opacity-20"
                style={{ background: 'linear-gradient(135deg, #00D4FF, #7F00FF)' }}
              />

              {/* Image container */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  border: '1px solid rgba(0, 212, 255, 0.2)',
                  boxShadow: '0 25px 80px rgba(0, 0, 0, 0.5), 0 0 40px rgba(127, 0, 255, 0.1)',
                }}
              >
                <Image
                  src="/portfolio/assets/yasir.JPG"
                  alt="Yasir Ahmad Malik"
                  width={400}
                  height={480}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(5,5,7,0.6) 0%, transparent 50%)',
                  }}
                />
              </div>

              {/* Floating label */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass border border-white/10 rounded-full px-5 py-2 whitespace-nowrap">
                <span className="text-xs text-gray-300 font-medium">
                  📍 Lahore, Pakistan
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white font-space mb-4">
                Passionate Developer &amp;{' '}
                <span className="gradient-text">AI Enthusiast</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                I am a passionate Junior AI Engineer and Flutter Developer dedicated to
                bridging the gap between artificial intelligence and user-friendly mobile
                experiences. With a strong foundation in Python, FastAPI, and modern
                software engineering, I craft applications that are not just functional,
                but intelligent.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { label: 'Email', value: 'yasirahmadmalik8@gmail.com', link: 'mailto:yasirahmadmalik8@gmail.com' },
                { label: 'Location', value: 'Lahore, Pakistan', link: null },
                { label: 'Availability', value: 'Open to Opportunities', link: null },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 uppercase tracking-wider w-24 shrink-0">
                    {item.label}
                  </span>
                  <span className="text-gray-400 text-sm">•</span>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-[#00D4FF] text-sm hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-gray-300 text-sm">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="glass border border-white/8 rounded-2xl p-4 text-center card-hover"
                  style={{
                    borderColor: `${stat.color}20`,
                  }}
                >
                  <stat.icon
                    size={20}
                    className="mx-auto mb-2"
                    style={{ color: stat.color }}
                  />
                  <div
                    className="text-2xl font-bold font-space"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="pt-2"
            >
              <a
                href="/portfolio/assets/yasir.JPG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #7F00FF 0%, #00D4FF 100%)' }}
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
