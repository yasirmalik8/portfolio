'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Cab Booking Android Application',
    description:
      'A user-friendly cross-platform app that allows users to book rides, track drivers in real-time, and manage trip history seamlessly.',
    image: '/portfolio/assets/splash.jpg',
    tags: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/yasirmalik8',
    color: '#00D4FF',
  },
  {
    title: 'Object Detection',
    description:
      'A computer vision system capable of detecting and classifying multiple objects in real-time video streams using deep learning models.',
    image: '/portfolio/assets/object.jpg',
    tags: ['Python', 'TensorFlow', 'OpenCV'],
    github: 'https://github.com/yasirmalik8',
    color: '#7F00FF',
  },
  {
    title: 'Chat Bot App',
    description:
      'An intelligent chatbot application powered by NLP that provides automated customer support and smart responses via a FastAPI backend.',
    image: '/portfolio/assets/chatbot.png',
    tags: ['Python', 'FastAPI', 'Flutter'],
    github: 'https://github.com/yasirmalik8',
    color: '#00D4FF',
  },
  {
    title: 'Emotion Detection Through Image',
    description:
      'An AI tool that analyzes facial features in static images to accurately identify human emotions such as happiness, sadness, and anger.',
    image: '/portfolio/assets/emotion.jpeg',
    tags: ['Python', 'OpenCV', 'Keras'],
    github: 'https://github.com/yasirmalik8',
    color: '#7F00FF',
  },
  {
    title: 'Finger Count Detection',
    description:
      'A hand tracking system that uses computer vision to detect hand landmarks and count the number of raised fingers in real-time.',
    image: '/portfolio/assets/finger.png',
    tags: ['Python', 'OpenCV', 'MediaPipe'],
    github: 'https://github.com/yasirmalik8',
    color: '#00D4FF',
  },
  {
    title: 'Real-Time Emotion Recognition',
    description:
      'A live video processing application that detects and displays facial expressions instantly using a webcam feed.',
    image: '/portfolio/assets/emotion.jpeg',
    tags: ['Python', 'TensorFlow', 'OpenCV'],
    github: 'https://github.com/yasirmalik8',
    color: '#7F00FF',
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32"
      style={{
        background:
          'radial-gradient(ellipse at 80% 20%, rgba(0, 212, 255, 0.04) 0%, transparent 60%), #050507',
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(180deg, #00D4FF, transparent)' }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00D4FF] text-sm uppercase tracking-[4px] font-medium mb-3">
            What I&apos;ve Built
          </p>
          <h2 className="section-heading text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, #7F00FF, #00D4FF)' }}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass border rounded-2xl overflow-hidden card-hover"
              style={{ borderColor: `${project.color}20` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background: `linear-gradient(to bottom, transparent 0%, rgba(5,5,7,0.8) 100%)`,
                  }}
                />
                {/* Color tint on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: project.color }}
                />
                {/* Links overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-white font-space text-base mb-2 group-hover:text-[#00D4FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: `${project.color}10`,
                        border: `1px solid ${project.color}25`,
                        color: project.color,
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

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yasirmalik8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm border border-white/10 hover:border-[#00D4FF]/30 glass hover:glow-cyan transition-all duration-300"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
