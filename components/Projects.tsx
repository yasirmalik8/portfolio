'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, Play } from 'lucide-react';

type FilterType = 'all' | 'ai' | 'mobile' | 'web';

const projects = [
  {
    title: 'Smyl – Relationship Growth App',
    description: 'Contributed as Junior AI Engineer. Built AI-driven features including personalized relationship insights, user behavior analysis, smart coaching recommendations, emotional tracking, and data-driven daily mission suggestions to boost user engagement.',
    image: '/portfolio/assets/smyl.jpg',
    tags: ['AI/ML', 'Python', 'NLP', 'Behavior Analysis', 'FastAPI'],
    github: 'https://github.com/yasirmalik8',
    live: 'https://play.google.com/store/apps/details?id=com.smylinc.smyl&pcampaignid=web_share',
    liveLabel: 'Play Store',
    color: '#F97316',
    badge: 'Tech Flairz',
    category: ['ai', 'mobile'],
  },
  {
    title: 'ADD Platform – AI Hub',
    description: 'An AI-powered platform integrating multiple intelligent modules including computer vision, NLP, and data analytics. Built to serve as a centralized hub for AI-driven features and tools with FastAPI backend and Flutter frontend.',
    image: '/portfolio/assets/agent.jpg',
    tags: ['Python', 'FastAPI', 'TensorFlow', 'Flutter', 'Computer Vision', 'NLP'],
    github: 'https://github.com/yasirmalik8',
    live: null,
    liveLabel: null,
    color: '#F59E0B',
    badge: 'Tech Flairz',
    category: ['ai'],
  },
  {
    title: 'Cab Booking Android App',
    description: 'A cross-platform ride-hailing application built with Flutter. Features real-time location tracking, driver matching, trip history, and in-app payments powered by Firebase. BS Final Year Capstone Project.',
    image: '/portfolio/assets/splash.jpg',
    tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Authentication'],
    github: 'https://github.com/yasirmalik8',
    live: null,
    liveLabel: null,
    color: '#F97316',
    badge: 'BS Final Year',
    category: ['mobile'],
  },
  {
    title: 'Object Detection System',
    description: 'Real-time object detection using YOLOv8 and OpenCV. Detects and classifies 80+ object categories from live webcam feed with bounding boxes and confidence scores.',
    image: '/portfolio/assets/object.jpg',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'NumPy', 'TensorFlow'],
    github: 'https://github.com/yasirmalik8',
    live: null,
    liveLabel: null,
    color: '#F59E0B',
    badge: null,
    category: ['ai'],
  },
  {
    title: 'AI Chat Bot',
    description: 'Conversational AI assistant powered by a fine-tuned language model with context-aware responses. Available as both a web interface and a Flutter mobile app with FastAPI backend.',
    image: '/portfolio/assets/chatbot.png',
    tags: ['Python', 'NLP', 'FastAPI', 'Flutter', 'LangChain'],
    github: 'https://github.com/yasirmalik8',
    live: null,
    liveLabel: null,
    color: '#F97316',
    badge: null,
    category: ['ai', 'mobile'],
  },
  {
    title: 'Emotion Detection System',
    description: 'Facial emotion recognition using CNN trained on FER-2013 dataset. Classifies 7 emotions (happy, sad, angry, surprised, fearful, disgusted, neutral) in real time from webcam feed.',
    image: '/portfolio/assets/emotion.jpeg',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Deep Learning'],
    github: 'https://github.com/yasirmalik8',
    live: null,
    liveLabel: null,
    color: '#F59E0B',
    badge: null,
    category: ['ai'],
  },
  {
    title: 'Finger Count Detection',
    description: 'Hand gesture recognition using MediaPipe and custom landmark logic. Counts raised fingers on both hands in real time for gesture-based control interfaces.',
    image: '/portfolio/assets/finger.png',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'Computer Vision'],
    github: 'https://github.com/yasirmalik8/Finger_Count',
    live: null,
    liveLabel: null,
    color: '#F97316',
    badge: null,
    category: ['ai'],
  },
  {
    title: 'Real-Time Emotion Analytics',
    description: 'Live emotion analysis dashboard for multiple faces simultaneously. Tracks emotional trends over time and exports session reports. Built with TensorFlow and a FastAPI backend using WebSockets.',
    image: '/portfolio/assets/emotion.jpeg',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'WebSocket', 'OpenCV'],
    github: 'https://github.com/yasirmalik8',
    live: null,
    liveLabel: null,
    color: '#F59E0B',
    badge: null,
    category: ['ai'],
  },
  {
    title: 'Fitness Tracker App',
    description: 'A Flutter fitness application featuring personalized workout plans, exercise logging, and visual progress monitoring. Designed a clean, responsive UI that makes it easy for users to follow routines and stay consistent with their health goals.',
    image: '/portfolio/assets/fitness.jpg',
    tags: ['Flutter', 'Dart', 'Firebase', 'GetX', 'UI/UX'],
    github: 'https://github.com/yasirmalik8',
    live: null,
    liveLabel: null,
    color: '#F97316',
    badge: 'Flutterxperts',
    category: ['mobile'],
  },
  {
    title: 'Cattle Farm Management App',
    description: 'A Flutter livestock management app that helps farmers track cattle records, health history, and daily farm activities. Built with a simple, intuitive interface and structured data handling to streamline farm operations.',
    image: '/portfolio/assets/cattle.png',
    tags: ['Flutter', 'Dart', 'SQLite', 'UI/UX'],
    github: 'https://github.com/yasirmalik8',
    live: null,
    liveLabel: null,
    color: '#F59E0B',
    badge: 'Flutterxperts',
    category: ['mobile'],
  },
  {
    title: 'Gesture Volume Controller',
    description: 'Hands-free system volume control using hand gestures detected through MediaPipe. The distance between thumb and index finger maps to system volume in real time.',
    image: '/portfolio/assets/volume.jpg',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'PyCaw'],
    github: 'https://github.com/yasirmalik8',
    live: null,
    liveLabel: null,
    color: '#F97316',
    badge: null,
    category: ['ai'],
  },
  {
    title: 'Video Object Detection Pipeline',
    description: 'Batch video processing pipeline that runs YOLOv8 object detection on uploaded videos, annotates frames with bounding boxes, and exports the processed output video with analytics summary.',
    image: '/portfolio/assets/object_video.jpg',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'FFmpeg'],
    github: 'https://github.com/yasirmalik8',
    live: null,
    liveLabel: null,
    color: '#F59E0B',
    badge: null,
    category: ['ai'],
  },
];

