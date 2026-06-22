'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Smartphone, Globe, Server } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: '#00D4FF',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision', 'NLP', 'Data Analysis', 'Keras', 'OpenCV', 'Scikit-learn', 'MediaPipe'],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: '#7F00FF',
    skills: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'State Management', 'UI/UX Design', 'GetX', 'Provider', 'Bloc', 'Hive'],
  },
  {
    title: 'Web Development',
    icon: Globe,
    color: '#00D4FF',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'REST APIs', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Backend & Tools',
    icon: Server,
    color: '#7F00FF',
    skills: ['FastAPI', 'SQL/NoSQL', 'Git/GitHub', 'Docker', 'CI/CD', 'Linux', 'PostgreSQL', 'MongoDB', 'Redis', 'Postman'],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      className="relative py-24 lg:py-32"
      style={{
        background:
          'radial-gradient(ellipse at 30% 60%, rgba(127, 0, 255, 0.05) 0%, transparent 60%), #050507',
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(180deg, #7F00FF, transparent)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7F00FF] text-sm uppercase tracking-[4px] font-medium mb-3">
            What I Know
          </p>
          <h2 className="section-heading text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, #00D4FF, #7F00FF)' }}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass border rounded-2xl p-6 card-hover relative overflow-hidden"
              style={{ borderColor: `${category.color}20` }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 0% 0%, ${category.color}06 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${category.color}15`,
                      border: `1px solid ${category.color}25`,
                    }}
                  >
                    <category.icon size={20} style={{ color: category.color }} />
                  </div>
                  <h3 className="font-bold text-white font-space text-base">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: i * 0.1 + j * 0.04 }}
                      className="text-xs px-3 py-1.5 rounded-full font-medium cursor-default transition-all duration-300 hover:scale-105"
                      style={{
                        background: `${category.color}08`,
                        border: `1px solid ${category.color}20`,
                        color: category.color === '#00D4FF' ? '#7dd3fc' : '#c084fc',
                      }}
                      whileHover={{
                        background: `${category.color}18`,
                        borderColor: `${category.color}50`,
                        boxShadow: `0 0 12px ${category.color}30`,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
