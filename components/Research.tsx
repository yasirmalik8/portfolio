'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FlaskConical, BookOpen } from 'lucide-react';

export default function Research() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="research" className="relative py-24 lg:py-32 bg-[#111111]">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <span className="section-badge">Research</span>
          <h2 className="section-heading mt-6">Publications &amp; Research</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="card-dark rounded-2xl p-10 text-center">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)' }}>
              <FlaskConical size={36} className="text-[#F97316]" />
            </motion.div>
            <h3 className="text-xl font-bold font-space text-white mb-3">Research In Progress</h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-lg mx-auto mb-8">
              Research publications and academic contributions are currently in progress as part of my MS in AI at UET Lahore.
              Check back soon for papers, conference submissions, and research projects in Computer Vision and Generative AI.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Computer Vision', 'Generative AI', 'Deep Learning', 'NLP'].map(area => (
                <span key={area} className="tag flex items-center gap-1.5">
                  <BookOpen size={10} />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