const filters: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'AI & ML', value: 'ai' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Web', value: 'web' },
];

export default function Projects() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-badge">Projects</span>
            <h2 className="section-heading mt-6">Featured Work</h2>
          </motion.div>
        </div>

        {/* Filter buttons */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(f => (
            <button key={f.value} onClick={() => setActiveFilter(f.value)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={activeFilter === f.value
                ? { background: 'linear-gradient(135deg, #F97316, #F59E0B)', color: '#fff' }
                : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }
              }>
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div key={project.title} layout
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="card-dark group overflow-hidden cursor-default flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl shrink-0">
                  {project.badge && (
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-semibold"
                      style={{ background: `${project.color}22`, border: `1px solid ${project.color}50`, color: project.color }}>
                      {project.badge}
                    </div>
                  )}
                  <Image src={project.image} alt={project.title} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110" unoptimized />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, transparent 20%, rgba(13,13,13,0.85) 100%)' }} />
                  {/* Hover buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                      onClick={e => e.stopPropagation()} aria-label="GitHub">
                      <Github size={16} />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                        onClick={e => e.stopPropagation()} aria-label={project.liveLabel || 'Live'}>
                        {project.liveLabel === 'Play Store' ? <Play size={16} /> : <ExternalLink size={16} />}
                      </a>
                    )}
                  </div>
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-white font-space text-sm mb-2 group-hover:text-[#F97316] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-4 line-clamp-3 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag text-[10px] py-0.5 px-2">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View GitHub */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }} className="text-center mt-12">
          <a href="https://github.com/yasirmalik8" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm hover:scale-105 transition-transform duration-300 hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
