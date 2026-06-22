'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera / DeepLearning.AI',
    date: '2024',
    link: 'https://coursera.org/verify/HVSHNZZKW3LK',
    logo: '/portfolio/assets/coursera.png',
    color: '#F97316',
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'Coursera / DeepLearning.AI',
    date: '2024',
    link: 'https://coursera.org/verify/RBLYN2SBXQY4',
    logo: '/portfolio/assets/coursera.png',
    color: '#F59E0B',
  },
  {
    title: 'IBM AI Engineering Professional Certificate',
    issuer: 'IBM / Coursera',
    date: '2023',
    link: 'https://www.credly.com/go/MOhFbp96',
    logo: '/portfolio/assets/ibm.png',
    color: '#F97316',
  },
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'Coursera / IBM',
    date: '2023',
    link: 'https://coursera.org/verify/LW58WLT6ANBP',
    logo: '/portfolio/assets/coursera.png',
    color: '#F59E0B',
  },
  {
    title: 'Flutter & Dart — The Complete Guide',
    issuer: 'Udemy',
    date: '2022',
    link: 'https://coursera.org/verify/JVRVMT279TQR',
    logo: '/portfolio/assets/coursera.png',
    color: '#F97316',
  },
  {
    title: 'Web & Mobile App Development',
    issuer: 'NAVTTC — Government of Pakistan',
    date: '2021',
    link: null,
    logo: '/portfolio/assets/unarmand.png',
    color: '#F59E0B',
  },
  {
    title: 'Machine Learning, AI & Data Science',
    issuer: 'Pakistan Gov – Hunarmand Kamyab Jawan',
    date: '2025',
    link: null,
    logo: '/portfolio/assets/unarmand.png',
    color: '#F97316',
  },
];

function CertCard({ cert }: {
  cert: { title: string; issuer: string; date: string; link: string | null; logo: string; color: string }
}) {
  return (
    <div className="card-dark group p-5 h-full rounded-2xl cursor-pointer flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center shrink-0 bg-white/5 border border-white/10">
          <Image src={cert.logo} alt={cert.issuer} width={36} height={36} className="object-contain w-8 h-8" unoptimized />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/40 font-medium">{cert.date}</span>
          {cert.link && <ExternalLink size={13} className="text-white/25 group-hover:text-[#F97316] transition-colors" />}
        </div>
      </div>
      <h3 className="font-semibold text-white/85 text-sm leading-snug mb-2 group-hover:text-white transition-colors flex-1">
        {cert.title}
      </h3>
      <div className="flex items-center gap-2 mb-3">
        <Award size={12} style={{ color: cert.color }} />
        <span className="text-xs text-white/45">{cert.issuer}</span>
      </div>
      {cert.link ? (
        <div className="flex items-center gap-1.5 text-xs font-semibold mt-auto" style={{ color: cert.color }}>
          <ShieldCheck size={12} />
          <span>Verify Certificate</span>
          <ExternalLink size={10} />
        </div>
      ) : (
        <div className="flex items-center gap-1.5 text-xs font-medium mt-auto text-white/30">
          <ShieldCheck size={12} />
          <span>Government Certified</span>
        </div>
      )}
    </div>
  );
}

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="relative py-24 lg:py-32 bg-[#0D0D0D]">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="section-badge">Certifications</span>
          <h2 className="section-heading mt-6">My Credentials</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div key={cert.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }} className="h-full">
              {cert.link ? (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <CertCard cert={cert} />
                </a>
              ) : (
                <CertCard cert={cert} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
